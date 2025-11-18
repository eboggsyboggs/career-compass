import React, { useState } from 'react'
import { Home, Star, Compass, Map, Route, FileText, ChevronLeft } from 'lucide-react'
import NorthStarStep from './steps/NorthStarStep'
import CardinalDirectionsStep from './steps/CardinalDirectionsStep'
import TerrainStep from './steps/TerrainStep'
import RouteStep from './steps/RouteStep'
import SummaryPage from './steps/SummaryPage'

const CompassApp = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState('intro')
  const [formData, setFormData] = useState({
    futureState: '',
    impact: '',
    nonNegotiables: '',
    strengths: '',
    energizers: '',
    gapsWants: '',
    milestones: '',
    constraints: '',
    opportunities: '',
    routeStart: '',
  })

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const steps = [
    { id: 'intro', label: 'Introduction', icon: Home },
    { id: 'step1', label: 'North Star', icon: Star },
    { id: 'step2', label: 'Cardinal Directions', icon: Compass },
    { id: 'step3', label: 'Map the Terrain', icon: Map },
    { id: 'step4', label: 'Start the Route', icon: Route },
    { id: 'summary', label: 'My Summary', icon: FileText },
  ]

  const renderStep = () => {
    switch (currentStep) {
      case 'intro':
        return <IntroPage onNext={() => setCurrentStep('step1')} />
      case 'step1':
        return <NorthStarStep formData={formData} updateFormData={updateFormData} onNext={() => setCurrentStep('step2')} />
      case 'step2':
        return <CardinalDirectionsStep formData={formData} updateFormData={updateFormData} onNext={() => setCurrentStep('step3')} />
      case 'step3':
        return <TerrainStep formData={formData} updateFormData={updateFormData} onNext={() => setCurrentStep('step4')} />
      case 'step4':
        return <RouteStep formData={formData} updateFormData={updateFormData} onNext={() => setCurrentStep('summary')} />
      case 'summary':
        return <SummaryPage formData={formData} onNavigate={setCurrentStep} />
      default:
        return <IntroPage onNext={() => setCurrentStep('step1')} />
    }
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar Navigation */}
      <nav className="w-full md:w-64 bg-stone-100 border-b md:border-b-0 md:border-r border-stone-200 p-4 no-print">
        <div className="flex items-center justify-between md:block mb-6">
          <h1 className="text-2xl font-bold text-amber-800 flex items-center gap-2">
            <Compass className="w-7 h-7" />
            Career Compass
          </h1>
          <button
            onClick={onBack}
            className="md:hidden text-stone-600 hover:text-stone-900 flex items-center gap-1 text-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>
        </div>
        
        <button
          onClick={onBack}
          className="hidden md:flex items-center gap-2 text-stone-600 hover:text-stone-900 mb-6 text-sm transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Home
        </button>

        <ul className="flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2 overflow-x-auto pb-2 md:pb-0">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <li key={step.id}>
                <button
                  onClick={() => setCurrentStep(step.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap w-full ${
                    currentStep === step.id
                      ? 'bg-amber-100 text-amber-800 font-semibold'
                      : 'text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span className="hidden md:inline">{step.label}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-6 sm:p-8 md:p-12 bg-stone-50">
        {renderStep()}
      </main>
    </div>
  )
}

// Introduction Page Component
const IntroPage = ({ onNext }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-stone-900 mb-6">Your Career Compass Journey</h2>
      <p className="text-xl text-stone-700 mb-10 leading-relaxed">
        Welcome! You're about to create a living document that will guide your career decisions—not with rigid plans, 
        but with a clear sense of direction. This is <strong>deep reflection work</strong>, and that's exactly what makes it valuable.
      </p>

      {/* Mission Section */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-8 mb-10 shadow-lg">
        <h3 className="text-3xl font-bold text-stone-900 mb-6 flex items-center gap-3">
          <span className="text-4xl">⛏️</span>
          How This Works
        </h3>
        
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
            <div>
              <h4 className="font-semibold text-lg text-stone-900 mb-2">Move Through Iteratively</h4>
              <p className="text-stone-700 leading-relaxed">
                Don't get stuck on any one section. If something feels unclear, write what you can and keep moving. 
                You can always come back and refine your thoughts. Progress over perfection.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
            <div>
              <h4 className="font-semibold text-lg text-stone-900 mb-2">Your Progress is Saved</h4>
              <p className="text-stone-700 leading-relaxed">
                Return to this application anytime. Your answers are saved in your browser, so you can pause, 
                reflect, and continue whenever you're ready. This is a living document that grows with you.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
            <div>
              <h4 className="font-semibold text-lg text-stone-900 mb-2">Go Easy on Yourself</h4>
              <p className="text-stone-700 leading-relaxed">
                This isn't about "figuring it all out" in 30 minutes. Each time you work through this, you'll gain 
                new insights to add or refine. Small clarity compounds over time. Be patient and kind with yourself.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
            <div>
              <h4 className="font-semibold text-lg text-stone-900 mb-2">Each Pass Adds Value</h4>
              <p className="text-stone-700 leading-relaxed">
                The goal isn't perfection—it's progress. Every time you revisit your compass, you'll see it with 
                fresh eyes. You might add something new, remove what no longer fits, or simply confirm you're still on track.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Encouragement Box */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
        <p className="text-lg text-stone-800 leading-relaxed">
          <strong>Remember:</strong> Your career compass is a guide, not a contract. It will evolve as you do. 
          Start where you are, use what you know, and trust that clarity comes through action and reflection—not perfect planning.
        </p>
      </div>

      <button
        onClick={onNext}
        className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
      >
        Begin Step 1: North Star →
      </button>
    </div>
  )
}

export default CompassApp
