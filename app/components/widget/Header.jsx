"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../ui/Logo";
import { Button } from "@/components/ui/button";
import { MdOutlineWhatsapp } from "react-icons/md";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { HeaderData } from "@/lib/data/HeaderData";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // adjust scroll threshold if needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full z-[999999999999999999999] px-5 fixed flex justify-center mt-5">
      <div
        className={`${
          scrolled
            ? "max-w-[1000px] border border-white/5 rounded-md backdrop-blur-lg"
            : "max-w-[1440px]"
        } w-full flex justify-between items-center transition-all px-5 duration-500 py-2 border-transparent border`}
      >
        <Link href={"/"}>
          <Logo />
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-7 text-sm">
            {HeaderData.navs.map((li, index) =>
              !li.childrens ? (
                <li key={`navs-${index}`}>
                  <Link href={`${li?.path}`}>{li.element}</Link>
                </li>
              ) : (
                <React.Fragment key={`navs-${index}`}>
                  <Tooltip>
                    <TooltipTrigger>
                      <li className=" cursor-pointer flex gap-1 items-center group">
                        {li.element}{" "}
                        <ChevronDown
                          strokeWidth={1.2}
                          className="-mb-1 group-hover:rotate-180 transition-all"
                          size={20}
                        />{" "}
                      </li>
                    </TooltipTrigger>
                    <TooltipContent
                      className={`w-40 bg-transparent backdrop-blur-md border py-3 border-white/5 mt-3`}
                    >
                      <ol className="list-disc pl-5 flex flex-col gap-1.5 text-xs">
                        {li.childrens.map((cLi, index) => (
                          <li key={`childLi-${index}`}>
                            <Link href={cLi.path}>{cLi.element}</Link>
                          </li>
                        ))}
                      </ol>
                      <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-pM to-transparent" />
                    </TooltipContent>
                  </Tooltip>
                </React.Fragment>
              )
            )}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            className="bg-[#30AF5F] whatsappBtn transition-all group flex w-fit p-2 rounded-full max-[575px]:hidden"
            href={`wa.me`}
          >
            <MdOutlineWhatsapp
              className=" group-hover:opacity-0 transition-all"
              size={20}
            />
            <ArrowUpRight
              className=" opacity-0 group-hover:opacity-100 delay-100 ease-in transition-all absolute"
              strokeWidth={1.5}
              size={20}
            />
          </Link>
          <Button className={`max-[575px]:hidden`}>Book A Call</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
