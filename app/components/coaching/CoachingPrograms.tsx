'use client'

import { motion } from 'framer-motion'
import {
  HiAcademicCap,
  HiBookOpen,
  HiCalculator,
  HiArrowRight,
} from 'react-icons/hi2'

const programs = [
  {
    title: 'CFA Program',
    features: [
      'Full syllabus coverage',
      'Topic strategy',
      'Exam technique',
    ],
    cta: 'View CFA Coaching',
    icon: HiAcademicCap,
    gradient: 'from-blue-600 to-blue-800',
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
    icon: HiBookOpen,
    gradient: 'from-emerald-600 to-emerald-800',
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
    icon: HiCalculator,
    gradient: 'from-purple-600 to-purple-800',
  },
]

export default function CoachingPrograms() {
  return (
    <section className="py-24 bg-navy text-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-300">
            Programs Offered
          </span>
          <h2 className="font-[family-name:var(--font-apple)] text-3xl md:text-4xl font-bold mt-4">
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
              className="relative group rounded-2xl p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 flex flex-col h-full"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${program.gradient} flex items-center justify-center mb-6 shadow-md`}
              >
                <program.icon className="text-white w-7 h-7" />
              </div>

              <h3 className="text-2xl font-bold mb-1">{program.title}</h3>
              {program.subtitle && (
                <p className="text-sm font-medium text-white/60 mb-1">
                  {program.subtitle}
                </p>
              )}

              <ul className="mt-6 space-y-4 mb-8 flex-1">
                {program.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-white/80 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 rounded-xl bg-white/10 border border-white/10 text-white font-semibold text-sm hover:bg-white/20 transition-all flex items-center justify-center gap-2 group/btn">
                {program.cta}
                <HiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
