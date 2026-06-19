import { site } from "@/lib/content";

type CoordinateLabelProps = {
  className?: string;
};

export function CoordinateLabel({ className = "" }: CoordinateLabelProps) {
  return (
    <p className={`font-mono text-[0.68rem] uppercase tracking-widest text-muted ${className}`}>
      {site.coordinate}
    </p>
  );
}
