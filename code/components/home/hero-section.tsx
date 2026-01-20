"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-background pt-20">
      {/* Full-width hero image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/minimal-concrete-and-glass-villa-on-coastline-at-g.jpg"
          alt="The Kove Design - Architectural project"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          <h1 className="text-6xl md:text-8xl font-light tracking-tight text-white mb-6">The Kove Design</h1>
          <p className="text-xl md:text-2xl text-white/90 font-light mb-12 leading-relaxed">
            Architectural spaces inspired by nature and precision.
          </p>

          <Link
            href="/portfolio"
            className="inline-block px-8 py-4 bg-accent text-foreground text-sm font-light tracking-widest hover:bg-accent-dark transition-all duration-300 transform hover:scale-105"
          >
            Explore Our Work
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </div>
  )
}
