import { Logo } from "@/components/atoms/Logo"

// Social icon assets (white, from Figma)
const imgFb =
  "https://www.figma.com/api/mcp/asset/d8d70eea-8807-4b22-bc4e-3daba9bead72"
const imgIg =
  "https://www.figma.com/api/mcp/asset/5d7f07ae-be01-4632-ad1a-49a93d81b342"
// Decorative glow (reused across mobile and desktop, repositioned via CSS)
const imgGlowMobile =
  "https://www.figma.com/api/mcp/asset/e1b393aa-5287-4a56-b2e2-27bf57304daa"
const imgGlowDesktop =
  "https://www.figma.com/api/mcp/asset/5b89edd0-9a56-45f7-a44a-5064a70cd6e2"

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
        {/* Decorative glow — Figma: centred vertically, left ≈ 166 px */}
        <img
          src={imgGlowMobile}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-[166px] w-[236px] -translate-y-1/2 opacity-60 mix-blend-plus-lighter"
        />

        {/* ── Top: logo + tagline + social ── */}
        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex flex-col gap-2.5">
            <Logo height={60} variant="white" />
            <p className="text-[18px] leading-snug font-semibold text-primary-foreground">
              Good things, going further.
            </p>
          </div>
          {/* Social icons — gap-32px (Figma). Explicit w+h to prevent distortion. */}
          {/* Figma mobile: FB 9.4×18px · IG 20×20px */}
          <div className="flex items-center gap-8">
            <a
              href="https://facebook.com/tzedar"
              aria-label="Facebook"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <img
                src={imgFb}
                alt="Facebook"
                style={{ width: "9px", height: "18px" }}
                className="object-contain"
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
                style={{ width: "20px", height: "20px" }}
                className="object-contain"
              />
            </a>
          </div>
        </div>

        {/* ── Bottom: links row + copyright ── */}
        {/* Figma: Privacy | Terms | Disclaimer as horizontal row, middle item has border-l/r */}
        <div className="relative z-10 flex flex-col gap-4">
          <div className="flex w-full items-center gap-4">
            <a
              href={legalLinks[0].href}
              className="shrink-0 text-[14px] whitespace-nowrap text-primary-foreground transition-opacity hover:opacity-80"
            >
              {legalLinks[0].label}
            </a>
            <div className="flex min-w-0 flex-1 items-center justify-center border-r border-l border-border-strong px-2">
              <a
                href={legalLinks[1].href}
                className="text-center text-[14px] leading-snug text-primary-foreground transition-opacity hover:opacity-80"
              >
                {legalLinks[1].label}
              </a>
            </div>
            <a
              href={legalLinks[2].href}
              className="shrink-0 text-[14px] whitespace-nowrap text-primary-foreground transition-opacity hover:opacity-80"
            >
              {legalLinks[2].label}
            </a>
          </div>
          <p className="text-center text-[14px] leading-snug text-primary-foreground">
            © {new Date().getFullYear()} Tzedar. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* ════════════════════════════════════════
          DESKTOP  (lg+)
      ════════════════════════════════════════ */}
      <div className="relative hidden flex-col gap-10 px-20 pt-10 pb-12 lg:flex">
        {/* Decorative glow — Figma: right edge, vertically centred */}
        <img
          src={imgGlowDesktop}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-[-20px] w-[236px] -translate-y-1/2 opacity-60 mix-blend-plus-lighter"
        />

        {/* ── Top row: logo+tagline (left) · social icons (right, aligned to baseline) ── */}
        <div className="relative z-10 flex items-end justify-between">
          <div className="flex flex-col gap-2.5">
            <Logo height={60} variant="white" />
            {/* Figma: Body-XXL-32, Regular */}
            <p className="text-[32px] leading-snug font-normal text-primary-foreground">
              Good things, going further.
            </p>
          </div>

          {/* Social icons — gap-64px (Figma). Explicit w+h to prevent distortion. */}
          {/* Figma desktop: FB 18.8×35.9px · IG 40.2×40px */}
          <div className="flex items-center gap-16">
            <a
              href="https://facebook.com/tzedar"
              aria-label="Facebook"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <img
                src={imgFb}
                alt="Facebook"
                style={{ width: "19px", height: "36px" }}
                className="object-contain"
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
                style={{ width: "40px", height: "40px" }}
                className="object-contain"
              />
            </a>
          </div>
        </div>

        {/* ── Bottom: stacked links (left-aligned) + centred copyright ── */}
        <div className="relative z-10 flex flex-col gap-4">
          {/* Figma desktop: links stacked vertically, left-aligned, 14px regular */}
          <div className="flex flex-col gap-4">
            {legalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="w-fit text-[14px] text-primary-foreground transition-opacity hover:opacity-80"
              >
                {link.label}
              </a>
            ))}
          </div>
          {/* Figma: 16px SemiBold, centered */}
          <p className="w-full text-center text-[16px] font-semibold text-primary-foreground">
            © {new Date().getFullYear()} Tzedar. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
