import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { TrendingUp, Users, BookOpen, ChevronRight, Flame } from 'lucide-react'

const tickerItems = [
  '1929 · BLACK TUESDAY · DOW −89%',
  '1991 · INDIA LIBERALIZATION · SENSEX ×10',
  '1992 · HARSHAD MEHTA · ₹5000CR SCAM',
  '2000 · DOT-COM COLLAPSE · $5T WIPED',
  '2008 · LEHMAN BROTHERS · CHAPTER 11',
  '2021 · ZOMATO IPO · BLINKIT ACQUISITION',
  'YES BANK COLLAPSE · ADANI SHORT REPORT'
]

const scenarioPreviews = [
  { year: 1929, title: 'Black Tuesday', hook: 'The day the roaring twenties died.' },
  { year: 1991, title: 'India Liberalization', hook: 'The IMF gave India 15 days.' },
  { year: 1992, title: 'Harshad Mehta Scam', hook: '₹5000 crore built on air.' },
  { year: 2008, title: 'The Great Collapse', hook: 'Lehman filed at 1:45AM.' },
  { year: 2011, title: 'Netflix Qwikster', hook: 'Lost 800K subscribers in a month.' },
  { year: 2003, title: 'Amazon AWS', hook: 'Internal tool or world-changing bet?' },
  { year: 1999, title: 'Infosys Y2K', hook: 'Printing money but it ends soon.' },
  { year: 2021, title: 'Zomato Blinkit', hook: '₹400Cr/month burn. Acquire or run?' }
]

const featureCards = [
  {
    icon: TrendingUp,
    title: 'Market Simulator',
    description: 'Go back to 2008. Invest ₹10 lakhs. See if you survive the crash.'
  },
  {
    icon: Users,
    title: 'Boardroom Simulator',
    description: 'Sit in Netflix\'s board meeting. Hear the arguments. Make the call that changed everything.'
  },
  {
    icon: BookOpen,
    title: 'The Problem Room',
    description: 'A fictional startup is in crisis. No right answer exists. What would you do?'
  }
]

export default function Landing() {
  const navigate = useNavigate()
  const [playersToday, setPlayersToday] = useState({})

  useEffect(() => {
    const interval = setInterval(() => {
      setPlayersToday({
        '1929': Math.floor(Math.random() * 500) + 200,
        '1991': Math.floor(Math.random() * 800) + 400,
        '1992': Math.floor(Math.random() * 600) + 300,
        '2008': Math.floor(Math.random() * 1200) + 600
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
        {/* Animated background chart */}
        <div className="absolute inset-0 opacity-20 blur-sm">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
            <defs>
              <linearGradient id="candleGreen" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00FF88" />
                <stop offset="100%" stopColor="#00CC6A" />
              </linearGradient>
              <linearGradient id="candleRed" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FF2D55" />
                <stop offset="100%" stopColor="#CC2444" />
              </linearGradient>
            </defs>
            {[...Array(50)].map((_, i) => (
              <motion.rect
                key={i}
                x={i * 24}
                y={Math.random() * 400 + 100}
                width={16}
                height={Math.random() * 80 + 20}
                fill={Math.random() > 0.5 ? 'url(#candleGreen)' : 'url(#candleRed)'}
                initial={{ opacity: 0.3 }}
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2 + Math.random(), repeat: Infinity }}
              />
            ))}
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="font-syne text-7xl md:text-9xl font-bold tracking-widest mb-6 blinking-cursor">
            VITTAŚĀSTRA
          </h1>
          <p className="text-xl md:text-2xl mb-3 font-light">
            You don't read about money. You live it.
          </p>
          <p className="text-lg italic font-lora text-muted mb-12 max-w-2xl mx-auto">
            Step into the rooms where India's biggest financial decisions were made. Make the call. See what history says.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px #00FF88' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/market')}
              className="px-8 py-4 border border-accent text-accent font-mono text-lg hover:bg-accent hover:text-base transition-all duration-300"
            >
              &gt;_ ENTER THE MARKET
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px #00FF88' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/boardroom')}
              className="px-8 py-4 border border-accent text-accent font-mono text-lg hover:bg-accent hover:text-base transition-all duration-300"
            >
              &gt;_ TAKE THE BOARDROOM
            </motion.button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex gap-8 mt-16 z-10"
        >
          {[
            { value: '14,000+', label: 'decisions made' },
            { value: '8', label: 'historical scenarios' },
            { value: '67', label: 'concepts to unlock' }
          ].map((stat, i) => (
            <div key={i} className="text-center fade-in-up" style={{ animationDelay: `${i * 0.2}s` }}>
              <div className="font-syne text-3xl font-bold text-accent">{stat.value}</div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* What Is This Section */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-syne text-4xl md:text-5xl font-bold text-center mb-16">
            WHAT IS THIS?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featureCards.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-8 border border-border hover:border-accent transition-all duration-300 group"
              >
                <feature.icon className="w-12 h-12 text-accent mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-syne text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="font-lora text-muted leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scenario Previews */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-syne text-4xl md:text-5xl font-bold mb-12">
            SCENARIOS
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {scenarioPreviews.map((scenario, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex-shrink-0 w-80 p-6 border border-border bg-muted/20 hover:border-accent transition-all cursor-pointer"
                onClick={() => navigate(i < 4 ? '/market' : '/boardroom')}
              >
                <div className="font-mono text-accent text-sm mb-2">{scenario.year}</div>
                <h3 className="font-syne text-xl font-bold mb-3">{scenario.title}</h3>
                <p className="font-lora text-muted text-sm">{scenario.hook}</p>
                {playersToday[scenario.year.toString()] && (
                  <div className="mt-4 text-xs text-muted flex items-center gap-2">
                    <Users className="w-3 h-3" />
                    {playersToday[scenario.year.toString()]} people played this today
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Identity Section */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-syne text-4xl md:text-5xl font-bold mb-8">
            YOUR IDENTITY
          </h2>
          <p className="font-lora text-lg mb-8 leading-relaxed">
            Every decision you make builds your financial fingerprint. Your risk appetite. Your biases. Your blind spots. 
            See who you really are as a thinker.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { label: 'Risk Appetite', value: '—' },
              { label: 'Innovation Bias', value: '—' },
              { label: 'Loss Tolerance', value: '—' },
              { label: 'Contrarian Score', value: '—' }
            ].map((axis, i) => (
              <div key={i} className="p-4 border border-border">
                <div className="text-2xl font-mono text-accent mb-2">{axis.value}</div>
                <div className="text-sm text-muted">{axis.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ticker Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-base border-t border-border py-3 overflow-hidden z-50">
        <div className="ticker-animation whitespace-nowrap flex">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="mx-8 font-mono text-sm text-muted">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
