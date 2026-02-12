'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Initial Discussion',
    description: 'We assess your current level, goals, and timeline.',
  },
  {
    number: '02',
    title: 'Personalized Plan',
    description: 'A custom roadmap is created targeting your weak areas.',
  },
  {
    number: '03',
    title: 'Regular Sessions',
    description: 'Focused concept clearing and rigorous practice.',
  },
  {
    number: '04',
    title: 'Ongoing Support',
    description: 'Continuous feedback until exam day or career goal.',
  },
]

export default function CoachingProcess() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue">
            The Process
          </span>
          <h2 className="font-[family-name:var(--font-apple)] text-3xl md:text-4xl font-bold text-navy mt-4">
            How Coaching Works
          </h2>
          <p className="text-gray-500 mt-4">
             Simple. Focused. Effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative bg-white pt-4 md:pt-0 text-center md:text-left border-t-2 border-gray-100 md:border-t-0 md:border-l-2 md:pl-6"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-4 border-gray-50 text-blue font-bold text-lg md:text-xl flex items-center justify-center mb-6 mx-auto md:mx-0 shadow-sm z-10 relative">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-navy mb-3">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
