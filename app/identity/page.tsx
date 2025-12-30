"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import { useGlobalAudio } from "@/components/AudioContext";
import { useRouter } from "next/navigation";

export default function IdentityPage() {
  const { playAudio } = useGlobalAudio();
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background-dark text-white font-display overflow-x-hidden relative">
      {/* Navbar with SoundToggle */}
      <Navbar />

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-primary/10 rounded-full blur-[120px]" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-5xl bg-[#33192b] border border-[#48233c] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
        >
          {/* Left */}
          <div className="md:w-5/12 p-8 flex flex-col items-center justify-center bg-gradient-to-br from-[#48233c] to-[#33192b]">
            <span className="text-xs tracking-widest text-primary uppercase mb-4">
              Squad Identity
            </span>

            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-20 h-20 rounded-full bg-black border-4 border-[#33192b]"
                />
              ))}
            </div>

            <p className="mt-4 text-text-muted text-sm">+ 4 others</p>
          </div>

          {/* Right */}
          <div className="md:w-7/12 p-10 flex flex-col gap-6">
            <div>
              <p className="text-text-muted text-sm tracking-wide mb-2">
                2025 SQUAD REPORT
              </p>
              <h1 className="text-5xl font-black leading-tight">
                THE{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary">
                  MIDNIGHT
                </span>{" "}
                SNACKERS
              </h1>
              <p className="text-text-muted mt-4 max-w-md">
                You survived 365 days of chaos, questionable memes,
                and 3AM bad decisions together.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-3">
              {["Est. 2018", "Risk Takers", "Late Night Crew"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-xl bg-[#48233c]/50 border border-[#48233c] text-sm font-bold"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="h-px bg-gradient-to-r from-[#48233c] to-transparent" />

            {/* CTA */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-text-muted uppercase tracking-widest">
                  Total Playtime
                </p>
                <p className="text-2xl font-mono font-bold">8,760h</p>
              </div>

              <button
                onClick={() => router.push("/memories")}
                className="group flex items-center gap-3 px-8 h-14 bg-primary rounded-xl font-bold shadow-glow hover:bg-[#ff2eb3] transition"
              >
                UNLOCK MEMORIES
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </button>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
