import { List } from "lucide-react";

export default {
  name: "processGroup",
  title: "Process Group",
  icon: List,
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "text",
      validation: (Rule) => Rule.required().max(250),
    },
    {
      name: "des",
      title: "Description",
      type: "text",
    },
    {
      name: "label",
      title: "Show Label",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "position",
      title: "Position",
      type: "string",
      options: {
        list: [
          { title: "Start", value: "start" },
          { title: "Center", value: "center" },
          { title: "End", value: "end" },
        ],
        layout: "dropdown",
      },
    },

    {
      name: "isBgShow",
      title: "Bg Show",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "steps",
      title: "Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required().max(160),
            },

            {
              name: "description",
              title: "Description",
              type: "text",
              validation: (Rule) => Rule.required().max(500),
            },
            {
              name: "icon",
              title: "Icon Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
          ],
          preview: {
            select: {
              title: "title",
              media: "icon",
            },
            prepare({ title, media }) {
              return {
                title,
                media,
              };
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "steps",
    },
    prepare({ title }) {
      return {
        title: `Process List Items ${title?.length}` || "Process Group",
      };
    },
  },
};
