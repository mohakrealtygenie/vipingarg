'use client'

import { motion } from 'framer-motion'
import { HiScale, HiLightBulb, HiUserGroup, HiShieldCheck } from 'react-icons/hi2'

const values = [
  {
    title: 'Fiduciary Standard',
    desc: 'Your interests always come first. Unbiased advice tailored to your specific needs.',
    icon: HiScale,
  },
  {
    title: 'Educational Approach',
    desc: 'Breaking down complex concepts so you fully understand your financial landscape.',
    icon: HiLightBulb,
  },
  {
    title: 'Long-term Vision',
    desc: 'Building strategies that withstand market volatility and serve generational goals.',
    icon: HiUserGroup,
  },
  {
    title: 'Integrity & Trust',
    desc: 'Transparent communication and steadfast reliability in every interaction.',
    icon: HiShieldCheck,
  },
]

export default function AboutValues() {
  return (
    <section className="py-24 bg-off-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 font-[family-name:var(--font-apple)]">
            My Philosophy
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Guiding principles that define my practice and your experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-blue/10 flex items-center justify-center text-blue mb-6">
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3 font-[family-name:var(--font-apple)]">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
