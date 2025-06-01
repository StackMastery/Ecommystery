"use client";

import { motion } from "framer-motion";
import { fadeInUpVariant } from "./TitleDes";
import { useParsedStyle, useSplitTitleParts } from "@/lib/utils";
import { gradientColors } from "./ProcessGroup";
import { Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Pricing = ({ data }) => {
  const extractedStyle = useParsedStyle(data.heading);
  const parts = useSplitTitleParts(data.heading);

  console.log(data);
  return (
    <>
      <motion.section
        variants={fadeInUpVariant}
        initial="hidden"
        whileInView="visible"
        className="section py-20"
      >
        <div className="max-w-[1440px] w-full flex flex-col items-center px-5">
          <div className="w-full relative z-10 flex items-center max-w-[500px] flex-col">
            <h2
              className="text-4xl md:text-5xl text-center gap-1 font-serif italic"
              style={extractedStyle}
            >
              {parts.map((part, index) => {
                if (part.startsWith("[") && part.endsWith("]")) {
                  const cleanText = part.slice(1, -1);
                  return (
                    <span
                      key={index}
                      style={{
                        backgroundImage: `linear-gradient(90deg, #226FFF -23.52%, #DE22FF 42.16%, #FFE11B 107.84%)`,
                      }}
                      className="text-transparent pl-1  pb-1 font-semibold bg-clip-text font-familyN not-italic"
                    >
                      {cleanText}
                    </span>
                  );
                }
                return <span key={index}>{part}</span>;
              })}
            </h2>
            <p className="text-center my-5 text-lg">{data?.des}</p>
          </div>

          <div className="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-10">
            {data?.pricings?.map((pricing, index) => (
              <div
                key={pricing?._key}
                className="bg-white/5 flex flex-col justify-between col-span-1 p-6 rounded-xl"
              >
                <div>
                  <span
                    className={`px-4 py-1 w-fit to-white/70 text-black font-medium rounded-full bg-gradient-to-r ${
                      gradientColors[index % gradientColors.length]
                    }`}
                  >
                    {pricing?.label}
                  </span>
                  <h3 className="text-2xl pt-5">{pricing?.title}</h3>
                  <div className="pt-5 flex gap-2 items-end">
                    <span className="text-5xl font-medium">
                      ${pricing?.price}
                    </span>
                    <span className="text-white/60">per month</span>
                  </div>
                  <hr className="opacity-10 my-8" />
                  <ul className="space-y-4">
                    {pricing?.features?.map((fe, index) => (
                      <li className="flex gap-2" key={`fe--_${index}`}>
                        {" "}
                        <div>
                          <Check color="#FFCB33" size={18} />
                        </div>{" "}
                        {fe}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link className="w-full mt-10" href={"/contact"}>
                  <button
                    className={`w-full relative bg-white/20 overflow-hidden font-semibold group cursor-pointer rounded-full uppercase  transition-all duration-300 text-lg`}
                    variant={""}
                  >
                    <span
                      style={{
                        background: `linear-gradient(91deg, #226FFF -5.68%, #DE22FF 54.52%, #FFE11B 114.72%)`,
                      }}
                      className={`flex absolute opacity-0 group-hover:opacity-100 inset-0  transition-all`}
                    />
                    <span className="px-5 z-50 relative py-3 flex justify-center text-center w-full">
                      Contact US
                    </span>
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Pricing;
