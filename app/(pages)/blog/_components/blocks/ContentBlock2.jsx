import { urlFor } from "@/sanity/lib/sanityImage";
import Image from "next/image";

const ContentBlock2 = ({ data }) => {
  return (
    <section className="section py-20">
      <div className="flex flex-col lg:flex-row w-full max-w-[1440px] mx-auto px-5 gap-10">
        <div className="w-full lg:w-4/12 space-y-10">
          <h3 className="text-xl sm:text-4xl md:text-5xl lg:text-3xl text-white">
            {data.heading}
          </h3>
          <Image
            width={500}
            height={500}
            className="rounded-2xl w-full h-auto object-cover"
            src={urlFor(data.image.asset).width(500).height(500).url()}
            alt="Ecomystery content image"
          />
        </div>

        <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-10 ">
          {data?.features?.map((fe, index) => (
            <div key={fe?._key} className="space-y-3">
              <h4 className="text-2xl text-white">{fe?.title}</h4>
              <p className="text-sm text-white/70">{fe?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentBlock2;
