"use client";

import { gredTextClass } from "@/app/components/pages/Home/Hero";
import { motion } from "framer-motion";

const BlogPageHero = () => {
  return (
    <>
      <section className="section z-10 relative">
        <div className="flex justify-center px-10 flex-col pt-52 py-40 items-center w-full max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="max-w-[600px] flex-col flex items-center gap-5 relative z-[999] text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold z-[9999] relative">
              Staty Ahead, Stay <br />
              <span
                className="text-transparent font-serif font-medium italic bg-clip-text pr-1"
                style={{
                  background: `linear-gradient(81deg, #226FFF 30%, #7A4CFF 45%, #DE22FF 55%, #FF8A1B 70%, #FFE11B 85%)`,
                  backgroundSize: "200% auto",
                  backgroundPosition: "center",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Informed
              </span>
            </h2>
            <p className="font-light">
              Explore the latest trends and breaking news in the dynamic
              landscape of digital marketing with our up-to-date insights.
            </p>
          </motion.div>
          <div className="max-w-[1440px] w-full flex justify-between absolute">
            <motion.span
              initial={{ scale: 0.3, translateY: -300, opacity: 0 }}
              animate={{ scale: 1, translateY: -80, opacity: 1 }}
              className="bg-[#721A917D] w-[400px] h-[500px]  blur-[150px] flex"
            />
            <motion.span
              initial={{ scale: 0.1, translateY: 200, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, translateY: 10 }}
              className="bg-[#721A917D] w-[400px] h-[400px] blur-[150px] z-10"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPageHero;
