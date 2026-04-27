import { Link } from "react-router-dom";
import { PrimaryButton } from "@/components/atoms/PrimaryButton";

const heroImage     = "https://www.figma.com/api/mcp/asset/f2f5686b-f253-44c2-80bb-3f01b02d43b5";
const arrowIcon     = "https://www.figma.com/api/mcp/asset/d0647506-ed15-4d95-946d-73ccaf6827f3";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* ── Background image ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>

      {/*
        Two glass panels in the same container; only one is visible at a time.
        The section height adapts: shorter on mobile (hero fills ~80vh),
        taller on desktop (hero is a fixed ~680px).
      */}
      <div className="relative min-h-[520px] sm:min-h-[600px] lg:min-h-[720px]">

        {/* ══ MOBILE glass panel ══
            Full-width, sits at the bottom, rounded top corners only.
            Visible below md. */}
        <div
          className="md:hidden absolute bottom-0 left-0 right-0 rounded-tl-[40px] rounded-tr-[40px] border-t border-[#ebf5ea] px-8 pt-12 pb-14 flex flex-col gap-6 justify-end"
          style={{ background: "rgba(20,70,48,0.25)", backdropFilter: "blur(8px)" }}
        >
          {/* inner dark overlay */}
          <div className="absolute inset-0 rounded-tl-[40px] rounded-tr-[40px] bg-[rgba(20,70,48,0.25)] mix-blend-darken pointer-events-none" />

          <div className="relative flex flex-col gap-6">
            <div className="flex flex-col gap-6 text-white">
              <h1
                className="font-bold text-[clamp(2.5rem,12vw,4rem)] leading-[1.09] tracking-[-0.03em]"
                style={{ textShadow: "0 0 5px rgba(26,56,32,0.3)" }}
              >
                make room to breathe
              </h1>
              <p className="text-lg leading-snug opacity-95">
                List items you no longer need. Support a cause that matters. Someone new receives what you once loved.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <PrimaryButton size="sm">Start selling</PrimaryButton>
              <GhostButton icon={arrowIcon}>Join as a charity</GhostButton>
            </div>
          </div>
        </div>

        {/* ══ DESKTOP glass panel ══
            Flush with the left edge, rounded right corners only, anchored near bottom.
            Visible from md+. */}
        <div
          className="hidden md:flex absolute bottom-10 lg:bottom-16 left-0 flex-col justify-end p-12 lg:p-16 rounded-tr-[48px] rounded-br-[48px] border-t border-[#ebf5ea] max-w-[520px] lg:max-w-[680px]"
          style={{ background: "rgba(20,70,48,0.25)", backdropFilter: "blur(8px)", boxShadow: "0px 5.6px 2.8px rgba(0,0,0,0.25)" }}
        >
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6 text-white">
              <h1
                className="font-bold text-[clamp(2.5rem,4.5vw,5.5rem)] leading-[1.05] tracking-[-0.024em]"
                style={{ textShadow: "0px 3px 8px rgba(0,0,0,0.4)" }}
              >
                turn your sale into a donation.
              </h1>
              <p
                className="text-xl lg:text-2xl leading-snug"
                style={{ textShadow: "0px 1px 6px rgba(0,0,0,0.55)" }}
              >
                List items you no longer need. Support a cause that matters. Someone new receives what you once loved.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <PrimaryButton size="md">Start selling</PrimaryButton>
              <GhostButton icon={arrowIcon}>Join as a charity</GhostButton>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ── Ghost button (white text + arrow icon) — navigates to /join ── */
function GhostButton({ children, icon }: { children: React.ReactNode; icon: string }) {
  return (
    <Link
      to="/join"
      className="flex items-center gap-2 px-4 py-3 rounded-full font-semibold text-white text-sm md:text-lg hover:bg-white/10 transition-colors"
    >
      {children}
      <span className="inline-flex items-center justify-center w-4 h-4 md:w-5 md:h-5">
        <img src={icon} alt="" className="w-full h-full" />
      </span>
    </Link>
  );
}
