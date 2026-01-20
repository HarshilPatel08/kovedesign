"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"

const articles: Record<string, any> = {
  "1": {
    title: "The Craft of Detail in Contemporary Architecture",
    category: "Design Thinking",
    date: "November 15, 2024",
    image: "/placeholder.svg?key=ur1yk",
    author: "Anand Sharma",
    content: `Architecture is often discussed at the scale of the grand gesture—the massing, the form, the spatial organization. Yet it is in the details that architecture truly lives. From the joint between materials to the height of a handrail, from the thickness of a wall to the proportion of a window frame, these considered decisions transform a building from a shelter into an inhabited experience.

Contemporary architecture has, at times, stripped away ornament in pursuit of purity. Yet this minimalism need not mean carelessness. Instead, it demands greater rigor—each element must justify its existence through performance, proportion, and a deep understanding of its relationship to the whole.

At The Kove Design, we believe that detail is inseparable from intention. A timber joint is not merely a structural necessity; it is an expression of how materials behave, how light plays across surfaces, and how the building reveals its own construction. These moments of craft create spaces that resonate emotionally—not through decoration, but through honesty and care.

We spend considerable time on the relationships between materials, exploring how concrete can meet wood, how stone can be expressed, how surfaces can meet light. This is where contemporary architecture and traditional craft converge. This is where a space becomes memorable.

The craft of detail requires collaboration—architects, craftspeople, material specialists—all committed to realizing a vision with precision. It demands time, thoughtfulness, and often, a willingness to question conventional solutions. The result is architecture that endures, that reveals itself over time, and that speaks to the care invested in its creation.`,
  },
  "2": {
    title: "Sustainable Practices in Residential Design",
    category: "Sustainability",
    date: "October 28, 2024",
    image: "/placeholder.svg?key=60wbm",
    author: "Priya Desai",
    content: `Sustainability in architecture has evolved beyond compliance and buzzwords. It is now a fundamental aspect of how we design spaces that are both responsible and livable.

At The Kove Design, sustainability is not a layer added to a project—it is embedded in every decision. From the initial site analysis to the selection of materials, from the orientation of the building to the ventilation strategy, environmental consciousness shapes our approach.

Passive design is where we begin. By understanding climate, orientation, and prevailing winds, we design buildings that naturally maintain comfort without excessive mechanical intervention. Large operable windows, thermal mass, natural ventilation—these strategies have been proven over centuries. Contemporary architecture often ignores them in favor of sealed, air-conditioned boxes. We choose differently.

Material selection carries environmental weight. We prioritize materials with long lifespans, those that age gracefully, and those that can be locally sourced. A material that lasts 50 years carries less environmental burden than one that needs replacement every 10. Similarly, materials that can be easily maintained and updated allow spaces to evolve without demolition.

Water management, waste reduction during construction, and the potential for future adaptation are all considered. Sustainability is not about creating a perfect environmental score; it is about designing spaces that respect resources, that serve their occupants well, and that have the potential to remain valuable for generations.

The most sustainable building is one that people love and maintain. A space that responds to its context, that functions beautifully, and that improves daily life—that is sustainable architecture.`,
  },
  "3": {
    title: "Responsive Design: Architecture That Listens",
    category: "Process",
    date: "October 10, 2024",
    image: "/placeholder.svg?key=h57gq",
    author: "Rajesh Patel",
    content: `Great architecture does not impose itself upon a landscape—it listens. It responds to the specific conditions of place: the topography, the climate, the culture, the existing built environment, and the aspirations of those who will inhabit it.

Responsive design begins with understanding. We spend time on sites, observing light patterns throughout the day, feeling prevailing breezes, understanding how water moves across the land, and listening to local communities about what the place means to them.

A coastal site demands different responses than a forest setting or an urban context. The orientation changes. The materials change. The relationship to views, to privacy, to community shifts. A building designed for tropical climate requires different strategies than one in temperate zones. Responsive architecture acknowledges these specificities rather than imposing a universal solution.

Context also includes cultural heritage. In India, our projects engage with local building traditions, with materials and techniques that have proven over time, with spatial arrangements that reflect ways of living. This is not pastiche—it is genuine engagement with place and its wisdom.

Responsiveness extends to the human scale. How does a building meet the street? How are transitions between spaces experienced? What does it feel like to move through the building across seasons? These questions shape form and detail.

When architecture truly responds to its context, something remarkable happens. The building feels inevitable—as if it could exist nowhere else. It becomes part of the landscape rather than an imposition. This is the architecture we aspire to create.`,
  },
}

export default function JournalArticlePage({ params }: { params: { id: string } }) {
  const article = articles[params.id] || articles["1"]

  return (
    <div className="pt-24 pb-24 bg-background">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 mb-12">
        <Link href="/journal" className="flex items-center gap-2 text-muted hover:text-accent transition-colors">
          <ArrowLeft size={20} />
          <span className="text-sm tracking-wide">Back to Journal</span>
        </Link>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-96 md:h-[500px] w-full overflow-hidden mb-16"
      >
        <img src={article.image || "/placeholder.svg"} alt={article.title} className="w-full h-full object-cover" />
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 pb-12 border-b border-border"
        >
          <p className="text-xs text-accent tracking-widest uppercase mb-4">{article.category}</p>
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6">{article.title}</h1>
          <div className="flex flex-col md:flex-row md:items-center gap-4 text-muted text-sm">
            <span>By {article.author}</span>
            <span className="hidden md:inline">•</span>
            <time>{article.date}</time>
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none prose-p:text-lg prose-p:text-muted prose-p:leading-relaxed prose-p:font-light"
        >
          <div className="space-y-8 text-lg leading-relaxed text-muted font-light">
            {article.content.split("\n\n").map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </motion.article>

        {/* More Articles CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-border"
        >
          <Link href="/journal" className="inline-block text-accent hover:text-accent-dark transition-colors">
            ← Back to all articles
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
