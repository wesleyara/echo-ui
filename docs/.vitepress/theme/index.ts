import type { Theme } from "vitepress";

import "virtual:group-icons.css";
import DefaultTheme from "vitepress/theme";

import "./style.css";
import DefaultLayout from "./DefaultLayout.vue";

export default {
  extends: DefaultTheme,
  Layout: DefaultLayout,
  enhanceApp({ app, router, siteData }) {
    // ...
  },
} satisfies Theme;
