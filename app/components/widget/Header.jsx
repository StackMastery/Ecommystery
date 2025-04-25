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
import { AnimatePresence, motion } from "framer-motion";
import { gredTextClass } from "../pages/Home/Hero";
import Hamburger from "hamburger-react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOff, setisMenuOff] = useState();
  const [scrolled, setScrolled] = useState(false);

  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.6,
        type: "tween",
      }}
      className="w-full z-[999999999999999999999] px-5 fixed flex justify-center mt-5 max-w-full flex-col items-center"
    >
      <div
        className={`${
          scrolled
            ? "max-w-[1000px] border border-white/5 rounded-md backdrop-blur-lg"
            : "max-w-[1440px]"
        } w-full flex justify-between items-center transition-all px-5 duration-500 py-2 border-transparent border`}
      >
        <Link
          href="/"
          className="overflow-hidden transition-[width] duration-500 ease-in-out w-52 max-[365px]:w-10"
        >
          <Logo />
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-4 text-sm">
            {HeaderData.navs.map((li, index) =>
              !li.childrens ? (
                <li key={`navs-${index}`}>
                  <Link
                    className={`hover:text-neutral-400 px-4 py-1 rounded-full transition-all duration-300 ${
                      pathName === li.path && "bg-white/5"
                    }`}
                    href={`${li?.path}`}
                  >
                    {li.element}
                  </Link>
                </li>
              ) : (
                <React.Fragment key={`navs-${index}`}>
                  <Tooltip>
                    <TooltipTrigger>
                      <li className=" cursor-pointer flex gap-1 items-center group hover:text-neutral-400 transition-all duration-300">
                        {li.element}{" "}
                        <ChevronDown
                          strokeWidth={1.2}
                          className="-mb-1 group-hover:rotate-180 transition-all"
                          size={20}
                        />{" "}
                      </li>
                    </TooltipTrigger>
                    <TooltipContent
                      className={`w-40 bg-transparent backdrop-blur-md border py-2 border-white/5 mt-3`}
                    >
                      <ol className=" flex flex-col text-xs ">
                        {li.childrens.map((cLi, index) => (
                          <li key={`childLi-${index}`}>
                            <Link
                              className="flex gap-2 font-light items-center hover:text-neutral-400 transition-all duration-300"
                              href={cLi.path}
                            >
                              {/* prettier-ignore */}
                              <span className={`${gredTextClass} text-lg`}>{index + 1}. {" "}</span>{" "}
                              {cLi.element}
                            </Link>
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
          <div className="flex items-center gap-3 max-[575px]:hidden">
            <HeaderBtns />
          </div>
          <div className="lg:hidden scale-90 text-white/50 border rounded-md border-white/5">
            <Hamburger
              onToggle={(toggled) => {
                if (toggled) {
                  setisMenuOff(true);
                } else {
                  setisMenuOff(false);
                }
              }}
              size={30}
            />

            <motion.div
              initial={{ top: "100%" }}
              animate={{ top: isMenuOff ? "-1px" : "100%" }}
              transition={{ type: "tween", stiffness: 300, damping: 20 }}
              className="absolute inset-x-0 h-px w-1/2 mx-auto shadow-2xl bg-gradient-to-r blur-[2px] from-transparent via-pM to-transparent"
            />
            <motion.div
              initial={{ top: "100%" }}
              animate={{ top: isMenuOff ? "-1px" : "100%" }}
              transition={{ type: "tween", stiffness: 300, damping: 20 }}
              className="absolute inset-x-0 h-px w-1/2 mx-auto shadow-2xl bg-gradient-to-r blur-[2px] from-transparent via-pM to-transparent"
            />
          </div>
        </div>
      </div>
      <div className="flex  w-full max-w-[1240px] justify-center lg:hidden">
        <div className="w-full fixed left-0 px-5">
          <AnimatePresence>
            {isMenuOff && (
              <motion.div
                initial={{ y: 150, opacity: 0, filter: "blur(10px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }} // Note: opacity should be between 0 and 1
                exit={{ y: 150, opacity: 0, filter: "blur(10px)" }}
                transition={{
                  type: "tween",
                  damping: 15,
                  stiffness: 100,
                  duration: 0.3,
                }}
                id="menuMobile"
                className="flex w-full flex-col [&::-webkit-scrollbar]:w-0  backdrop-blur-md border bg-[#de22ff04] border-white/5 p-10 rounded-md mt-5"
              >
                <ul className="flex flex-col gap-7 text-sm">
                  {HeaderData.navs.map((li, index) =>
                    !li.childrens ? (
                      <li key={`navs-${index}`}>
                        <Link
                          className="hover:text-neutral-400 transition-all duration-300"
                          href={`${li?.path}`}
                        >
                          {li.element}
                        </Link>
                      </li>
                    ) : (
                      <React.Fragment key={`navs-${index}`}>
                        <li className=" cursor-pointer flex gap-1 items-center group hover:text-neutral-400 transition-all duration-300">
                          {li.element} -
                        </li>

                        <ol className=" flex flex-col text-xs backdrop-blur-3xl border -my-3 p-2 border-white/5 rounded-md ">
                          {li.childrens.map((cLi, index) => (
                            <li key={`childLi-${index}`}>
                              <Link
                                className="flex gap-2 font-light items-center hover:text-neutral-400 transition-all duration-300"
                                href={cLi.path}
                              >
                                {/* prettier-ignore */}
                                <span className={`${gredTextClass} text-lg`}>{index + 1}. {" "}</span>{" "}
                                {cLi.element}
                              </Link>
                            </li>
                          ))}
                          <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-pM to-transparent" />
                        </ol>
                      </React.Fragment>
                    )
                  )}
                  <div className="flex w-full gap-3 min-[575px]:hidden">
                    <HeaderBtns />
                  </div>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

const HeaderBtns = () => {
  return (
    <>
      <Link
        className="bg-[#30AF5F] whatsappBtn transition-all group flex w-10 h-10 items-center justify-center p-2 rounded-full"
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
      <Button className={`flex-grow justify-center min-[575px]:flex-grow-0`}>
        Book A Call
      </Button>
    </>
  );
};
