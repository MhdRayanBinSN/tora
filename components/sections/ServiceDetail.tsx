import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { services } from "@/lib/content";

type Service = (typeof services)[number];

type ServiceDetailProps = {
  service: Service;
};

export function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <>
      <section className="border-b border-hairline py-16 sm:py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <Link href="/services" className="text-sm font-medium text-muted hover:text-indigo">
              Services
            </Link>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1] text-ink sm:text-6xl">
              {service.title}
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted">{service.short}</p>
        </div>
      </section>
      <section className="py-section-sm">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Card className="h-fit">
            <Image src={service.icon} alt="" width={64} height={64} className="h-14 w-14" />
            <h2 className="mt-8 font-display text-2xl font-semibold text-ink">
              Stack connection
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">{service.stack}</p>
            <ButtonLink href="/stack" variant="secondary" className="mt-7">
              See stack
            </ButtonLink>
          </Card>
          <div className="grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline">
            <ServiceBlock title="What it is" body={service.what} />
            <ServiceBlock title="Who it is for" body={service.when} />
            <ServiceBlock title="What Tora does" body={service.work} />
          </div>
        </div>
      </section>
      <section className="border-t border-hairline py-section-sm">
        <div className="container flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase text-muted">Next step</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink">
              Scope the first useful release.
            </h2>
          </div>
          <ButtonLink href="/contact">Start a project</ButtonLink>
        </div>
      </section>
    </>
  );
}

function ServiceBlock({ title, body }: { title: string; body: string }) {
  return (
    <article className="bg-background p-7">
      <h2 className="font-display text-2xl font-semibold text-ink">{title}</h2>
      <p className="mt-4 text-base leading-7 text-muted">{body}</p>
    </article>
  );
}
