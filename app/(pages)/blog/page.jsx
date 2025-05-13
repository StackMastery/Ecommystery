import { Suspense } from "react";
import BlogCategories from "./_components/BlogCategories";
import Blogs from "./_components/Blogs";
import BlogPageHero from "./_components/Hero";

const BlogPage = () => {
  return (
    <Suspense>
      <BlogPageHero />
      <BlogCategories />
      <Suspense>
        <Blogs />
      </Suspense>
    </Suspense>
  );
};

export default BlogPage;
