import { cn } from "@/lib/utils"

type HowItWorksStepProps = Readonly<{
  step: string
  title: string
  description: string
  image: string
  isActive: boolean
  stepIndex: number
  layout: "desktop" | "mobile"
  onClick: () => void
}>

const collapsedBg = ["bg-brand-dark", "bg-brand-medium", "bg-brand-light"]

// Per-step expanded card gradients matched to Figma (node 221-1476).
// Colors: blue-800 #142c4a | pale-blue-500 #6b9db8 | pale-blue-400 #9fc5e0, all at 70% opacity.
const stepGradients = [
  // Step 0 (photo): blue-800 → pale-blue-500  [dark → medium]
  "linear-gradient(to bottom, rgba(20,44,74,0.7), rgba(107,157,184,0.7))",
  // Step 1 (cause): pale-blue-500 → pale-blue-400  [medium → light]
  "linear-gradient(to bottom, rgba(107,157,184,0.7), rgba(159,197,224,0.7))",
  // Step 2 (share): pale-blue-500 → pale-blue-400  [medium → light]
  "linear-gradient(to bottom, rgba(107,157,184,0.7), rgba(159,197,224,0.7))",
]

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
          `flex w-full shrink-0 cursor-pointer items-center gap-6 rounded-full
          px-14 py-6 transition-all duration-300 focus-visible:ring-2
          focus-visible:ring-brand focus-visible:outline-none`,
          collapsedBg[stepIndex]
        )}
      >
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center
            rounded-full border-2 border-primary-foreground bg-gold-surface
            backdrop-blur-sm"
        >
          <span className="text-2xl leading-none font-semibold text-gold">
            {step}
          </span>
        </div>
        <span
          className="text-4xl leading-none font-bold whitespace-nowrap
            text-primary-foreground lg:text-5xl"
        >
          {title}
        </span>
      </button>
    )
  }

  /* ── Mobile collapsed: narrow vertical pill ── */
  if (layout === "mobile" && !isActive) {
    return (
      <button
        onClick={onClick}
        aria-label={`Expand: ${title}`}
        className={cn(
          `flex shrink-0 cursor-pointer flex-col items-center justify-end gap-2
          rounded-[24px] py-3 transition-all duration-300 focus-visible:ring-2
          focus-visible:ring-brand focus-visible:outline-none`,
          "w-10",
          collapsedBg[stepIndex]
        )}
      >
        <span
          className="text-base font-semibold whitespace-nowrap
            text-primary-foreground"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          {title}
        </span>
        <div
          className="flex h-7 w-7 shrink-0 items-center justify-center
            rounded-full border border-primary-foreground bg-gold-surface"
        >
          <span className="text-[10px] leading-none font-semibold text-gold">
            {step}
          </span>
        </div>
      </button>
    )
  }

  /* ── Expanded card (shared between desktop and mobile) ── */
  return (
    <div
      className={cn(
        `relative overflow-hidden border border-border-subtle
        shadow-(--shadow-step-card)`,
        "transition-all duration-500 ease-out",
        "animate-in duration-400",
        layout === "desktop"
          ? "h-[360px] w-full shrink-0 rounded-[50px] lg:h-[460px]"
          : "min-w-0 flex-1 rounded-[32px]"
      )}
      style={{
        background: stepGradients[stepIndex] ?? stepGradients[0],
        backdropFilter: "blur(16px)",
      }}
    >
      <div
        className={cn(
          `absolute animate-in overflow-hidden border
          border-(--inner-border-color) duration-500 zoom-in-95`,
          layout === "desktop"
            ? "inset-[14px] rounded-[34px]"
            : "inset-[8px] rounded-[22px]"
        )}
      >
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "var(--gradient-dark-content)" }}
        />
      </div>

      {/* Step badge */}
      <div
        className="absolute top-4 left-4 z-10 sm:top-6 sm:left-6 lg:top-8
          lg:left-8"
      >
        <div
          className={cn(
            `flex items-center justify-center rounded-full border-2
            border-primary-foreground bg-gold-surface`,
            layout === "desktop" ? "h-14 w-14 lg:h-16 lg:w-16" : "h-8 w-8"
          )}
        >
          <span
            className={cn(
              "leading-none font-semibold text-brand-light",
              layout === "desktop" ? "text-2xl lg:text-2xl" : "text-xs"
            )}
          >
            {step}
          </span>
        </div>
      </div>

      {/* Text — slides up slightly after the image fades in */}
      <div
        className="absolute right-0 bottom-0 left-0 z-10 flex animate-in
          flex-col gap-1 p-5 sm:gap-2 sm:p-8 lg:p-10"
      >
        <p
          className={cn(
            "leading-tight font-bold text-primary-foreground",
            layout === "desktop" ? "text-3xl lg:text-5xl" : "text-xl"
          )}
        >
          {title}
        </p>
        <p
          className={cn(
            "leading-snug text-brand-pale opacity-90",
            layout === "desktop" ? "text-base lg:text-2xl" : "text-xs"
          )}
        >
          {description}
        </p>
      </div>
    </div>
  )
}
