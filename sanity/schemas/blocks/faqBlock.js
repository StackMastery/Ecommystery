import { FaQ } from "react-icons/fa6";

export default {
  name: "faqs",
  title: "Faqs",
  icon: FaQ,
  type: "object",
  fields: [
    {
      name: "faqs",
      title: "Faqs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Question",
              type: "string",
              validation: (Rule) => Rule.required().max(260),
            },
            {
              name: "description",
              title: "Answare",
              type: "text",
              validation: (Rule) => Rule.required().max(500),
            },
          ],
          preview: {
            select: {
              title: "title",
            },
            prepare({ title, media }) {
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
    select: {
      title: "faqs",
    },
    prepare({ title }) {
      return {
        title: `Faqs ${title?.length}` || "Faqs",
      };
    },
  },
};
