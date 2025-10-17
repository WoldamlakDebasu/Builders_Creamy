import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductGallery } from "@/components/product-gallery"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProductGallery />
      <WhyChooseUs />
      <CallToAction />
      <Footer />
    </main>
  )
}
