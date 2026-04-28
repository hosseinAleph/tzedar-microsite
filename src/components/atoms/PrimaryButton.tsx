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
      "text-primary-foreground",
      "shadow-[var(--shadow-primary-btn)]",
      "shadow-[var(--shadow-primary-btn-inset)]",
    ],
    variant === "ghost" && "text-primary-foreground hover:bg-primary-foreground/10",
    className,
  );

  const solidStyle =
    variant === "solid"
      ? { backgroundImage: "var(--gradient-btn-primary)" }
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
