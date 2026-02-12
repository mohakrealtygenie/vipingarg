'use client'

import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi2'

export default function CoachingHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* Subtle top border/accent instead of blobs */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="inline-block mb-6 text-sm font-semibold tracking-widest text-blue uppercase">
            Start Your Journey
          </span>
          
          <h1 className="mx-auto max-w-4xl text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-navy leading-[1.1] mb-6 font-[family-name:var(--font-serif-display)]">
            Finance Coaching That Builds <span className="italic text-blue font-[family-name:var(--font-serif)]">Confidence</span>
            <br />
            <span className="text-gray-400 font-light font-[family-name:var(--font-sans)]">— Not Just Exam Scores</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg md:text-xl text-gray-500 mb-10 leading-relaxed">
            CFA • CSC • IFC • CPH • University Finance
            <br />
            <span className="text-gray-400 text-base">Concept-driven, exam-ready, career-aligned coaching.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#coaching-form"
              className="btn-shiny px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center gap-2 group"
            >
              Book a Free Coaching Call
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
