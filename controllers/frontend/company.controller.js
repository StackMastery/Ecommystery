import growIcon from "../../public/icons/grow2.svg";
import layerIcon from "../../public/icons/layer.svg";
import chatIcon from "../../public/icons/chat.svg";
import speddIcon from "../../public/icons/spedd.svg";
import baseIcon from "../../public/icons/base.svg";

export const getAllCompanyValuesData = () => {
  return {
    values: [
      {
        icon: growIcon,
        title: "Zero Inventory Hassle",
        description:
          "No need to store or manage products. Your supplier ships directly to customers saving you time and money.",
      },
      {
        icon: layerIcon,

        title: "Scalable Profit Model",
        description:
          "Enjoy consistent returns with profit margins between 15–25%, plus opportunities to reinvest & grow.",
      },
      {
        icon: chatIcon,

        title: "Real Support, Real Deal",
        description:
          "Our team is here to guide you every step of the way, providing clear, expert advice and dependable support at every stage.",
      },
      {
        icon: speddIcon,

        title: "Fast & Easy Launch",
        description:
          "Our plug-and-play system is designed to fast-track your journey to profits with simplicity, speed, and proven results.",
      },
      {
        icon: baseIcon,
        title: "Data-Driven Product Selection",
        description:
          "We continuously analyze market trends and buyer behavior in real time, allowing us to strategically handpick high-demand, high-margin products that are perfectly tailored to your specific niche.",
      },
    ],
  };
};
