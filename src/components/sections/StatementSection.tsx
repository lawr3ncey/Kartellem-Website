"use client";

import { motion } from "framer-motion";

export default function StatementSection() {
  return (
    <section className="relative py-24 md:py-40 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-[family-name:var(--font-heading)] text-[7vw] md:text-[5vw] leading-[1.1] tracking-tight">
            From the{" "}
            <span className="relative inline-block">
              <span className="text-vandal-red">south side</span>
            </span>{" "}
            of Manila,
            <br />
            With a vision{" "}
            <span className="relative inline-block">
              <span className="text-white/30">that defied</span>
            </span>{" "}
            all the
            <br />
            <span className="relative inline-block">
              <span className="text-safety-orange">lows.</span>
            </span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
