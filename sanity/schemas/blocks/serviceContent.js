import {
  Code,
  Hash,
  Image,
  Minus,
  Paperclip,
  Star,
  YoutubeIcon,
} from "lucide-react";
import { FaGripLines } from "react-icons/fa6";
import { MdHeight } from "react-icons/md";

export default {
  name: "serviceContent",
  title: "Services Content",
  type: "array",
  of: [
    { type: "processGroup" },
    { type: "serviceData" },
    { type: "faqs" },
    { type: "contentBlock" },
    { type: "titleDes" },
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
    {
      type: "object",
      name: "lineHeight",
      icon: MdHeight,
      title: "Line Height",
      fields: [
        {
          name: "height",
          title: "Height (px)",
          type: "number",
        },
      ],
      preview: {
        select: {
          height: "height",
        },
        prepare({ height }) {
          return {
            title: `Line Height: ${height || "not set"}`,
          };
        },
      },
    },
    {
      type: "object",
      name: "gradRedBlue",
      icon: FaGripLines,
      title: "Grad Red Blue",
      fields: [
        {
          name: "hidden",
          type: "string",
          hidden: true,
        },
        {
          name: "color",
          type: "string",
          title: "Color",
          options: {
            list: [
              { title: "Red And Blue", value: "redBlur" },
              { title: "Purple", value: "purple" },
            ],
          },
        },
      ],
      preview: {
        prepare() {
          return { title: "Gradient" };
        },
      },
    },
    { type: "contentBlok2" },
    { type: "pricing" },
  ],
};
