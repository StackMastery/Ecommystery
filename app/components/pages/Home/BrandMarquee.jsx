"use client";
import { BrandMarqueeData } from "@/lib/data/BrandMarqueeData";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const BrandMarquee = () => {
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
      <h2 className="mb-5 font-medium text-lg">Trusted by top brands</h2>

      <div className="max-w-[1240px] w-full gap-2 flex flex-col items-center justify-center">
        <div className="relative w-full overflow-hidden mask-fade">
          <Marquee gradient={false}>
            {[...BrandMarqueeData, ...BrandMarqueeData].map((brand, index) => (
              <div key={index} className="flex items-center">
                <Image
                  className="mx-10 cursor-pointer hover:brightness-150 transition-all"
                  src={brand.src}
                  alt={brand.alt}
                />
                <span className="h-4 w-[1px] rounded-full flex bg-white/50"></span>
              </div>
            ))}
          </Marquee>
        </div>

        <div className="relative w-full overflow-hidden mask-fade">
          <Marquee gradient={false} direction="right">
            {[...BrandMarqueeData, ...BrandMarqueeData].map((brand, index) => (
              <div key={index} className="flex items-center">
                <Image
                  className="mx-10 cursor-pointer hover:brightness-150 transition-all"
                  src={brand.src}
                  alt={brand.alt}
                />
                <span className="h-4 w-[1px] rounded-full flex bg-white/50"></span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </motion.section>
  );
};

export default BrandMarquee;
