import { useState, useCallback, type SubmitEvent } from "react"
import { useNavigate } from "react-router-dom"
import { Info, X } from "lucide-react"
import { Logo } from "@/components/atoms/Logo"
import { SubmissionPopup } from "@/components/molecules/SubmissionPopup"
// import emailJS from "@emailjs/browser";
import { TzButton } from "@/components/atoms/TzButton"

const decorImage =
  "https://www.figma.com/api/mcp/asset/7bdfbb8e-0b72-40ce-9272-3e9e8bf6d719"

/* ── Shared form field definitions ── */
const fields = [
  {
    name: "name",
    id: "name",
    label: "Full name",
    placeholder: "e.g. John Doe",
    hint: "",
  },
  {
    name: "email",
    id: "email",
    label: "Work email",
    placeholder: "e.g. john@oceancare.au",
    hint: "",
  },
  {
    name: "org",
    id: "org",
    label: "Organisation name",
    placeholder: "e.g. Ocean Care Australia Ltd",
    hint: "",
  },
  {
    name: "abn",
    id: "abn",
    label: "ABN",
    placeholder: "e.g. 12 345 678 901",
    hint: "We'll use this to confirm your spot and send next steps.",
  },
]

/* ── DGR callout ── */
function DgrCallout() {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-info bg-info-surface p-4">
      <Info className="mt-0.5 h-5 w-5 shrink-0 text-info-dark" />
      <div className="flex flex-col gap-0.5">
        <p className="text-sm font-semibold text-info-darker">
          DGR status is required
        </p>
        <p className="text-xs leading-snug text-info-dark">
          Tzedar automatically generates tax-deductible receipts for donors —
          your DGR endorsement is what makes this possible.
        </p>
      </div>
    </div>
  )
}

/* ── Single text input ── */
function FormInput({
  id,
  label,
  placeholder,
  hint,
}: Readonly<{ id: string; label: string; placeholder: string; hint: string }>) {
  return (
    <div className="flex w-full flex-col gap-1">
      <label
        htmlFor={id}
        className="text-[12px] leading-snug font-semibold text-text-primary/70"
      >
        {label}
      </label>
      <input
        id={id}
        type={id === "email" ? "email" : "text"}
        placeholder={placeholder}
        className="h-11 w-full rounded-lg border border-border-strong bg-background px-4 text-sm text-text-primary transition placeholder:text-text-placeholder focus:ring-2 focus:ring-brand focus:outline-none"
      />
      {hint && (
        <p className="text-[12px] leading-snug text-brand-medium/70">{hint}</p>
      )}
    </div>
  )
}

/* ── Form content (used in both layouts) ── */
function PartnerForm({ onSubmit }: Readonly<{ onSubmit: () => void }>) {
  console.log("🚀 ~ PartnerForm ~ onSubmit:", onSubmit)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("first", e.target)
    setLoading(true)
    // TODO: Add the public key to the environment variables
    // emailJS.sendForm('service_874wrye', 'template_dos7199', e.target as HTMLFormElement, 'MW7fh2GtF3biGDMAH')
    //   .then((result) => {
    //     console.log(result);
    //   }, (error) => {
    //     console.error(error);
    //   }).finally(() => {
    //     onSubmit()
    //   })
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      {/* Form header */}
      <div className="flex flex-col gap-2">
        <p className="text-[11px] leading-snug font-semibold tracking-[0.2em] text-[#6b9db8] uppercase">
          Join as a partner
        </p>
        <div>
          <p className="text-[18px] leading-snug font-semibold text-text-primary">
            Let's get started.
          </p>
          <p className="text-[12px] leading-snug text-text-secondary/70">
            Join Tzedar as a launch partner charity.
          </p>
        </div>
      </div>

      {/* Fields */}
      <div className="flex flex-col gap-4">
        {fields.map((f) => (
          <FormInput key={f.id} {...f} />
        ))}
      </div>

      <DgrCallout />

      {/* Submit */}
      <div className="flex flex-col gap-3">
        <TzButton type="submit" loading={loading} showArrow={!loading}>
          Join as a partner
        </TzButton>
      </div>

      <p className="text-center text-[12px] leading-snug text-text-secondary/70">
        By submitting you agree to{" "}
        <a href="/terms" className="text-brand-light underline">
          our terms
        </a>
        {". We'll only contact you about your application."}
      </p>
    </form>
  )
}

/* ══════════════════════════════════════════
   PAGE
══════════════════════════════════════════ */
export function JoinAsCharityPage() {
  const [submitted, setSubmitted] = useState(false)
  const [isLeaving, setIsLeaving] = useState(false)
  const navigate = useNavigate()

  // Play exit animation, then navigate away
  const handleClose = useCallback(() => {
    setIsLeaving(true)
    setTimeout(() => navigate("/"), 280) // matches page-exit duration
  }, [navigate])

  return (
    <div
      className={`flex min-h-screen flex-col bg-background lg:bg-surface-neutral ${isLeaving ? "animate-page-exit" : "animate-page-enter"}`}
    >
      {/* ── Submission popup (shown over both layouts) ── */}
      {submitted && <SubmissionPopup onClose={() => setSubmitted(false)} />}

      {/* ════════════════════════════════
          DESKTOP layout (lg+): two columns
      ════════════════════════════════ */}
      {/* p-4 on the outer wrapper + gap-4 between panels eliminates the gray background gaps */}
      <div className="relative hidden min-h-screen flex-1 gap-4 p-4 lg:flex">
        {/* Left sidebar — pale blue */}
        <div className="relative flex w-[360px] shrink-0 flex-col overflow-hidden rounded-[24px] bg-[#9fc5e0] px-8 pt-10 pb-12 xl:w-[420px]">
          {/* Decorative glow */}
          <img
            src={decorImage}
            alt=""
            className="pointer-events-none absolute top-1/2 left-[160px] w-[236px] -translate-y-1/4 opacity-60 mix-blend-plus-lighter"
            aria-hidden="true"
          />

          {/* Logo + divider */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            <Logo height={40} variant="white" />
            <div className="w-full border-t border-primary-foreground/20" />
          </div>

          {/* Heading block — vertically centered in the remaining sidebar height */}
          <div className="relative z-10 flex flex-1 flex-col justify-center gap-6">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-primary-foreground/80 uppercase">
              Charity partnership
            </p>
            <h1 className="text-[48px] leading-none font-bold text-primary-foreground">
              raise funds better, faster, and for free.
            </h1>
            <p className="text-[18px] leading-snug text-primary-foreground/70">
              Partner with Tzedar and receive a percentage of every auction that
              supports your cause.
            </p>
          </div>
        </div>

        {/* Right panel — full-height white card, form centered inside */}
        <div className="flex flex-1 items-center justify-center rounded-[32px] border border-card-edge bg-card py-10 shadow-[var(--shadow-form-card)]">
          <div className="w-full max-w-[720px] px-8">
            <PartnerForm onSubmit={() => setSubmitted(true)} />
          </div>
        </div>

        {/* Close button — top-right of the overall desktop container */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className="absolute top-[17px] right-[17px] flex size-12 items-center justify-center rounded-full transition-colors hover:bg-border-default/30"
        >
          <X className="h-5 w-5 text-text-secondary" />
        </button>
      </div>

      {/* ════════════════════════════════
          MOBILE layout (< lg): stacked
      ════════════════════════════════ */}
      <div className="flex flex-1 flex-col lg:hidden">
        {/* Mobile nav bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border-default bg-background px-4 py-3">
          <Logo height={28} />
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close"
            className="rounded-full p-2 transition-colors hover:bg-brand-surface"
          >
            <X className="h-5 w-5 text-text-secondary" />
          </button>
        </div>

        {/* Pale-blue hero card */}
        <div className="relative mx-4 mt-4 overflow-hidden rounded-2xl bg-[#9fc5e0] px-6 py-10">
          <img
            src={decorImage}
            alt=""
            className="pointer-events-none absolute top-1/2 right-0 w-[180px] -translate-y-1/2 opacity-50 mix-blend-plus-lighter"
            aria-hidden="true"
          />
          <div className="relative z-10 flex flex-col gap-6">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-primary-foreground/80 uppercase">
              Charity partnership
            </p>
            <h1 className="text-[28px] leading-snug font-semibold text-primary-foreground">
              Raise funds better, faster, and for free.
            </h1>
            <p className="text-[18px] leading-snug text-primary-foreground/70">
              Partner with Tzedar and receive a percentage of every auction that
              supports your cause.
            </p>
          </div>
        </div>

        {/* Form area */}
        <div className="flex-1 px-6 pt-8 pb-12">
          <PartnerForm onSubmit={() => setSubmitted(true)} />
        </div>
      </div>
    </div>
  )
}
