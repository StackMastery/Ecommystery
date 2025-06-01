import { Text } from "lucide-react";

export default {
  name: "titleDes",
  title: "Title Description",
  icon: Text,
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().max(260),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required().max(500),
    },
  ],
};
