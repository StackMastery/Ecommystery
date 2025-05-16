import { fetchSEOBySlug } from "@/controllers/frontend/seo.controller";
import About from "./components/pages/Home/About";
import Blogs from "./components/pages/Home/Blogs";
import BrandMarquee from "./components/pages/Home/BrandMarquee";
import CompanyValue from "./components/pages/Home/CompanyValue";
import Contact from "./components/pages/Home/Contact";
import Hero from "./components/pages/Home/Hero";
import NewsLetter from "./components/pages/Home/NewsLetter";
import Services from "./components/pages/Home/Services";
import Video from "./components/pages/Home/Video";
import { SeeAllServices } from "./components/pages/Home/ServicesClient";

export async function generateMetadata() {
  const seo = await fetchSEOBySlug("home");
  return seo;
}

const Home = () => {
  return (
    <>
      <Hero />
      <BrandMarquee />
      <Services length={6} />
      <SeeAllServices />
      <About />
      <CompanyValue />
      <Video />
      {/* <Reviews /> */}
      <Blogs />
      <NewsLetter />
      <Contact />
    </>
  );
};

export default Home;
