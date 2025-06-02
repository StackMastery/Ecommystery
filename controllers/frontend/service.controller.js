import { client } from "@/lib/sanity";

const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export async function getServiceDataBySlug(slug) {
  if (!slugRegex.test(slug)) {
    return null;
  }

  const query = `*[_type == "service" && slug.current == $slug][0]{
    title,
    slug,
    type->{title}, 
    description,
    cGrad,
    iGrad,
    sTitle,
    sDes,
    "sThumb": sThumb,
    content
  }`;

  try {
    const data = await client.fetch(
      query,
      { slug },
      { next: { revalidate: 10 } }
    );
    return data || null; // if no data, return null instead of undefined
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return null;
  }
}
