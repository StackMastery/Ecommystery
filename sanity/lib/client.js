import { createClient } from "next-sanity";

import { dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-05-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});
