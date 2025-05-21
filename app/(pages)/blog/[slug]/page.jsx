import { getBlogDetails } from "@/controllers/frontend/blog.controller";
import BlogHero from "../_components/BlogHero";
import BlogConent from "../_components/BlogConent";
import NotFound from "@/app/not-found";
import { urlFor } from "@/sanity/lib/sanityImage";

export const generateMetadata = async ({ params }) => {
  const blog = await getBlogDetails(params?.slug);

  return {
    title: blog?.seoTitle || blog?.title,
    description: blog?.seoDescription || "",
    openGraph: {
      title: blog?.seoTitle || blog?.title,
      description: blog?.seoDescription || "",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${params?.slug}`,
      images: [
        {
          url: urlFor(blog?.seoImage?.asset || blog?.thumbnail?.asset)
            .width(800)
            .height(600)
            .url(),
          width: 800,
          height: 600,
          alt: blog?.seoTitle || blog?.title,
        },
      ],
      siteName: process.env.NEXT_PUBLIC_SITE_NAME,
    },
  };
};

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
