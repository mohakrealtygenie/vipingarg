'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi2'

export default function CoachingHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-off-white">
      {/* Background decoration: Subtle blue gradient */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-navy via-blue-light to-navy opacity-30" />
      <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-blue/5 rounded-full blur-[120px] mix-blend-multiply" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-8 text-xs font-bold tracking-[0.2em] text-blue uppercase border-b border-blue/30 pb-2"
          >
            Start Your Journey
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto max-w-5xl text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-navy leading-[1.05] mb-8 font-[family-name:var(--font-serif-display)]"
          >
            Finance Coaching That Builds <span className="italic text-blue font-[family-name:var(--font-serif)]">Confidence</span>
            <br />
            <span className="text-gray-400 font-light font-[family-name:var(--font-sans)] text-4xl md:text-5xl block mt-4">— Not Just Exam Scores</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mx-auto max-w-2xl text-lg md:text-xl text-gray-500 mb-12 leading-relaxed"
          >
            CFA • CSC • IFC • CPH • University Finance
            <br />
            <span className="text-navy/60 text-base font-medium mt-2 block">Concept-driven, exam-ready, career-aligned coaching.</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="#coaching-form"
              className="bg-blue relative overflow-hidden px-10 py-5 rounded-full text-white font-bold text-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center gap-3 group tracking-wide shadow-inner shadow-white/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10 flex items-center gap-3">
                Book a Free Coaching Call
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>      
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
