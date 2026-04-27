import { SectionLabel } from "@/components/atoms/SectionLabel";
import { ListingCard } from "@/components/molecules/ListingCard";

const imgBlanket = "https://www.figma.com/api/mcp/asset/0d4aaed8-60f8-4218-be28-1b3df799f9a6";
const imgCamera = "https://www.figma.com/api/mcp/asset/fdedad57-cd5c-4ce6-9119-e44efb4b2d26";
const imgGuitar = "https://www.figma.com/api/mcp/asset/ddbdb645-e61a-4f8f-84fa-ce8a9f3848d8";

const items = [
  {
    image: imgBlanket,
    title: "Vintage Pendleton Blanket",
    meta: "14 bids · closed 14 Apr",
    price: "$98.00",
    donation: "$7.20 → Oxfam Australia",
    seller: "Sold by Sarah M., Sydney",
  },
  {
    image: imgCamera,
    title: "Leica M6 film camera with 35mm Summicron lens",
    meta: "22 bids · closed 14 Apr",
    price: "$2,850.00",
    donation: "$2,850.00 → WWF Australia",
    seller: "Sold by Emily R., Melbourne",
  },
  {
    image: imgGuitar,
    title: "1972 Fender Stratocaster, sunburst finish",
    meta: "12 bids · closed 14 Apr",
    price: "$4,200.00",
    donation: "$420.00 → Beyond Blue",
    seller: "Sold by James T., Brisbane",
  },
];

export function PastSalesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 px-6 sm:px-8 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
          <div className="flex flex-col gap-3">
            <SectionLabel>Past Sales</SectionLabel>
            <h2 className="font-bold text-4xl sm:text-5xl lg:text-[48px] text-brand-darkest leading-none">
              items that recently
              <br />
              found a new home
            </h2>
          </div>
          <p className="text-base sm:text-lg lg:text-2xl text-text-secondary/70 leading-snug sm:max-w-sm lg:max-w-md text-left sm:text-right">
            Real items. Real bids. Real change for the causes that matter to you.
          </p>
        </div>

        {/* Desktop: horizontal cards */}
        <div className="hidden sm:flex gap-4 lg:gap-6">
          {items.map((item) => (
            <ListingCard key={item.title} item={item} variant="desktop" />
          ))}
        </div>

        {/* Mobile: stacked list */}
        <div className="sm:hidden flex flex-col gap-0">
          {items.map((item) => (
            <ListingCard key={item.title} item={item} variant="mobile" />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button className="px-8 py-3 rounded-full border border-[#d4ddd4] font-semibold text-brand-darkest text-base hover:bg-brand-surface transition-colors">
            Show more
          </button>
        </div>
      </div>
    </section>
  );
}
