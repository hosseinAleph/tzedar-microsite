type SectionTitleProps = {
  children: React.ReactNode
}

export function SectionTitle({ children }: Readonly<SectionTitleProps>) {
  return (
    <h2
      className="text-[48px] font-bold tracking-tight text-brand-darkest
        lg:text-[56px]"
    >
      {children}
    </h2>
  )
}
