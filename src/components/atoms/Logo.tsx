// Figma logo (node I22:3544;433:1658) — base dimensions 93.4 × 30.498 px
// Assets are saved locally in /public/logos/ to avoid Figma URL expiry.
const BASE_W = 93.4;
const BASE_H = 30.498;

const logo = "/icons/logo.png";

type LogoProps = {
  className?: string;
  variant?: "default" | "white";
  /** Height in px — width scales proportionally from the 93.4:30.498 native ratio */
  height?: number;
};

export function Logo({ className = "", variant = "default", height = 40 }: Readonly<LogoProps>) {
  const scale = height / BASE_H;
  const width  = Math.round(BASE_W * scale);

  return (
    <div
      className={`flex items-center justify-center`}
      style={{ width, height }}
    >          <img src={logo} alt="Tzedar" />   
        <p className="text-2xl font-bold text-sidebar-accent ml-2">
          tzedar
        </p>
 
    </div>
  );
}
