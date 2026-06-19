import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`card-glow group/card relative rounded-2xl border border-hairline/80 bg-white/70 p-7 shadow-card backdrop-blur-md transition-all duration-400 hover:-translate-y-2 hover:border-indigo/15 hover:bg-white/90 hover:shadow-card-hover ${className}`}
    >
      {/* Top accent gradient line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-indigo/0 via-indigo/30 to-violet/0 opacity-0 transition-opacity duration-400 group-hover/card:opacity-100" />
      {/* Inner subtle glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo/[0.02] to-violet/[0.01] opacity-0 transition-opacity duration-400 group-hover/card:opacity-100" />
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
