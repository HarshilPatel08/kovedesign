"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const teamMembers = [
  {
    name: "Anand Sharma",
    role: "Founder & Principal Architect",
    bio: "With over 15 years of experience in contemporary architecture, Anand leads the studio's design philosophy, focusing on the intersection of materiality, context, and lived experience.",
    image: "/placeholder.svg?key=2hlk5",
  },
  {
    name: "Priya Desai",
    role: "Senior Architect",
    bio: "Priya brings a deep understanding of sustainable design practices and heritage conservation. Her work emphasizes craft and the importance of detail in creating timeless spaces.",
    image: "/placeholder.svg?key=60wbm",
  },
  {
    name: "Rajesh Patel",
    role: "Design Architect",
    bio: "Specializing in hospitality and bespoke residential projects, Rajesh is instrumental in translating client visions into refined architectural narratives.",
    image: "/placeholder.svg?key=h57gq",
  },
  {
    name: "Sneha Verma",
    role: "Interior Architect",
    bio: "Sneha collaborates with the team to develop integrated design solutions, ensuring consistency from spatial planning through material selection and detailing.",
    image: "/placeholder.svg?key=ur1yk",
  },
]

const values = [
  {
    title: "People & Place",
    description:
      "We design environments that respond to their context and lifestyle. Every project is a conversation between human needs and the specificity of place.",
  },
  {
    title: "Material & Detail",
    description:
      "We believe detail is where architecture lives. Material honesty, craft, and precision are non-negotiable in every design decision.",
  },
  {
    title: "Sustainability & Longevity",
    description:
      "Designing for lifespan, not trends. We consider environmental impact, user comfort, and the ability of spaces to adapt and evolve.",
  },
]

export default function StudioPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-96 md:h-[500px] w-full overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <img src="/placeholder.svg?key=2hlk5" alt="The Kove Design studio" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-light tracking-tight text-white mb-4">Studio</h1>
            <p className="text-lg text-white/90 font-light">Architects, designers, and collaborators</p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8">About Us</h2>
            <p className="text-lg leading-relaxed text-muted mb-6 font-light">
              The Kove Design is a studio of architects, designers and collaborators focused on delivering intelligent,
              timeless architecture. Based in Ahmedabad, Gujarat and working globally, we bring craft, precision and
              insight to every project.
            </p>
            <p className="text-lg leading-relaxed text-muted font-light">
              We believe that architecture is the articulation of how you live, move and belong. Our work combines
              contemporary aesthetics with sustainable principles and an uncompromising attention to detail. We don't
              chase trends—we create spaces that endure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light tracking-tight mb-16"
          >
            Our Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-light tracking-tight mb-4">{value.title}</h3>
                <p className="text-muted leading-relaxed font-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light tracking-tight mb-16"
          >
            Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="w-full md:w-48 h-48 flex-shrink-0 overflow-hidden bg-muted">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-light tracking-tight mb-1">{member.name}</h3>
                  <p className="text-accent text-sm tracking-widest uppercase mb-4">{member.role}</p>
                  <p className="text-muted leading-relaxed font-light">{member.bio}</p>
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
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">Work with us</h2>
            <p className="text-lg text-muted mb-12 leading-relaxed font-light">
              We're always interested in meaningful collaborations and projects that align with our design philosophy.
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
