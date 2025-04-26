"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
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

export const BlogCard = ({ blog, index }) => {
  return (
    <>
      <div
        className={`bg-gradient-to-b p-8 to-white rounded-xl ${
          index + 1 === 1
            ? "from-[#D4FFD1] rounded-tl-none"
            : index + 1 === 2
            ? "from-[#FACCD2]"
            : "from-[#FFD866] rounded-tr-none"
        }`}
      >
        <Image src={blog.brand} alt={blog.title} />
        <Link href={blog.link}>
          <AspectRatio
            className=" overflow-hidden rounded-2xl my-5"
            ratio={16 / 16}
          >
            <Image
              className="w-full h-full hover:scale-110 transition-all"
              height={300}
              width={300}
              src={blog.thumb}
              alt={blog.title}
            />
          </AspectRatio>
          <h2 className="text-3xl text-black font-semibold">{blog.title}</h2>
          <br />
          <br />
          <button className="flex hover:scale-110 transition-all items-center font-medium gap-2 bg-[#2C2731] rounded-full px-5 py-3 text-white cursor-pointer">
            Explore <ArrowUpRight />
          </button>
        </Link>
      </div>
    </>
  );
};
