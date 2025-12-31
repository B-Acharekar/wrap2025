"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import { useGlobalAudio } from "@/components/AudioContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const coreMembers = [
  "Bhushan",
  "Nihal",
  "Avadhoot",
  "Vedant B",
];

const otherMembers = [
  "Vedant G",
  "Aditya",
  "Aryan",
  "Yash",
  "Kalpesh",
];

const avatar = (name: string) =>
  `https://api.dicebear.com/7.x/personas/svg?seed=${encodeURIComponent(name)}`;

export default function IdentityPage() {
  const { playAudio } = useGlobalAudio();
  const router = useRouter();

  useEffect(() => {
    playAudio("f1-theme");
  }, []);

  return (
    <div className="h-screen bg-background-dark text-white font-display overflow-hidden">
      <Navbar />

      {/* IMPORTANT: allow natural scroll */}
      <main
          className="h-[calc(100vh-64px)]
                    max-w-6xl mx-auto
                    px-4 sm:px-6 py-10 sm:py-16
                    overflow-y-auto overflow-x-hidden
                    custom-scrollbar"
        >
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-16"
        >
          <p className="text-xs sm:text-sm text-text-muted tracking-widest uppercase">
            2025 Squad Identity
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mt-2">
            THE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary">
              CORE
            </span>
          </h1>

          <p className="text-text-muted mt-4 max-w-xl text-sm sm:text-base">
            A year of F1 detours, gaming nights, exam pressure,
            and showing up more than ever before.
          </p>
        </motion.div>

        {/* CORE MEMBERS */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
            Core Members
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {coreMembers.map((name) => (
              <div
                key={name}
                className="flex flex-col items-center gap-2 sm:gap-3"
              >
                <img
                  src={avatar(name)}
                  alt={name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full 
                             bg-[#2a1525] border border-[#48233c]"
                />
                <p className="font-semibold text-sm sm:text-base">
                  {name}
                </p>
                <span className="text-[10px] sm:text-xs text-primary">
                  always present
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* OTHER MEMBERS */}
        <section className="mb-14 sm:mb-20">
          <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
            The Rotation
          </h2>

          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 sm:gap-6">
            {otherMembers.map((name) => (
              <div
                key={name}
                className="flex flex-col items-center gap-1.5 sm:gap-2 opacity-80"
              >
                <img
                  src={avatar(name)}
                  alt={name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full 
                             bg-[#2a1525] border border-[#48233c]"
                />
                <p className="text-xs sm:text-sm">{name}</p>
                <span className="text-[10px] text-text-muted">
                  appears sometimes
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center 
                        justify-between gap-6 border-t border-[#48233c] pt-6 sm:pt-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-text-muted">
              Year Logged
            </p>
            <p className="text-xl sm:text-2xl font-mono font-bold">
              2025
            </p>
          </div>

          <button
            onClick={() => router.push("/memories")}
            className="group flex items-center gap-3 px-6 sm:px-8 h-12 sm:h-14 
                       bg-primary rounded-xl font-bold shadow-glow 
                       hover:bg-[#ff2eb3] transition w-full sm:w-auto justify-center"
          >
            ENTER MEMORIES
            <ArrowRight className="group-hover:translate-x-1 transition" />
          </button>
        </div>
      </main>
    </div>
  );
}
