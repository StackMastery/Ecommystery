"use client";
import { BrandMarqueeData } from "@/lib/data/BrandMarqueeData";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/lib/sanityImage";

const BrandMarqueeClient = ({ data }) => {
  return (
    <motion.section
      initial={{ opacity: 0, filter: "blur(10px)", y: 150 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{
        type: "tween",
        duration: 0.8,
        stiffness: 300,
        damping: 20,
      }}
      className="section h-40 flex-col justify-center items-center"
    >
      <h2 className="mb-8 font-medium text-lg">Trusted by top brands</h2>

      <div className="max-w-[1240px] w-full gap-5 flex flex-col items-center justify-center">
        {data.map((marquee, index) => (
          <div
            key={index}
            className="relative w-full overflow-hidden mask-fade"
          >
            <Marquee gradient={false}>
              {[
                ...marquee.images,
                ...(marquee.images.length < 12 ? marquee.images : []),
              ].map((brand, i) => (
                <div
                  key={`${brand._key}-${Math.random()}`}
                  className="flex items-center"
                >
                  <Image
                    width={100}
                    height={100}
                    className="mx-16 cursor-pointer max-h-[50px] w-auto transition-all filter invert brightness-0 opacity-70 hover:opacity-50"
                    src={urlFor(brand).width(100).url()}
                    alt={`${brand._key}-${Math.random()}`}
                  />
                  <span className="h-6 w-[1px] rounded-full flex bg-white/50"></span>
                </div>
              ))}
            </Marquee>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default BrandMarqueeClient;
