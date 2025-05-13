"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

const CategoryButton = ({ category, className, activeClass, defaultClass }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedCategory = searchParams.get("category");

  const isActive =
    (category.slug.current === "all" && !selectedCategory) ||
    selectedCategory === category.slug.current;

  const handleClick = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (category.slug.current === "all") {
      params.delete("category");
    } else {
      params.set("category", category.slug.current);
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <button
      onClick={handleClick}
      className={`px-5 py-3 min-w-20 cursor-pointer rounded-full text-xs md:text-[16px] transition font-medium ${
        isActive
          ? `bg-white text-black ${activeClass}`
          : `bg-white/5 text-white ${defaultClass}`
      } ${className || ""}`}
    >
      {category.title}
    </button>
  );
};

export default CategoryButton;
