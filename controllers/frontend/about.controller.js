"use server";

import { client } from "@/lib/sanity";

export const competenciesData = async () => {
  const query = `*[_type == "competencies"]{
    name,
    description,
    "image": image.asset->url
  }`;

  // Set cache revalidation to 60 seconds
  const data = await client.fetch(query, {}, { next: { revalidate: 10 } });
  return data;
};

export async function getMarqueeData() {
  const query = `*[_type == "marquee"]{
    title,
    images
  }`;

  const data = await client.fetch(query);
  return data;
}
