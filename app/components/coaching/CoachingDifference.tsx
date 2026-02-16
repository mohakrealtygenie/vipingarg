'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Plus, Minus } from 'lucide-react'

const approaches = [
  {
    title: 'Conceptual Clarity First',
    description: 'We don\'t memorize. We build intuition so the math makes sense. Deep understanding beats rote learning every time.',
  },
  {
    title: 'Exam Strategy Planning',
    description: 'Learn how to tackle questions, manage time, and avoid common traps. We align study plans with real testing conditions.',
  },
  {
    title: 'Real-World Context',
    description: 'Connect theory to practice with insights from active capital markets. Canadian frameworks and global perspectives.',
  },
  {
    title: 'Personalized Attention',
    description: 'One-on-one focus to address your specific weak points with continuous feedback loops until exam day.',
  },
]

const tags = [
  'Concept Mastery',
  'Exam Strategy',
  'One-on-One Focus',
  'Career Alignment',
]

export default function CoachingDifference() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  return (
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
              Our Methodology
            </span>
            <h2 className="font-[family-name:var(--font-serif-display)] text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
              Interactive Planning <br />Approach
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed max-w-md">
              Most coaching focuses on rote learning. My method builds the deep
              conceptual foundation that professionals actually use in their careers.
            </p>

            <a
              href="#coaching-form"
              className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-blue transition-colors group"
            >
              Get Started
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
            {approaches.map((item, index) => (
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
  )
}
