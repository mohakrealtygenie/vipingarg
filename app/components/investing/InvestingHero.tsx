'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi2'

export default function InvestingHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-off-white">
      {/* Background decoration: Subtle minimalist gradient, no blobs */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-navy via-blue-light to-navy opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block mb-6 text-xs font-bold tracking-[0.2em] text-blue uppercase border-b border-blue/30 pb-2">
            Wealth Management
          </span>
          
          <h1 className="mx-auto max-w-4xl text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-navy leading-[1.1] mb-8 font-[family-name:var(--font-apple)]">
            Understanding Private Market <span className="italic text-blue font-[family-name:var(--font-apple)]">Investing</span> in Canada
          </h1>

          <p className="mx-auto max-w-2xl text-lg md:text-xl text-gray-500 mb-10 leading-relaxed font-[family-name:var(--font-sans)]">
            Educational guidance and suitability-based discussions through licensed dealers.
          </p>

          <div>
            <Link
              href="#investing-form"
              className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Request an Intro Call
              <HiArrowRight className="w-5 h-5" />
            </Link>      
          </div>
        </motion.div>
      </div>
    </section>
  )
}
