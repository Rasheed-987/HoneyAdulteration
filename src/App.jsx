import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Dashboard from "./Dashboard"
// import PredictionForm from "./PredictionForm"
import Navbar from "./Navbar"
import "./styles.css"

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-honey-50">
        <Navbar />
        <main className="flex-1 container mx-auto py-6 px-4">
          <Routes>
            {/* <Route path="/" element={<Dashboard />} /> */}
            {/* <Route path="/prediction" element={<PredictionForm />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App

