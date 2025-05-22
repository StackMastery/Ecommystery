export default {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .max(60)
          .warning("Recommended under 60 characters for SEO."),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "type",
      title: "Type",
      type: "reference",
      to: [{ type: "servicesType" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) =>
        Rule.required()
          .max(160)
          .warning("Recommended under 160 characters for SEO."),
    },
    {
      name: "cGrad",
      title: "Card Gradient",
      type: "string",
      validation: (Rule) =>
        Rule.required().custom((value) => {
          if (!value) return true;
          const gradientRegex = /^(linear|radial|conic)-gradient\s*\((.+)\)$/i;
          return (
            gradientRegex.test(value.trim()) ||
            "Only valid CSS gradient values are allowed (e.g., 'linear-gradient(...)')"
          );
        }),
    },
    {
      name: "iGrad",
      title: "Icon Gradient",
      type: "string",
      validation: (Rule) =>
        Rule.required().custom((value) => {
          if (!value) return true;
          const gradientRegex = /^(linear|radial|conic)-gradient\s*\((.+)\)$/i;
          return (
            gradientRegex.test(value.trim()) ||
            "Only valid CSS gradient values are allowed (e.g., 'linear-gradient(...)')"
          );
        }),
    },
    {
      name: "image",
      title: "Service Icon",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "sTitle",
      title: "Service Title",
      type: "string",
      validation: (Rule) => Rule.required().max(60),
    },
    {
      name: "sDes",
      title: "Service Description",
      type: "text",
      validation: (Rule) => Rule.required().max(160),
    },
    {
      name: "sThumb",
      title: "Service Thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "content",
      title: "Rich Content",
      type: "serviceContent",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
  ],
};
