import { Code, Hash, Image, Minus, Paperclip, YoutubeIcon } from "lucide-react";
import { FaGripLines } from "react-icons/fa6";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "blog",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
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
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "categoryBlog" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "timeToRead",
      title: "Time To Read - Min",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "brandLogo",
      title: "Brand Logo",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: { hotspot: true },
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "H5", value: "h5" },
            { title: "H6", value: "h6" },
            { title: "P", value: "normal" },
          ],
        },
        {
          type: "image",
          icon: Image,
          options: { hotspot: true },
        },
        {
          type: "code",
          title: "Code Block",
          icon: Code,
          options: {
            theme: "github",
          },
        },
        {
          type: "file",
          name: "attachment",
          title: "File Upload",
          icon: Paperclip,
        },
        {
          type: "object",
          name: "videoEmbed",
          title: "Video Embed",
          icon: YoutubeIcon,
          fields: [
            {
              name: "url",
              type: "url",
              title: "YouTube or Vimeo URL",
            },
          ],
        },
        {
          type: "object",
          name: "horizontalRule",
          title: "Divider",
          icon: Minus,
          fields: [{ name: "color", type: "string" }],
          preview: {
            prepare() {
              return { title: "Divider" };
            },
          },
        },
        {
          type: "object",
          name: "lineGap",
          icon: FaGripLines,
          title: "Br",
          fields: [{ name: "hidden", type: "string", hidden: true }],
          preview: {
            prepare() {
              return { title: "<br />" };
            },
          },
        },
      ],
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: "seoImage",
      title: "SEO Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
