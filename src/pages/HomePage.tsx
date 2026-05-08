import { Navbar } from "@/components/organisms/Navbar"
import { HeroSection } from "@/components/organisms/HeroSection"
import { HowItWorksSection } from "@/components/organisms/HowItWorksSection"
import { PricingSection } from "@/components/organisms/PricingSection"
import { PastSalesSection } from "@/components/organisms/PastSalesSection"
import { CharitiesSection } from "@/components/organisms/CharitiesSection"
import { AppDownloadSection } from "@/components/organisms/AppDownloadSection"
import { CharityCtaSection } from "@/components/organisms/CharityCtaSection"
import { Footer } from "@/components/organisms/Footer"

export function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <HowItWorksSection />
        <PricingSection />
        <PastSalesSection />
        <CharitiesSection />
        <CharityCtaSection />
        <AppDownloadSection />
      </main>
      <Footer />
    </div>
  )
}
