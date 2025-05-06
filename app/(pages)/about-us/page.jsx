import Competencies from "@/app/components/pages/about/Competencies";
import AboutHero from "@/app/components/pages/about/Hero";
import Information from "@/app/components/pages/about/Information";
import Team from "@/app/components/pages/about/Team";
import Video from "@/app/components/pages/Home/Video";
import { fetchSEOBySlug } from "@/controllers/frontend/seo.controller";

export async function generateMetadata() {
  const seo = await fetchSEOBySlug("about-us");
  return seo;
}

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <Information />
      <Video />
      <Team />
      <Competencies />
    </>
  );
};

export default AboutPage;
