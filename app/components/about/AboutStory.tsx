'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutStory() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           {/* Image / Visual Placeholder */}
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="relative aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden shadow-2xl"
           >
             {/* Replace with actual image if available, using placeholder color for now */}
             <div className="absolute inset-0 bg-navy/5 flex items-center justify-center text-gray-400">
                <Image 
                  src="/vipin-hero.jpg"
                  alt="Vipin's Photo"
                  width={600}
                  height={600}

                />
             </div>
             {/* Decorative element */}
             <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue rounded-full mix-blend-multiply opacity-80 blur-xl" />
           </motion.div>

           {/* Content */}
           <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
           >
             <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8 font-[family-name:var(--font-apple)]">
               A Journey Rooted in Finance and Education
             </h2>
             <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-[family-name:var(--font-sans)]">
               <p>
                 My career has always stood at the intersection of deep analytical finance and the human desire for clarity. Having navigated the complexities of capital markets, I realized that true wealth management isn't just about numbers—it's about understanding the people behind them.
               </p>
               <p>
                 As a licensed advisor and educator, I bridge the gap between institutional-grade investment strategies and personal financial goals. Whether I am coaching a CFA candidate or helping a family restructure their mortgage, the core principle remains the same:
               </p>
               <p className="font-bold text-navy font-[family-name:var(--font-apple)] text-xl border-l-4 border-blue pl-4 py-1 my-6 italic">
                 "Empowerment comes from understanding."
               </p>
               <p>
                 I don't just tell you what to do with your money. I explain why, ensuring you feel confident in every decision we make together.
               </p>
             </div>
           </motion.div>
        </div>
      </div>
    </section>
  )
}
