"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

interface StoryCardProps {
  title?: string;
  content?: string;
  images?: string[]; // images + videos
  onNext?: () => void;
  final?: boolean;
}

// Detect video files
const isVideo = (src: string) => /\.(mp4|webm|ogg)$/i.test(src);

export default function StoryCard({
  title,
  content,
  images = [],
  onNext,
  final = false,
}: StoryCardProps) {
  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Enter") onNext?.();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onNext]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -20 }}
      transition={{ duration: 0.8 }}
      className="relative w-full max-w-4xl mx-auto bg-[#1f0d1f]
           rounded-3xl shadow-2xl p-8
           flex flex-col items-center gap-6
           max-h-[85vh] overflow-y-auto
           scrollbar-thin scrollbar-thumb-primary/40 scrollbar-track-transparent"
    style={{
    scrollbarWidth: "thin",           // Firefox
    scrollbarColor: "rgba(255,255,255,0.2) transparent" // Firefox
  }}
    >
      {/* TITLE */}
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-5xl font-black text-primary text-center"
        >
          {title}
        </motion.h2>
      )}

      {/* CONTENT */}
      {content && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-text-muted text-center max-w-2xl"
        >
          {content}
        </motion.p>
      )}

      {/* MEDIA GRID */}
      {images.length > 0 && (
        <div className="flex flex-wrap justify-center gap-6 mt-6 overflow-visible">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.2, duration: 0.6 }}
              className="relative group w-80 h-80 md:w-48 md:h-48"
            >
              {/* MEDIA CONTAINER */}
              <div
                className="relative w-full h-full rounded-xl overflow-hidden
                           border border-[#48233c] shadow-md
                           transition-transform duration-500 ease-out
                           group-hover:scale-[1.45] group-hover:z-50"
              >
                {/* IMAGE OR VIDEO */}
                {isVideo(src) ? (
                  <video
                    src={src}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    autoPlay
                    className="w-full h-full object-cover"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => e.currentTarget.pause()}
                  />
                ) : (
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                )}

                {/* HOVER OVERLAY */}
                <div
                  className="absolute inset-0 bg-black/40 opacity-0
                             group-hover:opacity-100 transition-opacity duration-300"
                />

                {/* DOWNLOAD BUTTON */}
                <a
                  href={src}
                  download
                  className="absolute bottom-3 right-3 px-3 py-1.5
                             rounded-lg bg-primary text-black
                             text-sm font-bold shadow-lg
                             opacity-0 translate-y-2
                             group-hover:opacity-100
                             group-hover:translate-y-0
                             transition-all duration-300"
                >
                  ⬇ Download
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* NEXT BUTTON */}
      {onNext && (
        <motion.button
          onClick={onNext}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`mt-6 px-6 py-3 rounded-xl font-bold shadow-glow transition ${
            final
              ? "bg-[#ff2eb3] hover:bg-primary"
              : "bg-primary hover:bg-[#ff2eb3]"
          }`}
        >
          {final ? "🎉 Celebrate 2026!" : "Next ▶"}
        </motion.button>
      )}
    </motion.div>
  );
}
