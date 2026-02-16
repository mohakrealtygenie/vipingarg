'use client'

import { motion } from 'framer-motion'

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-off-white">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block mb-6 text-sm font-bold tracking-wider text-blue uppercase">
            About Me
          </span>
          
          <h1 className="mx-auto max-w-4xl text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-navy leading-[1.1] mb-8 font-[family-name:var(--font-serif-display)]">
            The Person Behind the <span className="text-blue italic">Portfolio</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
            Committed to financial clarity, education, and long-term wealth preservation.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
