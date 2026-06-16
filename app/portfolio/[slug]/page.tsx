import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Calendar, Tag, ShieldCheck, Laptop2 } from "lucide-react";
import ReactMarkdown from "react-markdown";

import { getPortfolioProjectBySlug, getPortfolioProjects } from "@/lib/portfolio";
import { ProjectGallery } from "@/components/project-gallery";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getPortfolioProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Portfolio Case Study`,
    description: project.desc,
  };
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getPortfolioProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const isLive = project.link && project.link !== "#portfolio";

  // Custom styling mappings for markdown elements to preserve the premium theme
  const markdownComponents = {
    h1: ({ children }: any) => (
      <h2 className="text-3xl font-extrabold text-black dark:text-white mt-10 mb-4 border-b border-black/5 dark:border-white/5 pb-2 uppercase tracking-tight">
        {children}
      </h2>
    ),
    h2: ({ children }: any) => (
      <h3 className="text-2xl font-bold text-black dark:text-white mt-8 mb-4 uppercase tracking-tight">
        {children}
      </h3>
    ),
    h3: ({ children }: any) => (
      <h4 className="text-xl font-bold text-black dark:text-white mt-6 mb-3 uppercase tracking-tight">
        {children}
      </h4>
    ),
    p: ({ children }: any) => (
      <p className="text-black/80 dark:text-white/80 text-lg leading-relaxed mb-6 font-medium">
        {children}
      </p>
    ),
    ul: ({ children }: any) => (
      <ul className="list-disc pl-6 mb-6 text-black/80 dark:text-white/80 space-y-2 font-medium">
        {children}
      </ul>
    ),
    ol: ({ children }: any) => (
      <ol className="list-decimal pl-6 mb-6 text-black/80 dark:text-white/80 space-y-2 font-medium">
        {children}
      </ol>
    ),
    li: ({ children }: any) => (
      <li className="text-lg leading-relaxed text-black/80 dark:text-white/80">
        {children}
      </li>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-violet-500 dark:border-violet-400 pl-4 italic my-6 text-gray-700 dark:text-gray-300 bg-black/5 dark:bg-white/5 py-4 pr-4 rounded-r-2xl">
        {children}
      </blockquote>
    ),
    code: ({ children }: any) => (
      <code className="bg-black/5 dark:bg-white/5 px-2 py-1 rounded-md text-sm font-mono text-violet-600 dark:text-violet-400 font-bold">
        {children}
      </code>
    ),
  };

  return (
    <div className="min-h-screen py-32 px-6 max-w-6xl mx-auto">
      {/* Back Button */}
      <Link
        className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-black dark:hover:text-white transition-colors mb-12 group uppercase tracking-wider"
        href="/#portfolio"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform duration-300" />
        Back to projects
      </Link>

      {/* Header Info */}
      <div className="mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[10px] font-black tracking-widest uppercase text-gray-500 dark:text-gray-400">
            {project.badge}
          </span>
          <span className="flex items-center gap-1 text-[10px] font-black tracking-widest uppercase text-violet-500 dark:text-violet-400">
            <ShieldCheck className="w-3.5 h-3.5" /> Verified Project
          </span>
        </div>

        <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-black dark:text-white uppercase mb-6 leading-[0.95]">
          {project.title}
        </h1>

        <p className="text-xl md:text-2xl text-black/80 dark:text-white/80 max-w-3xl leading-relaxed font-semibold">
          {project.desc}
        </p>
      </div>

      {/* Large Featured Image */}
      <div className="relative aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden border border-black/5 dark:border-white/5 shadow-2xl mb-16 bg-black/5 dark:bg-white/5">
        <Image
          fill
          priority
          alt={project.title}
          className="object-cover"
          src={project.cover}
        />
      </div>

      {/* Grid Layout for Content & Sidebar */}
      <div className="grid lg:grid-cols-3 gap-16">
        {/* Main Content (MDX body rendered as beautiful markdown) */}
        <div className="lg:col-span-2">
          <div className="prose dark:prose-invert max-w-none">
            <ReactMarkdown components={markdownComponents}>
              {project.content}
            </ReactMarkdown>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
          <div className="p-8 rounded-[2rem] border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-md space-y-6">
            <h3 className="text-lg font-black tracking-wider uppercase text-black dark:text-white border-b border-black/5 dark:border-white/5 pb-4">
              Project Details
            </h3>

            {/* Platform / Tech */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-black tracking-widest uppercase text-gray-400 flex items-center gap-1.5">
                <Laptop2 className="w-3.5 h-3.5" /> Category
              </span>
              <p className="text-sm font-bold text-black dark:text-white uppercase tracking-wider">
                {project.badge} Developer
              </p>
            </div>

            {/* Project Type */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-black tracking-widest uppercase text-gray-400 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5" /> Case Study Type
              </span>
              <p className="text-sm font-bold text-black dark:text-white uppercase tracking-wider">
                {project.badge === "Web" ? "Web Application" : "Mobile Application"}
              </p>
            </div>

            {/* Status */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-black tracking-widest uppercase text-gray-400 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> Status
              </span>
              <p className="text-sm font-bold text-black dark:text-white uppercase tracking-wider">
                Completed
              </p>
            </div>

            {/* Launch Button / Link */}
            <div className="pt-4 border-t border-black/5 dark:border-white/5">
              {isLive ? (
                <a
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-black text-white dark:bg-white dark:text-black rounded-2xl font-bold text-xs uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-black/10 dark:shadow-white/5"
                  href={project.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Launch Live Project
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <div className="text-center p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider leading-relaxed">
                    Internal Case Study Only
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Carousel Section */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="mt-20 pt-16 border-t border-black/5 dark:border-white/5 space-y-8">
          <h2 className="text-3xl font-extrabold text-black dark:text-white uppercase tracking-tight">
            Project Gallery
          </h2>
          <ProjectGallery images={project.gallery} />
        </div>
      )}
    </div>
  );
}
