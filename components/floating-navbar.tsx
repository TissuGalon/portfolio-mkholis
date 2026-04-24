"use client"

import React from "react"
import Link from "next/link"
import { Home, User, GraduationCap, Briefcase, Mail, Palette, Sun, Moon } from "lucide-react"
import { Tooltip } from "@heroui/react"
import { Divider } from "@heroui/divider"
import { useTheme } from "next-themes"
import { useIsSSR } from "@react-aria/ssr"

import { Dock, DockIcon } from "@/components/magicui/dock"

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
    label: "Design",
    href: "/#design-portfolio",
    icon: Palette,
  },
  {
    label: "Contact",
    href: "/#contact",
    icon: Mail,
  },
]

export const FloatingNavbar = () => {
  const { theme, setTheme } = useTheme()
  const isSSR = useIsSSR()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 pointer-events-none">
      <div className="pointer-events-auto">
        <Dock direction="middle" className="bg-background/80 border-white/20 shadow-2xl backdrop-blur-xl">
          {navItems.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip content={item.label} placement="top" color="primary" showArrow>
                <Link href={item.href} aria-label={item.label} className="flex items-center justify-center size-full">
                  <item.icon className="size-5 text-foreground" />
                </Link>
              </Tooltip>
            </DockIcon>
          ))}
          
          <Divider orientation="vertical" className="h-6 mx-1" />

          <DockIcon>
            <Tooltip content="Toggle Theme" placement="top" color="primary" showArrow>
              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="flex items-center justify-center size-full"
              >
                {!isSSR && (theme === "dark" ? (
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
  )
}
