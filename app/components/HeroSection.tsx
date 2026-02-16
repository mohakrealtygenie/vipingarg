"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src='/bg.jpg'
          alt="Corporate Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-navy/80" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-12 text-center md:py-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-blue/20 text-blue-light mb-8 inline-block rounded-full px-4 py-1.5 text-sm font-bold tracking-wider uppercase backdrop-blur-sm">
            Investing for Tomorrow, Together
          </span>

          <h1 className="mb-8 font-[family-name:var(--font-serif-display)] text-5xl leading-tight font-light tracking-tight text-white md:text-7xl lg:text-8xl">
            Build Your <br />
            <span className="text-blue-light">Financial Future</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
            Founded by industry leaders who continue to lead the way. Expert
            coaching, distinct investment strategies, and mortgage solutions
            tailored to you.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="bg-blue hover:bg-blue-600 inline-flex items-center gap-2 rounded-full px-10 py-4 text-base font-bold text-white transition-all hover:scale-105 hover:shadow-lg"
            >
              Get Started
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="/about"
              className="text-white hover:bg-white/10 inline-flex items-center gap-2 rounded-full border border-white/30 px-10 py-4 text-base font-bold transition-all hover:border-white"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
