"use client";

import { CardContainer, CardItem } from "@/components/ui/3d-card";
import { Skeleton } from "@/components/ui/skeleton";

const varriants = {
  purpleGradient: [
    "from-[#AE6BFB] via-[#c9a8ef]",
    "bg-gradient-to-t from-[#AE6BFB]/40",
  ],
  yellowGradient: ["from-[#FFD866]", "from-[#F1BB1D]/70 bg-gradient-to-bl"],
  greenGradient: ["from-[#D4FFD1]", "bg-gradient-to-t from-[#54C94C]/40"],
  blueGradient: ["from-[#6075FF]", "bg-gradient-to-t from-[#CAD1FE]"],
  pinkGradient: ["from-[#FACCD2]", "bg-gradient-to-bl from-[#FBE4D1]"],
  tealGradient: ["from-[#60FFE9]", "bg-gradient-to-t from-[#00B59C]/70"],
};

const fallbackTypes = [
  "purpleGradient",
  "yellowGradient",
  "greenGradient",
  "blueGradient",
  "pinkGradient",
  "tealGradient",
];

const ServiceCardFallback = () => {
  return (
    <>
      {fallbackTypes.map((variant, i) => {
        const [gradientFrom, bgTo] = varriants[variant];

        return (
          <CardContainer key={i} className="!z-30 relative col-span-12 w-full">
            <div
              className={`bg-gradient-to-r to-white w-full h-[318px] rounded-2xl p-8 text-black flex flex-col ${gradientFrom}`}
            >
              <div className="flex w-full justify-between items-center">
                <Skeleton className="h-5 w-32 rounded-md" />
                <CardItem>
                  <div
                    className={`h-16 w-16 rounded-full p-3 flex items-center justify-center ${bgTo}`}
                  >
                    <Skeleton className="h-10 w-10 rounded-full" />
                  </div>
                </CardItem>
              </div>
              <div className="pt-5">
                <Skeleton className="h-6 w-3/4 rounded-md mb-4" />
                <Skeleton className="h-4 w-10/12 rounded-md mb-2" />
                <Skeleton className="h-4 w-9/12 rounded-md mb-2" />
                <CardItem>
                  <Skeleton className="h-10 w-28 rounded-full mt-5" />
                </CardItem>
              </div>
            </div>
          </CardContainer>
        );
      })}
    </>
  );
};

export default ServiceCardFallback;
