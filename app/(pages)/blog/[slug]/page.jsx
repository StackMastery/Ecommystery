import { getBlogDetails } from "@/controllers/frontend/blog.controller";
import BlogHero from "../_components/BlogHero";
import BlogConent from "../_components/BlogConent";
import NotFound from "@/app/not-found";

const BlogDetailsPage = async ({ params }) => {
  const blog = await getBlogDetails(params?.slug);

  if (!blog) {
    return <NotFound />;
  }

  return (
    <>
      <BlogHero
        title={blog.title}
        brand={blog.brandLogo}
        publishedAt={blog.publishedAt}
        timeToRead={blog.timeToRead}
        category={blog.category}
        thumbnail={blog.thumbnail}
      />
      <BlogConent blog={blog} />
    </>
  );
};

export default BlogDetailsPage;
