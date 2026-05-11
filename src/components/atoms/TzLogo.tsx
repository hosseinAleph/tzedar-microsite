import logoWhite from "@/assets/images/logo-white.png"
import logoDefault from "@/assets/images/logo-default.png"

const BASE_W = 93.4
const BASE_H = 30.498

type TzLogoProps = {
  className?: string
  variant?: "default" | "white"
  /** Height in px — width scales proportionally from the 93.4:30.498 native ratio */
  height?: number
}

export function TzLogo({
  variant = "default",
  height = 40,
  className,
}: Readonly<TzLogoProps>) {
  const scale = height / BASE_H
  const width = Math.round(BASE_W * scale)

  return (
    <img
      src={variant === "white" ? logoWhite : logoDefault}
      alt="Tzedar"
      className={className}
      style={{ width, height }}
    />
  )
}
