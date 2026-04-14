"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-gray overflow-hidden">
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h2 className="font-[family-name:var(--font-heading)] text-[20vw] text-white/[0.02] tracking-tight whitespace-nowrap">
          TELL&apos;EM
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="/images/65770747_1313872668753122_7195827051402625024_n.jpg"
                alt="Manila Underground"
                className="w-full h-full object-cover duotone"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray/50 to-transparent" />
            </div>
            {/* Floating tag */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 -right-4 md:bottom-8 md:-right-8 bg-black border border-white/10 p-6"
            >
              <p className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl">
                EST.
                <br />
                2024
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.3em] text-gray-mid font-[family-name:var(--font-mono)] mb-4">
              [ 004 ] THE MOVEMENT
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl tracking-tight mb-8">
              FROM THE
              <br />
              <span className="text-vandal-red">SOUTH SIDE</span>
              <br />
              OF MANILA
            </h2>
            <div className="space-y-4 text-sm text-gray-mid leading-relaxed font-[family-name:var(--font-mono)]">
              <p>
                KARTELLEM was born in the narrow alleys and rooftops of Manila&apos;s underground scene.
                A collective of artists, MCs, producers, and creators united by one belief — the streets have
                something to say.
              </p>
              <p>
                We don&apos;t follow trends. We set them. Every piece, every track, every visual is a raw expression
                of who we are. No filters, no compromise. From spray cans to sound waves, we
                tell&apos;em through everything we touch.
              </p>
              <p>
                This isn&apos;t just a brand. This is a movement. And you&apos;re either in the Kartel, or
                you&apos;re watching from outside.
              </p>
            </div>

            <div className="mt-10 flex gap-8">
              <div>
                <p className="font-[family-name:var(--font-heading)] text-4xl">6+</p>
                <p className="text-[10px] tracking-[0.2em] text-gray-mid font-[family-name:var(--font-mono)] mt-1">MEMBERS</p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-heading)] text-4xl">12+</p>
                <p className="text-[10px] tracking-[0.2em] text-gray-mid font-[family-name:var(--font-mono)] mt-1">DROPS</p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-heading)] text-4xl">1</p>
                <p className="text-[10px] tracking-[0.2em] text-gray-mid font-[family-name:var(--font-mono)] mt-1">MOVEMENT</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
