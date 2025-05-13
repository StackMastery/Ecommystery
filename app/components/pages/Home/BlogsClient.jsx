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
  console.log(blogData);
  return (
    <div
      className={`bg-gradient-to-b flex flex-col justify-between p-8 to-white rounded-3xl ${
        index + 1 === 1
          ? "from-[#D4FFD1] rounded-tl-none"
          : index + 1 === 2
            ? "from-[#FACCD2]"
            : "from-[#FFD866] rounded-tr-none"
      }`}
    >
      <Image
        width={114}
        height={33}
        src={urlFor(blogData.brandLogo.asset).url()}
        alt={blogData.title}
        className="brightness-0"
      />
      <Link href={`/blog/${blogData.slug.current}`}>
        <AspectRatio
          className="overflow-hidden rounded-2xl my-5"
          ratio={16 / 16}
        >
          <Image
            className="w-full h-full hover:scale-110 transition-all"
            layout="fill"
            src={urlFor(blogData.thumbnail.asset)
              .width(400)
              .height(400)
              .blur()
              .url()}
            alt={blogData.title}
          />
        </AspectRatio>
      </Link>
      <Link href={`/blog/${blogData.slug.current}`}>
        <h2 className="text-3xl text-black font-semibold">{blogData.title}</h2>
        <br />
        <br />
        <button className="flex w-fit hover:scale-110 transition-all items-center font-medium gap-2 bg-[#2C2731] rounded-full px-5 py-3 text-white cursor-pointer">
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
      className={`bg-gradient-to-b w-full flex flex-col justify-between p-8 to-white rounded-3xl ${bgClass}`}
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
