import growIcon from "../../public/icons/grow.svg";
import fbaIcon from "../../public/icons/fba.svg";
import retailIcon from "../../public/icons/retail.svg";
import dbIcon from "../../public/icons/db.svg";
import tagIcon from "../../public/icons/tag.svg";
import shopIcon from "../../public/icons/shop.svg";

export const getAllServicesCardData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5));

  return {
    services: [
      {
        type: "For Startup",
        title: "LLC/Business Setup",
        description:
          "Start your business the right way stress-free setup and registration.",
        button: "Explore",
        variant: "purpleGradient",
        icon: growIcon,
        className: "rounded-tl-none",
      },
      {
        type: "For Companies",
        title: "Wholesale FBA / WFS",
        description:
          "Scale fast with bulk inventory handled by Amazon or Walmart.",
        button: "Explore",
        variant: "yellowGradient",
        icon: fbaIcon,
      },
      {
        type: "For Startup & Companies",
        title: "Retail Arbitrage",
        description:
          "Smart sourcing and reselling without the inventory hassle.",
        button: "Explore",
        variant: "greenGradient",
        icon: retailIcon,
        className: "rounded-tr-none",
      },
      {
        type: "For Startup",
        title: "Warehouse Support",
        description: "Reliable storage, packing, and fulfillment done for you.",
        button: "Explore",
        variant: "blueGradient",
        icon: dbIcon,
        className: "rounded-bl-none",
      },
      {
        type: "For Companies",
        title: "Private Label",
        description: "Build your own brand with custom, high-margin products.",
        button: "Explore",
        variant: "pinkGradient",
        icon: tagIcon,
      },
      {
        type: "For Companies",
        title: "Shopify Store",
        description:
          "We design, develop, and manage your Shopify store end-to-end.",
        button: "Explore",
        variant: "tealGradient",
        icon: shopIcon,
        className: "rounded-br-none",
      },
    ],
  };
};
