"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import { analytics } from "@/lib/analytics"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Track form submission in Google Analytics
    analytics.contactFormSubmit()

    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", projectType: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-96 md:h-[500px] w-full overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <img src="/placeholder.svg?key=n8hqr" alt="Contact" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-light tracking-tight text-white mb-4">Contact</h1>
            <p className="text-lg text-white/90 font-light">Let's start a conversation</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16 md:mb-24">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-light tracking-tight mb-8">Get In Touch</h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-sm font-light text-muted mb-1">Email</p>
                    <a
                      href="mailto:hello@thekovedesign.com"
                      className="text-lg font-light text-foreground hover:text-accent transition-colors"
                    >
                      hello@thekovedesign.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-sm font-light text-muted mb-1">Phone</p>
                    <a
                      href="tel:+919876543210"
                      className="text-lg font-light text-foreground hover:text-accent transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-sm font-light text-muted mb-1">Studio</p>
                    <p className="text-lg font-light text-foreground">Ahmedabad, India</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="md:col-span-2 space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-light tracking-wide text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border text-foreground font-light focus:border-accent focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-light tracking-wide text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border text-foreground font-light focus:border-accent focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-light tracking-wide text-foreground mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border text-foreground font-light focus:border-accent focus:outline-none transition-colors"
                >
                  <option value="">Select a project type</option>
                  <option value="residential">Residential</option>
                  <option value="hospitality">Hospitality</option>
                  <option value="interiors">Interiors</option>
                  <option value="adaptive">Adaptive Reuse</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-light tracking-wide text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-border text-foreground font-light focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project vision..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                className="w-full md:w-auto px-8 py-4 bg-accent text-foreground text-sm font-light tracking-widest hover:bg-accent-dark transition-all duration-300"
              >
                {submitted ? "Message Sent!" : "Send Message"}
              </motion.button>
            </motion.form>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-96 md:h-[500px] w-full overflow-hidden bg-muted rounded-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7545839996963!2d72.58193172346834!3d23.02553977931848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848ac7a00001%3A0xf70a94e4c49cedc!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              Ready to explore what your site could become?
            </h2>
            <p className="text-lg text-muted mb-8 leading-relaxed font-light">
              We look forward to hearing about your vision, your site, and what you want to create.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
