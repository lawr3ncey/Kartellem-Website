"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const streamingLinks = [
  {
    name: "SPOTIFY",
    href: "https://open.spotify.com/artist/4e4flHlMWdF3KOADVBTMXo",
    icon: "♫",
  },
  {
    name: "YOUTUBE",
    href: "https://www.youtube.com/channel/UCZoTMDETUDjDSNIpZeRdv_A",
    icon: "▶",
  },
  {
    name: "APPLE MUSIC",
    href: "https://music.apple.com/search?term=kartellem",
    icon: "♪",
  },
  {
    name: "TIKTOK",
    href: "https://www.tiktok.com/@kartellem.official",
    icon: "◈",
  },
];

export default function MusicPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* NEW MUSIC Banner */}
      <section className="bg-vandal-red py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="font-[family-name:var(--font-heading)] text-2xl tracking-widest text-black"
            >
              NEW MUSIC OUT NOW &bull; KARTELLEM &bull; STREAM NOW &bull;
            </span>
          ))}
        </div>
      </section>

      {/* Hero */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <h1 className="font-[family-name:var(--font-heading)] text-[22vw] text-white/[0.02] tracking-tight whitespace-nowrap">
            MUSIC
          </h1>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.4em] text-gray-mid font-[family-name:var(--font-mono)] mb-4"
          >
            [ THE SOUND ]
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-[family-name:var(--font-heading)] text-7xl md:text-[10rem] leading-none tracking-tight mb-8"
          >
            THE
            <br />
            <span className="text-vandal-red">MUSIC</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm text-gray-mid leading-relaxed font-[family-name:var(--font-mono)] max-w-xl mx-auto"
          >
            Raw. Unfiltered. From the rooftops of Manila.
            <br />
            Stream KARTELLEM on all platforms.
          </motion.p>
        </div>
      </section>

      {/* Spotify Embed */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.3em] text-gray-mid font-[family-name:var(--font-mono)] mb-6 text-center">
            — LISTEN ON SPOTIFY —
          </p>
          <div className="border border-white/10 overflow-hidden">
            <iframe
              src="https://open.spotify.com/embed/artist/4e4flHlMWdF3KOADVBTMXo?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="KARTELLEM on Spotify"
            />
          </div>
        </motion.div>
      </section>

      {/* Streaming Links */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.3em] text-gray-mid font-[family-name:var(--font-mono)] mb-8 text-center">
            — FIND US EVERYWHERE —
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {streamingLinks.map((platform, i) => (
              <motion.a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col items-center justify-center gap-3 border border-white/10 py-8 px-4 hover:border-vandal-red hover:bg-vandal-red/5 transition-all duration-300"
              >
                <span className="text-3xl text-gray-mid group-hover:text-vandal-red transition-colors">
                  {platform.icon}
                </span>
                <span className="text-[10px] tracking-[0.25em] font-[family-name:var(--font-mono)] text-gray-mid group-hover:text-white transition-colors">
                  {platform.name}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* YouTube Latest */}
      <section className="bg-gray py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-xs tracking-[0.3em] text-gray-mid font-[family-name:var(--font-mono)] mb-4">
              [ LATEST VISUAL ]
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl">
              WATCH THE
              <br />
              <span className="text-vandal-red">CYPHER</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video border border-white/10 overflow-hidden"
          >
            <iframe
              src="https://www.youtube.com/embed/DW0B2epPX-w"
              title="KARTELLEM Latest Cypher"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </motion.div>
          <div className="mt-8 text-center">
            <a
              href="https://www.youtube.com/channel/UCZoTMDETUDjDSNIpZeRdv_A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border border-white text-xs tracking-[0.3em] font-[family-name:var(--font-mono)] hover:bg-white hover:text-black transition-all duration-300"
            >
              SEE ALL VIDEOS →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.4em] text-gray-mid font-[family-name:var(--font-mono)] mb-4">
            THE MOVEMENT
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-6xl md:text-8xl mb-10">
            MORE COMING.
            <br />
            <span className="text-vandal-red">STAY TUNED.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/story"
              className="px-10 py-4 bg-white text-black text-xs tracking-[0.3em] font-[family-name:var(--font-mono)] font-bold hover:bg-vandal-red hover:text-white transition-all duration-300"
            >
              READ THE STORY
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
