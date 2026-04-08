import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { marketScenarios, marketNewsHeadlines } from '../data/marketScenarios'
import { concepts } from '../data/concepts'
import { LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'
import { ArrowLeft, TrendingUp, AlertTriangle, Info, Lock, CheckCircle } from 'lucide-react'

export default function MarketSimulator() {
  const { scenarioId } = useParams()
  const navigate = useNavigate()
  const [phase, setPhase] = useState('selection') // selection, brief, allocation, simulation, debrief
  const [selectedScenario, setSelectedScenario] = useState(null)
  const [allocations, setAllocations] = useState({})
  const [portfolioValue, setPortfolioValue] = useState(1000000)
  const [currentEventIndex, setCurrentEventIndex] = useState(0)
  const [unlockedConcepts, setUnlockedConcepts] = useState([])
  const [showInsightFlash, setShowInsightFlash] = useState(false)
  const [currentConcept, setCurrentConcept] = useState(null)

  useEffect(() => {
    if (scenarioId) {
      const scenario = marketScenarios.find(s => s.id === scenarioId)
      if (scenario) {
        setSelectedScenario(scenario)
        setPhase('brief')
      }
    }
  }, [scenarioId])

  const handleAllocate = (companyId, value) => {
    setAllocations(prev => ({ ...prev, [companyId]: value }))
  }

  const totalAllocated = Object.values(allocations).reduce((a, b) => a + (parseFloat(b) || 0), 0)

  const startSimulation = () => {
    if (Math.abs(totalAllocated - 100) < 0.1) {
      setPhase('simulation')
      // Unlock relevant concepts
      const newConcepts = concepts.filter(c => c.seenIn.includes(selectedScenario?.id))
      if (newConcepts.length > 0) {
        setCurrentConcept(newConcepts[0])
        setShowInsightFlash(true)
        setTimeout(() => {
          setShowInsightFlash(false)
          setUnlockedConcepts(prev => [...prev, ...newConcepts.map(c => c.id)])
        }, 4000)
      }
    }
  }

  if (phase === 'selection') {
    return (
      <div className="min-h-screen p-8">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-accent mb-8 hover:underline">
          <ArrowLeft className="w-5 h-5" /> Back to Home
        </button>
        <h1 className="font-syne text-5xl font-bold mb-12">MARKET SIMULATOR</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {marketScenarios.map((scenario) => (
            <motion.div
              key={scenario.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, borderColor: '#00FF88' }}
              onClick={() => navigate(`/market/${scenario.id}`)}
              className="p-8 border border-border bg-muted/20 cursor-pointer scanlines relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 px-3 py-1 bg-loss/20 text-loss text-xs font-mono border border-loss/30">
                {scenario.threatLevel}
              </div>
              <div className="font-mono text-accent text-sm mb-2">{scenario.year}</div>
              <h2 className="font-syne text-2xl font-bold mb-3">{scenario.title}</h2>
              <p className="font-lora text-muted mb-4">{scenario.subtitle}</p>
              <p className="text-sm italic mb-6">{scenario.hook}</p>
              <div className="text-xs text-muted flex items-center gap-2">
                <Lock className="w-3 h-3" /> Classified Dossier
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  if (phase === 'brief' && selectedScenario) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-4xl w-full bg-document text-base p-12 shadow-2xl"
        >
          <div className="border-b-2 border-base pb-4 mb-8">
            <div className="font-mono text-sm text-muted mb-2">CLASSIFIED // INTEL BRIEF</div>
            <h1 className="font-syne text-4xl font-bold">{selectedScenario.title} ({selectedScenario.year})</h1>
          </div>
          
          <div className="space-y-4 mb-8">
            {selectedScenario.intelBrief.intro.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.3 }}
                className="font-lora text-lg leading-relaxed"
              >
                {line}
              </motion.p>
            ))}
          </div>

          <div className="bg-muted/10 p-6 border-l-4 border-accent mb-8">
            <h3 className="font-syne text-xl font-bold mb-4">KEY CONCEPTS YOU'LL ENCOUNTER</h3>
            <div className="space-y-3">
              {selectedScenario.intelBrief.keyConcepts.map((concept, i) => (
                <div key={i}>
                  <span className="font-mono text-accent font-bold">{concept.name}</span>
                  <span className="text-muted"> — {concept.definition}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-base/20">
            <button onClick={() => navigate('/market')} className="text-muted hover:text-document underline">
              Skip Brief (Not Recommended)
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setPhase('allocation')}
              className="px-8 py-4 bg-accent text-base font-mono font-bold hover:bg-accent/80 transition-colors"
            >
              &gt;_ PROCEED TO ALLOCATION
            </motion.button>
          </div>
        </motion.div>
      </div>
    )
  }

  if (phase === 'allocation' && selectedScenario) {
    const pieData = Object.entries(allocations)
      .filter(([_, v]) => v > 0)
      .map(([companyId, percentage]) => {
        const company = selectedScenario.companies.find(c => c.id === companyId)
        return { name: company?.name || companyId, value: percentage }
      })

    const COLORS = ['#00FF88', '#00CC6A', '#00AA55', '#008844', '#F5A623']

    return (
      <div className="min-h-screen p-8">
        <button onClick={() => setPhase('brief')} className="flex items-center gap-2 text-accent mb-8 hover:underline">
          <ArrowLeft className="w-5 h-5" /> Back to Brief
        </button>
        
        <h1 className="font-syne text-4xl font-bold mb-8">ALLOCATE YOUR CAPITAL</h1>
        <p className="font-lora text-muted mb-8">Initial Capital: ₹10,00,000 | Total must equal 100%</p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Company Cards */}
          <div className="lg:col-span-2 space-y-4">
            {selectedScenario.companies.map((company) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-6 border border-border bg-muted/20"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-syne text-xl font-bold">{company.name}</h3>
                    <span className="text-xs px-2 py-1 bg-accent/10 text-accent">{company.sector}</span>
                  </div>
                  <div className="font-mono text-accent">₹{company.price}</div>
                </div>
                <p className="text-sm text-muted mb-4">{company.description}</p>
                
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="0"
                    max="40"
                    value={allocations[company.id] || 0}
                    onChange={(e) => handleAllocate(company.id, e.target.value)}
                    className="flex-1 accent-accent"
                  />
                  <input
                    type="number"
                    min="0"
                    max="40"
                    value={allocations[company.id] || ''}
                    onChange={(e) => handleAllocate(company.id, e.target.value)}
                    className="w-20 px-3 py-2 bg-base border border-border text-center font-mono"
                    placeholder="0%"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Portfolio Summary */}
          <div className="space-y-6">
            <div className="p-6 border border-border bg-muted/20">
              <h3 className="font-syne text-lg font-bold mb-4">PORTFOLIO COMPOSITION</h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={pieData} cx="50%" cy="50%" innerRadius={40} outerRadius={70}>
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Allocated:</span>
                  <span className={`font-mono ${totalAllocated === 100 ? 'text-accent' : 'text-warning'}`}>
                    {totalAllocated.toFixed(1)}%
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Remaining:</span>
                  <span className="font-mono">{(100 - totalAllocated).toFixed(1)}%</span>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: totalAllocated === 100 ? 1.05 : 1 }}
              whileTap={{ scale: 0.95 }}
              onClick={startSimulation}
              disabled={Math.abs(totalAllocated - 100) >= 0.1}
              className={`w-full py-4 font-mono font-bold ${
                Math.abs(totalAllocated - 100) < 0.1
                  ? 'bg-accent text-base hover:bg-accent/80'
                  : 'bg-muted text-muted cursor-not-allowed'
              }`}
            >
              {Math.abs(totalAllocated - 100) < 0.1 ? '>_ LOCK POSITIONS' : 'ALLOCATION MUST EQUAL 100%'}
            </motion.button>
          </div>
        </div>
      </div>
    )
  }

  if (phase === 'simulation' && selectedScenario) {
    return (
      <div className="min-h-screen p-8">
        <h1 className="font-syne text-4xl font-bold mb-8">SIMULATION IN PROGRESS</h1>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Events Panel */}
          <div className="space-y-4">
            <h2 className="font-syne text-xl font-bold text-accent">MARKET EVENTS</h2>
            {selectedScenario.events.slice(0, currentEventIndex + 1).map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 8 }}
                className="p-4 border border-loss/50 bg-loss/10"
              >
                <h3 className="font-bold mb-2">{event.title}</h3>
                <p className="text-sm text-muted">{event.brief}</p>
              </motion.div>
            ))}
          </div>

          {/* Portfolio Value */}
          <div className="p-8 border border-border bg-muted/20">
            <h2 className="font-syne text-xl font-bold mb-4">PORTFOLIO VALUE</h2>
            <div className="text-5xl font-mono text-accent mb-4">₹{(portfolioValue / 10000).toFixed(2)}L</div>
            <div className="text-sm text-muted">
              Initial: ₹10.00L | Change: {((portfolioValue - 1000000) / 10000).toFixed(2)}L ({(((portfolioValue - 1000000) / 1000000) * 100).toFixed(1)}%)
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setPhase('debrief')}
            className="px-8 py-4 bg-accent text-base font-mono font-bold"
          >
            &gt;_ VIEW DEBRIEF
          </motion.button>
        </div>

        {/* Insight Flash Overlay */}
        <AnimatePresence>
          {showInsightFlash && currentConcept && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-gradient-to-br from-accent/20 via-base to-base z-50 flex items-center justify-center p-8"
            >
              <div className="max-w-2xl text-center">
                <motion.h2
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="font-syne text-6xl font-bold text-accent mb-8"
                >
                  {currentConcept.name.toUpperCase()}
                </motion.h2>
                <p className="text-2xl font-lora mb-8">{currentConcept.definition}</p>
                <p className="text-lg text-muted italic">"{currentConcept.story}"</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  if (phase === 'debrief' && selectedScenario) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-syne text-5xl font-bold mb-8 text-center">DEBRIEF</h1>
          
          <div className="p-8 border border-border bg-muted/20 mb-8 text-center">
            <div className="text-6xl font-mono mb-4">
              <span className={portfolioValue >= 1000000 ? 'text-accent' : 'text-loss'}>
                ₹{(portfolioValue / 10000).toFixed(2)}L
              </span>
            </div>
            <div className="text-xl">
              {portfolioValue >= 1000000 ? (
                <span className="text-accent">+{(((portfolioValue - 1000000) / 1000000) * 100).toFixed(1)}% return</span>
              ) : (
                <span className="text-loss">{(((portfolioValue - 1000000) / 1000000) * 100).toFixed(1)}% loss</span>
              )}
            </div>
          </div>

          <div className="p-8 border border-border bg-muted/20 mb-8">
            <h2 className="font-syne text-2xl font-bold mb-4">WHAT THE LEGEND DID</h2>
            <p className="font-lora mb-4"><strong>{selectedScenario.benchmark.investor}:</strong> {selectedScenario.benchmark.action}</p>
            <p className="text-muted italic">{selectedScenario.benchmark.lesson}</p>
          </div>

          <div className="flex gap-4">
            <button onClick={() => navigate('/market')} className="px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-base transition-colors">
              Back to Markets
            </button>
            <button onClick={() => navigate('/')} className="px-6 py-3 border border-border text-muted hover:border-accent hover:text-accent transition-colors">
              Home
            </button>
          </div>
        </div>
      </div>
    )
  }

  return null
}
