import { TzButton } from "@/components/atoms/TzButton"

const heroImage = "/images/hero.jpg"
const heroImageMobile = "/images/hero-m.jpg"

const bannerSubLabel =
  "List items you no longer need. Support a cause that matters. Someone new receives what you once loved."
const bannerButtonLabel = "Find something"
const bannerButtonActionLabel = "Join as a cause"

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* ── Background image ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img
          src={heroImage}
          alt=""
          className="hidden h-full w-full object-cover object-center sm:block"
        />
        <img
          src={heroImageMobile}
          alt=""
          className="block h-full w-full object-cover object-center lg:hidden"
        />
      </div>

      <div className="relative h-full min-h-[811px] lg:min-h-[720px]">
        {/* ══ MOBILE glass panel ══
            Full-width, sits at the bottom, rounded top corners only.
            Visible below md. */}
        <div
          className="absolute right-7 bottom-0 left-0 flex h-[407px] flex-col justify-center gap-6 rounded-tl-[40px] rounded-tr-[40px] border-t border-brand-tint px-8 lg:hidden"
          style={{
            background: "var(--glass-bg)",
            backdropFilter: "blur(20px)",
            boxShadow: "var(--glass-shadow)",
          }}
        >
          <div className="relative flex flex-col gap-6">
            <div className="flex flex-col gap-6 text-primary-foreground">
              <h1
                className="text-[clamp(2.5rem,12vw,4rem)] leading-[1.09] font-bold tracking-[-0.03em]"
                style={{ textShadow: "var(--text-shadow-mobile)" }}
              >
                share <br /> value.
              </h1>
              <p className="text-lg leading-snug opacity-95">
                {bannerSubLabel}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <TzButton href="/join" size="sm" variant="gold">
                {bannerButtonLabel}
              </TzButton>
              <TzButton href="/join" size="sm" variant="action">
                {bannerButtonActionLabel}
              </TzButton>
            </div>
          </div>
        </div>

        {/* ══ DESKTOP glass panel ══
            Flush with the left edge, rounded right corners only, anchored near bottom.
            Visible from lg+. */}

        <div
          className="absolute top-1/2 left-0 hidden max-w-[520px] -translate-y-1/2 transform rounded-tr-[48px] rounded-br-[48px] border-t border-brand-tint p-12 lg:flex lg:max-w-[680px] lg:p-16"
          style={{
            background: "var(--glass-bg)",
            backdropFilter: "blur(20px)",
            boxShadow: "var(--glass-shadow)",
          }}
        >
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6 text-primary-foreground">
              <h1
                className="text-[clamp(2.5rem,4.5vw,5.5rem)] leading-[1.05] font-bold tracking-[-0.024em]"
                style={{ textShadow: "var(--text-shadow-heading)" }}
              >
                share value.
              </h1>
              <p
                className="text-xl leading-snug lg:text-2xl"
                style={{ textShadow: "var(--text-shadow-body)" }}
              >
                {bannerSubLabel}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <TzButton href="/join" variant="gold">
                {bannerButtonLabel}
              </TzButton>
              <TzButton href="/join" variant="action">
                {bannerButtonActionLabel}
              </TzButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
