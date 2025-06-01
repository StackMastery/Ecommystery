"use client";

import { Button } from "@/components/ui/button";
import { useParsedStyle, useSplitTitleParts } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/sanityImage";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const ServiceData = ({ data }) => {
  const extractedStyle = useParsedStyle(data.hTitle);
  const parts = useSplitTitleParts(data.hTitle);

  return (
    <motion.section
      initial={{ y: 100, opacity: 0, filter: "blur(10px)" }}
      whileInView={{ y: 0, opacity: 100, filter: "blur(0px)" }}
      transition={{
        type: "tween",
        duration: 0.8,
        stiffness: 300,
        damping: 20,
      }}
      className="section z-50 relative"
    >
      <div className="w-full max-w-[1440px] flex flex-col items-center px-5 pb-20">
        <div className="w-full flex flex-col items-center gap-5 justify-center">
          <h2
            className="text-4xl text-center gap-1 font-serif italic"
            style={extractedStyle}
          >
            {parts.map((part, index) => {
              if (part.startsWith("[") && part.endsWith("]")) {
                const cleanText = part.slice(1, -1);
                return (
                  <span
                    key={index}
                    className="text-transparent pl-1 bg-gradient-to-r pb-1 font-semibold from-pM via-pY to-pY bg-clip-text font-familyN not-italic"
                  >
                    {cleanText}
                  </span>
                );
              }
              return <span key={index}>{part}</span>;
            })}
          </h2>
          <p
            className="text-center text-sm font-light"
            style={useParsedStyle(data.hDes)}
          >
            {useSplitTitleParts(data.hDes)}
          </p>
        </div>
        <div className="w-full flex justify-around absolute">
          <motion.span
            initial={{ scale: 0.1, translateY: 200, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, translateY: 10 }}
            className="bg-[#41013C]/50 -left-60 top-96  relative flex w-[700px] -mt-40 h-[700px] blur-[200px] z-10"
          />
          <motion.span
            initial={{ scale: 0.1, translateY: 200, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, translateY: 10 }}
            className="bg-[#12114F]/50 relative left-96 top-96 flex w-[900px] -mt-40 h-[900px] blur-[200px] z-10"
          />
        </div>
        <div className="w-full flex h-full max-w-[1440px] gap-x-24 gap-10 pt-20 flex-col md:flex-row relative !z-50">
          <div className="w-full md:w-6/12 flex flex-col gap-5">
            <h3 className="text-3xl font-medium">{data.title}</h3>
            <p className="text-sm font-light">{data.des}</p>
            <ol className="pb-5 list-disc ml-5">
              {data.list.map((item, index) => (
                <li
                  key={item._key}
                  className="text-sm font-light text-white/80 cursor-pointer  my-4 gap-2 items-center"
                >
                  {item.title}
                </li>
              ))}
            </ol>
          </div>
          <div className="w-full md:w-6/12 relative max-[768px]:h-[500px] flex rounded-2xl overflow-hidden">
            <Image
              src={urlFor(data.image).width(400).url()}
              alt={data.title}
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServiceData;
