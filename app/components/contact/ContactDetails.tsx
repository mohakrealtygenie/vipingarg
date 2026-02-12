'use client'

import { motion } from 'framer-motion'
import { HiEnvelope, HiPhone, HiMapPin, HiCalendar } from 'react-icons/hi2'

const details = [
  {
    icon: HiEnvelope,
    title: 'Email',
    info: 'contact@vipingarg.com',
    link: 'mailto:contact@vipingarg.com',
  },
  {
    icon: HiPhone,
    title: 'Phone',
    info: '(555) 123-4567',
    link: 'tel:+15551234567',
  },
  {
    icon: HiMapPin,
    title: 'Office',
    info: 'Toronto, Ontario',
    link: 'https://maps.google.com',
  },
  {
    icon: HiCalendar,
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
               className="flex flex-col items-center text-center p-8 rounded-2xl bg-off-white hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-lg transition-all duration-300 group"
             >
               <div className="w-12 h-12 rounded-full bg-blue/10 flex items-center justify-center text-blue mb-4 group-hover:bg-blue group-hover:text-white transition-colors">
                 <item.icon className="w-6 h-6" />
               </div>
               <h3 className="font-bold text-navy mb-2 font-[family-name:var(--font-apple)]">
                 {item.title}
               </h3>
               <p className="text-gray-600 font-medium">
                 {item.info}
               </p>
             </motion.a>
           ))}
         </div>
       </div>
    </section>
  )
}
