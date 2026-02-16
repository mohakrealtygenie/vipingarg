'use client'

import { motion } from 'framer-motion'

const details = [
  {
    title: 'Email',
    info: 'contact@vipingarg.com',
    link: 'mailto:contact@vipingarg.com',
  },
  {
    title: 'Phone',
    info: '(555) 123-4567',
    link: 'tel:+15551234567',
  },
  {
    title: 'Office',
    info: 'Toronto, Ontario',
    link: 'https://maps.google.com',
  },
  {
    title: 'Schedule',
    info: 'Book a Virtual Coffee',
    link: 'https://cal.com/vipin-garg',
  },
]

export default function ContactDetails() {
  return (
    <section className="py-12 bg-white">
       <div className="mx-auto max-w-7xl px-6 lg:px-8">
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
           {details.map((item, index) => (
             <motion.a
               key={item.title}
               href={item.link}
               target="_blank"
               rel="noopener noreferrer"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="flex flex-col items-center text-center p-8 rounded-2xl bg-off-white hover:bg-navy hover:text-white transition-all duration-300 group"
             >
               <h3 className="font-bold mb-2 font-[family-name:var(--font-serif-display)] text-lg">
                 {item.title}
               </h3>
               <p className="text-gray-600 group-hover:text-gray-300 font-medium">
                 {item.info}
               </p>
             </motion.a>
           ))}
         </div>
       </div>
    </section>
  )
}
