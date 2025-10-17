"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { 
  BiPhoneCall,
  BiLogoWhatsapp,
  BiLogoTelegram
} from "react-icons/bi"
import { MobileContactFAB } from "@/components/mobile-contact-fab"
import { DesktopContactFAB } from "@/components/desktop-contact-fab"

export function Navigation() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 via-black/80 to-transparent backdrop-blur-sm border-b border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <a href="#" className="flex items-center gap-4 group">
            <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-accent/20 transition-all duration-300 group-hover:ring-accent/40 group-hover:scale-105 shadow-lg shadow-accent/5">
              <img 
                src="/builders.jpg" 
                alt="Builders Creamy Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl text-white leading-tight tracking-wide">Builders Creamy</span>
              <span className="text-xs text-accent/90 uppercase tracking-[0.2em] luxury-text">Trading PLC</span>
            </div>
          </a>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 ml-16">
            <a href="#products" className="text-white/80 hover:text-white transition-colors text-sm uppercase tracking-wider luxury-text">Products</a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors text-sm uppercase tracking-wider luxury-text">About</a>
            <a href="#why-us" className="text-white/80 hover:text-white transition-colors text-sm uppercase tracking-wider luxury-text">Why Us</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors text-sm uppercase tracking-wider luxury-text">Contact</a>
          </div>

          {/* Contact Options */}
          <div className="flex items-center gap-3">
            {/* Desktop View - Primary Contact */}
            <div className="hidden md:flex flex-col items-end mr-4">
              <span className="text-white/90 font-serif text-sm luxury-text">Get a Free Quote</span>
              <div className="flex gap-2">
                <a href="tel:+251912600000" className="text-accent hover:text-accent/80 transition-colors text-sm tracking-wider">
                  +251 91 260 0000
                </a>
                <span className="text-white/40">|</span>
                <a href="tel:+251912333377" className="text-accent hover:text-accent/80 transition-colors text-sm tracking-wider">
                  +251 91 233 3377
                </a>
              </div>
            </div>

            {/* Desktop View - Contact Info Only */}
            <div className="hidden md:block">
              <Button 
                size="lg" 
                className="bg-accent/90 hover:bg-accent text-accent-foreground font-semibold gap-2 px-6 py-6 transition-all duration-300 hover:shadow-accent/20 hover:shadow-lg animate-subtle-pulse" 
                asChild
              >
                <a href="tel:+251912600000">
                  <BiPhoneCall className="w-5 h-5" />
                  <span className="font-serif tracking-wide">Call Now</span>
                </a>
              </Button>
            </div>

            {/* Mobile View - Contact Options Dropdown */}
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    size="icon"
                    variant="ghost"
                    className="bg-accent hover:bg-accent/90 text-white rounded-full w-12 h-12 p-0 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-accent/20 animate-subtle-pulse"
                  >
                    <BiPhoneCall className="w-6 h-6" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64 bg-black/95 backdrop-blur-lg border-accent/20">
                  {/* Navigation Links - Mobile */}
                  <DropdownMenuItem className="py-3 cursor-pointer focus:bg-accent/20">
                    <a href="#products" className="flex items-center gap-3 w-full">
                      <span className="text-white/90 text-sm uppercase tracking-wider luxury-text">Products</span>
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="py-3 cursor-pointer focus:bg-accent/20">
                    <a href="#about" className="flex items-center gap-3 w-full">
                      <span className="text-white/90 text-sm uppercase tracking-wider luxury-text">About</span>
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="py-3 cursor-pointer focus:bg-accent/20">
                    <a href="#why-us" className="flex items-center gap-3 w-full">
                      <span className="text-white/90 text-sm uppercase tracking-wider luxury-text">Why Us</span>
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="py-3 cursor-pointer focus:bg-accent/20">
                    <a href="#contact" className="flex items-center gap-3 w-full">
                      <span className="text-white/90 text-sm uppercase tracking-wider luxury-text">Contact</span>
                    </a>
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem className="py-3 cursor-pointer focus:bg-accent/20" asChild>
                    <a href="tel:251912600000" className="flex items-center gap-3">
                      <BiPhoneCall className="w-5 h-5 text-accent" />
                      <div className="flex flex-col">
                        <span className="text-white luxury-text">Call Sales Team</span>
                        <span className="text-sm text-white/60 tracking-wider">251 912 600 000</span>
                      </div>
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="py-3 cursor-pointer focus:bg-accent/20" asChild>
                    <a href="tel:251912333377" className="flex items-center gap-3">
                      <BiPhoneCall className="w-5 h-5 text-accent" />
                      <div className="flex flex-col">
                        <span className="text-white luxury-text">Call Support</span>
                        <span className="text-sm text-white/60 tracking-wider">251 912 333 377</span>
                      </div>
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="py-3 cursor-pointer focus:bg-accent/20" asChild>
                    <a href="https://wa.me/251912600000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                      <BiLogoWhatsapp className="w-5 h-5 text-green-500" />
                      <div className="flex flex-col">
                        <span className="text-white luxury-text">WhatsApp</span>
                        <span className="text-sm text-white/60 tracking-wider">Chat with Sales</span>
                      </div>
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="py-3 cursor-pointer focus:bg-accent/20" asChild>
                    <a href="https://t.me/BuildersCreamy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                      <BiLogoTelegram className="w-5 h-5 text-[#0088cc]" />
                      <div className="flex flex-col">
                        <span className="text-white luxury-text">Telegram</span>
                        <span className="text-sm text-white/60 tracking-wider">Join our Channel</span>
                      </div>
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animation for the subtle pulse */}
      <style jsx global>{`
        @keyframes subtle-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        .animate-subtle-pulse {
          animation: subtle-pulse 2s infinite;
        }
      `}</style>
    </nav>
    <MobileContactFAB />
    <DesktopContactFAB />
    </>
  )
}
