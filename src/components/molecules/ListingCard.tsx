import { cn } from "@/lib/utils"

type ListingItem = {
  image: string
  title: string
  meta: string
  price: string
  receivedBy: string
  sharedWith: string
  linkToCharity: string
  dateOfShare: string
}

type ListingCardProps = Readonly<{
  item: ListingItem
  variant?: "featured" | "default"
}>

const TransactionInfo = ({
  sharedWith,
  receivedBy,
  isSmall = false,
  dateOfShare,
  linkToCharity,
}: {
  sharedWith: string
  receivedBy: string
  isSmall?: boolean
  linkToCharity: string
  dateOfShare: string
}): React.ReactNode => {
  return (
    <div>
      {/* add link to charity with title shareWith variable */}
      <p
        className={cn(
          "truncate text-[28px] leading-tight text-brand-medium/70",
          isSmall && "text-sm"
        )}
      >
        Shared with:{" "}
        <a
          href={linkToCharity}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "leading-tight font-normal text-green-accent opacity-70",
            isSmall ? "text-[14px]" : "text-[28px]"
          )}
        >
          {sharedWith}
        </a>{" "}
        on {dateOfShare}
      </p>
      <p
        className={cn(
          "truncate text-[28px] leading-tight text-brand-medium/70",
          isSmall && "text-sm"
        )}
      >
        Received by: {receivedBy}
      </p>
    </div>
  )
}

export function ListingCard({ item, variant = "default" }: ListingCardProps) {
  if (variant === "featured") {
    return (
      <div
        className="flex flex-col overflow-hidden rounded-[32px] border
          border-border-default bg-card shadow-(--shadow-listing-card)"
      >
        <div className="relative h-[484px] w-full overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div
          className="flex h-[400px] flex-col justify-center gap-4 px-6 py-6
            xl:gap-6 xl:px-8 xl:py-8"
        >
          <div className="flex flex-col gap-1">
            <p
              className="truncate text-2xl leading-tight font-bold
                text-text-primary xl:text-[48px]"
            >
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
            dateOfShare={item.dateOfShare}
            sharedWith={item.sharedWith}
            receivedBy={item.receivedBy}
            linkToCharity={item.linkToCharity}
          />
        </div>
      </div>
    )
  }

  if (variant === "default") {
    return (
      <div
        className="flex items-start gap-6 border-b border-border-default/50 pb-4
          lg:flex-col lg:items-stretch lg:gap-0 lg:overflow-hidden
          lg:rounded-2xl lg:border lg:border-border-default lg:bg-card lg:pb-0
          lg:shadow-(--shadow-listing-card-sm)"
      >
        {/* Image: small square on mobile, full-width tall on lg */}
        <div
          className="relative h-[88px] w-[88px] shrink-0 overflow-hidden
            rounded-2xl lg:h-[220px] lg:w-full lg:rounded-none"
        >
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div
          className="flex min-w-0 flex-1 flex-col gap-2 lg:gap-4 lg:p-4 xl:p-5"
        >
          <div className="flex flex-col">
            <p
              className="truncate text-[18px] leading-tight font-semibold
                text-text-primary lg:text-2xl"
            >
              {item.title}
            </p>
            <p
              className="text-[11px] leading-snug text-text-secondary
                lg:text-sm"
            >
              {item.meta}
            </p>
          </div>

          <div>
            <p
              className="text-[11px] leading-tight text-gold opacity-70
                lg:text-sm lg:opacity-100"
            >
              Discovered at
            </p>
            <p
              className="text-[18px] leading-tight font-semibold text-gold
                lg:text-[28px]"
            >
              {item.price}
            </p>
          </div>

          <TransactionInfo
            dateOfShare={item.dateOfShare}
            sharedWith={item.sharedWith}
            receivedBy={item.receivedBy}
            linkToCharity={item.linkToCharity}
            isSmall
          />
        </div>
      </div>
    )
  }
}
