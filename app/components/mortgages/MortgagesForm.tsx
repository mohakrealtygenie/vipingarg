'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiHome } from 'react-icons/hi2'

export default function MortgagesForm() {
  const [lookingToState, setLookingToState] = useState('')

  return (
    <section id="mortgage-form" className="py-24 bg-off-white border-t border-gray-200">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 font-[family-name:var(--font-apple)]">
             Get Your Free Assessment
           </h2>
           <p className="text-gray-500">
             See what options are available for your specific situation.
           </p>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 md:p-12"
        >
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all text-sm placeholder:text-gray-300"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all text-sm placeholder:text-gray-300"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Phone</label>
              <input
                type="tel"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all text-sm placeholder:text-gray-300"
                placeholder="(555) 123-4567"
              />
            </div>

            {/* Radio Group */}
            <div className="space-y-4 pt-4">
              <label className="block text-sm font-bold text-navy">Looking to:</label>
              <div className="flex flex-wrap gap-3">
                {['Purchase', 'Refinance', 'Renew'].map((option) => (
                  <label key={option} className="cursor-pointer">
                    <input
                      type="radio"
                      name="lookingTo"
                      value={option}
                      checked={lookingToState === option}
                      onChange={(e) => setLookingToState(e.target.value)}
                      className="sr-only"
                    />
                    <span className={`inline-block px-5 py-2 rounded-lg text-sm font-medium border transition-all ${
                       lookingToState === option 
                       ? 'bg-navy text-white border-navy' 
                       : 'bg-white text-gray-600 border-gray-200 hover:border-blue hover:text-blue'
                    }`}>
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Property Value</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all text-sm placeholder:text-gray-300"
                  placeholder="$"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Down Payment / Equity</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all text-sm placeholder:text-gray-300"
                  placeholder="$"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Credit Range (Optional)</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all text-sm placeholder:text-gray-300"
                placeholder="e.g. 700+"
              />
            </div>

            <button
               type="submit"
               className="w-full bg-blue text-white py-4 px-6 rounded-full font-bold text-lg hover:bg-navy transition-colors duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg mt-8"
            >
              Check My Options
              <HiHome className="w-5 h-5" />
            </button>

            <p className="text-xs text-gray-400 text-center leading-relaxed mt-6">
              Compliance: Approvals subject to lender criteria.
            </p>

          </form>
        </motion.div>

      </div>
    </section>
  )
}
