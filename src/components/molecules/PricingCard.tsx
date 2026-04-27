import { Badge } from "@/components/atoms/Badge";

type PricingCardProps = {
  type: "subscription" | "commission";
};

export function PricingCard({ type }: PricingCardProps) {
  const isSubscription = type === "subscription";

  return (
    <div className="flex-1 min-w-0 flex flex-col gap-4 items-end border border-[#d4ddd4] rounded-2xl pt-6 px-4 pb-10 shadow-[0px_4px_2px_rgba(0,0,0,0.25)] bg-transparent">
      <Badge variant="green">
        {isSubscription ? "Annual Subscription" : "Commissions"}
      </Badge>

      <div className="flex flex-col gap-2 items-start w-full">
        <div className="flex flex-col items-start">
          {isSubscription ? (
            <div className="flex items-baseline font-bold text-gold leading-none tracking-tight">
              <span className="text-4xl">$</span>
              <span className="text-7xl">1</span>
            </div>
          ) : (
            <div className="font-bold text-gold leading-none tracking-tight">
              <span className="text-7xl">%</span>
            </div>
          )}
          <p className="text-base text-text-secondary/70 mt-1 leading-snug">
            {isSubscription ? "per year" : "of final sale price above $1"}
          </p>
        </div>

        <div className="flex flex-col gap-4 mt-2 w-full">
          <p className="font-semibold text-xl text-brand-darkest leading-snug">
            {isSubscription ? "to unlock unlimited listings" : "only when you sell"}
          </p>
          <p className="text-base text-brand-darkest/70 leading-snug">
            {isSubscription
              ? "Pay once a year. List as many items as you want. The $1 covers platform access — nothing more. Collected securely at sign-up."
              : "Commission is calculated on the amount above your $1 floor. If the item sells for exactly $1, there's no commission at all."}
          </p>
        </div>
      </div>
    </div>
  );
}
