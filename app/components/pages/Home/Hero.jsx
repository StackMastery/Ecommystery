"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import AmazonIcon from "../../../../public/icons/amazon.svg";
import WallMart from "../../../../public/icons/wallmart.svg";
import Shopify from "../../../../public/icons/shopify.svg";
import Clutch from "../../../../public/icons/clutch.svg";
import Google from "../../../../public/icons/google.svg";
import { Star } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  return (
    <>
      <section className="section">
        <div className="flex justify-center px-10 flex-col py-40 items-center w-full max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="max-w-[580px] z-50 text-center"
          >
            <div className="mb-6 w-full flex justify-center items-center flex-col gap-2">
              <motion.div
                initial={{ translateY: -50, opacity: 0 }}
                animate={{ translateY: 0, opacity: 100 }}
                transition={{
                  delay: 0.6,
                  duration: 0.4,
                  ease: "easeInOut",
                }}
              >
                <div className="flex w-full items-center justify-center flex-col gap-2">
                  <div className="flex items-center -space-x-2">
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 0.9 }}
                      transition={{
                        delay: 1,
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                      className="cursor-pointer bg-white p-[6px] rounded-full h-[32px] flex justify-center items-center w-[32px]"
                    >
                      <Image src={Clutch} alt="Clutch" />
                    </motion.span>
                    <motion.span
                      initial={{ translateX: -24, opacity: 0 }}
                      animate={{ translateX: 0, opacity: 100 }}
                      transition={{
                        delay: 1.4,
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                      className=" cursor-pointer scale-[0.9] bg-white p-[6px] rounded-full h-[32px] flex justify-center items-center w-[32px]"
                    >
                      <Image src={Google} alt="Google" />
                    </motion.span>
                  </div>
                  <span className="flex items-center gap-1">
                    5.0{" "}
                    <span className="flex items-center">
                      <Star
                        size={18}
                        className="text-[#FFCB33] fill-[#FFCB33]"
                      />
                      <Star
                        size={18}
                        className="text-[#FFCB33] fill-[#FFCB33]"
                      />
                      <Star
                        size={18}
                        className="text-[#FFCB33] fill-[#FFCB33]"
                      />
                      <Star
                        size={18}
                        className="text-[#FFCB33] fill-[#FFCB33]"
                      />
                      <Star
                        size={18}
                        className="text-[#FFCB33] fill-[#FFCB33]"
                      />
                    </span>
                  </span>
                </div>
              </motion.div>
              <motion.h3
                initial={{ filter: "blur(5px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 100 }}
                transition={{
                  delay: 1,
                  duration: 0.5,
                }}
              >
                Leading E-commerce Agency
              </motion.h3>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Your <span className={` ${gredTextClass}`}>E-Commerce</span>{" "}
              Success{" "}
              <span className="flex text-center items-center gap-2 justify-center mt-3">
                Starts{" "}
                <div className="flex -space-x-2 cursor-pointer">
                  <IconButton icon={AmazonIcon} alt={"Amazon"} />
                  <IconButton icon={WallMart} alt={"Wallmart"} />

                  <IconButton size={28} icon={Shopify} alt={"Shopify"} />
                </div>
                <span className={`${gredTextClass}`}>Here</span>
              </span>
            </h2>
          </motion.div>
          <div className="max-w-[1440px] w-full flex justify-between absolute">
            <motion.span
              initial={{ scale: 0.3, translateY: -300, opacity: 0 }}
              animate={{ scale: 1, translateY: -80, opacity: 1 }}
              className="bg-[#721A917D] w-[400px] h-[500px]  blur-[150px] flex"
            />
            <motion.span
              initial={{ scale: 0.1, translateY: 200, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, translateY: 64 }}
              className="bg-[#721A917D] w-[400px] h-[500px]  blur-[150px] flex"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

const gredTextClass =
  "bg-gradient-to-r from-[#226FFF] bg-clip-text via-[#DE22FF] pr-1 to-[#FFE11B] font-serif font-light italic text-transparent ";

const tooltipVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(8px)",
    transition: { duration: 0.2, ease: "easeOut" },
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.3, ease: "easeInOut", delay: 0.2 },
  },
};

const IconButton = ({ size = 25, icon, alt }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex justify-center items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute z-10 top-full mt-2 text-xs pointer-events-none flex flex-col items-center"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={tooltipVariants}
          >
            <span className="px-2 py-1 font-light rounded-sm backdrop-blur border border-white/10 bg-white/10 text-white dark:text-white">
              {alt}
            </span>
            <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-[#DE22FF] to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>

      <span className="bg-white h-12 w-12 p-2 border border-black flex justify-center items-center rounded-full">
        <Image width={size} src={icon} alt={alt} />
      </span>
    </div>
  );
};
