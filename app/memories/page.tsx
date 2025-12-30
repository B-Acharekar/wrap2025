"use client";

import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import StoryCard from "@/components/cards/StoryCard";
import { useGlobalAudio } from "@/components/AudioContext";

export default function MemoriesPage() {
  const router = useRouter();
  const { playAudio } = useGlobalAudio();

  // Story cards
  const storyCards = [
    {
      title: "College Was Optional 🏎️🔥",
      content: "Skipped college, chose F1. Game, movie, sport — full takeover year.",
      images: ["/images/f1_1.mp4", "/images/f1_1.jpeg"],
    },
    {
      title: "Outside More Than Ever 🚶‍♂️⚡",
      content: "More hangouts than my entire 1st and 2nd year combined.",
      images: ["/images/friends_1.jpeg", "/images/friends_2.jpeg","/images/friends_3.jpeg","/images/friends_4.jpeg"],
    },
    {
      title: "Setup to Stick-Drift 🎮",
      content: "Laptop setup, Minecraft days, Valorant farewell, controller era unlocked.",
      images: ["/images/games_1.jpeg", "/images/games_2.jpg","/images/games_3.jpeg","/images/games_4.jpeg"],
    },
    {
      title: "The Couples of 2025 📸 ❤️ ",
      content: "The most consistent duo in my 2025 gallery. Avadhoot x Nihal.",
      images: ["/images/nihal_avadhoot1.jpeg", "/images/nihal_avadhoot2.jpeg"],
    },
    {
      title: "Unexpected Academic Arc 📚⚔️",
      content: "IVs, hackathons, and the first honours lecture — plot twist year.",
      images: ["/images/iv.jpeg", "/images/hackathon.jpeg","/images/lecture.jpeg"],
    },
    {
      title: "Yash’s Cursed Pic 👁️‍🗨️💀",
      content: "Low quality image, high legendary status.",
      images: ["/images/yash_1.jpeg","/images/yash_2.jpeg","/images/yash_3.jpeg"],
    },
    {
      title: "Chaos, Food & Mall Therapy 🌑🍔🛍️",
      content: "Power cuts, Burger King runs, and ending the year at Seawoods.",
      images: ["/images/mall1.jpeg", "/images/burgerking.jpeg","/images/mall2.jpeg","/images/mall3.jpeg","/images/mall4.jpeg"],
      final: true,
    },
  ];

  const [index, setIndex] = useState(0);

  const nextCard = () => {
    if (index < storyCards.length - 1) setIndex(index + 1);
    else {
      // Last card → navigate to Timeline page
      router.push("/timeline");
    }
  };

  return (
    <div className="min-h-screen bg-background-dark text-white font-display overflow-x-hidden relative">
      {/* Navbar */}
      <Navbar />

      {/* Card container */}
      <div className="flex items-center justify-center p-6 min-h-screen">
        <AnimatePresence mode="wait">
          <StoryCard
            key={index}
            {...storyCards[index]}
            onNext={nextCard}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
