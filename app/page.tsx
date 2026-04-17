"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

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
  Chip,
  Input,
} from "@heroui/react";
import { Divider } from "@heroui/divider";

// === MagicUI ===
import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { useState } from "react";

import { Ripple } from "@/components/magicui/ripple";
import { Dock, DockIcon } from "@/components/magicui/dock";

// === Icons ===

export default function Home() {
  const { theme } = useTheme();

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
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
              Hi, I’m <br />
              <span className="inline-flex items-center justify-center font-semibold">
                Muhammad Kholis
              </span>
            </h1>
            A passionate Flutter & Web Developer who loves building modern,
            fast, and beautiful applications.
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#portfolio">
                <Button color="primary" size="lg">
                  🚀 View Projects
                </Button>
              </a>
              <ModalCV />
            </div>
            <div className="flex gap-4 justify-center md:justify-start">
              <Sosmed />
            </div>
          </div>

          {/* Right: Photo */}

          <div className="flex-1 flex justify-center md:justify-end">
            <div className="w-80 h-80 md:w-[28rem] md:h-[28rem]">
              <img
                alt="Muhammad Kholis"
                className="w-full h-full object-cover rounded-full shadow-2xl"
                src="/images/2muhammadkholis.webp"
              />
            </div>
          </div>
        </section>
        <Ripple />
      </div>
      <section className="bg-background relative w-full overflow-hidden py-6">
        {/* Background Blur Layer */}
        <div className="absolute inset-0 bg-primary opacity-5 backdrop-blur-md" />

        {/* Running Text */}
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          className="flex whitespace-nowrap relative"
        >
          <p className="text-1xl font-bold bg-background bg-clip-text text-primary px-8">
            🚀 Flutter · 💻 Web Development · 📱 Mobile Apps · 🎨 UI/UX Design ·
            🔥 Firebase · ⚡ Next.js · 🛠️ Productivity
          </p>
          <p className="text-1xl font-bold bg-background bg-clip-text text-primary px-8">
            🚀 Flutter · 💻 Web Development · 📱 Mobile Apps · 🎨 UI/UX Design ·
            🔥 Firebase · ⚡ Next.js · 🛠️ Productivity
          </p>
          <p className="text-1xl font-bold bg-background bg-clip-text text-primary px-8">
            🚀 Flutter · 💻 Web Development · 📱 Mobile Apps · 🎨 UI/UX Design ·
            🔥 Firebase · ⚡ Next.js · 🛠️ Productivity
          </p>
        </motion.div>
      </section>
      <br />
      <br />
      {/* === ABOUT === */}
      <section
        className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center gap-12"
        id="about"
      >
        {/* Foto kiri */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="w-full h-[400px] md:h-[500px]">
            <Card className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow duration-300">
              <img
                alt="Muhammad Kholis"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
                src="/images/muhammadkholis_ui_.webp"
              />
            </Card>
          </div>
        </motion.div>

        {/* Teks kanan */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          {/* Judul */}
          <h1 className="text-7xl font-bold tracking-tighter md:text-5xl lg:text-8xl">
            <span className="inline-flex items-center justify-center font-semibold">
              ABOUT ME
            </span>
          </h1>
          {/* Deskripsi */}
          <Card className="p-5 rounded-2xl mt-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="text-primary text-md leading-relaxed ">
              Saya adalah mahasiswa aktif Program Studi Teknik Informatika di
              Politeknik Negeri Lhokseumawe dengan minat dan keahlian di bidang
              pengembangan aplikasi mobile dan web. Berpengalaman dalam
              membangun berbagai proyek, mulai dari website organisasi hingga
              aplikasi produktivitas berbasis Flutter, Firebase, dan SQLite.
              Terbiasa bekerja dalam tim, semangat belajar tinggi, dan selalu
              berusaha menghasilkan karya berkualitas.
            </div>
          </Card>
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
        <h2 className="text-center text-6xl font-bold tracking-tighter md:text-5xl lg:text-8xl">
          <span className="inline-flex items-center justify-center font-semibold">
            EDUCATION & SKILLS
          </span>
        </h2>
        <br />
        <br />
        <div className="space-y-8">
          {/* === EDUCATION === */}
          <div>
            <h3 className="text-2xl font-semibold  text-start">
              <span className="inline-flex items-center justify-center font-semibold">
                EDUCATION
              </span>
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
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <Card isBlurred>
                    <Card className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <h4 className="text-xl font-semibold">{edu.title}</h4>
                      <p className="dark:text-gray-400 text-gray-600">
                        {edu.desc}
                      </p>
                      <span className="text-primary font-bold">
                        {edu.extra}
                      </span>
                    </Card>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <br />

          {/* === SKILLS === */}
          <div>
            <h3 className="text-2xl font-semibold  text-start">
              <span className="inline-flex items-center justify-center font-semibold">
                SKILLS
              </span>
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
                <motion.div
                  key={i}
                  className="border rounded-2xl shadow-lg hover:scale-105 transition"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <Card className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <span className="text-primary font-bold">
                      {skill.title}
                    </span>
                    <p className="dark:text-gray-400 text-gray-600">
                      {skill.content}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Divider className="my-10" />

      <PortfolioSection />

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
                <span className="inline-flex items-center justify-center font-semibold">
                  Let’s Start
                </span>
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
        </div>
      </section>
    </div>
  );
}

function PortfolioSection() {
  const { resolvedTheme } = useTheme();
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
    <section className="max-w-6xl mx-auto px-6 pb-20 pt-5" id="portfolio">
      <h2 className="text-center text-7xl font-bold tracking-tighter md:text-5xl lg:text-8xl">
        <span className="inline-flex items-center justify-center font-semibold">
          PORTFOLIO
        </span>
      </h2>
      <br />
      <br />

      {/* Wrapper Chips + Search Bar */}
      <Card isBlurred className="mb-4 bg-background  shadow-none border">
        <CardBody>
          <div className="flex justify-between items-center flex-wrap gap-4 ">
            {/* Search Bar */}
            <div className="flex-1 min-w-[200px] relative">
              <Input
                classNames={{
                  inputWrapper:
                    "border border-gray-300 dark:border-gray-600 focus-within:border-violet-500 dark:focus-within:border-violet-400 transition-colors",
                  input:
                    "text-gray-800 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-500",
                }}
                color="primary"
                placeholder="Search projects..."
                radius="lg"
                type="text"
                value={search}
                variant="bordered"
                onChange={(e) => setSearch(e.target.value)}
              />

              {/* Clear Button (X) */}
              {search && (
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-violet-600 hover:cursor-pointer transition-colors"
                  type="button"
                  onClick={() => setSearch("")}
                >
                  ✕
                </button>
              )}
            </div>

            {/* Filter Chips */}
            <div className="flex gap-3 flex-wrap">
              {badges.map((b) => (
                <Chip
                  key={b}
                  className={
                    filter === b
                      ? "cursor-pointer transition-all duration-300 "
                      : "cursor-pointer transition-all duration-300  border border-gray-300 dark:border-gray-600"
                  }
                  color="warning"
                  size="lg"
                  variant={filter === b ? "flat" : "dot"}
                  onClick={() => setFilter(b)}
                >
                  {b}
                </Chip>
              ))}
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Total Projects */}
      <Card isBlurred className="mb-4 bg-background  shadow-none border">
        <CardBody className="p-2">
          <p className="text-md  ">
            Showing{" "}
            <span className="font-semibold">{filteredProjects.length}</span>{" "}
            {filteredProjects.length === 1 ? "project" : "projects"}
          </p>
        </CardBody>
      </Card>
      <Divider className="my-3" />

      {/* Projects Grid with AnimatePresence */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              animate={{ x: 0, opacity: 1 }} // Geser ke posisi normal
              exit={{ x: 50, opacity: 0 }} // Geser ke kanan saat keluar
              initial={{ x: -50, opacity: 0 }} // Mulai dari kiri
            >
              <Card
                isBlurred
                isFooterBlurred
                className="rounded-2xl overflow-hidden cursor-pointer"
              >
                <Card className="rounded-2xl flex flex-col h-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow duration-300">
                  {/* Cover + Badge */}
                  <div className="relative w-full h-40 md:h-48 lg:h-52 overflow-hidden rounded-t-2xl">
                    <motion.img
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 hover:rotate-3 transition-transform duration-300"
                      src={project.cover}
                    />

                    {/* Glass Badge */}
                    <button
                      className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full
               bg-white/20 dark:bg-black/30 text-white 
               backdrop-blur-md border border-white/30 
               shadow-md hover:bg-white/30 dark:hover:bg-black/40 
               transition-colors"
                      type="button"
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
                    <div className="my-4" />

                    <a
                      href={project.link}
                      rel={
                        project.link == "#portfolio"
                          ? undefined
                          : "noopener noreferrer"
                      }
                      target={project.link == "#portfolio" ? "" : "_blank"}
                    >
                      <Button color="secondary" variant="shadow">
                        View Project
                      </Button>
                    </a>
                  </div>
                </Card>
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
        <DockIcon>
          <img alt="Dart" src="/icons/dart.webp" />
        </DockIcon>
        <Divider orientation="vertical" />

        <DockIcon>
          <img alt="Flutter" className="w-7 h-auto" src="/icons/flutter.png" />
        </DockIcon>
        <Divider orientation="vertical" />

        <DockIcon>
          <img
            alt="Firebase"
            className="w-7 h-auto"
            src="/icons/firebase.webp"
          />
        </DockIcon>
        <Divider orientation="vertical" />

        <DockIcon>
          <img alt="React" className="w-7 h-auto" src="/icons/react.png" />
        </DockIcon>
        <Divider orientation="vertical" />

        <DockIcon>
          <img alt="Next.js" className="w-7 h-auto" src="/icons/nextjs.svg" />
        </DockIcon>
        <Divider orientation="vertical" />

        <DockIcon>
          <img
            alt="TailwindCSS"
            className="w-7 h-auto"
            src="/icons/tailwind.png"
          />
        </DockIcon>
        <Divider orientation="vertical" />

        <DockIcon>
          <img alt="PHP" className="w-7 h-auto" src="/icons/php.webp" />
        </DockIcon>
      </Dock>
    </div>
  );
}
function SkillDock2() {
  return (
    <div className="relative">
      <Dock className="mt-0" direction="middle">
        <DockIcon>
          <img alt="Dart" className="w-7 h-auto" src="/icons/photoshop.png" />
        </DockIcon>
        <Divider orientation="vertical" />

        <DockIcon>
          <img
            alt="Flutter"
            className="w-7 h-auto"
            src="/icons/premierepro.png"
          />
        </DockIcon>
        <Divider orientation="vertical" />

        <DockIcon>
          <img
            alt="Firebase"
            className="w-7 h-auto"
            src="/icons/blender3d.webp"
          />
        </DockIcon>
        <Divider orientation="vertical" />

        <DockIcon>
          <img alt="React" className="w-7 h-auto" src="/icons/figma.svg" />
        </DockIcon>
        <Divider orientation="vertical" />

        <DockIcon>
          <img
            alt="Next.js"
            className="w-7 h-auto"
            src="/icons/androidstudio.webp"
          />
        </DockIcon>
        <Divider orientation="vertical" />

        <DockIcon>
          <img
            alt="TailwindCSS"
            className="w-7 h-auto"
            src="/icons/msoffice.png"
          />
        </DockIcon>
        <Divider orientation="vertical" />

        <DockIcon>
          <img alt="PHP" className="w-7 h-auto" src="/icons/canva.webp" />
        </DockIcon>
      </Dock>
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
        <Button color="primary">
          <Linkedin className="w-5 h-5" />
        </Button>
      </a>

      <a
        href="https://github.com/TissuGalon"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Button color="primary">
          <Github className="w-5 h-5" />
        </Button>
      </a>

      <a
        href="https://www.instagram.com/its.przvl._"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Button color="primary">
          <Instagram className="w-5 h-5" />
        </Button>
      </a>
    </div>
  );
}

function ModalCV() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button color="primary" size="lg" variant="bordered" onClick={onOpen}>
        📃 Document
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 shadow-xl">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Download Document
              </ModalHeader>
              <ModalBody className="flex flex-col gap-4 ">
                <Button
                  color="primary"
                  size="lg"
                  onClick={() => {
                    window.open("/files/CV_Muhammad_Kholis.pdf", "_blank");
                    onClose();
                  }}
                >
                  📄 Download CV
                </Button>

                <Button
                  color="primary"
                  size="lg"
                  variant="bordered"
                  onClick={() => {
                    window.open(
                      "/files/Portfolio_Muhammad_Kholis.pdf",
                      "_blank",
                    );
                    onClose();
                  }}
                >
                  📑 Download Portfolio
                </Button>
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
