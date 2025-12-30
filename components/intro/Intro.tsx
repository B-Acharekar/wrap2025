"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useRouter } from "next/navigation";
import { useGlobalAudio } from "@/components/AudioContext";

export default function Intro() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { audioRef, soundOn, toggleSound, playAudio } = useGlobalAudio();
  const router = useRouter();

  const [leaving, setLeaving] = useState(false);

  const startJourney = () => {
    // Play intro audio via global AudioContext
    playAudio("/audio/intro.mp3");

    // Smooth fade-in volume
    if (audioRef.current) {
      audioRef.current.volume = 0;
      const fade = setInterval(() => {
        if (!audioRef.current) return;
        audioRef.current.volume += 0.05;
        if (audioRef.current.volume >= 1) clearInterval(fade);
      }, 100);
    }

    setLeaving(true);

    // Navigate to Identity page after exit animation
    setTimeout(() => router.push("/identity"), 1800);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-background-dark text-white">
      {/* Background Video */}
      <motion.video
        ref={videoRef}
        autoPlay
        muted={!soundOn} // respect global sound state
        loop
        playsInline
        initial={{ scale: 1, opacity: 1 }}
        animate={{ scale: leaving ? 1.1 : 1, opacity: leaving ? 0 : 1 }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
        className="absolute inset-0 h-full w-full object-cover"
        src="/video/intro.mp4"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />

      {/* Sound Toggle */}
      <button
        onClick={toggleSound}
        className="absolute top-6 right-6 z-20 flex items-center gap-2 rounded-full bg-black/30 px-4 py-2 backdrop-blur-md border border-white/10 hover:border-primary transition"
      >
        {soundOn ? <Volume2 /> : <VolumeX />}
        <span className="hidden sm:block text-xs font-semibold">
          {soundOn ? "Sound On" : "Muted"}
        </span>
      </button>

      {/* Content */}
      <AnimatePresence>
        {!leaving && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 1 }}
            className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-6">
              <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                2025:
              </span>
              <span className="block text-white">THE YEAR WE</span>
              <span className="block text-primary">SURVIVED</span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mb-12">
              A cinematic recap of chaos, friendship, and unforgettable nights.
            </p>

            <motion.button
              whileTap={{ scale: 0.92 }}
              whileHover={{ scale: 1.05 }}
              onClick={startJourney}
              className="rounded-xl bg-primary px-10 py-5 font-black tracking-wide shadow-[0_0_40px_rgba(236,19,164,0.6)]"
            >
              ▶ START THE JOURNEY
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
