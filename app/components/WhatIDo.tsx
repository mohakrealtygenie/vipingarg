'use client'

import { motion } from 'framer-motion'
import { HiBookOpen, HiChartBar, HiHomeModern } from 'react-icons/hi2'

const services = [
  {
    icon: HiBookOpen,
    label: 'Finance Coaching',
    description: 'CFA, CSI exams, and university-level subjects',
    color: 'bg-blue/10 text-blue',
  },
  {
    icon: HiChartBar,
    label: 'Exempt Market Guidance',
    description: 'Private equity, debt & real estate',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: HiHomeModern,
    label: 'Mortgage Solutions',
    description: 'Aligned with long-term financial goals',
    color: 'bg-amber-50 text-amber-600',
  },
]

export default function WhatIDo() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-blue">
              What I Do
            </span>
            <h2 className="font-[family-name:var(--font-apple)] text-3xl md:text-4xl font-bold text-navy mt-3 leading-tight">
              A Single Platform for Education, Investing &amp; Financing
            </h2>
            <p className="text-gray-600 mt-6 leading-relaxed max-w-lg">
              Most people struggle because finance is fragmented — learning,
              investing, and financing are treated separately.
            </p>
            <p className="text-navy font-semibold mt-4 text-lg">
              I bring them together.
            </p>
            <p className="text-gray-500 mt-6 text-sm leading-relaxed max-w-lg">
              One advisor. Clear thinking. No noise.
            </p>
          </motion.div>

          {/* Right Service Pills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {services.map((service) => (
              <div
                key={service.label}
                className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm border border-gray-100 transition-all hover:shadow-md"
              >
                <div
                  className={`shrink-0 w-11 h-11 rounded-lg flex items-center justify-center ${service.color}`}
                >
                  <service.icon size={20} />
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm">
                    {service.label}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {service.description}
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
