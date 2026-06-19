import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-indigo to-violet text-white shadow-glow hover:-translate-y-0.5 hover:shadow-glow-lg hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-indigo",
  secondary:
    "border border-hairline/80 bg-white/70 text-ink shadow-card backdrop-blur-sm hover:-translate-y-0.5 hover:border-indigo/20 hover:bg-white/90 hover:shadow-card-hover active:scale-[0.98]",
  ghost: "text-ink hover:text-indigo active:scale-[0.98]"
};

const base =
  "inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold tracking-wide transition-all duration-300 ease-out";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: Variant;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: Variant;
};

export function ButtonLink({ href, children, className = "", variant = "primary", ...props }: ButtonLinkProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}

export function Button({ children, className = "", variant = "primary", ...props }: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
