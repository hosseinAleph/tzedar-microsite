import { cn } from "@/lib/utils"

type BadgeProps = {
  children: React.ReactNode
  variant?: "green" | "gold"
  className?: string
}

export function Badge({ children, variant = "green", className }: BadgeProps) {
  return (
    <span
      className={cn(
        `inline-flex items-center justify-center rounded-2xl px-4 py-2 text-xs
        leading-tight font-semibold tracking-[0.2em] uppercase sm:text-sm`,
        variant === "green" && "bg-brand-subtle text-brand-darkest",
        variant === "gold" && "bg-gold-surface text-gold",
        className
      )}
    >
      {children}
    </span>
  )
}
