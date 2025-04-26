"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BuinessImg from "../../../../public/img/business.png";

export const CompanyValueGredBg = () => {
  return (
    <>
      <motion.span
        initial={{ scale: 0.1, translateY: 200, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, translateY: 10 }}
        className="bg-[#41013C]/50 -left-60 top-96  relative flex w-[1500px] -mt-40 h-[1500px] blur-[300px] z-10"
      />
      <motion.span
        initial={{ scale: 0.1, translateY: 200, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, translateY: 10 }}
        className="bg-[#12114F]/50 relative left-96 top-96 flex w-[1200px] -mt-40 h-[1200px] blur-[300px] z-10"
      />
    </>
  );
};

export const CompanyValueCard = ({ values, value, index }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0, filter: "blur(10px)" }}
      whileInView={{ y: 0, opacity: 100, filter: "blur(0px)" }}
      transition={{
        type: "tween",
        duration: 0.8, // ← duration increases by index
        stiffness: 300,
        damping: 20,
      }}
      key={`value-${index}`}
      className={`bg-white/5 rounded-2xl cursor-text z-50 p-8 w-full flex flex-col gap-4 ${
        values.length - 1 === index
          ? "col-span-12"
          : "col-span-12 sm:col-span-6"
      }`}
    >
      <div className="from-white to-[#DCC3FF] bg-gradient-to-b h-14 w-14 rounded-full flex justify-center items-center">
        <Image width={30} height={30} src={value.icon} alt={value.title} />
      </div>
      <h3 className="text-white text-2xl sm:text-3xl font-medium">
        {value.title}
      </h3>
      <p className="text-white/70">{value.description}</p>
    </motion.div>
  );
};

export const CompanyValuesImageTitleDes = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0, filter: "blur(10px)" }}
      whileInView={{ y: 0, opacity: 100, filter: "blur(0px)" }}
      transition={{
        type: "tween",
        duration: 0.8, // ← duration increases by index
        stiffness: 300,
        damping: 20,
      }}
      className="w-full lg:w-4/12 flex flex-col space-y-5"
    >
      <h2 className="text-4xl md:text-5xl font-semibold">
        <span className="text-transparent bg-gradient-to-r via-pM from-pB to-pY bg-clip-text">
          Company{" "}
          <span className="font-serif font-normal italic pr-1">Values</span>
        </span>
      </h2>

      <p className="text-sm md:text-lg w-full">
        At Ecommystery, we don’t just aim for your success, we engineer it,
        support it, and scale it. Your success isn’t just a goal—it’s a
        guarantee
      </p>

      <div className="flex-1 flex mt-10">
        <Image
          placeholder="blur"
          className="w-full h-full object-cover rounded-2xl hidden lg:block"
          src={BuinessImg}
          alt="Business"
        />
      </div>
    </motion.div>
  );
};
