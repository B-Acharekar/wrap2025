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
  const [stage, setStage] = useState<0 | 1 | 2>(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 2500); // Bye 2025 → Credits
    const t2 = setTimeout(() => setStage(2), 9000); // Credits → 2026

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

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
<AnimatePresence mode="wait">
  {stage === 0 && (
    <motion.h1
      key="bye"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 1.2 }}
      className="z-10 text-6xl md:text-8xl font-black text-white"
    >
      Bye <span className="text-primary">2025</span>
    </motion.h1>
  )}

  {stage === 1 && (
    <motion.div
      key="credits"
      initial={{ y: "100%" }}
      animate={{ y: "-120%" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 6, ease: "linear" }}
      className="absolute bottom-0 z-10 text-center space-y-6 text-white"
    >
      <p className="text-xl uppercase tracking-widest opacity-70">
        Credits
      </p>

      <p className="text-3xl font-bold">Bhushan Acharekar</p>
      <p className="text-sm opacity-60">Web Designer · Developer · Organizer</p>

      <p className="text-3xl font-bold mt-8">Vedant B</p>
      <p className="text-sm opacity-60">Frontend · UI · Motion</p>

      <p className="mt-12 text-lg italic opacity-80">
        “Built with chaos, shipped with love.”
      </p>
    </motion.div>
  )}

  {stage === 2 && (
    <motion.div
      key="final"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
      className="relative z-10 text-center"
    >
      <h1 className="text-6xl md:text-9xl font-black text-white">
        Happy <span className="text-primary">New Year 2026</span>
      </h1>

      <motion.button
        onClick={replayJourney}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-primary rounded-xl font-black shadow-glow"
      >
        <Repeat /> Replay Journey
      </motion.button>
    </motion.div>
  )}
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
