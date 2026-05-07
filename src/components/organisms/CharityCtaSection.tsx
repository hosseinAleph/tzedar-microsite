import { TzButton } from "../atoms/TzButton"

const bgWeb = "/images/charity-cta.jpg"
const bgMobile = "/images/charity-cta-m.jpg"

const bannerButtonLabel = "Express interest as a cause"
const bannerButtonActionLabel = "Nominate as a cause"

export function CharityCtaSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* ══ DESKTOP (md+) ══ */}
      <div className="relative hidden h-screen lg:block">
        {/* Background photo */}
        <img
          src={bgWeb}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          aria-hidden="true"
        />

        {/* Left glass panel — anchored to left edge, bottom-offset, right rounded corners */}
        <div
          className="absolute bottom-[124px] left-0 flex flex-col justify-end rounded-tr-[48px] rounded-br-[48px] border-t border-brand-tint p-16"
          style={{
            background: "var(--glass-bg)",
            backdropFilter: "blur(8px)",
            boxShadow: "var(--glass-shadow)",
          }}
        >
          <div className="flex max-w-[685px] flex-col gap-8">
            {/* Overline */}
            <p className="text-base font-semibold tracking-[0.2em] text-primary-foreground uppercase">
              Charity partnership
            </p>

            {/* Heading */}
            <h2
              className="leading-none font-bold text-primary-foreground"
              style={{
                fontSize: "clamp(3rem,5.2vw,5.6rem)",
                letterSpacing: "-0.024em",
                textShadow: "var(--text-shadow-heading)",
              }}
            >
              bring a cause <br /> into it.
            </h2>

            {/* Description */}
            <p
              className="text-2xl leading-snug text-primary-foreground"
              style={{ textShadow: "var(--text-shadow-body)" }}
            >
              Causes can take part directly, or you can nominate one to be
              included. Every cause is verified as a registered charity or NFP
              before joining.
            </p>

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

      {/* ══ MOBILE (< md) ══ */}
      <div className="relative lg:hidden" style={{ minHeight: "874px" }}>
        {/* Background photo — shifted left in Figma to focus on centre of image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={bgMobile}
            alt=""
            className="absolute h-full w-[214%] max-w-none object-cover"
            style={{ left: "-57%", top: 0 }}
            aria-hidden="true"
          />
        </div>

        {/* Glass panel — bottom, full-width, rounded top corners */}
        <div className="absolute right-0 bottom-0 left-0 flex flex-col gap-6 rounded-tl-[40px] rounded-tr-[40px] border-t border-brand-tint px-8 pt-12 pb-14">
          {/* Dark tint overlay */}
          <div
            className="pointer-events-none absolute inset-0 rounded-tl-[40px] rounded-tr-[40px] mix-blend-darken"
            style={{
              background: "var(--glass-bg)",
              backdropFilter: "blur(8px)",
            }}
          />

          <div className="relative flex flex-col gap-6 text-primary-foreground">
            {/* Overline */}
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase">
              Charity partnership
            </p>

            {/* Heading */}
            <h2
              className="leading-[1.09] font-bold text-primary-foreground"
              style={{
                fontSize: "clamp(2.8rem,15vw,4rem)",
                letterSpacing: "-0.015em",
                textShadow: "var(--text-shadow-mobile)",
              }}
            >
              bring your cause into the circle.
            </h2>

            {/* Description */}
            <p className="text-lg leading-snug text-primary-foreground">
              Takes three minutes to express interest. We verify your DGR status
              and do the rest.
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
    </section>
  )
}
