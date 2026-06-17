import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { services } from "@/lib/content";

type ServiceGridProps = {
  limit?: number;
};

export function ServiceGrid({ limit }: ServiceGridProps) {
  const visibleServices = typeof limit === "number" ? services.slice(0, limit) : services;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {visibleServices.map((service) => (
        <Link key={service.slug} href={`/services/${service.slug}`} className="group rounded-lg">
          <Card className="flex h-full min-h-[248px] flex-col">
            <Image src={service.icon} alt="" width={64} height={64} className="h-12 w-12" />
            <h3 className="mt-8 font-display text-2xl font-semibold text-ink">
              {service.title}
            </h3>
            <p className="mt-4 flex-1 text-sm leading-6 text-muted">{service.short}</p>
            <span className="mt-6 text-sm font-medium text-ink transition group-hover:text-indigo">Read service</span>
          </Card>
        </Link>
      ))}
    </div>
  );
}
