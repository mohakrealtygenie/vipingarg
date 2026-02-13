'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { HiPaperAirplane } from 'react-icons/hi2'

export default function ContactForm() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!name || !email || !subject || !message){
      console.error('Please fill all the fields');
      return;
    }
    const formData = {
      whichForm: 'contact',
      name,
      email,
      subject,
      message,
    }

    const submitRes = await fetch('/api/submitForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (submitRes.ok) {
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      console.log('Form submitted successfully');
    }else{
      console.log('Form submission failed');
    }
  }
  return (
    <section className="py-24 bg-off-white">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 md:p-12 relative overflow-hidden"
        >
          {/* Decorative background blur */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 mb-10 text-center">
             <h2 className="text-3xl font-bold text-navy mb-4 font-[family-name:var(--font-apple)]">
               Send a Message
             </h2>
             <p className="text-gray-500">
               I typically respond within 24 hours.
             </p>
          </div>

          <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all text-sm placeholder:text-gray-300"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all text-sm placeholder:text-gray-300"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Subject</label>
              <input
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all text-sm placeholder:text-gray-300"
                placeholder="How can I help you?"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Message</label>
              <textarea
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all text-sm placeholder:text-gray-300 resize-none"
                placeholder="Tell me a bit more about what you're looking for..."
              />
            </div>

            <button
               type="submit"
               className="w-full bg-navy text-white py-4 px-6 rounded-full font-bold text-lg hover:bg-blue transition-colors duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg mt-4"
            >
              Send Message
              <HiPaperAirplane className="w-5 h-5 -rotate-45" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
