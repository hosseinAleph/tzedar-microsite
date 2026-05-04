import { Navbar } from "@/components/organisms/Navbar"
import { Footer } from "@/components/organisms/Footer"

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
        <h1 className="text-3xl font-bold text-foreground mb-4">Privacy Notice</h1>
        <p className="text-muted-foreground max-w-prose">
          This page is coming soon. Our full Privacy Notice will be published here shortly.
        </p>
      </main>
      <Footer />
    </div>
  )
}
