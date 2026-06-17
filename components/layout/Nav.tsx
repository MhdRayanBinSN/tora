"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { FocusEvent, ReactNode } from "react";
import { engagementModels, process, services } from "@/lib/content";

const serviceLinks = [
  "mvp-development",
  "custom-software",
  "ai-integration",
  "product-design",
  "saas-development",
  "cloud-devops"
];

const selectedServices = services.filter((service) => serviceLinks.includes(service.slug));

export function Nav() {
  const pathname = usePathname();
  const servicesActive = pathname.startsWith("/services");
  const [servicesOpen, setServicesOpen] = useState(false);

  function handleBlur(event: FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setServicesOpen(false);
    }
  }

  return (
    <nav aria-label="Primary" className="flex items-center justify-end">
      <div className="hidden items-center gap-1 lg:flex">
        <TopLink href="/about" label="About" withCaret active={pathname.startsWith("/about")} />
        <div
          className="group"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
          onFocus={() => setServicesOpen(true)}
          onBlur={handleBlur}
        >
          <button
            type="button"
            className={`flex h-[68px] items-center gap-1.5 px-4 text-[13px] font-semibold tracking-wide transition-colors duration-150 ${
              servicesActive || servicesOpen
                ? "text-indigo"
                : "text-ink/55 hover:text-ink"
            }`}
            aria-expanded={servicesOpen}
            aria-controls="services-mega-menu"
            onClick={() => setServicesOpen((open) => !open)}
          >
            Solutions & Services
            <Caret />
          </button>
          <MegaMenu open={servicesOpen} />
        </div>
        <TopLink href="/stack" label="Stack" active={pathname.startsWith("/stack")} />
        <Link
          href="/contact"
          className="ml-3 inline-flex items-center rounded-lg bg-ink px-5 py-2 text-[13px] font-semibold text-white transition-all duration-150 hover:bg-ink/85"
        >
          Contact
        </Link>
      </div>
      <div className="flex items-center gap-3 text-sm font-semibold lg:hidden">
        <Link href="/services" className="text-ink/60 transition hover:text-ink">
          Services
        </Link>
        <Link href="/contact" className="rounded-lg bg-ink px-4 py-2 text-white transition hover:bg-ink/85">
          Contact
        </Link>
      </div>
    </nav>
  );
}

function TopLink({
  href,
  label,
  active,
  withCaret = false
}: {
  href: string;
  label: string;
  active: boolean;
  withCaret?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex h-[68px] items-center gap-1.5 px-4 text-[13px] font-semibold tracking-wide transition-colors duration-150 ${
        active
          ? "text-indigo"
          : "text-ink/55 hover:text-ink"
      }`}
      aria-current={active ? "page" : undefined}
    >
      {label}
      {withCaret && <Caret />}
    </Link>
  );
}

function Caret() {
  return (
    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" aria-hidden="true">
      <path d="M1 1.5L5 5.5L9 1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Arrow() {
  return <span aria-hidden="true" className="ml-auto text-lg leading-none text-[#A69BB4]">↗</span>;
}

function MegaMenu({ open }: { open: boolean }) {
  return (
    <div
      id="services-mega-menu"
      className={`absolute left-1/2 top-[68px] w-[min(1560px,calc(100vw_-_48px))] -translate-x-1/2 pt-0 transition duration-200 ${
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100"
      }`}
    >
      <div className="grid gap-0 overflow-hidden rounded-lg bg-[#F5F5F4] text-ink shadow-[0_28px_90px_rgba(0,0,0,0.18)] ring-1 ring-black/5 lg:grid-cols-[1.05fr_1.15fr_1.15fr_1.05fr_1.05fr]">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16162a] to-[#0f0f1a] p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(124,77,255,0.15),transparent_60%)]" aria-hidden="true" />
          <div className="relative">
            <p className="font-display text-3xl font-semibold leading-tight text-white">Solutions &<br />Services</p>
            <div className="mt-12">
              <p className="text-[3rem] font-bold leading-[1.1] tracking-tight">
                <span className="bg-gradient-to-r from-indigo via-violet to-[#B995E7] bg-clip-text text-transparent">From idea</span>
                <br />
                <span className="bg-gradient-to-r from-violet to-[#B995E7] bg-clip-text text-transparent">to scale</span>
              </p>
            </div>
            <Link href="/services" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/60 transition hover:text-white">
              Explore all
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <MegaColumn title="Solutions">
          <FeatureLink
            href="/services/mvp-development"
            image="/images/icons/mvp-development.svg"
            title="For startups"
            body="Shape a focused MVP, launch it cleanly, and keep the next version possible."
            cta="Startup solutions"
            accent="violet"
          />
          <TextLink
            href="/services/custom-software"
            title="For enterprises"
            body="Build internal systems and client platforms around the way the business actually works."
            cta="Enterprise solutions"
            accent="violet"
          />
        </MegaColumn>
        <MegaColumn title="Services">
          <div className="mb-5 rounded-md border border-hairline bg-background p-4">
            <Image src="/images/icons/custom-software.svg" alt="" width={64} height={64} className="h-14 w-14" />
          </div>
          <p className="mb-4 text-sm leading-6 text-[#4A4A52]">
            Explore core services designed for product clarity, delivery speed, and maintainable scale.
          </p>
          <div className="space-y-3">
            {selectedServices.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="flex items-center gap-3 text-sm font-semibold text-[#3B3B44] hover:text-indigo">
                <span>{service.title}</span>
                <span aria-hidden="true" className="ml-auto text-[#B3A9BE]">→</span>
              </Link>
            ))}
          </div>
          <UnderlinedLink href="/services" label="Explore all services" accent="green" />
        </MegaColumn>
        <MegaColumn title="Our approach">
          <div className="mb-5 rounded-md border border-hairline bg-background p-4">
            <Image src="/images/icons/product-design.svg" alt="" width={64} height={64} className="h-14 w-14" />
          </div>
          <h3 className="text-base font-semibold">Strategy | Design | Development</h3>
          <p className="mt-3 text-sm leading-6 text-[#4A4A52]">
            Tora combines product scope, build-ready design, and engineering decisions that fit the team and timeline.
          </p>
          <div className="mt-5 space-y-2">
            {process.slice(0, 3).map((step) => (
              <p key={step.title} className="text-sm font-semibold text-[#3B3B44]">
                {step.title}
              </p>
            ))}
          </div>
          <UnderlinedLink href="/about" label="More about our approach" accent="blue" />
        </MegaColumn>
        <MegaColumn title="Engagement models" isLast>
          <div className="mb-5 rounded-md border border-hairline bg-background p-4">
            <Image src="/images/icons/saas-development.svg" alt="" width={64} height={64} className="h-14 w-14" />
          </div>
          <div className="space-y-8">
            {engagementModels.map((model) => (
              <div key={model.title}>
                <h3 className="text-base font-semibold">{model.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#4A4A52]">{model.body}</p>
                <UnderlinedLink href="/about" label={model.title} accent="gold" compact />
              </div>
            ))}
          </div>
        </MegaColumn>
      </div>
    </div>
  );
}

function MegaColumn({
  title,
  children,
  isLast = false
}: {
  title: string;
  children: ReactNode;
  isLast?: boolean;
}) {
  return (
    <div className={`p-8 ${isLast ? "" : "border-r border-[#E5D9F3]"}`}>
      <h2 className="mb-5 font-display text-2xl font-semibold">{title}</h2>
      {children}
    </div>
  );
}

function FeatureLink({
  href,
  image,
  title,
  body,
  cta,
  accent
}: {
  href: string;
  image: string;
  title: string;
  body: string;
  cta: string;
  accent: "violet" | "green" | "blue" | "gold";
}) {
  return (
    <div className="mb-8">
      <div className="mb-5 rounded-md border border-hairline bg-background p-4">
        <Image src={image} alt="" width={64} height={64} className="h-14 w-14" />
      </div>
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#4A4A52]">{body}</p>
      <UnderlinedLink href={href} label={cta} accent={accent} />
    </div>
  );
}

function TextLink({
  href,
  title,
  body,
  cta,
  accent
}: {
  href: string;
  title: string;
  body: string;
  cta: string;
  accent: "violet" | "green" | "blue" | "gold";
}) {
  return (
    <div>
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#4A4A52]">{body}</p>
      <UnderlinedLink href={href} label={cta} accent={accent} />
    </div>
  );
}

function UnderlinedLink({
  href,
  label,
  accent,
  compact = false
}: {
  href: string;
  label: string;
  accent: "violet" | "green" | "blue" | "gold";
  compact?: boolean;
}) {
  const colors = {
    violet: "border-[#B84DFF] text-[#B84DFF]",
    green: "border-[#00A87E] text-[#00A87E]",
    blue: "border-[#0786D8] text-[#0786D8]",
    gold: "border-[#E6A900] text-[#E6A900]"
  };

  return (
    <Link
      href={href}
      className={`mt-5 flex items-center border-b-2 pb-1 text-sm font-bold ${colors[accent]} ${compact ? "mt-4" : ""}`}
    >
      {label}
      <Arrow />
    </Link>
  );
}
