import { useEffect } from "react"
import alertSuccess from "@/assets/images/alert-success.svg"

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
          pt-10 pb-4 shadow-(--shadow-form-card) sm:max-w-[380px]"
      >
        {/* ── Art: green circle + envelope icon ── */}
        <div className="relative size-20 shrink-0">
          <img
            src={alertSuccess}
            alt=""
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          />
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
              text-brand-dark transition-opacity hover:opacity-90"
            style={{ backgroundImage: "var(--gradient-btn-submit)" }}
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  )
}
