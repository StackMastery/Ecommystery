import { DollarSign } from "lucide-react";

export default {
  name: "pricing",
  title: "Pricing",
  icon: DollarSign,
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "text",
    },
    {
      name: "des",
      title: "Description",
      type: "text",
    },
    {
      name: "pricings",
      title: "Pricings",
      type: "array",
      of: [
        {
          type: "object",
          name: "pricingPlan",
          title: "Pricing Plan",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "price",
              title: "Price",
              type: "string",
            },
            {
              name: "label",
              title: "Label",
              type: "string",
            },
            {
              name: "features",
              title: "Features",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              name: "isPopular",
              title: "Is Popular",
              type: "boolean",
              description: "Highlight this plan as popular",
            },
          ],
          preview: {
            select: {
              title: "title",
              price: "price",
              isPopular: "isPopular",
            },
            prepare({ title, price, isPopular }) {
              return {
                title: `${title} ${isPopular ? "⭐" : ""}`,
                subtitle: price,
              };
            },
          },
        },
      ],
    },
  ],
};
