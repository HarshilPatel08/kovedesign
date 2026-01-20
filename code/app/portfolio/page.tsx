"use client"

import { useState } from "react"
import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import PortfolioHero from "@/components/portfolio/portfolio-hero"

const categories = [
  { label: "All", value: "all" },
  { label: "Residential", value: "residential" },
  { label: "Hospitality", value: "hospitality" },
  { label: "Interiors", value: "interiors" },
  { label: "Adaptive Reuse", value: "adaptive" },
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  return (
    <div className="pt-20">
      <PortfolioHero />

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 md:gap-4 mb-16 items-center">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-6 py-3 text-sm font-light tracking-widest transition-all duration-300 ${
                  selectedCategory === cat.value
                    ? "bg-accent text-foreground"
                    : "border border-border text-foreground hover:border-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <PortfolioGrid selectedCategory={selectedCategory} />
        </div>
      </section>
    </div>
  )
}
