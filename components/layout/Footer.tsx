import Image from "next/image";
import Link from "next/link";
import { CoordinateLabel } from "@/components/ui/CoordinateLabel";
import { UAEFlag } from "@/components/ui/UAEFlag";
import { navItems, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-hairline py-12">
      <div className="container grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-4">
          <Image src="/images/tora-wordmark.svg" alt="Tora" width={188} height={48} className="h-8 w-auto" />
          <p className="max-w-sm text-sm leading-6 text-muted">
            A Dubai-based software partner for focused MVPs, durable platforms, and the stack decisions that connect them.
          </p>
          <CoordinateLabel />
        </div>
        <div>
          <h2 className="font-mono text-xs uppercase text-muted">Pages</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ink hover:text-indigo">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-mono text-xs uppercase text-muted">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-ink">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-indigo">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.whatsapp} className="hover:text-indigo">
                WhatsApp {site.whatsappLabel}
              </a>
            </li>
            <li className="flex items-center gap-2 text-muted">
              <UAEFlag className="h-4 w-6" />
              {site.address}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
