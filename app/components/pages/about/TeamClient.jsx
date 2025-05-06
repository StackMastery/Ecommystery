"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from "framer-motion";
import Image from "next/image";
import TeamBg from "../../../../public/img/teambg.png";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";

const TeamClient = ({ children }) => {
  return (
    <>
      <div className="max-w-[1440px] w-full flex justify-between absolute translate-y-80">
        <motion.span
          initial={{ scale: 0.3, translateY: -300, opacity: 0 }}
          animate={{ scale: 1, translateY: -80, opacity: 1 }}
          className="bg-[#41013cbb] w-[1200px] h-[1200px] blur-[150px] flex -translate-x-40"
        />
        <motion.span
          initial={{ scale: 0.1, translateY: 200, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, translateY: 10 }}
          className="bg-[#19177980] w-[900px] h-[700px] blur-[150px] translate-x-40"
        />
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0, filter: "blur(10px)" }}
        whileInView={{ y: 0, opacity: 100, filter: "blur(0px)" }}
        transition={{
          type: "tween",
          duration: 0.8, // ← duration increases by index
          stiffness: 300,
          damping: 20,
        }}
        className="w-full max-w-[1240px] px-5 flex justify-center items-center flex-col"
      >
        {children}
      </motion.div>
    </>
  );
};

export default TeamClient;

export const TeamMemberCard = ({ m }) => {
  return (
    <div className="w-full !z-[999] relative">
      <div className="flex cursor-pointer">
        <AspectRatio
          className="flex items-end overflow-hidden justify-between"
          ratio={4 / 4}
        >
          <Image
            src={TeamBg}
            alt={"Team Member BG"}
            className=" absolute h-full -translate-x-10"
          />
          <Image
            width={500}
            height={500}
            className="z-20 relative mt-5 pl-5 transition-all teamHover"
            src={m?.image}
            alt={Array.isArray(m.name) ? m.name[0] : "Team Member"}
          />
        </AspectRatio>
        <div>
          <h4 className="rotate-90 tracking-[10px] md:tracking-[18px] md:text-base text-xs z-[99] absolute origin-top-left text-white/40 font-extralight uppercase">
            {m.hobby}
          </h4>
        </div>
      </div>
      <div className="pt-5">
        <div className="flex items-center w-full justify-between">
          <h3 className="text-xl md:text-2xl uppercase">{m.name[0]}</h3>
          <Link href={m?.linkedIn}>
            <FaLinkedin size={30} color="#0a66c2" />
          </Link>
        </div>
        <h6 className="font-serif italic text-5xl md:text-6xl pt-1 font-extralight">
          {m.name[1]}
        </h6>
      </div>
    </div>
  );
};
