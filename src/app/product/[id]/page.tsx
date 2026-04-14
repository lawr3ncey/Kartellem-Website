"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { products } from "@/data/products";

export default function ProductPage() {
  const params = useParams();
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-6xl mb-4">404</h1>
          <p className="text-gray-mid text-sm font-[family-name:var(--font-mono)] mb-8">PRODUCT NOT FOUND</p>
          <Link
            href="/"
            className="px-6 py-3 border border-white text-xs tracking-[0.2em] font-[family-name:var(--font-mono)] hover:bg-white hover:text-black transition-all"
          >
            BACK HOME
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen pt-20 md:pt-24 bg-black">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] text-gray-mid font-[family-name:var(--font-mono)]">
          <Link href="/" className="hover:text-white transition-colors">HOME</Link>
          <span>/</span>
          <Link href="/#drops" className="hover:text-white transition-colors">DROPS</Link>
          <span>/</span>
          <span className="text-white">{product.name}</span>
        </div>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[3/4] bg-gray overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="text-[10px] tracking-[0.2em] text-gray-mid font-[family-name:var(--font-mono)] bg-black/80 px-3 py-1">
                  {product.category}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <p className="text-xs tracking-[0.3em] text-gray-mid font-[family-name:var(--font-mono)] mb-4">
              {product.category}
            </p>

            <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl tracking-tight mb-6">
              {product.name}
            </h1>

            <p className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl mb-8">
              ₱{product.price.toLocaleString()}
            </p>

            <p className="text-sm text-gray-mid leading-relaxed font-[family-name:var(--font-mono)] mb-10 max-w-md">
              {product.description}
            </p>

            {/* Size Selection */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.2em] text-gray-mid font-[family-name:var(--font-mono)] mb-3">SIZE</p>
              <div className="flex gap-3">
                {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    className="w-12 h-12 border border-white/20 text-xs font-[family-name:var(--font-mono)] hover:border-white hover:bg-white hover:text-black transition-all duration-200"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-10 py-4 bg-white text-black text-xs tracking-[0.3em] font-[family-name:var(--font-mono)] font-bold hover:bg-vandal-red hover:text-white transition-all duration-300">
                ADD TO CART
              </button>
              <button className="px-10 py-4 border border-white/20 text-white text-xs tracking-[0.3em] font-[family-name:var(--font-mono)] hover:border-white transition-all duration-300">
                BUY NOW
              </button>
            </div>

            {/* Product Details */}
            <div className="mt-12 pt-8 border-t border-white/10 space-y-4">
              <div className="flex justify-between text-xs font-[family-name:var(--font-mono)]">
                <span className="text-gray-mid tracking-[0.2em]">MATERIAL</span>
                <span>100% COTTON</span>
              </div>
              <div className="flex justify-between text-xs font-[family-name:var(--font-mono)]">
                <span className="text-gray-mid tracking-[0.2em]">FIT</span>
                <span>OVERSIZED</span>
              </div>
              <div className="flex justify-between text-xs font-[family-name:var(--font-mono)]">
                <span className="text-gray-mid tracking-[0.2em]">WEIGHT</span>
                <span>220 GSM</span>
              </div>
              <div className="flex justify-between text-xs font-[family-name:var(--font-mono)]">
                <span className="text-gray-mid tracking-[0.2em]">ORIGIN</span>
                <span>MANILA, PH</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 pt-16 border-t border-white/5"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl tracking-tight mb-12">
            YOU MIGHT <span className="text-white/20">ALSO</span> WANT
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((item) => (
              <Link key={item.id} href={`/product/${item.id}`} className="block product-card group">
                <div className="relative aspect-[3/4] overflow-hidden bg-gray">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="product-overlay absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 transition-opacity duration-300">
                    <span className="text-xs tracking-[0.3em] font-[family-name:var(--font-mono)] border border-white px-6 py-3">
                      VIEW ITEM
                    </span>
                  </div>
                </div>
                <div className="mt-4 space-y-1">
                  <h3 className="font-[family-name:var(--font-heading)] text-lg tracking-wider">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-mid font-[family-name:var(--font-mono)]">
                    ₱{item.price.toLocaleString()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
