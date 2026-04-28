import { useEffect } from "react";

// Figma: popup/art — envelope notification on a green circle
const imgEllipse = "https://www.figma.com/api/mcp/asset/bdb8849d-03d8-4887-8333-a60d0840ef1a";
const imgEnvIcon = "https://www.figma.com/api/mcp/asset/c8daf772-c2b9-4303-8db1-beb132b07872";

type SubmissionPopupProps = Readonly<{
  onClose: () => void;
}>;

export function SubmissionPopup({ onClose }: SubmissionPopupProps) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    globalThis.addEventListener("keydown", handler);
    return () => globalThis.removeEventListener("keydown", handler);
  }, [onClose]);

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
        className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] bg-background border border-border-default rounded-2xl flex flex-col items-center gap-6 pt-10 pb-4 px-2 shadow-[var(--shadow-form-card)]"
      >
        {/* ── Art: green circle + envelope icon ── */}
        <div className="relative size-20 shrink-0">
          <img src={imgEllipse} alt="" className="absolute inset-0 w-full h-full" aria-hidden="true" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden size-16">
            <img
              src={imgEnvIcon}
              alt=""
              aria-hidden="true"
              className="absolute"
              style={{ width: "44.8px", height: "32.9px", left: "9.6px", top: "15.6px" }}
            />
          </div>
        </div>

        {/* ── Text ── */}
        <div className="flex flex-col gap-2 w-full text-center px-4">
          <p className="font-semibold text-[18px] text-text-secondary leading-snug">
            Thank you for your submission
          </p>
          <p className="text-sm text-text-secondary/70 leading-snug">
            We'll reach out soon to discuss what comes next.
          </p>
        </div>

        {/* ── Okay button ── */}
        <div className="w-full px-2 pb-2">
          <button
            onClick={onClose}
            className="w-full py-4 rounded-2xl font-semibold text-sm text-primary-foreground bg-brand-light hover:opacity-90 transition-opacity"
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
}
