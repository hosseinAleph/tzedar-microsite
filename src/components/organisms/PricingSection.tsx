import { SectionLabel } from "@/components/atoms/SectionLabel"
import { PricingCard } from "@/components/molecules/PricingCard"

const bgTexture = "/images/pricing-bg.jpg"
const bgTextureMobile = "/images/pricing-bg-m.jpg"

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden px-6 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-28"
    >
      <img
        src={bgTexture}
        alt=""
        className="pointer-events-none absolute inset-0 hidden h-full w-full object-cover object-center mix-blend-multiply lg:block"
        aria-hidden="true"
      />
      <img
        src={bgTextureMobile}
        alt=""
        className="pointer-events-none absolute inset-0 block h-full w-full object-cover object-center mix-blend-multiply lg:hidden"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-3">
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="text-4xl leading-none font-bold text-brand-darkest sm:text-5xl lg:text-[48px]">
              clear and simple.
            </h2>
          </div>
          <p className="text-left text-base leading-snug text-text-secondary/70 sm:max-w-sm sm:text-right sm:text-lg lg:max-w-2xl lg:text-2xl">
            Where value is discovered. Or you can set the starting value{" "}
            <br className="hidden lg:block" /> — when something begins above $1,
            a portion supports a cause and the platform.
          </p>
        </div>

        <div className="flex flex-col gap-5 sm:flex-row sm:gap-8 lg:gap-10">
          <PricingCard type="subscription" />
          <PricingCard type="commission" />
        </div>
      </div>
    </section>
  )
}
