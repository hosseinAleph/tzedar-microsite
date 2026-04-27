import { Routes, Route } from "react-router-dom"
import { HomePage } from "@/pages/HomePage"
import { JoinAsCharityPage } from "@/pages/JoinAsCharityPage"

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/join" element={<JoinAsCharityPage />} />
    </Routes>
  )
}

export default App
