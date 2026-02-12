'use client'

import { motion } from 'framer-motion'
import { HiCheckCircle, HiScale, HiAcademicCap, HiUserGroup } from 'react-icons/hi2'

export default function InvestingInfo() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-32">
        
        {/* What Are Exempt Markets */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue font-bold tracking-wider uppercase text-sm mb-2 block">Market Overview</span>
            <h2 className="text-4xl font-bold text-navy mb-6 font-[family-name:var(--font-apple)]">
              What Are Exempt Markets?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              These are investment opportunities available outside of the public stock markets, subject to specific regulatory rules.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {['Private Equity', 'Private Debt', 'Real Estate Offerings', 'MICs (Mortgage Investment Corps)'].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="w-2 h-2 rounded-full bg-blue flex-shrink-0" />
                  <span className="font-medium text-navy">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-400 italic">
              * Subject to regulatory rules and suitability.
            </p>
          </div>
          <div className="bg-off-white rounded-2xl p-8 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue/5 rounded-full -translate-y-1/2 translate-x-1/2" />
             <div className="relative z-10 space-y-6">
                <h3 className="text-xl font-bold text-navy flex items-center gap-2">
                  <HiScale className="text-blue w-6 h-6" />
                  Regulatory Framework
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The "Exempt Market" refers to a section of Canada’s capital markets where securities can be sold without a prospectus. This space is highly regulated to ensure investor protection while offering unique opportunities for portfolio diversification.
                </p>
             </div>
          </div>
        </div>

        {/* Who This Is For */}
        <div className="bg-navy rounded-3xl p-10 md:p-16 text-white relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
             <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[family-name:var(--font-apple)]">Who This Is For</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Private market investments are typically suited for investors seeking diversification beyond public equities and bonds, who understand the risks involved.
                </p>
                <div className="space-y-4">
                  {[
                    { title: 'Accredited Investors', desc: 'High net worth individuals meeting specific income or asset criteria.' },
                    { title: 'Sophisticated Investors', desc: 'Those with extensive knowledge and experience in financial markets.' },
                    { title: 'Business Owners & Professionals', desc: 'Looking for tax-efficient corporate investment strategies.' }
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="mt-1 bg-blue/20 p-1.5 rounded-full h-fit">
                        <HiCheckCircle className="w-5 h-5 text-blue" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
             <div className="lg:pl-12 border-l border-white/10 hidden lg:block">
                <HiUserGroup className="w-32 h-32 text-blue opacity-20" />
                <p className="mt-6 text-gray-400 italic">
                  "Building wealth is not just about returns, but about alignment with your life goals."
                </p>
             </div>
          </div>
        </div>

        {/* My Role & Process */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* My Role */}
          <div>
            <h2 className="text-3xl font-bold text-navy mb-8 font-[family-name:var(--font-apple)]">My Role</h2>
            <div className="space-y-8">
              {[
                { icon: HiAcademicCap, title: 'Educate on Structures', desc: 'Deep dive into how private investments specifically work.' },
                { icon: HiScale, title: 'Discuss Risk & Liquidity', desc: 'Transparent conversation about potential downsides and lock-up periods.' },
                { icon: HiUserGroup, title: 'Facilitate Onboarding', desc: 'Seamless guidance through the subscription and compliance process.' },
                { icon: HiCheckCircle, title: 'Long-term Support', desc: 'Ongoing updates and performance reviews of your portfolio.' }
              ].map((item) => (
                <div key={item.title} className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-off-white flex items-center justify-center text-blue group-hover:bg-blue group-hover:text-white transition-colors duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-lg">{item.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 text-sm font-medium">
              Not about pushing products. It's about finding the bespoke fit for your portfolio.
            </div>
          </div>

          {/* Process */}
          <div>
             <h2 className="text-3xl font-bold text-navy mb-8 font-[family-name:var(--font-apple)]">The Process</h2>
             <div className="space-y-0 relative">
               <div className="absolute top-4 bottom-4 left-6 w-0.5 bg-gray-200" />
               {[
                 { step: '01', title: 'Intro Discussion', desc: 'We assess your financial situation and detailed investment goals.' },
                 { step: '02', title: 'Eligibility Assessment', desc: 'Determining if you meet the regulatory criteria (Accredited/Eligible).' },
                 { step: '03', title: 'Education & Selection', desc: 'Reviewing specific opportunities that align with your objectives.' },
                 { step: '04', title: 'Participation', desc: 'Completing documentation through licensed channels and funding.' }
               ].map((item, index) => (
                 <div key={item.step} className="relative pl-16 pb-12 last:pb-0">
                    <div className="absolute left-0 top-0 w-12 h-12 bg-white border-2 border-blue rounded-full flex items-center justify-center text-blue font-bold shadow-sm z-10">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-navy">{item.title}</h3>
                    <p className="text-gray-500 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                 </div>
               ))}
             </div>
          </div>
        </div>

      </div>
    </section>
  )
}
