import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const toHtmlId = (str) => {
  if (str?.length === 0) {
    return null;
  }
  return str
    ?.normalize("NFD") // Normalize accented characters
    ?.replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    ?.replace(/([a-z])([A-Z])/g, "$1-$2") // Insert dashes between camelCase
    ?.replace(/[^a-zA-Z0-9\s-_]/g, "") // Remove unwanted characters
    ?.toLowerCase()
    ?.trim()
    ?.replace(/[\s_-]+/g, "-") // Replace multiple spaces/underscores/dashes with single dash
    ?.replace(/^-+|-+$/g, ""); // Trim leading/trailing dashes
};

export const useParsedStyle = (hTitle) => {
  const styleMatch = hTitle.match(/style=\{\{(.*?)\}\}/);
  let extractedStyle = {};

  if (styleMatch) {
    const styleString = styleMatch[1];
    styleString.split(",").forEach((rule) => {
      const [key, value] = rule.split(":").map((s) => s.trim());
      if (key && value) {
        const jsKey = key.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
        extractedStyle[jsKey] = isNaN(value) ? value : parseFloat(value);
      }
    });
  }

  return extractedStyle;
};

export const useSplitTitleParts = (hTitle) => {
  const cleanTitle = hTitle.replace(/style=\{\{.*?\}\}/, "").trim();
  return cleanTitle.split(/(\[.*?\])/g);
};
