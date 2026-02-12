'use client'

import { motion } from 'framer-motion'
import { HiCheck } from 'react-icons/hi2'

const credentials = [
  'CFA Charterholder with an MBA in Finance',
  'Decade+ of teaching experience',
  'Practical exposure to capital markets & fintech',
  'Structured, concept-first approach',
  'Canada-focused, compliance-aware guidance',
]

export default function WhyWorkWithMe() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-blue">
            Why &amp; Background
          </span>
          <h2 className="font-[family-name:var(--font-apple)] text-3xl md:text-4xl font-bold text-navy mt-3">
            Why Clients Choose Vipin Garg
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Credentials List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {credentials.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-blue/10 flex items-center justify-center">
                  <HiCheck size={14} className="text-blue" />
                </div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Right: Quote Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative bg-gradient-to-br from-blue/5 to-blue-muted rounded-2xl p-8 md:p-10">
              <div className="text-5xl text-blue/30 font-serif leading-none mb-4">
                &ldquo;&ldquo;
              </div>
              <blockquote className="text-navy text-lg md:text-xl font-medium leading-relaxed">
                Whether you&apos;re studying, investing, or buying
                property — decisions matter.
              </blockquote>
              <p className="text-blue font-semibold mt-4 text-base">
                I help you make them well.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
