import { ButtonLink } from "@/components/ui/Button";

type CTAProps = {
  title?: string;
  body?: string;
};

export function CTA({
  title = "Bring the product constraint. Tora will bring the build path.",
  body = "Start with the first version worth shipping, then make the technical choices that let it keep growing."
}: CTAProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0E0E10] via-[#16162a] to-[#0E0E10] py-section">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(61,90,254,0.12)_0%,transparent_65%)]"
        aria-hidden="true"
      />
      <div className="container relative text-center">
        <p className="font-mono text-xs uppercase tracking-wider text-indigo/60">Let&apos;s build</p>
        <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold text-white sm:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/50">{body}</p>
        <div className="mt-10">
          <ButtonLink
            href="/contact"
            className="bg-gradient-to-r from-indigo to-violet px-8 py-3 text-white shadow-lg shadow-indigo/25 hover:shadow-xl hover:shadow-indigo/30"
          >
            Start a project
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
