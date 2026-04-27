import { SectionLabel } from "@/components/atoms/SectionLabel";
import { PricingCard } from "@/components/molecules/PricingCard";

const bgTexture = "https://www.figma.com/api/mcp/asset/20efd6d5-799b-42b7-8a1e-99363ba03082";

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative py-16 sm:py-20 lg:py-28 px-6 sm:px-8 lg:px-20 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: `url(${bgTexture})`, backgroundSize: "cover", backgroundPosition: "center" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-brand-surface pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
          <div className="flex flex-col gap-3">
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="font-bold text-4xl sm:text-5xl lg:text-[48px] text-brand-darkest leading-none">
              honest about
              <br />
              what it costs.
            </h2>
          </div>
          <p className="text-base sm:text-lg lg:text-2xl text-text-secondary/70 leading-snug sm:max-w-sm lg:max-w-lg text-left sm:text-right">
            No surprise charges. One small annual unlock, then a commission only when you actually sell something.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 lg:gap-10">
          <PricingCard type="subscription" />
          <PricingCard type="commission" />
        </div>
      </div>
    </section>
  );
}
