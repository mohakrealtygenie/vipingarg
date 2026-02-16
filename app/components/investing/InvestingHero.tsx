'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function InvestingHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-off-white">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block mb-6 text-sm font-bold tracking-wider text-blue uppercase">
            Wealth Management
          </span>
          
          <h1 className="mx-auto max-w-4xl text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-navy leading-[1.1] mb-8 font-[family-name:var(--font-serif-display)]">
            Understanding Private Market <span className="text-blue italic">Investing</span> in Canada
          </h1>

          <p className="mx-auto max-w-2xl text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
            Educational guidance and suitability-based discussions through licensed dealers.
          </p>

          <div>
            <Link
              href="#investing-form"
              className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue transition-colors duration-300 shadow-sm hover:shadow-md"
            >
              Request an Intro Call
              <ArrowRight className="w-5 h-5" />
            </Link>      
          </div>
        </motion.div>
      </div>
    </section>
  )
}
