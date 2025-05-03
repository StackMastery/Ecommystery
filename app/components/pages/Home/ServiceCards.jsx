"use client";
import { CardContainer, CardItem } from "@/components/ui/3d-card";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import growIcon from "../../../../public/icons/grow.svg";
import fbaIcon from "../../../../public/icons/fba.svg";
import retailIcon from "../../../../public/icons/retail.svg";
import dbIcon from "../../../../public/icons/db.svg";
import tagIcon from "../../../../public/icons/tag.svg";
import shopIcon from "../../../../public/icons/shop.svg";
import graphIcon from "../../../../public/icons/design.svg";
import webIcon from "../../../../public/icons/3dbox.svg";
import uiIcon from "../../../../public/icons/ui.svg";
import sendIcon from "../../../../public/icons/send.svg";
import visualIcon from "../../../../public/icons/visuals.svg";
import rocketIcon from "../../../../public/icons/rocket.svg";

const ServiceCards = ({ servicesLength }) => {
  const services = [
    {
      type: "For Startup",
      title: "LLC/Business Setup",
      description:
        "Start your business the right way stress-free setup and registration.",
      button: "Explore",
      variant: "purpleGradient",
      icon: growIcon,
      className: "rounded-tl-none",
    },
    {
      type: "For Companies",
      title: "Wholesale FBA / WFS",
      description:
        "Scale fast with bulk inventory handled by Amazon or Walmart.",
      button: "Explore",
      variant: "yellowGradient",
      icon: fbaIcon,
    },
    {
      type: "For Startup & Companies",
      title: "Retail Arbitrage",
      description: "Smart sourcing and reselling without the inventory hassle.",
      button: "Explore",
      variant: "greenGradient",
      icon: retailIcon,
      className: "rounded-tr-none",
    },
    {
      type: "For Startup",
      title: "Warehouse Support",
      description: "Reliable storage, packing, and fulfillment done for you.",
      button: "Explore",
      variant: "blueGradient",
      icon: dbIcon,
      className: "rounded-bl-none",
    },
    {
      type: "For Companies",
      title: "Private Label",
      description: "Build your own brand with custom, high-margin products.",
      button: "Explore",
      variant: "pinkGradient",
      icon: tagIcon,
    },
    {
      type: "For Companies",
      title: "Shopify Store",
      description:
        "We design, develop, and manage your Shopify store end-to-end.",
      button: "Explore",
      variant: "tealGradient",
      icon: shopIcon,
      className: "rounded-br-none",
    },
    {
      type: "For Startup & Companies",
      title: "Graphic Design",
      description:
        "Build your brand with stunning, custom visuals that stand out and sell.",
      button: "Explore",
      variant: "pinkGredientDesign",
      icon: graphIcon,
      className: "rounded-br-none",
    },
    {
      type: "For Startup",
      title: "Web Development",
      description:
        "Bring your vision to life with sleek, high-converting web design that drives results.",
      button: "Explore",
      variant: "pinkGredientWebDev",
      icon: webIcon,
      className: "rounded-br-none",
    },
    {
      type: "For Companies",
      title: "UI/UX Design",
      description:
        "Craft seamless, user-first experiences with smart, intuitive UI/UX design.",
      button: "Explore",
      variant: "darkBlueGred",
      icon: uiIcon,
      className: "rounded-br-none",
    },
    {
      type: "For Startup & Companies",
      title: "Digital Marketing SEO",
      description:
        "Boost your visibility and drive traffic with SEO and smart digital marketing.",
      button: "Explore",
      variant: "warmGred",
      icon: sendIcon,
      className: "rounded-br-none",
    },
    {
      type: "For Startup",
      title: "Product Visuals",
      description:
        "High-quality visuals that capture attention and drive sales.",
      button: "Explore",
      variant: "yellowGred",
      icon: visualIcon,
      className: "rounded-br-none",
    },
    {
      type: "For Startup",
      title: "Business Consultation",
      description:
        "Strategic guidance tailored to your goals turning challenges  ideas into growth,",
      button: "Explore",
      variant: "purpleGradient",
      icon: rocketIcon,
      className: "rounded-br-none",
    },
  ];

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
    pinkGredientDesign: [
      "from-[#C89AFC]",
      "from-[#C89AFC]/70 bg-gradient-to-t",
    ],
    pinkGredientWebDev: [
      "from-[#FD9BFF]",
      "from-[#C89AFC]/70 bg-gradient-to-t",
    ],
    darkBlueGred: ["from-[#5558FF]", "from-[#5558FF]/40 bg-gradient-to-t"],
    warmGred: ["from-[#FF9496]", "from-[#FFCBA1]/40 bg-gradient-to-t"],
    yellowGred: ["from-[#FBD755]", "from-[#FBD755] bg-gradient-to-tr"],
  };

  return (
    <>
      {services &&
        services.slice(0, servicesLength).map((service) => {
          const [gradientFrom, bgTo] = varriants[service.variant] || [];

          return (
            <CardContainer
              key={service.title}
              className="!z-30  col-span-12 w-full"
            >
              <div
                className={`cardS bg-gradient-to-r flex flex-col cursor-pointer to-white w-full h-full rounded-2xl text-black ${gradientFrom} p-8 z-30 relative ${service.className}`}
              >
                <div className="flex w-full justify-between">
                  <h3 className="text-lg sm:text-xl font-medium">
                    {service.type}
                  </h3>
                  <CardItem>
                    <div
                      className={`h-16 w-16 to-white scale-90 md:scale-100 rounded-full flex justify-center items-center p-3 ${
                        bgTo || ""
                      } `}
                    >
                      <Image
                        width={50}
                        height={50}
                        src={service.icon}
                        alt={service.title}
                      />
                    </div>
                  </CardItem>
                </div>
                <div className="pt-2 md:pt-5">
                  <h2 className="text-[22px] md:text-[28px] font-semibold">
                    {service.title}
                  </h2>
                  <p className="text-sm md:text-base pt-5 w-10/12">
                    {service.description}
                  </p>
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
