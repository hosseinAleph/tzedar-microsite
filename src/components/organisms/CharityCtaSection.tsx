import { TzButton } from "../atoms/TzButton"
import { PhotoGlassSection } from "./PhotoGlassSection"

const bgWeb = "/images/charity-cta.jpg"
const bgMobile = "/images/charity-cta-m.jpg"

const bannerButtonLabel = "Express interest as a cause"
const bannerButtonActionLabel = "Nominate as a cause"

export function CharityCtaSection() {
  return (
    <PhotoGlassSection bgImage={bgWeb} bgImageMobile={bgMobile}>
      <div
        className="flex flex-col gap-6 px-[32px] py-[48px] lg:w-[50vw] lg:gap-8
          lg:px-[64px] lg:py-[64px]"
      >
        <div className="flex flex-col gap-4 text-primary-foreground lg:gap-6">
          <p className="text-sm leading-[125%] tracking-[0.20px] uppercase">
            Charity partnership
          </p>
          <h1
            className="text-[clamp(2.5rem,12vw,4rem)] leading-[1.09] font-bold
              tracking-[-0.03em] lg:text-[clamp(2.5rem,4.5vw,5.5rem)]
              lg:leading-[1.05] lg:tracking-[-0.024em]"
            style={{ textShadow: "var(--text-shadow-heading)" }}
          >
            bring a cause <br /> into it.
          </h1>
          <p
            className="text-lg leading-snug opacity-95 lg:text-2xl
              lg:opacity-100"
          >
            Causes can take part directly, or you can nominate one to be
            included. Every cause is verified as a registered charity or NFP
            before joining.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <TzButton
            href="/join"
            variant="gold"
            size="sm"
            className="lg:px-6 lg:py-3 lg:text-2xl"
          >
            {bannerButtonLabel}
          </TzButton>
          <TzButton
            href="/join"
            variant="action"
            size="sm"
            className="lg:text-2xl"
          >
            {bannerButtonActionLabel}
          </TzButton>
        </div>
      </div>
    </PhotoGlassSection>
  )
}
