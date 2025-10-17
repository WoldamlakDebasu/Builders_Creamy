import { Button } from "@/components/ui/button"
import { Phone, Instagram } from "lucide-react"

export function CallToAction() {
  return (
    <section className="py-32 md:py-40 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%23ffffff" fillOpacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 animate-fade-in-up text-balance premium-heading">
          Let's Build Your Next Project Together
        </h2>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90 animate-fade-in-up animation-delay-200 leading-relaxed">
          Experience the perfect blend of craftsmanship and innovation. Contact us today to discuss your vision.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-300">
          <Button
            size="lg"
            variant="secondary"
            className="font-semibold text-lg px-10 py-7 gap-2 rounded-lg shadow-lg hover:shadow-xl transition-all"
            asChild
          >
            <a href="tel:+251911234567">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-semibold text-lg px-10 py-7 gap-2 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-lg transition-all"
            asChild
          >
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5" />
              Message on Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
