import BrandMarquee from "@/app/components/pages/Home/BrandMarquee";
import ServiceDetailsHero from "../_components/ServiceDetailsHero";
import About from "@/app/components/pages/Home/About";
import ServiceAbout from "../_components/ServiceAbout";
import { getServiceDataBySlug } from "@/controllers/frontend/service.controller";
import ServiceContent from "../_components/ServiceContent";
import Services from "@/app/components/pages/Home/Services";
import { ServicePopularHeadingAndDes } from "../ServiceClient";
import { SeeAllServices } from "@/app/components/pages/Home/ServicesClient";
import Reviews from "@/app/components/pages/Home/Reviews";
import NewsLetter from "@/app/components/pages/Home/NewsLetter";
import NotFound from "@/app/not-found";
import { urlFor } from "@/sanity/lib/sanityImage";

export const generateMetadata = async ({ params }) => {
  const service = await getServiceDataBySlug(params?.slug);
  return {
    title: service?.sTitle || service?.title,
    description: service?.description || "",
    openGraph: {
      title: service?.sTitle || service?.title,
      description: service?.description || "",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/services/${params?.slug}`,
      images: [
        {
          url: urlFor(service?.sThumb?.asset).width(800).height(600).url(),
          width: 800,
          height: 600,
          alt: service?.sTitle || service?.title,
        },
      ],
      siteName: process.env.NEXT_PUBLIC_SITE_NAME,
    },
  };
};

const ServiceDetailsPage = async ({ params }) => {
  const { slug } = params;

  const service = await getServiceDataBySlug(slug);

  if (!service?.content) {
    return <NotFound />;
  }

  return (
    <>
      <style>{`
        .serviceC {
          max-width: 700px;
          width: 100%
        }
      `}</style>
      <ServiceDetailsHero data={service} />
      <BrandMarquee />
      <div className="w-full  flex items-center justify-center">
        <main className="max-w-[1440px] px-5 flex items-center text-start flex-col">
          <ServiceContent value={service.content} />
        </main>
      </div>
      <Reviews />
      <About className="pb-10">
        <ServiceAbout />
      </About>
      <div className="mb-10 flex justify-center flex-col items-center relative  ">
        <ServicePopularHeadingAndDes />
        <div className="pt-20">
          <Services length={3} titleDesShow={false} />
        </div>
        <SeeAllServices />
      </div>
      <NewsLetter className="-mt-24 pb-20" />
    </>
  );
};

export default ServiceDetailsPage;
