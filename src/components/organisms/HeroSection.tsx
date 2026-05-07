import { Link } from "react-router-dom"
import { TzButton } from "@/components/atoms/TzButton"
import { ArrowRight } from "lucide-react"

const heroImage = "/images/hero.jpg"
const heroImageMobile = "/images/hero-m.jpg"

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* ── Background image ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img
          src={heroImage}
          alt=""
          className="hidden h-full w-full object-cover object-center sm:block"
        />
        <img
          src={heroImageMobile}
          alt=""
          className="block h-full w-full object-cover object-center lg:hidden"
        />
      </div>

      <div className="relative h-full min-h-[811px] lg:min-h-[720px]">
        {/* ══ MOBILE glass panel ══
            Full-width, sits at the bottom, rounded top corners only.
            Visible below md. */}
        <div
          className="absolute right-20 bottom-0 left-0 flex flex-col justify-end gap-6 rounded-tl-[40px] rounded-tr-[40px] border-t border-brand-tint px-8 pt-12 pb-14 lg:hidden"
          style={{ background: "var(--glass-bg)", backdropFilter: "blur(1px)" }}
        >
          {/* inner dark overlay */}
          <div className="pointer-events-none absolute inset-0 rounded-tl-[40px] rounded-tr-[40px] bg-(--glass-bg) mix-blend-darken" />

          <div className="relative flex flex-col gap-6">
            <div className="flex flex-col gap-6 text-primary-foreground">
              <h1
                className="text-[clamp(2.5rem,12vw,4rem)] leading-[1.09] font-bold tracking-[-0.03em]"
                style={{ textShadow: "var(--text-shadow-mobile)" }}
              >
                make room to breathe
              </h1>
              <p className="text-lg leading-snug opacity-95">
                List items you no longer need. Support a cause that matters.
                Someone new receives what you once loved.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <TzButton>Start selling</TzButton>
              <GhostButton>Join as a charity</GhostButton>
            </div>
          </div>
        </div>

        {/* ══ DESKTOP glass panel ══
            Flush with the left edge, rounded right corners only, anchored near bottom.
            Visible from lg+. */}

        <div
          className="absolute top-1/2 left-0 hidden max-w-[520px] -translate-y-1/2 transform rounded-tr-[48px] rounded-br-[48px] border-t border-brand-tint p-12 lg:flex lg:max-w-[680px] lg:p-16"
          style={{
            background: "var(--glass-bg)",
            backdropFilter: "blur(5px)",
            boxShadow: "var(--glass-shadow)",
          }}
        >
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6 text-primary-foreground">
              <h1
                className="text-[clamp(2.5rem,4.5vw,5.5rem)] leading-[1.05] font-bold tracking-[-0.024em]"
                style={{ textShadow: "var(--text-shadow-heading)" }}
              >
                turn your sale into a donation.
              </h1>
              <p
                className="text-xl leading-snug lg:text-2xl"
                style={{ textShadow: "var(--text-shadow-body)" }}
              >
                List items you no longer need. Support a cause that matters.
                Someone new receives what you once loved.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <TzButton>Offer something</TzButton>
              <TzButton href="/join" variant="secondary">
                Find something
              </TzButton>
              <TzButton href="/join" variant="action">
                Join as a cause
              </TzButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Ghost button (white text + arrow icon) — navigates to /join ── */
function GhostButton({ children }: { children: React.ReactNode }) {
  return (
    <Link
      to="/join"
      className="flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10 lg:text-lg"
    >
      {children}
      <ArrowRight className="h-5 w-5" />
    </Link>
  )
}
