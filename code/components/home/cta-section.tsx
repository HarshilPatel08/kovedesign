"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function CtaSection() {
  return (
    <section className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Let's explore what your site could become.
          </h2>
          <p className="text-lg text-muted mb-12 leading-relaxed font-light">
            Ready to discuss your vision? We'd love to hear about your project, your land, and your aspirations.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-accent text-foreground text-sm font-light tracking-widest hover:bg-accent-dark transition-all duration-300 rounded-sm shadow-sm hover:shadow-md"
              >
                Get In Touch
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                href="/portfolio"
                className="inline-block px-8 py-4 border border-foreground text-foreground text-sm font-light tracking-widest hover:bg-foreground hover:text-background transition-all duration-300 rounded-sm"
              >
                View Portfolio
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
