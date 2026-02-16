'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function InvestingHero() {
  return (
    <section className="pt-24 bg-white">
      {/* Top Bar: Title + CTA */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue mb-2 block">
              Wealth Management
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-navy font-[family-name:var(--font-serif-display)]">
              Investment <span className="text-blue italic">Management</span>
            </h1>
          </div>
          <Link
            href="#investing-form"
            className="inline-flex items-center gap-2 bg-blue text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-navy transition-colors duration-300 shadow-sm hover:shadow-md whitespace-nowrap"
          >
            Request an Intro Call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Wide Banner Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mx-auto max-w-7xl px-6 lg:px-8 pb-8"
      >
        <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden">
          <Image
            src="/investing.jpg"
            alt="Investment Management"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}
