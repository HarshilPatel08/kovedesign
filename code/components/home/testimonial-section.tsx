"use client"

import { motion } from "framer-motion"

export default function TestimonialSection() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/20 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Testimonial Image */}
          <div className="mb-12 overflow-hidden aspect-video rounded-lg">
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6 }}
              src="/luxury-residential-interior-with-warm-natural-ligh.jpg"
              alt="Client project"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.blockquote className="text-2xl md:text-3xl font-light tracking-tight mb-6 text-foreground leading-relaxed">
              "The Kove team turned our dream site into a home we never want to leave. From the initial concept to the
              final details, their attention to craft and understanding of our lifestyle was evident."
            </motion.blockquote>
            <motion.footer
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-muted text-lg"
            >
              <p className="font-light">Rajesh & Priya Sharma</p>
              <p className="text-sm mt-1">Coastal Retreat, Goa</p>
            </motion.footer>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
