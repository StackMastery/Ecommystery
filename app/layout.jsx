import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "./script.js";
import Header from "./components/widget/Header";
import { TooltipProvider } from "@/components/ui/tooltip";
import Footer from "./components/widget/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Ecommystery",
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        data-new-gr-c-s-check-loaded="14.1235.0"
        data-gr-ext-installed=""
        className={`bg-bodyBg relative overflow-x-hidden text-white [&::-webkit-scrollbar]:w-0 ${plusJakarta.className} antialiased`}
      >
        <TooltipProvider>
          <Header />
          {children}
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}
