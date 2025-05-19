import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}) {
  return (
    <button
      data-slot="button"
      className={cn(
        `relative px-7 outline-0 flex items-center transition-all gap-2 group h-[45px] uppercase border border-transparent   cursor-pointer rounded-full text-sm bg-transparent overflow-hidden`,
        className
      )}
      {...props}
    >
      <span
        style={{
          background: `linear-gradient(91deg, #226FFF -5.68%, #DE22FF 54.52%, #FFE11B 114.72%)`,
        }}
        className={`flex absolute inset-0  transition-all`}
      />
      <motion.span
        style={{
          background: `linear-gradient(91deg, #226FFF -5.68%, #DE22FF 54.52%, #FFE11B 114.72%)`,
        }}
        className={`flex absolute inset-[-10px]  transition-all rotate-180 leave-0 group-hover:translate-x-0 translate-x-[-100%] group-hover:blur-none blur-[200px]  duration-500 rounded-full`}
      />

      {/* Button Content */}
      <span className="z-10 flex items-center gap-1 justify-center w-full">
        {children}
      </span>
    </button>
  );
}

export { Button };
