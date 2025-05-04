"use client";

import { motion } from "framer-motion";

const Information = () => {
  return (
    <>
      <section className="section">
        <div className="max-w-[1040px] w-full py-20 px-5">
          <div className="flex justify-center w-full">
            <motion.span
              initial={{ scale: 0.1, translateY: 200, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1, translateY: 10 }}
              className="bg-[#1615779E] absolute flex w-[600px] mt-20 h-[700px] blur-[150px] z-10"
            />
          </div>
          <motion.div
            initial={{ y: 100, opacity: 0, filter: "blur(10px)" }}
            whileInView={{ y: 0, opacity: 100, filter: "blur(0px)" }}
            transition={{
              type: "tween",
              duration: 0.4,
              stiffness: 300,
              damping: 20,
            }}
            className="w-full relative !z-[9999]"
          >
            <div>
              <div className="w-full  space-y-10 lg:pr-5">
                <h2 className="text-4xl md:text-5xl font-semibold  lg:w-8/12">
                  <span className="text-transparent bg-gradient-to-r via-pM from-pB to-pY bg-clip-text">
                    Helping
                  </span>{" "}
                  <span className="text-white font-serif font-normal italic">
                    Entrepreneurs <br className="hidden md:block" /> Succeed
                  </span>{" "}
                  <span className="text-transparent bg-gradient-to-r via-pM from-pB to-pY bg-clip-text">
                    in E-Commerce
                  </span>{" "}
                </h2>
              </div>
            </div>
            <span className="w-full border-b border-dashed border-current/10 flex my-10" />
            <div className="w-full flex justify-between gap-10 flex-col md:flex-row">
              <div className="space-y-3 max-w-full md:max-w-[425px]">
                <h2 className="text-[28px] leading-8 font-semibold">
                  Empowering E-Commerce Excellence
                </h2>
                <p className="text-sm text-current/50 font-extralight">
                  To equip Amazon sellers, FBA entrepreneurs, and D2C brands
                  with data-driven strategies, AI-powered automation, and expert
                  insights that demystify Amazon’s algorithm, slash ACoS, and
                  unlock scalable growth. Through relentless innovation, we
                  deliver actionable tools and battle-tested tactics to
                  transform your store from stagnant to stellar.
                </p>
              </div>
              <div className="space-y-3 max-w-full md:max-w-[425px]">
                <h2 className="text-[28px] leading-8 font-semibold">
                  Pioneering the Future of Amazon-First Commerce
                </h2>
                <p className="text-sm text-current/50 font-extralight">
                  We envision a world where every seller harnesses the full
                  potential of Amazon’s ecosystem—not just to survive, but to
                  thrive. By merging cutting-edge automation, predictive
                  analytics, and hands-on expertise, we aim to redefine how
                  brands scale on Amazon, turning uncertainty into unstoppable
                  momentum.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Information;
