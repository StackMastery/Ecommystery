import BlogCategories from "./_components/BlogCategories";
import Blogs from "./_components/Blogs";
import BlogPageHero from "./_components/Hero";

const BlogPage = () => {
  return (
    <>
      <BlogPageHero />
      <BlogCategories />
      <Blogs />
    </>
  );
};

export default BlogPage;
