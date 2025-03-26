/* eslint-disable @typescript-eslint/no-explicit-any */
import { resolve } from "path";
import { type DefaultTheme, defineConfig } from "vitepress";
import { groupIconMdPlugin, groupIconVitePlugin } from "vitepress-plugin-group-icons";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "Echo UI",
  description: "A Vue UI library",
  srcExclude: ["**/parts/**.md"],
  srcDir: "src",
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin);
    },
  },
  vite: {
    plugins: [groupIconVitePlugin() as any],
    resolve: {
      alias: {
        "@": resolve(__dirname, "../../src"),
      },
    },
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
      collapsed: false,
      items: [
        { text: "What is Echo UI?", link: "/what-is-echo-ui/" },
        { text: "Installation", link: "/installation/" },
        { text: "Theme", link: "/theme/" },
      ],
    },
    {
      text: "Components",
      base: "/components",
      collapsed: false,
      items: [
        { text: "Button", link: "/button/" },
        { text: "Icon", link: "/icon/" },
        { text: "Grid", link: "/grid/" },
      ],
    },
  ];
}
