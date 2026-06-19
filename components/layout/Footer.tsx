import Image from "next/image";
import Link from "next/link";
import { CoordinateLabel } from "@/components/ui/CoordinateLabel";
import { UAEFlag } from "@/components/ui/UAEFlag";
import { navItems, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative border-t border-hairline/80 bg-gradient-to-b from-background to-[#F5F4F2]">
      {/* Subtle top accent */}
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo/15 to-transparent"
        aria-hidden="true"
      />
      <div className="container py-14">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="space-y-5">
            <Image src="/images/tora-wordmark.svg" alt="Tora" width={188} height={48} className="h-8 w-auto" />
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              A Dubai-based software partner for focused MVPs, durable platforms, and the stack decisions that connect them.
            </p>
            <CoordinateLabel />
          </div>
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.15em] text-muted-light">Pages</h2>
            <ul className="mt-5 space-y-3.5 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ink-soft transition-colors duration-200 hover:text-indigo"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.15em] text-muted-light">Contact</h2>
            <ul className="mt-5 space-y-3.5 text-sm text-ink-soft">
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors duration-200 hover:text-indigo">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.whatsapp} className="transition-colors duration-200 hover:text-indigo">
                  WhatsApp {site.whatsappLabel}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-muted">
                <UAEFlag className="h-4 w-6" />
                {site.address}
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-hairline/60 pt-8 sm:flex-row">
          <p className="text-xs text-muted-light">
            © {new Date().getFullYear()} Tora. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/30" />
            <span className="text-xs text-muted-light">Available for new projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
