"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AmazonIcon from "../../../../public/icons/amazon.svg";
import WallMart from "../../../../public/icons/wallmart.svg";
import Shopify from "../../../../public/icons/shopify.svg";
import Clutch from "../../../../public/icons/clutch.svg";
import Google from "../../../../public/icons/google.svg";
import Hero1Img from "../../../../public/img/hero1.png";
import Hero2Img from "../../../../public/img/hero2.png";
import { ArrowUpRight, Star } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const ScrollToBottom = () => {
    window.scrollTo({
      top: 500,
      left: 0, // horizontal position (optional)
      behavior: "smooth", // smooth scroll animation
    });
  };

  return (
    <>
      <section className="section z-10 relative">
        <div className="flex justify-center px-10 flex-col pt-52 py-40 items-center w-full max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="max-w-[580px]  relative z-[999] text-center"
          >
            <div className="mb-6 w-full flex justify-center items-center flex-col gap-2">
              <motion.div
                initial={{ translateY: -50, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 100 }}
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
                      whileInView={{ scale: 0.9 }}
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
                      whileInView={{ translateX: 0, opacity: 100 }}
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
              Your <span className={` ${gredTextClass}`}>E-Commerce</span>{" "}
              Success{" "}
              <span className="flex text-center items-center gap-2 justify-center mt-3 max-[350px]:scale-90 max-[300px]:-mt-[1px] max-[300px]:scale-75">
                Starts{" "}
                <div className="flex -space-x-2 cursor-pointer">
                  <IconButton icon={AmazonIcon} alt={"Amazon"} />
                  <IconButton icon={WallMart} alt={"Wallmart"} />

                  <IconButton size={28} icon={Shopify} alt={"Shopify"} />
                </div>
                <span className={`${gredTextClass}`}>Here</span>
              </span>
            </h2>
            <div className="flex w-full justify-center flex-col items-center pt-10">
              <label className="flex items-center gap-2  text-sm">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_209_2972)">
                    <path
                      d="M2.84922 6.61998C2.70326 5.9625 2.72567 5.27882 2.91437 4.63231C3.10308 3.98581 3.45196 3.39742 3.92868 2.9217C4.40541 2.44597 4.99453 2.09832 5.64142 1.91097C6.28832 1.72362 6.97205 1.70264 7.62922 1.84998C7.99093 1.28428 8.48922 0.818734 9.07817 0.496261C9.66711 0.173788 10.3278 0.00476074 10.9992 0.00476074C11.6707 0.00476074 12.3313 0.173788 12.9203 0.496261C13.5092 0.818734 14.0075 1.28428 14.3692 1.84998C15.0274 1.702 15.7123 1.72288 16.3602 1.91069C17.0081 2.09849 17.598 2.44712 18.0751 2.92413C18.5521 3.40114 18.9007 3.99105 19.0885 4.63898C19.2763 5.28691 19.2972 5.97181 19.1492 6.62998C19.7149 6.99168 20.1805 7.48998 20.5029 8.07893C20.8254 8.66787 20.9944 9.32852 20.9944 9.99998C20.9944 10.6714 20.8254 11.3321 20.5029 11.921C20.1805 12.51 19.7149 13.0083 19.1492 13.37C19.2966 14.0271 19.2756 14.7109 19.0882 15.3578C18.9009 16.0047 18.5532 16.5938 18.0775 17.0705C17.6018 17.5472 17.0134 17.8961 16.3669 18.0848C15.7204 18.2735 15.0367 18.2959 14.3792 18.15C14.018 18.7178 13.5193 19.1854 12.9293 19.5093C12.3394 19.8332 11.6772 20.003 11.0042 20.003C10.3312 20.003 9.66904 19.8332 9.07909 19.5093C8.48914 19.1854 7.99045 18.7178 7.62922 18.15C6.97205 18.2973 6.28832 18.2763 5.64142 18.089C4.99453 17.9016 4.40541 17.554 3.92868 17.0783C3.45196 16.6025 3.10308 16.0141 2.91437 15.3676C2.72567 14.7211 2.70326 14.0374 2.84922 13.38C2.27917 13.0192 1.80963 12.5201 1.48426 11.9292C1.1589 11.3382 0.988281 10.6746 0.988281 9.99998C0.988281 9.32537 1.1589 8.66172 1.48426 8.07076C1.80963 7.4798 2.27917 6.98073 2.84922 6.61998Z"
                      fill="#25D366"
                    />
                    <path
                      d="M8 10L10 12L14 8"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_209_2972">
                      <rect
                        width={20}
                        height={20}
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span className=" whileInView-pulse font-light">
                  Certified Amazon Partner
                </span>
              </label>
              <Button onClick={ScrollToBottom} className={`mt-5 h-[50px]`}>
                REQUEST QUOTE
                <ArrowUpRight
                  strokeWidth={1.5}
                  className=" group-hover:translate-x-2 group-hover:rotate-45  transition-all "
                />
              </Button>
            </div>
          </motion.div>
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
          <div className="max-w-[1340px] w-full  justify-between absolute hidden lg:flex">
            <Image
              width={360}
              src={Hero1Img}
              className="entrance-shake -ml-20"
              alt="Ecommystery"
            />

            <Image
              width={260}
              className="animated-hero z-[9999]"
              src={Hero2Img}
              alt="Ecommystery"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

export const gredTextClass =
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

export const IconButton = ({ size = 25, icon, alt }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex justify-center items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <whileInViewPresence>
        {isHovered && (
          <motion.div
            className="absolute z-10 top-full mt-2 text-xs pointer-events-none flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            variants={tooltipVariants}
          >
            <span className="px-2 py-1 font-light rounded-sm backdrop-blur border border-white/10 bg-white/10 text-white dark:text-white">
              {alt}
            </span>
            <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-[#DE22FF] to-transparent blur-[1px]" />
          </motion.div>
        )}
      </whileInViewPresence>

      <span className="bg-white h-12 w-12 p-2 border border-black flex justify-center items-center rounded-full">
        <Image width={size} src={icon} alt={alt} />
      </span>
    </div>
  );
};
