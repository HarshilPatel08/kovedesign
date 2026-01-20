"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"

const projects: Record<string, any> = {
  "1": {
    title: "Coastal Retreat",
    location: "Goa, India",
    year: 2023,
    area: "450 sq.m",
    status: "Completed",
    description:
      "Nestled on a coastal dune, this villa engages the ocean view while embracing the monsoon-sun orientation. Timber slats and concrete combine to create a sheltered outdoor living experience with seamless indoor-outdoor transitions.",
    concept:
      "This project explores the relationship between built form and natural landscape. The design responds to the site's microclimate, prevailing winds, and the client's lifestyle, creating spaces that celebrate light, material, and craftsmanship.",
    images: [
      "/placeholder.svg?key=ur1yk",
      "/placeholder.svg?key=2hlk5",
      "/placeholder.svg?key=h57gq",
      "/placeholder.svg?key=60wbm",
    ],
    highlights: [
      "3 bedrooms, 2 bathrooms",
      "Open-plan living spaces",
      "Passive ventilation design",
      "Local stone cladding with timber screens",
      "Integrated landscape design",
      "Solar passive orientation",
    ],
  },
  "2": {
    title: "Urban Loft",
    location: "Ahmedabad, India",
    year: 2023,
    area: "280 sq.m",
    status: "Completed",
    description:
      "A contemporary residential conversion in the heart of the city, this loft transforms an industrial heritage building into a refined living space with gallery-quality light and minimalist materiality.",
    concept:
      "The intervention preserves the building's structural character while introducing contemporary comfort. Exposed concrete ceilings, carefully placed interventions, and fluid spatial organization define the design approach.",
    images: [
      "/placeholder.svg?key=60wbm",
      "/placeholder.svg?key=n8hqr",
      "/placeholder.svg?key=2hlk5",
      "/placeholder.svg?key=h57gq",
    ],
    highlights: [
      "2 bedrooms, 1 bathroom",
      "Double-height living space",
      "Mezzanine study area",
      "Polished concrete flooring",
      "Minimalist kitchen design",
      "Gallery walls for art display",
    ],
  },
  "3": {
    title: "Forest Pavilion",
    location: "Uttarakhand, India",
    year: 2022,
    area: "320 sq.m",
    status: "Completed",
    description:
      "A retreat nestled in the pine forests, this pavilion is designed as a series of interconnected spaces that blur the boundary between shelter and nature. The timber structure celebrates craftsmanship and materiality.",
    concept:
      "Working with the forest context, the design uses local materials and traditional timber joinery. Large sliding glass doors frame forest views while maintaining thermal efficiency and weather protection.",
    images: [
      "/placeholder.svg?key=h57gq",
      "/placeholder.svg?key=ur1yk",
      "/placeholder.svg?key=60wbm",
      "/placeholder.svg?key=7d9kp",
    ],
    highlights: [
      "Timber frame structure",
      "Large glazed areas for natural light",
      "Forest-facing decks",
      "Integrated rainwater harvesting",
      "Minimal site disturbance",
      "Seasonal shading design",
    ],
  },
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects[params.id] || projects["1"]
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="pt-24 pb-24 bg-background">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <Link href="/portfolio" className="flex items-center gap-2 text-muted hover:text-accent transition-colors">
          <ArrowLeft size={20} />
          <span className="text-sm tracking-wide">Back to Portfolio</span>
        </Link>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-96 md:h-[600px] w-full overflow-hidden mb-16"
      >
        <img src={project.images[0] || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Project Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4">{project.title}</h1>
            <p className="text-lg text-muted mb-6 font-light">{project.location}</p>
            <p className="text-lg leading-relaxed text-muted font-light">{project.description}</p>
          </motion.div>

          {/* Project Meta */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <p className="text-xs text-accent tracking-widest uppercase mb-2">Year</p>
              <p className="text-xl font-light">{project.year}</p>
            </div>
            <div>
              <p className="text-xs text-accent tracking-widest uppercase mb-2">Area</p>
              <p className="text-xl font-light">{project.area}</p>
            </div>
            <div>
              <p className="text-xs text-accent tracking-widest uppercase mb-2">Status</p>
              <p className="text-xl font-light">{project.status}</p>
            </div>
          </motion.div>
        </div>

        {/* Concept Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 pb-16 md:pb-24 border-b border-border"
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">Design Concept</h2>
          <p className="text-lg leading-relaxed text-muted font-light max-w-3xl">{project.concept}</p>
        </motion.div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">Gallery</h2>

          {/* Main Image */}
          <motion.div
            key={selectedImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden bg-muted aspect-video mb-6"
          >
            <img
              src={project.images[selectedImage] || "/placeholder.svg"}
              alt={`${project.title} - Image ${selectedImage + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-4">
            {project.images.map((image: string, index: number) => (
              <motion.button
                key={index}
                onClick={() => setSelectedImage(index)}
                whileHover={{ scale: 1.05 }}
                className={`aspect-square overflow-hidden border-2 transition-all ${
                  selectedImage === index ? "border-accent" : "border-border hover:border-foreground"
                }`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Key Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">Design Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.highlights.map((highlight: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start"
              >
                <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg font-light text-foreground">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center py-12 border-t border-border"
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">Ready to start your project?</h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-accent text-foreground text-sm font-light tracking-widest hover:bg-accent-dark transition-all duration-300"
          >
            Schedule Consultation
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
