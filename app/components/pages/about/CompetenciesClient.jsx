"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const CompetenciesCard = ({ data }) => {
  return (
    <>
      <div>
        <Image width={62} height={62} alt={data.name} src={data.image} />
        <div className="pt-2">
          <h2 className="text-[22px] text-pY">{data.name}</h2>
          <p className="pt-2 text-current/70 font-light">{data.description}</p>
        </div>
      </div>
    </>
  );
};

const CompetenciesClient = ({ children }) => {
  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0, filter: "blur(10px)" }}
        whileInView={{ y: 0, opacity: 100, filter: "blur(0px)" }}
        transition={{
          type: "tween",
          duration: 0.8, // ← duration increases by index
          stiffness: 300,
          damping: 20,
        }}
        className="max-w-[1240px] w-full px-5 pb-20"
      >
        {children}
      </motion.div>
    </>
  );
};

export default CompetenciesClient;
