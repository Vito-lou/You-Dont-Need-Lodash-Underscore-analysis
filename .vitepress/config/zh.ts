import { defineConfig, type DefaultTheme } from "vitepress";

export const zh = defineConfig({
  lang: "zh-Hans",
  description: "You-Dont-Need 源码分析",

  themeConfig: {
    nav: nav(),

    sidebar: {
      "/zh/guide/": { base: "/zh/guide/", items: sidebarGuide() },
    },

    footer: {
      message: "基于 MIT 许可发布",
      copyright: `版权所有 © 2019-${new Date().getFullYear()} Vito Lou`,
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "解析",
      link: "/zh/guide/what",
      activeMatch: "/zh/guide/",
    },
    {
      text: "联系我",
      link: "/zh/contact/contactMe",
      activeMatch: "/zh/contact/",
    },
  ];
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "概述",
      collapsed: false,
      items: [
        {
          text: "什么是 You-Dont-Need-Lodash-Underscore",
          link: "what",
        },
        {
          text: "学习目标",
          link: "goal",
        },
      ],
    },
    {
      text: "eslint插件实现解析",
      collapsed: false,
      items: [
        {
          text: "动手实现一个简单的eslint插件",
          link: "/plugin/buildYourPlugin.md",
        },
        { text: "它是怎么实现eslint插件的", link: "/plugin/howItWorks.md" },
        { text: "eslint插件总结", link: "/plugin/summary.md" },
      ],
    },
    {
      text: "精彩原生实现盘点",
      collapsed: false,
      items: [{ text: "get", link: "/native/get" }],
    },
    {
      text: "总结",
      collapsed: false,
      items: [{ text: "总结", link: "summary" }],
    },
    {
      text: "相关文章",
      collapsed: false,
      items: [{ text: "相关文章", link: "/relevent/others" }],
    },
  ];
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "参考",
      items: [
        { text: "站点配置", link: "site-config" },
        { text: "frontmatter 配置", link: "frontmatter-config" },
        { text: "运行时 API", link: "runtime-api" },
        { text: "CLI", link: "cli" },
        {
          text: "原生实现",
          base: "/zh/native/",
          items: [
            { text: "get", link: "get" },
            { text: "set", link: "nav" },
            { text: "debounce", link: "sidebar" },
            { text: "throtle", link: "home-page" },
          ],
        },
      ],
    },
  ];
}

export const search: DefaultTheme.AlgoliaSearchOptions["locales"] = {
  zh: {
    placeholder: "搜索文档",
    translations: {
      button: {
        buttonText: "搜索文档",
        buttonAriaLabel: "搜索文档",
      },
      modal: {
        searchBox: {
          resetButtonTitle: "清除查询条件",
          resetButtonAriaLabel: "清除查询条件",
          cancelButtonText: "取消",
          cancelButtonAriaLabel: "取消",
        },
        startScreen: {
          recentSearchesTitle: "搜索历史",
          noRecentSearchesText: "没有搜索历史",
          saveRecentSearchButtonTitle: "保存至搜索历史",
          removeRecentSearchButtonTitle: "从搜索历史中移除",
          favoriteSearchesTitle: "收藏",
          removeFavoriteSearchButtonTitle: "从收藏中移除",
        },
        errorScreen: {
          titleText: "无法获取结果",
          helpText: "你可能需要检查你的网络连接",
        },
        footer: {
          selectText: "选择",
          navigateText: "切换",
          closeText: "关闭",
          searchByText: "搜索提供者",
        },
        noResultsScreen: {
          noResultsText: "无法找到相关结果",
          suggestedQueryText: "你可以尝试查询",
          reportMissingResultsText: "你认为该查询应该有结果？",
          reportMissingResultsLinkText: "点击反馈",
        },
      },
    },
  },
};
