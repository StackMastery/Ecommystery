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
import Hamburger from "hamburger-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/sanityImage";

const Header = ({ services }) => {
  const [isMenuOff, setisMenuOff] = useState();
  const [scrolled, setScrolled] = useState(false);
  const [servicesCollaps, setservicesCollaps] = useState(true);

  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathName.startsWith("/eadmin")) {
    return;
  }

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
            ? "max-w-[1000px] border bg-black/5 border-white/5 rounded-full backdrop-blur-lg"
            : "max-w-[1440px]"
        } w-full flex justify-between items-center transition-all px-5 duration-500 py-2 border-transparent border`}
      >
        <Link
          href="/"
          className="overflow-hidden transition-[width] duration-500 ease-in-out w-56 max-[365px]:w-10"
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
                      <Link
                        className={`hover:text-neutral-400 flex items-center gap-2 group px-4 py-1 rounded-full transition-all duration-300 ${
                          pathName === li.path && "bg-white/5"
                        }`}
                        href={`${li?.path}`}
                      >
                        {li.element}
                        <ChevronDown
                          strokeWidth={1.2}
                          className="-mb-1 group-hover:rotate-180 transition-all"
                          size={20}
                        />{" "}
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent
                      className={`w-[900px]  backdrop-blur-2xl rounded-2xl border bg-white/5 py-2 border-white/10 mt-8 hidden lg:block`}
                    >
                      <div className="grid grid-cols-12 p-5 gap-8">
                        {services.map((childNav, index) => (
                          <Link
                            key={`servieces-${index}`}
                            className="flex gap-3 group col-span-4 items-center"
                            href={`/services/${childNav.slug.current}`}
                          >
                            <span
                              style={{ backgroundImage: childNav.iGrad }}
                              className="flex rounded-full overflow-hidden bg-white/50"
                            >
                              <span
                                style={{ background: childNav.iGrad }}
                                className={`to-white p-2 flex justify-center h-9 w-9 rounded-full `}
                              >
                                <Image
                                  width={30}
                                  height={30}
                                  src={urlFor(childNav.image).url()}
                                  alt={childNav.title}
                                />
                              </span>
                            </span>
                            <div>
                              <h4 className="text-[#B3B3B3] text-[12px] mt-1">
                                {childNav.type.title}
                              </h4>
                              <h2
                                className={`bg-clip-text text-[16px] from-pB via-pM to-pY bg-gradient-to-r transition-all group-hover:text-transparent`}
                              >
                                {childNav.title}
                              </h2>
                            </div>
                          </Link>
                        ))}
                        <Link
                          className="flex gap-3 col-span-12 -mb-2 bg-white/5 border justify-center border-white/10 rounded-md group items-center"
                          href={"/services"}
                        >
                          <div>
                            <p
                              className={`bg-clip-text text-[16px] py-2 from-pB via-pM to-pY bg-gradient-to-r transition-all group-hover:text-transparent`}
                            >
                              See All Services
                            </p>
                          </div>
                        </Link>
                      </div>
                      <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px blur-sm shadow-2xl  bg-gradient-to-r from-transparent via-pM to-transparent" />
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
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: 150, opacity: 0, filter: "blur(10px)" }}
                transition={{
                  type: "tween",
                  damping: 15,
                  stiffness: 100,
                  duration: 0.3,
                }}
                id="menuMobile"
                className={`flex w-full  flex-col [&::-webkit-scrollbar]:w-0  backdrop-blur-md border bg-[#de22ff04] border-white/5 p-10 rounded-md mt-5 ${
                  !servicesCollaps &&
                  "max-[600px]:overflow-scroll max-[600px]:h-[85vh]"
                }`}
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
                        <button
                          onClick={() => setservicesCollaps(!servicesCollaps)}
                          className=" cursor-pointer flex gap-1 items-center group hover:text-neutral-400 transition-all duration-300"
                        >
                          {li.element} -
                        </button>
                        {!servicesCollaps && (
                          <div className=" grid max-[550px]:grid-cols-1 grid-cols-2 min-[720px]:grid-cols-3 gap-5 text-xs backdrop-blur-3xl bg-pM/10 border -my-3 p-5 gap-x-10 border-white/5 rounded-md ">
                            {services.map((childNav, index) => (
                              <Link
                                key={`servieces-${index}`}
                                className="flex gap-3 group items-center"
                                href={`/services/${childNav.slug.current}`}
                              >
                                <span
                                  style={{ backgroundImage: childNav.iGrad }}
                                  className="flex rounded-full overflow-hidden bg-white/50"
                                >
                                  <span
                                    style={{ background: childNav.iGrad }}
                                    className={`to-white p-2 flex justify-center h-8 w-8 scale-90 rounded-full ${childNav.className}`}
                                  >
                                    <Image
                                      width={20}
                                      height={20}
                                      src={urlFor(childNav.image).url()}
                                      alt={childNav.title}
                                    />
                                  </span>
                                </span>
                                <div>
                                  <h4 className="text-[#B3B3B3] text-[8px]">
                                    {childNav.type.title}
                                  </h4>
                                  <h2
                                    className={`bg-clip-text from-pB via-pM to-pY bg-gradient-to-r transition-all group-hover:text-transparent`}
                                  >
                                    {childNav.title}
                                  </h2>
                                </div>
                              </Link>
                            ))}
                            <Link
                              href={"/services"}
                              className="bg-white/5 px-5 py-2 rounded-md"
                            >
                              <h2
                                className={`bg-clip-text text-[13px] from-pB via-pM to-pY bg-gradient-to-r transition-all group-hover:text-transparent`}
                              >
                                See All Services
                              </h2>
                            </Link>
                            <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-pM to-transparent" />
                          </div>
                        )}
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
        target="_blank"
        href={`https://wa.me/8801714114459`}
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
      <Link href={"/contact"}>
        <Button className={`flex-grow justify-center min-[575px]:flex-grow-0`}>
          Book A Call
        </Button>
      </Link>
    </>
  );
};
