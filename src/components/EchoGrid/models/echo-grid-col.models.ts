export interface EchoGridColProps {
  size: EchoGridColSize;
}

export type EchoGridColSize = number | Record<"2xl" | "lg" | "md" | "sm" | "xl", number>;
