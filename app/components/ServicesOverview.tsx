'use client'

import { motion } from 'framer-motion'
import { GraduationCap, TrendingUp, Home, ArrowRight } from 'lucide-react'

const services = [
  {
    id: 'coaching',
    icon: GraduationCap,
    title: 'Finance Coaching',
    items: ['CFA', 'CSC', 'IFC', 'CPH', 'University finance subjects'],
    cta: 'View Coaching',
    href: '#coaching',
    accent: 'bg-blue/10 text-blue',
  },
  {
    id: 'investing',
    icon: TrendingUp,
    title: 'Exempt Market Investing',
    items: ['Private equity', 'Real estate', 'Debt offerings', 'Alternative investments'],
    cta: 'Learn More',
    href: '#investing',
    accent: 'bg-emerald-50 text-emerald-600',
  },
  {
    id: 'mortgages',
    icon: Home,
    title: 'Mortgage Solutions',
    items: ['Purchase', 'Refinance', 'Investment properties', 'Self-employed'],
    cta: 'Explore',
    href: '#mortgages',
    accent: 'bg-amber-50 text-amber-600',
  },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
}

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function ServicesOverview() {
  return (
    <section className="py-20 md:py-28 bg-gray-100/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-blue">
            Services
          </span>
          <h2 className="font-[family-name:var(--font-apple)] text-3xl md:text-4xl font-bold text-navy mt-3">
            How I Can Help
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            From exam prep to portfolio building to property financing — get
            clear, expert guidance tailored to your goals.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              id={service.id}
              variants={card}
              className="group bg-white rounded-2xl p-7 border border-gray-100 shadow-sm transition-all hover:shadow-lg hover:border-blue/20 flex flex-col"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${service.accent}`}
              >
                <service.icon size={22} />
              </div>

              <h3 className="font-semibold text-navy text-lg mb-4">
                {service.title}
              </h3>

              <ul className="space-y-2.5 flex-1 mb-6">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue/40 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={service.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue transition-colors hover:text-blue-light group/link"
              >
                {service.cta}
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover/link:translate-x-1"
                />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
