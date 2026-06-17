import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { UAEFlag } from "@/components/ui/UAEFlag";
import { site } from "@/lib/content";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0C] text-background">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet/70 to-transparent" aria-hidden="true" />
      <div className="mx-auto flex min-h-[78px] w-[min(1760px,calc(100%_-_40px))] items-center justify-between gap-8">
        <Link href="/" className="group flex items-center gap-3 rounded-sm" aria-label="Tora home">
          <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06] ring-1 ring-white/15 transition group-hover:bg-white/[0.1]" aria-hidden="true">
            <span className="absolute h-7 w-7 rounded-md border-2 border-background" />
            <span className="absolute h-7 w-7 rotate-45 rounded-md border-2 border-[#B995E7]" />
          </span>
          <span className="font-display text-4xl font-semibold leading-none">tora</span>
        </Link>
        <Nav />
        <div className="hidden min-w-[268px] items-center justify-end gap-3 xl:flex">
          <span className="rounded-md bg-white p-1 shadow-sm ring-1 ring-white/20">
            <UAEFlag className="h-7 w-11 shrink-0" />
          </span>
          <div className="text-right">
            <a href={site.whatsapp} className="block text-sm font-semibold text-background hover:text-[#B995E7]">
              {site.whatsappLabel}
            </a>
            <p className="mt-0.5 text-xs text-background/55">{site.address}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
