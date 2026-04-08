import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Lock } from 'lucide-react'

export default function ProblemRoom() {
  const navigate = useNavigate()
  
  return (
    <div className="min-h-screen p-8">
      <button onClick={() => navigate('/')} className="flex items-center gap-2 text-accent mb-8 hover:underline">
        <ArrowLeft className="w-5 h-5" /> Back to Home
      </button>
      <div className="max-w-4xl mx-auto">
        <h1 className="font-syne text-5xl font-bold mb-4">THE PROBLEM ROOM</h1>
        <p className="text-muted mb-8 italic">Unlocked at Analyst rank — Complete market simulations to advance</p>
        
        <div className="p-12 border border-border bg-muted/20 text-center">
          <Lock className="w-16 h-16 mx-auto mb-6 text-muted" />
          <h2 className="font-syne text-2xl font-bold mb-4">ANALYST RANK REQUIRED</h2>
          <p className="text-muted mb-8 max-w-lg mx-auto">
            The Problem Room contains fictional company crises with no correct answers. 
            You must think from first principles and defend your reasoning.
          </p>
          <button onClick={() => navigate('/market')} className="px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-base transition-colors">
            Start Market Simulations
          </button>
        </div>
      </div>
    </div>
  )
}
