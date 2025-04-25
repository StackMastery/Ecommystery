import { BrandMarqueeData } from "@/lib/data/BrandMarqueeData";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const BrandMarquee = () => {
  return (
    <>
      <section className="section flex-col justify-center items-center -mt-10">
        <h2 className="mb-5 font-medium text-lg">Trusted by top brands</h2>
        <div className="max-w-[1440px] w-full gap-2 flex items-center flex-col justify-center">
          <Marquee>
            {BrandMarqueeData.map((brand, index) => (
              <div className="flex items-center ">
                <Image className="mx-10" src={brand.src} alt={brand.alt} />{" "}
                <span className="w-[1px] rounded-full flex bg-white"></span>
              </div>
            ))}
            {BrandMarqueeData.map((brand, index) => (
              <div className="flex items-center ">
                <Image className="mx-10" src={brand.src} alt={brand.alt} />{" "}
                <span className="h-4 w-[1px] rounded-full flex bg-white"></span>
              </div>
            ))}
          </Marquee>
          <Marquee direction="right">
            {BrandMarqueeData.map((brand, index) => (
              <div className="flex items-center ">
                <Image className="mx-10" src={brand.src} alt={brand.alt} />{" "}
                <span className="w-[1px] rounded-full flex bg-white"></span>
              </div>
            ))}
            {BrandMarqueeData.map((brand, index) => (
              <div className="flex items-center ">
                <Image className="mx-10" src={brand.src} alt={brand.alt} />{" "}
                <span className="h-4 w-[1px] rounded-full flex bg-white"></span>
              </div>
            ))}
          </Marquee>
        </div>
        {/* <div className="flex w-full justify-end max-w-[1440px]">
          <motion.span
            initial={{ scale: 0.1, translateY: 200, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, translateY: 64 }}
            className="bg-[#721A917D] w-[400px] h-[500px] blur-[150px]  hidden lg:flex"
          />
        </div> */}
      </section>
    </>
  );
};

export default BrandMarquee;
