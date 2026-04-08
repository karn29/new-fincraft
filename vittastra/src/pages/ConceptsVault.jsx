import { useState } from 'react'
import { ArrowLeft, Lock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { concepts } from '../data/concepts'

export default function ConceptsVault() {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const categories = ['All', ...new Set(concepts.map(c => c.category))]
  const filteredConcepts = selectedCategory === 'All' 
    ? concepts 
    : concepts.filter(c => c.category === selectedCategory)

  return (
    <div className="min-h-screen p-8">
      <button onClick={() => navigate('/')} className="flex items-center gap-2 text-accent mb-8 hover:underline">
        <ArrowLeft className="w-5 h-5" /> Back to Home
      </button>
      
      <h1 className="font-syne text-5xl font-bold mb-4">CONCEPTS VAULT</h1>
      <p className="text-muted mb-8 italic">67 financial concepts. Unlock them by making decisions.</p>
      
      {/* Category Filter */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 border ${
              selectedCategory === cat 
                ? 'border-accent text-accent' 
                : 'border-border text-muted hover:border-accent'
            } transition-colors`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Concepts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredConcepts.map((concept) => (
          <div
            key={concept.id}
            className="p-6 border border-border bg-muted/20 hover:border-accent transition-all cursor-pointer group"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-syne text-lg font-bold">{concept.name}</h3>
              <Lock className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
            </div>
            <p className="text-sm text-muted mb-4">{concept.definition}</p>
            <div className="text-xs text-muted">
              <span className="px-2 py-1 bg-base rounded">{concept.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
