import growIcon from "../../public/icons/grow.svg";
import tagicon from "../../public/icons/tag.svg";
import uiIcon from "../../public/icons/ui.svg";
import fwaIcon from "../../public/icons/fba.svg";
import shopify from "../../public/icons/shop.svg";
import sendIcon from "../../public/icons/send.svg";
import retailIcon from "../../public/icons/retail.svg";
import designIcon from "../../public/icons/design.svg";
import visualIcon from "../../public/icons/visuals.svg";
import baseIcon from "../../public/icons/db.svg";
import threedIcon from "../../public/icons/3dbox.svg";

export const HeaderData = {
  navs: [
    {
      path: "/",
      element: "Home",
    },
    {
      path: "/about-us",
      element: "About us",
    },
    {
      element: "Services",
      childrens: [
        {
          type: "For Startup",
          element: "LLC/Business Setup",
          icon: growIcon,
          className: "bg-gradient-to-t from-[#cea4fd]",
        },
        {
          type: "For Companies",
          element: "Wholesale FBA / WFS",
          icon: fwaIcon,
          className: "bg-gradient-to-bl from-[#F1BB1D]/70",
        },
        {
          type: "For Startup & Companies",
          element: "Retail Arbitrage",
          icon: retailIcon,
          className: "bg-gradient-to-t from-[#54C94C80]/50 to-white/50",
        },
        {
          type: "For Startup",
          element: "Warehouse Support",
          icon: baseIcon,
          className: "bg-gradient-to-t from-[#CAD1FE]",
        },
        {
          type: "For Companies",
          element: "Private Label",
          icon: tagicon,
          className: "bg-gradient-to-b from-[#FBE4D1]",
        },
        {
          type: "For Companies",
          element: "Shopify Store",
          icon: shopify,
          className: "bg-gradient-to-t from-[#66FBC2]",
        },
        {
          type: "For Startup & Companies",
          element: "Graphic Design",
          icon: designIcon,
          className: "bg-gradient-to-t from-[#C89AFC]",
        },
        {
          type: "For Startup",
          element: "Web Development",
          icon: threedIcon,
          className: "bg-gradient-to-b from-[#FD9BFF]",
        },
        {
          type: "For Companies",
          element: "UI/UX Design",
          icon: uiIcon,
          className: "bg-gradient-to-t from-[#5558FF]",
        },
        {
          type: "For Companies",
          element: "Digital Marketing SEO",
          icon: sendIcon,
          className: "bg-gradient-to-b from-[#FBD1D1]",
        },
        {
          type: "For Startup & Companies",
          element: "Product Visuals",
          icon: visualIcon,
          className: "bg-gradient-to-r from-[#FBD755]",
        },
      ],
    },
    {
      path: "/blog",
      element: "Blog",
    },
    {
      path: "/contact",
      element: "Contact",
    },
  ],
};
