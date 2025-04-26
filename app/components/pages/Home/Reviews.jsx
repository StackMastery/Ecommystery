"use client";

import { motion } from "framer-motion";

const Reviews = () => {
  return (
    <>
      <section className="section relative !z-50 py-10 pb-40">
        <motion.div
          initial={{ y: 100, opacity: 0, filter: "blur(10px)" }}
          whileInView={{ y: 0, opacity: 100, filter: "blur(0px)" }}
          transition={{
            type: "tween",
            duration: 0.8,
            stiffness: 300,
            damping: 20,
          }}
          className="w-full max-w-[1440px] px-5 flex justify-center items-center flex-col"
        >
          <div className="w-full">
            <h2 className="text-4xl md:text-5xl font-extralight text-center italic font-serif">
              Great work{" "}
              <span className="text-transparent font-familyN bg-gradient-to-r from-pM via-pM to-[#f1c37e] font-semibold bg-clip-text not-italic">
                for great companies <br className="max-[500px]:hidden" /> for
              </span>{" "}
              drive{" "}
              <span className="text-transparent font-familyN bg-gradient-to-r from-pM to-pink-400 font-semibold bg-clip-text not-italic">
                their
              </span>{" "}
              growth{" "}
            </h2>
            <p className="text-center my-5 text-lg">
              Get inspired by insights, and success stories from our growing{" "}
              <br className="max-[500px]:hidden" /> community of e-commerce
              entrepreneurs.
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Reviews;
