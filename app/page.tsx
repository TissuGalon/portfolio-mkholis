"use client";

import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Ripple } from "@/components/magicui/ripple";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { GridBeams } from "@/components/magicui/grid-beams";

import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";

import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";

import { TextAnimate } from "@/components/magicui/text-animate";
import { AuroraText } from "@/components/magicui/aurora-text";

import { MagicCard } from "@/components/magicui/magic-card";

import { Card, CardHeader, CardBody, CardFooter, Input } from "@heroui/react";

import { Progress } from "@heroui/react";

import { useTheme } from "next-themes";

import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";

import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";

import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { Meteors } from "@/components/magicui/meteors";
import { BorderBeam } from "@/components/magicui/border-beam";
import { RetroGrid } from "@/components/magicui/retro-grid";

export default function Home() {
    const { theme } = useTheme();
    return (
        <div className="bg-background">
            {/* === HERO === */}
            <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
                <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-12 md:py-20">
                    {/* Left: Text */}
                    <div className="flex-1 text-center md:text-left space-y-6">
                        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
                            Hi, I’m <br />
                            <AnimatedGradientText>Muhammad Kholis</AnimatedGradientText>
                        </h1>
                        <TextAnimate animation="slideLeft" className="text-default-500 text-lg md:text-xl max-w-lg">
                            A passionate Flutter & Web Developer who loves building modern, fast, and beautiful applications.
                        </TextAnimate>
                        <div className="flex gap-4 justify-center md:justify-start">
                            <RainbowButton size="lg" color="primary">
                                <TextAnimate animation="scaleUp"> 🚀 View Projects</TextAnimate>
                            </RainbowButton>
                            <RainbowButton size="lg" color="primary" variant="outline">
                                <TextAnimate animation="scaleUp"> 📩 Contact Me</TextAnimate>
                            </RainbowButton>
                        </div>
                        <div className="flex gap-4 justify-center md:justify-start">
                            <ShinyButton color="primary">
                                <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </ShinyButton>

                            <ShinyButton color="primary">
                                <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
                                    <Github className="w-5 h-5" />
                                </a>
                            </ShinyButton>

                            <ShinyButton color="primary">
                                <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer">
                                    <Instagram className="w-5 h-5" />
                                </a>
                            </ShinyButton>
                        </div>
                    </div>

                    {/* Right: Photo */}
                    <div className="flex-1 flex justify-center md:justify-end">
                        <div className="w-80 h-80 md:w-[28rem] md:h-[28rem]">
                            <img src="/images/muhammadkholis.png" alt="Muhammad Kholis" className="w-full h-full object-cover rounded-full shadow-2xl" />
                        </div>
                    </div>
                </section>
                <Ripple />
            </div>

            <section className="relative w-full overflow-hidden py-6">
                {/* Background Blur Layer */}
                <div className="absolute inset-0 bg-primary opacity-5 backdrop-blur-md" />

                {/* Running Text */}
                <motion.div className="flex whitespace-nowrap relative" animate={{ x: ["0%", "-100%"] }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }}>
                    <p className="text-1xl font-bold bg-background bg-clip-text text-transparent px-8">
                        <AuroraText>🚀 Flutter · 💻 Web Development · 📱 Mobile Apps · 🎨 UI/UX Design · 🔥 Firebase · ⚡ Next.js · 🛠️ Productivity</AuroraText>
                    </p>
                    <p className="text-1xl font-bold bg-background bg-clip-text text-transparent px-8">
                        <AuroraText>🚀 Flutter · 💻 Web Development · 📱 Mobile Apps · 🎨 UI/UX Design · 🔥 Firebase · ⚡ Next.js · 🛠️ Productivity</AuroraText>
                    </p>
                </motion.div>
            </section>

            <br />
            <br />

            {/* === ABOUT === */}
            <section id="about" className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center gap-12">
                {/* Foto kiri */}
                <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex-1 flex justify-center">
                    <div className="w-full h-[400px] md:h-[500px]">
                        <img src="/images/muhammadkholis.png" alt="Muhammad Kholis" className="w-full h-full object-cover rounded-2xl shadow-2xl" />
                    </div>
                </motion.div>

                {/* Teks kanan */}
                <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex-1 text-center md:text-left">
                    {/* Judul */}
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        <AuroraText>ABOUT ME</AuroraText>
                    </h1>

                    {/* Deskripsi */}
                    <div className="text-primary text-md leading-relaxed mt-6">
                        <TextAnimate>Saya adalah mahasiswa aktif Program Studi Teknik Informatika di Politeknik Negeri Lhokseumawe dengan minat dan keahlian di bidang pengembangan aplikasi mobile dan web. Berpengalaman dalam membangun berbagai proyek, mulai dari website organisasi hingga aplikasi produktivitas berbasis Flutter, Firebase, dan SQLite. Terbiasa bekerja dalam tim, semangat belajar tinggi, dan selalu berusaha menghasilkan karya berkualitas.</TextAnimate>
                    </div>

                    {/* Skill Bars */}
                    <div className="mt-10 space-y-6 max-w-md">
                        <Progress
                            classNames={{
                                base: "w-full",
                                track: "drop-shadow-md border border-default",
                                indicator: "bg-linear-to-r from-pink-500 to-yellow-500",
                                label: "tracking-wider font-medium text-primary",
                                value: "text-foreground/60",
                            }}
                            label="Flutter"
                            radius="sm"
                            showValueLabel={true}
                            size="sm"
                            value={85}
                        />

                        <Progress
                            classNames={{
                                base: "w-full",
                                track: "drop-shadow-md border border-default",
                                indicator: "bg-linear-to-r from-violet-500 to-indigo-500",
                                label: "tracking-wider font-medium text-primary",
                                value: "text-foreground/60",
                            }}
                            label="Web Development"
                            radius="sm"
                            showValueLabel={true}
                            size="sm"
                            value={80}
                        />

                        <Progress
                            classNames={{
                                base: "w-full",
                                track: "drop-shadow-md border border-default",
                                indicator: "bg-linear-to-r from-green-400 to-emerald-600",
                                label: "tracking-wider font-medium text-primary",
                                value: "text-foreground/60",
                            }}
                            label="Firebase"
                            radius="sm"
                            showValueLabel={true}
                            size="sm"
                            value={70}
                        />

                        <Progress
                            classNames={{
                                base: "w-full",
                                track: "drop-shadow-md border border-default",
                                indicator: "bg-linear-to-r from-cyan-400 to-blue-500",
                                label: "tracking-wider font-medium text-primary",
                                value: "text-foreground/60",
                            }}
                            label="UI/UX Design"
                            radius="sm"
                            showValueLabel={true}
                            size="sm"
                            value={65}
                        />
                    </div>
                </motion.div>
            </section>

            {/* === EDUCATION === */}
            <section id="education" className="max-w-6xl mx-auto px-6 py-20">
                <h2 className="text-4xl font-bold text-center mb-12">
                    <AuroraText>EDUCATION</AuroraText>
                </h2>

                <div className="grid md:grid-cols-2 gap-10">
                    {[
                        {
                            title: "SMK Negeri 2 Langsa",
                            desc: "Rekayasa Perangkat Lunak (2019 - 2022)",
                            extra: "Nilai Akhir: 84,81",
                        },
                        {
                            title: "Politeknik Negeri Lhokseumawe",
                            desc: "Teknik Informatika (2022 - Sekarang)",
                            extra: "IPK Terakhir: 3.45 / 4.00",
                        },
                    ].map((edu, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }}>
                            <MagicCard gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"} className="p-10 rounded-2xl">
                                <h3 className="text-xl font-semibold">{edu.title}</h3>
                                <p className="text-gray-500">{edu.desc}</p>
                                <p className="font-medium text-violet-500">{edu.extra}</p>
                            </MagicCard>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* === SKILLS === */}
            <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
                <h2 className="text-4xl font-bold text-center mb-12">
                    <AuroraText>SKILLS</AuroraText>
                </h2>
                <div className="grid md:grid-cols-4 gap-8 text-center">
                    {[
                        { title: "Programming", content: "Dart, PHP, HTML, JavaScript, Python" },
                        { title: "Tools", content: "Photoshop, Premiere Pro, Blender, Figma, Canva" },
                        { title: "Soft Skills", content: "Critical Thinking, Teamwork, Communication" },
                        { title: "Languages", content: "Indonesia (Native), English (Communication)" },
                    ].map((skill, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} className=" border rounded-2xl shadow-lg hover:scale-105 transition">
                            <MagicCard gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"} className="p-5 rounded-2xl">
                                <h3 className="font-semibold text-lg mb-2">{skill.title}</h3>
                                <p className="text-gray-600">{skill.content}</p>
                            </MagicCard>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* === CONTACT === */}
            <section id="contact" className="relative overflow-hidden  flex items-center justify-center">
                <div className="relative z-10  w-full">
                    <Card isBlurred className="p-10  shadow-2xl border border-none">
                        <CardHeader className="flex flex-col gap-2 items-center">
                            <p className="text-primary">Need Any Project? </p>
                            <h1 className="text-8xl font-bold bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
                                <AnimatedGradientText>Let’s Start</AnimatedGradientText>
                            </h1>
                        </CardHeader>

                        <CardBody className="mt-4 flex flex-col md:flex-row items-center justify-center gap-8 text-lg">
                            {/* Phone */}
                            <p className="flex items-center gap-2">
                                <Phone className="w-5 h-5 text-violet-500" />
                                <span className="font-medium">+62 8516-1787-501</span>
                            </p>

                            {/* Email */}
                            <p className="flex items-center gap-2">
                                <Mail className="w-5 h-5 text-violet-500" />
                                <span className="font-medium">parzivalxdd@gmail.com</span>
                            </p>
                        </CardBody>

                        <CardFooter className="flex justify-center gap-4">
                            <Button as="a" href="mailto:parzivalxdd@gmail.com" color="primary" radius="full" variant="shadow">
                                Send Email
                            </Button>
                            <Button as="a" href="https://linkedin.com/in/muhammad-kholis-51ba57195" target="_blank" radius="full" variant="bordered">
                                LinkedIn
                            </Button>
                        </CardFooter>
                    </Card>
                    <BorderBeam duration={8} size={400} />
                </div>
            </section>
        </div>
    );
}
