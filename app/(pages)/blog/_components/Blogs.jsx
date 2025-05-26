"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import InfiniteScroll from "react-infinite-scroll-component";
import { client } from "@/lib/sanity";
import {
  BlogCard,
  BlogCardSkeleton,
} from "@/app/components/pages/Home/BlogsClient";
import Image from "next/image";
import SearchFoundImg from "../../../../public/img/search.png";

const PAGE_SIZE = 6;

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";

  const buildQuery = (pageIndex) => {
    const start = pageIndex * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    const filters = [`defined(title)`];

    if (search) filters.push(`title match "${search}*"`);
    if (category) filters.push(`category->slug.current == "${category}"`);

    const query = `
  *[_type == "blog" && ${filters.join(" && ")}]
  | order(publishedAt desc) [${start}...${end}] {
    _id,
    title,
    slug,
    publishedAt,
    timeToRead,
    brandLogo,
    category->{title, slug, icon{asset->{url}}},
    thumbnail,
  }
`;

    return query;
  };

  const fetchBlogs = async (pageIndex) => {
    const query = buildQuery(pageIndex);
    const newBlogs = await client.fetch(query);

    if (newBlogs?.length < PAGE_SIZE) setHasMore(false);
    if (pageIndex === 0) {
      setBlogs(newBlogs);
    } else {
      setBlogs((prev) => [...prev, ...newBlogs]);
    }
  };

  useEffect(() => {
    setPage(0);
    setHasMore(true);
    fetchBlogs(0);
  }, [search, category]);

  const fetchMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchBlogs(nextPage);
  };

  return (
    <section className="section pt-5 pb-20">
      <InfiniteScroll
        dataLength={blogs?.length}
        className="max-w-[1440px] w-full grid grid-cols-12  justify-center gap-5 px-5"
        next={fetchMore}
        hasMore={hasMore}
        scrollThreshold={0.3}
        endMessage={
          <div className="col-span-12 w-full">
            {blogs?.length > 0 ? (
              <></>
            ) : (
              <div className="w-full flex justify-center py-20 gap-10 flex-col items-center">
                <Image
                  width={160}
                  src={SearchFoundImg}
                  alt="Search Not Found"
                />
                <div className="space-y-5 text-center max-w-[500px]">
                  <h2 className="text-3xl">Sorry we couldn’t found any post</h2>
                  <p className="text-current/70 font-light">
                    Sorry, we couldn’t find any blog posts matching your current
                    query and filters. Please try adjusting your search terms or
                    removing some filters to explore other available content.
                  </p>
                </div>
              </div>
            )}
          </div>
        }
        loader={
          <>
            {Array.from({ length: 3 }).map((_, index) => (
              <BlogCardSkeleton key={`blog-loader-${index}`} index={index} />
            ))}
          </>
        }
      >
        {blogs.map((blog, index) => (
          <BlogCard blogData={blog} key={blog.slug.current} index={index} />
        ))}
      </InfiniteScroll>
    </section>
  );
};

export default Blogs;
