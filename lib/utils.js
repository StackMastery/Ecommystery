import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const toHtmlId = (str) => {
  return str
    .normalize("NFD") // Normalize accented characters
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .replace(/([a-z])([A-Z])/g, "$1-$2") // Insert dashes between camelCase
    .replace(/[^a-zA-Z0-9\s-_]/g, "") // Remove unwanted characters
    .toLowerCase()
    .trim()
    .replace(/[\s_-]+/g, "-") // Replace multiple spaces/underscores/dashes with single dash
    .replace(/^-+|-+$/g, ""); // Trim leading/trailing dashes
};
