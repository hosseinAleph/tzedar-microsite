import { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { HomePage } from "@/pages/HomePage"
import { JoinAsCharityPage } from "@/pages/JoinAsCharityPage"
import { PrivacyPage } from "@/pages/PrivacyPage"
import { TermsPage } from "@/pages/TermsPage"
import { DisclaimerPage } from "@/pages/DisclaimerPage"

function HashScrollHandler() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.slice(1)
    // Delay lets the target page finish rendering before we try to scroll
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }, 80)
    return () => clearTimeout(timer)
  }, [hash, pathname])

  return null
}

export function App() {
  return (
    <>
      <HashScrollHandler />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/join" element={<JoinAsCharityPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
      </Routes>
    </>
  )
}

export default App
