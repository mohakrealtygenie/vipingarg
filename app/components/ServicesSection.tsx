'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Financial Planning & Coaching',
    description: 'Expert guidance for CFA/CSC exams and university finance subjects to help you build a strong career foundation.',
    link: '/coaching',
  },
  {
    title: 'Investment Strategy',
    description: 'Private market investing opportunities including private equity, real estate, and debt offerings.',
    link: '/investing',
  },
  {
    title: 'Mortgage Solutions',
    description: 'Tailored mortgage strategies for purchases, refinances, and investment properties.',
    link: '/mortgages',
  },
  {
    title: 'Wealth Management',
    description: 'Comprehensive wealth planning to align your financial decisions with your long-term goals.',
    link: '#contact',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-24 bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-blue font-semibold tracking-wider uppercase text-sm">Services</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 font-[family-name:var(--font-serif-display)]">
              Covering the Full Spectrum of Global Financial Services
            </h2>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 bg-white text-navy px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors shrink-0">
             View All Services <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-navy-light p-8 rounded-3xl flex flex-col justify-between group hover:bg-blue transition-colors duration-300"
            >
              <div>
                {/* No Icons here, just text */}
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-sm text-gray-300 group-hover:text-white/90 leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>
              
              <div className="flex justify-end">
                <a href={service.link} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-navy group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
