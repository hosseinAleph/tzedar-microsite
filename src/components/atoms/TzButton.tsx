import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import { Spinner } from "./Spinner"

/**
 * Primary  — blue gradient fill, white text, purple border, primary glow
 * Secondary — transparent fill, near-white text, neutral border, blue glow
 * Action   — no fill, no border, white text + arrow (always shown), ghost-style
 */
type TzButtonVariant = "primary" | "secondary" | "action"

type TzButtonProps = Omit<
  React.ComponentPropsWithoutRef<"button">,
  "children" | "style"
> & {
  children: React.ReactNode
  variant?: TzButtonVariant
  href?: string
  size?: "sm" | "md" | "lg"
  showArrow?: boolean
  loading?: boolean
}

const sizeClasses: Record<NonNullable<TzButtonProps["size"]>, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
}

const variantConfig: Record<
  TzButtonVariant,
  { className: string; style: React.CSSProperties }
> = {
  primary: {
    className:
      "font-semibold text-primary-foreground border-[0.5px] border-[var(--color-btn-primary-border)]",
    style: {
      backgroundImage: "var(--gradient-btn-primary)",
      boxShadow: "var(--shadow-btn-primary)",
    },
  },
  secondary: {
    className:
      "font-semibold text-[var(--color-btn-secondary-text)] border border-[var(--color-pill-border)]",
    style: {
      boxShadow: "var(--shadow-btn-secondary)",
    },
  },
  action: {
    className:
      "font-normal text-primary-foreground hover:bg-primary-foreground/10",
    style: {},
  },
}

export function TzButton({
  children,
  variant = "primary",
  href,
  size = "md",
  showArrow = false,
  loading = false,
  ...rest
}: TzButtonProps) {
  const config = variantConfig[variant]

  const classes = cn(
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full transition-all duration-200 select-none",
    sizeClasses[size],
    config.className
  )

  const mergedStyle: React.CSSProperties = { ...config.style }

  const content = (
    <>
      {loading ? <Spinner /> : children}
      {(showArrow || variant === "action") && (
        <ArrowRight className="h-4 w-4 shrink-0" />
      )}
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes} style={mergedStyle}>
        {content}
      </a>
    )
  }

  return (
    <button
      className={cn(classes, loading && "cursor-not-allowed opacity-80")}
      style={mergedStyle}
      {...rest}
      disabled={loading}
    >
      {content}
    </button>
  )
}
