'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CoachingAudience() {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-sm border border-gray-100">

          {/* Left: Image */}
          <div className="relative h-[300px] lg:h-auto min-h-[350px]">
            <Image
              src="/coaching2.jpg"
              alt="Coaching Vision"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: Content Card */}
          <div className="bg-blue p-10 md:p-14 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-[family-name:var(--font-serif-display)] text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                Achieving Your <br />Vision
              </h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Whether you're preparing for the CFA, CSI exams, or university finance courses,
                our personalized approach ensures you don't just pass — you truly understand
                the material and can apply it confidently in your career.
              </p>
              <div className="space-y-3">
                {['CFA Candidates (Level I–III)', 'CSI Exam Takers (CSC, IFC, CPH)', 'University Students', 'Finance Professionals'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-white/90 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
