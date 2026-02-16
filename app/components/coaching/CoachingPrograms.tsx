'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const programs = [
  {
    title: 'CFA Program',
    description: 'Full syllabus coverage with topic strategy and exam technique mastery.',
    features: ['Level I, II, III', 'Mock exams', 'Concept drills'],
    cta: 'Learn More',
  },
  {
    title: 'CSI Exams',
    description: 'CIRO-aware perspective with regulatory frameworks and practical application.',
    features: ['CSC', 'IFC', 'CPH'],
    cta: 'Learn More',
  },
  {
    title: 'University Finance',
    description: 'Corporate finance, valuation, and portfolio management tutoring.',
    features: ['Undergrad', 'MBA / MFin', 'PhD Level'],
    cta: 'Learn More',
  },
  {
    title: 'Career Coaching',
    description: 'Interview prep, resume review, and career path guidance for finance roles.',
    features: ['Interview prep', 'Resume review', 'Networking'],
    cta: 'Learn More',
  },
]

export default function CoachingPrograms() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue mb-2 block">
            Programs Offered
          </span>
          <h2 className="font-[family-name:var(--font-serif-display)] text-3xl md:text-4xl font-bold text-navy">
            How Can We Help You <br />
            Reach Your <span className="text-blue italic">Goals</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
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

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {program.features.map((f) => (
                  <span key={f} className="text-xs px-2.5 py-1 rounded-full bg-gray-50 text-gray-500 border border-gray-100">
                    {f}
                  </span>
                ))}
              </div>

              <a
                href="#coaching-form"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-blue transition-colors group/link"
              >
                {program.cta}
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
