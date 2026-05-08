import { useEffect } from "react"

// Figma: popup/art — envelope notification on a pale-blue circle
const imgEllipse =
  "https://www.figma.com/api/mcp/asset/8763158f-85e9-4361-9a2e-c17e1ea479d1"
const imgEnvIcon =
  "https://www.figma.com/api/mcp/asset/e9e9edee-a2ba-4b18-8da5-22dc7e9b3ac7"

type SubmissionPopupProps = Readonly<{
  onClose: () => void
}>

export function SubmissionPopup({ onClose }: SubmissionPopupProps) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    globalThis.addEventListener("keydown", handler)
    return () => globalThis.removeEventListener("keydown", handler)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
      {/* Clickable backdrop */}
      <button
        className="absolute inset-0 cursor-default"
        style={{ backgroundColor: "var(--color-modal-overlay)" }}
        onClick={onClose}
        aria-label="Close popup"
      />

      {/* Card — sits above the backdrop */}
      <div
        className="relative z-10 flex w-full max-w-[340px] flex-col items-center
          gap-6 rounded-2xl border border-border-default bg-background px-2
          pt-10 pb-4 shadow-[var(--shadow-form-card)] sm:max-w-[380px]"
      >
        {/* ── Art: green circle + envelope icon ── */}
        <div className="relative size-20 shrink-0">
          <img
            src={imgEllipse}
            alt=""
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          />
          <div
            className="absolute top-1/2 left-1/2 size-16 -translate-x-1/2
              -translate-y-1/2 overflow-hidden"
          >
            <img
              src={imgEnvIcon}
              alt=""
              aria-hidden="true"
              className="absolute"
              style={{
                width: "44.8px",
                height: "32.9px",
                left: "9.6px",
                top: "15.6px",
              }}
            />
          </div>
        </div>

        {/* ── Text ── */}
        <div className="flex w-full flex-col gap-2 px-4 text-center">
          <p
            className="text-[18px] leading-snug font-semibold
              text-text-secondary"
          >
            Thank you for your submission
          </p>
          <p className="text-sm leading-snug text-text-secondary/70">
            We'll reach out soon to discuss what comes next.
          </p>
        </div>

        {/* ── Okay button ── */}
        <div className="w-full px-2 pb-2">
          <button
            onClick={onClose}
            className="w-full rounded-[8px] py-4 text-sm font-semibold
              text-primary-foreground transition-opacity hover:opacity-90"
            style={{ backgroundImage: "var(--gradient-btn-submit)" }}
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  )
}
