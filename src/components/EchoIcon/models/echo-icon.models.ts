import { EchoThemeOptions } from "@/theme/models/theme.models";

export interface EchoIconProps {
  icon: string;
  size?: keyof EchoThemeOptions["sizes"];
  type?: "outlined" | "rounded" | "sharp";
}
