import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Info, X } from "lucide-react"
import { Logo } from "@/components/atoms/Logo"

const decorImage = "https://www.figma.com/api/mcp/asset/b7f2046f-02cc-40d5-88b7-21dd2e116668"

/* ── Shared form fields ── */
const fields = [
  { id: "name",  label: "Full name",          placeholder: "e.g. John Doe",                  hint: "" },
  { id: "email", label: "Work email",          placeholder: "e.g. john@oceancare.au",          hint: "" },
  { id: "org",   label: "Organisation name",   placeholder: "e.g. Ocean Care Australia Ltd",  hint: "" },
  { id: "abn",   label: "ABN",                 placeholder: "e.g. 12 345 678 901",            hint: "We'll use this to confirm your spot and send next steps." },
]

/* ── DGR callout ── */
function DgrCallout() {
  return (
    <div className="flex gap-3 items-start p-4 rounded-xl border border-info bg-info-surface">
      <Info className="w-5 h-5 text-info-dark shrink-0 mt-0.5" />
      <div className="flex flex-col gap-0.5">
        <p className="text-sm font-semibold text-info-darker">DGR status is required</p>
        <p className="text-xs text-info-dark leading-snug">
          Tzedar automatically generates tax-deductible receipts for donors — your DGR endorsement is what makes this possible.
        </p>
      </div>
    </div>
  )
}

/* ── Single text input ── */
function FormInput({ id, label, placeholder, hint }: { id: string; label: string; placeholder: string; hint: string }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={id} className="text-xs font-semibold text-text-primary/70 leading-snug">{label}</label>
      <input
        id={id}
        type={id === "email" ? "email" : "text"}
        placeholder={placeholder}
        className="h-11 w-full px-4 rounded-lg border border-border-strong bg-background text-sm text-text-primary placeholder:text-text-placeholder focus:outline-none focus:ring-2 focus:ring-brand transition"
      />
      {hint && <p className="text-xs text-brand-medium/70 leading-snug">{hint}</p>}
    </div>
  )
}

/* ── The form card (shared between desktop right panel and mobile) ── */
function PartnerForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 text-center py-12">
        <div className="w-16 h-16 rounded-full bg-brand-subtle flex items-center justify-center">
          <ArrowRight className="w-8 h-8 text-brand" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-xl text-text-primary">Application received!</p>
          <p className="text-sm text-text-secondary/70 leading-snug max-w-xs">
            We'll review your details and reach out within 2 business days.
          </p>
        </div>
        <Link to="/" className="text-sm font-semibold text-brand-medium hover:underline">
          ← Back to home
        </Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      {/* Form header */}
      <div className="flex flex-col gap-1">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-medium">Join as a partner</p>
        <p className="font-semibold text-lg text-text-primary leading-snug">Let's get started.</p>
        <p className="text-xs text-text-secondary/70 leading-snug">Join Tzedar as a launch partner charity.</p>
      </div>

      {/* Fields */}
      <div className="flex flex-col gap-4">
        {fields.map((f) => <FormInput key={f.id} {...f} />)}
      </div>

      <DgrCallout />

      {/* Submit */}
      <div className="flex flex-col gap-3">
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-sm text-primary-foreground transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          style={{ backgroundImage: "var(--gradient-btn-submit)" }}
        >
          Join as a partner
          <ArrowRight className="w-4 h-4" />
        </button>
        <p className="text-xs text-text-secondary/70 text-center leading-snug">
          Already have an account?{" "}
          <button type="button" className="text-brand-light font-semibold hover:underline">Login</button>.
        </p>
      </div>

      <p className="text-xs text-text-secondary/70 text-center leading-snug">
        By submitting you agree to{" "}
        <a href="#" className="text-brand-light underline">our terms</a>
        . We'll only contact you about your application.
      </p>
    </form>
  )
}

/* ══════════════════════════════════════════
   PAGE
══════════════════════════════════════════ */
export function JoinAsCharityPage() {
  return (
    <div className="min-h-screen bg-background lg:bg-surface-neutral flex flex-col">

      {/* ── DESKTOP layout (lg+): two columns ── */}
      <div className="hidden lg:flex flex-1 min-h-screen">

        {/* Left sidebar — green */}
        <div
          className="relative flex flex-col justify-between w-[360px] xl:w-[420px] shrink-0 px-8 pt-10 pb-12 rounded-[24px] m-4 overflow-hidden bg-brand-sidebar"
        >
          {/* Decorative glow */}
          <img
            src={decorImage}
            alt=""
            className="absolute left-[160px] top-1/2 -translate-y-1/4 w-[236px] mix-blend-plus-lighter opacity-60 pointer-events-none"
            aria-hidden="true"
          />

          {/* Logo */}
          <div className="flex flex-col gap-6 relative z-10">
            <Logo height={40} variant="white" />
            <div className="border-t border-primary-foreground/20 w-full" />
          </div>

          {/* Heading block */}
          <div className="relative z-10 flex flex-col gap-6 mt-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">
              Charity partnership
            </p>
            <h1 className="font-bold text-4xl xl:text-5xl text-primary-foreground leading-none">
              raise funds better, faster, and for free.
            </h1>
            <p className="text-lg text-primary-foreground/70 leading-snug">
              Partner with Tzedar and receive a percentage of every auction that supports your cause.
            </p>
          </div>
        </div>

        {/* Right column — form card */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-[580px] bg-card rounded-[32px] shadow-[var(--shadow-form-card)] border border-card-edge px-12 py-10">
            <PartnerForm />
          </div>
        </div>
      </div>

      {/* ── MOBILE layout (< lg): stacked ── */}
      <div className="lg:hidden flex flex-col flex-1">
        {/* Mobile nav */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border-default sticky top-0 bg-background z-10">
          <Logo height={28} />
          <Link to="/" aria-label="Close" className="p-2 rounded-full hover:bg-brand-surface transition-colors">
            <X className="w-5 h-5 text-text-secondary" />
          </Link>
        </div>

        {/* Green hero card */}
        <div
          className="relative mx-4 mt-4 rounded-2xl px-6 py-10 overflow-hidden bg-brand-light"
        >
          <img
            src={decorImage}
            alt=""
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[180px] mix-blend-plus-lighter opacity-50 pointer-events-none"
            aria-hidden="true"
          />
          <div className="relative z-10 flex flex-col gap-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">Charity partnership</p>
            <h1 className="font-semibold text-2xl text-primary-foreground leading-snug">
              Raise funds better, faster, and for free.
            </h1>
            <p className="text-base text-primary-foreground/70 leading-snug">
              Partner with Tzedar and receive a percentage of every auction that supports your cause.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="flex-1 px-6 pt-8 pb-12">
          <PartnerForm />
        </div>
      </div>

    </div>
  )
}
