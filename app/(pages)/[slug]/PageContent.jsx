"use client";

import { PortableText } from "next-sanity";
import { componentsSanity } from "../blog/[slug]/component";

export default function PageContent({ page }) {
  return <PortableText value={page?.content} components={componentsSanity} />;
}
