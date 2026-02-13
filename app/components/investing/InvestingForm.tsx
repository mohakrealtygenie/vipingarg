'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiPaperAirplane } from 'react-icons/hi2'

export default function InvestingForm() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [province, setProvince] = useState('')
  const [accreditedState, setAccreditedState] = useState('')
  const [rangeState, setRangeState] = useState('')
  const [timelineState, setTimelineState] = useState('')


  const handleInvestingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      name: name,
      email: email,
      province: province,
      accreditedInvestor: accreditedState === 'Yes' ? true : false,
      investmentRange: rangeState,
      timeline: timelineState,
      whichForm: 'investing'
    }
    console.log(formData);
    setName('')
    setEmail('')
    setProvince('')
    setAccreditedState('')
    setRangeState('')
    setTimelineState('')

    const response = await fetch('/api/submitForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      console.log('Form submitted successfully')
    } else {
      console.log('Form submission failed')
    }
  }

  return (
    <section id="investing-form" className="py-24 bg-off-white border-t border-gray-200">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 font-[family-name:var(--font-apple)]">
            Start the Conversation
          </h2>
          <p className="text-gray-500">
            Let's determine if private markets are the right fit for your portfolio.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 md:p-12"
        >
          <form className="space-y-8" onSubmit={handleInvestingSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all text-sm placeholder:text-gray-300"
                  placeholder="John Doe"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all text-sm placeholder:text-gray-300"
                  placeholder="john@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Province</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all text-sm placeholder:text-gray-300"
                placeholder="e.g. Ontario"
                onChange={(e) => setProvince(e.target.value)}
                value={province}
              />
            </div>

            {/* Radio Groups */}
            <div className="space-y-6 pt-4">

              <div>
                <label className="block text-sm font-bold text-navy mb-3">Accredited Investor?</label>
                <div className="flex flex-wrap gap-3">
                  {['Yes', 'No', 'Not Sure'].map((option) => (
                    <label key={option} className="cursor-pointer">
                      <input
                        type="radio"
                        name="accredited"
                        value={option}
                        checked={accreditedState === option}
                        onChange={(e) => setAccreditedState(e.target.value)}
                        className="sr-only"
                      />
                      <span className={`inline-block px-5 py-2 rounded-lg text-sm font-medium border transition-all ${accreditedState === option
                          ? 'bg-navy text-white border-navy'
                          : 'bg-white text-gray-600 border-gray-200 hover:border-blue hover:text-blue'
                        }`}>
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-navy mb-3">Investment Range</label>
                <div className="flex flex-wrap gap-3">
                  {['< 50k', '50–100k', '100k+'].map((option) => (
                    <label key={option} className="cursor-pointer">
                      <input
                        type="radio"
                        name="range"
                        value={option}
                        checked={rangeState === option}
                        onChange={(e) => setRangeState(e.target.value)}
                        className="sr-only"
                      />
                      <span className={`inline-block px-5 py-2 rounded-lg text-sm font-medium border transition-all ${rangeState === option
                          ? 'bg-navy text-white border-navy'
                          : 'bg-white text-gray-600 border-gray-200 hover:border-blue hover:text-blue'
                        }`}>
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-navy mb-3">Timeline</label>
                <div className="flex flex-wrap gap-3">
                  {['Immediately', '3–6 Months', 'Exploring Only'].map((option) => (
                    <label key={option} className="cursor-pointer">
                      <input
                        type="radio"
                        name="timeline"
                        value={option}
                        checked={timelineState === option}
                        onChange={(e) => setTimelineState(e.target.value)}
                        className="sr-only"
                      />
                      <span className={`inline-block px-5 py-2 rounded-lg text-sm font-medium border transition-all ${timelineState === option
                          ? 'bg-navy text-white border-navy'
                          : 'bg-white text-gray-600 border-gray-200 hover:border-blue hover:text-blue'
                        }`}>
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

            </div>

            <button
              type="submit"
              className="w-full bg-blue text-white py-4 px-6 rounded-full font-bold text-lg hover:bg-navy transition-colors duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg mt-8"
            >
              Request Intro Call
              <HiPaperAirplane className="w-5 h-5 -rotate-45" />
            </button>

            <p className="text-xs text-gray-400 text-center leading-relaxed mt-6">
              DISCLAIMER: Exempt market investments are speculative and involve risk including loss of capital and limited liquidity. Information is educational only and not investment advice.
            </p>

          </form>
        </motion.div>

      </div>
    </section>
  )
}
