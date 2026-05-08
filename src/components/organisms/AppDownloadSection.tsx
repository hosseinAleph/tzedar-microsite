import { SectionLabel } from "@/components/atoms/SectionLabel"

// ── Hero photo (desktop right panel) ──────────────────────────────────────────
const imgPhotoDesktop =
  "https://www.figma.com/api/mcp/asset/d7510798-e73b-4e46-bcfb-bbd0c462cc72"
const imgPhotoOverlay =
  "https://www.figma.com/api/mcp/asset/353b9551-1cfe-46a3-80c5-8dc711bcf60f"

// ── App screenshot (mobile card) ──────────────────────────────────────────────
const imgPhoneMobile =
  "https://www.figma.com/api/mcp/asset/38b834f3-c241-46ba-91c4-66c32f7ee9b8"

// ── QR code + corner markers (desktop only) ───────────────────────────────────
const imgQrCode =
  "https://www.figma.com/api/mcp/asset/a8a9d4c2-fe7a-44a4-8bed-3d8cb27950f7"
const imgQrMarker =
  "https://www.figma.com/api/mcp/asset/215cb954-f352-4ee8-bb67-2947fb9dda80"
const imgQrTL_outer =
  "https://www.figma.com/api/mcp/asset/5b9c63bb-d941-4909-b6d8-6842f85431f4"
const imgQrTL_inner =
  "https://www.figma.com/api/mcp/asset/c0fff9b2-6f05-42e1-b0f2-c834bf10b5dd"
const imgQrTR_outer =
  "https://www.figma.com/api/mcp/asset/b6f8e759-6e60-4128-8e86-dd01439e6a36"
const imgQrTR_inner =
  "https://www.figma.com/api/mcp/asset/6c004f1f-41b9-4b24-b965-e8fd45558157"
const imgQrBL_outer =
  "https://www.figma.com/api/mcp/asset/e888ea32-7aaa-4816-9e09-2ba6b65fbd04"
const imgQrBL_inner =
  "https://www.figma.com/api/mcp/asset/bad7ecf6-adde-466e-aaec-fb1566bb5388"

// ── Store badges ──────────────────────────────────────────────────────────────
// Desktop pill switcher
const imgAppleDesktop =
  "https://www.figma.com/api/mcp/asset/2c5e3464-b7dd-40cc-989a-ae14da918b0a"
const imgPlaystoreDesktop =
  "https://www.figma.com/api/mcp/asset/a544b44a-2eb6-4e8f-a016-4a075c644bb0"
const imgPath90Desktop =
  "https://www.figma.com/api/mcp/asset/5f81d525-19f5-4d36-90f9-4611e4480ad4"
// Mobile dark buttons
const imgPlaystoreMobile =
  "https://www.figma.com/api/mcp/asset/cb5340b8-fca9-4e0e-86f1-4f6b03b51e68"
const imgPath90Mobile =
  "https://www.figma.com/api/mcp/asset/882376b3-0c9a-454b-bc2f-9c70bb1eebe7"
const imgAppleMobile =
  "https://www.figma.com/api/mcp/asset/170de798-42b7-4a72-bdfa-3b45d3dcac1c"

const stats = [
  { value: "$42.1k", label: "raised" },
  { value: "1,240", label: "items rehomed" },
  { value: "80", label: "charities" },
]

export function AppDownloadSection() {
  return (
    <section
      id="app-download"
      className="overflow-hidden bg-background px-6 py-16 sm:px-8 sm:py-20
        lg:px-20 lg:py-[120px]"
    >
      {/* Figma: left ≈ 37% (584 px) · right ≈ 63% (984 px) of 1568 px content area */}
      <div
        className="mx-auto flex max-w-7xl flex-col items-center gap-10
          lg:flex-row lg:gap-14"
      >
        {/* ── LEFT: Text + CTAs — ~37% on desktop ──────────────────────── */}
        <div
          className="flex w-full flex-col gap-8 lg:min-w-0 lg:flex-[37]
            lg:gap-10"
        >
          {/* Heading block */}
          <div className="flex flex-col gap-4">
            <SectionLabel>Download the App</SectionLabel>

            {/* Mobile heading */}
            <h2
              className="text-[48px] leading-none font-bold text-brand-darkest
                lg:hidden"
            >
              every item finds
              <br />a new home.
            </h2>
            {/* Desktop heading */}
            <h2
              className="hidden text-[48px] leading-none font-bold
                text-brand-darkest lg:block"
            >
              The magic happens
              <br />
              on your phone.
            </h2>

            {/* Mobile description */}
            <p className="text-lg leading-snug text-text-secondary/70 lg:hidden">
              Browse live auctions, place bids, and watch every purchase become
              a donation from your phone.
            </p>
            {/* Desktop description */}
            <p
              className="hidden max-w-sm text-lg leading-snug
                text-text-secondary/70 lg:block"
            >
              Scan the QR code to start browsing live auctions, place bids, and
              watch every purchase become a donation.
            </p>
          </div>

          {/* ── QR code + store pill (desktop only) ── */}
          <div className="hidden flex-col gap-6 lg:flex">
            {/* QR code */}
            <div className="relative size-[200px] xl:size-[240px]">
              <img
                src={imgQrCode}
                alt="Scan to download Tzedar"
                className="absolute inset-0 h-full w-full"
              />
              <div className="absolute inset-[6.52%]">
                <img
                  src={imgQrMarker}
                  alt=""
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div className="absolute inset-[6.52%_69.13%_69.13%_6.52%]">
                <img
                  src={imgQrTL_outer}
                  alt=""
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div className="absolute inset-[13.48%_76.09%_76.09%_13.48%]">
                <img
                  src={imgQrTL_inner}
                  alt=""
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div className="absolute inset-[6.52%_6.52%_69.13%_69.13%]">
                <img
                  src={imgQrTR_outer}
                  alt=""
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div className="absolute inset-[13.48%_13.48%_76.09%_76.09%]">
                <img
                  src={imgQrTR_inner}
                  alt=""
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div className="absolute inset-[69.13%_69.13%_6.52%_6.52%]">
                <img
                  src={imgQrBL_outer}
                  alt=""
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div className="absolute inset-[76.09%_76.09%_13.48%_13.48%]">
                <img
                  src={imgQrBL_inner}
                  alt=""
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>

            {/* Store pill switcher */}
            <div
              className="inline-flex w-fit items-center gap-1 rounded-full
                border border-border-default px-2 py-1"
              style={{
                backdropFilter: "blur(5px)",
                backgroundColor: "var(--color-store-pill-bg)",
              }}
            >
              {/* App Store — active (white bg) */}
              <div
                className="flex items-center gap-2 rounded-full bg-background
                  px-3 py-1.5 shadow-[var(--shadow-store-badge-active)]"
              >
                <img
                  src={imgAppleDesktop}
                  alt=""
                  className="h-6 w-5 object-contain"
                />
                <div className="flex flex-col">
                  <span className="text-[9px] leading-tight text-foreground">
                    Download on the
                  </span>
                  <span
                    className="text-[18px] leading-none font-medium
                      tracking-tight text-foreground"
                  >
                    App Store
                  </span>
                </div>
              </div>
              {/* Google Play — inactive */}
              <div className="flex items-center gap-2 px-3 py-1.5">
                <img
                  src={imgPlaystoreDesktop}
                  alt=""
                  className="h-6 w-[21px] object-contain"
                />
                <div className="flex flex-col">
                  <span
                    className="text-[10px] leading-tight text-white uppercase"
                  >
                    GET IT ON
                  </span>
                  {/* path90 is stored upside-down in Figma; flip back with scaleY(-1) */}
                  <img
                    src={imgPath90Desktop}
                    alt="Google Play"
                    className="h-[15px] w-[75px]"
                    style={{ transform: "scaleY(-1)" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── Mobile store buttons (dark, side-by-side) ── */}
          <div className="flex gap-3 lg:hidden">
            {/* Google Play */}
            <div
              className="relative h-14 flex-1 overflow-hidden rounded-lg border
                border-store-badge-border bg-store-badge-bg"
            >
              <img
                src={imgPlaystoreMobile}
                alt=""
                className="absolute top-2.5 left-2.5 h-[34px] w-[30px]
                  object-contain"
              />
              <div className="absolute top-[7px] left-[50px]">
                <p
                  className="font-sans text-[14px] leading-none
                    text-primary-foreground uppercase"
                >
                  GET IT ON
                </p>
                <img
                  src={imgPath90Mobile}
                  alt="Google Play"
                  className="mt-1 h-[21px] w-[104px]"
                  style={{ transform: "scaleY(-1)" }}
                />
              </div>
            </div>
            {/* App Store */}
            <div
              className="relative flex h-14 flex-1 items-center overflow-hidden
                rounded-lg border border-store-badge-border bg-store-badge-bg"
            >
              <img
                src={imgAppleMobile}
                alt=""
                className="absolute left-2.5 h-[34px] w-[28px] object-contain"
              />
              <div className="absolute left-[48px]">
                <p
                  className="font-sans text-[12px] leading-none
                    text-primary-foreground"
                >
                  Download on the
                </p>
                <p
                  className="font-sans text-[22px] leading-tight font-medium
                    tracking-tight text-primary-foreground"
                >
                  App Store
                </p>
              </div>
            </div>
          </div>

          {/* ── Stats bar ── */}
          <div
            className="flex items-stretch rounded-2xl bg-surface-neutral py-5"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-1 flex-col items-center justify-center
                gap-1 ${i > 0 ? "border-l border-border-default" : ""}`}
              >
                <p
                  className="text-3xl leading-none font-semibold text-gold
                    lg:text-4xl"
                >
                  {stat.value}
                </p>
                <p
                  className="text-center text-sm leading-snug
                    text-text-secondary/70"
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Phone screenshot card — ~63% on desktop ──────────── */}
        <div className="w-full lg:min-w-0 lg:flex-[63] lg:self-stretch">
          {/* Desktop photo card */}
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
            <div className="absolute inset-0 overflow-hidden rounded-[24px]">
              <img
                src={imgPhotoOverlay}
                alt=""
                className="pointer-events-none absolute left-0 w-full"
                style={{ height: "257%", top: "-40%" }}
              />
            </div>
          </div>

          {/* Mobile app screenshot card */}
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
        </div>
      </div>
    </section>
  )
}
