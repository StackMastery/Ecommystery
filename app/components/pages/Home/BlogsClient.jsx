"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";
import { urlFor } from "@/sanity/lib/sanityImage";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cardStyleByIndex } from "./ServiceCards";

const BlogsClient = ({ children }) => {
  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0, filter: "blur(10px)" }}
        whileInView={{ y: 0, opacity: 100, filter: "blur(0px)" }}
        transition={{
          type: "tween",
          duration: 0.8, // ← duration increases by index
          stiffness: 300,
          damping: 20,
        }}
        className="w-full max-w-[1440px] px-5 flex justify-center items-center flex-col"
      >
        {children}
      </motion.div>
    </>
  );
};

export default BlogsClient;

const colors = [
  "from-[#D4FFD1]",
  "from-[#FACCD2]",
  "from-[#FFD866] !bg-gradient-to-br",
  "from-[#FACFD5] !bg-gradient-to-tr",
  "from-[#FDE9DC]",
  "from-[#8DDCFE]/90 !bg-gradient-to-tr",
  "from-[#D1D9FF]/90 !bg-gradient-to-tr",
  "from-[#94FFF0]/90 !bg-gradient-to-tr",
  "from-[#A8B5FF]/90 !bg-gradient-to-tr",
];

const getClassByIndex = (index) => {
  return colors[index % colors?.length];
};

export const BlogCard = ({ index, blogData }) => {
  return (
    <div
      className={`bg-gradient-to-b flex flex-col p-6 sm:p-8 rounded-3xl transition-shadow hover:shadow-lg
    col-span-12 min-[450px]:col-span-6 md:col-span-4
${getClassByIndex(index)} to-white ${cardStyleByIndex[index]} 
${typeof length === "number" && index + 1 === length ? "!rounded-r-none" : ""} 
${typeof length === "number" && index + 1 === length - 1 ? "!rounded-l-none" : ""}
`}
    >
      {/* Logo */}
      <div className="h-[40px] flex items-center mb-4">
        <Image
          width={114}
          height={33}
          src={urlFor(blogData?.brandLogo.asset).height(33).url()}
          alt={blogData.title}
          className="max-w-[100px] sm:max-w-[114px] h-auto object-contain brightness-0"
        />
      </div>

      {/* Thumbnail */}
      <Link href={`/blog/${blogData.slug.current}`} className="mb-10">
        <AspectRatio ratio={1} className="rounded-2xl overflow-hidden">
          <Image
            src={urlFor(blogData.thumbnail.asset)
              .width(400)
              .height(400)
              .blur()
              .url()}
            alt={blogData.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            layout="fill"
          />
        </AspectRatio>
      </Link>

      {/* Title & Button */}
      <div className="mt-auto flex flex-col gap-10">
        <Link href={`/blog/${blogData.slug.current}`}>
          <h2 className="text-2xl md:text-[28px] font-semibold text-black leading-8">
            {blogData.title?.slice(0, 49)}
            {blogData.title?.length > 49 && "..."}
          </h2>
        </Link>

        <Link href={`/blog/${blogData.slug.current}`}>
          <button className="inline-flex cursor-pointer items-center gap-2 bg-[#2C2731] text-white text-sm md:text-base font-medium px-4 py-2 md:px-5 md:py-3 rounded-full transition-transform hover:scale-105">
            Explore <ArrowUpRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export const BlogCardSkeleton = ({ index }) => {
  const bgClass =
    index + 1 === 1
      ? "from-[#D4FFD1] rounded-tl-none"
      : index + 1 === 2
        ? "from-[#FACCD2]"
        : "from-[#FFD866] rounded-tr-none";

  return (
    <div
      className={`bg-gradient-to-b col-span-12 min-[450px]:col-span-6 md:col-span-4 w-full flex flex-col justify-between p-8 to-white rounded-3xl ${bgClass}`}
    >
      {/* Logo */}
      <Skeleton className="w-[114px] h-[33px] brightness-100" />

      {/* Image */}
      <div className="my-5 overflow-hidden rounded-2xl aspect-[1/1]">
        <Skeleton className="w-full h-full" />
      </div>

      {/* Title + Button */}
      <div>
        <Skeleton className="h-8 w-3/4 mb-4" />
        <Skeleton className="h-8 w-2/5 mb-8" />
        <div className="w-fit">
          <Skeleton className="h-11 w-[120px] rounded-full" />
        </div>
      </div>
    </div>
  );
};
