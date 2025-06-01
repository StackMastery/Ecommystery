"use client";
import Image from "next/image";
import ManImg from "../../../../public/img/man.png";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { motion } from "framer-motion";

const About = ({ children, className = "" }) => {
  return (
    <>
      <section className={`section flex-col items-center pb-20 ${className}`}>
        {children}
        <div className="max-w-[1440px] flex-col lg:flex-row w-full flex justify-between px-5 gap-10 items-center !z-50 relative">
          <motion.div
            initial={{ opacity: 0, x: -100, filter: "blur(10px)" }}
            whileInView={{ opacity: 100, x: 0, filter: "blur(0px)" }}
            transition={{
              type: "tween",
              duration: 0.8,
              stiffness: 300,
              damping: 20,
            }}
            className="w-full lg:w-7/12 space-y-10 lg:pr-5"
          >
            <h2 className="text-4xl md:text-5xl font-semibold  lg:w-8/12">
              <span className="text-transparent bg-gradient-to-r via-pM from-pB to-pY bg-clip-text">
                Helping
              </span>{" "}
              <span className="text-white font-serif font-normal italic">
                Entrepreneurs Succeed
              </span>{" "}
              <span className="text-transparent bg-gradient-to-r via-pM from-pB to-pY bg-clip-text">
                in E-Commerce
              </span>{" "}
            </h2>
            <p className="text-sm md:text-lg lg:w-10/12 text-white/70">
              We’re more than a service—we’re your growth partner. At 200+
              startup, we build fully automated, profit-driven e-commerce stores
              that make success simple for entrepreneurs and busy professionals.
            </p>
            <StatsSection className="md:hidden lg:flex" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100, filter: "blur(10px)" }}
            whileInView={{ opacity: 100, x: 0, filter: "blur(0px)" }}
            transition={{
              type: "tween",
              duration: 0.8,
              stiffness: 300,
              damping: 20,
            }}
            className="w-full lg:w-5/12 flex gap-5 items-center"
          >
            <StatsSection className="hidden md:flex lg:hidden w-[1000px]" />
            <Image
              className="w-full rounded-2xl"
              placeholder="blur"
              src={ManImg}
              alt="Man"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;

const CounterBlock = ({ value, label }) => {
  return (
    <div className="flex flex-col font-light">
      <span>
        <NumberTicker
          className="text-white text-4xl font-semibold"
          value={value}
        />
        <span className="text-4xl">+</span>
      </span>
      {label}
    </div>
  );
};

const StatsSection = ({ className = "" }) => {
  return (
    <div className={`flex gap-10 flex-wrap gap-y-5 ${className}`}>
      <CounterBlock value={500} label="Project Served" />
      <CounterBlock value={200} label="Startup Partner" />
      <CounterBlock value={1} label="User Served" suffix="M+" />
      <CounterBlock value={7} label="Years in Business" />
    </div>
  );
};
