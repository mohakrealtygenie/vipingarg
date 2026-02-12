'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-navy to-[#060e1b] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-light">
            A Final Note
          </span>
          <h2 className="font-[family-name:var(--font-apple)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 leading-tight">
            Ready to Take the Next Step?
          </h2>
          <p className="text-white/60 mt-6 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
            Whether you&apos;re preparing for an exam, evaluating an
            investment, or planning a major financial decision — clarity
            comes first.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-blue-light hover:shadow-lg hover:shadow-blue/25 group"
          >
            Book a Call
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
