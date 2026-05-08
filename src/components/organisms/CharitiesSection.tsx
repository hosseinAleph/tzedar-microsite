import { SectionLabel } from "@/components/atoms/SectionLabel"
import { CharityCard } from "@/components/molecules/CharityCard"
import { cn } from "@/lib/utils"

// Figma charity photos (web design)
const imgOxfam = "/images/charity-1.png"
const imgWWF = "/images/charity-2.jpeg"
const imgRedCross = "/images/charity-3.png"
const imgGreenFleet = "/images/charity-4.jpeg"
const imgSaveChildren = "/images/charity-5.jpeg"
const imgBeyondBlue = "/images/charity-6.png"
// Additional demo charities (existing assets)
const imgRSPCA = "/images/charity-2.jpeg"
const imgLifeline = "/images/charity-4.jpeg"

// Background decoration assets
const imgEllipse = "/images/img-ellipse.svg"
const imgPolygon = "/images/img-polygon.svg"
const imgTexture = "/images/img-texture.svg"

const charities = [
  {
    image: imgOxfam,
    name: "Oxfam Australia",
    description:
      "Help a developing nations grow economically, socially, & politically.",
    location: "Based in Sydney.",
  },
  {
    image: imgWWF,
    name: "WWF Australia",
    description: "Protecting vulnerable wildlife and their natural habitats.",
    location: "Based in Melbourne.",
  },
  {
    image: imgRedCross,
    name: "Australian Red Cross",
    description:
      "Responding to humanitarian crises and supporting vulnerable communities.",
    location: "Based in Brisbane.",
  },
  {
    image: imgGreenFleet,
    name: "Green Fleet",
    description:
      "Planting trees and restoring ecosystems to combat climate change.",
    location: "Based in Perth.",
  },
  {
    image: imgSaveChildren,
    name: "Save the Children",
    description:
      "Protecting children's rights and improving their access to education.",
    location: "Based in Adelaide.",
  },
  {
    image: imgBeyondBlue,
    name: "Beyond Blue",
    description: "Supporting mental health and wellbeing across Australia.",
    location: "Based in Sydney.",
  },
  {
    image: imgRSPCA,
    name: "RSPCA Australia",
    description: "Promoting the kindness and prevention of cruelty to animals.",
    location: "Based in Melbourne.",
  },
  {
    image: imgLifeline,
    name: "Lifeline Australia",
    description:
      "Supporting Australians in crisis with 24/7 mental health services.",
    location: "Based in Sydney.",
  },
]

export function CharitiesSection() {
  return (
    <section
      id="charities"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      {/* ── Decorative background ── */}
      {/* Soft glow ellipse — upper center-right */}
      <div
        className="pointer-events-none absolute top-0 right-[15%] aspect-square
          w-[55%] opacity-70 select-none"
      >
        <div className="absolute inset-[-32%]">
          <img src={imgEllipse} alt="" className="block h-full w-full" />
        </div>
      </div>
      {/* Polygon shape — far upper right */}
      <div
        className="pointer-events-none absolute top-0 right-0 aspect-square
          w-[55%] opacity-60 select-none"
      >
        <div className="absolute inset-[-24%_-17%_1%_-17%]">
          <img src={imgPolygon} alt="" className="block h-full w-full" />
        </div>
      </div>
      {/* Repeating texture with overlay blend */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30
          mix-blend-overlay select-none"
        style={{
          backgroundImage: `url('${imgTexture}')`,
          backgroundSize: "134px 134px",
          backgroundPosition: "top left",
        }}
      />

      {/* ── Section header ── */}
      <div
        className="relative mx-auto mb-10 max-w-7xl px-6 sm:mb-14 sm:px-8
          lg:px-20"
      >
        <div
          className="flex flex-col gap-4 sm:flex-row sm:items-end
            sm:justify-between"
        >
          <div className="flex flex-col gap-3">
            <SectionLabel>Our Partnering Charities</SectionLabel>
            <h2
              className="text-4xl leading-none font-bold text-brand-darkest
                sm:text-5xl lg:text-[48px]"
            >
              every bid supports
              <br />a cause you believe in.
            </h2>
          </div>
          <p
            className="text-left text-base leading-snug text-text-secondary/70
              sm:max-w-sm sm:text-right sm:text-lg lg:max-w-md lg:text-2xl"
          >
            Every charity on Tzedar has DGR status with the ATO. We check them
            out so you can donate with confidence.
          </p>
        </div>
      </div>

      {/* ── Scrollable card row ── */}
      <div
        className="scrollbar-hide relative flex snap-x snap-mandatory gap-4
          overflow-x-auto px-6 pb-4 sm:px-8 lg:gap-[10px] lg:px-20"
      >
        {/* add margin left to first card  */}
        {charities.map((charity, index) => (
          <div
            key={charity.name}
            className={cn("shrink-0 snap-start", index === 0 && "pl-6")}
          >
            <CharityCard {...charity} />
          </div>
        ))}
      </div>
    </section>
  )
}
