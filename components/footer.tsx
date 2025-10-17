export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center">
              <span className="text-foreground font-serif font-bold text-xl">BC</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="font-serif text-2xl font-bold">Builders Creamy</span>
              <span className="text-xs opacity-70 uppercase tracking-wider luxury-text">Trading PLC</span>
            </div>
          </div>

          <div className="text-sm opacity-80 max-w-2xl leading-relaxed">
            <p className="mb-2">Bole Atlas, Platinum Plaza, 9th Floor, Addis Ababa</p>
            <p>+251 911 234 567 | +251 922 345 678</p>
          </div>

          <div className="border-t border-background/20 w-full max-w-4xl pt-8 mt-8">
            <p className="text-xs opacity-60">
              Concept demo created by Woldamlak Debasu — for presentation purposes only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
