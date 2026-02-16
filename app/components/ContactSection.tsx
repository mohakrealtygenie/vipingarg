'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
           <span className="text-blue font-semibold tracking-wider uppercase text-sm">Contact Us</span>
           <h2 className="text-4xl md:text-5xl font-bold mt-4 text-navy font-[family-name:var(--font-serif-display)]">
             Let&apos;s <span className="text-blue">Connect</span>
           </h2>
           <p className="text-gray-600 mt-4">We look forward to learning about your financial goals.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column: Form */}
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl">
               <h3 className="text-2xl font-bold text-navy mb-2">Get in Touch</h3>
               <p className="text-gray-500 mb-8 text-sm">Have a question? Fill out the form below and we&apos;ll respond promptly.</p>
               
               <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                        <input type="text" placeholder="John Smith" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue bg-white" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input type="email" placeholder="john@email.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue bg-white" />
                      </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                    <textarea rows={4} placeholder="Type here..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue bg-white resize-none" />
                  </div>
                  
                  <button type="submit" className="bg-navy text-white px-8 py-3 rounded-full font-semibold hover:bg-navy-light transition-colors w-full md:w-auto">
                    Submit
                  </button>
               </form>
            </div>

            {/* Right Column: Office/Image */}
            <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden">
                {/* Use the hero image again or another one if available. Since we don't have many, reusing hero image or a placeholder approach */}
               <div className="absolute inset-0 bg-blue/10" />
               <div className="absolute inset-0 flex flex-col justify-end p-12 bg-gradient-to-t from-navy/80 to-transparent">
                  <h3 className="text-white text-2xl font-bold mb-2">Office Location</h3>
                  <p className="text-white/80">
                    Toronto, ON<br />
                    Serving clients across Canada
                  </p>
                  
                  <div className="mt-8 flex gap-4">
                     <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white">
                        <ArrowRight className="w-5 h-5 -rotate-45" />
                     </div>
                  </div>
               </div>
            </div>
        </div>
      </div>
    </section>
  )
}
