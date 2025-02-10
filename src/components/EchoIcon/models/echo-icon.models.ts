import { ThemeOptions } from "@/theme/models/theme.models";

export interface EchoIconProps {
  icon: string;
  size?: keyof ThemeOptions["sizes"];
  type?: "outlined" | "rounded" | "sharp";
}
