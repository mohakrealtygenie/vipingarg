'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Plus, Minus } from 'lucide-react'
import Image from 'next/image'

const approaches = [
  {
    title: 'Educate on Structures',
    description: 'Deep dive into how private investments work — from private equity and debt to real estate offerings and MICs (Mortgage Investment Corps).',
  },
  {
    title: 'Discuss Risk & Liquidity',
    description: 'Transparent conversation about potential downsides, lock-up periods, and how private market investments fit within a diversified portfolio.',
  },
  {
    title: 'Facilitate Onboarding',
    description: 'Seamless guidance through the subscription and compliance process, ensuring all regulatory requirements are met through licensed dealers.',
  },
  {
    title: 'Long-term Support',
    description: 'Ongoing updates and performance reviews, with continuous monitoring of your portfolio aligned against your long-term goals.',
  },
]

const tags = [
  'Private Equity',
  'Real Estate Offerings',
  'Exempt Markets',
  'Portfolio Diversification',
  'Risk Management',
]

export default function InvestingInfo() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

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
                We guide you through the exempt market landscape with education-first principles. Not about pushing products — it&apos;s about finding the right fit for your portfolio.
              </p>

              <a
                href="#investing-form"
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
                src="/investing.jpg"
                alt="Investment Vision"
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
                  Private market investments are suited for investors seeking diversification beyond public equities and bonds. We help you navigate the regulatory landscape and find the right opportunities.
                </p>
                <div className="space-y-3">
                  {['Accredited Investors', 'Sophisticated Investors', 'Business Owners & Professionals', 'Corporate Investment Strategies'].map((item) => (
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

      {/* Programs / Services Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue mb-2 block">
              Investment Opportunities
            </span>
            <h2 className="font-[family-name:var(--font-serif-display)] text-3xl md:text-4xl font-bold text-navy">
              How Can We Help You <br />
              Reach Your <span className="text-blue italic">Goals</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Private Equity',
                description: 'Access pre-IPO and growth-stage companies through structured exempt market offerings.',
                features: ['Growth Stage', 'Pre-IPO', 'Venture Capital'],
              },
              {
                title: 'Private Debt',
                description: 'Steady income-focused investments through private lending and debt instruments.',
                features: ['Fixed Income', 'Secured Lending', 'MICs'],
              },
              {
                title: 'Real Estate',
                description: 'Participate in commercial and residential real estate offerings for portfolio diversification.',
                features: ['Commercial', 'Residential', 'Development'],
              },
              {
                title: 'Diversified Funds',
                description: 'Multi-asset private market funds designed for balanced risk and return profiles.',
                features: ['Multi-Asset', 'Balanced', 'Tax-Efficient'],
              },
            ].map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-blue transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                  {program.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {program.features.map((f) => (
                    <span key={f} className="text-xs px-2.5 py-1 rounded-full bg-gray-50 text-gray-500 border border-gray-100">
                      {f}
                    </span>
                  ))}
                </div>

                <a
                  href="#investing-form"
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
      <InvestingTestimonials />
    </>
  )
}

// Testimonials sub-component
function InvestingTestimonials() {
  const [current, setCurrent] = useState(0)

  const testimonials = [
    {
      quote: "Vipin took the time to explain the exempt market landscape in a way that actually made sense. His education-first approach gave me real confidence before making any commitments.",
      name: 'Robert T.',
      title: 'Accredited Investor',
    },
    {
      quote: "What sets Vipin apart is transparency. He walked me through the risks, lock-up periods, and realistic return expectations. No pressure, just guidance.",
      name: 'Lisa C.',
      title: 'Business Owner',
    },
    {
      quote: "The onboarding process was seamless. Vipin handled all the compliance and documentation, making what could have been complex feel straightforward.",
      name: 'Michael A.',
      title: 'Private Investor',
    },
  ]

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
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
                aria-label="Previous"
              >
                <ArrowRight size={16} className="rotate-180" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-blue text-white flex items-center justify-center hover:bg-navy transition-colors"
                aria-label="Next"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100"
          >
            <div className="text-3xl text-blue/20 mb-4">&ldquo;</div>
            <p className="text-gray-600 leading-relaxed text-base mb-8">
              {testimonials[current].quote}
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

            <div className="flex gap-1.5 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === current ? 'bg-blue' : 'bg-gray-200'
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
