import { generateArray } from "./utils";

export const twSafelist = [
  ...generateArray(13, "col-span-"),
  ...generateArray(13, "row-span-"),
  ...generateArray(13, "sm:col-span-"),
  ...generateArray(13, "sm:row-span-"),
  ...generateArray(13, "md:col-span-"),
  ...generateArray(13, "md:row-span-"),
  ...generateArray(13, "lg:col-span-"),
  ...generateArray(13, "lg:row-span-"),
  ...generateArray(13, "xl:col-span-"),
  ...generateArray(13, "xl:row-span-"),
  ...generateArray(13, "2xl:col-span-"),
  ...generateArray(13, "2xl:row-span-"),
];
