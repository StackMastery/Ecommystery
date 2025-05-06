import { client } from "@/lib/sanity";

export const teamMembersData = async () => {
  const query = `*[_type == "teams"]{
    name,
    linkedIn,
    hobby,
    "image": image.asset->url
  }`;

  const data = await client.fetch(query);

  // Optional: if you want to split full names into arrays
  const team = data.map((member) => ({
    name: member.name.split(" "), // converts "ASHIQUR Rahaman" to ["ASHIQUR", "Rahaman"]
    linkedIn: member.linkedIn,
    hobby: member.hobby,
    image: member.image,
  }));

  return team;
};
