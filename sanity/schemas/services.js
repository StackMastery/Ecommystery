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
      title: "Card Gredient",
      type: "string",
      validation: (Rule) =>
        Rule.required().custom((value) => {
          if (!value) return true;

          const gradientRegex = /^(linear|radial|conic)-gradient\s*\((.+)\)$/i;
          const isValid = gradientRegex.test(value.trim());

          return (
            isValid ||
            "Only valid CSS gradient values are allowed (e.g., 'linear-gradient(...)')"
          );
        }),
    },
    {
      name: "iGrad",
      title: "Icon Gredient",
      type: "string",
      validation: (Rule) =>
        Rule.required().custom((value) => {
          if (!value) return true;

          const gradientRegex = /^(linear|radial|conic)-gradient\s*\((.+)\)$/i;
          const isValid = gradientRegex.test(value.trim());

          return (
            isValid ||
            "Only valid CSS gradient values are allowed (e.g., 'linear-gradient(...)')"
          );
        }),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
