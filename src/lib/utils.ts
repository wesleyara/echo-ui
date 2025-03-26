import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...args: ClassValue[]): string => {
  return twMerge(clsx(...args));
};

export const generateArray = (length: number, prefix?: string): string[] => {
  return Array.from({ length }, (_, i) => `${prefix}${i}`);
};
