import { cn } from "@/lib/utils"

type TzLinkProps = Omit<React.ComponentPropsWithoutRef<"a">, "children"> & {
  children: React.ReactNode
}

export function TzLink({ children, className, ...rest }: TzLinkProps) {
  return (
    <a
      className={cn(
        "rounded-xl text-2xl font-semibold text-green transition-colors hover:bg-brand-surface",
        className
      )}
      {...rest}
    >
      {children}
    </a>
  )
}
