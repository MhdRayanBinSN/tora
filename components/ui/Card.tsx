import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`group/card relative rounded-xl border border-hairline bg-white/60 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo/20 hover:bg-white/80 hover:shadow-[0_12px_40px_rgba(61,90,254,0.08)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] rounded-t-xl bg-gradient-to-r from-indigo/0 via-indigo/40 to-violet/0 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />
      {children}
    </div>
  );
}
