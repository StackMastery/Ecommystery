"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Search, X } from "lucide-react";

const BlogSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const defaultSearch = searchParams.get("search") || "";
  const [query, setQuery] = useState(defaultSearch);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (query.trim() === "") {
      params.delete("search");
    } else {
      params.set("search", query);
    }

    router.push(`?${params.toString()}`, { scroll: false });
  }, [query]);

  const clearSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("search");
    router.push(`?${params.toString()}`, { scroll: false });
    setQuery("");
  };

  return (
    <Popover>
      <PopoverTrigger>
        <div className="cursor-pointer h-10 w-10 bg-gradient-to-r from-pY to-pM items-center justify-center flex rounded-full">
          <Search />
        </div>
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        sideOffset={20}
        className="z-[99999] bg-white/5 backdrop-blur-3xl mx-5 lg:mx-10 border-[1px] p-0 border-pM/5"
        onClick={(e) => e.preventDefault()}
      >
        <div className="flex items-center px-3">
          <input
            className="flex-1 outline-0 px-2 py-2 text-white placeholder:text-white text-sm bg-transparent"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button
              onClick={clearSearch}
              className="text-white p-1 rounded hover:bg-white/10 transition"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default BlogSearch;
