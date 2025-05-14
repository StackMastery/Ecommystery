"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";
import { urlFor } from "@/sanity/lib/sanityImage";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

export const BlogCard = ({ index, blogData }) => {
  return (
    <div
      className={`bg-gradient-to-b flex flex-col justify-between p-6 sm:p-8 rounded-3xl transition-shadow hover:shadow-lg
        col-span-12 min-[450px]:col-span-6 md:col-span-4
        ${
          index + 1 === 1
            ? "from-[#D4FFD1] rounded-tl-none"
            : index + 1 === 2
              ? "from-[#FACCD2]"
              : "from-[#FFD866] rounded-tr-none"
        } to-white`}
    >
      <Image
        width={114}
        height={33}
        src={urlFor(blogData.brandLogo.asset).url()}
        alt={blogData.title}
        className="max-w-[100px] sm:max-w-[114px] h-auto brightness-0 object-contain"
      />

      <Link href={`/blog/${blogData.slug.current}`} className="my-4">
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

      <Link href={`/blog/${blogData.slug.current}`} className="mt-4 space-y-10">
        <h2 className="text-xl md:text-3xl font-semibold text-black leading-8">
          {blogData.title}
        </h2>

        <button className="inline-flex items-center gap-2 bg-[#2C2731] text-white text-sm md:text-base font-medium px-4 py-2 md:px-5 md:py-3 rounded-full transition-transform hover:scale-105">
          Explore <ArrowUpRight />
        </button>
      </Link>
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
