"use client";

import { motion } from "framer-motion";

export default function CypherSection() {
  return (
    <section id="cypher" className="relative py-24 md:py-32 bg-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="text-xs tracking-[0.3em] text-gray-mid font-[family-name:var(--font-mono)] mb-2">
            [ 002 ]
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-6xl md:text-8xl tracking-tight">
            THE
            <br />
            <span className="text-white/20">CYPHER</span>
          </h2>
        </motion.div>

        {/* Video Embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video max-w-4xl mx-auto bg-black border border-white/10 overflow-hidden"
        >
          <iframe
            src="https://www.youtube.com/embed/DW0B2epPX-w"
            title="KARTELLEM Latest Cypher"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center text-xs text-gray-mid tracking-[0.2em] font-[family-name:var(--font-mono)] max-w-lg mx-auto"
        >
          RAW. UNFILTERED. FROM THE ROOFTOPS OF MANILA.
          <br />
          WHERE THE CONCRETE MEETS THE BEAT.
        </motion.p>
      </div>
    </section>
  );
}
