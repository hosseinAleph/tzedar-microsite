import { cn } from "@/lib/utils"

type TzLinkProps = Omit<
  React.ComponentPropsWithoutRef<"a">,
  "children"
> & {
  children: React.ReactNode
}

export function TzLink({ children, className, ...rest }: TzLinkProps) {
  return (
    <a
      className={cn(
        "font-semibold text-brand-dark text-base transition-colors hover:bg-brand-surface",
        className
      )}
      {...rest}
    >
      {children}
    </a>
  )
}
