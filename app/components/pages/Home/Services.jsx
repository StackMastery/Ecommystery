import { Suspense } from "react";
import ServiceCards from "./ServiceCards";
import ServicesClient, { ServiceSectionAnimated } from "./ServicesClient";
import ServiceCardFallback from "./ServiceCardFallback";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Services = ({ titleDesShow = true, servicesLength = 6 }) => {
  return (
    <>
      <ServiceSectionAnimated className="section py-36">
        <div className="w-full max-w-[1440px] flex items-center flex-col px-5">
          <ServicesClient titleDesShow={titleDesShow} />
          <div
            id="servicesGrid"
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pt-10 gap-5 w-full"
          >
            <Suspense fallback={<ServiceCardFallback />}>
              <ServiceCards servicesLength={servicesLength} />
            </Suspense>
          </div>
          {titleDesShow && (
            <Link className="flex w-full md:w-fit" href={"/services"}>
              <button className="flex w-full justify-center  hover:bg-white/20 transition-all hover:text-white !font-semibold bg-white z-50 relative cursor-pointer mt-10 px-10 py-4 rounded-full text-[#684271]">
                VIEW ALL SERVICES <ArrowUpRight />
              </button>
            </Link>
          )}
        </div>
      </ServiceSectionAnimated>
    </>
  );
};

export default Services;
