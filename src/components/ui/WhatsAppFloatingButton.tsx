"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppFloatingButton() {
  const defaultMessage = `Hello Aquora Yoga & Dance Studio,

I would like to enquire about a trial class.

Class: 
Preferred day: 
Preferred time: 

Thank you.`;

  const whatsappUrl = `https://wa.me/916366007494?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Aquora Yoga & Dance Studio"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 glass-pill-dark text-aquora-foreground hover:text-white rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.7)] transition-all duration-300 hover:scale-105 hover:border-aquora-gold group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aquora-gold"
    >
      <div className="w-6 h-6 rounded-full bg-aquora-gold/20 flex items-center justify-center text-aquora-gold group-hover:bg-aquora-gold group-hover:text-aquora-black transition-colors">
        <MessageCircle size={15} />
      </div>
      <span className="text-[11px] font-medium tracking-widest uppercase hidden sm:inline text-aquora-foreground/90 group-hover:text-aquora-gold-light">
        Chat on WhatsApp
      </span>
    </a>
  );
}
