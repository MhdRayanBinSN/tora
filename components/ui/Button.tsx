import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-glow hover:-translate-y-0.5 hover:scale-[1.01] focus-visible:outline-indigo",
  secondary:
    "border border-hairline bg-background text-ink hover:-translate-y-0.5 hover:border-muted hover:bg-white/60",
  ghost: "text-ink hover:text-indigo"
};

const base =
  "inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-medium transition duration-200";

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
