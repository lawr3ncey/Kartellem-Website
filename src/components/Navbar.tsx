"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/#drops", label: "DROPS" },
    { href: "/music", label: "MUSIC" },
    { href: "/story", label: "STORY" },
    { href: "/#roster", label: "ROSTER" },
    { href: "/#about", label: "ABOUT" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/tellem-logo.png"
              alt="KARTELLEM"
              width={140}
              height={56}
              className="h-10 md:h-12 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs tracking-[0.2em] text-gray-mid hover:text-white transition-colors duration-300 font-[family-name:var(--font-mono)]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#drops"
              className="ml-4 px-5 py-2 border border-white text-white text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 font-[family-name:var(--font-mono)]"
            >
              SHOP DROP
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-white block"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-[2px] bg-white block"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-white block"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-black border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm tracking-[0.3em] text-gray-mid hover:text-white transition-colors font-[family-name:var(--font-heading)] text-2xl"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#drops"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-5 py-3 border border-white text-white text-center text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300"
              >
                SHOP DROP
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
