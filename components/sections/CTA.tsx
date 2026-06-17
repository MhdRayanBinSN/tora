import { ButtonLink } from "@/components/ui/Button";
import { CoordinateLabel } from "@/components/ui/CoordinateLabel";
import { TrajectoryLine } from "@/components/ui/TrajectoryLine";

type CTAProps = {
  title?: string;
  body?: string;
};

export function CTA({
  title = "Bring the product constraint. Tora will bring the build path.",
  body = "Start with the first version worth shipping, then make the technical choices that let it keep growing."
}: CTAProps) {
  return (
    <section className="border-t border-hairline py-section-sm">
      <div className="container grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          <CoordinateLabel className="mb-6" />
          <h2 className="max-w-3xl font-display text-4xl font-semibold text-ink sm:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">{body}</p>
          <div className="mt-8">
            <ButtonLink href="/contact">Start a project</ButtonLink>
          </div>
        </div>
        <TrajectoryLine compact className="max-w-md justify-self-start lg:justify-self-end" />
      </div>
    </section>
  );
}
