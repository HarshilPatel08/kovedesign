"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const allProjects = [
  {
    id: 1,
    title: "Coastal Retreat",
    location: "Goa, India",
    category: "residential",
    image: "/placeholder.svg?key=ur1yk",
    tagline: "Seaside Villa",
  },
  {
    id: 2,
    title: "Urban Loft",
    location: "Ahmedabad, India",
    category: "interiors",
    image: "/placeholder.svg?key=60wbm",
    tagline: "Contemporary Living",
  },
  {
    id: 3,
    title: "Forest Pavilion",
    location: "Uttarakhand, India",
    category: "residential",
    image: "/placeholder.svg?key=h57gq",
    tagline: "Nature Retreat",
  },
  {
    id: 4,
    title: "Heritage Hotel",
    location: "Jaipur, India",
    category: "hospitality",
    image: "/placeholder.svg?key=7d9kp",
    tagline: "Luxury Hospitality",
  },
  {
    id: 5,
    title: "Adaptive Warehouse",
    location: "Mumbai, India",
    category: "adaptive",
    image: "/placeholder.svg?key=2hlk5",
    tagline: "Industrial Conversion",
  },
  {
    id: 6,
    title: "Boutique Resort",
    location: "Himachal, India",
    category: "hospitality",
    image: "/placeholder.svg?key=n8hqr",
    tagline: "Mountain Escape",
  },
]

interface PortfolioGridProps {
  selectedCategory: string
}

export default function PortfolioGrid({ selectedCategory }: PortfolioGridProps) {
  const filteredProjects =
    selectedCategory === "all" ? allProjects : allProjects.filter((p) => p.category === selectedCategory)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProjects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group cursor-pointer"
        >
          <Link href={`/portfolio/${project.id}`}>
            <div className="relative overflow-hidden bg-muted aspect-square mb-6">
              <motion.img
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6 }}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.4 }}>
              <p className="text-xs text-accent tracking-widest mb-2 uppercase">{project.tagline}</p>
              <h3 className="text-xl font-light tracking-tight mb-1 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-muted text-sm">{project.location}</p>
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
