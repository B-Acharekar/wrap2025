"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useGlobalAudio } from "@/components/AudioContext";

export default function SoundToggle() {
  const { soundOn, toggleSound } = useGlobalAudio();

  return (
    <button
      onClick={toggleSound}
      className="flex items-center gap-2 rounded-full bg-black/30 px-4 py-2 backdrop-blur-md border border-white/10 hover:border-primary transition"
    >
      {soundOn ? <Volume2 /> : <VolumeX />}
      <span className="hidden sm:block text-xs font-semibold">
        {soundOn ? "Sound On" : "Muted"}
      </span>
    </button>
  );
}
