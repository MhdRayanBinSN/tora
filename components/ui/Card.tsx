import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-hairline bg-background/80 p-6 transition duration-200 hover:-translate-y-1 hover:border-muted hover:bg-white/55 ${className}`}
    >
      {children}
    </div>
  );
}
