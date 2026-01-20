import HeroSection from "@/components/home/hero-section"
import IntroSection from "@/components/home/intro-section"
import FeaturedProjects from "@/components/home/featured-projects"
import ServicesSection from "@/components/home/services-section"
import TestimonialSection from "@/components/home/testimonial-section"
import CtaSection from "@/components/home/cta-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <FeaturedProjects />
      <ServicesSection />
      <TestimonialSection />
      <CtaSection />
    </>
  )
}
