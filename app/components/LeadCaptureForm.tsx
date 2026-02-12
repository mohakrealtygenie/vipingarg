'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiPaperAirplane } from 'react-icons/hi2'

const audienceOptions = [
  'Student / Exam Candidate',
  'Investor',
  'Homebuyer / Property Investor',
]

export default function LeadCaptureForm() {
  const [selected, setSelected] = useState('')

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-blue">
              Get Started
            </span>
            <h2 className="font-[family-name:var(--font-apple)] text-3xl md:text-4xl font-bold text-navy mt-3 leading-tight">
              Not Sure Where to Start?
            </h2>
            <p className="text-gray-600 mt-5 leading-relaxed max-w-md">
              If you&apos;re exploring options and want clarity before
              committing, let&apos;s talk. Book a free consultation and let me
              help you find the right path.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-500">
                No commitment required — just a conversation.
              </p>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="bg-gray-100/70 rounded-2xl p-7 md:p-8 border border-gray-200/60">
              <h3 className="text-navy font-semibold text-lg mb-6">
                Book a Consultation
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:border-blue focus:ring-2 focus:ring-blue/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:border-blue focus:ring-2 focus:ring-blue/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What best describes you?
                  </label>
                  <div className="space-y-2">
                    {audienceOptions.map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <div
                          className={`w-4 h-4 rounded-full border-2 transition-all flex items-center justify-center ${
                            selected === option
                              ? 'border-blue bg-blue'
                              : 'border-gray-300 group-hover:border-blue/50'
                          }`}
                        >
                          {selected === option && (
                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                          )}
                        </div>
                        <input
                          type="radio"
                          name="audience"
                          value={option}
                          checked={selected === option}
                          onChange={(e) => setSelected(e.target.value)}
                          className="sr-only"
                        />
                        <span className="text-sm text-gray-700">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    What are you looking for help with?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Brief description of your needs..."
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:border-blue focus:ring-2 focus:ring-blue/20 transition-all resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-blue px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-light hover:shadow-lg active:scale-[0.98]"
              >
                <HiPaperAirplane size={16} />
                Book Consultation
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
