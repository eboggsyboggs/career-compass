import React, { useState, useEffect } from 'react'
import { Compass, Star, Navigation, Map, Route, ArrowRight } from 'lucide-react'

const LandingPage = ({ onStart }) => {
  const [wiggle, setWiggle] = useState(false)
  const [compassSearching, setCompassSearching] = useState(false)

  useEffect(() => {
    const triggerWiggle = () => {
      setWiggle(true)
      setTimeout(() => setWiggle(false), 600) // Duration matches animation
    }

    const triggerCompassSearch = () => {
      setCompassSearching(true)
      setTimeout(() => setCompassSearching(false), 3000) // Duration matches animation
    }

    // Initial compass search after 1 second
    const initialTimeout = setTimeout(triggerCompassSearch, 1000)

    // Repeat every 5 seconds
    const compassInterval = setInterval(() => {
      triggerCompassSearch()
    }, 5000)

    // Wiggle the glow randomly between 3-5 seconds
    const wiggleInterval = setInterval(() => {
      triggerWiggle()
    }, Math.random() * 2000 + 3000)

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(compassInterval)
      clearInterval(wiggleInterval)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-stone-100">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Compass 
                className={`w-24 h-24 text-amber-600 ${compassSearching ? 'animate-compass-search' : ''}`} 
                strokeWidth={1.5} 
              />
              <div className={`absolute inset-0 bg-amber-400 opacity-20 blur-2xl rounded-full ${wiggle ? 'animate-wiggle' : ''}`}></div>
            </div>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-stone-900 mb-6 leading-tight">
            Create Your <span className="text-amber-600">Career Compass</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-stone-600 mb-8 leading-relaxed">
            Navigate your career with purpose, not just a plan. Define your North Star and chart a course that adapts as you grow.
          </p>

          {/* CTA Section */}
          <div className="text-center mb-12">
            <button
              onClick={onStart}
              className="group inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Begin Your Journey
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-4 text-stone-600">Takes 15 minutes or less</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-stone-200 mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">Why a Compass, Not a GPS?</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-stone-700 font-medium">
                  <Map className="w-5 h-5 text-stone-500" />
                  <span>The Map</span>
                </div>
                <p className="text-sm text-stone-600">Shows the terrain but doesn't tell you where to go</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-stone-700 font-medium">
                  <Navigation className="w-5 h-5 text-stone-500" />
                  <span>The GPS</span>
                </div>
                <p className="text-sm text-stone-600">Fastest route to a fixed point, but rigid when goals change</p>
              </div>
              <div className="space-y-2 bg-amber-50 p-4 rounded-lg border-2 border-amber-200">
                <div className="flex items-center gap-2 text-amber-800 font-semibold">
                  <Compass className="w-5 h-5 text-amber-600" />
                  <span>The Compass</span>
                </div>
                <p className="text-sm text-stone-700 font-medium">Points to your True North—guides you through any terrain</p>
              </div>
            </div>
          </div>
        </div>

        {/* Four Quadrants Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center text-stone-900 mb-4">
            Your Journey in Four Sections
          </h2>
          <p className="text-center text-stone-600 mb-12 text-lg">
            A thoughtful framework to move from vision to action
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* North Star Quadrant */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-amber-300 relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-amber-100 rounded-xl">
                    <Star className="w-8 h-8 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-stone-900">North Star Vision</h3>
                    <p className="text-sm text-stone-500">5-10 Years</p>
                  </div>
                </div>
                <p className="text-stone-600 leading-relaxed mb-4">
                  Define your ideal future state and the impact you want to create. What does "great" look and feel like?
                </p>
                <ul className="space-y-2 text-sm text-stone-600">
                  <li className="flex items-center gap-2">
                    <span className="text-amber-600">•</span>
                    <span>Ideal role and daily experience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-600">•</span>
                    <span>Purpose statement and legacy</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Cardinal Directions Quadrant */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-amber-300 relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-stone-100 rounded-xl">
                    <Compass className="w-8 h-8 text-stone-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-stone-900">Cardinal Directions</h3>
                    <p className="text-sm text-stone-500">Your Inventory</p>
                  </div>
                </div>
                <p className="text-stone-600 leading-relaxed mb-4">
                  Map your non-negotiables, strengths, energizers, and gaps. Know what guides you and what you need.
                </p>
                <ul className="space-y-2 text-sm text-stone-600">
                  <li className="flex items-center gap-2">
                    <span className="text-amber-600">•</span>
                    <span>Core values and must-haves</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-600">•</span>
                    <span>Skills, relationships, and experiences to acquire</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Map the Terrain Quadrant */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-amber-300 relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Map className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-stone-900">Map the Terrain</h3>
                    <p className="text-sm text-stone-500">3-5 Years</p>
                  </div>
                </div>
                <p className="text-stone-600 leading-relaxed mb-4">
                  Identify milestones, constraints, and opportunities. Break down your North Star into achievable checkpoints.
                </p>
                <ul className="space-y-2 text-sm text-stone-600">
                  <li className="flex items-center gap-2">
                    <span className="text-amber-600">•</span>
                    <span>Major career milestones</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-600">•</span>
                    <span>Realistic constraints and opportunities</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Start the Route Quadrant */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-amber-300 relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <Route className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-stone-900">Start the Route</h3>
                    <p className="text-sm text-stone-500">0-90 Days</p>
                  </div>
                </div>
                <p className="text-stone-600 leading-relaxed mb-4">
                  Take immediate action. Define the smallest version of progress and commit to foundational habits.
                </p>
                <ul className="space-y-2 text-sm text-stone-600">
                  <li className="flex items-center gap-2">
                    <span className="text-amber-600">•</span>
                    <span>90-day moves and quick wins</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-600">•</span>
                    <span>Daily habits to stay oriented</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
