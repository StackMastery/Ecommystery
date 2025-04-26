import About from "./components/pages/Home/About";
import BrandMarquee from "./components/pages/Home/BrandMarquee";
import CompanyValue from "./components/pages/Home/CompanyValue";
import Hero from "./components/pages/Home/Hero";
import Services from "./components/pages/Home/Services";
import Video from "./components/pages/Home/Video";

const Home = () => {
  return (
    <>
      <Hero />
      <BrandMarquee />
      <Services />
      <About />
      <CompanyValue />
      <Video />
    </>
  );
};

export default Home;
