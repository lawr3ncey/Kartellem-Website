"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat duotone"
        style={{
          backgroundImage:
            "url('/images/89341481_1530940513713002_6870270905482739712_n.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="font-[family-name:var(--font-heading)] text-[12vw] md:text-[10vw] lg:text-[8vw] leading-[0.85] tracking-tight text-white">
            KARTEL
            <br />
            <span className="text-white/20">L</span>EM
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-xs md:text-sm text-gray-mid tracking-[0.3em] font-[family-name:var(--font-mono)] max-w-xl mx-auto"
        >
          BORN FROM THE UNDERGROUND. BUILT FOR THE STREETS.
          <br />
          MANILA&apos;S FINEST COLLECTIVE.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#drops"
            className="px-8 py-4 bg-white text-black text-xs tracking-[0.3em] font-[family-name:var(--font-mono)] font-bold hover:bg-vandal-red hover:text-white transition-all duration-300"
          >
            SHOP DROP
          </a>
          <a
            href="#about"
            className="px-8 py-4 border border-white/30 text-white text-xs tracking-[0.3em] font-[family-name:var(--font-mono)] hover:border-white transition-all duration-300"
          >
            ENTER THE KARTEL
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-10 bg-white/30"
        />
      </motion.div>

      {/* Scrolling text bar */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-3 bg-black/80 border-t border-white/5">
        <div className="animate-marquee whitespace-nowrap flex gap-12">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="font-[family-name:var(--font-heading)] text-lg md:text-xl text-white/10 tracking-[0.5em]"
            >
              A JOURNEY THROUGH THE UNDERGROUND &bull; TELL&apos;EM &bull; KARTELLEM &bull;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
