import { Badge } from "@/components/atoms/Badge"

type PricingCardProps = {
  type: "subscription" | "commission"
}

export function PricingCard({ type }: Readonly<PricingCardProps>) {
  const isSubscription = type === "subscription"

  return (
    <div
      className="flex min-w-0 flex-1 flex-col items-end gap-4 rounded-2xl border
        border-border-default bg-transparent px-4 py-6
        shadow-(--shadow-pricing-card)"
    >
      <Badge variant="green">
        {isSubscription ? "Annual Subscription" : "FOR A CAUSE"}
      </Badge>

      <div className="flex w-full flex-col items-start gap-2">
        <div className="flex flex-col items-start">
          {isSubscription ? (
            <div
              className="flex items-baseline leading-none font-bold
                tracking-tight text-gold"
            >
              <span className="text-4xl">$</span>
              <span className="text-7xl">1</span>
              <span className="ml-2 text-lg">per year</span>
            </div>
          ) : (
            <div className="leading-none font-bold tracking-tight text-gold">
              <span className="text-7xl">%</span>{" "}
              <span className="ml-2 text-lg">of final sale price</span>
            </div>
          )}
        </div>

        <div className="mt-2 flex w-full flex-col gap-4">
          <p className="text-xl leading-snug font-semibold text-brand-darkest">
            {isSubscription ? "to take part." : "will go to a cause."}
          </p>
          <p className="text-base leading-snug text-brand-darkest/70">
            {isSubscription
              ? "Pay $1, once a year. List as many items as you want. The $1 covers platform access, nothing more. Collected securely at sign-up."
              : "Many begin offering at $1, where value is discovered as people take part. Even then, part of it always supports a cause."}
          </p>
        </div>
      </div>
    </div>
  )
}
