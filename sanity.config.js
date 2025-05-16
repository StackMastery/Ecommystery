"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\eadmin\[[...tool]]\page.jsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";
import { codeInput } from "@sanity/code-input";
import { simplerColorInput } from "sanity-plugin-simpler-color-input";

export default defineConfig({
  basePath: "/eadmin",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    simplerColorInput({
      // Note: These are all optional
      defaultColorFormat: "rgba",
      defaultColorList: [
        { label: "Blue", value: "#226FFF" },
        { label: "Purple", value: "#DE22FF" },
        { label: "Yellow", value: "#FFE11B" },
        { label: "Custom...", value: "custom" },
      ],
      enableSearch: true,
    }),
    codeInput(),
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
