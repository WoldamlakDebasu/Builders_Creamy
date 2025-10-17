"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-primary-foreground font-serif font-bold text-xl">BC</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg text-foreground leading-tight">Builders Creamy</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider luxury-text">Trading PLC</span>
            </div>
          </a>

          {/* Contact Button */}
          <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2" asChild>
            <a href="tel:+251911234567">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Contact Us</span>
            </a>
          </Button>
        </div>
      </div>
    </nav>
  )
}
