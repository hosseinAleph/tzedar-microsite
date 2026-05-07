import { cn } from "@/lib/utils"

type ListingItem = {
  image: string
  title: string
  meta: string
  price: string
  received_by: string
  shared_with: string
}

type ListingCardProps = Readonly<{
  item: ListingItem
  variant?: "featured" | "desktop" | "mobile"
}>

const TransactionInfo = ({
  shared_with,
  received_by,
  isSmall = false,
}: {
  shared_with: string
  received_by: string
  isSmall?: boolean
}): React.ReactNode => {
  return (
    <div>
      <p className={cn("truncate text-brand-medium/70", isSmall && "text-sm")}>
        Shared with: {shared_with}
      </p>
      <p className={cn("truncate text-brand-medium/70", isSmall && "text-sm")}>
        Received by: {received_by}
      </p>
    </div>
  )
}

export function ListingCard({ item, variant = "desktop" }: ListingCardProps) {
  if (variant === "mobile") {
    return (
      <div className="flex items-start gap-6 border-b border-border-default/50 pb-4">
        <div className="relative size-[88px] shrink-0 overflow-hidden rounded-2xl">
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <div>
            <p className="truncate text-[18px] leading-snug font-semibold text-text-primary">
              {item.title}
            </p>
            <p className="text-[11px] leading-snug text-text-secondary">
              {item.meta}
            </p>
          </div>
          <div>
            <p className="text-[18px] leading-snug text-gold">Discovered at</p>
            <p className="text-[18px] leading-snug font-semibold text-gold">
              {item.price}
            </p>
          </div>
          <div>
            <TransactionInfo
              shared_with={item.shared_with}
              received_by={item.received_by}
              isSmall
            />
          </div>
        </div>
      </div>
    )
  }

  if (variant === "featured") {
    return (
      <div className="flex flex-col overflow-hidden rounded-[32px] border border-border-default bg-card shadow-(--shadow-listing-card)">
        <div className="relative h-[484px] w-full overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex h-[400px] flex-col justify-center gap-4 px-6 py-6 xl:gap-6 xl:px-8 xl:py-8">
          <div className="flex flex-col gap-1">
            <p className="truncate text-2xl leading-tight font-bold text-text-primary xl:text-[32px]">
              {item.title}
            </p>
            <p className="text-sm leading-snug text-text-secondary xl:text-base">
              {item.meta}
            </p>
          </div>
          <p className="text-[18px] leading-snug text-gold">Discovered at</p>
          <p className="text-3xl leading-snug font-bold text-gold xl:text-4xl">
            {item.price}
          </p>

          <TransactionInfo
            shared_with={item.shared_with}
            received_by={item.received_by}
          />
        </div>
      </div>
    )
  }

  // desktop — small grid card
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-border-default bg-card shadow-(--shadow-listing-card-sm)">
      <div className="relative h-[220px] w-full shrink-0 lg:h-[220px]">
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="flex h-[210px] flex-col gap-3 px-4 py-4 lg:px-5 lg:py-5">
        <div className="flex flex-col gap-1">
          <p className="truncate text-base leading-snug font-semibold text-text-primary lg:text-lg">
            {item.title}
          </p>
          <p className="text-sm text-text-secondary">{item.meta}</p>
        </div>

        <p className="text-[18px] leading-snug text-gold">Discovered at</p>
        <p className="text-lg font-semibold text-gold lg:text-xl">
          {item.price}
        </p>
        <TransactionInfo
          shared_with={item.shared_with}
          received_by={item.received_by}
          isSmall
        />
      </div>
    </div>
  )
}
