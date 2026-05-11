import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Spinner } from "./Spinner"

/**
 * Primary  — blue gradient fill, white text, purple border, primary glow
 * Secondary — transparent fill, near-white text, neutral border, blue glow
 * Action   — no fill, no border, white text + arrow (always shown), ghost-style
 */
type TzButtonVariant = "primary" | "secondary" | "action" | "gold"

type TzButtonProps = Omit<
  React.ComponentPropsWithoutRef<"button">,
  "children" | "style" | "onClick"
> & {
  children: React.ReactNode
  variant?: TzButtonVariant
  href?: string
  size?: "sm" | "default"
  showArrow?: boolean
  loading?: boolean
  className?: string
  onClick?: React.MouseEventHandler<HTMLElement>
}

const sizeClasses: Record<NonNullable<TzButtonProps["size"]>, string> = {
  sm: "px-5 py-2.5 text-sm",
  default: "px-6 py-3 text-2xl",
}

const variantConfig: Record<
  TzButtonVariant,
  { className: string; style: React.CSSProperties }
> = {
  primary: {
    className: "text-secondary-foreground",
    style: {
      backgroundImage: "var(--gradient-btn-primary)",
      boxShadow: "var(--shadow-btn-primary)",
    },
  },
  secondary: {
    className:
      "text-[var(--color-btn-secondary-text)] border border-[var(--color-pill-border)]",
    style: {
      boxShadow: "var(--shadow-btn-secondary)",
    },
  },
  action: {
    className:
      "font-normal text-primary-foreground hover:bg-primary-foreground/10",
    style: {},
  },
  gold: {
    className:
      "font-semibold text-brand-surface border-[0.5px] border-[var(--color-btn-primary-border)]",
    style: {
      backgroundColor: "var(--color-gold)",
      boxShadow: "var(--shadow-btn-gold)",
    },
  },
}

export function TzButton({
  children,
  variant = "primary",
  href,
  size = "default",
  showArrow = false,
  loading = false,
  className,
  onClick,
  ...rest
}: TzButtonProps) {
  const config = variantConfig[variant]

  const classes = cn(
    `inline-flex cursor-pointer items-center justify-center gap-2 rounded-full
    transition-all duration-200 select-none`,
    sizeClasses[size],
    config.className,
    className
  )

  const mergedStyle: React.CSSProperties = { ...config.style }

  const content = (
    <>
      {loading ? <Spinner /> : children}
      {(showArrow || variant === "action") && (
        <ArrowRight className="h-5 w-5 shrink-0" />
      )}
    </>
  )

  if (href) {
    const isInternal = href.startsWith("/") || href.startsWith("#")
    if (isInternal) {
      return (
        <Link
          to={href}
          className={cn(classes)}
          style={mergedStyle}
          onClick={onClick}
        >
          {content}
        </Link>
      )
    }
    return (
      <a
        href={href}
        className={cn(classes)}
        style={mergedStyle}
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
      >
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
