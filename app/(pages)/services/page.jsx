import Services from "@/app/components/pages/Home/Services";
import ServicesClientPage from "./ServiceClient";
import { fetchSEOBySlug } from "@/controllers/frontend/seo.controller";
import BrandMarquee from "@/app/components/pages/Home/BrandMarquee";

export async function generateMetadata() {
  const seo = await fetchSEOBySlug("services");
  return seo;
}

const ServicesPage = () => {
  return (
    <>
      <ServicesClientPage marquee={<BrandMarquee gred={false} />}>
        <Services titleDesShow={false} />
      </ServicesClientPage>
    </>
  );
};

export default ServicesPage;
