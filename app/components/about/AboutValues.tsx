'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const values = [
  {
    title: 'Fiduciary Standard',
    description: 'Your interests always come first. Unbiased advice tailored to your specific needs and goals.',
    features: ['Client-First', 'Transparency', 'No Conflicts'],
  },
  {
    title: 'Educational Approach',
    description: 'Breaking down complex concepts so you fully understand your financial landscape before making decisions.',
    features: ['Clarity', 'Confidence', 'Understanding'],
  },
  {
    title: 'Long-term Vision',
    description: 'Building strategies that withstand market volatility and serve generational wealth goals.',
    features: ['Durability', 'Growth', 'Resilience'],
  },
  {
    title: 'Integrity & Trust',
    description: 'Transparent communication and steadfast reliability in every interaction we have together.',
    features: ['Honesty', 'Reliability', 'Consistency'],
  },
]

const testimonials = [
  {
    quote: "Vipin's approach is refreshingly different. He takes the time to educate you on every aspect of your finances, never pushing products, just genuine guidance.",
    name: 'Sarah M.',
    title: 'Long-term Client',
  },
  {
    quote: "What sets Vipin apart is his ability to connect complex financial concepts to real life. You leave every conversation feeling confident and informed.",
    name: 'James L.',
    title: 'Business Owner',
  },
  {
    quote: "Working with Vipin has been transformative. From coaching me through exams to helping structure my portfolio — he's been there every step of the way.",
    name: 'Priya K.',
    title: 'CFA Candidate',
  },
]

export default function AboutValues() {
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  return (
    <>
      {/* Values Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue mb-2 block">
              My Philosophy
            </span>
            <h2 className="font-[family-name:var(--font-serif-display)] text-3xl md:text-4xl font-bold text-navy">
              Guiding Principles That <br />
              Define My <span className="text-blue italic">Practice</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-blue transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                  {value.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {value.features.map((f) => (
                    <span key={f} className="text-xs px-2.5 py-1 rounded-full bg-gray-50 text-gray-500 border border-gray-100">
                      {f}
                    </span>
                  ))}
                </div>

                <a
                  href="/contact"
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

      {/* Bottom CTA Banner */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/vipin-hero.jpg"
            alt="CTA Background"
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-[family-name:var(--font-serif-display)] text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start <br />
              <span className="text-blue-light">Your Financial Journey?</span>
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              Let&apos;s have a conversation about your goals and how I can help you achieve them.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-white hover:text-navy transition-colors duration-300 shadow-sm hover:shadow-md group"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
