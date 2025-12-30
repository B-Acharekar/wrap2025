"use client";

import SoundToggle from "../SoundToggle";
import { useRouter } from "next/navigation";

interface NavbarProps {
  title?: string;
}

export default function Navbar({ title = "2025 Memories Wrapped" }: NavbarProps) {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-background-dark/80 backdrop-blur-md border-b border-white/10 px-6 h-16">
      {/* Site Title / Logo */}
      <h1
        className="font-bold text-lg cursor-pointer hover:text-primary transition"
        onClick={() => router.push("/")}
      >
        {title}
      </h1>

      {/* Sound Toggle */}
      <SoundToggle />
    </header>
  );
}
