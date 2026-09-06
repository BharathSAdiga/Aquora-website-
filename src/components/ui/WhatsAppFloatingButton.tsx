"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppFloatingButton() {
  const defaultMessage = `Hello Aquora Yoga & Dance Studio,

I would like to visit the studio and get directions.

Class: 
Preferred day: 
Preferred time: 

Thank you.`;

  const whatsappUrl = `https://wa.me/919164267977?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Aquora Yoga & Dance Studio"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 glass-pill-dark text-aquora-beige hover:text-white rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.6)] border border-aquora-border transition-all duration-300 hover:scale-105 hover:border-aquora-green/60 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aquora-green"
    >
      <div className="w-6 h-6 rounded-full bg-aquora-green/20 border border-aquora-green/40 flex items-center justify-center text-aquora-green-light group-hover:bg-aquora-green group-hover:text-white transition-colors">
        <MessageCircle size={15} />
      </div>
      <span className="text-[11px] font-medium tracking-widest uppercase hidden sm:inline text-aquora-beige group-hover:text-white">
        Chat on WhatsApp
      </span>
    </a>
  );
}
