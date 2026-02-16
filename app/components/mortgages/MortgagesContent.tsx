'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Plus, Minus } from 'lucide-react'
import Image from 'next/image'

const approaches = [
  {
    title: 'Cash-flow Impact Analysis',
    description: 'We look beyond the rate to understand how your mortgage affects your overall monthly cash flow, savings capacity, and lifestyle goals.',
  },
  {
    title: 'Long-term Strategy Alignment',
    description: 'Your mortgage should fit your 5, 10, and 20-year plan. We align your financing structure with real estate goals and wealth-building objectives.',
  },
  {
    title: 'Risk & Flexibility Assessment',
    description: 'Fixed vs variable, prepayment privileges, portability — we evaluate every lever to ensure your mortgage adapts as life changes.',
  },
  {
    title: 'Holistic Financial Planning',
    description: 'Your mortgage is one piece of the puzzle. We integrate it with your investment strategy, tax situation, and retirement planning for a complete picture.',
  },
]

const tags = [
  'Purchase',
  'Refinancing',
  'Investment Property',
  'Strategic Renewals',
  'Cash-flow Planning',
]

export default function MortgagesContent() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  const testimonials = [
    {
      quote: "Vipin didn't just find me a rate — he structured my mortgage around my investment goals. I ended up with a strategy that's saving me thousands over the term.",
      name: 'David S.',
      title: 'Real Estate Investor',
    },
    {
      quote: "As a first-time buyer, the process felt overwhelming. Vipin walked me through every option, explained the trade-offs, and made sure I was confident before signing.",
      name: 'Anjali P.',
      title: 'First-time Homebuyer',
    },
    {
      quote: "The refinancing process was seamless. Vipin identified opportunities I hadn't considered and helped me access equity to grow my portfolio.",
      name: 'Mark T.',
      title: 'Business Owner',
    },
  ]

  return (
    <>
      {/* Accordion Approach Section */}
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
                Our Approach
              </span>
              <h2 className="font-[family-name:var(--font-serif-display)] text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                Interactive Planning <br />Approach
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed max-w-md">
                Mortgage solutions built on financial insight, not just rates. We analyze your complete financial picture to find the right structure for your goals.
              </p>

              <a
                href="#mortgage-form"
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

      {/* Vision Split Section */}
      <section className="py-20 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-sm border border-gray-100">

            {/* Left: Image */}
            <div className="relative h-[300px] lg:h-auto min-h-[350px]">
              <Image
                src="/mortgages.jpg"
                alt="Mortgage Vision"
                fill
                className="object-cover"
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
                  Achieving Your <br />Vision
                </h2>
                <p className="text-white/80 leading-relaxed mb-8">
                  Whether you&apos;re buying your first home, refinancing for better terms, or building a real estate portfolio — our approach ensures your mortgage works as hard as you do.
                </p>
                <div className="space-y-3">
                  {['First-time Buyers', 'Refinancing Homeowners', 'Real Estate Investors', 'Clients Wanting Structure'].map((item) => (
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

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue mb-2 block">
              Specialist Services
            </span>
            <h2 className="font-[family-name:var(--font-serif-display)] text-3xl md:text-4xl font-bold text-navy">
              How Can We Help You <br />
              Reach Your <span className="text-blue italic">Goals</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Purchase Mortgages',
                description: 'Navigating your first or next home purchase with confidence and clarity.',
                features: ['First-time', 'Move-up', 'New Build'],
              },
              {
                title: 'Refinancing',
                description: 'Accessing equity or restructuring debt for better cash flow and flexibility.',
                features: ['Debt Consolidation', 'Equity Access', 'Rate Improvement'],
              },
              {
                title: 'Investment Property',
                description: 'Strategic financing designed for growing your real estate portfolio.',
                features: ['Rental Income', 'Multi-unit', 'Commercial'],
              },
              {
                title: 'Strategic Renewals',
                description: 'Negotiating better terms aligned with your evolving financial goals.',
                features: ['Rate Shopping', 'Term Strategy', 'Portability'],
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {service.features.map((f) => (
                    <span key={f} className="text-xs px-2.5 py-1 rounded-full bg-gray-50 text-gray-500 border border-gray-100">
                      {f}
                    </span>
                  ))}
                </div>

                <a
                  href="#mortgage-form"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-blue transition-colors group/link"
                >
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

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
                  onClick={() => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-blue hover:text-blue transition-colors"
                  aria-label="Previous"
                >
                  <ArrowRight size={16} className="rotate-180" />
                </button>
                <button
                  onClick={() => setTestimonialIndex((prev) => (prev + 1) % testimonials.length)}
                  className="w-10 h-10 rounded-full bg-blue text-white flex items-center justify-center hover:bg-navy transition-colors"
                  aria-label="Next"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>

            <motion.div
              key={testimonialIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100"
            >
              <div className="text-3xl text-blue/20 mb-4">&ldquo;</div>
              <p className="text-gray-600 leading-relaxed text-base mb-8">
                {testimonials[testimonialIndex].quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue/10 flex items-center justify-center text-blue font-bold text-sm">
                  {testimonials[testimonialIndex].name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-navy text-sm">{testimonials[testimonialIndex].name}</p>
                  <p className="text-gray-400 text-xs">{testimonials[testimonialIndex].title}</p>
                </div>
              </div>

              <div className="flex gap-1.5 mt-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonialIndex(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === testimonialIndex ? 'bg-blue' : 'bg-gray-200'
                    }`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}
