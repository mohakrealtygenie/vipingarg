'use client'

import { motion } from 'framer-motion'

const audiences = [
  {
    title: 'CFA Candidates',
    description: 'Level I, II, III candidates needing structured guidance.',
  },
  {
    title: 'CSI Exam Takers',
    description: 'CSC, IFC, CPH candidates aiming for licensing.',
  },
  {
    title: 'University Students',
    description: 'Undergraduate, MBA, MFin, PhD students needing clarity.',
  },
  {
    title: 'Professionals',
    description: 'Banking & finance pros upskilling for career growth.',
  },
]

export default function CoachingAudience() {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue">
            Who This Is For
          </span>
          <h2 className="font-[family-name:var(--font-serif-display)] text-3xl md:text-4xl font-bold text-navy mt-3">
            Designed for Ambitious Learners
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
             A practical and structured approach tailored to your specific goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((aud, index) => (
            <motion.div
              key={aud.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-blue/10 mb-6 group-hover:text-blue/20 transition-colors">
                 0{index + 1}
              </div>
              <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-blue transition-colors font-[family-name:var(--font-serif-display)]">
                {aud.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {aud.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
