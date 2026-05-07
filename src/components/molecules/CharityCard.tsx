type CharityCardProps = Readonly<{
  image: string
  name: string
  description: string
  location: string
}>

// marker-pin-icon
const marker = "/images/marker-pin-icon.png"
const verifiedCheck = "/images/verification-icon.png"

export function CharityCard({
  image,
  name,
  description,
  location,
}: CharityCardProps) {
  return (
    /* Outer frosted card */
    <div
      className="relative h-[420px] w-[264px] shrink-0 overflow-hidden rounded-[24px] border border-border-subtle shadow-(--shadow-charity-card) sm:h-[479px] sm:w-[280px]"
      style={{
        background: "var(--gradient-frosted-card)",
        backdropFilter: "blur(32px)",
        WebkitBackdropFilter: "blur(32px)",
      }}
    >
      {/* Inner inset image container */}
      <div className="absolute inset-[7px] overflow-hidden rounded-2xl border border-(--inner-border-color)">
        {/* Photo — no full-image blur; stays sharp at the top */}
        <img
          src={image}
          alt={name}
          className="absolute inset-0 h-full w-full rounded-2xl object-cover"
        />

        {/*
          Image Mask — covers the bottom 55%.
          backdrop-filter blurs only the region behind this overlay.
          mask-image fades the blur in gradually from top, so the
          transition from clear to frosted is smooth.
        */}
        <div
          className="absolute right-0 bottom-0 left-0 rounded-b-2xl"
          style={{
            height: "55%",
            backdropFilter: "blur(11px)",
            WebkitBackdropFilter: "blur(11px)",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 30%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 30%)",
            backgroundImage: "var(--gradient-image-mask)",
          }}
        />

        {/* Dark gradient overlay — bottom 48% — makes text readable */}
        <div
          className="absolute right-0 bottom-0 left-0 mix-blend-overlay"
          style={{
            height: "48%",
            backgroundImage: "var(--gradient-dark-overlay-1)",
          }}
        />
        <div
          className="absolute right-0 bottom-0 left-0"
          style={{
            height: "48%",
            backgroundImage: "var(--gradient-dark-overlay-2)",
          }}
        />

        {/* Inner highlight ring */}
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-(--shadow-highlight-inset)" />
      </div>

      {/* Profile info — pinned to bottom */}
      <div className="absolute right-0 bottom-0 left-0 flex flex-col gap-2 p-6">
        <div className="flex items-center gap-2">
          {/* truncate more than 1 line */}
          <p className="text-lg leading-snug font-semibold text-surface-bright">
            {name}
          </p>
          <div className="relative h-6 w-6 shrink-0">
            <img
              src={verifiedCheck}
              alt=""
              className="absolute inset-[20%] h-[60%] w-[60%]"
            />
          </div>
        </div>
        {/* truncate more than 2 line */}

        <p className="line-clamp-2 text-sm leading-snug text-surface-bright opacity-90">
          {description}
        </p>
        <div className="flex items-center gap-1">
          <div className="relative h-4 w-4 shrink-0">
            <img
              src={marker}
              alt=""
              className="absolute inset-0 h-full w-full"
            />
          </div>
          <p className="text-xs leading-snug font-thin text-surface-bright opacity-90">
            {location}
          </p>
        </div>
      </div>
    </div>
  )
}
