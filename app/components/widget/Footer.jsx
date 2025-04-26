import Link from "next/link";
import Logo from "../ui/Logo";
import { HeaderData } from "@/lib/data/HeaderData";

const Footer = () => {
  return (
    <>
      <footer className="section z-50 relative">
        <div className="flex w-full max-w-[1440px] border-t px-5 flex-col items-center justify-center border-current/10">
          <div className="flex w-full justify-between py-10 md:py-20 gap-10 flex-wrap">
            <div className="max-[480px]:w-full">
              <Link href={"/"}>
                <Logo />
              </Link>
            </div>
            <ul className="space-y-5 ">
              {HeaderData.navs.map((nav, index) => (
                <li
                  className="hover:text-current/100 text-current/80 cursor-pointer transition-all"
                  key={`quick-links-${index}`}
                >
                  {!nav.childrens ? (
                    <Link href={nav.path}>{nav.element}</Link>
                  ) : (
                    <>{nav.element}</>
                  )}
                </li>
              ))}
            </ul>
            <ul className="space-y-5 ">
              {Socials.map((nav, index) => (
                <li
                  className="hover:text-current/100 text-current/80 cursor-pointer transition-all"
                  key={`quick-links-${index}`}
                >
                  {!nav.childrens ? (
                    <Link href={nav.path}>{nav.element}</Link>
                  ) : (
                    <>{nav.element}</>
                  )}
                </li>
              ))}
            </ul>
            <div className="text-current/70">
              <h3 className="font-medium">Terms and Conditions </h3>
              <span className="pt-3 flex">
                Copyright © {new Date().getFullYear()}
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

const Socials = [
  {
    path: "/",
    element: "Linkedin",
  },
  {
    path: "/x",
    element: "Twitter/X",
  },
  {
    path: "/facebook",
    element: "Facebook",
  },
];
