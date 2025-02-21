import { ButtonHTMLAttributes, HTMLAttributes } from "vue";

export interface EchoButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {
  variant?: EchoButtonVariant;
  size?: string;
  icon?: string;
  iconPosition?: "left" | "right";
  iconSize?: string;
  class?: HTMLAttributes["class"];
  disabled?: boolean;
}

export type EchoButtonVariant = "outlined" | "primary" | "secondary" | "text";
