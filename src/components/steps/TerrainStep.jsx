import React from 'react'
import { Map, ArrowRight } from 'lucide-react'

const TerrainStep = ({ formData, updateFormData, onNext }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-blue-100 rounded-xl">
          <Map className="w-8 h-8 text-blue-600" />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-stone-900">Step 3: Map the Terrain</h2>
          <p className="text-stone-500">3–5 Years</p>
        </div>
      </div>

      <p className="text-lg text-stone-700 mb-8 leading-relaxed">
        Break down the North Star into major checkpoints, considering opportunities and real-world barriers.
      </p>

      <div className="space-y-8">
        {/* Milestones */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-stone-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🎯</span>
            <label className="text-xl font-semibold text-stone-800">
              Milestones
            </label>
          </div>
          <p className="text-sm text-stone-600 mb-4">
            What stand out to you as potential <strong>milestones</strong>? Think about certifications, role changes, and major projects over the next 3-5 years.
          </p>
          <textarea
            value={formData.milestones}
            onChange={(e) => updateFormData('milestones', e.target.value)}
            placeholder="1. Q3 2026: Complete leadership certification&#10;2. 2027: Lead cross-functional team&#10;3. 2028: Senior role transition..."
            className="w-full h-40 p-4 border border-stone-300 rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition resize-none"
          />
        </div>

        {/* Constraints */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-stone-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">⚠️</span>
            <label className="text-xl font-semibold text-stone-800">
              Constraints
            </label>
          </div>
          <p className="text-sm text-stone-600 mb-4">
            What <strong>realistic constraints</strong> do you need to consider? Think about time, budget, family commitments, and market conditions.
          </p>
          <textarea
            value={formData.constraints}
            onChange={(e) => updateFormData('constraints', e.target.value)}
            placeholder="1. Limited training budget until Q2&#10;2. Family commitments on weekends&#10;3. Current market volatility..."
            className="w-full h-40 p-4 border border-stone-300 rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition resize-none"
          />
        </div>

        {/* Opportunities */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-stone-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">✨</span>
            <label className="text-xl font-semibold text-stone-800">
              Opportunities
            </label>
          </div>
          <p className="text-sm text-stone-600 mb-4">
            Where are your greatest <strong>opportunities</strong>? Consider emerging technologies, organizational changes, and network connections.
          </p>
          <textarea
            value={formData.opportunities}
            onChange={(e) => updateFormData('opportunities', e.target.value)}
            placeholder="1. New AI initiative launching next quarter&#10;2. Mentor relationship with VP&#10;3. Industry conference speaking slot..."
            className="w-full h-40 p-4 border border-stone-300 rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition resize-none"
          />
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={onNext}
          className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
        >
          Continue to Start the Route
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

export default TerrainStep
