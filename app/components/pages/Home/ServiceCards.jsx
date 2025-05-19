"use client";
import { CardContainer, CardItem } from "@/components/ui/3d-card";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <>
      <CardContainer className="!z-30  w-full flex h-full">
        <div
          style={{
            background: service.cGrad,
          }}
          className={`cardS  flex flex-col cursor-text justify-between w-full h-full rounded-2xl text-black p-8 z-30 relative `}
        >
          <div className="flex w-full justify-between gap-5">
            <h3 className="text-lg sm:text-xl font-medium">
              {service.type.title}
            </h3>
            <CardItem>
              <div
                style={{
                  background: service.iGrad,
                }}
                className={`h-16 w-16  scale-90 md:scale-100 rounded-full flex justify-center items-center p-3  `}
              >
                <Image
                  width={50}
                  height={50}
                  src={service.imageUrl}
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
              <Link href={`/services/${service.slug.current}`}>
                <button className="px-5 py-2 rounded-full flex items-center bg-white cursor-pointer mt-5 hover:scale-110 transition-all">
                  Explore <ArrowUpRight />
                </button>
              </Link>
            </CardItem>
          </div>
        </div>
      </CardContainer>
    </>
  );
};

export default ServiceCard;
