"use client";
import { motion } from "framer-motion";

const ServiceAbout = () => {
  return (
    <>
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

export default ServiceAbout;
