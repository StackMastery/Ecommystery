import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/widget/Header";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Viewport } from "next";

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
  // Also supported but less commonly used
  // interactiveWidget: 'resizes-visual',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
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
