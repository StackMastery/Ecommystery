// schemas/page.js (Sanity schema for SEO)
export default {
  name: "seo",
  title: "SEO",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "SEO Title for the page",
      options: {
        maxLength: 60, // Limit the title to 60 characters
      },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "URL slug for the page",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      description: "SEO Description for the page",
      options: {
        maxLength: 160, // Limit the description to 160 characters (common SEO length)
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      description:
        "Image to display in search results (Open Graph, Twitter Card)",
    },
  ],
};
