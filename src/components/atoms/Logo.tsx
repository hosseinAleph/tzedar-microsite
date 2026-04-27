// Figma navbar logo (node I299:7623): total 147 × 48 px
// – icon circle  : 48 × 48 px, left-aligned
// – wordmark     : starts at left 36.73 %, top 25 %, bottom 25.22 %, right 0
const logoEllipse  = "https://www.figma.com/api/mcp/asset/78c4d198-e29b-4907-a2c5-cc2970f73f7b";
const logoIcon     = "https://www.figma.com/api/mcp/asset/f5d66cfd-17d2-46e9-a069-585c6131cfc0";
const logoWordmark = "https://www.figma.com/api/mcp/asset/cf606fb7-ff23-42c0-a456-f19ccd829ccb";

type LogoProps = {
  className?: string;
  variant?: "default" | "white";
  /** Height in px — width scales proportionally from the 147:48 native ratio */
  height?: number;
};

export function Logo({ className = "", variant = "default", height = 40 }: LogoProps) {
  const scale  = height / 48;               // Figma source height is 48 px
  const width  = Math.round(147 * scale);   // proportional width
  const icon   = height;                    // icon circle is a square = full height

  // Wordmark bounding box (Figma percentages → px)
  const wmLeft   = Math.round(width  * 0.3673);
  const wmTop    = Math.round(height * 0.25);
  const wmWidth  = width  - wmLeft;
  const wmHeight = Math.round(height * (1 - 0.25 - 0.2522));

  return (
    <div
      className={`relative shrink-0 ${className}`}
      style={{ width, height }}
    >
      {/* ── Icon: circle background ── */}
      <img
        src={logoEllipse}
        alt=""
        style={{ position: "absolute", top: 0, left: 0, width: icon, height: icon }}
      />

      {/* ── Icon: leaf/T vector inside the circle ── */}
      <img
        src={logoIcon}
        alt=""
        style={{
          position: "absolute",
          top:    Math.round(1.25  * scale),
          left:   Math.round(2.63  * scale),
          width:  Math.round(39.26 * scale),
          height: Math.round(44.55 * scale),
        }}
      />

      {/* ── Wordmark: "tzedar" text — explicit w/h prevent SVG overflow ── */}
      <img
        src={logoWordmark}
        alt="Tzedar"
        style={{
          position: "absolute",
          top:    wmTop,
          left:   wmLeft,
          width:  wmWidth,
          height: wmHeight,
          objectFit: "contain",
          objectPosition: "left center",
        }}
        className={variant === "white" ? "brightness-0 invert" : ""}
      />
    </div>
  );
}
