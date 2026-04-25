"use client";

import React from "react";
import Link from "next/link";
import {
  Home,
  User,
  GraduationCap,
  Briefcase,
  Mail,
  Palette,
  Sun,
  Moon,
  Camera,
} from "lucide-react";
import { Tooltip } from "@heroui/react";
import { Divider } from "@heroui/divider";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";

import { Dock, DockIcon } from "@/components/magicui/dock";

const navItems = [
  {
    label: "Home",
    href: "/#",
    icon: Home,
  },
  {
    label: "About",
    href: "/#about",
    icon: User,
  },
  {
    label: "Education",
    href: "/#education",
    icon: GraduationCap,
  },
  {
    label: "Portfolio",
    href: "/#portfolio",
    icon: Briefcase,
  },
  {
    label: "Activities",
    href: "/#activities",
    icon: Camera,
  },
  {
    label: "Design",
    href: "/#design-portfolio",
    icon: Palette,
  },
  {
    label: "Contact",
    href: "/#contact",
    icon: Mail,
  },
];

export const FloatingNavbar = () => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 pointer-events-none">
      <div className="pointer-events-auto">
        <Dock
          className="bg-background/80 border-white/20 shadow-2xl backdrop-blur-xl"
          direction="middle"
        >
          {navItems.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip
                showArrow
                color="primary"
                content={item.label}
                placement="top"
              >
                <Link
                  aria-label={item.label}
                  className="flex items-center justify-center size-full"
                  href={item.href}
                >
                  <item.icon className="size-5 text-foreground" />
                </Link>
              </Tooltip>
            </DockIcon>
          ))}

          <Divider className="h-6 mx-1" orientation="vertical" />

          <DockIcon>
            <Tooltip
              showArrow
              color="primary"
              content="Toggle Theme"
              placement="top"
            >
              <button
                aria-label="Toggle Theme"
                className="flex items-center justify-center size-full"
                onClick={toggleTheme}
              >
                {!isSSR &&
                  (theme === "dark" ? (
                    <Sun className="size-5 text-foreground" />
                  ) : (
                    <Moon className="size-5 text-foreground" />
                  ))}
                {isSSR && <Sun className="size-5 text-foreground" />}
              </button>
            </Tooltip>
          </DockIcon>
        </Dock>
      </div>
    </div>
  );
};
