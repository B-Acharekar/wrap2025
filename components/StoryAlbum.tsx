"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface StoryAlbumProps {
  images: string[];
}

export default function StoryAlbum({ images }: StoryAlbumProps) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  const prev = () => setIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));

  return (
    <div className="relative w-full h-64 md:h-96 flex items-center justify-center overflow-hidden rounded-2xl border border-[#48233c]">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="absolute w-full h-full object-cover rounded-2xl"
        />
      </AnimatePresence>

      {/* Navigation */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 rounded-full p-2 hover:bg-black/50"
          >
            ◀
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 rounded-full p-2 hover:bg-black/50"
          >
            ▶
          </button>
        </>
      )}
    </div>
  );
}
