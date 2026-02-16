'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "Vipin has been instrumental in my growth. His team took the time to truly understand our needs and helped us eliminate inefficiencies.",
    author: "Kate Smith",
    role: "VP of Operations",
  },
  {
    quote: "I hired Vipin for a small project & was very happy. He not only answered all my questions, but he didn't treat me like a 'small project'.",
    author: "Carlos Martinez",
    role: "Small Business Owner",
  },
  {
    quote: "Partnering with Vipin was a game-changer for us. They took the time to understand our challenges and helped us streamline for success.",
    author: "Ben Linus",
    role: "Tech Lead",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-off-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue font-semibold tracking-wider uppercase text-sm">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-navy font-[family-name:var(--font-serif-display)]">
            Verified Client <span className="text-blue">Feedback</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="mb-6 text-blue text-4xl font-serif">“</div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {t.quote}
              </p>
              <div className="flex items-center gap-4">
                 {/* Placeholder for avatar if needed, but text only is safer for 'no icons' rule unless it's an image. Using text for now. */}
                 <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-sm">
                    {t.author.charAt(0)}
                 </div>
                 <div>
                    <h4 className="font-bold text-navy text-sm">{t.author}</h4>
                    <p className="text-xs text-gray-400">{t.role}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
