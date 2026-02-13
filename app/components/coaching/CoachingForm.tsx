'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiPaperAirplane } from 'react-icons/hi2'

const exams = [
  'CFA Level I',
  'CFA Level II',
  'CFA Level III',
  'CSC',
  'IFC',
  'CPH',
  'University Finance',
  'Other',
]

export default function CoachingForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedExam, setSelectedExam] = useState('');
  const [targetTimeline, setTargetTimeline] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ name, email, selectedExam, targetTimeline, location });

    const formData = {
      name,
      email,
      exam: selectedExam,
      targetTimeline,
      location,
      whichForm: 'coaching',
    };
    
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
      setSelectedExam('');
      setTargetTimeline('');
      setLocation('');
      console.log('Form submitted successfully');
    }else{
      console.log('Form submission failed');
    }
  };

  return (
    <section id="coaching-form" className="py-24 bg-off-white relative">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          <div className="lg:col-span-2 space-y-6 lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-[family-name:var(--font-apple)] text-4xl font-bold tracking-tight text-navy leading-tight">
                Ready to master your <span className="text-blue italic font-[family-name:var(--font-apple)]">finance exams?</span>
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed font-[family-name:var(--font-sans)]">
                Book a free 15-minute diagnostic call. We'll map out your study timeline and identify exactly what's holding you back.
              </p>
              
              <div className="mt-8 space-y-4">
                {[
                  'Personalized study roadmaps',
                  'Strategic exam techniques',
                  'Complex concept breakdown'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-medium text-navy/80">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 bg-white rounded-xl shadow-lg border border-gray-100 p-8 md:p-10"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative group">
                    <label className="sr-only">Full Name</label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all text-sm placeholder:text-gray-400"
                    />
                  </div>
                  <div className="relative group">
                    <label className="sr-only">Email Address</label>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all text-sm placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 ml-1">
                    Select Your Exam
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {exams.map((exam) => (
                      <label key={exam} className="relative cursor-pointer group">
                        <input
                          type="radio"
                          name="exam"
                          value={exam}
                          checked={selectedExam === exam}
                          onChange={(e) => setSelectedExam(e.target.value)}
                          className="sr-only"
                        />
                        <span className={`inline-block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
                          selectedExam === exam
                            ? 'bg-navy text-white border-navy'
                            : 'bg-white text-gray-600 border-gray-200 hover:border-blue hover:text-blue'
                        }`}>
                          {exam}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative group">
                    <label className="sr-only">Target Timeline</label>
                    <input
                      type="text"
                      placeholder="Target Timeline (e.g. June 2026)"
                      value={targetTimeline}
                      onChange={(e) => setTargetTimeline(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all text-sm placeholder:text-gray-400"
                    />
                  </div>
                  <div className="relative group">
                    <label className="sr-only">Location</label>
                    <input
                      type="text"
                      placeholder="Location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all text-sm placeholder:text-gray-400"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue text-white py-4 px-6 rounded-full font-bold text-base hover:bg-navy transition-colors duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                Book Free Consultation
                <HiPaperAirplane className="w-5 h-5 -rotate-45" />
              </button>
              
              <p className="text-center text-xs text-gray-400 font-medium">
                No commitment required. We'll respond within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
