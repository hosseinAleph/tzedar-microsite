import { cn } from "@/lib/utils";

type HowItWorksStepProps = Readonly<{
  step: string;
  title: string;
  description: string;
  image: string;
  isActive: boolean;
  stepIndex: number;
  onClick: () => void;
}>;

const collapsedColors = [
  "bg-brand-medium",   // step 01 when collapsed (shouldn't happen usually but safe)
  "bg-brand-medium",   // step 02 collapsed
  "bg-brand-light",    // step 03 collapsed
];

export function HowItWorksStep({
  step,
  title,
  description,
  image,
  isActive,
  stepIndex,
  onClick,
}: HowItWorksStepProps) {
  if (!isActive) {
    return (
      <button
        onClick={onClick}
        aria-label={`Expand step ${step}: ${title}`}
        className={cn(
          "flex flex-col items-center justify-between py-3 px-0 shrink-0 cursor-pointer rounded-[24px] sm:rounded-[32px] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
          "w-10 sm:w-11",
          collapsedColors[stepIndex],
        )}
      >
        {/* Step badge at top */}
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center bg-gold-surface border border-white shrink-0">
          <span className="font-semibold text-[10px] sm:text-xs text-gold leading-none">{step}</span>
        </div>

        {/* Rotated title */}
        <div className="flex-1 flex items-center justify-center overflow-hidden py-2">
          <span
            className="font-semibold text-sm sm:text-base text-white whitespace-nowrap"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            {title}
          </span>
        </div>
      </button>
    );
  }

  return (
    <div
      className="relative flex-1 min-w-0 rounded-[24px] sm:rounded-[32px] overflow-hidden border border-[#eee] shadow-[0px_16px_35px_rgba(21,32,30,0.04)] transition-all duration-300"
      style={{
        background: "linear-gradient(to bottom, rgba(150,192,224,0.7), rgba(21,59,46,0.7))",
        backdropFilter: "blur(16px)",
      }}
    >
      {/* Inner image container */}
      <div className="absolute inset-[6px] sm:inset-[7px] rounded-[18px] sm:rounded-[24px] overflow-hidden border border-[rgba(124,139,137,0.27)]">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.82) 100%)",
          }}
        />
      </div>

      {/* Step badge */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
        <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-gold-surface border-2 border-white">
          <span className="font-semibold text-xs sm:text-lg text-brand-light leading-none">{step}</span>
        </div>
      </div>

      {/* Text */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-8 flex flex-col gap-1 sm:gap-2">
        <p className="font-bold text-xl sm:text-3xl lg:text-4xl text-white leading-tight">{title}</p>
        <p className="text-xs sm:text-base lg:text-lg text-[#f2f9f7] leading-snug opacity-90">{description}</p>
      </div>
    </div>
  );
}
