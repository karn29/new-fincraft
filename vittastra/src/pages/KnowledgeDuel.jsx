import { useState } from 'react'
import { useNavigate, ArrowLeft } from 'lucide-react'

const duelQuestions = [
  {
    question: 'A company burns ₹5Cr/month with ₹30Cr in the bank. How many months of runway do they have?',
    options: ['3 months', '6 months', '12 months', '18 months'],
    correct: 1,
    concept: 'Burn Rate & Runway'
  },
  {
    question: 'Stock drops 50%. What gain is needed to return to original price?',
    options: ['50%', '75%', '100%', '150%'],
    correct: 2,
    concept: 'Percentage Math'
  },
  {
    question: 'You own 10% of a company. It raises money at 2x valuation with 20% dilution. You now own:',
    options: ['8%', '10%', '12%', '15%'],
    correct: 0,
    concept: 'Equity Dilution'
  }
]

export default function KnowledgeDuel() {
  const navigate = useNavigate()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const [completed, setCompleted] = useState(false)

  const handleAnswer = (optionIndex) => {
    if (answered) return
    setSelectedOption(optionIndex)
    setAnswered(true)
    if (optionIndex === duelQuestions[currentQuestion].correct) {
      setScore(score + 1)
    }
    
    setTimeout(() => {
      if (currentQuestion < duelQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setAnswered(false)
        setSelectedOption(null)
      } else {
        setCompleted(true)
      }
    }, 2000)
  }

  if (completed) {
    return (
      <div className="min-h-screen p-8 flex items-center justify-center">
        <div className="max-w-md text-center">
          <h1 className="font-syne text-4xl font-bold mb-4">DUEL COMPLETE</h1>
          <div className="text-6xl font-mono text-accent mb-4">{score}/{duelQuestions.length}</div>
          <p className="text-muted mb-8">Accuracy: {((score / duelQuestions.length) * 100).toFixed(0)}%</p>
          <button onClick={() => navigate('/')} className="px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-base transition-colors">
            Return Home
          </button>
        </div>
      </div>
    )
  }

  const q = duelQuestions[currentQuestion]

  return (
    <div className="min-h-screen p-8">
      <button onClick={() => navigate('/')} className="flex items-center gap-2 text-accent mb-8 hover:underline">
        <ArrowLeft className="w-5 h-5" /> Back to Home
      </button>
      
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <span className="font-mono text-sm">QUESTION {currentQuestion + 1}/{duelQuestions.length}</span>
          <span className="font-mono text-accent">SCORE: {score}</span>
        </div>

        <h1 className="font-syne text-2xl font-bold mb-8">{q.question}</h1>

        <div className="space-y-4">
          {q.options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              disabled={answered}
              className={`w-full p-6 text-left border ${
                answered 
                  ? i === q.correct 
                    ? 'border-accent bg-accent/10' 
                    : i === selectedOption 
                      ? 'border-loss bg-loss/10'
                      : 'border-border opacity-50'
                  : 'border-border hover:border-accent'
              } transition-colors`}
            >
              {option}
            </button>
          ))}
        </div>

        {answered && (
          <div className="mt-8 p-6 border border-accent bg-accent/5">
            <div className="text-sm text-accent mb-2">CONCEPT</div>
            <div className="font-syne text-lg">{q.concept}</div>
          </div>
        )}
      </div>
    </div>
  )
}
