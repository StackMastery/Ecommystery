import { urlFor } from "@/sanity/lib/sanityImage";
import Image from "next/image";
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

const ProcessGroup = ({ value }) => {
  return (
    <section className="section pb-20">
      <div className="w-full max-w-[1440px] gap-5 grid grid-cols-12 px-5">
        {value.steps.map((step, index) => (
          <motion.div
            className="col-span-12 sm:col-span-6 md:col-span-3 bg-white/5 p-6 flex flex-col h-full rounded-2xl relative !z-50 transition-all hover:-translate-y-2 duration-500"
            key={step._key}
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            custom={index}
          >
            <span className="bg-gradient-to-br from-[#DCC3FF] to-white w-fit p-[8px] rounded-full mb-3">
              <Image
                width={28}
                height={28}
                src={urlFor(step.icon.asset).width(30).url()}
                alt={step.title}
              />
            </span>
            <h2 className="text-2xl font-semibold text-white">{step.title}</h2>
            <p className="text-sm text-white/80 pt-2 font-extralight">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProcessGroup;
