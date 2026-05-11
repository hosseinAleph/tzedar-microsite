import { useState } from "react"
import { SectionLabel } from "@/components/atoms/SectionLabel"
import { HowItWorksStep } from "@/components/molecules/HowItWorksStep"
import stepImage1 from "@/assets/images/profile-1.jpg"
import stepImage2 from "@/assets/images/profile-2.jpg"
import stepImage3 from "@/assets/images/profile-3.jpg"

const steps = [
  {
    step: "01",
    title: "photo",
    description: "We’ll do the rest. Value will find its level.",
    image: stepImage1,
  },
  {
    step: "02",
    title: "cause",
    description: "Part of the value will be shared with that cause.",
    image: stepImage2,
  },
  {
    step: "03",
    title: "share",
    description:
      "As it moves to someone new, some of the value reaches those you choose to support.",
    image: stepImage3,
  },
]

export function HowItWorksSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section
      id="how-it-works"
      className="px-4 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div
          className="mb-8 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end
            sm:justify-between"
        >
          <div className="flex flex-col gap-3">
            <SectionLabel>how it works</SectionLabel>
            <h2
              className="text-3xl leading-tight font-bold tracking-tight
                text-brand-darkest sm:text-5xl lg:text-6xl"
            >
              it’s simple.
              <br />
              {"that's actually it."}
            </h2>
          </div>
          <p
            className="text-left text-sm leading-snug text-text-secondary/70
              sm:max-w-xs sm:text-right sm:text-base lg:max-w-xl lg:text-lg"
          >
            Everything has value, even the smallest things. Offer something,
            find something, support a cause. As value moves between us, some of
            it always reaches those who need it most. Value isn't set, it is
            discovered.
          </p>
        </div>

        {/*
          Desktop (md+): vertical flex-col accordion.
          Active step = wide landscape card, collapsed steps = full-width horizontal pills.
        */}
        <div className="hidden flex-col gap-4 lg:flex lg:gap-6">
          {steps.map((step, index) => (
            <HowItWorksStep
              key={step.step}
              {...step}
              stepIndex={index}
              isActive={activeIndex === index}
              layout="desktop"
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        {/*
          Mobile: horizontal flex-row accordion.
          Active step = flex-1 portrait card, collapsed steps = narrow vertical pills.
        */}
        <div className="flex min-h-[260px] gap-2 lg:hidden">
          {steps.map((step, index) => (
            <HowItWorksStep
              key={step.step}
              {...step}
              stepIndex={index}
              isActive={activeIndex === index}
              layout="mobile"
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
