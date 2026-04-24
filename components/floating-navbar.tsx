"use client"

import React from "react"
import Link from "next/link"
import { Home, User, GraduationCap, Briefcase, Mail } from "lucide-react"
import { Tooltip } from "@heroui/react"

import { Dock, DockIcon } from "@/components/magicui/dock"

const navItems = [
  {
    label: "Home",
    href: "/#",
    icon: Home,
  },
  {
    label: "About Me",
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
    label: "Contact",
    href: "/#contact",
    icon: Mail,
  },
]

export const FloatingNavbar = () => {
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
        </Dock>
      </div>
    </div>
  )
}
