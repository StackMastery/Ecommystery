"use client";

import { Button } from "@/components/ui/button";
import { Undo2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <>
      <section className="section">
        <div className="w-full flex flex-col items-center text-center px-5 justify-center h-screen">
          <motion.span
            initial={{ scale: 0.1, translateY: 200, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, translateY: 10 }}
            className="bg-[#721A917D] w-[600px] absolute h-[600px] blur-[150px] z-10"
          />
          <div className="relative z-10">
            <h1 className="text-6xl font-semibold">
              Page not{" "}
              <span className="bg-clip-text text-transparent font-serif italic pr-3 font-light bg-gradient-to-r from-pB via-pM to-pY">
                Found!
              </span>
            </h1>
            <p className="text-center pt-8 max-w-[600px]">
              The page you were looking for could not be found. You can return
              to our home page or drop us a line if you can’t find what you’re
              looking for.
            </p>
            <div className="flex items-center justify-center gap-5 pt-8 flex-wrap">
              <Link href={"/contact"}>
                <Button>Contact US</Button>
              </Link>
              <Link href={"/"}>
                <button className="cursor-pointer px-8 flex items-center gap-2 py-2 h-[45px] rounded-full bg-white/10">
                  Back to Home <Undo2 size={20} strokeWidth={1.3} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
