"use client";
import { BrandMarqueeData } from "@/lib/data/BrandMarqueeData";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
const BrandMarquee = ({ gred = true }) => {
  return (
    <>
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
        <h2 className="mb-5 font-medium text-lg">Trusted by top brands</h2>
        <div className="max-w-[1040px] w-full gap-2 flex items-center flex-col justify-center">
          <Marquee gradientColor="black">
            {BrandMarqueeData.map((brand, index) => (
              <div className="flex items-center ">
                <Image
                  className="mx-10 cursor-pointer hover:brightness-150 transition-all"
                  src={brand.src}
                  alt={brand.alt}
                />{" "}
                <span className="h-4 w-[1px] rounded-full flex bg-white/50"></span>
              </div>
            ))}
            {BrandMarqueeData.map((brand, index) => (
              <div className="flex items-center ">
                <Image
                  className="mx-10 cursor-pointer hover:brightness-150 transition-all"
                  src={brand.src}
                  alt={brand.alt}
                />{" "}
                <span className="h-4 w-[1px] rounded-full flex bg-white/50"></span>
              </div>
            ))}{" "}
          </Marquee>
          <Marquee gradientColor="black" direction="right">
            {BrandMarqueeData.map((brand, index) => (
              <div className="flex items-center ">
                <Image
                  className="mx-10 cursor-pointer hover:brightness-150 transition-all"
                  src={brand.src}
                  alt={brand.alt}
                />{" "}
                <span className="h-4 w-[1px] rounded-full flex bg-white"></span>
              </div>
            ))}
            {BrandMarqueeData.map((brand, index) => (
              <div className="flex items-center ">
                <Image
                  className="mx-10 cursor-pointer hover:brightness-150 transition-all"
                  src={brand.src}
                  alt={brand.alt}
                />{" "}
                <span className="h-4 w-[1px] rounded-full flex bg-white"></span>
              </div>
            ))}
          </Marquee>
        </div>
      </motion.section>
    </>
  );
};

export default BrandMarquee;
