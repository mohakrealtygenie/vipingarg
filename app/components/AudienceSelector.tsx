'use client'

import { motion } from 'framer-motion'
import { HiAcademicCap, HiArrowTrendingUp, HiHomeModern, HiArrowRight } from 'react-icons/hi2'

const audiences = [
  {
    icon: HiAcademicCap,
    title: 'Student or Professional',
    description: 'Preparing for finance exams or academic courses',
    cta: 'Go to Coaching',
    href: '/coaching',
    color: 'bg-blue/10 text-blue',
  },
  {
    icon: HiArrowTrendingUp,
    title: 'Investor',
    description: 'Exploring private markets and alternative investments',
    cta: 'Go to Exempt Markets',
    href: '#investing',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: HiHomeModern,
    title: 'Homebuyer or Real Estate Investor',
    description: 'Looking for smart mortgage options',
    cta: 'Go to Mortgages',
    href: '#mortgages',
    color: 'bg-amber-50 text-amber-600',
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

export default function AudienceSelector() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-blue">
            Find Your Path
          </span>
          <h2 className="font-[family-name:var(--font-apple)] text-3xl md:text-4xl font-bold text-navy mt-3">
            I&apos;m here because I&apos;m a…
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-4"
        >
          {audiences.map((a) => (
            <motion.a
              key={a.title}
              href={a.href}
              variants={item}
              className="group flex items-center gap-5 rounded-xl border border-gray-200 bg-white p-5 md:p-6 transition-all hover:border-blue/30 hover:shadow-xl hover:shadow-blue/5"
            >
              <div
                className={`shrink-0 w-12 h-12 border border-gray-200 rounded-xl flex items-center justify-center ${a.color}`}
              >
                <a.icon size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-navy text-sm md:text-base">
                  {a.title}
                </p>
                <p className="text-sm text-gray-500 mt-0.5">{a.description}</p>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-blue opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {a.cta}
                <HiArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
