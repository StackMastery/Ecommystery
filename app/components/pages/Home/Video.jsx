"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { WistiaPlayer } from "@wistia/wistia-player-react";
import Image from "next/image";
import { useState } from "react";
import Thumbnail from "../../../../public/img/video.png";
import { AnimatePresence, motion } from "framer-motion";

const Video = () => {
  const [videoPlaying, setvideoPlaying] = useState(false);

  return (
    <>
      <section className="section relative !z-50 py-20 pb-40">
        <motion.div
          initial={{ y: 100, opacity: 0, filter: "blur(10px)" }}
          whileInView={{ y: 0, opacity: 100, filter: "blur(0px)" }}
          transition={{
            type: "tween",
            duration: 0.8, // ← duration increases by index
            stiffness: 300,
            damping: 20,
          }}
          className="w-full max-w-[1440px] px-5 flex justify-center items-center flex-col"
        >
          <div className="w-full">
            <h2 className="text-4xl md:text-5xl font-extralight text-center italic font-serif">
              Behind{" "}
              <span className="text-transparent font-familyN bg-gradient-to-r from-pM via-pM to-[#F18E7E] font-semibold bg-clip-text not-italic">
                Every Store for
              </span>{" "}
              is a <br className="max-[500px]:hidden" />{" "}
              <span className="text-transparent font-familyN bg-gradient-to-r from-pM to-pink-400 font-semibold bg-clip-text not-italic">
                Story
              </span>{" "}
              of growth
            </h2>
            <p className="text-center my-5 text-lg">
              Get inspired by transformation videos, client wins,
              <br className="max-[500px]:hidden" /> and the systems behind our
              process.
            </p>
            <div className="flex justify-center w-full mt-10 ">
              <div className="max-w-[1000px] w-full ">
                <AspectRatio ratio={16 / 9}>
                  <WistiaPlayer
                    className={videoPlaying ? "block" : "hidden"}
                    mediaId="k4cjyldbz7"
                  />
                  <AnimatePresence>
                    {!videoPlaying && (
                      <div
                        className={`flex w-full justify-center h-full rounded-2xl overflow-hidden items-center `}
                      >
                        <Image
                          alt="Video Ecommmystery"
                          className="rounded-3xl"
                          layout="fill"
                          src={Thumbnail}
                        />
                        <button
                          onClick={() => setvideoPlaying(!videoPlaying)}
                          className="!z-50 cursor-pointer"
                        >
                          <svg
                            width={124}
                            height={124}
                            viewBox="0 0 124 124"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g filter="url(#filter0_f_2002_1361)">
                              <circle
                                cx={62}
                                cy={62}
                                r={54}
                                fill="url(#paint0_linear_2002_1361)"
                              />
                            </g>
                            <g filter="url(#filter1_f_2002_1361)">
                              <path
                                d="M51.1582 74.9425V49.0575C51.1581 48.5166 51.3015 47.9854 51.5737 47.5181C51.846 47.0508 52.2373 46.664 52.7079 46.3974C53.1784 46.1307 53.7113 45.9937 54.2521 46.0002C54.7929 46.0068 55.3223 46.1567 55.7862 46.4347L77.3551 59.3773C77.8084 59.6487 78.1837 60.0329 78.4443 60.4926C78.7048 60.9523 78.8418 61.4716 78.8418 62C78.8418 62.5284 78.7048 63.0477 78.4443 63.5074C78.1837 63.9671 77.8084 64.3513 77.3551 64.6227L55.7862 77.5653C55.3218 77.8436 54.7919 77.9935 54.2506 77.9998C53.7092 78.0061 53.1759 77.8685 52.7052 77.6011C52.2345 77.3337 51.8432 76.9461 51.5714 76.478C51.2996 76.0098 51.157 75.4778 51.1582 74.9364"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <filter
                                id="filter0_f_2002_1361"
                                x={0}
                                y={0}
                                width={124}
                                height={124}
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                              >
                                <feFlood
                                  floodOpacity={0}
                                  result="BackgroundImageFix"
                                />
                                <feBlend
                                  mode="normal"
                                  in="SourceGraphic"
                                  in2="BackgroundImageFix"
                                  result="shape"
                                />
                                <feGaussianBlur
                                  stdDeviation={4}
                                  result="effect1_foregroundBlur_2002_1361"
                                />
                              </filter>
                              <filter
                                id="filter1_f_2002_1361"
                                x="49.1582"
                                y={44}
                                width="31.6836"
                                height={36}
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                              >
                                <feFlood
                                  floodOpacity={0}
                                  result="BackgroundImageFix"
                                />
                                <feBlend
                                  mode="normal"
                                  in="SourceGraphic"
                                  in2="BackgroundImageFix"
                                  result="shape"
                                />
                                <feGaussianBlur
                                  stdDeviation={1}
                                  result="effect1_foregroundBlur_2002_1361"
                                />
                              </filter>
                              <linearGradient
                                id="paint0_linear_2002_1361"
                                x1="-12.1676"
                                y1="22.477"
                                x2="104.978"
                                y2="109.454"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#226FFF" />
                                <stop offset="0.5" stopColor="#DE22FF" />
                                <stop offset={1} stopColor="#FFE11B" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </button>
                      </div>
                    )}
                  </AnimatePresence>
                </AspectRatio>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Video;
