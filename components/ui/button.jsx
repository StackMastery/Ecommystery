import * as React from "react";
import { cn } from "@/lib/utils";
import SVGGredient from "@/app/components/ui/SVGGredient";

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
        `relative px-7 outline-0 flex items-center transition-all gap-2 group h-[40px] uppercase border border-transparent hover:border-pM/20 focus:border-pM/20 cursor-pointer rounded-full text-sm bg-transparent overflow-hidden`,
        className
      )}
      {...props}
    >
      {/* SVG Background */}
      <SVGGredient className="absolute transition-all group-hover:blur-md group-hover:scale-150 group-hover:rotate-45 group-focus:scale-150 group-focus:rotate-45 inset-0 z-0 h-20" />

      {/* Button Content */}
      <span className="z-10 flex items-center gap-1">{children}</span>
    </button>
  );
}

export { Button };
