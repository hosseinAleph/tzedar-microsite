import { Navbar } from "@/components/organisms/Navbar"
import { Footer } from "@/components/organisms/Footer"

export function DisclaimerPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main
        className="flex flex-1 flex-col items-center justify-center px-6 py-20
          text-center"
      >
        <h1 className="mb-4 text-3xl font-bold text-foreground">Disclaimer</h1>
        <p className="max-w-prose text-muted-foreground">
          This page is coming soon. Our full Disclaimer will be published here
          shortly.
        </p>
      </main>
      <Footer />
    </div>
  )
}
