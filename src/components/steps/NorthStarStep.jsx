import React from 'react'
import { Star, ArrowRight } from 'lucide-react'

const NorthStarStep = ({ formData, updateFormData, onNext }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-amber-100 rounded-xl">
          <Star className="w-8 h-8 text-amber-600" />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-stone-900">Step 1: Identify Your North Star</h2>
          <p className="text-stone-500">5–10 Years</p>
        </div>
      </div>

      <p className="text-lg text-stone-700 mb-8 leading-relaxed">
        The North Star is the fixed destination that determines the general direction of your long-term career. 
        It defines what "great" looks and feels like.
      </p>

      <div className="space-y-8">
        {/* Prompt 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-stone-200">
          <label className="block text-xl font-semibold text-stone-800 mb-2">
            Ideal Future State
          </label>
          <p className="text-sm text-stone-600 mb-4">
            Describe your <strong>Ideal day</strong>, <strong>Ideal role</strong>, and the <strong>felt sense of "greatness"</strong> in 5-10 years. 
            (Title, responsibilities, environment, pace)
          </p>
          <textarea
            value={formData.futureState}
            onChange={(e) => updateFormData('futureState', e.target.value)}
            placeholder="In 5 years, I am a... My days are spent..."
            className="w-full h-40 p-4 border border-stone-300 rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition resize-none"
          />
        </div>

        {/* Prompt 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-stone-200">
          <label className="block text-xl font-semibold text-stone-800 mb-2">
            Desired Impact
          </label>
          <p className="text-sm text-stone-600 mb-4">
            Draft a Purpose Statement: What specific <strong>problem or legacy</strong> do you want to create or solve in the world?
          </p>
          <textarea
            value={formData.impact}
            onChange={(e) => updateFormData('impact', e.target.value)}
            placeholder="My purpose is to enable X outcome for Y group..."
            className="w-full h-40 p-4 border border-stone-300 rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition resize-none"
          />
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={onNext}
          className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
        >
          Continue to Cardinal Directions
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

export default NorthStarStep
