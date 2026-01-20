"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "Coastal Retreat",
    location: "Goa, India",
    image: "/luxury-seaside-villa-with-minimalist-design-and-oc.jpg",
  },
  {
    id: 2,
    title: "Urban Loft",
    location: "Ahmedabad, India",
    image: "/modern-urban-loft-interior-with-exposed-concrete-a.jpg",
  },
  {
    id: 3,
    title: "Forest Pavilion",
    location: "Uttarakhand, India",
    image: "/modern-timber-clad-forest-retreat-with-large-slidi.jpg",
  },
]

export default function FeaturedProjects() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">Featured Work</h2>
          <p className="text-muted text-lg max-w-2xl">
            A selection of our recent projects showcasing our approach to architectural design and spatial experience.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <Link href={`/portfolio/${project.id}`}>
                <div className="relative overflow-hidden bg-muted aspect-square mb-6">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                  <h3 className="text-xl font-light tracking-tight mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm">{project.location}</p>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/portfolio"
            className="inline-block px-8 py-4 border border-foreground text-foreground text-sm font-light tracking-widest hover:bg-foreground hover:text-background transition-all duration-300"
          >
            View Full Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
