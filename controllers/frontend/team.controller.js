"use server";

import { client } from "@/lib/sanity";

export const teamMembersData = async () => {
  const query = `*[_type == "teams"]{
    name,
    linkedIn,
    hobby,
    "image": image.asset->url
  }`;

  // Set cache revalidation to 60 seconds
  const data = await client.fetch(query, {}, { next: { revalidate: 10 } });

  const team = data.map((member) => ({
    name: member.name.split(" "),
    linkedIn: member.linkedIn,
    hobby: member.hobby,
    image: member.image,
  }));

  return team;
};
