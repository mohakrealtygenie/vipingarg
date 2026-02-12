'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi2'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pb-12 md:pb-20 overflow-hidden bg-off-white">
      {/* Background decoration: Subtle blue gradient */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-blue-light/10 via-cream to-transparent opacity-60" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column: Text */}
          <motion.div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block border-l-2 border-gold pl-4 text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-8"
            >
              A Trusted Financial Advisor
            </motion.span>

            {/* Anthropic-style mixed typography — compact */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6 text-navy font-bold">
              <span className="font-[family-name:var(--font-serif-display)] font-bold">
                Build Your Financial
              </span>
              <br />
              <span className="font-[family-name:var(--font-serif-display)] font-bold">
                Future With{' '}
              </span>
              <span className="font-[family-name:var(--font-apple)] italic text-gold relative inline-block">
                Clarity,
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-gold opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
              <br />
              <span className="font-[family-name:var(--font-apple)] italic text-gold">
                Confidence,
              </span>{' '}
              <span className="font-[family-name:var(--font-serif-display)] font-bold">
                and the
              </span>
              <br />
              <span className="font-[family-name:var(--font-serif-display)] font-bold">
                Right Guidance
              </span>
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 max-w-lg font-light"
            >
              Finance coaching for exams &amp; careers • Private market
              investing guidance • Mortgage solutions
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="/coaching"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-blue px-8 py-3 text-sm font-medium text-white transition-all hover:bg-navy/90 hover:shadow-lg"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Coaching
                  <HiArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
                <motion.div
                  initial={{ x: '-100%', skewX: -25 }}
                  animate={{ x: '200%' }}
                  transition={{
                    repeat: Infinity,
                    repeatDelay: 3,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 z-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
              </a>
              <a
                href="#investing"
                className="inline-flex items-center gap-2 rounded-full border border-gray-400 bg-white text-gray-700 px-6 py-3 text-sm font-medium transition-all hover:border-gray-400 hover:shadow-sm"
              >
                Private Market Investing
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="relative flex justify-center lg:justify-end h-[40vh] lg:h-[60vh] items-center"
          >
            <div className="relative w-full h-full max-w-md rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/vipin-hero.jpg"
                alt="Vipin Garg - Financial Advisor"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 100vw, 500px"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
            </div>
            {/* Background blob for texture */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-gold/20 rounded-full blur-3xl opacity-50" />
            {/* Floating credential badge */}
            <div
              className="absolute bottom-6 left-1/3 -translate-x-1/2 bg-white/95 backdrop-blur rounded-xl shadow-lg border border-gray-100 px-4 py-3 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-900">CFA Charterholder</p>
                <p className="text-[11px] text-gray-400">MBA in Finance</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
