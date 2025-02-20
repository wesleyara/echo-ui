import { EchoThemeOptions } from "@/theme/models/theme.models";
import { ButtonHTMLAttributes, HTMLAttributes } from "vue";

export interface EchoButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {
  variant?: EchoButtonVariant;
  size?: keyof EchoThemeOptions["sizes"];
  icon?: string;
  iconPosition?: "left" | "right";
  iconSize?: keyof EchoThemeOptions["sizes"];
  class?: HTMLAttributes["class"];
  disabled?: boolean;
}

export type EchoButtonVariant = "outlined" | "primary" | "secondary" | "text";
