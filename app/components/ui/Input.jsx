"use client";

import React, { forwardRef, useState } from "react";

export const Input = forwardRef(
  (
    {
      icon,
      required,
      defaultValue,
      className,
      childrenClass,
      label,
      children,
      inputType = "input",
      ...props
    },
    ref
  ) => {
    const Component = inputType;

    return (
      <div className="flex flex-col gap-2 w-full">
        {label && <label className="font-light text-xl">{label} </label>}
        <Component
          defaultValue={defaultValue}
          className={`bg-white/5 text-lg placeholder:text-[#767577] w-full outline-none px-5 ${
            inputType === "textarea"
              ? "!rounded-2xl py-3 min-h-[120px] "
              : "rounded-full py-3"
          } ${className}`}
          ref={ref}
          {...props}
        />

        {icon && <span className="-mt-10 w-fit scale-[0.8] ml-2">{icon}</span>}
        <span className={`-mt-4 ${childrenClass || ""}`}>{children}</span>
      </div>
    );
  }
);
