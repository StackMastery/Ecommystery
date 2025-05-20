import BrandKlasha from "../../public/blog/brands/klasha.svg";
import BrandBitbye from "../../public/blog/brands/bitbye.svg";

// Thumb
import Thumb1 from "../../public/blog/thumb/1.png";
import Thumb2 from "../../public/blog/thumb/2.png";
import Thumb3 from "../../public/blog/thumb/3.png";
import { client } from "@/sanity/lib/client";

export const getBlogDetails = async (slug) => {
  try {
    const blog = await client.fetch(
      `*[_type == "blog" && slug.current == $slug][0]{
        ...,
        category -> {
          title,
          slug
        }
      }`,
      { slug },
      { next: { revalidate: 10 } }
    );
    return blog;
  } catch (err) {
    return null;
  }
};

export const getAllCategories = async () => {
  try {
    const categories = await client.fetch(
      `*[_type == "categoryBlog"]{
        title,
        slug {
          current
        }
      }`,
      { next: { revalidate: 10 } }
    );
    return categories;
  } catch (err) {
    console.error("Error fetching categories:", err);
    return null;
  }
};
