import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/atoms/Logo";
import { PrimaryButton } from "@/components/atoms/PrimaryButton";

const navLinks = [
  { label: "how it works", href: "#how-it-works" },
  { label: "charities", href: "#charities" },
  { label: "pricing", href: "#pricing" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.06),0px_1px_3px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-10">
            <a href="#" aria-label="Tzedar home">
              <Logo size="md" />
            </a>
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 rounded-full font-semibold text-brand-dark text-base hover:bg-brand-surface transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <PrimaryButton size="sm">Get the app</PrimaryButton>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-brand-surface transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6 text-brand-dark" /> : <Menu className="w-6 h-6 text-brand-dark" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[#d4ddd4] bg-white px-6 pb-6">
          <nav className="flex flex-col gap-1 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-3 rounded-xl font-semibold text-brand-dark text-base hover:bg-brand-surface transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <PrimaryButton size="sm" className="w-full justify-center">Get the app</PrimaryButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
