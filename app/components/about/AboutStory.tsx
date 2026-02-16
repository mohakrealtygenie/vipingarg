'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Plus, Minus } from 'lucide-react'
import Image from 'next/image'

const pillars = [
  {
    title: 'Capital Markets Expertise',
    description: 'Years of navigating complex market structures — from public equities to exempt market offerings. This institutional-grade perspective informs every recommendation.',
  },
  {
    title: 'Education-First Philosophy',
    description: "I don't just tell you what to do with your money. I explain why, ensuring you feel confident in every decision we make together.",
  },
  {
    title: 'Licensed & Regulated',
    description: 'All advisory and dealing activities are conducted through properly licensed channels, ensuring full regulatory compliance and investor protection.',
  },
  {
    title: 'Holistic Approach',
    description: 'Every client gets a complete financial picture — coaching, investing, and mortgage strategy working in concert toward your long-term goals.',
  },
]

const tags = [
  'Financial Clarity',
  'Wealth Preservation',
  'Education',
  'Integrity',
  'Long-term Vision',
]

export default function AboutStory() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  return (
    <>
      {/* Accordion Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left: Title + Description + CTA */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-bold uppercase tracking-wider text-blue mb-2 block">
                My Background
              </span>
              <h2 className="font-[family-name:var(--font-serif-display)] text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                A Journey Rooted in <br />Finance & Education
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed max-w-md">
                My career has always stood at the intersection of deep analytical finance and the human desire for clarity. True wealth management isn&apos;t just about numbers — it&apos;s about understanding the people behind them.
              </p>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-blue transition-colors group"
              >
                Let&apos;s Connect
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Right: Accordion */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              {pillars.map((item, index) => (
                <div
                  key={item.title}
                  className={`rounded-xl border transition-all duration-300 ${
                    activeIndex === index
                      ? 'border-blue/30 bg-blue/5 shadow-sm'
                      : 'border-gray-100 bg-white hover:border-gray-200'
                  }`}
                >
                  <button
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <h3 className={`font-bold text-sm md:text-base transition-colors ${
                        activeIndex === index ? 'text-navy' : 'text-gray-700'
                      }`}>
                        {item.title}
                      </h3>
                    </div>
                    <div className="text-blue shrink-0 ml-1">
                      {activeIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 pl-5 text-gray-500 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Tags Row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-16 flex flex-wrap gap-3 justify-center"
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-sm text-gray-600 font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue" />
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision Split Section */}
      <section className="py-20 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-sm border border-gray-100">

            {/* Left: Image */}
            <div className="relative h-[300px] lg:h-auto min-h-[350px]">
              <Image
                src="/vipin-hero.jpg"
                alt="Vipin Garg"
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Right: Content Card */}
            <div className="bg-blue p-10 md:p-14 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-[family-name:var(--font-serif-display)] text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                  Empowerment Comes <br />From Understanding
                </h2>
                <p className="text-white/80 leading-relaxed mb-8">
                  As a licensed advisor and educator, I bridge the gap between institutional-grade investment strategies and personal financial goals. Whether I am coaching a CFA candidate or helping a family restructure their mortgage, the core principle remains the same.
                </p>
                <div className="space-y-3">
                  {['Finance Coaching & Exam Prep', 'Private Market Investing', 'Mortgage Strategy & Planning', 'Holistic Wealth Management'].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-white/90 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
