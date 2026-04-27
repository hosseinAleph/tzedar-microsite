import { useState } from "react";
import { SectionLabel } from "@/components/atoms/SectionLabel";
import { HowItWorksStep } from "@/components/molecules/HowItWorksStep";

const stepImage1 = "https://www.figma.com/api/mcp/asset/67b2d600-0577-4e50-84d0-0b9f7ecf082d";
const stepImage2 = "https://www.figma.com/api/mcp/asset/f720d4fb-7267-4cde-a5f2-8b0280009ebf";
const stepImage3 = "https://www.figma.com/api/mcp/asset/53f26b9d-eeb5-48e3-8ebe-848e20c66dcb";

const steps = [
  {
    step: "01",
    title: "photograph it",
    description:
      "Point your camera at the item. Our AI reads the photo, fills in the category, condition, and a starting price.",
    image: stepImage1,
  },
  {
    step: "02",
    title: "pick your charity",
    description:
      "Choose from a curated list of verified charities. Every dollar raised goes directly to your chosen cause.",
    image: stepImage2,
  },
  {
    step: "03",
    title: "charity wins, always",
    description:
      "When your item sells, a portion of the final price goes straight to the charity. Simple, transparent, impactful.",
    image: stepImage3,
  },
];

export function HowItWorksSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-12">
          <div className="flex flex-col gap-3">
            <SectionLabel>how it works</SectionLabel>
            <h2 className="font-bold text-3xl sm:text-5xl lg:text-6xl text-brand-darkest leading-tight tracking-tight">
              three steps.
              <br />
              {"that's actually it."}
            </h2>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-text-secondary/70 leading-snug sm:max-w-xs lg:max-w-sm text-left sm:text-right">
            No forms to fill. No charity portals to navigate. Tzedar handles the giving — you just handle the listing.
          </p>
        </div>

        {/*
          Interactive accordion — same layout on mobile and desktop.
          Active step is flex-1 (takes remaining space).
          Collapsed steps are fixed-width vertical pills.
          Height is fixed via a min-h on the container; steps fill it with h-full.
        */}
        <div className="flex gap-2 sm:gap-3 lg:gap-4 min-h-[260px] sm:min-h-[380px] lg:min-h-[480px]">
          {steps.map((step, index) => (
            <HowItWorksStep
              key={step.step}
              {...step}
              stepIndex={index}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
