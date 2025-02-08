/* eslint-disable @typescript-eslint/no-explicit-any */
import { type DefaultTheme, defineConfig } from "vitepress";
import { groupIconMdPlugin, groupIconVitePlugin } from "vitepress-plugin-group-icons";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Echo UI",
  description: "A Vue UI library",
  srcExclude: ["**/parts/**.md"],
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin);
    },
  },
  vite: {
    plugins: [groupIconVitePlugin() as any],
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Installation", link: "/guide/installation" },
    ],

    sidebar: getSidebar(),

    editLink: {
      pattern: "https://github.com/echo-vue-ui/echo-ui/edit/main/docs/:path",
      text: "Suggest changes to this page",
    },

    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    footer: {
      message: "Released under the MIT License.",
      copyright: `Copyright © 2022-${new Date().getFullYear()} Wesley Araújo`,
    },

    search: {
      provider: "local",
    },

    socialLinks: [{ icon: "github", link: "https://github.com/echo-vue-ui/echo-ui" }],
  },
});

function getSidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Introduction",
      base: "/guide",
      items: [
        { text: "What is Echo UI?", link: "/what-is-echo-ui/" },
        { text: "Installation", link: "/installation/" },
      ],
    },
    {
      text: "Components",
      base: "/components",
      collapsed: false,
      items: [{ text: "Button", link: "/button/" }],
    },
  ];
}
