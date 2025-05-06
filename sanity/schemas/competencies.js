export default {
  name: "competencies",
  title: "Competencies",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: (Rule) =>
        Rule.required().max(100, "Name must be less than 100 characters"),
    },

    {
      title: "Description",
      name: "description",
      type: "text",
      validation: (Rule) =>
        Rule.max(500, "Description must be less than 500 characters"),
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
