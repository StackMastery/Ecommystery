"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useState } from "react";
import { fadeInUpVariant } from "./TitleDes";

const Faqs = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      variants={fadeInUpVariant}
      initial="hidden"
      animate="visible"
      className="section py-20"
    >
      <div className="max-w-[1040px] w-full flex flex-col items-center px-5">
        <div className="w-full relative z-10 flex items-center flex-col">
          <h2
            style={{
              backgroundImage:
                "linear-gradient(90deg, #226FFF -23.52%, #DE22FF 42.16%, #FFE11B 107.84%)",
            }}
            className="text-4xl md:text-5xl font-semibold text-center max-w-[489px] text-transparent bg-clip-text"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-center my-5 text-lg">
            We've answered the questions clients ask most.{" "}
            <br className="max-[500px]:hidden" /> Browse below to find the
            clarity you’re looking for.
          </p>
        </div>

        <div className="w-full mt-8 space-y-4 z-50 max-w-[750px]">
          {faqs?.faqs?.map((faq, index) => (
            <button
              onClick={() => toggleAccordion(index)}
              key={faq?._key || index}
              className="bg-white/5 cursor-pointer rounded-xl p-5 w-full text-start"
            >
              <div className="w-full text-left text-lg flex justify-between items-start leading-6">
                <span>{faq?.title}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronUp />
                </motion.span>
              </div>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pt-3 text-white/60">{faq?.description}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Faqs;
