import { PrimaryButton } from "@/components/atoms/PrimaryButton";

const heroImage = "https://www.figma.com/api/mcp/asset/b1a1be44-b1a4-4449-81c3-37855df71d6b";

export function HeroSection() {
  return (
    <section className="relative min-h-[520px] sm:min-h-[680px] lg:min-h-[780px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5" />
      </div>

      <div className="relative h-full flex items-end">
        <div
          className="m-4 sm:m-8 lg:m-16 mb-10 sm:mb-14 lg:mb-20 p-6 sm:p-10 lg:p-16 rounded-tr-[48px] rounded-br-[48px] max-w-xs sm:max-w-md lg:max-w-2xl border-t border-[#ebf5ea]"
          style={{ background: "rgba(20,70,48,0.25)", backdropFilter: "blur(8px)" }}
        >
          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="flex flex-col gap-4 sm:gap-6">
              <h1 className="font-bold text-4xl sm:text-6xl lg:text-8xl text-white leading-[1.05] tracking-tight drop-shadow-[0px_3px_8px_rgba(0,0,0,0.4)]">
                turn your sale into a donation.
              </h1>
              <p className="text-base sm:text-xl lg:text-3xl text-white/90 leading-snug drop-shadow-[0px_1px_6px_rgba(0,0,0,0.55)]">
                List items you no longer need. Support a cause that matters. Someone new receives what you once loved.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <PrimaryButton size="md">Start selling</PrimaryButton>
              <PrimaryButton variant="ghost" size="md" showArrow>
                Join as a charity
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
