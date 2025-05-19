"use client";
import { motion } from "framer-motion";
import { ArrowUp, ArrowUpRight, Plus } from "lucide-react";
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
        <div className="max-w-[1400px]  w-full flex justify-center  flex-col group items-center border border-white/5 bg-black/5">
          <div className="flex w-full max-w-[1400px] duration-500 justify-between absolute items-center group-hover:translate-y-14 transition-all">
            <Plus
              className="inset-0 -translate-x-3 -translate-y-6"
              strokeWidth={0.5}
            />
            <Plus
              className="inset-0 translate-x-3 -translate-y-6"
              strokeWidth={0.5}
            />
          </div>
          <Link
            href={`/services`}
            className="flex uppercase py-3 items-center w-full text-center justify-center group"
          >
            See all services{" "}
            <ArrowUpRight
              strokeWidth={1.2}
              className="transition-all group-hover:rotate-45 duration-500 group-hover:translate-x-2"
            />
          </Link>
          <div className="flex w-full max-w-[1400px] duration-500 justify-between items-center absolute group-hover:-translate-y-14 transition-all">
            <Plus
              className="inset-0 -translate-x-3 translate-y-6"
              strokeWidth={0.5}
            />
            <Plus
              className="inset-0 translate-x-3 translate-y-6"
              strokeWidth={0.5}
            />
          </div>
        </div>
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
