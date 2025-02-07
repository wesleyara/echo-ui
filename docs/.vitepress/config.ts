import { DefaultTheme, defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Echo UI",
  description: "A vue UI library",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Installation", link: "/guide/installation" },
    ],

    sidebar: getSidebar(),

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});

function getSidebar(): DefaultTheme.Sidebar {
  return [
    {
      text: "Introduction",
      base: "/guide",
      collapsed: false,
      items: [
        { text: "Why Echo UI?", link: "/guide/why-echo-ui" },
        { text: "Installation", link: "/guide/installation" },
      ],
    },
  ];
}
