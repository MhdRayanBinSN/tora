import { process } from "@/lib/content";

export function Process() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0E0E10] via-[#131320] to-[#0E0E10] py-section-sm">
      {/* Background glow accents */}
      <div
        className="pointer-events-none absolute left-1/4 top-0 h-[400px] w-[600px] rounded-full bg-[radial-gradient(ellipse,rgba(61,90,254,0.1)_0%,transparent_70%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 h-[300px] w-[500px] rounded-full bg-[radial-gradient(ellipse,rgba(124,77,255,0.08)_0%,transparent_70%)]"
        aria-hidden="true"
      />

      <div className="container relative">
        <div className="mb-14">
          <p className="font-mono text-xs uppercase tracking-wider text-indigo/70">Our process</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-white sm:text-5xl">
            Four steps from constraint to{" "}
            <span className="bg-gradient-to-r from-indigo to-violet bg-clip-text text-transparent">shipped product.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-indigo/40 via-violet/30 to-transparent lg:left-0 lg:right-0 lg:top-[36px] lg:mx-auto lg:block lg:h-px lg:w-full lg:bg-gradient-to-r" aria-hidden="true" />

          <div className="grid gap-8 lg:grid-cols-4">
            {process.map((step, index) => (
              <div key={step.title} className="group relative">
                {/* Step card */}
                <div className="relative rounded-xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-indigo/20 hover:bg-white/[0.06]">
                  {/* Step number */}
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo to-violet text-sm font-bold text-white shadow-lg shadow-indigo/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                  </div>

                  <h3 className="font-display text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/50">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
