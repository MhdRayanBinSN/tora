import Image from "next/image";
import Link from "next/link";
import { stack } from "@/lib/content";

type StackShowcaseProps = {
  compact?: boolean;
};

export function StackShowcase({ compact = false }: StackShowcaseProps) {
  return (
    <div className="relative overflow-hidden border-y border-hairline/80 bg-gradient-to-b from-white/40 to-background">
      {/* Subtle glow behind stack */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(61,90,254,0.06)_0%,transparent_70%)]"
        aria-hidden="true"
      />
      <div className="container relative py-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-light">Stack matching</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Six core technologies. One decision process.
            </h2>
          </div>
          <Link
            href="/stack"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-ink transition-all duration-300 hover:gap-3 hover:text-indigo"
          >
            Open stack page
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
              <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
        <div
          className={`mt-8 grid gap-px overflow-hidden rounded-2xl border border-hairline/80 bg-hairline/60 shadow-card ${
            compact ? "lg:grid-cols-6" : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {stack.map((item) => (
            <div
              key={item.technology}
              className="group relative bg-white/80 p-6 transition-all duration-300 hover:bg-white"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo/[0.02] to-violet/[0.01] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-white to-background shadow-sm ring-1 ring-hairline/70 transition-all duration-300 group-hover:shadow-md group-hover:ring-indigo/15">
                    <Image
                      src={item.icon}
                      alt={item.technology}
                      width={24}
                      height={24}
                      className="h-6 w-6"
                    />
                  </div>
                  <p
                    className={`font-mono text-[0.65rem] font-medium uppercase tracking-widest ${
                      item.layer === "Frontend" ? "text-indigo" : "text-violet"
                    }`}
                  >
                    {item.layer}
                  </p>
                </div>
                <h3 className="font-display text-xl font-bold text-ink">{item.technology}</h3>
                {!compact && (
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.use}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
