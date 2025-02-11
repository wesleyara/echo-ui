import { ThemeOptions } from "@/theme/models/theme.models";
import { ButtonHTMLAttributes, HTMLAttributes } from "vue";

export interface EchoButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {
  variant?: EchoButtonVariant;
  size?: keyof ThemeOptions["sizes"];
  icon?: string;
  iconPosition?: "left" | "right";
  iconSize?: keyof ThemeOptions["sizes"];
  class?: HTMLAttributes["class"];
  disabled?: boolean;
}

export type EchoButtonVariant = "outlined" | "primary" | "secondary" | "text";
