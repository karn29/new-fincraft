import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import MarketSimulator from './pages/MarketSimulator'
import BoardroomSimulator from './pages/BoardroomSimulator'
import ProblemRoom from './pages/ProblemRoom'
import ConceptsVault from './pages/ConceptsVault'
import InvestorReport from './pages/InvestorReport'
import DailyBrief from './pages/DailyBrief'
import KnowledgeDuel from './pages/KnowledgeDuel'

function App() {
  return (
    <div className="min-h-screen bg-base text-document font-lora cursor-crosshair relative">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/market" element={<MarketSimulator />} />
        <Route path="/market/:scenarioId" element={<MarketSimulator />} />
        <Route path="/boardroom" element={<BoardroomSimulator />} />
        <Route path="/boardroom/:scenarioId" element={<BoardroomSimulator />} />
        <Route path="/problem-room" element={<ProblemRoom />} />
        <Route path="/concepts" element={<ConceptsVault />} />
        <Route path="/report" element={<InvestorReport />} />
        <Route path="/daily-brief" element={<DailyBrief />} />
        <Route path="/duel" element={<KnowledgeDuel />} />
      </Routes>
    </div>
  )
}

export default App
