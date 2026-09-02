"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppFloatingButton() {
  return (
    <a
      href="https://wa.me/916366007494"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Velora Yoga & Dance Studio"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 bg-[#16111A]/95 text-velora-foreground hover:text-velora-accent border border-velora-accent/40 rounded-full shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-velora-accent group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent"
    >
      <div className="w-6 h-6 rounded-full bg-velora-accent/15 flex items-center justify-center text-velora-accent group-hover:bg-velora-accent group-hover:text-velora-bg transition-colors">
        <MessageCircle size={14} />
      </div>
      <span className="text-[11px] font-semibold tracking-widest uppercase hidden sm:inline">
        Chat on WhatsApp
      </span>
    </a>
  );
}
