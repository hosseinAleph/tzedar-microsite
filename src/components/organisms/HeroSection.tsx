import { TzButton } from "@/components/atoms/TzButton"
import { PhotoGlassSection } from "./PhotoGlassSection"
import heroImage from "@/assets/images/hero.jpg"
import heroImageMobile from "@/assets/images/hero-m.jpg"

const bannerButtonLabel = "Offer something"
const bannerButtonActionLabel = "Join as a cause"

export function HeroSection() {
  return (
    <PhotoGlassSection bgImage={heroImage} bgImageMobile={heroImageMobile}>
      <div
        className="flex flex-col gap-6 px-8 py-16 lg:h-auto lg:w-[47vw] lg:gap-8
          lg:py-[64px]"
      >
        <div className="flex flex-col gap-4 text-primary-foreground lg:gap-6">
          <h1
            className="text-[64px] leading-[1.09] font-bold tracking-[-0.03em]
              lg:text-[89px] lg:leading-[1.05] lg:tracking-[-0.024em]"
            style={{ textShadow: "var(--text-shadow-heading)" }}
          >
            share <br className="lg:hidden" /> value.
          </h1>
          <p
            className="text-lg leading-snug opacity-95 lg:text-[32px]
              lg:opacity-100"
            style={{ textShadow: "var(--text-shadow-body)" }}
          >
            Everything has value. When you pass
            <br />
            something on, part of what it becomes always supports a cause.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <TzButton
            href="#app-download"
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
