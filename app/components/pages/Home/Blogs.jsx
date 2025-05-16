import Link from "next/link";
import BlogsClient, { BlogCard } from "./BlogsClient";
import { client } from "@/lib/sanity";
import { ArrowUpRight } from "lucide-react";

const Blogs = async () => {
  const query = `
  *[_type == "blog"]
  | order(publishedAt desc)[0...3] {
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

  const blogs = await client.fetch(query);

  return (
    <>
      <section className="section relative !z-50 pt-0 pb-20">
        <BlogsClient>
          <div className="w-full flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r w-fit from-pB via-pM to-pY">
              Latest{" "}
              <span className="font-light font-serif italic">Resources</span>
            </h2>
            <p className="text-center my-5 text-lg">
              Dive into our blog for actionable strategies, success stories,
              expert tips, <br className="max-[500px]:hidden" />
              and e-commerce inspiration.
            </p>
            <div className="grid grid-cols-12 w-full gap-5 mt-10">
              {blogs.map((blog, index) => (
                <BlogCard
                  blogData={blog}
                  index={index}
                  key={`blogs-${index}`}
                />
              ))}
            </div>
            <div className="flex w-full justify-center mt-10">
              <Link
                href="/blog"
                className="bg-gradient-to-b from-[#D4FFD1] uppercase to-white text-black font-semibold text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-2"
              >
                VIEW All Blogs <ArrowUpRight />
              </Link>
            </div>
          </div>
        </BlogsClient>
      </section>
    </>
  );
};

export default Blogs;
