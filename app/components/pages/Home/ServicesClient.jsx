"use client";
import { motion } from "framer-motion";

const ServicesClient = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        className="w-full"
        transition={{
          type: "tween",
          duration: 0.8,
          stiffness: 300,
          damping: 20,
        }}
      >
        <h2 className=" text-[38px] md:text-[48px] font-semibold bg-gradient-to-r from-[#226FFF] via-[#DE22FF] to-[#FFE11B] bg-clip-text text-transparent inline-block">
          Our<span className="font-serif italic font-normal">Services</span>
        </h2>
        <p className="text-sm md:text-lg font-light">
          Your store’s growth may look effortless, but behind the scenes <br />{" "}
          are refined systems and expert teamwork.
        </p>
      </motion.div>
      <div className="flex justify-center w-full">
        <motion.span
          initial={{ scale: 0.1, translateY: 200, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1, translateY: 10 }}
          className="bg-[#1615779E] absolute flex w-[800px] h-[800px] blur-[150px] z-10"
        />
      </div>
    </>
  );
};

export default ServicesClient;

export const ServiceSectionAnimated = ({ children }) => {
  return (
    <motion.section
      initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{
        type: "tween",
        duration: 0.8,
        stiffness: 300,
        damping: 20,
      }}
      className="section py-36 "
    >
      {children}
    </motion.section>
  );
};
