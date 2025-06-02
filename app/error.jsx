// app/error.js
"use client";

import GradientText from "@/components/TextAnimations/GradientText/GradientText";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error("Global Error:", error);
  }, [error]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white text-center px-4">
      <div className=" absolute w-full flex justify-between max-w-[1440px]">
        <motion.span
          initial={{ scale: 0.3, translateY: -300, opacity: 0 }}
          animate={{ scale: 1, translateY: -80, opacity: 1 }}
          className="bg-[#41013cbb] w-[700px] h-[700px] blur-[150px] flex "
        />
        <motion.span
          initial={{ scale: 0.1, translateY: 200, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, translateY: 10 }}
          className="bg-[#19177980] w-[900px] h-[700px] blur-[150px] "
        />
      </div>
      <div className=" relative z-50 flex flex-col justify-center items-center">
        <span className="text-7xl pb-10">🚨</span>
        <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
        <p className="text-gray-300 mb-6 max-w-[800px]">
          Application error: a client-side exception has occurred while loading
          {` ${window.location.host}`} (see the browser console for more
          information).
        </p>
        <div className="flex gap-4">
          <button onClick={() => reset()}>
            <GradientText
              showBorder
              className="py-3 group !rounded-sm"
              animationSpeed={3}
              colors={["#f5f5f5", "#888585"]}
            >
              <span className="text-black px-5 flex items-center  gap-1 font-light">
                Try Again
              </span>
            </GradientText>
          </button>
          <Link href={"/"}>
            <GradientText
              showBorder
              className="py-3 group !rounded-sm"
              animationSpeed={3}
              colors={["#DE22FF", "#FFE11B"]}
            >
              <span className="text-white px-5 flex items-center  gap-1 font-light">
                Go Home{" "}
                <ArrowUpRight
                  className="group-hover:rotate-45 transition-all"
                  strokeWidth={1.2}
                />
              </span>
            </GradientText>
          </Link>
        </div>
      </div>
    </section>
  );
}
