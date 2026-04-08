import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { boardroomScenarios } from '../data/boardroomScenarios'

export default function BoardroomSimulator() {
  const navigate = useNavigate()
  const { scenarioId } = useParams()

  if (!scenarioId) {
    return (
      <div className="min-h-screen p-8">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-accent mb-8 hover:underline">
          <ArrowLeft className="w-5 h-5" /> Back to Home
        </button>
        <h1 className="font-syne text-5xl font-bold mb-12">BOARDROOM SIMULATOR</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {boardroomScenarios.map((scenario) => (
            <motion.div
              key={scenario.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, borderColor: '#00FF88' }}
              onClick={() => navigate(`/boardroom/${scenario.id}`)}
              className="p-8 border border-border bg-muted/20 cursor-pointer"
            >
              <div className="font-mono text-accent text-sm mb-2">{scenario.year}</div>
              <h2 className="font-syne text-2xl font-bold mb-3">{scenario.company}</h2>
              <p className="font-lora text-muted">{scenario.stakes}</p>
              <div className="mt-4 text-xs text-muted flex items-center gap-2">
                <span>CLASSIFIED — BOARD EYES ONLY</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-8">
      <button onClick={() => navigate('/boardroom')} className="flex items-center gap-2 text-accent mb-8 hover:underline">
        <ArrowLeft className="w-5 h-5" /> Back to Boardrooms
      </button>
      <div className="max-w-4xl mx-auto text-center py-24">
        <h1 className="font-syne text-4xl font-bold mb-4">BOARDROOM EXPERIENCE</h1>
        <p className="text-muted mb-8">Full boardroom simulation coming soon for scenario: {scenarioId}</p>
        <button onClick={() => navigate('/')} className="px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-base transition-colors">
          Return Home
        </button>
      </div>
    </div>
  )
}
