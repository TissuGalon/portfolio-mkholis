"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

export function ProjectGallery({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!images || images.length === 0) return null;

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-6">
      {/* Main Slide Container */}
      <div className="relative aspect-[16/10] w-full rounded-[2rem] overflow-hidden border border-black/5 dark:border-white/5 bg-black/[0.03] dark:bg-white/[0.03] group shadow-xl">
        {/* Click to open Lightbox */}
        <button
          className="absolute inset-0 w-full h-full cursor-zoom-in bg-transparent border-none p-0 block text-left"
          onClick={() => setLightboxOpen(true)}
          aria-label="Zoom screenshot"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              animate={{ opacity: 1, scale: 1 }}
              className="relative w-full h-full"
              exit={{ opacity: 0, scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                fill
                alt={`Screenshot ${index + 1}`}
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
                src={images[index]}
              />
            </motion.div>
          </AnimatePresence>
        </button>

        {/* Gradient bottom overlay for counter readability */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

        {/* Maximize Button */}
        <button
          className="absolute top-6 right-6 p-3 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white transition-all scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100 cursor-pointer"
          onClick={() => setLightboxOpen(true)}
        >
          <Maximize2 className="w-4 h-4" />
        </button>

        {/* Slide Counter */}
        <div className="absolute bottom-6 left-8 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-black tracking-widest uppercase">
          {index + 1} / {images.length}
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md text-white transition-all scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100 cursor-pointer"
              onClick={handlePrev}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md text-white transition-all scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100 cursor-pointer"
              onClick={handleNext}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails Navigation Row */}
      {images.length > 1 && (
        <div className="flex justify-center items-center gap-3 flex-wrap">
          {images.map((img, i) => (
            <button
              key={i}
              className={`relative aspect-[16/10] w-24 rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                index === i
                  ? "border-violet-500 scale-105 shadow-md shadow-violet-500/10"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
              onClick={() => setIndex(i)}
            >
              <Image
                fill
                alt={`Thumbnail ${i + 1}`}
                className="object-cover"
                sizes="96px"
                src={img}
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxOpen && (
          /* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 cursor-zoom-out"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              onClick={() => setLightboxOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Lightbox Media Container */}
            <motion.div
              animate={{ scale: 1, y: 0 }}
              className="relative max-w-5xl w-full aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
              exit={{ scale: 0.95, y: 20 }}
              initial={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                fill
                alt={`Zoomed Screenshot ${index + 1}`}
                className="object-contain bg-black/40"
                src={images[index]}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
