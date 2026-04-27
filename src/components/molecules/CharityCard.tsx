const verifiedStar  = "https://www.figma.com/api/mcp/asset/ed98512b-6123-4451-b826-66d3e1627617";
const verifiedCheck = "https://www.figma.com/api/mcp/asset/da1d30df-2d95-4b89-b41e-3d346c26b8b2";

type CharityCardProps = Readonly<{
  image: string;
  name: string;
  description: string;
}>;

export function CharityCard({ image, name, description }: CharityCardProps) {
  return (
    /* Outer frosted card */
    <div
      className="relative w-[260px] sm:w-[280px] h-[420px] sm:h-[479px] shrink-0 rounded-[24px] overflow-hidden border border-[#eee] shadow-[0px_16px_35px_rgba(21,32,30,0.04),0px_63px_63px_rgba(0,0,0,0.04)]"
      style={{
        background: "linear-gradient(to bottom, rgba(242,247,244,0.7), rgba(208,230,218,0.7))",
        backdropFilter: "blur(32px)",
        WebkitBackdropFilter: "blur(32px)",
      }}
    >
      {/* Inner inset image container */}
      <div className="absolute inset-[7px] rounded-2xl overflow-hidden border border-[rgba(124,139,137,0.27)]">

        {/* Photo — no full-image blur; stays sharp at the top */}
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/*
          Image Mask — covers the bottom 55%.
          backdrop-filter blurs only the region behind this overlay.
          mask-image fades the blur in gradually from top, so the
          transition from clear to frosted is smooth.
        */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "55%",
            backdropFilter: "blur(11px)",
            WebkitBackdropFilter: "blur(11px)",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 30%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 30%)",
            backgroundImage: "linear-gradient(to bottom, rgba(247,252,252,0) 31.5%, rgba(244,244,244,0.50) 79.4%)",
          }}
        />

        {/* Dark gradient overlay — bottom 48% — makes text readable */}
        <div
          className="absolute bottom-0 left-0 right-0 mix-blend-overlay"
          style={{
            height: "48%",
            backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.13) 8%, rgba(0,0,0,0.48) 47%, rgba(0,0,0,0.78) 84%, rgba(0,0,0,0.88) 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "48%",
            backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.006) 8%, rgba(0,0,0,0.022) 15%, rgba(0,0,0,0.088) 47%, rgba(0,0,0,0.319) 58%, rgba(0,0,0,0.575) 70%, rgba(0,0,0,0.777) 84%, rgba(0,0,0,0.88) 100%)",
          }}
        />

        {/* Inner highlight ring */}
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_8px_0px_rgba(255,255,255,0.15)]" />
      </div>

      {/* Profile info — pinned to bottom */}
      <div className="absolute bottom-0 left-0 right-0 px-7 pb-4 pt-5 flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <p className="font-semibold text-lg text-[#fafafa] leading-snug">{name}</p>
          <div className="relative shrink-0 w-6 h-6">
            <img src={verifiedStar}  alt="" className="absolute inset-0 w-full h-full" />
            <img src={verifiedCheck} alt="" className="absolute inset-[20%] w-[60%] h-[60%]" />
          </div>
        </div>
        <p className="text-sm text-[#fafafa] leading-snug opacity-90">{description}</p>
      </div>
    </div>
  );
}
