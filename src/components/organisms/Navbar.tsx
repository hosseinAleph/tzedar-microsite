import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/atoms/Logo"
import { TzButton } from "@/components/atoms/TzButton"
import { TzLink } from "@/components/atoms/TzLink"

const navLinks = [
  { label: "how it works", href: "#how-it-works" },
  { label: "charities", href: "#charities" },
  { label: "pricing", href: "#pricing" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background shadow-[var(--shadow-navbar)]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <div className="flex items-center gap-10">
            <Link to="/" aria-label="Tzedar home">
              <Logo height={40} />
            </Link>
            <nav className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <TzLink
                  key={link.label}
                  href={link.href}
                  className="rounded-full px-4 py-2"
                >
                  {link.label}
                </TzLink>
              ))}
            </nav>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <TzButton size="sm" href="#app-download">
              Get the app
            </TzButton>
          </div>

          <button
            className="rounded-lg p-2 transition-colors hover:bg-brand-surface md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6 text-brand-dark" />
            ) : (
              <Menu className="h-6 w-6 text-brand-dark" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border-default bg-background px-6 pb-6 md:hidden">
          <nav className="flex flex-col gap-1 pt-4">
            {navLinks.map((link) => (
              <TzLink
                key={link.label}
                href={link.href}
                className="rounded-xl px-4 py-3"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </TzLink>
            ))}
            <TzButton href="#app-download">Get the app</TzButton>
            <TzButton href="/join">Join as a cause</TzButton>
          </nav>
        </div>
      )}
    </header>
  )
}
