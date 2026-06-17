type UAEFlagProps = {
  className?: string;
};

export function UAEFlag({ className = "" }: UAEFlagProps) {
  return (
    <span
      className={`relative inline-block overflow-hidden rounded-[4px] bg-white shadow-sm ${className}`}
      role="img"
      aria-label="UAE flag"
    >
      <span className="absolute inset-y-0 left-0 w-[28%] bg-[#EF3340]" />
      <span className="absolute left-[28%] right-0 top-0 h-1/3 bg-[#009739]" />
      <span className="absolute left-[28%] right-0 top-1/3 h-1/3 bg-white" />
      <span className="absolute bottom-0 left-[28%] right-0 h-1/3 bg-black" />
      <span className="absolute inset-0 rounded-[4px] ring-1 ring-ink/15" />
    </span>
  );
}
