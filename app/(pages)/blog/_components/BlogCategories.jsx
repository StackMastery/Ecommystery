import { getAllCategories } from "@/controllers/frontend/blog.controller";
import CategoryButton from "./CategoryButton";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ChevronDown } from "lucide-react";
import React from "react";
import BlogSearch from "./BlogSearch";

const BlogCategories = async () => {
  const categories = await getAllCategories();
  const categoriesMap = [
    {
      title: "All",
      slug: {
        current: "all",
      },
    },
    ...categories,
  ];

  return (
    <section className="section -mt-20">
      <div className="max-w-[1440px] w-full px-5 pb-10 relative z-[9999] flex flex-col md:flex-row gap-5 md:gap-0 justify-center md:justify-between">
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-4 overflow-x-auto scrollbar-none md:overflow-visible">
          <div className="flex gap-3 flex-wrap md:flex-nowrap items-center justify-center">
            {categoriesMap.slice(0, 4).map((category) => (
              <CategoryButton key={category.slug.current} category={category} />
            ))}
            {categoriesMap.length > 4 && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="p-3 bg-white/5 h-10 w-10 md:w-12 md:h-12 flex justify-center items-center cursor-pointer rounded-full transition shrink-0">
                    <ChevronDown size={20} />
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  className="shadow-lg mx-5 rounded-xl p-0 py-2 mt-5 bg-white/5 backdrop-blur-3xl flex flex-col max-h-[300px] overflow-y-auto"
                >
                  <ul className="space-y-1">
                    {categoriesMap.slice(4).map((category, index) => (
                      <React.Fragment key={category.slug.current}>
                        <li className="flex items-center gap-2 !px-5">
                          <span className="text-xl text-transparent bg-clip-text bg-gradient-to-br from-pB to-pM font-serif">
                            {index + 4}.
                          </span>
                          <CategoryButton
                            className="!text-sm !bg-transparent !text-white !px-0 !font-light !py-0"
                            category={category}
                          />
                        </li>
                        {index % 2 === 0 && (
                          <span className="bg-white/5 w-full h-[1px] flex" />
                        )}
                      </React.Fragment>
                    ))}
                  </ul>
                </TooltipContent>
              </Tooltip>
            )}
            <div className="hidden max-[768px]:block">
              <BlogSearch />
            </div>
          </div>
        </div>
        <div className="hidden min-[768px]:block">
          <BlogSearch />
        </div>
      </div>
    </section>
  );
};

export default BlogCategories;
