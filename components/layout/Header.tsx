"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nav } from "@/components/layout/Nav";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const isDarkHeader = isHome && !isScrolled;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isDarkHeader
          ? "bg-transparent text-white"
          : "bg-white/75 text-ink backdrop-blur-xl backdrop-saturate-[1.8]"
      }`}
    >
      {/* Top accent gradient line */}
      <div
        className={`absolute inset-x-0 top-0 h-[2px] transition-opacity duration-300 ${
          isDarkHeader ? "opacity-0" : "opacity-100 bg-gradient-to-r from-transparent via-indigo/50 to-transparent"
        }`}
        aria-hidden="true"
      />
      {/* Bottom border */}
      <div
        className={`absolute inset-x-0 bottom-0 h-[1px] transition-all duration-300 ${
          isDarkHeader ? "bg-white/[0.08]" : "bg-gradient-to-r from-hairline/0 via-hairline/80 to-hairline/0"
        }`}
        aria-hidden="true"
      />
      <div className="mx-auto flex h-[72px] w-[min(1400px,calc(100%_-_48px))] items-center justify-between">
        <Link href="/" className="group flex items-center gap-3" aria-label="Tora home">
          <span
            className={`relative flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${
              isDarkHeader
                ? "bg-white/[0.04] ring-1 ring-white/[0.08] group-hover:bg-white/[0.07] group-hover:ring-indigo/35"
                : "bg-ink/[0.04] ring-1 ring-ink/[0.08] group-hover:bg-ink/[0.07] group-hover:ring-indigo/20"
            }`}
            aria-hidden="true"
          >
            <span className={`absolute h-6 w-6 rounded-md border-2 transition-colors duration-300 ${isDarkHeader ? "border-white" : "border-ink"}`} />
            <span className="absolute h-6 w-6 rotate-45 rounded-md border-2 border-violet" />
          </span>
          <span className={`font-display text-[28px] font-bold leading-none tracking-tight transition-colors duration-300 ${isDarkHeader ? "text-white" : "text-ink"}`}>tora</span>
        </Link>
        <Nav isDark={isDarkHeader} />
      </div>
    </header>
  );
}
