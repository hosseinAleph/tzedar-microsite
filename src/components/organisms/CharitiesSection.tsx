import { SectionLabel } from "@/components/atoms/SectionLabel";
import { CharityCard } from "@/components/molecules/CharityCard";

const imgCharity1 = "https://www.figma.com/api/mcp/asset/36f003db-e71b-4eaa-9f7a-ef1abbbd5b68";
const imgCharity2 = "https://www.figma.com/api/mcp/asset/f720d4fb-7267-4cde-a5f2-8b0280009ebf";
const imgCharity3 = "https://www.figma.com/api/mcp/asset/53f26b9d-eeb5-48e3-8ebe-848e20c66dcb";
const imgCharity4 = "https://www.figma.com/api/mcp/asset/dc0a79bc-0175-4fc4-be36-69336c86988f";
const imgCharity5 = "https://www.figma.com/api/mcp/asset/d5f895d1-8493-49b2-93ea-3ce956fbffc4";

const charities = [
  {
    image: imgCharity1,
    name: "Oxfam Australia",
    description: "Help developing nations grow economically, socially, & politically.",
  },
  {
    image: imgCharity2,
    name: "WWF Australia",
    description: "Protecting wildlife and natural habitats for future generations.",
  },
  {
    image: imgCharity3,
    name: "Beyond Blue",
    description: "Supporting mental health and wellbeing across Australia.",
  },
  {
    image: imgCharity4,
    name: "RSPCA Australia",
    description: "Promoting the kindness and prevention of cruelty to animals.",
  },
  {
    image: imgCharity5,
    name: "Red Cross Australia",
    description: "Responding to humanitarian crises and building community resilience.",
  },
];

export function CharitiesSection() {
  return (
    <section id="charities" className="py-16 sm:py-20 lg:py-28 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-20 mb-10 sm:mb-14">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="flex flex-col gap-3">
            <SectionLabel>Charities</SectionLabel>
            <h2 className="font-bold text-4xl sm:text-5xl lg:text-[48px] text-brand-darkest leading-none">
              every bid supports
              <br />
              a cause you believe in.
            </h2>
          </div>
          <p className="text-base sm:text-lg lg:text-2xl text-text-secondary/70 leading-snug sm:max-w-sm lg:max-w-md text-left sm:text-right">
            Choose from a curated list of verified charities — and every sale makes a real difference.
          </p>
        </div>
      </div>

      <div className="flex gap-4 lg:gap-6 overflow-x-auto px-6 sm:px-8 lg:px-20 pb-4 scrollbar-hide snap-x snap-mandatory">
        {charities.map((charity) => (
          <div key={charity.name} className="snap-start shrink-0">
            <CharityCard {...charity} />
          </div>
        ))}
      </div>
    </section>
  );
}
