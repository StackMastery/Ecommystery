import { Suspense } from "react";
import BlogCategories from "./_components/BlogCategories";
import Blogs from "./_components/Blogs";
import BlogPageHero from "./_components/Hero";

const BlogPage = () => {
  return (
    <>
      <BlogPageHero />
      <Suspense
        fallback={
          <>
            <section className="section justify-center min-h-[858px] items-center"></section>
          </>
        }
      >
        <BlogCategories />
        <Blogs />
      </Suspense>
    </>
  );
};

export default BlogPage;
