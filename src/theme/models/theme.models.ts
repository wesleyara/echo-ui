export interface ThemeOptions {
  colors: Record<string, Partial<ColorsVariants>>;
  sizes: {
    xs: SizesInfo;
    sm: SizesInfo;
    md: SizesInfo;
    lg: SizesInfo;
    xl: SizesInfo;
  };
}

type ColorsVariants = {
  default: string;
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
};

type SizesInfo = {
  size: number;
  class: string;
};
