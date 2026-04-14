"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { products } from "@/data/products";

export default function FeaturedDrops() {
  const featured = products.slice(0, 4);

  return (
    <section id="drops" className="relative py-24 md:py-32 bg-black">
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
            [ 001 ]
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-6xl md:text-8xl tracking-tight">
            LATEST
            <br />
            <span className="text-white/20">DROPS</span>
          </h2>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link href={`/product/${product.id}`} className="block product-card group">
                <div className="relative aspect-[3/4] overflow-hidden bg-gray">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="product-overlay absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 transition-opacity duration-300">
                    <span className="text-xs tracking-[0.3em] font-[family-name:var(--font-mono)] border border-white px-6 py-3 hover:bg-white hover:text-black transition-all">
                      VIEW ITEM
                    </span>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] tracking-[0.2em] text-gray-mid font-[family-name:var(--font-mono)]">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="mt-4 space-y-1">
                  <h3 className="font-[family-name:var(--font-heading)] text-lg tracking-wider">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-mid font-[family-name:var(--font-mono)]">
                    ₱{product.price.toLocaleString()}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="#drops"
            className="inline-block px-8 py-4 border border-white/20 text-white text-xs tracking-[0.3em] font-[family-name:var(--font-mono)] hover:border-white hover:bg-white hover:text-black transition-all duration-300"
          >
            VIEW ALL DROPS
          </a>
        </motion.div>
      </div>
    </section>
  );
}
