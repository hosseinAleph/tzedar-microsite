import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "green" | "gold";
  className?: string;
};

export function Badge({ children, variant = "green", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] leading-tight",
        variant === "green" && "bg-brand-subtle text-brand-darkest",
        variant === "gold" && "bg-gold-surface text-gold",
        className,
      )}
    >
      {children}
    </span>
  );
}
