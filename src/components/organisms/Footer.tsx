import { Logo } from "@/components/atoms/Logo";

// Social icon assets (white, from Figma)
const imgFb  = "https://www.figma.com/api/mcp/asset/d8d70eea-8807-4b22-bc4e-3daba9bead72";
const imgIg  = "https://www.figma.com/api/mcp/asset/5d7f07ae-be01-4632-ad1a-49a93d81b342";
// Decorative glow (reused across mobile and desktop, repositioned via CSS)
const imgGlowMobile  = "https://www.figma.com/api/mcp/asset/e1b393aa-5287-4a56-b2e2-27bf57304daa";
const imgGlowDesktop = "https://www.figma.com/api/mcp/asset/5b89edd0-9a56-45f7-a44a-5064a70cd6e2";

const legalLinks = [
  { label: "Privacy Notice",      href: "/privacy" },
  { label: "Terms and Conditions", href: "/terms" },
  { label: "Disclaimer",           href: "/disclaimer" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand">

      {/* ════════════════════════════════════════
          MOBILE  (< lg)
      ════════════════════════════════════════ */}
      <div className="lg:hidden relative flex flex-col gap-20 px-6 py-12">
        {/* Decorative glow — Figma: centred vertically, left ≈ 166 px */}
        <img
          src={imgGlowMobile}
          alt=""
          aria-hidden="true"
          className="absolute left-[166px] top-1/2 -translate-y-1/2 w-[236px] mix-blend-plus-lighter opacity-60 pointer-events-none"
        />

        {/* ── Top: logo + tagline + social ── */}
        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex flex-col gap-2.5">
            <Logo height={60} variant="white" />
            <p className="font-semibold text-[18px] text-primary-foreground leading-snug">
              Good things, going further.
            </p>
          </div>
          {/* Social icons — gap-32px (Figma). Explicit w+h to prevent distortion. */}
          {/* Figma mobile: FB 9.4×18px · IG 20×20px */}
          <div className="flex items-center gap-8">
            <a href="https://facebook.com/tzedar" aria-label="Facebook" className="opacity-80 hover:opacity-100 transition-opacity">
              <img src={imgFb} alt="Facebook" style={{ width: "9px", height: "18px" }} className="object-contain" />
            </a>
            <a href="https://instagram.com/tzedar" aria-label="Instagram" className="opacity-80 hover:opacity-100 transition-opacity">
              <img src={imgIg} alt="Instagram" style={{ width: "20px", height: "20px" }} className="object-contain" />
            </a>
          </div>
        </div>

        {/* ── Bottom: links row + copyright ── */}
        {/* Figma: Privacy | Terms | Disclaimer as horizontal row, middle item has border-l/r */}
        <div className="relative z-10 flex flex-col gap-4">
          <div className="flex items-center gap-4 w-full">
            <a href={legalLinks[0].href} className="text-[14px] text-primary-foreground hover:opacity-80 transition-opacity whitespace-nowrap shrink-0">
              {legalLinks[0].label}
            </a>
            <div className="flex-1 flex items-center justify-center border-l border-r border-border-strong px-2 min-w-0">
              <a href={legalLinks[1].href} className="text-[14px] text-primary-foreground hover:opacity-80 transition-opacity text-center leading-snug">
                {legalLinks[1].label}
              </a>
            </div>
            <a href={legalLinks[2].href} className="text-[14px] text-primary-foreground hover:opacity-80 transition-opacity whitespace-nowrap shrink-0">
              {legalLinks[2].label}
            </a>
          </div>
          <p className="text-[14px] text-primary-foreground text-center leading-snug">
            © {new Date().getFullYear()} Tzedar. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* ════════════════════════════════════════
          DESKTOP  (lg+)
      ════════════════════════════════════════ */}
      <div className="hidden lg:flex flex-col gap-10 pt-10 pb-12 px-20 relative">
        {/* Decorative glow — Figma: right edge, vertically centred */}
        <img
          src={imgGlowDesktop}
          alt=""
          aria-hidden="true"
          className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-[236px] mix-blend-plus-lighter opacity-60 pointer-events-none"
        />

        {/* ── Top row: logo+tagline (left) · social icons (right, aligned to baseline) ── */}
        <div className="relative z-10 flex items-end justify-between">
          <div className="flex flex-col gap-2.5">
            <Logo height={60} variant="white" />
            {/* Figma: Body-XXL-32, Regular */}
            <p className="text-[32px] font-normal text-primary-foreground leading-snug">
              Good things, going further.
            </p>
          </div>

          {/* Social icons — gap-64px (Figma). Explicit w+h to prevent distortion. */}
          {/* Figma desktop: FB 18.8×35.9px · IG 40.2×40px */}
          <div className="flex items-center gap-16">
            <a href="https://facebook.com/tzedar" aria-label="Facebook" className="opacity-80 hover:opacity-100 transition-opacity">
              <img src={imgFb} alt="Facebook" style={{ width: "19px", height: "36px" }} className="object-contain" />
            </a>
            <a href="https://instagram.com/tzedar" aria-label="Instagram" className="opacity-80 hover:opacity-100 transition-opacity">
              <img src={imgIg} alt="Instagram" style={{ width: "40px", height: "40px" }} className="object-contain" />
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
                className="text-[14px] text-primary-foreground hover:opacity-80 transition-opacity w-fit"
              >
                {link.label}
              </a>
            ))}
          </div>
          {/* Figma: 16px SemiBold, centered */}
          <p className="text-[16px] font-semibold text-primary-foreground text-center w-full">
            © {new Date().getFullYear()} Tzedar. All Rights Reserved.
          </p>
        </div>
      </div>

    </footer>
  );
}
