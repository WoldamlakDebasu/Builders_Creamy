export function ProductGallery() {
  const products = [
    {
      image: "/luxury-waterproof-wooden-door-with-modern-design.jpg",
      caption: "Waterproof Finish",
    },
    {
      image: "/elegant-wooden-door-installation-in-modern-buildin.jpg",
      caption: "Modern Design",
    },
    {
      image: "/premium-elevator-system-in-luxury-building.jpg",
      caption: "Precision Craft",
    },
    {
      image: "/custom-wooden-door-with-intricate-details.jpg",
      caption: "Custom Solutions",
    },
    {
      image: "/waterproof-door-in-contemporary-interior.jpg",
      caption: "Timeless Quality",
    },
    {
      image: "/luxury-elevator-interior-with-wooden-panels.jpg",
      caption: "Premium Materials",
    },
  ]

  return (
    <section id="products" className="py-32 md:py-40 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="w-16 h-1 bg-accent mx-auto mb-6 rounded-full" />
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground premium-heading">
            Our Signature Work
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] border border-border shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold text-lg luxury-text">{product.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
