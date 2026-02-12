'use client'

import { motion } from 'framer-motion'
import { HiUserGroup, HiAcademicCap, HiBriefcase, HiBuildingLibrary } from 'react-icons/hi2'

const audiences = [
  {
    icon: HiAcademicCap,
    title: 'CFA Candidates',
    description: 'Level I, II, III candidates needing structured guidance.',
    color: 'text-blue bg-blue/10',
  },
  {
    icon: HiBuildingLibrary,
    title: 'CSI Exam Takers',
    description: 'CSC, IFC, CPH candidates aiming for licensing.',
    color: 'text-emerald-600 bg-emerald-50',
  },
  {
    icon: HiUserGroup,
    title: 'University Students',
    description: 'Undergraduate, MBA, MFin, PhD students needing clarity.',
    color: 'text-amber-600 bg-amber-50',
  },
  {
    icon: HiBriefcase,
    title: 'Professionals',
    description: 'Banking & finance pros upskilling for career growth.',
    color: 'text-purple-600 bg-purple-50',
  },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function CoachingAudience() {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue">
            Who This Is For
          </span>
          <h2 className="font-[family-name:var(--font-apple)] text-3xl md:text-4xl font-bold text-navy mt-3">
            Designed for Ambitious Learners
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
             A practical and structured approach tailored to your specific goals.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {audiences.map((aud) => (
            <motion.div
              key={aud.title}
              variants={item}
              className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-2xl ${aud.color} transition-colors`}>
                <aud.icon />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-blue transition-colors">
                {aud.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {aud.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
