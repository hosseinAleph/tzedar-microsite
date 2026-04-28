import { cn } from "@/lib/utils";

type HowItWorksStepProps = Readonly<{
  step: string;
  title: string;
  description: string;
  image: string;
  isActive: boolean;
  stepIndex: number;
  layout: "desktop" | "mobile";
  onClick: () => void;
}>;

const collapsedBg = ["bg-brand-medium", "bg-brand-medium", "bg-brand-light"];

export function HowItWorksStep({
  step,
  title,
  description,
  image,
  isActive,
  stepIndex,
  layout,
  onClick,
}: HowItWorksStepProps) {
  /* ── Desktop collapsed: full-width horizontal pill ── */
  if (layout === "desktop" && !isActive) {
    return (
      <button
        onClick={onClick}
        aria-label={`Expand: ${title}`}
        className={cn(
          "w-full flex items-center gap-6 px-14 py-6 rounded-full cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand shrink-0",
          collapsedBg[stepIndex],
        )}
      >
        <div className="w-14 h-14 shrink-0 rounded-full flex items-center justify-center bg-gold-surface border-2 border-primary-foreground backdrop-blur-sm">
          <span className="font-semibold text-2xl text-gold leading-none">{step}</span>
        </div>
        <span className="font-bold text-4xl lg:text-5xl text-primary-foreground leading-none whitespace-nowrap">{title}</span>
      </button>
    );
  }

  /* ── Mobile collapsed: narrow vertical pill ── */
  if (layout === "mobile" && !isActive) {
    return (
      <button
        onClick={onClick}
        aria-label={`Expand: ${title}`}
        className={cn(
          "flex flex-col items-center justify-between py-3 shrink-0 cursor-pointer rounded-[24px] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
          "w-10",
          collapsedBg[stepIndex],
        )}
      >
        <div className="w-7 h-7 rounded-full flex items-center justify-center bg-gold-surface border border-primary-foreground shrink-0">
          <span className="font-semibold text-[10px] text-gold leading-none">{step}</span>
        </div>
        <div className="flex-1 flex items-center justify-center overflow-hidden py-2">
          <span
            className="font-semibold text-xs text-primary-foreground whitespace-nowrap"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            {title}
          </span>
        </div>
      </button>
    );
  }

  /* ── Expanded card (shared between desktop and mobile) ── */
  return (
    <div
      className={cn(
        "relative overflow-hidden border border-border-subtle shadow-[var(--shadow-step-card)]",
        "transition-all duration-500 ease-out",
        "animate-in duration-400",
        layout === "desktop"
          ? "w-full h-[360px] lg:h-[460px] shrink-0 rounded-[32px] lg:rounded-[48px]"
          : "flex-1 min-w-0 rounded-[24px]",
      )}
      style={{
        background: "var(--gradient-step-card)",
        backdropFilter: "blur(16px)",
      }}
    >
      {/* Inner image — fades in with a subtle scale */}
      <div className="absolute inset-[6px] sm:inset-[7px] rounded-[18px] sm:rounded-[24px] lg:rounded-[32px] overflow-hidden border border-[var(--inner-border-color)] animate-in zoom-in-95 duration-500">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "var(--gradient-dark-content)" }}
        />
      </div>

      {/* Step badge */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8 z-10">
        <div
          className={cn(
            "rounded-full flex items-center justify-center bg-gold-surface border-2 border-primary-foreground",
            layout === "desktop" ? "w-14 h-14 lg:w-16 lg:h-16" : "w-8 h-8",
          )}
        >
          <span
            className={cn(
              "font-semibold text-brand-light leading-none",
              layout === "desktop" ? "text-2xl lg:text-2xl" : "text-xs",
            )}
          >
            {step}
          </span>
        </div>
      </div>

      {/* Text — slides up slightly after the image fades in */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-8 lg:p-10 flex flex-col gap-1 sm:gap-2 animate-in slide-in-from-bottom-3 duration-500 delay-150">
        <p
          className={cn(
            "font-bold text-primary-foreground leading-tight",
            layout === "desktop" ? "text-3xl lg:text-5xl" : "text-xl",
          )}
        >
          {title}
        </p>
        <p
          className={cn(
            "text-brand-pale leading-snug opacity-90",
            layout === "desktop" ? "text-base lg:text-2xl" : "text-xs",
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
