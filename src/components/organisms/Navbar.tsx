import { useState } from "react"
import { TzLogo } from "@/components/atoms/TzLogo"
import { TzButton } from "@/components/atoms/TzButton"
import { TzLink } from "@/components/atoms/TzLink"
import imgClose from "@/assets/images/close.svg"
import imgMenu from "@/assets/images/menu.svg"

const navLinks = [
  { label: "how it works", href: "/#how-it-works" },
  { label: "charities", href: "/#charities" },
  { label: "pricing", href: "/#pricing" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background shadow-(--shadow-navbar)">
      <div className="mx-auto max-w-7xl px-2 lg:px-12">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <div className="flex items-center gap-10">
            <TzLogo height={48} />
            <nav className="hidden gap-10 lg:flex">
              {navLinks.map((link) => (
                <TzLink key={link.label} href={link.href}>
                  {link.label}
                </TzLink>
              ))}
            </nav>
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <TzButton href="/#app-download">Get the app</TzButton>
          </div>

          <button
            className="rounded-lg p-2 transition-colors hover:bg-brand-surface
              lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <img src={imgClose} alt="Close" className="h-7 w-7" />
            ) : (
              <img src={imgMenu} alt="Menu" className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="absolute top-[calc(4rem-1px)] right-0 left-16
            h-[calc(100dvh-4rem)] border-t border-border-default bg-background
            px-6 pb-24 lg:hidden"
        >
          <div className="absolute -left-16 h-full w-16 bg-black opacity-70" />
          <nav className="flex h-full w-full flex-col gap-10 pt-10">
            {navLinks.map((link) => (
              <TzLink
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </TzLink>
            ))}
          </nav>

          <TzButton
            size="sm"
            href="/#app-download"
            className="z-50 w-full"
            onClick={() => {
              setMobileOpen(false)
            }}
          >
            Get the app
          </TzButton>
        </div>
      )}
    </header>
  )
}
