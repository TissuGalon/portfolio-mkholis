"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

// === HeroUI ===
import { Button, Card, CardHeader, CardBody, CardFooter, Progress, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Chip, Input } from "@heroui/react";
import { Divider } from "@heroui/divider";

// === MagicUI ===
import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";

import { Ripple } from "@/components/magicui/ripple";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { TextAnimate } from "@/components/magicui/text-animate";
import { AuroraText } from "@/components/magicui/aurora-text";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ShineBorder } from "@/components/magicui/shine-border";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { MagicCard } from "@/components/magicui/magic-card";

// === Icons ===
import { GithubIcon } from "@/components/icons";
import { SiFlutter, SiFirebase, SiMysql, SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function Home() {
    const { theme, resolvedTheme } = useTheme();

    console.log("Selected Theme : " + theme);
    console.log("Resolved  Theme : " + resolvedTheme);

    return (
        <div className="bg-background overflow-x-hidden">
            <div className="absolute inset-0 bg-[url('/images/nobg.png')]  bg-cover bg-center bg-fixed bg-blend-screen" style={{ opacity: 0.1 }} />
            {/* === HERO === */}
            <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
                <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-12 md:py-20">
                    {/* Left: Text */}
                    <div className="flex-1 text-center md:text-left space-y-6">
                        <BlurFade delay={0.3} inView>
                            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
                                Hi, I’m <br />
                                <AnimatedGradientText>Muhammad Kholis</AnimatedGradientText>
                            </h1>
                        </BlurFade>
                        <TextAnimate animation="slideLeft" className="text-default-500 text-lg md:text-xl max-w-lg">
                            A passionate Flutter & Web Developer who loves building modern, fast, and beautiful applications.
                        </TextAnimate>

                        <BlurFade delay={0.4} inView>
                            <div className="flex gap-4 justify-center md:justify-start">
                                <a href="#portfolio">
                                    <RainbowButton color="primary" size="lg">
                                        <TextAnimate animation="scaleUp"> 🚀 View Projects</TextAnimate>
                                    </RainbowButton>
                                </a>
                                <ModalCV />
                            </div>
                        </BlurFade>
                        <BlurFade delay={0.4} inView>
                            <div className="flex gap-4 justify-center md:justify-start">
                                <Sosmed />
                            </div>
                        </BlurFade>
                    </div>

                    {/* Right: Photo */}
                    <BlurFade delay={0.6} inView>
                        <div className="flex-1 flex justify-center md:justify-end">
                            <div className="w-80 h-80 md:w-[28rem] md:h-[28rem]">
                                <img alt="Muhammad Kholis" className="w-full h-full object-cover rounded-full shadow-2xl" src="/images/2muhammadkholis.png" />
                            </div>
                        </div>
                    </BlurFade>

                    <BorderBeam duration={8} size={400} />
                </section>
                <Ripple />
            </div>
            <section className="bg-background relative w-full overflow-hidden py-6">
                {/* Background Blur Layer */}
                <div className="absolute inset-0 bg-primary opacity-5 backdrop-blur-md" />

                {/* Running Text */}
                <motion.div animate={{ x: ["0%", "-100%"] }} className="flex whitespace-nowrap relative" transition={{ repeat: Infinity, duration: 20, ease: "linear" }}>
                    <p className="text-1xl font-bold bg-background bg-clip-text text-primary px-8">🚀 Flutter · 💻 Web Development · 📱 Mobile Apps · 🎨 UI/UX Design · 🔥 Firebase · ⚡ Next.js · 🛠️ Productivity</p>
                    <p className="text-1xl font-bold bg-background bg-clip-text text-primary px-8">🚀 Flutter · 💻 Web Development · 📱 Mobile Apps · 🎨 UI/UX Design · 🔥 Firebase · ⚡ Next.js · 🛠️ Productivity</p>
                    <p className="text-1xl font-bold bg-background bg-clip-text text-primary px-8">🚀 Flutter · 💻 Web Development · 📱 Mobile Apps · 🎨 UI/UX Design · 🔥 Firebase · ⚡ Next.js · 🛠️ Productivity</p>
                </motion.div>
            </section>
            <br />
            <br />
            {/* === ABOUT === */}
            <section className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center gap-12" id="about">
                {/* Foto kiri */}
                <motion.div className="flex-1 flex justify-center" initial={{ opacity: 0, x: -50 }} transition={{ duration: 0.6 }} whileInView={{ opacity: 1, x: 0 }}>
                    <div className="w-full h-[400px] md:h-[500px]">
                        <MagicCard className="p-5 rounded-2xl" gradientColor={resolvedTheme == "light" ? "violet" : "#e9e9e9ff"} gradientOpacity={0.1}>
                            <img alt="Muhammad Kholis" className="w-full h-full object-cover rounded-2xl shadow-2xl" src="/images/muhammadkholis_ui_.jpg" />
                        </MagicCard>
                    </div>
                </motion.div>

                {/* Teks kanan */}
                <motion.div className="flex-1 text-center md:text-left" initial={{ opacity: 0, x: 50 }} transition={{ duration: 0.6 }} whileInView={{ opacity: 1, x: 0 }}>
                    {/* Judul */}
                    <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
                        <AnimatedGradientText>ABOUT ME</AnimatedGradientText>
                    </h1>
                    {/* Deskripsi */}
                    <MagicCard className="p-5 rounded-2xl mt-6" gradientColor={resolvedTheme == "light" ? "violet" : "#e9e9e9ff"} gradientOpacity={0.1}>
                        <div className="text-primary text-md leading-relaxed ">
                            <TextAnimate>Saya adalah mahasiswa aktif Program Studi Teknik Informatika di Politeknik Negeri Lhokseumawe dengan minat dan keahlian di bidang pengembangan aplikasi mobile dan web. Berpengalaman dalam membangun berbagai proyek, mulai dari website organisasi hingga aplikasi produktivitas berbasis Flutter, Firebase, dan SQLite. Terbiasa bekerja dalam tim, semangat belajar tinggi, dan selalu berusaha menghasilkan karya berkualitas.</TextAnimate>
                        </div>
                    </MagicCard>
                    <div className="my-4" />
                    <SkillDock />
                    <div className="my-4" />
                    <SkillDock2 />
                    {/* Skill Bars */}
                    {/*  <div className="mt-10 space-y-6 max-w-md">
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
                    </div> */}
                </motion.div>
            </section>
            <Divider className="my-10" />
            {/* === EDUCATION & SKILLS === */}
            <section className="max-w-6xl mx-auto px-6 py-5" id="education">
                <h2 className="text-center text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
                    <AnimatedGradientText>EDUCATION & SKILLS</AnimatedGradientText>
                </h2>
                <br />
                <br />
                <div className="space-y-8">
                    {/* === EDUCATION === */}
                    <div>
                        <h3 className="text-2xl font-semibold  text-start">
                            <AnimatedGradientText>EDUCATION</AnimatedGradientText>
                        </h3>
                        <Divider className="my-4 " />
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
                                <motion.div key={i} initial={{ opacity: 0, y: 40 }} transition={{ delay: i * 0.2 }} whileInView={{ opacity: 1, y: 0 }}>
                                    <Card isBlurred>
                                        <MagicCard className="p-5 rounded-2xl" gradientColor={resolvedTheme == "light" ? "violet" : "#e9e9e9ff"} gradientOpacity={0.1}>
                                            <h4 className="text-xl font-semibold">{edu.title}</h4>
                                            <p className="dark:text-gray-400 text-gray-600">{edu.desc}</p>
                                            <AuroraText className="font-medium">{edu.extra}</AuroraText>
                                        </MagicCard>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <br />

                    {/* === SKILLS === */}
                    <div>
                        <h3 className="text-2xl font-semibold  text-start">
                            <AnimatedGradientText>SKILLS</AnimatedGradientText>
                        </h3>
                        <Divider className="my-4" />
                        <div className="grid md:grid-cols-4 gap-8 text-center">
                            {[
                                {
                                    title: "Programming",
                                    content: "Dart, PHP, HTML, JavaScript, Python",
                                },
                                {
                                    title: "Tools",
                                    content: "Photoshop, Premiere Pro, Blender, Figma, Canva",
                                },
                                {
                                    title: "Soft Skills",
                                    content: "Critical Thinking, Teamwork, Communication",
                                },
                                {
                                    title: "Languages",
                                    content: "Indonesia (Native), English (Communication)",
                                },
                            ].map((skill, i) => (
                                <motion.div key={i} className="border rounded-2xl shadow-lg hover:scale-105 transition" initial={{ opacity: 0, y: 30 }} transition={{ delay: i * 0.2 }} whileInView={{ opacity: 1, y: 0 }}>
                                    <MagicCard className="p-5 rounded-2xl" gradientColor={resolvedTheme == "light" ? "violet" : "#e9e9e9ff"} gradientOpacity={0.1}>
                                        <AuroraText className="font-semibold text-lg mb-2">{skill.title}</AuroraText>
                                        <p className="dark:text-gray-400 text-gray-600">{skill.content}</p>
                                    </MagicCard>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Divider className="my-10" />

            <PortfolioSection />

            {/* === CONTACT === */}
            <section className="relative overflow-hidden  flex items-center justify-center " id="contact">
                <div className="relative z-10  w-full">
                    <Card isBlurred className="p-10  shadow-2xl border border-none">
                        <CardHeader className="flex flex-col gap-2 items-center text-center">
                            <p className="text-primary">Need Any Project? </p>
                            <h1 className="text-8xl font-bold bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
                                <AnimatedGradientText>Let’s Start</AnimatedGradientText>
                            </h1>
                        </CardHeader>

                        <CardBody className="mt-6 flex flex-col md:flex-row items-center justify-center gap-3 text-lg">
                            {/* Phone */}
                            <Button as="a" href="tel:+6285161787501" variant="bordered" color="primary" radius="lg" className="border-gray-100 dark:border-gray-800" startContent={<Phone className="w-5 h-5 text-white-500" />}>
                                +62 8516-1787-501
                            </Button>

                            {/* Email */}
                            <Button as="a" href="mailto:parzivalxdd@gmail.com" variant="bordered" color="primary" radius="lg" className="border-gray-100 dark:border-gray-800" startContent={<Mail className="w-5 h-5 text-white-500" />}>
                                parzivalxdd@gmail.com
                            </Button>
                        </CardBody>

                        <CardFooter className="flex justify-center gap-4">
                            {/*   <Button as="a" href="mailto:parzivalxdd@gmail.com" color="primary" radius="full" variant="shadow">
                                Send Email
                            </Button>
                            <Button as="a" href="https://linkedin.com/in/muhammad-kholis-51ba57195" target="_blank" radius="full" variant="bordered">
                                LinkedIn
                            </Button> */}

                            <Sosmed />
                        </CardFooter>
                    </Card>
                    <BorderBeam duration={8} size={400} />
                </div>
            </section>
        </div>
    );
}

import { useState } from "react";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { BlurFade } from "@/components/magicui/blur-fade";
import { RetroGrid } from "@/components/magicui/retro-grid";

function PortfolioSection() {
    const { resolvedTheme } = useTheme();
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");

    const projects = [
        {
            title: "Ticzy – Productivity App",
            desc: "A daily productivity management app with To-Do, Finance, Scheduler, and Notes.",
            link: "https://play.google.com/store/apps/details?id=com.parzello.ticzy",
            cover: "https://mkholis-portfolio.pages.dev/portfolio/mobile_sipaling/cover.png",
            badge: "Featured",
        },
        {
            title: "Centrepoint",
            desc: "Community management app for POLICY organization at PNL.",
            link: "#",
            cover: "https://mkholis-portfolio.pages.dev/portfolio/mobile_sipaling/cover.png",
            badge: "Community",
        },
        {
            title: "ZelloPOS",
            desc: "Point of Sale & Business Management System with Firebase & Flutter.",
            link: "#",
            cover: "https://mkholis-portfolio.pages.dev/portfolio/mobile_sipaling/cover.png",
            badge: "Business",
        },
        {
            title: "Personal Portfolio",
            desc: "My personal portfolio website built with Next.js & TailwindCSS.",
            link: "https://mkholis-portfolio.pages.dev/",
            cover: "https://mkholis-portfolio.pages.dev/portfolio/mobile_sipaling/cover.png",
            badge: "Web",
        },
    ];

    const badges = ["All", ...Array.from(new Set(projects.map((p) => p.badge)))];

    const filteredProjects = projects.filter((project) => {
        const matchesFilter = filter === "All" || project.badge === filter;
        const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) || project.desc.toLowerCase().includes(search.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <section className="max-w-6xl mx-auto px-6 pb-20 pt-10" id="portfolio">
            <h2 className="text-center text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
                <AnimatedGradientText>PORTFOLIO</AnimatedGradientText>
            </h2>
            <br />
            <br />

            {/* Wrapper Chips + Search Bar */}
            <div className="flex justify-between items-center flex-wrap gap-4 mb-8">
                {/* Search Bar */}
                <div className="flex-1 min-w-[200px] relative">
                    <Input
                        type="text"
                        placeholder="Search projects..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        variant="bordered"
                        radius="lg"
                        color="primary"
                        classNames={{
                            inputWrapper: "border border-gray-300 dark:border-gray-600 focus-within:border-violet-500 dark:focus-within:border-violet-400 transition-colors",
                            input: "text-gray-800 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-500",
                        }}
                    />

                    {/* Clear Button (X) */}
                    {search && (
                        <button type="button" onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-violet-600 hover:cursor-pointer transition-colors">
                            ✕
                        </button>
                    )}
                </div>

                {/* Filter Chips */}
                <div className="flex gap-3 flex-wrap">
                    {badges.map((b) => (
                        <Chip key={b} variant={filter === b ? "flat" : "dot"} color="warning" size="lg" className={filter === b ? "cursor-pointer transition-all duration-300 " : "cursor-pointer transition-all duration-300  border border-gray-300 dark:border-gray-600"} onClick={() => setFilter(b)}>
                            {b}
                        </Chip>
                    ))}
                </div>
            </div>

            {/* Total Projects */}
            <p className="text-sm  mb-6">
                Showing <span className="font-semibold">{filteredProjects.length}</span> {filteredProjects.length === 1 ? "project" : "projects"}
            </p>

            <Divider className="my-5" />

            {/* Projects Grid with AnimatePresence */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                <AnimatePresence>
                    {filteredProjects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ x: -50, opacity: 0 }} // Mulai dari kiri
                            animate={{ x: 0, opacity: 1 }} // Geser ke posisi normal
                            exit={{ x: 50, opacity: 0 }} // Geser ke kanan saat keluar
                            transition={{ type: "spring", stiffness: 200, damping: 20, delay: i * 0.05 }}
                        >
                            <Card isBlurred isFooterBlurred className="rounded-2xl overflow-hidden cursor-pointer">
                                <MagicCard className="rounded-2xl flex flex-col h-full" gradientColor={resolvedTheme == "light" ? "violet" : "#e9e9e9ff"} gradientOpacity={0.1}>
                                    {/* Cover + Badge */}
                                    <div className="relative w-full h-40 md:h-48 lg:h-52 overflow-hidden rounded-t-2xl">
                                        <motion.img src={project.cover} alt={project.title} className="w-full h-full object-cover" whileHover={{ scale: 1.1, rotate: 3 }} transition={{ type: "spring", stiffness: 200, damping: 15 }} />

                                        {/* Glass Badge */}
                                        <button
                                            type="button"
                                            className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full 
               bg-white/20 dark:bg-black/30 text-white 
               backdrop-blur-md border border-white/30 
               shadow-md hover:bg-white/30 dark:hover:bg-black/40 
               transition-colors"
                                        >
                                            {project.badge}
                                        </button>
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col justify-between flex-1 p-6">
                                        <div>
                                            <h4 className="text-xl font-semibold">{project.title}</h4>
                                            <p className="text-gray-500 mt-2">{project.desc}</p>
                                        </div>
                                        <div className="my-4"></div>

                                        <ShimmerButton className="shadow-2xl" shimmerColor={resolvedTheme == "light" ? "violet" : "violet"}>
                                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">View Project</span>
                                        </ShimmerButton>
                                    </div>
                                </MagicCard>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </section>
    );
}

function SkillDock() {
    return (
        <div className="relative">
            <Dock className="mt-0" direction="middle">
                <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />

                <DockIcon>
                    <img src="/icons/dart.png" alt="Dart" className="w-7 h-auto" />
                </DockIcon>
                <Divider orientation="vertical" />

                <DockIcon>
                    <img src="/icons/flutter.png" alt="Flutter" className="w-7 h-auto" />
                </DockIcon>
                <Divider orientation="vertical" />

                <DockIcon>
                    <img src="/icons/firebase.png" alt="Firebase" className="w-7 h-auto" />
                </DockIcon>
                <Divider orientation="vertical" />

                <DockIcon>
                    <img src="/icons/react.png" alt="React" className="w-7 h-auto" />
                </DockIcon>
                <Divider orientation="vertical" />

                <DockIcon>
                    <img src="/icons/nextjs.svg" alt="Next.js" className="w-7 h-auto" />
                </DockIcon>
                <Divider orientation="vertical" />

                <DockIcon>
                    <img src="/icons/tailwind.png" alt="TailwindCSS" className="w-7 h-auto" />
                </DockIcon>
                <Divider orientation="vertical" />

                <DockIcon>
                    <img src="/icons/php.png" alt="PHP" className="w-7 h-auto" />
                </DockIcon>
            </Dock>
        </div>
    );
}
function SkillDock2() {
    return (
        <div className="relative">
            <Dock className="mt-0" direction="middle">
                <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />

                <DockIcon>
                    <img src="/icons/photoshop.png" alt="Dart" className="w-7 h-auto" />
                </DockIcon>
                <Divider orientation="vertical" />

                <DockIcon>
                    <img src="/icons/premierepro.png" alt="Flutter" className="w-7 h-auto" />
                </DockIcon>
                <Divider orientation="vertical" />

                <DockIcon>
                    <img src="/icons/blender3d.png" alt="Firebase" className="w-7 h-auto" />
                </DockIcon>
                <Divider orientation="vertical" />

                <DockIcon>
                    <img src="/icons/figma.svg" alt="React" className="w-7 h-auto" />
                </DockIcon>
                <Divider orientation="vertical" />

                <DockIcon>
                    <img src="/icons/androidstudio.png" alt="Next.js" className="w-7 h-auto" />
                </DockIcon>
                <Divider orientation="vertical" />

                <DockIcon>
                    <img src="/icons/msoffice.png" alt="TailwindCSS" className="w-7 h-auto" />
                </DockIcon>
                <Divider orientation="vertical" />

                <DockIcon>
                    <img src="/icons/canva.png" alt="PHP" className="w-7 h-auto" />
                </DockIcon>
            </Dock>
        </div>
    );
}

function SosmedDock() {
    return (
        <div className="relative">
            <Dock className="mt-0" direction="middle">
                <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                <DockIcon>
                    <Linkedin className="w-5 h-5" />
                </DockIcon>
                <Divider orientation="vertical" />
                <DockIcon>
                    <GithubIcon className="w-5 h-5" />
                </DockIcon>
                <Divider orientation="vertical" />
                <DockIcon>
                    <Instagram className="size-6" />
                </DockIcon>
                <Divider orientation="vertical" />
                <DockIcon>
                    <Mail className="size-6" />
                </DockIcon>
            </Dock>
        </div>
    );
}

function Sosmed() {
    return (
        <div className="flex gap-4 justify-center md:justify-start">
            <a href="https://www.linkedin.com/in/muhammad-kholis-51ba57195/" rel="noopener noreferrer" target="_blank">
                <ShinyButton color="primary">
                    <Linkedin className="w-5 h-5" />
                </ShinyButton>
            </a>

            <a href="https://github.com/TissuGalon" rel="noopener noreferrer" target="_blank">
                <ShinyButton color="primary">
                    <Github className="w-5 h-5" />
                </ShinyButton>
            </a>

            <a href="https://www.instagram.com/its.przvl._" rel="noopener noreferrer" target="_blank">
                <ShinyButton color="primary">
                    <Instagram className="w-5 h-5" />
                </ShinyButton>
            </a>
        </div>
    );
}

function ModalCV() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <RainbowButton color="primary" size="lg" variant="outline" onClick={onOpen}>
                <TextAnimate animation="scaleUp"> 📃 Document</TextAnimate>
            </RainbowButton>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent className="bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 shadow-xl">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Download Document</ModalHeader>
                            <ModalBody className="flex flex-col gap-4 ">
                                <RainbowButton
                                    color="primary"
                                    size="lg"
                                    onClick={() => {
                                        window.open("/files/CV_Muhammad_Kholis.pdf", "_blank");
                                        onClose();
                                    }}
                                >
                                    <TextAnimate animation="scaleUp"> 📄 Download CV</TextAnimate>
                                </RainbowButton>

                                <RainbowButton
                                    color="primary"
                                    size="lg"
                                    variant="outline"
                                    onClick={() => {
                                        window.open("/files/Portfolio_Muhammad_Kholis.pdf", "_blank");
                                        onClose();
                                    }}
                                >
                                    <TextAnimate animation="scaleUp">📑 Download Portfolio</TextAnimate>
                                </RainbowButton>
                            </ModalBody>

                            <ModalFooter>
                                <Button color="primary" variant="ghost" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
