import { List } from "lucide-react";

export default {
  name: "processGroup",
  title: "Process Group",
  icon: List,
  type: "object",
  fields: [
    {
      name: "steps",
      title: "Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              title: "Icon",
              type: "image",
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            },
            {
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required().max(50),
            },
            {
              name: "description",
              title: "Description",
              type: "text",
              validation: (Rule) => Rule.required().max(120),
            },
          ],
          preview: {
            select: {
              title: "title",
              media: "icon",
            },
            prepare({ title, media }) {
              return {
                title: title,
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
        title: `Procees List Items ${title?.length}` || "Process Group",
      };
    },
  },
};
