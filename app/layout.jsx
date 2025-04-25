import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/widget/Header";
import { TooltipProvider } from "@/components/ui/tooltip";
import Head from "next/head"; // Importing Head for meta tag

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
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
        </Head>
        <TooltipProvider>
          <Header />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
