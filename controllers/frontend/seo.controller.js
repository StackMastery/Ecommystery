import { client } from "@/lib/sanity";
import { urlFor } from "@/sanity/lib/sanityImage";

export const fetchSEOBySlug = async (slug) => {
  const query = `*[_type == "seo" && slug.current == $slug][0]`;
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
          url: seo.image
            ? urlFor(seo?.image).width(1200).height(630).url()
            : `${process.env.NEXT_PUBLIC_SITE_URL}/api/og/seo?path=/${seo.slug.current === "/" ? "" : seo.slug.current}&title=${seo.title}&des=${seo.description}`,
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
