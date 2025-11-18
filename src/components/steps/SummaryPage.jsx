import React, { useState, useEffect, useRef } from 'react'
import { FileText, Printer, Download, Star, Compass, Map, Route, Edit2, Bell, ChevronDown } from 'lucide-react'

const SummaryPage = ({ formData, onNavigate }) => {
  const [showReminderDropdown, setShowReminderDropdown] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowReminderDropdown(false)
      }
    }

    if (showReminderDropdown) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showReminderDropdown])

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    // Create a text version of the compass for download
    const content = `
MY CAREER COMPASS
=================

STEP 1: YOUR NORTH STAR (5–10 Years)
------------------------------------

Ideal Future State & Impact:
${formData.futureState || 'Not yet defined'}

Purpose Statement:
${formData.impact || 'Not yet defined'}


STEP 2: CARDINAL DIRECTIONS (Your Inventory)
---------------------------------------------

North (Non-negotiables):
${formData.nonNegotiables || 'Not yet defined'}

South (Strengths):
${formData.strengths || 'Not yet defined'}

East (Energizers):
${formData.energizers || 'Not yet defined'}

West (Wants/Gaps):
${formData.gapsWants || 'Not yet defined'}


STEP 3: MAP THE TERRAIN (3–5 Years)
------------------------------------

Milestones:
${formData.milestones || 'Not yet defined'}

Constraints:
${formData.constraints || 'Not yet defined'}

Opportunities:
${formData.opportunities || 'Not yet defined'}


STEP 4: START THE ROUTE (0–90 Days)
------------------------------------

90-Day Moves & Habit Commitment:
${formData.routeStart || 'Not yet defined'}


---
Generated: ${new Date().toLocaleDateString()}
Review this compass every 3-6 months to ensure you are still on course.
    `.trim()

    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `career-compass-${new Date().toISOString().split('T')[0]}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleReminder = (period) => {
    const now = new Date()
    let reminderDate = new Date(now)
    
    // Calculate reminder date based on period
    switch(period) {
      case '1week':
        reminderDate.setDate(now.getDate() + 7)
        break
      case '1month':
        reminderDate.setMonth(now.getMonth() + 1)
        break
      case '3months':
        reminderDate.setMonth(now.getMonth() + 3)
        break
      case '6months':
        reminderDate.setMonth(now.getMonth() + 6)
        break
      default:
        reminderDate.setMonth(now.getMonth() + 3)
    }

    // Format dates for ICS (YYYYMMDDTHHMMSSZ)
    const formatICSDate = (date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
    }

    const startDate = formatICSDate(reminderDate)
    const endDate = formatICSDate(new Date(reminderDate.getTime() + 60 * 60 * 1000)) // 1 hour duration

    // Create compass summary for calendar body
    const compassSummary = `
CAREER COMPASS REVIEW
=====================

It's time to review and update your Career Compass!

CURRENT COMPASS SNAPSHOT:
-------------------------

NORTH STAR (5-10 Years):
${formData.futureState || 'Not yet defined'}

PURPOSE & IMPACT:
${formData.impact || 'Not yet defined'}

CARDINAL DIRECTIONS:
- North (Non-negotiables): ${formData.nonNegotiables || 'Not yet defined'}
- South (Strengths): ${formData.strengths || 'Not yet defined'}
- East (Energizers): ${formData.energizers || 'Not yet defined'}
- West (Wants/Gaps): ${formData.gapsWants || 'Not yet defined'}

TERRAIN (3-5 Years):
- Milestones: ${formData.milestones || 'Not yet defined'}
- Constraints: ${formData.constraints || 'Not yet defined'}
- Opportunities: ${formData.opportunities || 'Not yet defined'}

ROUTE (0-90 Days):
${formData.routeStart || 'Not yet defined'}

-------------------------
Review your compass at: [YOUR_APP_URL_HERE]

Remember: Your compass is a living document. Update it as you grow and your goals evolve.
    `.trim()

    // Create ICS file content
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Career Compass//Reminder//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${Date.now()}@careercompass.app
DTSTAMP:${formatICSDate(now)}
DTSTART:${startDate}
DTEND:${endDate}
SUMMARY:Review Your Career Compass
DESCRIPTION:${compassSummary.replace(/\n/g, '\\n')}
LOCATION:Career Compass App
STATUS:CONFIRMED
SEQUENCE:0
BEGIN:VALARM
TRIGGER:-PT1H
DESCRIPTION:Career Compass Review Reminder
ACTION:DISPLAY
END:VALARM
END:VEVENT
END:VCALENDAR`.trim()

    // Download ICS file
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `career-compass-reminder-${period}.ics`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    
    setShowReminderDropdown(false)
  }

  const isEmpty = (value) => !value || value.trim() === ''

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header with Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 no-print">
        <div className="flex items-center gap-3 mb-4 sm:mb-0">
          <div className="p-3 bg-amber-100 rounded-xl">
            <FileText className="w-8 h-8 text-amber-600" />
          </div>
          <h2 className="text-4xl font-bold text-stone-900">My Career Compass</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {/* Remind Me Button with Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowReminderDropdown(!showReminderDropdown)}
              className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <Bell className="w-4 h-4" />
              Remind Me
              <ChevronDown className="w-4 h-4" />
            </button>
            
            {showReminderDropdown && (
              <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-xl border border-stone-200 py-2 min-w-[160px] z-10">
                <button
                  onClick={() => handleReminder('1week')}
                  className="w-full text-left px-4 py-2 hover:bg-stone-100 transition-colors text-stone-700"
                >
                  In 1 Week
                </button>
                <button
                  onClick={() => handleReminder('1month')}
                  className="w-full text-left px-4 py-2 hover:bg-stone-100 transition-colors text-stone-700"
                >
                  In 1 Month
                </button>
                <button
                  onClick={() => handleReminder('3months')}
                  className="w-full text-left px-4 py-2 hover:bg-stone-100 transition-colors text-stone-700"
                >
                  In 3 Months
                </button>
                <button
                  onClick={() => handleReminder('6months')}
                  className="w-full text-left px-4 py-2 hover:bg-stone-100 transition-colors text-stone-700"
                >
                  In 6 Months
                </button>
              </div>
            )}
          </div>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            <Printer className="w-4 h-4" />
            Print
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            <Download className="w-4 h-4" />
            Download
          </button>
        </div>
      </div>

      {/* Print-only header */}
      <div className="hidden print:block mb-8">
        <h1 className="text-4xl font-bold text-stone-900 mb-2">My Career Compass</h1>
        <p className="text-stone-600">Generated: {new Date().toLocaleDateString()}</p>
      </div>

      <p className="text-lg text-stone-700 mb-8 leading-relaxed">
        This is your complete compass, synthesized from the 4-step process. 
        Review this every 3-6 months to ensure you are still on course.
      </p>

      {/* Summary Content */}
      <div className="bg-white rounded-2xl shadow-xl border border-stone-200 overflow-hidden">
        {/* Step 1: North Star */}
        <section className="p-6 border-b border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-amber-800 flex items-center gap-2">
              <Star className="w-5 h-5" />
              Step 1: Your North Star (5–10 Years)
            </h3>
            <button
              onClick={() => onNavigate('step1')}
              className="no-print flex items-center gap-1 text-sm text-stone-600 hover:text-amber-600 transition-colors"
              title="Edit this section"
            >
              <Edit2 className="w-4 h-4" />
              Edit
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-stone-600 mb-1">Ideal Future State</h4>
              <p className="text-stone-800 leading-relaxed">
                {isEmpty(formData.futureState) ? (
                  <span className="text-stone-400 italic text-sm">Not yet defined</span>
                ) : (
                  formData.futureState
                )}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-stone-600 mb-1">Purpose Statement & Impact</h4>
              <p className="text-stone-800 leading-relaxed">
                {isEmpty(formData.impact) ? (
                  <span className="text-stone-400 italic text-sm">Not yet defined</span>
                ) : (
                  formData.impact
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Step 2: Cardinal Directions */}
        <section className="p-6 border-b border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-amber-800 flex items-center gap-2">
              <Compass className="w-5 h-5" />
              Step 2: Cardinal Directions (Your Inventory)
            </h3>
            <button
              onClick={() => onNavigate('step2')}
              className="no-print flex items-center gap-1 text-sm text-stone-600 hover:text-amber-600 transition-colors"
              title="Edit this section"
            >
              <Edit2 className="w-4 h-4" />
              Edit
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-semibold text-stone-600 mb-1">🧭 North (Non-negotiables)</h4>
              <p className="text-stone-800 text-sm leading-relaxed">
                {isEmpty(formData.nonNegotiables) ? (
                  <span className="text-stone-400 italic">Not yet defined</span>
                ) : (
                  formData.nonNegotiables
                )}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-stone-600 mb-1">💪 South (Strengths)</h4>
              <p className="text-stone-800 text-sm leading-relaxed">
                {isEmpty(formData.strengths) ? (
                  <span className="text-stone-400 italic">Not yet defined</span>
                ) : (
                  formData.strengths
                )}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-stone-600 mb-1">⚡ East (Energizers)</h4>
              <p className="text-stone-800 text-sm leading-relaxed">
                {isEmpty(formData.energizers) ? (
                  <span className="text-stone-400 italic">Not yet defined</span>
                ) : (
                  formData.energizers
                )}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-stone-600 mb-1">🎯 West (Wants/Gaps)</h4>
              <p className="text-stone-800 text-sm leading-relaxed">
                {isEmpty(formData.gapsWants) ? (
                  <span className="text-stone-400 italic">Not yet defined</span>
                ) : (
                  formData.gapsWants
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Step 3: Map the Terrain */}
        <section className="p-6 border-b border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-amber-800 flex items-center gap-2">
              <Map className="w-5 h-5" />
              Step 3: Map the Terrain (3–5 Years)
            </h3>
            <button
              onClick={() => onNavigate('step3')}
              className="no-print flex items-center gap-1 text-sm text-stone-600 hover:text-amber-600 transition-colors"
              title="Edit this section"
            >
              <Edit2 className="w-4 h-4" />
              Edit
            </button>
          </div>
          
          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-semibold text-stone-600 mb-1">🎯 Milestones</h4>
              <p className="text-stone-800 text-sm leading-relaxed">
                {isEmpty(formData.milestones) ? (
                  <span className="text-stone-400 italic">Not yet defined</span>
                ) : (
                  formData.milestones
                )}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-stone-600 mb-1">⚠️ Constraints</h4>
              <p className="text-stone-800 text-sm leading-relaxed">
                {isEmpty(formData.constraints) ? (
                  <span className="text-stone-400 italic">Not yet defined</span>
                ) : (
                  formData.constraints
                )}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-stone-600 mb-1">✨ Opportunities</h4>
              <p className="text-stone-800 text-sm leading-relaxed">
                {isEmpty(formData.opportunities) ? (
                  <span className="text-stone-400 italic">Not yet defined</span>
                ) : (
                  formData.opportunities
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Step 4: Start the Route */}
        <section className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-amber-800 flex items-center gap-2">
              <Route className="w-5 h-5" />
              Step 4: Start the Route (0–90 Days)
            </h3>
            <button
              onClick={() => onNavigate('step4')}
              className="no-print flex items-center gap-1 text-sm text-stone-600 hover:text-amber-600 transition-colors"
              title="Edit this section"
            >
              <Edit2 className="w-4 h-4" />
              Edit
            </button>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-stone-600 mb-1">90-Day Moves & Habit Commitment</h4>
            <p className="text-stone-800 text-sm leading-relaxed">
              {isEmpty(formData.routeStart) ? (
                <span className="text-stone-400 italic">Not yet defined</span>
              ) : (
                formData.routeStart
              )}
            </p>
          </div>
        </section>
      </div>

      {/* Footer Note */}
      <div className="mt-8 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
        <h4 className="font-semibold text-stone-900 mb-2">📅 Next Steps</h4>
        <ul className="text-sm text-stone-700 space-y-1">
          <li>• Save or print this compass for easy reference</li>
          <li>• Schedule a calendar reminder to review in 3 months</li>
          <li>• Share with a mentor or accountability partner</li>
          <li>• Start your first 90-day action this week</li>
        </ul>
      </div>
    </div>
  )
}

export default SummaryPage
