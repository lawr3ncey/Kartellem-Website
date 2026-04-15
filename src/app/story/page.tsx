"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const timeline = [
  {
    year: "2018",
    title: "THE SEED",
    body: "It started in a cramped bedroom in Las Piñas. A group of friends with a cheap mic, a cracked laptop, and too much to say. No studio. No label. No plan. Just the need to speak.",
  },
  {
    year: "2020",
    title: "UNDERGROUND ROOTS",
    body: "Through the pandemic silence, the music got louder. Bedroom sessions turned into a tight-knit collective. Beats passed over group chats. Lyrics born from boredom, anger, and survival.",
  },
  {
    year: "2022",
    title: "TELL'EM",
    body: "The name KARTELLEM crystallized. A war cry and a manifesto — tell them who we are, where we're from, and what we stand for. Manila underground had a new voice.",
  },
  {
    year: "2023",
    title: "THE CYPHER",
    body: "First public cypher. Rooftop of a barangay building in Parañaque. Shot on a phone. Uploaded with no budget. It spread like wildfire through the local hip-hop community.",
  },
  {
    year: "2024",
    title: "THE COLLECTIVE FORMS",
    body: "KARTELLEM officially established as a full creative collective — music, fashion, and visual art under one roof. Six MCs. One producer. One movement.",
  },
  {
    year: "NOW",
    title: "THE STREETS TALK",
    body: "Drops sell out. Shows are packed. The brand is breathing. But the mission hasn't changed — raw, unfiltered expression from the south side of Manila, built for anyone who's ever been told to be quiet.",
  },
];

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <h1 className="font-[family-name:var(--font-heading)] text-[25vw] text-white/[0.02] tracking-tight whitespace-nowrap">
            KARTELLEM
          </h1>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.4em] text-gray-mid font-[family-name:var(--font-mono)] mb-4"
          >
            [ THE MOVEMENT ]
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-[family-name:var(--font-heading)] text-7xl md:text-[10rem] leading-none tracking-tight mb-8"
          >
            OUR
            <br />
            <span className="text-vandal-red">STORY</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm text-gray-mid leading-relaxed font-[family-name:var(--font-mono)] max-w-xl mx-auto"
          >
            From a bedroom in Las Piñas to the streets of Manila. This is how it happened.
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.05 }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 py-16 md:py-20 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content side */}
                <div
                  className={`w-full md:w-1/2 ${
                    i % 2 === 0 ? "md:pr-20 md:text-right" : "md:pl-20 md:text-left"
                  }`}
                >
                  <p className="text-xs tracking-[0.3em] text-vandal-red font-[family-name:var(--font-mono)] mb-3">
                    {item.year}
                  </p>
                  <h3 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-mid leading-relaxed font-[family-name:var(--font-mono)]">
                    {item.body}
                  </p>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                  <div className="w-3 h-3 bg-vandal-red rounded-full ring-4 ring-black" />
                </div>

                {/* Empty side */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gray py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.4em] text-gray-mid font-[family-name:var(--font-mono)] mb-4">
            THE STORY CONTINUES
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-6xl md:text-8xl mb-10">
            YOU IN OR OUT?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/music"
              className="px-10 py-4 bg-white text-black text-xs tracking-[0.3em] font-[family-name:var(--font-mono)] font-bold hover:bg-vandal-red hover:text-white transition-all duration-300"
            >
              HEAR THE MUSIC
            </Link>
            <Link
              href="/#drops"
              className="px-10 py-4 border border-white text-white text-xs tracking-[0.3em] font-[family-name:var(--font-mono)] hover:bg-white hover:text-black transition-all duration-300"
            >
              SHOP THE DROP
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
