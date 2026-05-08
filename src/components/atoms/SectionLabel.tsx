type SectionLabelProps = {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`text-xs leading-tight font-semibold tracking-[0.2em]
        text-brand-light uppercase sm:text-sm ${className}`}
    >
      {children}
    </p>
  )
}
