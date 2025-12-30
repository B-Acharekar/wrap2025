"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Repeat } from "lucide-react";
import { useRouter } from "next/navigation";
import { useGlobalAudio } from "@/components/AudioContext";

export default function FinalPage() {
  const { audioRef, soundOn, toggleSound } = useGlobalAudio();
  const router = useRouter();
  const [fireworks, setFireworks] = useState(false);

  // Trigger fireworks after mount
  useEffect(() => {
    const timer = setTimeout(() => setFireworks(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const replayJourney = () => {
    router.push("/"); // go back to Intro page
  };

  return (
    <div className="relative h-screen w-screen bg-[#0b0010] overflow-hidden flex items-center justify-center">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-75"
        src="/video/final.mp4"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Navbar sound toggle */}
      <button
        onClick={toggleSound}
        className="absolute top-6 right-6 z-20 flex items-center gap-2 rounded-full bg-black/30 px-4 py-2 backdrop-blur-md border border-white/10 hover:border-primary transition"
      >
        {soundOn ? <Volume2 /> : <VolumeX />}
        <span className="hidden sm:block text-xs font-semibold">
          {soundOn ? "Sound On" : "Muted"}
        </span>
      </button>

      {/* Main Content */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 text-center flex flex-col items-center justify-center px-4 gap-6"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tight">
            Happy <span className="text-primary">New Year 2026</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 max-w-2xl">
            May the next year be even more chaotic, fun, and unforgettable with us!
          </p>

          <motion.button
            onClick={replayJourney}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 flex items-center gap-3 px-8 py-4 bg-primary rounded-xl font-black shadow-glow hover:bg-[#ff2eb3] transition"
          >
            <Repeat /> Replay Journey
          </motion.button>
        </motion.div>
      </AnimatePresence>

      {/* Audio */}
      <audio
        ref={audioRef}
        loop
        src="/audio/final.mp3"
        autoPlay
      />
    </div>
  );
}
