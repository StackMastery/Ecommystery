"use client";

import ImageLoader from "@/app/components/ui/ImageLoader";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/sanityImage";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { motion } from "framer-motion";

import Link from "next/link";

const ServiceDetailsHero = ({ data }) => {
  return (
    <>
      <section className="section z-10 relative">
        <div className="flex justify-center px-10 flex-col pt-52 pb-20 items-center w-full max-w-[1040px]">
          <div className="w-full flex flex-col gap-10 text-center items-center relative !z-[999]">
            <motion.div
              initial={{ translateY: 100, opacity: 0, filter: "blur(10px)" }}
              whileInView={{ translateY: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{
                type: "tween",
                duration: 0.8,
                stiffness: 300,
                damping: 20,
              }}
              className="flex flex-col gap-5 items-center"
            >
              <span className="bg-white/5 w-fit px-5 py-2 rounded-full">
                {data?.title}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium max-w-[750px]">
                {data.sTitle}
              </h1>
              <p className="font-light max-w-[539px] text-center">
                {data.sDes}
              </p>
              <Link href={`/contact?service=${data.slug.current}`}>
                <Button>CONTACT US</Button>
              </Link>
              <AspectRatio
                className="overflow-hidden mt-5 rounded-xl md:rounded-3xl"
                ratio={16 / 9}
              >
                <ImageLoader
                  alt={data.title}
                  layout="fill"
                  src={urlFor(data?.sThumb.asset).width(600).url()}
                />
              </AspectRatio>
            </motion.div>
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

export default ServiceDetailsHero;
