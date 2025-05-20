import { client } from "@/lib/sanity";

export async function getServiceDataBySlug(slug) {
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

  return await client.fetch(query, { slug }, { next: { revalidate: 10 } });
}
