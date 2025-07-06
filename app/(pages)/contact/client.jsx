"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AmazonIcon from "../../../public/icons/amazon.svg";
import WallMart from "../../../public/icons/wallmart.svg";
import Shopify from "../../../public/icons/shopify.svg";
import Clutch from "../../../public/icons/clutch.svg";
import Google from "../../../public/icons/google.svg";
import { Star } from "lucide-react";
import { gredTextClass, IconButton } from "@/app/components/pages/Home/Hero";
import Contact from "@/app/components/pages/Home/Contact";

const ContactPageClient = () => {
  return (
    <>
      <section className="section z-10 relative">
        <div className="flex justify-center px-10 flex-col pt-52  items-center w-full max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="max-w-[580px]  relative z-[999] text-center"
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
                  <div className="flex items-center -space-x-2 max-[450px]:scale-90">
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
                        size={15}
                        className="text-[#FFCB33] fill-[#FFCB33]"
                      />
                      <Star
                        size={15}
                        className="text-[#FFCB33] fill-[#FFCB33]"
                      />
                      <Star
                        size={15}
                        className="text-[#FFCB33] fill-[#FFCB33]"
                      />
                      <Star
                        size={15}
                        className="text-[#FFCB33] fill-[#FFCB33]"
                      />
                      <Star
                        size={15}
                        className="text-[#FFCB33] fill-[#FFCB33]"
                      />
                    </span>
                  </span>
                </div>
              </motion.div>
              <motion.h3 className="max-[450px]:text-sm -mt-1">
                Leading E-commerce Agency
              </motion.h3>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold z-[9999] relative">
              Let’s <span className={` ${gredTextClass}`}>Connect</span> &{" "}
              <span className="flex text-center items-center gap-2 justify-center mt-3 max-[350px]:scale-90 max-[300px]:-mt-[1px] max-[300px]:scale-75">
                Grow{" "}
                <div className="flex -space-x-2 cursor-pointer">
                  <IconButton icon={AmazonIcon} alt={"Amazon"} />
                  <IconButton icon={WallMart} alt={"Wallmart"} />

                  <IconButton size={28} icon={Shopify} alt={"Shopify"} />
                </div>
                <span className={`${gredTextClass} pb-1`}>Together</span>
              </span>
            </h2>
          </motion.div>
          <div className="max-w-[1440px] w-full flex justify-center absolute">
            <motion.span
              initial={{ scale: 0.3, translateY: -300, opacity: 0 }}
              animate={{ scale: 1, translateY: -80, opacity: 1 }}
              className="bg-[#721A917D] w-[600px] h-[700px] mt-56  blur-[200px] flex"
            />
          </div>
        </div>
      </section>
      <span className="pt-10 flex" />
      <Contact />
    </>
  );
};

export default ContactPageClient;
