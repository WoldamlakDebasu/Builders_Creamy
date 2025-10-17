"use client"

import { Button } from "@/components/ui/button"
import { BiPhoneCall, BiLogoWhatsapp, BiLogoTelegram } from "react-icons/bi"

export function DesktopContactFAB() {
  return (
    // Visible only on medium screens and up; hidden on small screens
    <div className="fixed bottom-8 right-8 z-50 hidden md:block">
      {/* Container with backdrop blur */}
      <div className="bg-black/20 backdrop-blur-md rounded-full p-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-black/30">
        <div className="flex items-center gap-2">
          {/* WhatsApp */}
          <Button 
            size="icon" 
            variant="ghost"
            className="bg-green-600 hover:bg-green-700 text-white rounded-full w-10 h-10 p-0 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-600/20 hover:-translate-y-1"
            asChild
          >
            <a 
              href="https://wa.me/251912600000" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex items-center justify-center"
            >
              <BiLogoWhatsapp className="w-5 h-5" />
            </a>
          </Button>
          
          {/* Telegram */}
          <Button 
            size="icon"
            variant="ghost" 
            className="bg-[#0088cc] hover:bg-[#0099dd] text-white rounded-full w-10 h-10 p-0 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#0088cc]/20 hover:-translate-y-1"
            asChild
          >
            <a 
              href="https://t.me/BuildersCreamy" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Message on Telegram"
              className="flex items-center justify-center"
            >
              <BiLogoTelegram className="w-5 h-5" />
            </a>
          </Button>

          {/* Phone */}
          <Button 
            size="icon"
            variant="ghost" 
            className="bg-accent hover:bg-accent/90 text-white rounded-full w-10 h-10 p-0 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 animate-subtle-pulse"
            asChild
          >
            <a 
              href="tel:251912600000"
              aria-label="Call Now"
              className="flex items-center justify-center"
            >
              <BiPhoneCall className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}