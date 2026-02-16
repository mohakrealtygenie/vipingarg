'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Vipin's coaching completely changed how I approached the CFA exam. I went from feeling lost to scoring in the top percentile. His method of building conceptual clarity first made everything click.",
    name: 'Sarah M.',
    title: 'CFA Charterholder',
  },
  {
    quote: "The one-on-one attention made all the difference. Instead of generic study plans, Vipin identified exactly where I was struggling and built a focused plan around that.",
    name: 'James L.',
    title: 'CSC Graduate',
  },
  {
    quote: "I was struggling with my university finance courses until I started working with Vipin. He has a gift for making complex topics simple and intuitive.",
    name: 'Priya K.',
    title: 'MBA Student',
  },
]

export default function CoachingProcess() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Title + Nav */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold uppercase tracking-wider text-blue mb-2 block">
              Testimonials
            </span>
            <h2 className="font-[family-name:var(--font-serif-display)] text-3xl md:text-4xl font-bold text-navy leading-tight">
              See What <span className="text-blue italic">Our Clients</span><br />
              Are Saying
            </h2>

            <div className="flex gap-3 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-blue hover:text-blue transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-blue text-white flex items-center justify-center hover:bg-navy transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>

          {/* Right: Testimonial Card */}
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="relative bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100"
          >
            <Quote className="w-8 h-8 text-blue/20 mb-4" />
            <p className="text-gray-600 leading-relaxed text-base mb-8">
              &ldquo;{testimonials[current].quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue/10 flex items-center justify-center text-blue font-bold text-sm">
                {testimonials[current].name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-navy text-sm">{testimonials[current].name}</p>
                <p className="text-gray-400 text-xs">{testimonials[current].title}</p>
              </div>
            </div>

            {/* Dots */}
            <div className="flex gap-1.5 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === current ? 'bg-blue' : 'bg-gray-200'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
