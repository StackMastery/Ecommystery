"use client";
import Image from "next/image";
import M1 from "../../../../public/members/1.png";
import M2 from "../../../../public/members/2.png";
import M3 from "../../../../public/members/3.png";
import M4 from "../../../../public/members/4.png";
import M5 from "../../../../public/members/5.png";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
const members = [M1, M2, M3, M4, M5];
const colors = ["#FFF6D5", "#EBF5E0", "#DBF3F1", "#C7DEF8", "#E8D1E4"];

const NewsLetter = ({ className = "" }) => {
  return (
    <>
      <section className={`section ${className}`}>
        <motion.div
          initial={{ y: 100, opacity: 0, filter: "blur(10px)" }}
          whileInView={{ y: 0, opacity: 100, filter: "blur(0px)" }}
          transition={{
            type: "tween",
            duration: 0.8,
            stiffness: 300,
            damping: 20,
          }}
          className="max-w-[1440px] relative !z-[999999] gap-5 flex text-center  px-5 flex-col items-center w-full py-20"
        >
          <div className="flex flex-wrap  justify-center -space-y-20 -space-x-6 sm:-space-x-10">
            {members.map((mem, index) => (
              <div
                style={{ background: `${colors[index]}` }}
                key={`mem-${index}`}
                className="rounded-full overflow-hidden md:h-32 md:w-32  w-18  h-18  sm:h-24  sm:w-24"
              >
                <Image width={130} src={mem} alt="mem" />
              </div>
            ))}
          </div>
          <h2 className=" text-2xl md:text-3xl font-semibold my-5">
            Tech-powered e-commerce experts helping you scale{" "}
            <br className="hidden md:block" /> fast. Join{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-pink-800 via-pink-500 to-yellow-400 text-transparent bg-clip-text">
                1,200+
              </span>
              <span className="absolute inset-0  translate-y-5 opacity-50">
                <svg
                  width={97}
                  height={7}
                  viewBox="0 0 97 7"
                  className="translate-y-4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.779297 1.35205H96.4651C79.8714 1.96408 44.9294 3.67778 37.9111 5.63638C53.0902 5.14673 73.2067 5.43236 81.3675 5.63638"
                    stroke="url(#paint0_linear_2002_1630)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2002_1630"
                      x1="-4.00195"
                      y1={-8}
                      x2="17.7672"
                      y2="42.9009"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#226FFF" />
                      <stop offset="0.5" stopColor="#DE22FF" />
                      <stop offset={1} stopColor="#FFE11B" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </span>
            sellers boosting profits by 67% in 90 days.
          </h2>
          <Link
            href={`/contact`}
            className="flex max-w-[300px] w-full justify-center"
          >
            <Button className={` w-full h-[50px]`}>
              Book a Call <ArrowUpRight />
            </Button>
          </Link>
        </motion.div>
      </section>
    </>
  );
};

export default NewsLetter;
