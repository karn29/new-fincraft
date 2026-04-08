import { useState, useEffect } from 'react'
import { useNavigate, ArrowLeft } from 'lucide-react'

const dailyBriefs = [
  {
    date: 'Day 1',
    title: 'The Day India Almost Defaulted',
    content: [
      'June 1991. India had $1.2 billion in foreign exchange reserves.',
      'Monthly imports cost $800 million. The math was brutal: default in 15 days.',
      'Gold was airlifted to London as collateral for an emergency IMF loan.',
      'Prime Minister Narasimha Rao faced a choice: gradual decline or radical reform.',
      'He chose reform. Manmohan Singh became Finance Minister.',
      'The License Raj ended. India\'s growth story began.'
    ],
    concept: 'Foreign Exchange Reserves',
    question: {
      text: 'What would you have done with only 2 weeks of import cover?',
      options: ['Devalue currency immediately', 'Seek IMF bailout'],
      correct: 1
    }
  }
]

export default function DailyBrief() {
  const navigate = useNavigate()
  const [todayBrief, setTodayBrief] = useState(dailyBriefs[0])
  const [answered, setAnswered] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  return (
    <div className="min-h-screen p-8">
      <button onClick={() => navigate('/')} className="flex items-center gap-2 text-accent mb-8 hover:underline">
        <ArrowLeft className="w-5 h-5" /> Back to Home
      </button>
      
      <div className="max-w-3xl mx-auto">
        <div className="font-mono text-accent text-sm mb-4">{todayBrief.date}</div>
        <h1 className="font-syne text-4xl font-bold mb-8">{todayBrief.title}</h1>
        
        {/* Story */}
        <div className="space-y-4 mb-12">
          {todayBrief.content.map((line, i) => (
            <p key={i} className="font-lora text-lg leading-relaxed">{line}</p>
          ))}
        </div>

        {/* Concept */}
        <div className="p-6 border border-accent bg-accent/5 mb-12">
          <div className="text-xs text-accent mb-2">CONCEPT ILLUSTRATED</div>
          <div className="font-syne text-xl font-bold">{todayBrief.concept}</div>
        </div>

        {/* Quick Question */}
        <div className="p-8 border border-border bg-muted/20">
          <h2 className="font-syne text-xl font-bold mb-6">{todayBrief.question.text}</h2>
          <div className="space-y-4">
            {todayBrief.question.options.map((option, i) => (
              <button
                key={i}
                onClick={() => {
                  setSelectedOption(i)
                  setAnswered(true)
                }}
                disabled={answered}
                className={`w-full p-4 text-left border ${
                  answered 
                    ? i === todayBrief.question.correct 
                      ? 'border-accent bg-accent/10' 
                      : 'border-loss bg-loss/10'
                    : 'border-border hover:border-accent'
                } transition-colors`}
              >
                {option}
              </button>
            ))}
          </div>
          
          {answered && (
            <div className="mt-6 p-4 bg-accent/10 border border-accent">
              <div className="text-sm">
                {selectedOption === todayBrief.question.correct 
                  ? 'Correct. India did seek an IMF bailout and used it as leverage for reforms.'
                  : 'Interesting. India actually sought the IMF bailout but used it strategically.'}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
