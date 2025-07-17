import { defineType, defineField } from "sanity";

export default defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    // SEO Group
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Meta Title",
          type: "string",
        },
        {
          name: "description",
          title: "Meta Description",
          type: "text",
        },
        {
          name: "image",
          title: "Meta Image",
          type: "image",
          options: { hotspot: true },
        },
      ],
    }),
    {
      name: "content",
      title: "Rich Content",
      type: "serviceContent",
      validation: (Rule) => Rule.required(),
    },
  ],
});
