import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"

type TzLinkProps = Omit<React.ComponentPropsWithoutRef<"a">, "children"> & {
  children: React.ReactNode
}

export function TzLink({ children, className, href, ...rest }: TzLinkProps) {
  const classes = cn(
    `rounded-xl text-2xl font-semibold text-green transition-colors
    hover:bg-brand-surface`,
    className
  )

  const isInternal = href && (href.startsWith("/") || href.startsWith("#"))

  if (isInternal) {
    return (
      <Link to={href} className={classes} {...(rest as object)}>
        {children}
      </Link>
    )
  }

  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  )
}
