import { getMarqueeData } from "@/controllers/frontend/about.controller";
import BrandMarqueeClient from "./BrandMarqueeClient";

const BrandMarquee = async () => {
  const marqueeData = await getMarqueeData();

  return (
    <>
      <BrandMarqueeClient data={marqueeData} />
    </>
  );
};

export default BrandMarquee;
