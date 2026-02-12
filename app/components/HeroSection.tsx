'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi2'

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="inline-block rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-xs font-medium text-gray-600 uppercase tracking-wider mb-8">
              A Trusted Financial Advisor
            </span>

            {/* Anthropic-style mixed typography — large, dramatic */}
            <h1 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4.25rem] leading-[1.08] tracking-tight mb-8">
              <span className="font-[family-name:var(--font-sans)] font-semibold text-gray-900">
                Build Your Financial
              </span>
              <br />
              <span className="font-[family-name:var(--font-sans)] font-semibold text-gray-900">
                Future With{' '}
              </span>
              <span className="font-[family-name:var(--font-apple)] italic font-normal text-gray-900">
                Clarity,
              </span>
              <br />
              <span className="font-[family-name:var(--font-apple)] italic font-normal text-gray-900">
                Confidence,
              </span>{' '}
              <span className="font-[family-name:var(--font-sans)] font-semibold text-gray-900">
                and the
              </span>
              <br />
              <span className="font-[family-name:var(--font-sans)] font-semibold text-gray-900">
                Right Guidance
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-3 max-w-lg">
              Finance coaching for exams &amp; careers • Private market
              investing guidance • Mortgage solutions
            </p>

            <p className="text-sm text-gray-400 mb-10 max-w-lg">
              Led by a CFA Charterholder with deep experience across capital
              markets, education, and real-world finance.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="/coaching"
                className="inline-flex items-center gap-2 rounded-full bg-blue text-white px-6 py-3 text-sm font-medium transition-all hover:bg-gray-800 hover:shadow-lg group"
              >
                Explore Coaching
                <HiArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="#investing"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white text-gray-700 px-6 py-3 text-sm font-medium transition-all hover:border-gray-400 hover:shadow-sm"
              >
                Private Market Investing
              </a>
              <a
                href="#mortgages"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white text-gray-700 px-6 py-3 text-sm font-medium transition-all hover:border-gray-400 hover:shadow-sm"
              >
                Mortgage Solutions
              </a>
            </div>
          </motion.div>

          {/* Right Column: Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-96 md:w-[50rem] md:h-[40rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/vipin-hero.jpg"
                alt="Vipin Garg - Financial Advisor"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 500px, 352px"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Floating credential badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-1 left-4 lg:left-0 bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-3 flex items-center gap-3"
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
