'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function MortgagesForm() {
  const [lookingToState, setLookingToState] = useState('')
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [propertyValue, setPropertyValue] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [creditRange, setCreditRange] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!name || !email || !phone || !propertyValue || !downPayment || !lookingToState){
      console.error('Please fill all the fields');
      return;
    }

    const formData = {
      whichForm: 'mortgage',
      name,
      email,
      phone,
      propertyValue,
      downPayment,
      lookingFor: lookingToState,
      creditRange,
    }

    const submitRes = await fetch('/api/submitForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (submitRes.ok) {
      setName('');
      setEmail('');
      setPhone('');
      setPropertyValue('');
      setDownPayment('');
      setLookingToState('');
      setCreditRange('');
      console.log('Form submitted successfully');
    }else{
      console.log('Form submission failed');
    }
  }

  return (
    <>
      {/* Bottom CTA Banner */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/mortgages.jpg"
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
              We help you get clarity on your mortgage strategy and take the first concrete steps toward your homeownership or investment goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="mortgage-form" className="py-24 bg-off-white">
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
                  Get your free mortgage assessment. We&apos;ll analyze your situation and present options tailored to your goals.
                </p>
                
                <div className="mt-8 space-y-4">
                  {[
                    'Cash-flow impact analysis',
                    'Rate & term comparison',
                    'Strategic structuring advice'
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
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all text-sm placeholder:text-gray-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Email</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all text-sm placeholder:text-gray-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Phone</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all text-sm placeholder:text-gray-300"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="space-y-4 pt-2">
                  <label className="block text-sm font-bold text-navy">Looking to:</label>
                  <div className="flex flex-wrap gap-3">
                    {['Purchase', 'Refinance', 'Renew'].map((option) => (
                      <label key={option} className="cursor-pointer">
                        <input
                          type="radio"
                          required
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Property Value</label>
                    <input
                      type="text"
                      required
                      value={propertyValue}
                      onChange={(e) => setPropertyValue(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all text-sm placeholder:text-gray-300"
                      placeholder="$"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Down Payment / Equity</label>
                    <input
                      type="text"
                      required
                      value={downPayment}
                      onChange={(e) => setDownPayment(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all text-sm placeholder:text-gray-300"
                      placeholder="$"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Credit Range (Optional)</label>
                  <input
                    type="text"
                    value={creditRange}
                    onChange={(e) => setCreditRange(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all text-sm placeholder:text-gray-300"
                    placeholder="e.g. 700+"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue text-white py-4 px-6 rounded-full font-bold text-base hover:bg-navy transition-colors duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md group"
                >
                  Check My Options
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-xs text-gray-400 text-center leading-relaxed">
                  Compliance: Approvals subject to lender criteria.
                </p>

              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
