import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

import { SmoothCursor } from "@/components/ui/smooth-cursor";

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: "/favicon.ico",
    },
    authors: [{ name: "Muhammad Kholis", url: "https://www.instagram.com/its.przvl._/" }],
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html suppressHydrationWarning lang="en">
            <head />
            <body className={clsx("min-h-screen text-foreground bg-background font-sans antialiased", fontSans.variable)}>
                <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
                    <div className="relative flex flex-col h-screen">
                        <Navbar />
                        <main className="relative container mx-auto flex-grow cursor-none-">
                            {/* Content layer */}
                            <div className="relative z-10">
                                {children}
                                <SpeedInsights />
                                {/* <SmoothCursor /> */}
                            </div>
                        </main>

                        <footer className="w-full flex items-center justify-center py-3 bg-background">
                            <Link isExternal className="flex items-center gap-1 text-current" href="https://heroui.com?utm_source=next-app-template" title="heroui.com homepage">
                                <span className="text-default-600">Powered by</span>
                                <p className="text-primary">HeroUI</p>
                            </Link>
                        </footer>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
