import { getBlogsForHomePage } from "@/controllers/frontend/blog.controller";
import BlogsClient, { BlogCard } from "./BlogsClient";

const Blogs = async () => {
  const { blogs } = await getBlogsForHomePage();

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-5 mt-10">
              {blogs.map((blog, index) => (
                <BlogCard blog={blog} index={index} key={`blogs-${index}`} />
              ))}
            </div>
          </div>
        </BlogsClient>
      </section>
    </>
  );
};

export default Blogs;
