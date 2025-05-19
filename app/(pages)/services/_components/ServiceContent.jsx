"use client";

import { PortableText } from "next-sanity";
import { componentsSanity } from "../../blog/[slug]/component";

const ServiceContent = ({ value }) => {
  return <PortableText components={{ ...componentsSanity }} value={value} />;
};

export default ServiceContent;
