'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const programs = [
  {
    title: 'CFA Program',
    features: [
      'Full syllabus coverage',
      'Topic strategy',
      'Exam technique',
    ],
    cta: 'View CFA Coaching',
  },
  {
    title: 'CSI Exams',
    subtitle: 'CSC | IFC | CPH',
    features: [
      'CIRO-aware perspective',
      'Regulatory frameworks',
      'Practical application',
    ],
    cta: 'View CSI Coaching',
  },
  {
    title: 'University Tutoring',
    subtitle: 'Finance & Accounting',
    features: [
      'Corporate Finance',
      'Valuation',
      'Portfolio Management',
    ],
    cta: 'View Academic Tutoring',
  },
]

export default function CoachingPrograms() {
  return (
    <section className="py-24 bg-navy text-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
            Programs Offered
          </span>
          <h2 className="font-[family-name:var(--font-serif-display)] text-3xl md:text-4xl font-bold mt-4">
            Comprehensive Training Paths
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative group rounded-3xl p-8 bg-black/20 border border-white/5 hover:bg-white/10 transition-colors duration-300 flex flex-col h-full"
            >
              <h3 className="text-2xl font-bold mb-1">{program.title}</h3>
              {program.subtitle && (
                <p className="text-sm font-medium text-white/60 mb-1">
                  {program.subtitle}
                </p>
              )}

              <ul className="mt-8 space-y-4 mb-8 flex-1">
                {program.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-white/80 text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 rounded-xl bg-white/5 border border-white/5 text-white font-semibold text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2 group/btn">
                {program.cta}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
