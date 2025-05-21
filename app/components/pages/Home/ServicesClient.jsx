"use client";
import GradientText from "@/components/TextAnimations/GradientText/GradientText";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ServicesClient = ({ showButton = false, titleDesShow }) => {
  return (
    <>
      {titleDesShow && (
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          className="w-full relative !z-40"
          transition={{
            type: "tween",
            duration: 0.8,
            stiffness: 300,
            damping: 20,
          }}
        >
          <h2 className=" text-[38px] md:text-[48px] font-semibold bg-gradient-to-r pr-1 from-[#226FFF] via-[#DE22FF] to-[#FFE11B] bg-clip-text text-transparent inline-block">
            Our<span className="font-serif italic font-normal">Services</span>
          </h2>
          <p className="text-sm md:text-lg font-light">
            Your store’s growth may look effortless, but behind the scenes{" "}
            <br /> are refined systems and expert teamwork.
          </p>
        </motion.div>
      )}
      <div className="flex justify-center w-full">
        <motion.span
          initial={{ scale: 0.1, translateY: 200, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1, translateY: 10 }}
          className="bg-[#1615779E] absolute flex w-[1200px] -mt-40 h-[1200px] blur-[300px] z-10"
        />
      </div>
    </>
  );
};

export default ServicesClient;

export const SeeAllServices = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        className="w-full relative !z-40 pb-40 p-5 pt-10 flex justify-center"
        transition={{
          type: "tween",
          duration: 0.8,
          stiffness: 300,
          damping: 20,
        }}
      >
        <Link
          className="bg-white flex items-center group px-8 py-3 rounded-full"
          href="/services"
        >
          <GradientText
            colors={["#226FFF", "#DE22FF", "#FFE11B"]}
            className="px-1"
            animationSpeed={2.5}
          >
            VIEW ALL SERVICES
          </GradientText>
          <ArrowUpRight
            strokeWidth={1.5}
            className=" group-hover:rotate-45 group-hover:translate-x-2 transition-all"
            color="#684271"
          />
        </Link>
      </motion.div>
    </>
  );
};

export const ServicesClientDiv = ({ children }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{
          type: "tween",
          duration: 0.8,
          stiffness: 300,
          damping: 20,
        }}
        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 !z-50 relative"
      >
        {children}
      </motion.div>
    </>
  );
};

export const ReviewsBackground = () => {
  return (
    <>
      <motion.span
        initial={{ scale: 0.1, translateY: 200, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1, translateY: 10 }}
        className="bg-[#4E1A91]/50 absolute flex w-[1200px]  h-[1200px] blur-[300px] z-10"
      />
    </>
  );
};
