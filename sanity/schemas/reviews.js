export default {
  name: "review",
  type: "document",
  title: "Review",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Author Name",
    },
    {
      name: "hobby",
      type: "string",
      title: "Hobby",
    },
    {
      name: "review",
      type: "text",
      title: "Review Text",
    },
    {
      name: "rating",
      type: "number",
      title: "Rating (out of 5)",
      validation: (Rule) => Rule.min(1).max(5),
    },
    {
      name: "aImage",
      type: "image",
      title: "Author Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "sourcePlatform",
      type: "string",
      title: "Review Source",
      options: {
        list: [
          { title: "Upwork", value: "upwork" },
          { title: "Clutch", value: "clutch" },
        ],
        layout: "radio", // Optional: "dropdown" or "radio"
      },
    },
  ],
};
