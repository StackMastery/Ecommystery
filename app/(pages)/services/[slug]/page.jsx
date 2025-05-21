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

const ServiceDetailsPage = async ({ params }) => {
  const { slug } = params;
  const service = await getServiceDataBySlug(slug);

  return (
    <>
      <ServiceDetailsHero data={service} />
      <BrandMarquee />
      <About className="pt-40">
        <ServiceAbout />
      </About>
      <ServiceContent value={service.content} />
      <Reviews />
      <div className="mb-10 flex justify-center flex-col items-center relative  ">
        <ServicePopularHeadingAndDes />
        <div className="pt-20">
          <Services length={3} titleDesShow={false} />
        </div>
        <SeeAllServices />
      </div>
    </>
  );
};

export default ServiceDetailsPage;
