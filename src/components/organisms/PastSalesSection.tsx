import { useState } from "react"
import { SectionLabel } from "@/components/atoms/SectionLabel"
import { ListingCard } from "@/components/molecules/ListingCard"
import { TzButton } from "../atoms/TzButton"
import imgBlanket from "@/assets/images/sales-1.png"
import imgCamera from "@/assets/images/sales-2.png"
import imgGuitar from "@/assets/images/sales-3.png"
import { SectionTitle } from "../atoms/SectionTitle"

const allItems = [
  {
    image: imgBlanket,
    title: "Vintage Pendleton Blanket",
    meta: "Starting offer at $1.00",
    price: "$98.00",
    receivedBy: "Sarah M., Sydney",
    sharedWith: "Oxfam Australia",
    linkToCharity: "https://www.oxfam.org.au/",
    dateOfShare: "12 March 2026",
  },
  {
    image: imgCamera,
    title: "Leica M6 film camera with 35mm Summicron lens",
    meta: "Starting offer at $1.00",
    price: "$2,850.00",
    receivedBy: "Emily R., Melbourne",
    sharedWith: "WWF Australia",
    linkToCharity: "https://www.wwf.org.au/",
    dateOfShare: "12 March 2026",
  },
  {
    image: imgGuitar,
    title: "1972 Fender Stratocaster, sunburst finish",
    meta: "Starting offer at $1.00",
    price: "$4,200.00",
    receivedBy: "James T., Brisbane",
    sharedWith: "WWF Australia",
    linkToCharity: "https://www.wwf.org.au/",
    dateOfShare: "12 March 2026",
  },
  {
    image: imgBlanket,
    title: "Handwoven Oaxacan Textile Rug",
    meta: "Starting offer at $1.00",
    price: "$340.00",
    receivedBy: "Maria C., Adelaide",
    sharedWith: "WWF Australia",
    linkToCharity: "https://www.wwf.org.au/",
    dateOfShare: "12 March 2026",
  },
  {
    image: imgCamera,
    title: "Hasselblad 500C/M Medium Format Camera",
    meta: "Starting offer at $1.00",
    price: "$1,600.00",
    receivedBy: "David L., Perth",
    sharedWith: "WWF Australia",
    linkToCharity: "https://www.wwf.org.au/",
    dateOfShare: "12 March 2026",
  },
  {
    image: imgGuitar,
    title: "Gibson ES-335 Semi-Hollow Electric",
    meta: "Starting offer at $1.00",
    price: "$3,100.00",
    receivedBy: "Tom W., Sydney",
    sharedWith: "WWF Australia",
    linkToCharity: "https://www.wwf.org.au/",
    dateOfShare: "12 March 2026",
  },
  {
    image: imgBlanket,
    title: "Japanese Indigo Boro Textile",
    meta: "Starting offer at $1.00",
    price: "$520.00",
    receivedBy: "Keiko N., Melbourne",
    sharedWith: "WWF Australia",
    linkToCharity: "https://www.wwf.org.au/",
    dateOfShare: "12 March 2026",
  },
  {
    image: imgCamera,
    title: "Rolleiflex 2.8F with Carl Zeiss Planar",
    meta: "Starting offer at $1.00",
    price: "$2,200.00",
    receivedBy: "Peter H., Brisbane",
    sharedWith: "WWF Australia",
    linkToCharity: "https://www.wwf.org.au/",
    dateOfShare: "12 March 2026",
  },
  {
    image: imgGuitar,
    title: "1964 Rickenbacker 360 12-String",
    meta: "Starting offer at $1.00",
    price: "$5,500.00",
    receivedBy: "Chris B., Gold Coast",
    sharedWith: "WWF Australia",
    linkToCharity: "https://www.wwf.org.au/",
    dateOfShare: "12 March 2026",
  },
]

// Desktop shows first 5 (1 featured + 3 grid); mobile shows first 4
const DESKTOP_INITIAL = 5

export function PastSalesSection() {
  const [showAll, setShowAll] = useState(false)

  const featuredItem = allItems[0]
  const initialGridItems = allItems.slice(1, DESKTOP_INITIAL)
  const extraItems = allItems.slice(DESKTOP_INITIAL)

  // Mobile visible list
  const mobileItems = showAll ? allItems : allItems.slice(0, 3)
  const hasMobileMore = !showAll && allItems.length > 3
  const hasDesktopMore = !showAll && extraItems.length > 0

  return (
    <section className="bg-background">
      <div
        className="mx-auto max-w-inner px-4 py-14 sm:py-20 lg:px-[54px]
          lg:py-28"
      >
        {/* Section header */}
        <div
          className="mb-10 flex flex-col sm:mb-14 sm:flex-row sm:items-end
            sm:justify-between"
        >
          <div className="flex flex-col gap-3">
            <SectionLabel>RECENTLY SHARED</SectionLabel>
            <SectionTitle>
              each one <br className="lg:hidden" /> carries
              <br className="hidden lg:block" />
              {""} value forward.
            </SectionTitle>
          </div>
          <p
            className="text-left text-lg leading-snug text-text-secondary/70
              sm:max-w-sm sm:text-right sm:text-xl lg:max-w-md lg:text-2xl"
          >
            Value, discovered and shared.
          </p>
        </div>

        {/* ── Desktop: 1 large featured card + 2×2 grid ── */}
        <div className="hidden items-stretch gap-4 sm:flex">
          {/* Featured card — left, stretches to full height of the grid */}
          <div className="">
            <ListingCard item={featuredItem} variant="featured" />
          </div>

          {/* Right side: 2 columns × 2 rows of smaller cards */}
          <div className="grid grid-cols-2 gap-4" style={{ flex: "1" }}>
            {initialGridItems.map((item) => (
              <ListingCard key={item.title} item={item} />
            ))}
          </div>
        </div>

        {/* Extra desktop items revealed on show more */}
        {showAll && (
          <div className="mt-4 hidden grid-cols-2 gap-4 sm:grid lg:grid-cols-4">
            {extraItems.map((item) => (
              <ListingCard key={item.title} item={item} />
            ))}
          </div>
        )}

        {/* ── Mobile: stacked list ── */}
        <div className="flex flex-col gap-4 sm:hidden">
          {mobileItems.map((item) => (
            <ListingCard key={item.title} item={item} />
          ))}
        </div>

        {hasDesktopMore && (
          <TzButton
            onClick={() => setShowAll(true)}
            className="mt-10 hidden w-full lg:block"
          >
            Show more
          </TzButton>
        )}
        {hasMobileMore && (
          <div className="lg:hidden">
            <TzButton
              onClick={() => setShowAll(true)}
              className="mt-10 w-full"
              size="sm"
              variant="secondary"
            >
              Show more
            </TzButton>
            <TzButton
              href="/#app-download"
              className="mt-5 w-full"
              size="sm"
              showArrow={true}
            >
              Start listing
            </TzButton>
          </div>
        )}
      </div>
    </section>
  )
}
