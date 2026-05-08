type PhotoGlassSectionProps = {
  bgImage: string
  bgImageMobile: string
  children: React.ReactNode
}

export function PhotoGlassSection({
  bgImage,
  bgImageMobile,
  children,
}: Readonly<PhotoGlassSectionProps>) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* ── Background image ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img
          src={bgImage}
          alt=""
          className="hidden h-full w-full object-cover object-center sm:block"
        />
        <img
          src={bgImageMobile}
          alt=""
          className="block h-full w-full object-cover object-center lg:hidden"
        />
      </div>

      <div
        className="absolute right-7 bottom-0 left-0 rounded-tl-[40px]
          rounded-tr-[40px] border-t border-brand-tint px-8 lg:top-1/2
          lg:right-auto lg:bottom-auto lg:w-[50vw] lg:-translate-y-1/2
          lg:rounded-tl-none lg:rounded-tr-[48px] lg:rounded-br-[48px]
          lg:rounded-bl-none lg:p-12 xl:p-16"
        style={{
          background: "var(--glass-bg)",
          backdropFilter: "blur(20px)",
          boxShadow: "var(--glass-shadow)",
        }}
      >
        {children}
      </div>
    </section>
  )
}
