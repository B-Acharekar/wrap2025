"use client";

import { createContext, useContext, useRef, useState } from "react";

type AudioContextType = {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  soundOn: boolean;
  playAudio: (src: string) => void;
  toggleSound: () => void;
};

const AudioContext = createContext<AudioContextType | null>(null);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [soundOn, setSoundOn] = useState(true);

  const playAudio = (src: string) => {
    if (!audioRef.current) return;

    // Change source if needed
    if (audioRef.current.src !== src) {
      audioRef.current.src = src;
      audioRef.current.load();
    }

    // Play respecting muted state
    audioRef.current.muted = !soundOn;
    audioRef.current
      .play()
      .catch(() => console.log("Autoplay blocked, requires user interaction"));
  };

  const toggleSound = () => {
    if (!audioRef.current) return;

    if (soundOn) audioRef.current.pause();
    else audioRef.current.play().catch(() => {});

    setSoundOn(!soundOn);
    if (audioRef.current) audioRef.current.muted = soundOn; // mute if turning off
  };

  return (
    <AudioContext.Provider value={{ audioRef, soundOn, playAudio, toggleSound }}>
      {children}
      <audio ref={audioRef} loop preload="auto" />
    </AudioContext.Provider>
  );
};

export const useGlobalAudio = () => {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error("useGlobalAudio must be used inside AudioProvider");
  return ctx;
};
