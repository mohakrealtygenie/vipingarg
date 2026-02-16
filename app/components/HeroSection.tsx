"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-off-white relative flex min-h-[90vh] items-center overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 md:py-20 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-blue/10 text-blue mb-6 inline-block rounded-full px-3 py-1 text-xs font-bold tracking-wider uppercase">
              Investing for Tomorrow, Together
            </span>

            <h1 className="text-navy mb-6 font-[family-name:var(--font-serif-display)] text-5xl leading-[1.1] font-bold tracking-tight md:text-6xl lg:text-7xl">
              Build Your <br />
              <span className="text-blue">Financial Future</span>
            </h1>

            <p className="mb-8 max-w-lg text-lg leading-relaxed text-gray-600">
              Founded by industry leaders who continue to lead the way. Expert
              coaching, distinct investment strategies, and mortgage solutions
              tailored to you.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-navy hover:bg-navy-light inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-white transition-colors"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/about"
                className="text-navy inline-flex items-center gap-2 rounded-full border border-gray-200 px-8 py-4 text-sm font-semibold transition-colors hover:border-gray-300"
              >
                Learn More
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8">
              {/* Stats or Trust Indicators could go here if needed, keeping it clean for now */}
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] w-full overflow-hidden rounded-2xl lg:h-[650px]"
          >
            <Image
              src="/vipin-hero.jpg"
              alt="Vipin Garg"
              fill
              className="object-cover"
              priority
            />
            {/* Optional: Overlay/Gradient if needed for text readability, but design is clean image */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
