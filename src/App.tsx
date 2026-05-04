import { Routes, Route } from "react-router-dom"
import { HomePage } from "@/pages/HomePage"
import { JoinAsCharityPage } from "@/pages/JoinAsCharityPage"
import { PrivacyPage } from "@/pages/PrivacyPage"
import { TermsPage } from "@/pages/TermsPage"
import { DisclaimerPage } from "@/pages/DisclaimerPage"

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/join" element={<JoinAsCharityPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/disclaimer" element={<DisclaimerPage />} />
    </Routes>
  )
}

export default App
