type ListingItem = {
  image: string;
  title: string;
  meta: string;
  price: string;
  donation: string;
  seller: string;
};

type ListingCardProps = Readonly<{
  item: ListingItem;
  variant?: "featured" | "desktop" | "mobile";
}>;

export function ListingCard({ item, variant = "desktop" }: ListingCardProps) {
  if (variant === "mobile") {
    return (
      <div className="flex gap-6 items-start pb-4 border-b border-border-default/50">
        <div className="relative rounded-2xl shrink-0 size-[88px] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 flex-1 min-w-0">
          <div>
            <p className="font-semibold text-[18px] text-text-primary leading-snug">{item.title}</p>
            <p className="text-[11px] text-text-secondary leading-snug">{item.meta}</p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[18px] text-gold leading-snug">{item.price}</span>
              <span className="text-[11px] text-brand-medium/70 text-right flex-1">{item.donation}</span>
            </div>
            <p className="text-[11px] text-text-secondary mt-0.5">{item.seller}</p>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "featured") {
    return (
      <div className="flex flex-col h-full rounded-[32px] border border-border-default bg-card shadow-[var(--shadow-listing-card)] overflow-hidden">
        {/* flex-basis 53% in a flex-col gives image ~53% of card height */}
        <div className="relative w-full overflow-hidden" style={{ flex: "0 0 53%" }}>
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-4 xl:gap-6 px-6 xl:px-8 py-6 xl:py-8 flex-1">
          <div className="flex flex-col gap-1">
            <p className="font-bold text-2xl xl:text-[32px] text-text-primary leading-tight">{item.title}</p>
            <p className="text-sm xl:text-base text-text-secondary leading-snug">{item.meta}</p>
          </div>
          <div className="flex flex-col gap-2 xl:gap-3">
            <div className="flex items-center gap-3 justify-between">
              <span className="font-bold text-3xl xl:text-4xl text-gold leading-snug">{item.price}</span>
              <span className="text-sm xl:text-base text-brand-medium/70 text-right flex-1">{item.donation}</span>
            </div>
            <p className="text-sm xl:text-base text-text-secondary/70">{item.seller}</p>
          </div>
        </div>
      </div>
    );
  }

  // desktop — small grid card
  return (
    <div className="flex flex-col rounded-2xl border border-border-default bg-card shadow-[var(--shadow-listing-card-sm)] overflow-hidden">
      <div className="relative h-[180px] lg:h-[220px] w-full shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-3 px-4 lg:px-5 py-4 lg:py-5 flex-1">
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-base lg:text-lg text-text-primary leading-snug">{item.title}</p>
          <p className="text-sm text-text-secondary">{item.meta}</p>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 justify-between">
            <span className="font-semibold text-lg lg:text-xl text-gold">{item.price}</span>
            <span className="text-sm text-brand-medium/70 text-right">{item.donation}</span>
          </div>
          <p className="text-sm text-text-secondary/70">{item.seller}</p>
        </div>
      </div>
    </div>
  );
}
