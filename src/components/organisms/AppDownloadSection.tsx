import { SectionLabel } from "@/components/atoms/SectionLabel"
import imgPhotoDesktop from "@/assets/images/download-app.jpg"
import imgPhoneMobile from "@/assets/images/download-app-m.jpg"
import imgQrCode from "@/assets/images/qr.png"
import imgPlanSwitcher from "@/assets/images/plan-switcher.svg"
import imgAppleStore from "@/assets/images/app-store.png"
import imgGooglePlay from "@/assets/images/play-store.png"
const stats = [
  {
    value: "$47.5k raised",
    goal: "let's aim to raise $100,000 by the end of 2026",
  },
  {
    value: "1,240 items rehomed",
    goal: "let's aim to rehome 3,000 items by the end of 2026",
  },
  {
    value: "32 charities",
    goal: "let's aim to have 50 causes on the platform by end of 2026",
  },
]

export function AppDownloadSection() {
  return (
    <section id="app-download" className="overflow-hidden bg-background">
      <div
        className="mx-auto flex max-w-inner flex-col items-center gap-10 px-4
          py-16 lg:flex-row lg:gap-14 lg:px-[54px] lg:py-20"
      >
        {/* ── LEFT: Text + CTAs — ~37% on desktop ──────────────────────── */}
        <div
          className="flex w-full flex-col gap-8 lg:min-w-0 lg:flex-37 lg:gap-10"
        >
          {/* Heading block */}
          <div className="flex flex-col gap-4">
            <SectionLabel>Download the App</SectionLabel>

            <h2
              className="text-[48px] leading-none font-bold text-brand-darkest"
            >
              value finds its place.
            </h2>

            <p className="text-[18px] leading-snug text-text-secondary/70">
              Browse what’s been shared, take part and do some good.
            </p>

            <div
              className="hidden max-h-[345px] max-w-[290px] self-center
                lg:block"
            >
              <img
                src={imgQrCode}
                alt="Scan to download Tzedar"
                className="h-full w-full object-contain"
              />
              <img
                src={imgPlanSwitcher}
                alt="Plan switcher"
                className="h-full w-full object-contain"
              />
            </div>

            {/* ── Stats cards ── */}
            <div className="mt-10 flex flex-col gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.value}
                  className="flex flex-col gap-1 overflow-hidden rounded-2xl
                    bg-surface-neutral p-4 lg:px-8 lg:py-4"
                >
                  <p
                    className="text-2xl leading-tight font-semibold text-gold
                      lg:text-[36px]"
                  >
                    {stat.value}
                  </p>
                  <p className="text-sm leading-snug text-text-secondary/70">
                    {stat.goal}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full lg:min-w-0 lg:flex-63 lg:self-stretch">
          <div
            className="relative hidden h-full min-h-[520px] overflow-hidden
              rounded-[24px] lg:block"
          >
            <div className="absolute inset-0 bg-brand" />
            <img
              src={imgPhotoDesktop}
              alt="Browse the Tzedar app"
              className="absolute inset-0 h-full w-full rounded-[24px]
                object-cover"
            />
            {/* <div className="absolute inset-0 overflow-hidden rounded-[24px]">
              <img
                src={imgPhotoOverlay}
                alt=""
                className="pointer-events-none absolute left-0 w-full"
                style={{ height: "257%", top: "-40%" }}
              />
            </div> */}
          </div>

          <div
            className="relative h-[380px] w-full overflow-hidden rounded-2xl
              lg:hidden"
          >
            <div className="absolute inset-0 bg-brand" />
            <img
              src={imgPhoneMobile}
              alt="Browse the Tzedar app"
              className="absolute inset-0 h-full w-full rounded-2xl
                object-cover"
            />
          </div>
          <div className="flex justify-center gap-4 pt-10 lg:hidden">
            <img
              src={imgAppleStore}
              alt="Download on the App Store"
              className="h-[50px] w-[150px] object-contain"
            />
            <img
              src={imgGooglePlay}
              alt="Download on Google Play"
              className="h-[50px] w-[150px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
