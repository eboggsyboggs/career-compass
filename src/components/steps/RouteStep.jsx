import React from 'react'
import { Route, ArrowRight } from 'lucide-react'

const RouteStep = ({ formData, updateFormData, onNext }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-green-100 rounded-xl">
          <Route className="w-8 h-8 text-green-600" />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-stone-900">Step 4: Start the Route</h2>
          <p className="text-stone-500">0–90 Days</p>
        </div>
      </div>

      <p className="text-lg text-stone-700 mb-8 leading-relaxed">
        The journey starts with the smallest version of progress. Commit to immediate, testable actions and foundational habits.
      </p>

      <div className="space-y-8">
        {/* Prompt 7 */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-stone-200">
          <label className="block text-xl font-semibold text-stone-800 mb-2">
            90-Day Moves & Habits
          </label>
          <p className="text-sm text-stone-600 mb-4">
            What can you start in the <strong>next 90 days</strong>? Think about the smallest version of progress, 
            and the habits you'll need to stay oriented.
          </p>
          <textarea
            value={formData.routeStart}
            onChange={(e) => updateFormData('routeStart', e.target.value)}
            placeholder="90-Day Move: Schedule 15 minutes with Manager Y this Friday. Habit: Review my North Star for 5 minutes every Monday morning."
            className="w-full h-48 p-4 border border-stone-300 rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition resize-none"
          />
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
          <h4 className="font-semibold text-stone-900 mb-2">🚀 Action Framework</h4>
          <div className="text-sm text-stone-700 space-y-2">
            <p><strong>Immediate Actions (This Week):</strong> One conversation, one application, one commitment</p>
            <p><strong>30-Day Goals:</strong> Small wins that build momentum</p>
            <p><strong>90-Day Milestones:</strong> Measurable progress toward your first checkpoint</p>
            <p><strong>Daily Habits:</strong> 5-10 minute rituals to stay on course</p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={onNext}
          className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
        >
          View My Career Compass
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

export default RouteStep
