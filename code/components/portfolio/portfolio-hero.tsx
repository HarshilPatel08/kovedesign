"use client"

import { motion } from "framer-motion"

export default function PortfolioHero() {
  return (
    <section className="relative h-96 md:h-[500px] w-full overflow-hidden bg-background pt-12">
      <div className="absolute inset-0 z-0">
        <img src="/placeholder.svg?key=7d9kp" alt="Portfolio hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-white mb-4">Our Work</h1>
          <p className="text-lg md:text-xl text-white/90 font-light">
            A curated collection of residential, hospitality, and bespoke projects
          </p>
        </motion.div>
      </div>
    </section>
  )
}
