export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Muhammad Kholis - Portfolio",
  description: "Software Developer & Mobile App Developer.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Me",
      href: "#about",
    },
    {
      label: "Education",
      href: "#education",
    },
    {
      label: "Portfolio",
      href: "#portfolio",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/#",
    },
    {
      label: "About Me",
      href: "/#about",
    },
    {
      label: "Education",
      href: "/#education",
    },
    {
      label: "Portfolio",
      href: "/#portfolio",
    },
    {
      label: "Contact",
      href: "/#contact",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
