import { useState, useCallback } from "react"
import { useNavigate, Link } from "react-router-dom"
import { Info } from "lucide-react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import type { UseFormRegisterReturn } from "react-hook-form"
import { cn } from "@/lib/utils"
import { TzLogo } from "@/components/atoms/TzLogo"
import { SubmissionPopup } from "@/components/molecules/SubmissionPopup"
import { TzButton } from "@/components/atoms/TzButton"
import decorImage from "@/assets/images/join-as-charity-decor.svg"
import imgCloseLg from "@/assets/images/close-lg.svg"
import imgClose from "@/assets/images/close.svg"

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
    placeholder: "e.g. 12345678901",
    hint: "We'll use this to confirm your spot and send next steps.",
  },
]

/* ── Zod schema ── */

const partnerSchema = z.object({
  name: z
    .string()
    .min(1, "Please enter your full name.")
    .refine((v) => v.trim().split(/\s+/).length >= 2, {
      message: "Please enter your full name.",
    }),
  email: z.email({ message: "Please use your organisation's email address." }),

  org: z.string().min(1, "Please enter your organisation's registered name."),
  abn: z.string().refine((v) => /^\d{11}$/.test(v.replaceAll(/[\s-]/g, "")), {
    message: "Please enter a valid 11-digit ABN. No spaces or dashes.",
  }),
})

type FormValues = z.infer<typeof partnerSchema>

/* ── DGR callout ── */
function DgrCallout() {
  return (
    <div
      className="flex items-start gap-3 rounded-xl border border-info
        bg-info-surface p-4"
    >
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
  registration,
  error,
}: Readonly<{
  id: string
  label: string
  placeholder: string
  hint: string
  registration: UseFormRegisterReturn
  error?: string
}>) {
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
        inputMode={id === "abn" ? "numeric" : undefined}
        placeholder={placeholder}
        {...registration}
        className={cn(
          "h-11 w-full rounded-lg border bg-background px-4 text-sm",
          "text-text-primary transition placeholder:text-text-placeholder",
          "focus:ring-2 focus:outline-none",
          error
            ? "border-destructive text-destructive focus:ring-destructive/20"
            : "border-border-strong focus:ring-brand"
        )}
      />
      {error ? (
        <p className="text-[12px] leading-snug text-destructive">{error}</p>
      ) : (
        hint && (
          <p className="text-[12px] leading-snug text-brand-medium/70">
            {hint}
          </p>
        )
      )}
    </div>
  )
}

/* ── Form content (used in both layouts) ── */
function PartnerForm({
  onSubmit: onSubmitProp,
}: Readonly<{ onSubmit: () => void }>) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(partnerSchema),
  })

  // Replace with real emailJS / API call when ready
  const submitHandler = handleSubmit(async (data) => {
    console.log("🚀 ~ PartnerForm ~ data:", data)
    await new Promise<void>((resolve) => setTimeout(resolve, 3000))
    onSubmitProp()
  })

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-8">
      {/* Form header */}
      <div className="flex flex-col gap-2">
        <p
          className="text-[11px] leading-snug font-semibold tracking-[0.2em]
            text-[#6b9db8] uppercase"
        >
          Join as a partner
        </p>
        <div>
          <p
            className="text-[18px] leading-snug font-semibold text-text-primary"
          >
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
          <FormInput
            key={f.id}
            {...f}
            registration={register(f.id as keyof FormValues)}
            error={errors[f.id as keyof FormValues]?.message}
          />
        ))}
      </div>

      <DgrCallout />

      {/* Submit */}
      <div className="flex flex-col gap-3">
        <TzButton type="submit" loading={isSubmitting} size="sm">
          Join as a partner
        </TzButton>
      </div>

      <p className="text-center text-[12px] leading-snug text-text-secondary/70">
        By submitting you agree to{" "}
        <Link to="/terms" className="text-brand-light underline">
          our terms
        </Link>
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
      className={`flex min-h-screen flex-col bg-background lg:bg-surface-neutral
        ${isLeaving ? "animate-page-exit" : "animate-page-enter"}`}
    >
      {/* ── Submission popup (shown over both layouts) ── */}
      {submitted && (
        <SubmissionPopup
          onClose={() => {
            navigate("/")
          }}
        />
      )}

      {/* ════════════════════════════════
          DESKTOP layout (lg+): two columns
      ════════════════════════════════ */}
      {/* p-4 on the outer wrapper + gap-4 between panels eliminates the gray background gaps */}
      <div className="relative hidden min-h-screen flex-1 gap-4 p-4 lg:flex">
        {/* Left sidebar — pale blue */}
        <div
          className="relative w-[360px] overflow-hidden rounded-[24px]
            bg-brand-light px-8 pt-10 pb-12 xl:w-[420px]"
        >
          {/* Decorative glow */}
          <img
            src={decorImage}
            alt=""
            className="pointer-events-none absolute right-0 bottom-10 w-[236px]
              mix-blend-plus-lighter"
            aria-hidden="true"
          />

          {/* Logo + divider */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            <TzLogo height={48} variant="white" />
            <div className="w-full border-t border-primary-foreground/20" />
          </div>

          {/* Heading block — vertically centered in the remaining sidebar height */}
          <div
            className="relative z-10 flex flex-1 flex-col justify-center gap-6"
          >
            <p
              className="mt-10 text-[11px] font-semibold tracking-[0.2em]
                text-primary-foreground/80 uppercase"
            >
              Charity partnership
            </p>
            <h1
              className="text-[48px] leading-none font-bold
                text-primary-foreground"
            >
              raise funds better, faster, and for free.
            </h1>
            <p className="text-[18px] leading-snug text-primary-foreground/70">
              Partner with Tzedar and receive a percentage of every auction that
              supports your cause.
            </p>
          </div>
        </div>

        {/* Right panel — full-height white card, form centered inside */}
        <div
          className="flex flex-1 items-center justify-center rounded-[32px]
            border border-card-edge bg-card py-10 shadow-(--shadow-form-card)"
        >
          <div className="w-full max-w-[720px] px-8">
            <PartnerForm onSubmit={() => setSubmitted(true)} />
          </div>
        </div>

        {/* Close button — top-right of the overall desktop container */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className="absolute top-[40px] right-[40px] flex size-12
            cursor-pointer items-center justify-center rounded-2xl
            transition-colors hover:bg-border-default/30"
        >
          <img src={imgCloseLg} alt="Close" />
        </button>
      </div>

      {/* ════════════════════════════════
          MOBILE layout (< lg): stacked
      ════════════════════════════════ */}
      <div className="flex flex-1 flex-col lg:hidden">
        {/* Mobile nav bar */}
        <div
          className="sticky top-0 z-10 flex items-center justify-between
            border-b border-border-default bg-background px-4 py-3"
        >
          <TzLogo height={28} />
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close"
            className="rounded-full p-2 transition-colors
              hover:bg-brand-surface"
          >
            <img src={imgClose} alt="Close" />
          </button>
        </div>

        {/* Pale-blue hero card */}
        <div
          className="relative mx-4 mt-4 overflow-hidden rounded-2xl bg-[#9fc5e0]
            px-6 py-10"
        >
          <img
            src={decorImage}
            alt=""
            className="pointer-events-none absolute top-1/2 right-0 w-[180px]
              -translate-y-1/2 opacity-50 mix-blend-plus-lighter"
            aria-hidden="true"
          />
          <div className="relative z-10 flex flex-col gap-6">
            <p
              className="text-[11px] font-semibold tracking-[0.2em]
                text-primary-foreground/80 uppercase"
            >
              Charity partnership
            </p>
            <h1
              className="text-[28px] leading-snug font-semibold
                text-primary-foreground"
            >
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
