import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/* Desktop and mobile share the same photo subject but use different crops */
const bgWeb    = "https://www.figma.com/api/mcp/asset/6a55b59c-b318-41d6-b1e7-551bddc684b5";
const bgMobile = "https://www.figma.com/api/mcp/asset/afd09bbb-b22b-4c8a-b23c-d968c08a27dd";

/* White pill CTA button matching Figma "gradient/secondary" */
function WhitePillButton({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/join"
      className={`inline-flex items-center gap-2 px-6 py-4 rounded-full border border-[#d9dbe9] font-semibold text-[#153b2e] bg-white hover:bg-gray-50 transition-colors shadow-[0px_2px_2.5px_rgba(78,143,191,0.35)] ${className}`}
    >
      Join as a charity
      <ArrowRight className="w-5 h-5" />
    </Link>
  );
}

export function CharityCtaSection() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* ══ DESKTOP (md+) ══ */}
      <div className="hidden md:block relative" style={{ height: "874px" }}>
        {/* Background photo */}
        <img
          src={bgWeb}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden="true"
        />

        {/* Left glass panel — anchored to left edge, bottom-offset, right rounded corners */}
        <div
          className="absolute bottom-[124px] left-0 flex flex-col justify-end p-16 rounded-tr-[48px] rounded-br-[48px] border-t border-[#ebf5ea]"
          style={{
            background: "rgba(20,70,48,0.25)",
            backdropFilter: "blur(8px)",
            boxShadow: "0px 5.6px 2.8px rgba(0,0,0,0.25)",
          }}
        >
          <div className="flex flex-col gap-8 max-w-[685px]">
            {/* Overline */}
            <p className="text-base font-semibold uppercase tracking-[0.2em] text-white">
              Charity partnership
            </p>

            {/* Heading */}
            <h2
              className="font-bold text-white leading-none"
              style={{
                fontSize: "clamp(3rem,5.2vw,5.6rem)",
                letterSpacing: "-0.024em",
                textShadow: "0px 3px 8px rgba(0,0,0,0.4)",
              }}
            >
              bring your cause into the circle.
            </h2>

            {/* Description */}
            <p
              className="text-2xl text-white leading-snug"
              style={{ textShadow: "0px 1px 6px rgba(0,0,0,0.55)" }}
            >
              Takes three minutes to express interest. We verify your DGR status and do the rest.
            </p>

            {/* CTA */}
            <div>
              <WhitePillButton className="text-xl px-8 py-4" />
            </div>
          </div>
        </div>
      </div>

      {/* ══ MOBILE (< md) ══ */}
      <div className="md:hidden relative" style={{ minHeight: "874px" }}>
        {/* Background photo — shifted left in Figma to focus on centre of image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={bgMobile}
            alt=""
            className="absolute w-[214%] max-w-none h-full object-cover"
            style={{ left: "-57%", top: 0 }}
            aria-hidden="true"
          />
        </div>

        {/* Glass panel — bottom, full-width, rounded top corners */}
        <div
          className="absolute bottom-0 left-0 right-0 rounded-tl-[40px] rounded-tr-[40px] border-t border-[#ebf5ea] px-8 pt-12 pb-14 flex flex-col gap-6"
        >
          {/* Dark tint overlay */}
          <div
            className="absolute inset-0 rounded-tl-[40px] rounded-tr-[40px] pointer-events-none mix-blend-darken"
            style={{ background: "rgba(20,70,48,0.25)", backdropFilter: "blur(8px)" }}
          />

          <div className="relative flex flex-col gap-6 text-white">
            {/* Overline */}
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em]">
              Charity partnership
            </p>

            {/* Heading */}
            <h2
              className="font-bold text-white leading-[1.09]"
              style={{
                fontSize: "clamp(2.8rem,15vw,4rem)",
                letterSpacing: "-0.015em",
                textShadow: "0px 0px 5px rgba(26,56,32,0.3)",
              }}
            >
              bring your cause into the circle.
            </h2>

            {/* Description */}
            <p className="text-lg text-white leading-snug">
              Takes three minutes to express interest. We verify your DGR status and do the rest.
            </p>
          </div>

          {/* CTA */}
          <div className="relative">
            <WhitePillButton className="text-lg w-full justify-center" />
          </div>
        </div>
      </div>

    </section>
  );
}
