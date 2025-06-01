"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Parent container animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// Individual card animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

// CompetenciesCard with fade in/out animation
export const CompetenciesCard = ({ data }) => {
  return (
    <motion.div variants={cardVariants} exit="exit">
      <div>
        <Image width={62} height={62} alt={data.name} src={data.image} />
        <div className="pt-2">
          <h2 className="text-[22px] text-pY">{data.name}</h2>
          <p className="pt-2 text-current/70 font-light">{data.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

// CompetenciesClient with staggered fade show
const CompetenciesClient = ({ children }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="max-w-[1240px] w-full px-5 pb-20"
    >
      {children}
    </motion.div>
  );
};

export default CompetenciesClient;
