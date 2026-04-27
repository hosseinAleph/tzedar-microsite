import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type PrimaryButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "solid" | "ghost";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  className?: string;
};

export function PrimaryButton({
  children,
  onClick,
  href,
  variant = "solid",
  size = "md",
  showArrow = false,
  className,
}: PrimaryButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-3 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const baseClasses = cn(
    "inline-flex items-center gap-2 rounded-full font-semibold transition-all duration-200 cursor-pointer select-none",
    sizeClasses[size],
    variant === "solid" && [
      "text-white",
      "shadow-[0px_2px_2.5px_rgba(61,140,110,0.25)]",
      "shadow-[inset_0px_-2px_2px_rgba(30,96,73,0.15),inset_0px_1px_1px_rgba(255,255,255,0.1)]",
    ],
    variant === "ghost" && "text-white hover:bg-white/10",
    className,
  );

  const solidStyle =
    variant === "solid"
      ? { backgroundImage: "linear-gradient(175deg, #5ba88a 5%, #3d8c6e 87%)" }
      : undefined;

  if (href) {
    return (
      <a href={href} className={baseClasses} style={solidStyle}>
        {children}
        {showArrow && <ArrowRight className="w-4 h-4" />}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses} style={solidStyle}>
      {children}
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </button>
  );
}
