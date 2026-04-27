type ListingItem = {
  image: string;
  title: string;
  meta: string;
  price: string;
  donation: string;
  seller: string;
};

type ListingCardProps = {
  item: ListingItem;
  variant?: "desktop" | "mobile";
};

export function ListingCard({ item, variant = "desktop" }: ListingCardProps) {
  if (variant === "mobile") {
    return (
      <div className="flex gap-6 items-start pb-4 border-b border-[#d4ddd4]">
        <div className="relative rounded-2xl shrink-0 size-[88px] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 flex-1 min-w-0">
          <div>
            <p className="font-semibold text-lg text-text-primary leading-snug">{item.title}</p>
            <p className="text-xs text-text-secondary leading-snug">{item.meta}</p>
          </div>
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="font-semibold text-lg text-gold">{item.price}</span>
              <span className="text-xs text-brand-medium/70 text-right flex-1">{item.donation}</span>
            </div>
            <p className="text-xs text-text-secondary mt-0.5">{item.seller}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 min-w-0 rounded-[32px] border border-[#d4ddd4] bg-white shadow-[0px_8px_16px_rgba(21,29,23,0.08)] overflow-hidden">
      <div className="relative h-[220px] sm:h-[260px] w-full shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 px-6 py-6 flex-1">
        <div className="flex flex-col gap-1">
          <p className="font-bold text-2xl text-text-primary leading-snug">{item.title}</p>
          <p className="text-sm text-text-secondary">{item.meta}</p>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 justify-between">
            <span className="font-semibold text-2xl text-gold">{item.price}</span>
            <span className="text-sm text-brand-medium/70 text-right">{item.donation}</span>
          </div>
          <p className="text-sm text-text-secondary/70">{item.seller}</p>
        </div>
      </div>
    </div>
  );
}
