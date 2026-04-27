type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p className={`text-brand-light text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] leading-tight ${className}`}>
      {children}
    </p>
  );
}
