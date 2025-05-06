"use server";

import { client } from "@/lib/sanity";

export const fetchSEOBySlug = async (slug) => {
  const query = `*[_type == "seo" && slug.current == "${slug}"][0]`;

  const params = { slug };

  const seo = await client.fetch(query, params, { next: { revalidate: 10 } });

  if (!seo) {
    return {
      title: "Ecommystery",
    };
  }

  return {
    title: seo.title || "Ecommystery",
    description: seo.description || "",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${seo.slug.current}`,
    },
    openGraph: {
      title: seo.title || "Ecommystery",
      description: seo.description || "",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${seo.slug.current}`,
      siteName: "Ecommystery",
      images: [
        {
          url: seo.image,
          width: 800,
          height: 600,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title || "Ecommystery",
      description: seo.description || "",
    },
    robots: "index, follow",
  };
};
