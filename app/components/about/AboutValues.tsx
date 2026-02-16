'use client'

import { motion } from 'framer-motion'

const values = [
  {
    title: 'Fiduciary Standard',
    desc: 'Your interests always come first. Unbiased advice tailored to your specific needs.',
  },
  {
    title: 'Educational Approach',
    desc: 'Breaking down complex concepts so you fully understand your financial landscape.',
  },
  {
    title: 'Long-term Vision',
    desc: 'Building strategies that withstand market volatility and serve generational goals.',
  },
  {
    title: 'Integrity & Trust',
    desc: 'Transparent communication and steadfast reliability in every interaction.',
  },
]

export default function AboutValues() {
  return (
    <section className="py-24 bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-serif-display)]">
            My Philosophy
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
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
              className="bg-navy-light p-8 rounded-2xl group hover:bg-blue transition-colors duration-300"
            >
              <div className="text-4xl font-bold text-white/10 mb-6 group-hover:text-white/20">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold mb-3 font-[family-name:var(--font-serif-display)]">
                {value.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white/90">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
