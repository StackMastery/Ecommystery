"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { AnimatePresence } from "framer-motion";

const ImageLoader = ({ src, alt, ...props }) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
        {...props}
      />
      <AnimatePresence>
        {loading && (
          <motion.div
            exit={{ opacity: 0 }}
            className={`flex w-full justify-center items-center h-full absolute inset-0 bg-gradient-to-br from-pB to-pM`}
          >
            <div className="w-full h-full flex justify-center items-center   backdrop-blur-[100px]">
              <Logo className=" scale-100 md:scale-200 animate-pulse" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageLoader;
