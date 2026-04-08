import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function InvestorReport() {
  const navigate = useNavigate()
  
  return (
    <div className="min-h-screen p-8 bg-document text-base">
      <button onClick={() => navigate('/')} className="flex items-center gap-2 text-accent mb-8 hover:underline no-print">
        <ArrowLeft className="w-5 h-5" /> Back to Home
      </button>
      
      <div className="max-w-4xl mx-auto print:max-w-none">
        {/* Header */}
        <div className="border-b-2 border-base pb-8 mb-8">
          <h1 className="font-syne text-4xl font-bold mb-2">INVESTOR REPORT</h1>
          <p className="font-mono text-sm text-muted">VITTAŚĀSTRA // CONFIDENTIAL</p>
        </div>

        {/* Profile Section */}
        <div className="mb-8">
          <h2 className="font-syne text-2xl font-bold mb-4">OPERATOR PROFILE</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 border border-base">
            <div>
              <div className="text-xs text-muted mb-1">ARCHETYPE</div>
              <div className="font-mono">UNKNOWN OPERATOR</div>
            </div>
            <div>
              <div className="text-xs text-muted mb-1">RANK</div>
              <div className="font-mono">INTERN</div>
            </div>
            <div>
              <div className="text-xs text-muted mb-1">DECISIONS</div>
              <div className="font-mono">0</div>
            </div>
            <div>
              <div className="text-xs text-muted mb-1">CONCEPTS</div>
              <div className="font-mono">0 / 67</div>
            </div>
          </div>
        </div>

        {/* Performance Section */}
        <div className="mb-8">
          <h2 className="font-syne text-2xl font-bold mb-4">SIMULATION PERFORMANCE</h2>
          <div className="p-6 border border-base">
            <p className="text-muted italic">Complete simulations to see your performance data here.</p>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-8">
          <h2 className="font-syne text-2xl font-bold mb-4">SUMMARY</h2>
          <div className="p-6 border border-base">
            <p className="font-lora leading-relaxed">
              Begin your journey by completing market and boardroom simulations. 
              Your financial fingerprint will emerge from your decisions.
            </p>
          </div>
        </div>

        {/* Print Button */}
        <button 
          onClick={() => window.print()}
          className="no-print px-8 py-4 bg-accent text-base font-mono font-bold hover:bg-accent/80 transition-colors"
        >
          &gt;_ DOWNLOAD AS PDF
        </button>
      </div>
    </div>
  )
}
