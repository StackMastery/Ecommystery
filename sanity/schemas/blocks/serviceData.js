import { ChartNoAxesColumnIncreasing } from "lucide-react";

export default {
  name: "serviceData",
  title: "Service Data",
  icon: ChartNoAxesColumnIncreasing,
  type: "object",
  fields: [
    {
      name: "hTitle",
      title: "Heading Title",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "hDes",
      title: "Heading Description",
      type: "text",
      validation: (Rule) => Rule.required().max(160),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().max(60),
    },
    {
      name: "des",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.required().max(300),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "list",
      title: "List",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required().max(50),
            },
          ],
          preview: {
            select: {
              title: "title",
            },
            prepare({ title }) {
              return {
                title: title,
              };
            },
          },
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Service Data`,
      };
    },
  },
};
