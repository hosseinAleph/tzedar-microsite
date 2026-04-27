const logoEllipse = "https://www.figma.com/api/mcp/asset/78c4d198-e29b-4907-a2c5-cc2970f73f7b";
const logoVector = "https://www.figma.com/api/mcp/asset/f5d66cfd-17d2-46e9-a069-585c6131cfc0";
const logoWordmark = "https://www.figma.com/api/mcp/asset/cf606fb7-ff23-42c0-a456-f19ccd829ccb";

type LogoProps = {
  className?: string;
  variant?: "default" | "white";
  size?: "sm" | "md" | "lg";
};

export function Logo({ className = "", variant = "default", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-8",
    md: "h-10",
    lg: "h-14",
  };

  return (
    <div className={`flex items-center gap-2 ${sizeClasses[size]} ${className}`}>
      <div className="relative h-full aspect-square shrink-0">
        <img
          src={logoEllipse}
          alt=""
          className="absolute inset-0 w-full h-full object-contain"
        />
        <img
          src={logoVector}
          alt=""
          className="absolute inset-[5%] w-[90%] h-[90%] object-contain"
        />
      </div>
      <img
        src={logoWordmark}
        alt="Tzedar"
        className={`h-[55%] w-auto object-contain ${variant === "white" ? "brightness-0 invert" : ""}`}
      />
    </div>
  );
}
