import { client } from "@/lib/sanity";

export const fetchReviews = async () => {
  const query = `*[_type == "review"] | order(_createdAt asc){
    _id,
    name,
    hobby,
    review,
    rating,
    sourcePlatform,
    "aImage": aImage.asset
  }`;

  const reviews = await client.fetch(query);
  return reviews;
};
