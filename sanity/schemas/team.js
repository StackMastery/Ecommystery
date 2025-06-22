export default {
  name: "teams",
  title: "Teams",
  type: "document",
  fields: [
    {
      title: "Member Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "hobby",
      title: "Hobby",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: "Sales", value: "Sales" },
          { title: "Design", value: "Design" },
          { title: "Development", value: "Development" },
        ],
        layout: "dropdown",
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
  ],
};
