import { Shield, Truck, Award } from "lucide-react"

export function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: "Durability Guaranteed",
      description: "100% waterproof doors tested for longevity in all weather conditions.",
    },
    {
      icon: Truck,
      title: "Quick Delivery",
      description: "We deliver within 15 days of order confirmation.",
    },
    {
      icon: Award,
      title: "Local Expertise",
      description: "Proudly serving Addis Ababa's leading developers and architects.",
    },
  ]

  return (
    <section className="py-32 md:py-40 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="w-16 h-1 bg-accent mx-auto mb-6 rounded-full" />
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground premium-heading">
            Why Choose Us
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-accent/10 mb-6 border border-accent/20">
                <feature.icon className="w-9 h-9 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="max-w-3xl mx-auto p-8 bg-card rounded-xl border border-border shadow-sm">
            <p className="text-lg md:text-xl text-muted-foreground italic leading-relaxed">
              "Trusted by contractors, architects, and real-estate developers across Ethiopia."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
