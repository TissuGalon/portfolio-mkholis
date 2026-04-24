"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
// === HeroUI ===
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";
import { Divider } from "@heroui/divider";
// === MagicUI ===
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  User,
  Camera,
  MapPin,
  Code2,
  ArrowUpRight,
  Search,
} from "lucide-react";

import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
import { Ripple } from "@/components/magicui/ripple";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { TextAnimate } from "@/components/magicui/text-animate";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { BorderBeam } from "@/components/magicui/border-beam";
// === Icons ===
export default function Home() {
  return (
    <div className="bg-background overflow-x-hidden">
      <div
        className="
    absolute inset-0 
    hidden dark:block 
    bg-[url('/images/nobg.webp')] 
    bg-cover bg-center bg-fixed bg-blend-screen
  "
        style={{ opacity: 0.15 }}
      />

      {/* === HERO === */}
      <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-12 md:py-20">
          {/* Left: Text */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <BlurFade inView delay={0.3}>
              <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
                Hi, I’m <br />
                <AnimatedGradientText>Muhammad Kholis</AnimatedGradientText>
              </h1>
            </BlurFade>
            <TextAnimate
              animation="slideLeft"
              className="text-default-500 text-lg md:text-xl max-w-lg"
            >
              A passionate Flutter & Web Developer who loves building modern,
              fast, and beautiful applications.
            </TextAnimate>

            <BlurFade inView delay={0.4}>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="#portfolio">
                  <RainbowButton color="primary" size="lg">
                    <TextAnimate animation="scaleUp">
                      🚀 View Projects
                    </TextAnimate>
                  </RainbowButton>
                </a>
                <ModalCV />
              </div>
            </BlurFade>
            <BlurFade inView delay={0.4}>
              <div className="flex gap-4 justify-center md:justify-start">
                <Sosmed />
              </div>
            </BlurFade>
          </div>

          {/* Right: Photo */}
          <BlurFade inView delay={0.6}>
            <div className="flex-1 flex justify-center md:justify-end">
              <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem]">
                <Image
                  fill
                  priority
                  alt="Muhammad Kholis"
                  className="w-full h-full object-cover rounded-full shadow-2xl"
                  src="/images/2muhammadkholis.webp"
                />
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
        {/*    <motion.div animate={{ x: ["0%", "-100%"] }} className="flex whitespace-nowrap relative" transition={{ repeat: Infinity, duration: 20, ease: "linear" }}>
                    <p className="text-1xl font-bold bg-background bg-clip-text text-primary px-8">🚀 Flutter · 💻 Web Development · 📱 Mobile Apps · 🎨 UI/UX Design · 🔥 Firebase · ⚡ Next.js · 🛠️ Productivity</p>
                    <p className="text-1xl font-bold bg-background bg-clip-text text-primary px-8">🚀 Flutter · 💻 Web Development · 📱 Mobile Apps · 🎨 UI/UX Design · 🔥 Firebase · ⚡ Next.js · 🛠️ Productivity</p>
                    <p className="text-1xl font-bold bg-background bg-clip-text text-primary px-8">🚀 Flutter · 💻 Web Development · 📱 Mobile Apps · 🎨 UI/UX Design · 🔥 Firebase · ⚡ Next.js · 🛠️ Productivity</p>
                </motion.div> */}

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <ScrollVelocityContainer className="text-4xl font-bold tracking-[-0.02em] md:text-7xl md:leading-20">
            <ScrollVelocityRow baseVelocity={15} direction={1}>
              Fullstack Developer
            </ScrollVelocityRow>
            <ScrollVelocityRow baseVelocity={15} direction={-1}>
              Graphic Designer
            </ScrollVelocityRow>
          </ScrollVelocityContainer>
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r" />
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l" />
        </div>
      </section>
      <br />
      <br />
      {/* === ABOUT === */}
      {/* === ABOUT === */}
      <section
        className="max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center lg:items-start gap-12"
        id="about"
      >
        {/* Images Grid Section (Same on Mobile/Desktop) */}
        <div className="flex-1 w-full max-w-[500px] lg:max-w-none">
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              className="rounded-2xl overflow-hidden border shadow-sm group bg-background"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Image
                alt="The Developer"
                className="w-full h-auto aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                height={500}
                src="/images/muhammadkholis_ui_.webp"
                width={400}
              />
            </motion.div>
            <motion.div
              className="rounded-2xl overflow-hidden border shadow-sm group bg-background"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Image
                alt="The Creative"
                className="w-full h-auto aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                height={500}
                src="/images/muhammadkholis_about_2.png"
                width={400}
              />
            </motion.div>
          </div>
        </div>

        {/* Teks kanan */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          {/* Judul */}
          <div className="mb-8 group">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-black dark:text-white">
              About Me
            </h2>
            <div className="h-1.5 w-16 bg-black dark:bg-white mt-3 rounded-full group-hover:w-24 transition-all duration-500 origin-left" />
          </div>

          {/* Deskripsi */}
          <div className="space-y-6 text-lg md:text-xl text-primary/80 leading-relaxed">
            <p>
              Saya adalah mahasiswa aktif{" "}
              <span className="font-bold text-black dark:text-white underline decoration-black/20 dark:decoration-white/20 underline-offset-4">
                Teknik Informatika
              </span>{" "}
              di Politeknik Negeri Lhokseumawe dengan fokus pada pengembangan
              aplikasi mobile dan web yang inovatif.
            </p>
            <p>
              Berpengalaman dalam membangun solusi digital menggunakan{" "}
              <span className="font-bold text-black dark:text-white underline decoration-black/20 dark:decoration-white/20 underline-offset-4">
                Flutter, Next.js, dan Firebase
              </span>
              . Saya memiliki passion dalam menciptakan antarmuka yang indah dan
              pengalaman pengguna yang mulus.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <span className="text-[10px] font-black tracking-[0.3em] text-gray-400 uppercase">
                Technologies & Tools
              </span>
              <div className="h-[1px] w-8 bg-gray-200 dark:bg-gray-800" />
            </div>
            <TechStack />
          </div>
        </motion.div>
      </section>
      <Divider className="my-10" />
      {/* === EDUCATION & SKILLS === */}
      <section className="max-w-6xl mx-auto px-6 py-20" id="education">
        {/* Header matching About Me style */}
        <motion.div
          className="mb-16 group text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-black dark:text-white">
            Education & Skills
          </h2>
          <div className="h-1.5 w-16 bg-black dark:bg-white mt-3 rounded-full group-hover:w-24 transition-all duration-500 origin-left mx-auto lg:mx-0" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* === EDUCATION (Left Column) === */}
          <div className="flex-1 space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-black tracking-[0.3em] text-gray-400 uppercase">
                Academic Path
              </span>
              <div className="h-[1px] w-8 bg-gray-200 dark:bg-gray-800" />
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Politeknik Negeri Lhokseumawe",
                  period: "2022 - Sekarang",
                  major: "Teknik Informatika",
                  score: "IPK: 3.45 / 4.00",
                },
                {
                  title: "SMK Negeri 2 Langsa",
                  period: "2019 - 2022",
                  major: "Rekayasa Perangkat Lunak",
                  score: "Nilai Akhir: 84,81",
                },
              ].map((edu, i) => (
                <motion.div
                  key={i}
                  className="relative pl-8 border-l-2 border-black/5 dark:border-white/5 group"
                  initial={{ opacity: 0, x: -20 }}
                  transition={{ delay: i * 0.1 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-black dark:border-white group-hover:scale-125 transition-transform" />
                  <div className="space-y-1">
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                      {edu.period}
                    </span>
                    <h4 className="text-xl font-bold text-black dark:text-white">
                      {edu.title}
                    </h4>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                      {edu.major}
                    </p>
                    <div className="inline-block mt-2 px-3 py-1 bg-black/5 dark:bg-white/5 rounded-md text-sm font-semibold text-black dark:text-white">
                      {edu.score}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* === SKILLS (Right Column) === */}
          <div className="flex-1 space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-black tracking-[0.3em] text-gray-400 uppercase">
                Expertise & Tools
              </span>
              <div className="h-[1px] w-8 bg-gray-200 dark:bg-gray-800" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Programming",
                  content: "Dart, PHP, HTML, JavaScript, Python",
                  icon: <Code2 className="w-5 h-5" />,
                },
                {
                  title: "Tools & Design",
                  content: "Photoshop, Premiere Pro, Blender, Figma, Canva",
                  icon: <Camera className="w-5 h-5" />,
                },
                {
                  title: "Soft Skills",
                  content: "Critical Thinking, Teamwork, Communication",
                  icon: <User className="w-5 h-5" />,
                },
                {
                  title: "Languages",
                  content: "Indonesia (Native), English (B2)",
                  icon: <MapPin className="w-5 h-5" />,
                },
              ].map((skill, i) => (
                <motion.div
                  key={i}
                  className="p-6 rounded-2xl border border-black/5 dark:border-white/5 bg-background shadow-sm hover:shadow-md transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-black text-white dark:bg-white dark:text-black transition-colors group-hover:bg-primary group-hover:text-white">
                      {skill.icon}
                    </div>
                    <h4 className="font-bold text-black dark:text-white uppercase tracking-tight">
                      {skill.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {skill.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Divider className="my-10" />

      <PortfolioSection />
      <Divider className="my-10" />
      <DesignPortfolioSection />

      {/* === CONTACT === */}
      <section
        className="relative overflow-hidden  flex items-center justify-center "
        id="contact"
      >
        <div className="relative z-10  w-full">
          <Card isBlurred className="p-10  shadow-2xl border border-none">
            <CardHeader className="flex flex-col gap-2 items-center text-center">
              <p className="text-primary">Need Any Project? </p>
              <h1 className="text-8xl font-bold bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
                <BlurFade inView delay={0.3}>
                  <AnimatedGradientText>Let’s Start</AnimatedGradientText>
                </BlurFade>
              </h1>
            </CardHeader>

            <CardBody className="mt-6 flex flex-col md:flex-row items-center justify-center gap-3 text-lg">
              {/* Phone */}
              <Button
                as="a"
                className="border-gray-100 dark:border-gray-800"
                color="primary"
                href="tel:+6285161787501"
                radius="lg"
                startContent={<Phone className="w-5 h-5 text-white-500" />}
                variant="bordered"
              >
                +62 8516-1787-501
              </Button>

              {/* Email */}
              <Button
                as="a"
                className="border-gray-100 dark:border-gray-800"
                color="primary"
                href="mailto:parzivalxdd@gmail.com"
                radius="lg"
                startContent={<Mail className="w-5 h-5 text-white-500" />}
                variant="bordered"
              >
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

import { BlurFade } from "@/components/magicui/blur-fade";

function PortfolioSection() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Parzello Website",
      desc: "Official website for Parzello digital agency.",
      link: "https://parzello.vercel.app/",
      cover: "images/portfolio/parzelloweb.webp",
      badge: "Web",
    },
    {
      title: "Sipaling Delivery",
      desc: "First mobile app project built with Flutter focusing on modern UI/UX.",
      link: "#portfolio",
      cover:
        "https://mkholis-portfolio.pages.dev/portfolio/mobile_sipaling/cover.png",
      badge: "Mobile",
    },
    {
      title: "Centrepoint",
      desc: "Community management app for POLICY organization at PNL.",
      link: "#portfolio",
      cover: "images/portfolio/centrepoint.webp",
      badge: "Mobile",
    },
    {
      title: "Personal Portfolio",
      desc: "My personal portfolio website built with Next.js & TailwindCSS.",
      link: "https://mkholis-portfolio.pages.dev/",
      cover: "images/portfolio/webportfolio.webp",
      badge: "Web",
    },
    {
      title: "Website UKM-POLICY",
      desc: "Official website for Polytechnic Linux Community with dynamic content and responsive design.",
      link: "https://www.ukmpolicy.com/",
      cover: "images/portfolio/webpolicy.webp",
      badge: "Web",
    },
    {
      title: "E-Konsul",
      desc: "Consultation app for students and lecturers at Politeknik Negeri Lhokseumawe.",
      link: "#portfolio",
      cover: "images/portfolio/ekonsul.webp",
      badge: "Mobile",
    },
    {
      title: "Emergency Center (EMTER)",
      desc: "Emergency response app with real-time chat, maps, and quick call features.",
      link: "#portfolio",
      cover: "images/portfolio/emter.webp",
      badge: "Mobile",
    },
    {
      title: "Ticzy – Productivity App",
      desc: "A daily productivity management app with To-Do, Finance, Scheduler, and Notes.",
      link: "https://play.google.com/store/apps/details?id=com.parzello.ticzy",
      cover: "images/portfolio/ticzy.webp",
      badge: "Mobile",
    },
  ];

  const badges = ["All", ...Array.from(new Set(projects.map((p) => p.badge)))];

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = filter === "All" || project.badge === filter;
    const matchesSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.desc.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <section className="max-w-6xl mx-auto px-6 py-20" id="portfolio">
      {/* Header matching About Me / Education style */}
      <motion.div
        className="mb-16 group text-center lg:text-left"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-black dark:text-white uppercase">
          Portfolio
        </h2>
        <div className="h-1.5 w-16 bg-black dark:bg-white mt-3 rounded-full group-hover:w-24 transition-all duration-500 origin-left mx-auto lg:mx-0" />
      </motion.div>

      {/* minimalist Search & Filter */}
      <div className="mb-12 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Search Input */}
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-black dark:group-focus-within:text-white transition-colors" />
            <input
              className="w-full pl-11 pr-10 py-3 bg-black/5 dark:bg-white/5 border border-transparent focus:border-black/10 dark:focus:border-white/10 rounded-xl outline-none transition-all text-sm font-medium"
              placeholder="Search projects..."
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                onClick={() => setSearch("")}
              >
                ✕
              </button>
            )}
          </div>

          {/* Filter Chips */}
          <div className="flex gap-2 flex-wrap">
            {badges.map((b) => (
              <button
                key={b}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 border ${
                  filter === b
                    ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                    : "bg-transparent text-gray-400 border-gray-200 dark:border-gray-800 hover:border-gray-400"
                }`}
                onClick={() => setFilter(b)}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[10px] font-black tracking-[0.3em] text-gray-400 uppercase">
            Showing {filteredProjects.length}{" "}
            {filteredProjects.length === 1 ? "Result" : "Results"}
          </span>
          <div className="h-[1px] flex-1 bg-gray-100 dark:bg-gray-900" />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-12">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <a
                className="group block"
                href={project.link}
                rel="noopener noreferrer"
                target={project.link === "#portfolio" ? "_self" : "_blank"}
              >
                <div className="space-y-6">
                  {/* Image Container */}
                  <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-black/5 dark:border-white/5 bg-background shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10" />
                    <Image
                      fill
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      src={project.cover}
                    />

                    {/* Minimalist Badge Overlay */}
                    <div className="absolute top-6 right-6 z-20">
                      <div className="px-4 py-1.5 rounded-full bg-black/80 dark:bg-white/80 text-white dark:text-black backdrop-blur-md text-[10px] font-black tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                        {project.badge}
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="space-y-3 px-2">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-2xl font-bold text-black dark:text-white tracking-tight group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="p-2 rounded-full bg-black/5 dark:bg-white/5 group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all duration-300 -rotate-45 group-hover:rotate-0">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed line-clamp-2">
                      {project.desc}
                    </p>

                    <div className="flex items-center gap-2 pt-2">
                      <span className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase">
                        View Case Study
                      </span>
                      <div className="h-[1px] w-0 group-hover:w-8 bg-black dark:bg-white transition-all duration-500" />
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

function DesignPortfolioSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20" id="design-portfolio">
      <motion.div
        className="mb-16 group text-center lg:text-left"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-black dark:text-white uppercase">
          Design Portfolio
        </h2>
        <div className="h-1.5 w-16 bg-black dark:bg-white mt-3 rounded-full group-hover:w-24 transition-all duration-500 origin-left mx-auto lg:mx-0" />
      </motion.div>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-5xl aspect-[4/3] md:aspect-[16/9] rounded-3xl overflow-hidden border border-black/5 dark:border-white/5 shadow-2xl bg-black/5 dark:bg-white/5">
          <iframe
            allowFullScreen
            allow="clipboard-write"
            className="w-full h-full no-scrollbar"
            frameBorder="0"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            scrolling="no"
            src="https://www.behance.net/embed/project/244284409?ilo0=1"
            title="Design Portfolio Behance Embed"
          />
        </div>
      </div>
    </section>
  );
}

function TechStack() {
  const skills = [
    { name: "Flutter", icon: "/icons/flutter.png" },
    { name: "Next.js", icon: "/icons/nextjs.svg" },
    { name: "Firebase", icon: "/icons/firebase.webp" },
    { name: "React", icon: "/icons/react.png" },
    { name: "Dart", icon: "/icons/dart.webp" },
    { name: "Tailwind", icon: "/icons/tailwind.png" },
    { name: "PHP", icon: "/icons/php.webp" },
  ];

  const tools = [
    { name: "Figma", icon: "/icons/figma.svg" },
    { name: "Photoshop", icon: "/icons/photoshop.png" },
    { name: "Premiere Pro", icon: "/icons/premierepro.png" },
    { name: "Blender", icon: "/icons/blender3d.webp" },
    { name: "Android Studio", icon: "/icons/androidstudio.webp" },
    { name: "Canva", icon: "/icons/canva.webp" },
  ];

  return (
    <div className="space-y-8">
      {/* Primary Skills */}
      <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
        {skills.map((s) => (
          <div
            key={s.name}
            className="group relative flex items-center justify-center"
          >
            <Image
              alt={s.name}
              className="w-10 h-10 object-contain transition-all duration-500 hover:scale-110 drop-shadow-sm"
              height={40}
              src={s.icon}
              width={40}
            />
            <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform duration-200 px-3 py-1 bg-black text-white text-[10px] font-bold rounded-lg shadow-xl pointer-events-none z-50">
              {s.name}
            </div>
          </div>
        ))}
      </div>

      {/* Tools */}
      <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
        {tools.map((t) => (
          <div
            key={t.name}
            className="group relative flex items-center justify-center"
          >
            <Image
              alt={t.name}
              className="w-7 h-7 object-contain transition-all duration-500 hover:scale-110 drop-shadow-sm"
              height={28}
              src={t.icon}
              width={28}
            />
            <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform duration-200 px-3 py-1 bg-black text-white text-[10px] font-bold rounded-lg shadow-xl pointer-events-none z-50">
              {t.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Sosmed() {
  return (
    <div className="flex gap-4 justify-center md:justify-start">
      <a
        href="https://www.linkedin.com/in/muhammad-kholis-51ba57195/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <ShinyButton color="primary">
          <Linkedin className="w-5 h-5" />
        </ShinyButton>
      </a>

      <a
        href="https://github.com/TissuGalon"
        rel="noopener noreferrer"
        target="_blank"
      >
        <ShinyButton color="primary">
          <Github className="w-5 h-5" />
        </ShinyButton>
      </a>

      <a
        href="https://www.instagram.com/its.przvl._"
        rel="noopener noreferrer"
        target="_blank"
      >
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
      <RainbowButton
        color="primary"
        size="lg"
        variant="outline"
        onClick={onOpen}
      >
        <TextAnimate animation="scaleUp"> 📃 Document</TextAnimate>
      </RainbowButton>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 shadow-xl">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Download Document
              </ModalHeader>
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
                    window.open(
                      "/files/Portfolio_Muhammad_Kholis.pdf",
                      "_blank",
                    );
                    onClose();
                  }}
                >
                  <TextAnimate animation="scaleUp">
                    📑 Download Portfolio
                  </TextAnimate>
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
