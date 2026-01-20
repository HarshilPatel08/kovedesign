"use client"

import { motion } from "framer-motion"

export default function IntroSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl text-muted mb-6 leading-relaxed font-light">
              At The Kove Design, we believe architecture is the dialogue between structure and environment. Our work
              combines contemporary aesthetics with sustainable principles and an uncompromising attention to detail.
            </p>
            <p className="text-base text-muted leading-relaxed font-light">
              We craft spaces where architecture and life converge — clean, thoughtful, irreducible. Based in Ahmedabad
              and working globally, we bring precision, craft, and insight to every project.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            <img src="/architectural-studio-workspace-with-models-and-lar.jpg" alt="The Kove Design studio" className="w-full h-auto object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
