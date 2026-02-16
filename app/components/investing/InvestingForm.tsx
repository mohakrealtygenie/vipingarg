'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

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
    <>
      {/* Bottom CTA Banner */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/investing.jpg"
            alt="CTA Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-[family-name:var(--font-serif-display)] text-3xl md:text-4xl font-bold text-white mb-4">
              You&apos;ll Know What<br />
              <span className="text-blue-light">Steps to Take Next</span>
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              We help you navigate the private market landscape and take the first concrete steps toward building your investment portfolio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="investing-form" className="py-24 bg-off-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            
            <div className="lg:col-span-2 space-y-6 lg:sticky lg:top-24">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-[family-name:var(--font-serif-display)] text-4xl font-bold tracking-tight text-navy leading-tight">
                  Ready to <span className="text-blue italic">Take Control</span> of your Finances?
                </h2>
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                  Let&apos;s determine if private markets are the right fit for your portfolio. Start with a no-obligation intro call.
                </p>
                
                <div className="mt-8 space-y-4">
                  {[
                    'Educational guidance first',
                    'Suitability-based discussions',
                    'Licensed dealer facilitation'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm font-medium text-navy/80">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10"
            >
              <form className="space-y-6" onSubmit={handleInvestingSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all text-sm placeholder:text-gray-300"
                      placeholder="John Doe"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all text-sm placeholder:text-gray-300"
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all text-sm placeholder:text-gray-300"
                    placeholder="e.g. Ontario"
                    onChange={(e) => setProvince(e.target.value)}
                    value={province}
                  />
                </div>

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
                  className="w-full bg-blue text-white py-4 px-6 rounded-full font-bold text-base hover:bg-navy transition-colors duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md group"
                >
                  Request Intro Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-xs text-gray-400 text-center leading-relaxed">
                  DISCLAIMER: Exempt market investments are speculative and involve risk including loss of capital and limited liquidity. Information is educational only and not investment advice.
                </p>

              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
