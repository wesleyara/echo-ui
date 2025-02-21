// Assets/libs imports
import "./styles/main.css";
import "material-symbols";

// Theme exports
export type {
  EchoThemeOptions,
  EchoThemeMode,
  EchoThemeOptionsColors,
  EchoThemeOptionsColorsVariants,
  EchoThemeOptionsSizes,
  EchoThemeOptionsSizesInfo,
} from "./theme/models/theme.models";
export { echoThemeOptions } from "./theme/index";

// Components exports
export { EchoTheme, type EchoThemeProps } from "./components/EchoTheme";
export { EchoIcon, type EchoIconProps } from "./components/EchoIcon";
export { EchoButton, type EchoButtonProps, type EchoButtonVariant } from "./components/EchoButton";
