import Image from "next/image";
import Link from "next/link";
import { stack } from "@/lib/content";

type StackShowcaseProps = {
  compact?: boolean;
};

export function StackShowcase({ compact = false }: StackShowcaseProps) {
  return (
    <div className="border-y border-hairline">
      <div className="container py-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-mono text-xs uppercase text-muted">Stack matching</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink">
              Six core technologies. One decision process.
            </h2>
          </div>
          <Link href="/stack" className="text-sm font-medium text-ink transition hover:text-indigo">
            Open stack page →
          </Link>
        </div>
        <div className={`mt-8 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline ${compact ? "lg:grid-cols-6" : "md:grid-cols-2 lg:grid-cols-3"}`}>
          {stack.map((item) => (
            <div key={item.technology} className="group bg-background p-5 transition-colors duration-200 hover:bg-white">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-hairline transition-shadow duration-200 group-hover:shadow-md group-hover:ring-indigo/10">
                  <Image src={item.icon} alt={item.technology} width={24} height={24} className="h-6 w-6" />
                </div>
                <p className={`font-mono text-[0.68rem] uppercase ${item.layer === "Frontend" ? "text-indigo" : "text-violet"}`}>
                  {item.layer}
                </p>
              </div>
              <h3 className="font-display text-xl font-semibold text-ink">{item.technology}</h3>
              {!compact && <p className="mt-3 text-sm leading-6 text-muted">{item.use}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
