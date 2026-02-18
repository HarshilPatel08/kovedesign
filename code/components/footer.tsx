"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Studio Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-light tracking-widest mb-6 text-muted">The Kove Design</h3>
            <p className="text-sm leading-relaxed text-muted mb-6">
              Architectural spaces inspired by nature and precision.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#C5B299" }}
                className="text-muted transition-colors"
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#C5B299" }}
                className="text-muted transition-colors"
              >
                <Linkedin size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-light tracking-widest mb-6 text-muted">Navigation</h3>
            <ul className="space-y-3 text-sm">
              {["/portfolio", "/studio", "/process", "/journal"].map((href, i) => (
                <li key={i}>
                  <Link
                    href={href}
                    className="text-foreground hover:text-accent transition-colors duration-300 relative inline-block group"
                  >
                    {href.slice(1).charAt(0).toUpperCase() + href.slice(2)}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-light tracking-widest mb-6 text-muted">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2 hover:text-accent transition-colors duration-300">
                <Mail size={16} className="text-accent flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:contact.kovedesigns@gmail.com"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  contact.kovedesigns@gmail.com
                </a>
              </li>
              <li className="flex gap-2 hover:text-accent transition-colors duration-300">
                <Phone size={16} className="text-accent flex-shrink-0 mt-0.5" />
                <a href="tel:+919274572711" className="text-foreground hover:text-accent transition-colors">
                  +91 92745 72711
                </a>
              </li>
              <li className="flex gap-2">
                <MapPin size={16} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Ahmedabad, India</span>
              </li>
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-light tracking-widest mb-6 text-muted">Get In Touch</h3>
            <p className="text-sm text-muted mb-4">Let's explore what your site could become.</p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-accent text-white text-sm tracking-wide hover:bg-accent-dark transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2025 The Kove Design. All rights reserved.</p>
          <ul className="flex gap-6">
            {["Privacy", "Terms", "Sitemap"].map((item, i) => (
              <li key={i}>
                <Link href="#" className="hover:text-accent transition-colors duration-300 relative group">
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </footer>
  )
}
