import { defineConfig, type DefaultTheme } from "vitepress";
export const en = defineConfig({
  lang: "en-US",
  description: "You-Dont-Need",

  themeConfig: {
    nav: nav(),

    sidebar: {
      "/guide/": { base: "/guide/", items: sidebarGuide() },
    },

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present Vito Lou",
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "Guide",
      link: "/guide/what",
      activeMatch: "/guide/",
    },
    {
      text: "Contact",
      link: "/contact/contactMe",
      activeMatch: "/contact/",
    },
  ];
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Introduction",
      collapsed: false,
      items: [
        { text: "What is You-Dont-Need-Lodash-Underscore?", link: "what" },
        { text: "What is the goal of this analysis", link: "goal" },
      ],
    },
    {
      text: "Eslint plugin",
      collapsed: false,
      items: [
        {
          text: "build your own eslint plugin",
          link: "/plugin/buildYourPlugin",
        },
        { text: "How it works", link: "/plugin/howItWorks" },
        { text: "Plugin summary", link: "/plugin/pluginSummary" },
      ],
    },
    {
      text: "Native",
      collapsed: false,
      items: [{ text: "get", link: "/native/get" }],
    },
    {
      text: "Summary",
      collapsed: false,
      items: [{ text: "summary", link: "summary" }],
    },
    {
      text: "Releverent articles",
      items: [{ text: "relevent", link: "/relevent/relevent" }],
    },
  ];
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Reference",
      items: [
        { text: "Site Config", link: "site-config" },
        { text: "Frontmatter Config", link: "frontmatter-config" },
        { text: "Runtime API", link: "runtime-api" },
        { text: "CLI", link: "cli" },
        {
          text: "Default Theme",
          base: "/reference/default-theme-",
          items: [
            { text: "Overview", link: "config" },
            { text: "Nav", link: "nav" },
            { text: "Sidebar", link: "sidebar" },
            { text: "Home Page", link: "home-page" },
            { text: "Footer", link: "footer" },
            { text: "Layout", link: "layout" },
            { text: "Badge", link: "badge" },
            { text: "Team Page", link: "team-page" },
            { text: "Prev / Next Links", link: "prev-next-links" },
            { text: "Edit Link", link: "edit-link" },
            { text: "Last Updated Timestamp", link: "last-updated" },
            { text: "Search", link: "search" },
            { text: "Carbon Ads", link: "carbon-ads" },
          ],
        },
      ],
    },
  ];
}
