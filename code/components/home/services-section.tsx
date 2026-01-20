"use client"

import { motion } from "framer-motion"
import { Lightbulb, PencilRuler, Hammer } from "lucide-react"

const services = [
  {
    icon: Lightbulb,
    title: "Concept & Vision",
    description:
      "We begin with your story, your land, your lifestyle. Understanding context and aspirations shapes every design decision.",
  },
  {
    icon: PencilRuler,
    title: "Design & Detailing",
    description:
      "Thoughtfully curated architecture from structure to finish. Every detail is considered—materiality, proportion, and craftsmanship.",
  },
  {
    icon: Hammer,
    title: "Realisation & Beyond",
    description:
      "We deliver not just design, but built spaces ready to live. Our involvement extends through construction and beyond.",
  },
]

export default function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">Our Approach</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div key={index} variants={itemVariants} className="flex flex-col group">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="mb-6"
                >
                  <Icon className="w-12 h-12 text-accent group-hover:text-accent transition-colors duration-300" />
                </motion.div>
                <h3 className="text-2xl font-light tracking-tight mb-4 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted leading-relaxed font-light group-hover:text-foreground/80 transition-colors duration-300">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
