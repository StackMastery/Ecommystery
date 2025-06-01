import { useParsedStyle, useSplitTitleParts } from "@/lib/utils";
import { motion } from "framer-motion";

const fadeInUpVariant = {
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

const ProcessGroup = ({ value }) => {
  const extractedStyle = useParsedStyle(value.title);
  const parts = useSplitTitleParts(value.title);

  return (
    <section className="section pb-20">
      <div className="w-full max-w-[1440px]  px-5 flex flex-col gap-10">
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
        </motion.div>
        <div className="gap-5 grid grid-cols-12 pt-5">
          {value.steps.map((step, index) => (
            <motion.div
              className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 bg-white/5 p-6 flex flex-col h-full rounded-2xl relative !z-50 transition-all hover:-translate-y-2 duration-500"
              key={step._key}
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              custom={index}
            >
              <span
                className={`px-4 py-1 w-fit to-white/70 text-black font-medium rounded-full bg-gradient-to-r ${
                  gradientColors[index % gradientColors.length]
                }`}
              >
                Step {index + 1}
              </span>

              <h2 className="text-xl font-medium pt-4 text-white">
                {step.title}
              </h2>
              <p className="text-sm text-white/80 pt-4 font-extralight">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessGroup;
