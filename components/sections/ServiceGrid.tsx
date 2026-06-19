import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { services } from "@/lib/content";

type ServiceGridProps = {
  limit?: number;
};

const iconAccents = [
  "from-indigo/10 to-violet/5",
  "from-violet/10 to-indigo/5",
  "from-indigo/8 to-violet/8",
  "from-violet/8 to-indigo/6",
  "from-indigo/10 to-violet/4",
  "from-violet/10 to-indigo/4"
];

export function ServiceGrid({ limit }: ServiceGridProps) {
  const visibleServices = typeof limit === "number" ? services.slice(0, limit) : services;

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {visibleServices.map((service, index) => (
        <Link key={service.slug} href={`/services/${service.slug}`} className="group rounded-2xl">
          <Card className="flex h-full min-h-[280px] flex-col">
            <div className={`flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${iconAccents[index % iconAccents.length]} ring-1 ring-hairline/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md`}>
              <Image src={service.icon} alt="" width={128} height={128} className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-7 font-display text-2xl font-semibold text-ink">
              {service.title}
            </h3>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{service.short}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-all duration-300 group-hover:gap-3 group-hover:text-indigo">
              Read service
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Card>
        </Link>
      ))}
    </div>
  );
}
