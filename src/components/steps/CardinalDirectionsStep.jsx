import React from 'react'
import { Compass, ArrowRight } from 'lucide-react'

const CardinalDirectionsStep = ({ formData, updateFormData, onNext }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-stone-100 rounded-xl">
          <Compass className="w-8 h-8 text-stone-600" />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-stone-900">Step 2: Define Your Cardinal Directions</h2>
          <p className="text-stone-500">Your Inventory</p>
        </div>
      </div>

      <p className="text-lg text-stone-700 mb-8 leading-relaxed">
        This step assesses your fixed guides (North/South) and your current/missing resources (East/West).
      </p>

      <div className="space-y-8">
        {/* Prompt 3 - North */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-stone-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🧭</span>
            <label className="text-xl font-semibold text-stone-800">
              North (Non-negotiables)
            </label>
          </div>
          <p className="text-sm text-stone-600 mb-4">
            List 3-5 non-negotiable <strong>values</strong> (e.g., integrity, autonomy) and <strong>environmental must-haves</strong> (e.g., fully remote, no travel).
          </p>
          <textarea
            value={formData.nonNegotiables}
            onChange={(e) => updateFormData('nonNegotiables', e.target.value)}
            placeholder="1. Autonomy... 2. Environment: remote-first..."
            className="w-full h-40 p-4 border border-stone-300 rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition resize-none"
          />
        </div>

        {/* South - Strengths */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-stone-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">💪</span>
            <label className="text-xl font-semibold text-stone-800">
              South (Strengths)
            </label>
          </div>
          <p className="text-sm text-stone-600 mb-4">
            List your 5 core <strong>strengths</strong>. What are you naturally good at? What do others consistently recognize in you?
          </p>
          <textarea
            value={formData.strengths}
            onChange={(e) => updateFormData('strengths', e.target.value)}
            placeholder="1. Public speaking and presentation&#10;2. Strategic thinking&#10;3. Building relationships..."
            className="w-full h-40 p-4 border border-stone-300 rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition resize-none"
          />
        </div>

        {/* East - Energizers */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-stone-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">⚡</span>
            <label className="text-xl font-semibold text-stone-800">
              East (Energizers)
            </label>
          </div>
          <p className="text-sm text-stone-600 mb-4">
            Identify 3-5 professional activities that <strong>replenish your energy</strong>. What work makes you feel alive and engaged?
          </p>
          <textarea
            value={formData.energizers}
            onChange={(e) => updateFormData('energizers', e.target.value)}
            placeholder="1. Mentoring junior team members&#10;2. Brainstorming new ideas&#10;3. Solving complex problems..."
            className="w-full h-40 p-4 border border-stone-300 rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition resize-none"
          />
        </div>

        {/* Prompt 5 - West */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-stone-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🎯</span>
            <label className="text-xl font-semibold text-stone-800">
              West (Wants/Gaps)
            </label>
          </div>
          <p className="text-sm text-stone-600 mb-4">
            List 3-5 critical <strong>skills</strong>, <strong>relationships</strong>, or <strong>experiences</strong> you need to acquire to reach your North Star.
          </p>
          <textarea
            value={formData.gapsWants}
            onChange={(e) => updateFormData('gapsWants', e.target.value)}
            placeholder="1. Skill: Advanced budgeting... 2. Relationship: Executive sponsor..."
            className="w-full h-40 p-4 border border-stone-300 rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition resize-none"
          />
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={onNext}
          className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
        >
          Continue to Map the Terrain
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

export default CardinalDirectionsStep
