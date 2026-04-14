"use client";

import { motion } from "framer-motion";
import { members } from "@/data/products";

export default function RosterSection() {
  return (
    <section id="roster" className="relative py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.3em] text-gray-mid font-[family-name:var(--font-mono)] mb-2">
            [ 003 ]
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-6xl md:text-8xl tracking-tight">
            UNLOCKED
            <br />
            <span className="text-white/20">ROSTER</span>
          </h2>
        </motion.div>

        {/* Members Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden bg-gray">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover duotone group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-80" />
                <div className="absolute inset-0 bg-vandal-red/0 group-hover:bg-vandal-red/20 transition-colors duration-300" />

                {/* Name Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl tracking-wider">
                    {member.name}
                  </h3>
                  <p className="text-[10px] tracking-[0.2em] text-gray-mid font-[family-name:var(--font-mono)]">
                    {member.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
