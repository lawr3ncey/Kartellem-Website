"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

export default function EventSection() {
  const targetDate = new Date("2026-06-15T20:00:00");
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center duotone"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1920&h=1080&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* City */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-[family-name:var(--font-heading)] text-[15vw] md:text-[12vw] lg:text-[10vw] leading-none tracking-tight"
        >
          MANILA
        </motion.h2>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex justify-center gap-4 md:gap-8"
        >
          {[
            { value: days, label: "DAYS" },
            { value: hours, label: "HOURS" },
            { value: minutes, label: "MINUTES" },
            { value: seconds, label: "SECONDS" },
          ].map((item) => (
            <div key={item.label} className="countdown-box px-4 py-4 md:px-8 md:py-6 min-w-[70px] md:min-w-[100px]">
              <p className="font-[family-name:var(--font-heading)] text-3xl md:text-6xl">
                {String(item.value).padStart(2, "0")}
              </p>
              <p className="text-[8px] md:text-[10px] tracking-[0.2em] text-gray-mid font-[family-name:var(--font-mono)] mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Event Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 space-y-3"
        >
          <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-4xl tracking-wider">
            ARANETA COLISEUM
          </h3>
          <p className="text-xs tracking-[0.2em] text-gray-mid font-[family-name:var(--font-mono)]">
            MONDAY 15 JUNE 2026
          </p>
          <p className="text-xs tracking-[0.2em] text-gray-mid font-[family-name:var(--font-mono)]">
            CAPACITY: 16,500
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10"
        >
          <button className="px-8 py-4 border border-white text-white text-xs tracking-[0.3em] font-[family-name:var(--font-mono)] hover:bg-white hover:text-black transition-all duration-300">
            GET TICKETS
          </button>
        </motion.div>
      </div>
    </section>
  );
}
