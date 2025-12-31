"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import { useGlobalAudio } from "@/components/AudioContext";
import { useRouter } from "next/navigation";

interface Month {
  month: string;
  highlights: string[];
  images: string[];
}

const months: Month[] = [
  {
    month: "January",
    highlights: [
      "Laptop setup photography",
      "Minecraft grind",
      "Valorant farewell (last day)",
    ],
    images: ["/images/games_1.jpeg", "/images/games_2.jpg", "/images/games_3.jpeg"],
  },
  {
    month: "February",
    highlights: [
      "Lowkey month, prep phase",
    ],
    images: ["/images/no.jpg"],
  },
  {
    month: "March",
    highlights: [
      "More friend hangouts begin",
    ],
    images: ["/images/march/1.jpeg", "/images/march/2.jpeg", "/images/march/3.jpeg", "/images/march/4.jpeg"],
  },
  {
    month: "April",
    highlights: [
      "Traditional Day drip",
    ],
    images: ["/images/april/1.jpeg", "/images/april/2.jpeg"],
  },
  {
    month: "May",
    highlights: [
      "Exams Days",
    ],
    images: ["/images/no.jpg"],
  },
  {
    month: "June",
    highlights: [
      "Controller arrived (new era)",
    ],
    images: ["/images/games_4.jpeg"],
  },
  {
    month: "July",
    highlights: [
      "Chose F1 over college 🏎️",
      "Workshop blackout → mall march",
      "Industrial Visit (IV)",
    ],
    images: ["/images/f1_1.mp4", "/images/july/1.jpeg", "/images/july/2.jpeg", "/images/july/3.jpeg", "/images/july/4.jpeg", "/images/july/5.jpeg", "/images/july/6.jpeg", "/images/july/7.jpeg", "/images/july/8.mp4", "/images/iv.jpeg"],
  },
  {
    month: "August",
    highlights: [
      "Burger King after exams 🍔",
    ],
    images: ["/images/burgerking.jpeg"],
  },
  {
    month: "September",
    highlights: [
      "Random Month Highlights",
    ],
    images: [
      "/images/september/mini1.mp4",
      "/images/september/mini2.mp4",
      "/images/september/tickets.png",
      "/images/september/korum.jpeg",
      "/images/hackathon.jpeg",
      "/images/lecture.jpeg",
    ],
  },
  {
    month: "October",
    highlights: [
      "Diwali pahat gone wrong 🪔",
    ],
    images: ["/images/october/1.jpeg", "/images/october/2.jpeg", "/images/october/3.jpeg", "/images/october/4.jpeg","/images/october/10.jpeg", "/images/october/6.jpeg","/images/october/7.jpeg","/images/october/8.jpeg","/images/october/9.jpeg"],
  },
  {
    month: "November",
    highlights: [
      "Exam grind mode activated",
      "No pictures, only pressure",
    ],
    images: ["/images/no.jpg"],
  },
  {
    month: "December",
    highlights: [
      "Seawoods Mall finale 🛍️",
      "Wrapped up the year with friends",
    ],
    images: ["/images/seawood/1.jpeg", "/images/seawood/2.jpeg", "/images/seawood/3.jpeg", "/images/seawood/4.jpeg","/images/seawood/5.jpeg", "/images/seawood/6.jpeg","/images/seawood/7.jpeg","/images/seawood/8.jpeg","/images/seawood/9.jpeg"],
  },
  {
    month: "Random Extras",
    highlights: [
      "Things that didn't fit elsewhere",
    ],
    images: ["images/extras/1.jpeg", "images/extras/2.jpeg", "images/extras/3.jpeg", "images/extras/4.jpeg", "images/extras/5.jpeg", "images/extras/6.jpeg", "images/extras/7.jpeg", "images/extras/8.jpeg", "images/extras/9.jpeg", "images/extras/10.jpeg", "images/extras/11.jpeg", "images/extras/12.jpeg", "images/extras/13.jpeg", "images/extras/14.jpeg", "images/extras/15.jpeg", "images/extras/16.jpeg", "images/extras/17.jpeg" 
      ,"images/extras/18.jpeg", "images/extras/19.jpeg","images/extras/20.jpeg", "images/extras/21.jpeg","images/extras/22.jpeg","images/extras/23.jpeg","images/extras/24.jpeg","images/extras/25.jpeg","images/extras/26.jpeg","images/extras/27.jpeg","images/extras/28.jpeg","images/extras/29.jpeg","images/extras/30.jpeg","images/extras/1.mp4","images/extras/2.mp4"
    ],
  },
];

export default function TimelinePage() {
  const { audioRef } = useGlobalAudio();
  const [selectedMonth, setSelectedMonth] = useState<Month | null>(null);
  const router = useRouter();

  const goToFinal = () => {
    router.push("/final");
  };

  return (
    <div className="min-h-screen bg-background-dark text-white font-display relative pb-24">
      <Navbar title="2025 Timeline" />

{/* Month Grid */}
{/* Anime Timeline */}
<div
  className="
    relative
    max-w-5xl
    mx-auto
    px-4 md:px-6
    mt-12
    max-h-[75vh]
    overflow-y-auto
    scrollbar-thin
    scrollbar-thumb-primary/50
    scrollbar-track-transparent
  "
  style={{
    scrollbarWidth: "thin",
    scrollbarColor: "rgba(255,79,216,0.5) transparent",
  }}
>

  {/* Center Line */}
  <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/10 via-primary/40 to-primary/10" />

  <div className="flex flex-col gap-16">
    {months.map((month, i) => {
      const isLeft = i % 2 === 0;

      return (
        <motion.div
          key={month.month}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`relative flex items-start ${
            isLeft ? "md:flex-row" : "md:flex-row-reverse"
          } gap-6`}
        >

          {/* Timeline Dot */}
          <div className="relative z-10">
            <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_#ff4fd8]" />
          </div>

          {/* Content Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedMonth(month)}
            className="
              cursor-pointer
              w-full md:w-[45%]
              rounded-3xl
              bg-[#1b0b1a]/80
              backdrop-blur-xl
              p-6
              shadow-xl
              border border-white/10
              hover:border-primary/40
              transition
            "
          >
            <h3 className="text-2xl font-bold text-primary mb-2">
              {month.month}
            </h3>

            <ul className="text-sm text-text-muted space-y-1">
              {month.highlights.slice(0, 3).map((h, idx) => (
                <li key={idx}>— {h}</li>
              ))}
            </ul>

            <p className="mt-4 text-xs text-primary/70">
              Tap to relive →
            </p>
          </motion.div>
        </motion.div>
      );
    })}
  </div>
</div>

      {/* Modal / Month Gallery */}
      <AnimatePresence>
        {selectedMonth && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="
                          bg-[#1f0d1f]
                          rounded-2xl md:rounded-3xl
                          p-4 md:p-6
                          max-w-5xl w-full
                          max-h-[90vh]
                          overflow-hidden
                        "
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold text-primary">{selectedMonth.month}</h2>
                <button
                  onClick={() => setSelectedMonth(null)}
                  className="text-text-muted font-bold text-xl hover:text-primary transition"
                >
                  ✕
                </button>
              </div>

              <div
                className="max-h-[80vh] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "rgba(255,255,255,0.2) transparent",
                }}
              >
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
  {selectedMonth.images.map((src, i) => {
    const isVideo = src.endsWith(".mp4");

    return (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.1 }}
        className="relative group w-full h-48 rounded-xl shadow-md cursor-pointer overflow-visible"
      >
        <div className="relative w-full h-full overflow-visible rounded-xl transform transition-all duration-500
                        group-hover:scale-125 group-hover:z-50">
          {isVideo ? (
            <video
              src={src}
              className="w-full h-full object-cover rounded-xl"
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none rounded-xl" />

          {/* Download button */}
          <a
            href={src}
            download
            className="absolute bottom-2 right-2 px-3 py-1.5 bg-primary text-black text-sm font-bold rounded-lg
                      opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                      transition-all duration-300 shadow-lg z-50"
          >
            ⬇ Download
          </a>
        </div>
      </motion.div>
    );
  })}
</div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fixed Next Button */}
      <motion.button
        onClick={goToFinal}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 px-8 py-4 bg-primary rounded-2xl font-bold shadow-glow hover:bg-[#ff2eb3] transition z-50"
      >
        Next ▶
      </motion.button>

      {/* Audio */}
      <audio ref={audioRef} loop src="/audio/timeline.mp3" />
    </div>
  );
}
