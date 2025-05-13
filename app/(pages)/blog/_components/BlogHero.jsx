"use client";

import ImageLoader from "@/app/components/ui/ImageLoader";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { urlFor } from "@/sanity/lib/sanityImage";
import { motion } from "framer-motion";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const BlogHero = ({
  brand,
  title,
  category,
  publishedAt,
  timeToRead,
  thumbnail,
}) => {
  return (
    <>
      <section className="section z-10 relative">
        <div className="flex justify-center px-10 flex-col pt-52 pb-20 items-center w-full max-w-[1040px]">
          <div className="w-full flex flex-col gap-10 text-center items-center relative !z-[999]">
            <Image
              width={120}
              height={120}
              className="max-h-[40px]"
              src={urlFor(brand).width(120).url()}
              alt={title}
            />
            <h1 className="text-5xl md:text-6xl font-medium">{title}</h1>
            <div className="flex -mt-2 items-center font-light gap-4 gap-y-2 max-[506px]:flex-col justify-center text-current/70">
              <Link
                className="hover:underline"
                href={`/blog?category=${category.slug.current}`}
              >
                {category.title}
              </Link>
              <span className=" flex h-[5px] w-[5px] bg-white/50 rounded-full max-[506px]:hidden"></span>
              <span>{moment(publishedAt).format("LL")}</span>
              <span className=" flex h-[5px] w-[5px] bg-white/50 rounded-full  max-[506px]:hidden"></span>
              <span>
                {timeToRead}
                {timeToRead && " min read"}
              </span>
            </div>
            <AspectRatio
              className="overflow-hidden mt-10 rounded-2xl md:rounded-3xl"
              ratio={16 / 9}
            >
              <ImageLoader
                layout="fill"
                alt={title}
                src={urlFor(thumbnail).url()}
              />
            </AspectRatio>
          </div>
          <div className="max-w-[1440px] w-full flex justify-between absolute">
            <motion.span
              initial={{ scale: 0.3, translateY: -300, opacity: 0 }}
              whileInView={{ scale: 1, translateY: -80, opacity: 1 }}
              className="bg-[#721A917D] w-[400px] h-[500px]  blur-[150px] flex"
            />
            <motion.span
              initial={{ scale: 0.1, translateY: 200, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1, translateY: 10 }}
              className="bg-[#721A917D] w-[400px] h-[400px] blur-[150px] z-10"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogHero;
