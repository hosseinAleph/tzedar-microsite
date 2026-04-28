import { SectionLabel } from "@/components/atoms/SectionLabel";
import { CharityCard } from "@/components/molecules/CharityCard";

// Figma charity photos (web design)
const imgOxfam        = "https://www.figma.com/api/mcp/asset/6afa63d3-fffc-4801-aa38-a918062e52f0";
const imgWWF          = "https://www.figma.com/api/mcp/asset/03d4dddf-a62b-40d3-9490-937c5e9e9243";
const imgRedCross     = "https://www.figma.com/api/mcp/asset/529a737c-9c9c-40ac-95f9-e3501cefadaa";
const imgGreenFleet   = "https://www.figma.com/api/mcp/asset/fdda3bff-7f9d-4336-98fa-baeef9ddaf21";
const imgSaveChildren = "https://www.figma.com/api/mcp/asset/66a2b0cf-c67e-4671-8412-96fab27297eb";
const imgBeyondBlue   = "https://www.figma.com/api/mcp/asset/e3ffb78e-863d-4ac4-adab-401c11948875";
// Additional demo charities (existing assets)
const imgRSPCA        = "https://www.figma.com/api/mcp/asset/dc0a79bc-0175-4fc4-be36-69336c86988f";
const imgLifeline     = "https://www.figma.com/api/mcp/asset/d5f895d1-8493-49b2-93ea-3ce956fbffc4";

// Background decoration assets
const imgEllipse = "https://www.figma.com/api/mcp/asset/eaac7d13-d582-4987-ac50-c64a5beb1680";
const imgPolygon = "https://www.figma.com/api/mcp/asset/336aac90-2c63-46cf-8d8c-ab6bc0eda477";
const imgTexture = "https://www.figma.com/api/mcp/asset/519880c5-d3f2-4c6a-ab86-6f9d4993cc41";

const charities = [
  {
    image: imgOxfam,
    name: "Oxfam Australia",
    description: "Help developing nations grow economically, socially, & politically.",
  },
  {
    image: imgWWF,
    name: "WWF Australia",
    description: "Protecting wildlife and natural habitats for future generations.",
  },
  {
    image: imgRedCross,
    name: "Australian Red Cross",
    description: "Responding to humanitarian crises and supporting vulnerable communities.",
  },
  {
    image: imgGreenFleet,
    name: "Green Fleet",
    description: "Planting trees and restoring ecosystems to combat climate change.",
  },
  {
    image: imgSaveChildren,
    name: "Save the Children",
    description: "Protecting children's rights and improving their access to education.",
  },
  {
    image: imgBeyondBlue,
    name: "Beyond Blue",
    description: "Supporting mental health and wellbeing across Australia.",
  },
  {
    image: imgRSPCA,
    name: "RSPCA Australia",
    description: "Promoting the kindness and prevention of cruelty to animals.",
  },
  {
    image: imgLifeline,
    name: "Lifeline Australia",
    description: "Supporting Australians in crisis with 24/7 mental health services.",
  },
];

export function CharitiesSection() {
  return (
    <section id="charities" className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-brand-tint">

      {/* ── Decorative background ── */}
      {/* Soft glow ellipse — upper center-right */}
      <div className="pointer-events-none absolute right-[15%] top-0 w-[55%] aspect-square opacity-70 select-none">
        <div className="absolute inset-[-32%]">
          <img src={imgEllipse} alt="" className="block w-full h-full" />
        </div>
      </div>
      {/* Polygon shape — far upper right */}
      <div className="pointer-events-none absolute right-0 top-0 w-[55%] aspect-square opacity-60 select-none">
        <div className="absolute inset-[-24%_-17%_1%_-17%]">
          <img src={imgPolygon} alt="" className="block w-full h-full" />
        </div>
      </div>
      {/* Repeating texture with overlay blend */}
      <div
        className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-30 select-none"
        style={{
          backgroundImage: `url('${imgTexture}')`,
          backgroundSize: "134px 134px",
          backgroundPosition: "top left",
        }}
      />

      {/* ── Section header ── */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-20 mb-10 sm:mb-14">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="flex flex-col gap-3">
            <SectionLabel>Our Partnering Charities</SectionLabel>
            <h2 className="font-bold text-4xl sm:text-5xl lg:text-[48px] text-brand-darkest leading-none">
              every bid supports
              <br />
              a cause you believe in.
            </h2>
          </div>
          <p className="text-base sm:text-lg lg:text-2xl text-text-secondary/70 leading-snug sm:max-w-sm lg:max-w-md text-left sm:text-right">
            Every charity on Tzedar has DGR status with the ATO. We check them out so you can donate with confidence.
          </p>
        </div>
      </div>

      {/* ── Scrollable card row ── */}
      <div className="relative flex gap-4 lg:gap-[10px] overflow-x-auto px-6 sm:px-8 lg:px-20 pb-4 scrollbar-hide snap-x snap-mandatory">
        {charities.map((charity) => (
          <div key={charity.name} className="snap-start shrink-0">
            <CharityCard {...charity} />
          </div>
        ))}
      </div>
    </section>
  );
}
