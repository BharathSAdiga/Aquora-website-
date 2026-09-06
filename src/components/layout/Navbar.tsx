"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Classes", href: "#classes" },
  { name: "Schedule", href: "#schedule" },
  { name: "Studio", href: "#studio" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-4 sm:top-6 inset-x-0 z-50 px-4 sm:px-6 pointer-events-none">
      <div
        className={cn(
          "max-w-6xl mx-auto rounded-full transition-all duration-500 ease-out pointer-events-auto flex items-center justify-between px-5 sm:px-8 py-3",
          isScrolled
            ? "bg-aquora-surface/85 backdrop-blur-2xl border border-aquora-gold/30 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.15)]"
            : "bg-aquora-surface/70 backdrop-blur-xl border border-aquora-gold/20 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)]"
        )}
      >
        {/* Logo Left */}
        <Link 
          href="/" 
          className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aquora-gold rounded-full py-0.5"
          aria-label="AQUORA Yoga & Dance Studio"
        >
          <div className="relative h-8 w-36 sm:h-9 sm:w-44 shrink-0 flex items-center">
            <Image
              src="/assets/aquora-logo-clean.png"
              alt="AQUORA Yoga & Dance Studio Official Logo"
              width={765}
              height={177}
              className="w-full h-full object-contain object-left filter drop-shadow-md group-hover:brightness-110 transition-all duration-300"
              priority
            />
          </div>
        </Link>

        {/* Center Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-[11px] uppercase tracking-[0.24em] font-medium transition-colors duration-200 py-1 relative group text-aquora-foreground/80 hover:text-aquora-gold-light"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-aquora-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right CTA: APPS Button (Replaces BOOK A TRIAL CLASS with exact same component/style/position) */}
        <div className="hidden lg:flex items-center gap-3">
          <Button 
            asChild
            variant="primary" 
            size="sm"
            className="tracking-[0.2em] text-[10px] font-semibold h-9 px-5"
          >
            <Link href="/apps">
              APPS
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Hamburger */}
        <div className="lg:hidden flex items-center">
          <button
            className="p-1.5 rounded-full text-aquora-gold hover:text-aquora-gold-light transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aquora-gold"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Full-Screen Frosted Glass Mobile Navigation Overlay */}
      <div 
        id="mobile-menu"
        className={cn(
          "fixed inset-0 bg-aquora-bg/95 backdrop-blur-2xl z-40 lg:hidden transition-all duration-500 ease-out flex flex-col justify-between p-8 pt-28 pointer-events-auto",
          isMobileMenuOpen 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 -translate-y-6 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center space-y-7 flex-1">
          <span className="text-[10px] uppercase tracking-[0.35em] text-aquora-gold font-medium">
            Navigation
          </span>
          <ul className="flex flex-col items-center space-y-6 w-full max-w-xs">
            {NAV_LINKS.map((link) => (
              <li key={link.name} className="w-full text-center">
                <Link
                  href={link.href}
                  className="block font-serif text-2xl tracking-wider text-aquora-foreground hover:text-aquora-gold transition-colors py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="w-full max-w-xs mx-auto pb-8 pt-6 border-t border-aquora-gold/20 flex flex-col gap-3">
          <Button size="md" className="w-full tracking-[0.2em] text-xs font-semibold" asChild onClick={() => setIsMobileMenuOpen(false)}>
            <Link href="/apps" className="w-full text-center">
              APPS
            </Link>
          </Button>
          <a
            href="https://wa.me/916366007494"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-[11px] uppercase tracking-widest text-aquora-muted hover:text-aquora-gold transition-colors py-1"
          >
            WhatsApp: +91 63660 07494
          </a>
        </div>
      </div>
    </header>
  );
}
