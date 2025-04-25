import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/widget/Header";
import { TooltipProvider } from "@/components/ui/tooltip";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        data-new-gr-c-s-check-loaded="14.1232.0"
        data-gr-ext-installed=""
        className={`bg-bodyBg overflow-x-hidden text-white [&::-webkit-scrollbar]:w-0 ${plusJakarta.className} antialiased`}
      >
        <TooltipProvider>
          <Header />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
