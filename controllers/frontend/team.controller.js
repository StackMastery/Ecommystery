import { client } from "@/lib/sanity";

export const teamMembersData = async () => {
  const query = `*[_type == "teams"]{
    name,
    linkedIn,
    hobby,
    "image": image.asset->url
  }`;

  const data = await client.fetch(query);

  const team = data.map((member) => ({
    name: member.name.split(" "),
    linkedIn: member.linkedIn,
    hobby: member.hobby,
    image: member.image,
  }));

  return team;
};
