"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const articles = [
  {
    id: 1,
    title: "The Craft of Detail in Contemporary Architecture",
    excerpt:
      "Exploring how attention to detail elevates residential spaces from functional to exceptional. We delve into material selection, joinery, and the craft that defines timeless design.",
    date: "November 15, 2024",
    category: "Design Thinking",
    image: "/placeholder.svg?key=ur1yk",
  },
  {
    id: 2,
    title: "Sustainable Practices in Residential Design",
    excerpt:
      "Sustainability is not an afterthought—it's integral to our design process. From passive ventilation to material longevity, we discuss how environmental consciousness creates better spaces.",
    date: "October 28, 2024",
    category: "Sustainability",
    image: "/placeholder.svg?key=60wbm",
  },
  {
    id: 3,
    title: "Responsive Design: Architecture That Listens",
    excerpt:
      "How context—climate, culture, topography—shapes architectural decisions. A case study on designing spaces that respond to their environment rather than imposing upon it.",
    date: "October 10, 2024",
    category: "Process",
    image: "/placeholder.svg?key=h57gq",
  },
  {
    id: 4,
    title: "The Evolution of Material Expression",
    excerpt:
      "From concrete to timber to stone—materials carry meaning. We explore how contemporary architecture re-engages with traditional materials through modern expression.",
    date: "September 22, 2024",
    category: "Materials",
    image: "/placeholder.svg?key=2hlk5",
  },
  {
    id: 5,
    title: "Hospitality Design: Creating Memorable Experiences",
    excerpt:
      "Beyond comfort, hospitality architecture creates narrative. We discuss how spatial design, lighting, and material choices craft environments that guests remember.",
    date: "September 5, 2024",
    category: "Hospitality",
    image: "/placeholder.svg?key=7d9kp",
  },
  {
    id: 6,
    title: "Urban Interventions in Historic Contexts",
    excerpt:
      "Balancing preservation with innovation. How do we design contemporary spaces within heritage settings? Exploring adaptive reuse and sensitive urban interventions.",
    date: "August 18, 2024",
    category: "Heritage",
    image: "/placeholder.svg?key=n8hqr",
  },
]

export default function JournalPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-96 md:h-[500px] w-full overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <img src="/placeholder.svg?key=n8hqr" alt="Journal" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-light tracking-tight text-white mb-4">Journal</h1>
            <p className="text-lg text-white/90 font-light">Insights on architecture, design, and craft</p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Link href={`/journal/${article.id}`}>
                  <div className="relative overflow-hidden bg-muted aspect-video mb-6">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-accent tracking-widest uppercase mb-3">{article.category}</p>
                    <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-3 group-hover:text-accent transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-muted leading-relaxed mb-4 font-light line-clamp-2">{article.excerpt}</p>
                    <time className="text-sm text-muted">{article.date}</time>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
