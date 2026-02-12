'use client'

import { motion } from 'framer-motion'
import {
  HiLightBulb,
  HiClipboardDocumentList,
  HiGlobeAmericas,
  HiUser,
  HiMap,
  HiCheckCircle,
} from 'react-icons/hi2'

const differences = [
  {
    icon: HiLightBulb,
    title: 'Conceptual Clarity Before Formulas',
    description: 'We don’t memorize. We build intuition so the math makes sense.',
  },
  {
    icon: HiClipboardDocumentList,
    title: 'Exam Strategy Aligned with Real Testing',
    description: 'Learn how to tackle questions, manage time, and avoid traps.',
  },
  {
    icon: HiGlobeAmericas,
    title: 'Real-World Capital Markets Context',
    description: 'Connect theory to practice with insights from active trading.',
  },
  {
    icon: HiUser,
    title: 'One-on-One Focus',
    description: 'Personalized attention to address your specific weak points.',
  },
  {
    icon: HiMap,
    title: 'Canada-Specific Frameworks',
    description: 'Deep expertise in Canadian securities and regulations.',
  },
]

export default function CoachingDifference() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-blue">
              The Difference
            </span>
            <h2 className="font-[family-name:var(--font-apple)] text-3xl md:text-5xl font-bold text-navy mt-4 mb-6 leading-tight">
              You Don&apos;t Just Pass. <br />
              <span className="text-blue italic font-[family-name:var(--font-apple)]">
                You Understand.
              </span>
            </h2>
            <p className="text-lg text-gray-500 mb-8 max-w-lg leading-relaxed">
              Most coaching focuses on rote learning. My method builds the deep
              conceptual foundation that professionals actually use.
            </p>

            <div className="relative pl-8 border-l-4 border-blue/20 py-2">
              <p className="text-xl font-medium text-navy italic font-[family-name:var(--font-apple)]">
                &quot;The goal isn&apos;t just a certificate. It&apos;s competence.&quot;
              </p>
            </div>
          </motion.div>

          {/* Right List */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {differences.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-5 p-5 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-blue group-hover:bg-blue group-hover:text-white transition-colors duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-lg group-hover:text-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-1 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
