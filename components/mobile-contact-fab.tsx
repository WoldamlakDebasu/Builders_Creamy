"use client"

import { BiPhoneCall, BiLogoWhatsapp, BiLogoTelegram } from "react-icons/bi"

export function MobileContactFAB() {
  return (
    // Visible only on small screens; hidden on md+
    <div className="fixed bottom-6 right-4 flex flex-col items-end gap-3 z-50 md:hidden">
      {/* WhatsApp */}
      <a
        href="https://wa.me/251912600000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="bg-[#25D366] w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-200"
      >
        <BiLogoWhatsapp className="w-6 h-6" />
      </a>

      {/* Telegram */}
      <a
        href="https://t.me/BuildersCreamy"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message on Telegram"
        className="bg-[#0088cc] w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-200"
      >
        <BiLogoTelegram className="w-6 h-6" />
      </a>

      {/* Phone */}
      <a
        href="tel:+251912600000"
        aria-label="Call Now"
        className="bg-accent w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-200"
      >
        <BiPhoneCall className="w-6 h-6" />
      </a>
    </div>
  )
}