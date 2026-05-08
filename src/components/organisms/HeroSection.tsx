import { TzButton } from "@/components/atoms/TzButton"
import { PhotoGlassSection } from "./PhotoGlassSection"

const heroImage = "/images/hero.jpg"
const heroImageMobile = "/images/hero-m.jpg"

const bannerSubLabel =
  "List items you no longer need. Support a cause that matters. Someone new receives what you once loved."
const bannerButtonLabel = "Find something"
const bannerButtonActionLabel = "Join as a cause"

export function HeroSection() {
  return (
    <PhotoGlassSection bgImage={heroImage} bgImageMobile={heroImageMobile}>
      <div className="flex flex-col gap-6 sm:h-[407px] lg:h-auto lg:gap-8">
        <div className="flex flex-col gap-4 text-primary-foreground lg:gap-6">
          <h1
            className="text-[clamp(2.5rem,12vw,4rem)] leading-[1.09] font-bold
              tracking-[-0.03em] lg:text-[clamp(2.5rem,4.5vw,5.5rem)]
              lg:leading-[1.05] lg:tracking-[-0.024em]"
            style={{ textShadow: "var(--text-shadow-heading)" }}
          >
            share value.
          </h1>
          <p
            className="text-lg leading-snug opacity-95 lg:text-2xl
              lg:opacity-100"
            style={{ textShadow: "var(--text-shadow-body)" }}
          >
            {bannerSubLabel}
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
