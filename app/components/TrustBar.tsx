'use client'

import { motion } from 'framer-motion'

const badges = [
  'CFA Charterholder',
  'MBA (Finance)',
  'University Faculty & Instructor',
  'Banking & Capital Markets',
  'Fintech Experience',
]

export default function TrustBar() {
  return (
    <section className="py-8 bg-gradient-to-r from-navy via-navy-light to-navy border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {badges.map((badge, i) => (
            <div key={badge} className="flex items-center gap-3">
              <span className="text-sm text-white/80 font-medium whitespace-nowrap">
                {badge}
              </span>
              {i < badges.length - 1 && (
                <span className="hidden sm:block w-1 h-1 rounded-full bg-white/30" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
