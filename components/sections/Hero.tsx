import { ButtonLink } from "@/components/ui/Button";
import { CoordinateLabel } from "@/components/ui/CoordinateLabel";
import { TrajectoryLine } from "@/components/ui/TrajectoryLine";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-hairline py-20 sm:py-24 lg:py-28">
      {/* Background gradient glows */}
      <div
        className="pointer-events-none absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(61,90,254,0.08)_0%,transparent_70%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 top-20 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(124,77,255,0.06)_0%,transparent_70%)]"
        aria-hidden="true"
      />
      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="max-w-2xl">
            <CoordinateLabel className="mb-8" />
            <h1 className="font-display text-5xl font-semibold leading-[0.95] text-ink sm:text-6xl lg:text-7xl">
              Software built for the stack the product actually{" "}
              <span className="bg-gradient-to-r from-indigo to-violet bg-clip-text text-transparent">needs.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              Tora takes an idea from zero to a market-ready MVP, then scales it into durable software for startups and enterprises.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Start a project</ButtonLink>
              <ButtonLink href="/stack" variant="secondary">
                See our stack
              </ButtonLink>
            </div>
          </div>
          <div className="relative min-h-[260px] lg:min-h-[360px]">
            <div className="absolute inset-0 hairline-grid opacity-70" aria-hidden="true" />
            <div className="relative pt-8 lg:pt-12">
              <TrajectoryLine />
            </div>
            <div className="absolute bottom-4 right-0 max-w-xs border-t border-hairline pt-4 font-mono text-xs leading-5 text-muted">
              Deliberate stack matching. No default framework. No throwaway first build.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
