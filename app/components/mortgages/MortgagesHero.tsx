'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi2'

export default function MortgagesHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-off-white">
      {/* Background decoration: Subtle minimalist gradient */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-navy via-blue-light to-navy opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block mb-6 text-xs font-bold tracking-[0.2em] text-blue uppercase border-b border-blue/30 pb-2">
            Mortgage Solutions
          </span>
          
          <h1 className="mx-auto max-w-5xl text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-navy leading-[1.1] mb-8 font-[family-name:var(--font-apple)]">
            Mortgage Solutions Built on <span className="italic text-blue font-[family-name:var(--font-apple)]">Financial Insight</span> — Not Just Rates
          </h1>

          <p className="mx-auto max-w-2xl text-lg md:text-xl text-gray-500 mb-10 leading-relaxed font-[family-name:var(--font-sans)]">
            Purchase • Refinance • Investment Properties
          </p>

          <div>
            <Link
              href="#mortgage-form"
              className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Free Mortgage Assessment
              <HiArrowRight className="w-5 h-5" />
            </Link>      
          </div>
        </motion.div>
      </div>
    </section>
  )
}
