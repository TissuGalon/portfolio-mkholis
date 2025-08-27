"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";

// === HeroUI ===
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Progress,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";
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

export default function Home() {
  const { theme, resolvedTheme } = useTheme();

  console.log("Selected Theme : " + theme);
  console.log("Resolved  Theme : " + resolvedTheme);

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
            <TextAnimate
              animation="slideLeft"
              className="text-default-500 text-lg md:text-xl max-w-lg"
            >
              A passionate Flutter & Web Developer who loves building modern,
              fast, and beautiful applications.
            </TextAnimate>
            <div className="flex gap-4 justify-center md:justify-start">
              <RainbowButton color="primary" size="lg">
                <TextAnimate animation="scaleUp"> 🚀 View Projects</TextAnimate>
              </RainbowButton>
              <ModalCV />
            </div>
            <div className="flex gap-4 justify-center md:justify-start">
              <SosmedDock />
            </div>
          </div>

          {/* Right: Photo */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="w-80 h-80 md:w-[28rem] md:h-[28rem]">
              <img
                alt="Muhammad Kholis"
                className="w-full h-full object-cover rounded-full shadow-2xl"
                src="/images/2muhammadkholis.png"
              />
            </div>
          </div>
          <BorderBeam duration={8} size={400} />
        </section>
        <Ripple />
      </div>
      <section className="relative w-full overflow-hidden py-6">
        {/* Background Blur Layer */}
        <div className="absolute inset-0 bg-primary opacity-5 backdrop-blur-md" />

        {/* Running Text */}
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          className="flex whitespace-nowrap relative"
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <p className="text-1xl font-bold bg-background bg-clip-text text-transparent px-8">
            <AuroraText>
              🚀 Flutter · 💻 Web Development · 📱 Mobile Apps · 🎨 UI/UX Design
              · 🔥 Firebase · ⚡ Next.js · 🛠️ Productivity
            </AuroraText>
          </p>
          <p className="text-1xl font-bold bg-background bg-clip-text text-transparent px-8">
            <AuroraText>
              🚀 Flutter · 💻 Web Development · 📱 Mobile Apps · 🎨 UI/UX Design
              · 🔥 Firebase · ⚡ Next.js · 🛠️ Productivity
            </AuroraText>
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
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="w-full h-[400px] md:h-[500px]">
            <img
              alt="Muhammad Kholis"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
              src="/images/2muhammadkholis.png"
            />
          </div>
        </motion.div>

        {/* Teks kanan */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          {/* Judul */}
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
            <AnimatedGradientText>ABOUT ME</AnimatedGradientText>
          </h1>

          {/* Deskripsi */}
          <div className="text-primary text-md leading-relaxed mt-6">
            <TextAnimate>
              Saya adalah mahasiswa aktif Program Studi Teknik Informatika di
              Politeknik Negeri Lhokseumawe dengan minat dan keahlian di bidang
              pengembangan aplikasi mobile dan web. Berpengalaman dalam
              membangun berbagai proyek, mulai dari website organisasi hingga
              aplikasi produktivitas berbasis Flutter, Firebase, dan SQLite.
              Terbiasa bekerja dalam tim, semangat belajar tinggi, dan selalu
              berusaha menghasilkan karya berkualitas.
            </TextAnimate>
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
      <Divider className="my-10" />
      {/* === EDUCATION & SKILLS === */}
      <section className="max-w-6xl mx-auto px-6 py-5" id="edu-skills">
        <h2 className="text-center text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
          <AnimatedGradientText>EDUCATION & SKILLS</AnimatedGradientText>
        </h2>
        <br />
        <br />
        <div className="space-y-8">
          {/* === EDUCATION === */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Education
            </h3>
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
                  transition={{ delay: i * 0.2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <Card isBlurred>
                    <MagicCard
                      className="p-5 rounded-2xl"
                      gradientColor={
                        resolvedTheme == "light" ? "violet" : "#e9e9e9ff"
                      }
                      gradientOpacity={0.1}
                    >
                      <h4 className="text-xl font-semibold">{edu.title}</h4>
                      <p className="text-gray-500">{edu.desc}</p>
                      <AuroraText className="font-medium">
                        {edu.extra}
                      </AuroraText>
                    </MagicCard>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* === SKILLS === */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Skills</h3>
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
                  transition={{ delay: i * 0.2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <MagicCard
                    className="p-5 rounded-2xl"
                    gradientColor={
                      resolvedTheme == "light" ? "violet" : "#e9e9e9ff"
                    }
                    gradientOpacity={0.1}
                  >
                    <h4 className="font-semibold text-lg mb-2">
                      {skill.title}
                    </h4>
                    <p className="text-gray-600">{skill.content}</p>
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
      <section
        className="relative overflow-hidden  flex items-center justify-center"
        id="contact"
      >
        <div className="relative z-10  w-full">
          <Card isBlurred className="p-10  shadow-2xl border border-none">
            <CardHeader className="flex flex-col gap-2 items-center text-center">
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

function PortfolioSection() {
  const { resolvedTheme } = useTheme();

  const projects = [
    {
      title: "Ticzy – Productivity App",
      desc: "A daily productivity management app with To-Do, Finance, Scheduler, and Notes.",
      link: "https://play.google.com/store/apps/details?id=com.parzello.ticzy",
    },
    {
      title: "Centrepoint",
      desc: "Community management app for POLICY organization at PNL.",
      link: "#",
    },
    {
      title: "ZelloPOS",
      desc: "Point of Sale & Business Management System with Firebase & Flutter.",
      link: "#",
    },
    {
      title: "Personal Portfolio",
      desc: "My personal portfolio website built with Next.js & TailwindCSS.",
      link: "https://mkholis-portfolio.pages.dev/",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20" id="portfolio">
      <h2 className="text-center text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
        <AnimatedGradientText>PORTFOLIO</AnimatedGradientText>
      </h2>
      <br />
      <br />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            transition={{ delay: i * 0.2 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Card isBlurred className="rounded-2xl">
              <MagicCard
                className="p-6 rounded-2xl flex flex-col justify-between h-full"
                gradientColor={
                  resolvedTheme == "light" ? "violet" : "#e9e9e9ff"
                }
                gradientOpacity={0.1}
              >
                <div>
                  <h4 className="text-xl font-semibold">{project.title}</h4>
                  <p className="text-gray-500 mt-2">{project.desc}</p>
                </div>
                <AuroraText className="mt-4 font-medium">
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    🔗 View Project
                  </a>
                </AuroraText>
              </MagicCard>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
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
      <ShinyButton color="primary">
        <a
          href="https://linkedin.com/in/username"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </ShinyButton>

      <ShinyButton color="primary">
        <a
          href="https://github.com/username"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Github className="w-5 h-5" />
        </a>
      </ShinyButton>

      <ShinyButton color="primary">
        <a
          href="https://instagram.com/username"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Instagram className="w-5 h-5" />
        </a>
      </ShinyButton>
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
