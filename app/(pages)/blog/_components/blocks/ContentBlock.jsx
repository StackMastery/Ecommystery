import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/sanityImage";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUpVariant } from "./TitleDes";

const ContentBlock = ({ data }) => {
  const btnData = data?.button?.length > 0 ? JSON.parse(data.button) : "";

  return (
    <>
      <motion.section
        variants={fadeInUpVariant}
        initial="hidden"
        animate="visible"
        className="section pt-10 pb-40"
      >
        <div
          className={` flex px-5  flex-col w-full items-center gap-x-10 gap-5 ${data?.position === "left" ? `sm:flex-row` : `sm:flex-row-reverse`} max-w-[1440px] relative z-20`}
        >
          <div className="w-full sm:w-6/12 space-y-5">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
              {data.title}
            </h3>
            <p className="text-sm sm:text-lg text-white/70">
              {data.description}
            </p>
            {btnData[0] && (
              <Link href={`${btnData[1]}`}>
                <Button>{btnData[0]}</Button>
              </Link>
            )}
          </div>
          <div
            className={`w-full sm:w-6/12  relative flex ${data.position === "left" ? "justify-end" : "justify-start"}`}
          >
            <Image
              width={500}
              height={500}
              className="rounded-2xl w-full sm:w-auto"
              src={urlFor(data.image.asset).width(500).height(500).url()}
              alt={"Ecomystery content image"}
            />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default ContentBlock;
