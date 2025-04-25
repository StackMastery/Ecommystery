import About from "./components/pages/Home/About";
import BrandMarquee from "./components/pages/Home/BrandMarquee";
import Hero from "./components/pages/Home/Hero";
import Services from "./components/pages/Home/Services";

const Home = () => {
  return (
    <>
      <Hero />
      <BrandMarquee />
      <Services />
      <About />
    </>
  );
};

export default Home;
