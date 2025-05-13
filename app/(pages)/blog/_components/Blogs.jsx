"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import InfiniteScroll from "react-infinite-scroll-component";
import { client } from "@/lib/sanity";
import {
  BlogCard,
  BlogCardSkeleton,
} from "@/app/components/pages/Home/BlogsClient";

const PAGE_SIZE = 3;

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

    if (newBlogs.length < PAGE_SIZE) setHasMore(false);
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
        dataLength={blogs.length}
        className="max-w-[1440px] w-full"
        next={fetchMore}
        hasMore={hasMore}
        scrollThreshold={0.5}
        loader={
          <>
            <div className="w-full grid grid-cols-3 justify-center gap-5 px-5">
              {Array.from({ length: 3 }).map((_, index) => (
                <BlogCardSkeleton key={`blog-loader-${index}`} index={index} />
              ))}
            </div>
          </>
        }
      >
        <div className="w-full grid grid-cols-3 justify-center gap-5 px-5">
          {blogs.map((blog, index) => (
            <BlogCard blogData={blog} key={blog.slug.current} index={index} />
          ))}
        </div>
      </InfiniteScroll>
    </section>
  );
};

export default Blogs;
