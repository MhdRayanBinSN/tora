import Link from "next/link";
import { Nav } from "@/components/layout/Nav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 text-ink backdrop-blur-xl backdrop-saturate-[1.8]">
      {/* Top accent line */}
      <div
        className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-indigo/40 to-transparent"
        aria-hidden="true"
      />
      {/* Bottom border */}
      <div
        className="absolute inset-x-0 bottom-0 h-[1px] bg-hairline/70"
        aria-hidden="true"
      />
      <div className="mx-auto flex h-[68px] w-[min(1400px,calc(100%_-_48px))] items-center justify-between">
        <Link href="/" className="group flex items-center gap-3" aria-label="Tora home">
          <span
            className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-ink/[0.04] ring-1 ring-ink/[0.08] transition group-hover:bg-ink/[0.07]"
            aria-hidden="true"
          >
            <span className="absolute h-6 w-6 rounded-md border-2 border-ink" />
            <span className="absolute h-6 w-6 rotate-45 rounded-md border-2 border-violet" />
          </span>
          <span className="font-display text-[28px] font-semibold leading-none tracking-tight text-ink">tora</span>
        </Link>
        <Nav />
      </div>
    </header>
  );
}
