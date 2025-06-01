"use client";

import Link from "next/link";
import Logo from "../ui/Logo";
import { HeaderData } from "@/lib/data/HeaderData";
import NewsletterSubscribe from "../ui/NewsletterSubscribe";
import { usePathname } from "next/navigation";
import GradientText from "@/components/TextAnimations/GradientText/GradientText";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const pathName = usePathname();

  if (pathName.startsWith("/eadmin")) {
    return;
  }

  return (
    <>
      <footer className="section z-50 relative overflow-hidden">
        <div className="flex w-full max-w-[1440px] border-t px-5 flex-col items-center justify-center border-current/5">
          <div className="flex w-full justify-between py-20 gap-10 flex-wrap !z-50 relative">
            <div className="w-full md:w-fit relative !z-50">
              <Link href={"/"}>
                <Logo />
              </Link>
            </div>
            <ul className="space-y-5 relative !z-[9999] ">
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
            <div className="text-current/70 max-[500px]:w-full">
              <h2 className="text-[32px] font-medium text-white leading-8  max-w-[250px]">
                Contact us for your{" "}
                <span
                  style={{
                    backgroundImage: `linear-gradient(to right, #3b82f6,  #3b82f6 ,#6366f1, #9333ea, #f59e0b, #facc15)`,
                  }}
                  className=" italic pr-1 font-serif bg-clip-text text-transparent [background-position:left] [background-size:100%]"
                >
                  Service
                </span>
              </h2>
              <Link href={"/contact"} className="flex mt-5 w-fit">
                <GradientText
                  showBorder
                  className="py-3 group"
                  animationSpeed={3}
                  colors={["#DE22FF", "#FFE11B"]}
                >
                  <span className="text-white px-5 flex items-center  gap-1 font-light">
                    Contact Us{" "}
                    <ArrowUpRight
                      className="group-hover:rotate-45 transition-all"
                      strokeWidth={1.2}
                    />
                  </span>
                </GradientText>
              </Link>
            </div>
          </div>
          <div className="w-full flex justify-end absolute max-w-[1440px] -z-0">
            <span
              style={{
                background: `linear-gradient(119deg, #226FFF 27.45%,  #DE22FF, #DE22FF 42.89%, #FFE11B 58.43%)`,
              }}
              className="w-[900px] h-[900px] rotate-45 translate-y-[400px] blur-[200px]"
            />
          </div>
          <div className="w-full flex-col pb-40 flex items-center justify-center overflow-hidden !z-50">
            <svg
              className="py-10"
              viewBox="0 0 1270 136"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.0192 23.144V56.2538H77.3802V76.7149H21.0192V112.801H81.2865V133.076H0V2.86883H81.2865V23.144H21.0192Z"
                fill="url(#paint0_linear_2019_188)"
              />
              <path
                d="M205.496 113.917C199.544 120.737 192.476 126.008 184.291 129.728C176.231 133.448 167.24 135.308 157.32 135.308C145.291 135.308 134.13 132.332 123.838 126.38C113.545 120.427 105.361 112.367 99.2844 102.198C93.3321 91.9057 90.3559 80.5591 90.3559 68.1584C90.3559 55.5097 93.3321 44.1011 99.2844 33.9325C105.237 23.64 113.297 15.5795 123.466 9.75121C133.758 3.79889 145.043 0.822727 157.32 0.822727C167.24 0.822727 176.231 2.68283 184.291 6.40303C192.476 10.1232 199.544 15.3935 205.496 22.2139L190.429 37.2807C181.129 26.9882 170.092 21.8419 157.32 21.8419C149.259 21.8419 141.757 23.888 134.812 27.9802C127.868 31.9484 122.35 37.5287 118.257 44.7211C114.165 51.7895 112.119 59.602 112.119 68.1584C112.119 76.5909 114.165 84.3413 118.257 91.4097C122.35 98.3541 127.868 103.872 134.812 107.965C141.757 112.057 149.259 114.103 157.32 114.103C170.34 114.103 181.377 108.957 190.429 98.6641L205.496 113.917Z"
                fill="url(#paint1_linear_2019_188)"
              />
              <path
                d="M275.443 135.308C263.291 135.308 252.068 132.332 241.775 126.38C231.483 120.303 223.36 112.119 217.408 101.826C211.456 91.5337 208.48 80.3111 208.48 68.1584C208.48 55.8818 211.456 44.5971 217.408 34.3046C223.484 23.888 231.607 15.7035 241.775 9.75121C252.068 3.67488 263.291 0.636719 275.443 0.636719C287.596 0.636719 298.757 3.67488 308.925 9.75121C319.218 15.8275 327.34 24.074 333.293 34.4906C339.369 44.7831 342.407 56.0058 342.407 68.1584C342.407 80.3111 339.431 91.5337 333.479 101.826C327.526 111.995 319.404 120.117 309.111 126.194C298.819 132.27 287.596 135.308 275.443 135.308ZM275.443 114.661C283.876 114.661 291.502 112.615 298.323 108.523C305.267 104.306 310.723 98.6641 314.691 91.5957C318.66 84.5273 320.644 76.7149 320.644 68.1584C320.644 59.602 318.66 51.7275 314.691 44.5351C310.723 37.3427 305.267 31.7004 298.323 27.6082C291.502 23.392 283.876 21.2839 275.443 21.2839C267.011 21.2839 259.322 23.392 252.378 27.6082C245.558 31.7004 240.163 37.3427 236.195 44.5351C232.227 51.7275 230.243 59.602 230.243 68.1584C230.243 76.7149 232.227 84.5273 236.195 91.5957C240.163 98.6641 245.558 104.306 252.378 108.523C259.322 112.615 267.011 114.661 275.443 114.661Z"
                fill="url(#paint2_linear_2019_188)"
              />
              <path
                d="M355.824 2.86883H374.053L420.742 71.3206L467.245 2.86883H485.474V133.076H464.64V42.303L427.996 95.6879H413.488L376.844 42.303V133.076H355.824V2.86883Z"
                fill="url(#paint3_linear_2019_188)"
              />
              <path
                d="M508.462 2.86883H526.691L573.379 71.3206L619.882 2.86883H638.111V133.076H617.278V42.303L580.634 95.6879H566.125L529.481 42.303V133.076H508.462V2.86883Z"
                fill="url(#paint4_linear_2019_188)"
              />
              <path
                d="M715.856 89.5496V133.076H695.023V89.7356L647.218 2.86883H670.655L705.439 69.2745L740.223 2.86883H763.847L715.856 89.5496Z"
                fill="url(#paint5_linear_2019_188)"
              />
              <path
                d="M805.522 135.308C794.609 135.308 785.246 132.146 777.434 125.822C769.622 119.373 764.599 111.313 762.367 101.64L781.712 93.4558C782.828 99.7802 785.557 104.988 789.897 109.081C794.237 113.049 799.445 115.033 805.522 115.033C812.218 115.033 817.55 113.235 821.518 109.639C825.487 106.043 827.471 101.578 827.471 96.246C827.471 85.2094 819.596 78.017 803.847 74.6688C791.075 71.9406 781.278 67.6004 774.458 61.6481C767.762 55.5717 764.413 47.3253 764.413 36.9087C764.413 30.3363 766.149 24.322 769.622 18.8657C773.094 13.2854 777.868 8.88317 783.944 5.65899C790.021 2.43481 796.779 0.822727 804.22 0.822727C813.52 0.822727 821.828 3.36487 829.145 8.44915C836.461 13.4094 841.546 20.4158 844.398 29.4683L825.239 37.4667C823.875 32.8785 821.271 29.0343 817.426 25.9341C813.706 22.7099 809.304 21.0978 804.22 21.0978C798.391 21.0978 793.741 22.5859 790.269 25.5621C786.921 28.4142 785.246 32.1344 785.246 36.7227C785.246 40.6909 787.169 44.2251 791.013 47.3253C794.857 50.3014 800.623 52.7196 808.312 54.5797C821.332 57.6798 831.253 62.5161 838.073 69.0885C844.894 75.5368 848.304 84.5273 848.304 96.06C848.304 103.748 846.568 110.569 843.096 116.521C839.747 122.473 834.849 127.124 828.401 130.472C821.952 133.696 814.326 135.308 805.522 135.308Z"
                fill="url(#paint6_linear_2019_188)"
              />
              <path
                d="M950.769 23.33H910.963V133.076H890.13V23.33H850.324V2.86883H950.769V23.33Z"
                fill="url(#paint7_linear_2019_188)"
              />
              <path
                d="M985.264 23.144V56.2538H1041.63V76.7149H985.264V112.801H1045.53V133.076H964.245V2.86883H1045.53V23.144H985.264Z"
                fill="url(#paint8_linear_2019_188)"
              />
              <path
                d="M1160.61 133.076H1134.76L1091.05 80.6211H1082.86V133.076H1061.84V2.86883H1111.69C1120.25 2.86883 1127.75 4.54293 1134.2 7.89111C1140.65 11.1153 1145.61 15.7035 1149.08 21.6559C1152.55 27.4842 1154.29 34.1186 1154.29 41.559C1154.29 48.2553 1152.68 54.3937 1149.45 59.974C1146.23 65.5543 1141.7 70.0805 1135.87 73.5527C1130.17 77.0249 1123.72 79.133 1116.53 79.8771L1160.61 133.076ZM1110.2 60.718C1117.27 60.718 1122.73 58.9199 1126.57 55.3237C1130.42 51.6035 1132.34 47.0153 1132.34 41.559C1132.34 36.2267 1130.54 31.7624 1126.95 28.1662C1123.35 24.57 1118.45 22.7719 1112.25 22.7719H1082.86V60.718H1110.2Z"
                fill="url(#paint9_linear_2019_188)"
              />
              <path
                d="M1221.1 89.5496V133.076H1200.27V89.7356L1152.46 2.86883H1175.9L1210.68 69.2745L1245.47 2.86883H1269.09L1221.1 89.5496Z"
                fill="url(#paint10_linear_2019_188)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2019_188"
                  x1="-12.9905"
                  y1="-23.4231"
                  x2="962.088"
                  y2="599.393"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#226FFF" />
                  <stop offset="0.5" stopColor="#DE22FF" />
                  <stop offset={1} stopColor="#FFE11B" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2019_188"
                  x1="-12.9905"
                  y1="-23.4231"
                  x2="962.088"
                  y2="599.393"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#226FFF" />
                  <stop offset="0.5" stopColor="#DE22FF" />
                  <stop offset={1} stopColor="#FFE11B" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_2019_188"
                  x1="-12.9905"
                  y1="-23.4231"
                  x2="962.088"
                  y2="599.393"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#226FFF" />
                  <stop offset="0.5" stopColor="#DE22FF" />
                  <stop offset={1} stopColor="#FFE11B" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_2019_188"
                  x1="-12.9905"
                  y1="-23.4231"
                  x2="962.088"
                  y2="599.393"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#226FFF" />
                  <stop offset="0.5" stopColor="#DE22FF" />
                  <stop offset={1} stopColor="#FFE11B" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_2019_188"
                  x1="-12.9905"
                  y1="-23.4231"
                  x2="962.088"
                  y2="599.393"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#226FFF" />
                  <stop offset="0.5" stopColor="#DE22FF" />
                  <stop offset={1} stopColor="#FFE11B" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_2019_188"
                  x1="-12.9905"
                  y1="-23.4231"
                  x2="962.088"
                  y2="599.393"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#226FFF" />
                  <stop offset="0.5" stopColor="#DE22FF" />
                  <stop offset={1} stopColor="#FFE11B" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_2019_188"
                  x1="-12.9905"
                  y1="-23.4231"
                  x2="962.088"
                  y2="599.393"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#226FFF" />
                  <stop offset="0.5" stopColor="#DE22FF" />
                  <stop offset={1} stopColor="#FFE11B" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear_2019_188"
                  x1="-12.9905"
                  y1="-23.4231"
                  x2="962.088"
                  y2="599.393"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#226FFF" />
                  <stop offset="0.5" stopColor="#DE22FF" />
                  <stop offset={1} stopColor="#FFE11B" />
                </linearGradient>
                <linearGradient
                  id="paint8_linear_2019_188"
                  x1="-12.9905"
                  y1="-23.4231"
                  x2="962.088"
                  y2="599.393"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#226FFF" />
                  <stop offset="0.5" stopColor="#DE22FF" />
                  <stop offset={1} stopColor="#FFE11B" />
                </linearGradient>
                <linearGradient
                  id="paint9_linear_2019_188"
                  x1="-12.9905"
                  y1="-23.4231"
                  x2="962.088"
                  y2="599.393"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#226FFF" />
                  <stop offset="0.5" stopColor="#DE22FF" />
                  <stop offset={1} stopColor="#FFE11B" />
                </linearGradient>
                <linearGradient
                  id="paint10_linear_2019_188"
                  x1="-12.9905"
                  y1="-23.4231"
                  x2="962.088"
                  y2="599.393"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#226FFF" />
                  <stop offset="0.5" stopColor="#DE22FF" />
                  <stop offset={1} stopColor="#FFE11B" />
                </linearGradient>
              </defs>
            </svg>
            <p className="text-[14px] font-light text-current/50">
              This product focuses on providing organizations with tools to
              achieve financial transparency. It might include features for
              budgeting, expense tracking, financial reporting, and analytics to
              help businesses understand and communicate their financial health
              clearly. This product focuses on providing organizations with
              tools to achieve financial transparency. It might include features
              for budgeting, expense tracking, financial reporting, and
              analytics to help businesses understand and communicate their
              financial health clearly.
            </p>
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
    element: "Get a Quote",
  },
  {
    path: "/x",
    element: "Our team",
  },
  {
    path: "/facebook",
    element: "Contact Us",
  },
];
