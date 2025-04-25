import { CardContainer, CardItem } from "@/components/ui/3d-card";
import { getAllServicesCardData } from "@/controllers/frontend/services.controller";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCards = async () => {
  const { services } = await getAllServicesCardData();

  const varriants = {
    purpleGradient: [
      "from-[#AE6BFB] via-[#c9a8ef] ",
      "bg-gradient-to-t from-[#AE6BFB]/40",
    ],
    yellowGradient: ["from-[#FFD866]", "from-[#F1BB1D]/70 bg-gradient-to-bl"],
    greenGradient: ["from-[#D4FFD1]", "bg-gradient-to-t from-[#54C94C]/40"],
    blueGradient: ["from-[#6075FF]", "bg-gradient-to-t from-[#CAD1FE]"],
    pinkGradient: ["from-[#FACCD2]", "bg-gradient-to-bl from-[#FBE4D1]"],
    tealGradient: ["from-[#60FFE9]", "bg-gradient-to-t from-[#00B59C]/70"],
  };

  return (
    <>
      {services &&
        services.map((service) => {
          const [gradientFrom, bgTo] = varriants[service.variant] || [];

          return (
            <CardContainer
              key={service.title}
              className="!z-30 relative col-span-12 w-full"
            >
              <div
                className={`cardS bg-gradient-to-r flex flex-col cursor-pointer to-white w-full h-full rounded-2xl text-black ${gradientFrom} p-8 z-30 relative ${service.className}`}
              >
                <div className="flex w-full justify-between">
                  <h3 className="text-xl font-medium">{service.type}</h3>
                  <CardItem>
                    <div
                      className={`h-16 w-16 to-white rounded-full flex justify-center items-center p-3 ${
                        bgTo || ""
                      } `}
                    >
                      <Image
                        width={60}
                        height={60}
                        src={service.icon}
                        alt={service.title}
                      />
                    </div>
                  </CardItem>
                </div>
                <div className="pt-5">
                  <h2 className="text-[28px] font-semibold">{service.title}</h2>
                  <p className="pt-5 w-10/12">{service.description}</p>
                  <CardItem>
                    <Link
                      href={`/${service.type
                        .toLowerCase()
                        .replace(/\s/g, "-")}`}
                    >
                      <button className="px-5 py-2 rounded-full flex items-center bg-white cursor-pointer mt-5 hover:scale-110 transition-all">
                        Explore <ArrowUpRight />
                      </button>
                    </Link>
                  </CardItem>
                </div>
              </div>
            </CardContainer>
          );
        })}
    </>
  );
};

export default ServiceCards;
