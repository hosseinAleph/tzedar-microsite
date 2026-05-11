import { Link } from "react-router-dom"
import { TzLogo } from "@/components/atoms/TzLogo"
import imgFb from "@/assets/images/logo-fb.svg"
import imgIg from "@/assets/images/logo-ig.svg"
import imgX from "@/assets/images/logo-x.svg"

const legalLinks = [
  { label: "Privacy Notice", href: "/privacy" },
  { label: "Terms and Conditions", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand">
      {/* ════════════════════════════════════════
          MOBILE  (< lg)
      ════════════════════════════════════════ */}
      <div className="relative flex flex-col gap-20 px-6 py-12 lg:hidden">
        {/* ── Top: logo + tagline + social ── */}
        <div className="relative z-10 flex flex-col gap-6">
          <TzLogo height={60} variant="white" />
          <p
            className="text-[18px] leading-snug font-semibold
              text-primary-foreground"
          >
            Value, shared.
          </p>

          <div className="flex items-center gap-8">
            <a
              href="https://facebook.com/tzedar"
              aria-label="Facebook"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <img
                src={imgFb}
                alt="Facebook"
                className="object-contain"
                width={26}
                height={30}
              />
            </a>
            <a
              href="https://instagram.com/tzedar"
              aria-label="Instagram"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <img
                src={imgIg}
                alt="Instagram"
                width={30}
                height={30}
                className="object-contain"
              />
            </a>
            <a
              href="https://x.com/tzedar"
              aria-label="X"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <img
                src={imgX}
                alt="X"
                className="object-contain"
                width={20}
                height={20}
              />
            </a>
          </div>
        </div>

        {/* ── Bottom: links row + copyright ── */}
        <div className="relative z-10 flex flex-col gap-4">
          <div className="flex w-full items-center gap-4">
            <Link
              to={legalLinks[0].href}
              className="shrink-0 text-[14px] whitespace-nowrap
                text-primary-foreground transition-opacity hover:opacity-80"
            >
              {legalLinks[0].label}
            </Link>
            <div
              className="border-border-[#3A75A8] flex min-w-0 flex-1
                items-center justify-center border-r border-l px-2"
            >
              <Link
                to={legalLinks[1].href}
                className="text-center text-[14px] leading-snug
                  text-primary-foreground transition-opacity hover:opacity-80"
              >
                {legalLinks[1].label}
              </Link>
            </div>
            <Link
              to={legalLinks[2].href}
              className="shrink-0 text-[14px] whitespace-nowrap
                text-primary-foreground transition-opacity hover:opacity-80"
            >
              {legalLinks[2].label}
            </Link>
          </div>
          <p
            className="text-center text-[14px] leading-snug
              text-primary-foreground"
          >
            © {new Date().getFullYear()} Tzedar. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* ════════════════════════════════════════
          DESKTOP  (lg+)
      ════════════════════════════════════════ */}
      <div className="relative hidden flex-col gap-10 px-20 pt-10 pb-12 lg:flex">
        {/* ── Top row: logo+tagline (left) · social icons (right, aligned to baseline) ── */}
        <div className="relative z-10 flex items-end justify-between">
          <div className="flex flex-col gap-2.5">
            <TzLogo height={60} variant="white" />
            <p
              className="text-[32px] leading-snug font-normal
                text-primary-foreground"
            >
              Value, shared.
            </p>
          </div>{" "}
          <div className="flex items-center gap-16">
            <a
              href="https://facebook.com/tzedar"
              aria-label="Facebook"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <img src={imgFb} alt="Facebook" className="object-contain" />
            </a>
            <a
              href="https://instagram.com/tzedar"
              aria-label="Instagram"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <img src={imgIg} alt="Instagram" className="object-contain" />
            </a>
            <a
              href="https://x.com/tzedar"
              aria-label="X"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <img src={imgX} alt="X" className="object-contain" />
            </a>
          </div>
        </div>

        {/* ── Bottom: stacked links (left-aligned) + centred copyright ── */}
        <div className="relative z-10 flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="w-fit text-[14px] text-primary-foreground
                  transition-opacity hover:opacity-80"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p
            className="w-full text-center text-[16px] font-semibold
              text-primary-foreground"
          >
            © {new Date().getFullYear()} Tzedar. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
