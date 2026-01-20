"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const phases = [
  {
    number: 1,
    title: "Discovery & Vision",
    description:
      "We begin with understanding. Through site visits, conversations, and careful analysis, we develop a nuanced brief that captures your aspirations, lifestyle, and budget realities.",
    details: [
      "Comprehensive site analysis and context study",
      "Client vision workshop and lifestyle mapping",
      "Budget and timeline alignment",
      "Regulatory and compliance review",
    ],
  },
  {
    number: 2,
    title: "Concept & Schematic",
    description:
      "Ideas take form. We develop conceptual designs exploring spatial organization, material expression, and environmental response. Multiple iterations are presented and refined based on your feedback.",
    details: [
      "Conceptual design exploration",
      "3D modelling and visualization",
      "Space planning and flow analysis",
      "Material and texture research",
    ],
  },
  {
    number: 3,
    title: "Design Development & Documentation",
    description:
      "Precision matters. We detail every element—from structural systems to finishes, from lighting design to acoustic planning. Comprehensive documentation ensures seamless execution.",
    details: [
      "Detailed architectural drawings and specifications",
      "Engineering coordination and MEP integration",
      "Material specifications and finishes selection",
      "Construction methodology review",
    ],
  },
  {
    number: 4,
    title: "Tender & Construction",
    description:
      "We guide the building process. Through builder selection, site supervision, and quality control, we ensure the design intent is realized with craftsmanship and precision.",
    details: [
      "Tender document preparation and builder selection",
      "Regular site inspections and quality reviews",
      "Real-time decision-making and problem-solving",
      "Coordination with all consultants and trades",
    ],
  },
  {
    number: 5,
    title: "Handover & Beyond",
    description:
      "The journey continues. After completion, we conduct thorough handover, ensure all systems function optimally, and remain available for post-occupancy support and future adaptations.",
    details: [
      "Comprehensive project walkthrough",
      "Systems commissioning and testing",
      "Maintenance guidelines and documentation",
      "Post-occupancy support and consultation",
    ],
  },
]

export default function ProcessPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-96 md:h-[500px] w-full overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <img src="/placeholder.svg?key=7d9kp" alt="Our process" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-light tracking-tight text-white mb-4">Our Process</h1>
            <p className="text-lg text-white/90 font-light">From idea to inhabited space</p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl leading-relaxed text-muted font-light">
              From idea to inhabited space, our process is a curated sequence of design, collaboration and realisation.
              We guide you at every step, ensuring that the vision remains clear, the budget is respected, and the final
              result exceeds expectations. We don't believe in shortcuts—each phase is essential to creating
              architecture that endures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Phases */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-b border-border pb-12"
              >
                <div className="flex items-start gap-8">
                  <div className="text-6xl md:text-8xl font-light text-accent/30 flex-shrink-0 w-20 md:w-32">
                    {phase.number}
                  </div>
                  <div className="flex-1 mt-4">
                    <h3 className="text-3xl md:text-4xl font-light tracking-tight mb-4">{phase.title}</h3>
                    <p className="text-lg text-muted leading-relaxed mb-6 font-light">{phase.description}</p>

                    {/* Details List */}
                    <ul className="space-y-2">
                      {phase.details.map((detail, i) => (
                        <li key={i} className="flex gap-3 items-start">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-foreground font-light">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">Ready to explore?</h2>
            <p className="text-lg text-muted mb-12 leading-relaxed font-light">
              Let's discuss your project and how our process can turn your vision into reality.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-accent text-foreground text-sm font-light tracking-widest hover:bg-accent-dark transition-all duration-300"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
