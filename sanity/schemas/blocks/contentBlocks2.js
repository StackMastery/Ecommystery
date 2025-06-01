export default {
  type: "object",
  name: "contentBlok2",
  title: "Content Block 2",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "features",
      type: "array",
      title: "Feature List",
      of: [
        {
          type: "object",
          name: "feature",
          fields: [
            { name: "title", type: "string", title: "Feature Title" },
            { name: "description", type: "text", title: "Feature Description" },
          ],
          preview: {
            select: {
              title: "title",
            },
          },
        },
      ],
    },
  ],
};
