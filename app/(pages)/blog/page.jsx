import { Suspense } from "react";
import BlogCategories from "./_components/BlogCategories";
import Blogs from "./_components/Blogs";
import BlogPageHero from "./_components/Hero";
import { fetchSEOBySlug } from "@/controllers/frontend/seo.controller";

export async function generateMetadata() {
  const seo = await fetchSEOBySlug("blog");
  return seo;
}

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
