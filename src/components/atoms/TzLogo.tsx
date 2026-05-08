// Figma logo (node I22:3544;433:1658) — base dimensions 93.4 × 30.498 px
// Assets are saved locally in /public/logos/ to avoid Figma URL expiry.
const BASE_W = 93.4
const BASE_H = 30.498

const logoWhite = "/images/logo-white.png"
const logoDefault = "/images/logo-default.png"

type TzLogoProps = {
  className?: string
  variant?: "default" | "white"
  /** Height in px — width scales proportionally from the 93.4:30.498 native ratio */
  height?: number
}

export function TzLogo({
  variant = "default",
  height = 40,
}: Readonly<TzLogoProps>) {
  const scale = height / BASE_H
  const width = Math.round(BASE_W * scale)

  return (
    <div className={"flex items-center justify-center"}>
      <img
        src={variant === "white" ? logoWhite : logoDefault}
        alt="Tzedar"
        style={{ width, height }}
      />
    </div>
  )
}
