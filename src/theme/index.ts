import { EchoThemeOptions } from "./models/theme.models";

export const echoThemeOptions: EchoThemeOptions = {
  colors: {
    primary: {
      default: "#1b1b1f",
      50: "#f7f7f8",
      100: "#eeeef0",
      200: "#d9d9de",
      300: "#b7b7c2",
      400: "#9091a0",
      500: "#727485",
      600: "#5c5d6d",
      700: "#4b4c59",
      800: "#41424b",
      900: "#393941",
      950: "#1b1b1f",
    },
    secondary: {
      default: "#ffffff",
      50: "#ffffff",
      100: "#efefef",
      200: "#dcdcdc",
      300: "#bdbdbd",
      400: "#989898",
      500: "#7c7c7c",
      600: "#656565",
      700: "#525252",
      800: "#464646",
      900: "#3d3d3d",
      950: "#292929",
    },
    disabled: {
      default: "#ebebe4",
    },
  },
  sizes: {
    xs: {
      size: 12,
      iconSize: 16,
      class: "text-[12px]",
    },
    sm: {
      size: 14,
      iconSize: 20,
      class: "text-sm",
    },
    md: {
      size: 16,
      iconSize: 24,
      class: "text-base",
    },
    lg: {
      size: 18,
      iconSize: 28,
      class: "text-lg",
    },
    xl: {
      size: 20,
      iconSize: 32,
      class: "text-xl",
    },
    xxl: {
      size: 22,
      iconSize: 36,
      class: "text-2xl",
    },
  },
};
