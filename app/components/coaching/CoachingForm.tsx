'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiPaperAirplane } from 'react-icons/hi2'

const exams = [
  'CFA Level I',
  'CFA Level II',
  'CFA Level III',
  'CSC',
  'IFC',
  'CPH',
  'University Finance',
  'Other',
]

export default function CoachingForm() {
  const [selectedExam, setSelectedExam] = useState('')

  return (
    <section id="coaching-form" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100"
        >
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-apple)] text-3xl font-bold text-navy mb-4">
              Book a Free 15-Minute Coaching Call
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Tell me about your exam goals and timeline. Let&apos;s build a plan to get you there.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Which exam are you preparing for?
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {exams.map((exam) => (
                  <label
                    key={exam}
                    className={`cursor-pointer rounded-lg border px-3 py-2.5 text-sm font-medium text-center transition-all ${
                      selectedExam === exam
                        ? 'bg-blue text-white border-blue'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-blue/30 hover:bg-blue/5'
                    }`}
                  >
                    <input
                      type="radio"
                      name="exam"
                      value={exam}
                      checked={selectedExam === exam}
                      onChange={(e) => setSelectedExam(e.target.value)}
                      className="sr-only"
                    />
                    {exam}
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Target Timeline
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition-all"
                  placeholder="e.g. June 2026"
                />
              </div>
               <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition-all"
                  placeholder="e.g. Toronto"
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn-shiny w-full py-4 rounded-xl text-white font-bold text-lg hover:shadow-lg hover:scale-[1.01] transition-all flex items-center justify-center gap-2 mt-4"
            >
              <HiPaperAirplane className="-rotate-45 mb-1" />
              Book Free Coaching Call
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
