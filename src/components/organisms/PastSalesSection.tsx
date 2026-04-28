import { useState } from "react";
import { Download } from "lucide-react";
import { SectionLabel } from "@/components/atoms/SectionLabel";
import { ListingCard } from "@/components/molecules/ListingCard";

const imgBlanket = "https://www.figma.com/api/mcp/asset/4c94550e-6969-4bfa-9dc3-46a9f2a94cc1";
const imgCamera = "https://www.figma.com/api/mcp/asset/424cd248-a3fb-41c1-9d67-6d4fe0b3a4c0";
const imgGuitar = "https://www.figma.com/api/mcp/asset/f1d3605b-6a6f-436c-9ae9-2f304e59c900";

const allItems = [
  {
    image: imgBlanket,
    title: "Vintage Pendleton Blanket",
    meta: "14 bids · auction closed 14 Apr",
    price: "$98.00",
    donation: "$7.20 → Oxfam Australia",
    seller: "Sold by Sarah M., Sydney",
  },
  {
    image: imgCamera,
    title: "Leica M6 film camera with 35mm Summicron lens",
    meta: "22 bids · auction closed 14 Apr",
    price: "$2,850.00",
    donation: "$2,850.00 → WWF Australia",
    seller: "Sold by Emily R., Melbourne",
  },
  {
    image: imgGuitar,
    title: "1972 Fender Stratocaster, sunburst finish",
    meta: "12 bids · auction closed 14 Apr",
    price: "$4,200.00",
    donation: "$420.00 → Beyond Blue",
    seller: "Sold by James T., Brisbane",
  },
  {
    image: imgBlanket,
    title: "Handwoven Oaxacan Textile Rug",
    meta: "9 bids · auction closed 12 Apr",
    price: "$340.00",
    donation: "$34.00 → Red Cross Australia",
    seller: "Sold by Maria C., Adelaide",
  },
  {
    image: imgCamera,
    title: "Hasselblad 500C/M Medium Format Camera",
    meta: "18 bids · auction closed 11 Apr",
    price: "$1,600.00",
    donation: "$160.00 → RSPCA",
    seller: "Sold by David L., Perth",
  },
  {
    image: imgGuitar,
    title: "Gibson ES-335 Semi-Hollow Electric",
    meta: "7 bids · auction closed 10 Apr",
    price: "$3,100.00",
    donation: "$310.00 → Lifeline Australia",
    seller: "Sold by Tom W., Sydney",
  },
  {
    image: imgBlanket,
    title: "Japanese Indigo Boro Textile",
    meta: "11 bids · auction closed 9 Apr",
    price: "$520.00",
    donation: "$52.00 → Oxfam Australia",
    seller: "Sold by Keiko N., Melbourne",
  },
  {
    image: imgCamera,
    title: "Rolleiflex 2.8F with Carl Zeiss Planar",
    meta: "15 bids · auction closed 8 Apr",
    price: "$2,200.00",
    donation: "$220.00 → WWF Australia",
    seller: "Sold by Peter H., Brisbane",
  },
  {
    image: imgGuitar,
    title: "1964 Rickenbacker 360 12-String",
    meta: "19 bids · auction closed 7 Apr",
    price: "$5,500.00",
    donation: "$550.00 → Beyond Blue",
    seller: "Sold by Chris B., Gold Coast",
  },
];

// Desktop shows first 5 (1 featured + 4 grid); mobile shows first 4
const DESKTOP_INITIAL = 5;

export function PastSalesSection() {
  const [showAll, setShowAll] = useState(false);

  const featuredItem = allItems[0];
  const initialGridItems = allItems.slice(1, DESKTOP_INITIAL);
  const extraItems = allItems.slice(DESKTOP_INITIAL);

  // Mobile visible list
  const mobileItems = showAll ? allItems : allItems.slice(0, 4);
  const hasMobileMore = !showAll && allItems.length > 4;
  const hasDesktopMore = !showAll && extraItems.length > 0;

  return (
    <section className="py-16 sm:py-20 lg:py-[120px] px-6 sm:px-8 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
          <div className="flex flex-col gap-3">
            <SectionLabel>Past Sales</SectionLabel>
            <h2 className="font-bold text-[48px] leading-none text-brand-darkest">
              items that recently<br />found a new home
            </h2>
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary/70 leading-snug sm:max-w-sm lg:max-w-md text-left sm:text-right">
            Real items. Real bids. Real change for the causes that matter to you.
          </p>
        </div>

        {/* ── Desktop: 1 large featured card + 2×2 grid ── */}
        <div className="hidden sm:flex gap-4 items-stretch">
          {/* Featured card — left, stretches to full height of the grid */}
          <div className="flex-1 min-w-0 self-stretch">
            <ListingCard item={featuredItem} variant="featured" />
          </div>

          {/* Right side: 2 columns × 2 rows of smaller cards */}
          <div className="grid grid-cols-2 gap-4" style={{ flex: "1" }}>
            {initialGridItems.map((item) => (
              <ListingCard key={item.title} item={item} variant="desktop" />
            ))}
          </div>
        </div>

        {/* Extra desktop items revealed on show more */}
        {showAll && (
          <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {extraItems.map((item) => (
              <ListingCard key={item.title} item={item} variant="desktop" />
            ))}
          </div>
        )}

        {/* ── Mobile: stacked list ── */}
        <div className="sm:hidden flex flex-col gap-4">
          {mobileItems.map((item) => (
            <ListingCard key={item.title} item={item} variant="mobile" />
          ))}
        </div>

        {/* ── CTA buttons ── */}
        <div className="mt-8 flex flex-col gap-3">
          {/* Show more — full width on mobile when mobile has more, always on desktop */}
          {(hasMobileMore || hasDesktopMore) && (
            <button
              onClick={() => setShowAll(true)}
              className="w-full py-3.5 sm:py-5 px-6 rounded-full border border-pill-border font-semibold text-brand-dark text-sm sm:text-base hover:bg-brand-surface transition-colors shadow-[var(--shadow-pill-btn)]"
              style={{ backgroundImage: "linear-gradient(180deg, #ffffff 62.65%, #f9fdff 83.01%)" }}
            >
              Show more
            </button>
          )}

          {/* Start listing — mobile only, green primary CTA */}
          <button
            className="sm:hidden w-full py-3.5 px-6 rounded-full font-semibold text-white text-sm flex items-center justify-center gap-2 shadow-[var(--shadow-primary-btn)]"
            style={{ backgroundImage: "var(--gradient-btn-primary)" }}
          >
            <Download className="w-4 h-4" />
            Start listing
          </button>
        </div>
      </div>
    </section>
  );
}
