import { MapPin, Phone } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-32 md:py-40 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in-up">
            <div className="w-16 h-1 bg-accent mx-auto mb-6 rounded-full" />
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground premium-heading">
              Crafting Excellence in Every Detail
            </h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-16 animate-fade-in-up animation-delay-200">
            Builders Creamy Trading PLC is a trusted name in Addis Ababa for premium waterproof wooden doors and
            elevator systems. We combine imported materials with local craftsmanship to deliver durability, elegance,
            and timeless quality.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-16">
            <div className="flex items-start gap-4 p-8 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow animate-fade-in-up animation-delay-300">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg mb-2 text-card-foreground">Visit Our Showroom</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Bole Atlas, Platinum Plaza
                  <br />
                  9th Floor, Addis Ababa
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-8 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow animate-fade-in-up animation-delay-400">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg mb-2 text-card-foreground">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed">
                  +251 911 234 567
                  <br />
                  +251 922 345 678
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
