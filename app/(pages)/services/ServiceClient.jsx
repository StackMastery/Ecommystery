"use client";

import { motion } from "framer-motion";
import { gredTextClass } from "@/app/components/pages/Home/Hero";
import { Button } from "@/components/ui/button";
import BrandMarquee from "@/app/components/pages/Home/BrandMarquee";
import Link from "next/link";
import NewsLetter from "@/app/components/pages/Home/NewsLetter";

const ServicesClientPage = ({ children }) => {
  return (
    <>
      <section className="section z-50 relative">
        <div className="flex justify-center px-10 flex-col pt-52 py-40 items-center w-full max-w-[1440px]">
          <div className="max-w-[1440px] w-full flex justify-between absolute top-20">
            <motion.span
              initial={{ scale: 0.3, translateY: -300, opacity: 0 }}
              whileInView={{ scale: 1, translateY: -80, opacity: 1 }}
              className="bg-[#721A917D] w-[400px] h-[500px]  blur-[150px] flex"
            />
            <motion.span
              initial={{ scale: 0.1, translateY: 200, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1, translateY: 10 }}
              className="bg-[#721A917D] w-[400px] h-[400px] blur-[150px] z-10"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="max-w-[560px] flex-col flex items-center gap-5 relative z-[999] text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold z-[9999] relative">
              Comprehensive{" "}
              <span className={` ${gredTextClass}`}>
                Services for Ecommerce
              </span>{" "}
              Success
            </h2>
            <p className="font-light">
              Whether you're launching your first store or scaling fast, our
              expert-led services are designed to fuel e-commerce growth every
              step of the way.
            </p>
            <Link href={`/contact`}>
              <Button>CONTACT US</Button>
            </Link>
          </motion.div>
        </div>
      </section>
      {children}
      <div className="py-20 pt-20 relative !z-50">
        <BrandMarquee gred={false} />
      </div>
      <div className="pb-20 flex flex-col items-center">
        <NewsLetter />
        <div className="max-w-[1440px] w-full flex justify-between absolute">
          <motion.span
            initial={{ scale: 0.3, translateY: -300, opacity: 0 }}
            whileInView={{ scale: 1, translateY: -80, opacity: 1 }}
            className="bg-[#41013C] w-[500px] h-[700px] mt-20  blur-[200px] flex"
          />
          <motion.span
            initial={{ scale: 0.3, translateY: -300, opacity: 0 }}
            whileInView={{ scale: 1, translateY: -80, opacity: 1 }}
            className="bg-[#0e0141] w-[500px] h-[700px] mt-20  blur-[200px] flex"
          />
        </div>
      </div>
    </>
  );
};

export default ServicesClientPage;
