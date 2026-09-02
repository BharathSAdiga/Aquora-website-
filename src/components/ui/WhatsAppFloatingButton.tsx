"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppFloatingButton() {
  return (
    <a
      href="https://wa.me/916366007494"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Velora Yoga & Dance Studio"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 bg-[#130B1A]/95 text-velora-beige hover:text-white border border-velora-purple/50 rounded-full shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-velora-beige group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-velora-purple-light"
    >
      <div className="w-6 h-6 rounded-full bg-velora-purple/40 flex items-center justify-center text-velora-purple-light group-hover:bg-velora-purple group-hover:text-velora-beige transition-colors">
        <MessageCircle size={14} />
      </div>
      <span className="text-[11px] font-semibold tracking-widest uppercase hidden sm:inline text-velora-beige">
        Chat on WhatsApp
      </span>
    </a>
  );
}
