"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface StoryCardProps {
  title?: string;
  content?: string;
  images?: string[];
  onNext?: () => void;
  final?: boolean;
}

const isVideo = (src: string) => /\.(mp4|webm|ogg)$/i.test(src);

export default function StoryCard({
  title,
  content,
  images = [],
  onNext,
  final = false,
}: StoryCardProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Enter") onNext?.();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onNext]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="
        relative w-full max-w-5xl mx-auto
        bg-[#1f0d1f] rounded-3xl shadow-2xl
        px-4 sm:px-8 py-6 sm:py-8
        flex flex-col gap-5
        max-h-[85vh] overflow-y-auto
        custom-scrollbar
      "
    >
      {/* TITLE */}
      {title && (
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-primary text-center">
          {title}
        </h2>
      )}

      {/* CONTENT */}
      {content && (
        <p className="text-sm sm:text-base md:text-lg text-text-muted text-center max-w-2xl mx-auto">
          {content}
        </p>
      )}

      {/* MEDIA */}
      {images.length > 0 && (
        <div
          className="
            grid gap-4 mt-4
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {images.map((src, i) => {
            const isActive = activeIndex === i;

            return (
              <motion.div
                key={i}
                className="relative"
                whileTap={{ scale: 0.97 }}
              >
                <div
                  onClick={() =>
                    setActiveIndex(isActive ? null : i)
                  }
                  className={`
                    relative w-full aspect-square
                    rounded-xl overflow-hidden
                    border border-[#48233c]
                    transition-transform duration-300
                    ${isActive ? "scale-[1.05] z-20" : ""}
                  `}
                >
                  {isVideo(src) ? (
                    <video
                      src={src}
                      muted
                      loop
                      playsInline
                      autoPlay
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={src}
                      alt=""
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  )}

                  {/* Overlay */}
                  <div
                    className={`
                      absolute inset-0 bg-black/40
                      transition-opacity duration-300
                      ${isActive ? "opacity-100" : "opacity-0 sm:hover:opacity-100"}
                    `}
                  />

                  {/* Download */}
                  <a
                    href={src}
                    download
                    className={`
                      absolute bottom-3 right-3
                      px-3 py-1.5 rounded-lg
                      bg-primary text-black text-xs sm:text-sm font-bold
                      transition-all duration-300
                      ${
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2 sm:group-hover:opacity-100"
                      }
                    `}
                  >
                    ⬇ Download
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* CTA */}
      {onNext && (
        <button
          onClick={onNext}
          className={`
            mt-6 self-center
            px-6 sm:px-8 py-3
            rounded-xl font-bold
            transition shadow-glow
            ${
              final
                ? "bg-[#ff2eb3] hover:bg-primary"
                : "bg-primary hover:bg-[#ff2eb3]"
            }
          `}
        >
          {final ? "🎉 Celebrate 2026!" : "Next ▶"}
        </button>
      )}
    </motion.div>
  );
}
