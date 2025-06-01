import { useParsedStyle, useSplitTitleParts } from "@/lib/utils";
import { motion } from "framer-motion";

export const fadeInUpVariant = {
  hidden: { opacity: 0, y: 0, filter: "blur(8px)" },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const gradientColors = [
  "from-[#60FFE9]",
  "from-[#54C94C]",
  "from-[#FF7B54]",
  "from-[#FC54FF]",
  "from-[#DE22FF]",
  "from-[#FFE11B]",
];

const TitleDes = ({ value }) => {
  const extractedStyle = useParsedStyle(value.title);
  const parts = useSplitTitleParts(value.title);

  return (
    <section className="section pb-20">
      <div className="w-full max-w-[740px]  px-5 flex flex-col gap-10">
        <motion.div
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          className="w-full relative z-10 flex items-center flex-col"
        >
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
          <p className="text-center my-5 text-lg">{value.description}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default TitleDes;
