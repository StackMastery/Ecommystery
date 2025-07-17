import { client } from "@/lib/sanity";

export const getDynamicPageData = async (slug) => {
  try {
    const page = await client.fetch(
      `*[_type == "page" && slug.current == $slug][0]{
        ...,
        
      }`,
      { slug },
      { next: { revalidate: 10 } }
    );
    return page;
  } catch (err) {
    return null;
  }
};
