import BrandKlasha from "../../public/blog/brands/klasha.svg";
import BrandCornix from "../../public/blog/brands/cornix.svg";
import BrandBitbye from "../../public/blog/brands/bitbye.svg";

// Thumb
import Thumb1 from "../../public/blog/thumb/1.png";
import Thumb2 from "../../public/blog/thumb/2.png";
import Thumb3 from "../../public/blog/thumb/3.png";

export const getBlogsForHomePage = () => {
  return {
    blogs: [
      {
        brand: BrandKlasha,
        thumb: Thumb1,
        title: "Expert tips and stories to grow your business",
        link: "/blogs",
      },
      {
        brand: BrandBitbye,
        thumb: Thumb2,
        title: "Fuel success with expert guides and tactics",
        link: "/blogs",
      },
      {
        brand: BrandBitbye,
        thumb: Thumb3,
        title: "Stay ahead with a real advice and results",
        link: "/blogs",
      },
    ],
  };
};
