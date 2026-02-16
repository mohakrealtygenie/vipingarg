'use client'

import { motion } from 'framer-motion'

export default function MortgagesContent() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-32">
        
        {/* Who This Is For & Approach - Side by Side */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Who This Is For */}
          <div>
            <span className="text-blue font-bold tracking-wider uppercase text-sm mb-2 block">Target Audience</span>
            <h2 className="text-3xl font-bold text-navy mb-8 font-[family-name:var(--font-serif-display)]">
              Who This Is For
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'First-time Buyers', },
                { title: 'Refinancing', },
                { title: 'Real Estate Investors', },
                { title: 'Clients Wanting Structure', }
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col items-center text-center gap-2 hover:border-blue transition-colors duration-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue mb-2" />
                  <span className="font-bold text-navy">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* My Approach */}
          <div className="bg-navy rounded-3xl p-10 md:p-12 text-white relative overflow-hidden flex flex-col justify-center">
             <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-8 font-[family-name:var(--font-serif-display)]">My Approach</h2>
                <div className="space-y-6">
                  {[
                    'Cash-flow Impact Analysis',
                    'Long-term Strategy Alignment',
                    'Risk & Flexibility Assessment',
                    'Holistic Financial Planning'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-2.5 h-2.5 bg-blue rounded-full" />
                      </div>
                      <span className="text-lg text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-3xl font-bold text-navy mb-12 text-center font-[family-name:var(--font-serif-display)]">
            Comprehensive Specialist Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Purchase Mortgages', desc: 'Navigating your first or next home purchase with confidence.' },
              { title: 'Refinancing', desc: 'Accessing equity or restructuring debt for better cash flow.' },
              { title: 'Investment Property', desc: 'Strategic financing for growing your real estate portfolio.' },
              { title: 'Strategic Renewals', desc: 'Negotiating better terms aligned with your evolving goals.' }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-off-white border border-gray-100 hover:border-blue/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-2xl font-bold text-blue/20 mb-6 group-hover:text-blue transition-colors">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="relative">
           <div className="absolute inset-0 flex items-center" aria-hidden="true">
             <div className="w-full border-t border-gray-200" />
           </div>
           <div className="relative flex justify-center">
             <span className="bg-white px-4 text-sm text-gray-500 font-bold uppercase tracking-wider">The Process</span>
           </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
           {[
             { step: '01', title: 'Initial Assessment', desc: 'Understanding your full financial picture.' },
             { step: '02', title: 'Understand Goals', desc: 'Clarifying your short and long-term objectives.' },
             { step: '03', title: 'Explore Options', desc: 'Presenting tailored mortgage strategies.' },
             { step: '04', title: 'Clear Explanation', desc: 'Ensuring you understand every detail before signing.' }
           ].map((item, index) => (
             <div key={item.step} className="text-center relative group p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 mx-auto bg-navy text-white rounded-full flex items-center justify-center font-bold mb-4 shadow-sm group-hover:bg-blue transition-colors">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
             </div>
           ))}
        </div>

      </div>
    </section>
  )
}
