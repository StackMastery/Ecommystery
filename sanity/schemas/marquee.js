// /schemas/marquee.js
export default {
  name: "marquee",
  title: "Marquee",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      options: {
        sortable: true,
      },
    },
  ],
};
