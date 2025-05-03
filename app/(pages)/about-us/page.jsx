"use client";

import { gredTextClass } from "@/app/components/pages/Home/Hero";
import { NumberTicker } from "@/components/magicui/number-ticker";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const AboutPage = () => {
  return (
    <>
      <section className="section z-10 flex-col w-full items-center relative">
        <div className="flex justify-center px-10 flex-col pt-52 py-20 items-center w-full max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="max-w-[580px] flex flex-col items-center gap-5  relative z-[999] text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold z-[9999] relative">
              Helping{" "}
              <span className={` ${gredTextClass}`}>
                <span className="mr-1">E-Commerce</span> <br /> Business
              </span>{" "}
              to Grow
            </h2>
            <p className="text-sm lg:w-11/12">
              Since 2010, we’ve worked with incredible organizations to create
              meaningful impact and compelling experiences that deliver results.
            </p>
          </motion.div>
          <div className="max-w-[1440px] w-full flex justify-between absolute">
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
        </div>
        <div className="max-w-[1240px] w-full px-5 pb-20 relative z-[9999]">
          <div className="flex flex-wrap justify-center xl:justify-between  gap-10 w-full">
            <div className="flex flex-col items-center text-center md:basis-[calc(50%-1.25rem)] xl:basis-auto">
              <TickerStat value={200} suffix="+" label="Campaigns launched" />
            </div>

            <span className="hidden xl:block w-px bg-white h-20" />

            <div className="flex flex-col items-center text-center md:basis-[calc(50%-1.25rem)] xl:basis-auto">
              <TickerStat value={500} suffix="+" label="Happy clients" />
            </div>

            <span className="hidden xl:block w-px bg-white h-20" />

            <div className="flex flex-col items-center text-center md:basis-[calc(50%-1.25rem)] xl:basis-auto">
              <TickerStat value={47} suffix="m+" label="Revenue generated" />
            </div>

            <span className="hidden xl:block w-px bg-white h-20" />

            <div className="flex flex-col items-center text-center md:basis-[calc(50%-1.25rem)] xl:basis-auto">
              <TickerStat
                value={10}
                suffix="+"
                label="Traffic driven for clients"
              />
            </div>

            <div className="flex flex-col gap-3 items-center max-[768px]:static max-[1279px]:absolute bottom-[50%]">
              <p className="font-light">Follow Ecommystery</p>
              <div className="flex gap-5 flex-wrap justify-center sm:justify-start xl:justify-end">
                {Socials.map((social) => (
                  <Link key={social.name} href={social.link}>
                    <Tooltip>
                      <TooltipTrigger>
                        <social.icon className="cursor-pointer" size={24} />
                      </TooltipTrigger>
                      <TooltipContent>
                        <span className="px-3 h-6 flex items-center backdrop-blur-md">
                          {social.name}
                        </span>
                      </TooltipContent>
                    </Tooltip>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;

export const Socials = [
  {
    name: "LinkedIn",
    link: "linkedin.com",
    icon: FaLinkedin,
  },
  {
    name: "X",
    link: "x.com",
    icon: FaXTwitter,
  },
  {
    name: "Facebook",
    link: "facebook.com",
    icon: FaFacebook,
  },
  {
    name: "Youtube",
    link: "youtube.com",
    icon: FaYoutube,
  },
  {
    name: "Instagram",
    link: "instagram.com",
    icon: FaInstagram,
  },
];

const TickerStat = ({ value, suffix = "", label }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-5xl lg:text-6xl  flex items-center gap-1">
        <NumberTicker className="font-serif" value={value} />
        <span className="font-light font-serif">{suffix}</span>
      </h2>
      <p className="font-light mt-1">{label}</p>
    </div>
  );
};
