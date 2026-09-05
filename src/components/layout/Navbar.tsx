"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
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
      setIsScrolled(window.scrollY > 15);
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
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-out border-b motion-reduce:transition-none",
        isScrolled
          ? "bg-aquora-bg/95 backdrop-blur-md py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)] border-aquora-gold/25"
          : "bg-gradient-to-b from-aquora-bg/95 via-aquora-bg/70 to-transparent py-4 lg:py-6 border-transparent"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          
          {/* Logo Area */}
          <Link 
            href="/" 
            className="flex items-center gap-3.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aquora-gold rounded-sm py-1"
            aria-label="AQUORA Yoga & Dance Studio"
          >
            <div className="relative h-10 w-44 sm:h-11 sm:w-48 shrink-0 flex items-center">
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

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs uppercase tracking-[0.22em] font-medium transition-colors duration-200 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aquora-gold rounded-sm relative group text-aquora-foreground/80 hover:text-aquora-gold-light"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-aquora-gold transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button 
              asChild
              variant="primary" 
              size="sm"
              className="tracking-[0.18em] text-[11px] font-semibold"
            >
              <a href="#trial">
                BOOK A TRIAL CLASS
              </a>
            </Button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              className="p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aquora-gold transition-colors text-aquora-gold hover:text-aquora-gold-light cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X size={26} className="text-aquora-gold" />
              ) : (
                <Menu size={26} />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      <div 
        id="mobile-menu"
        className={cn(
          "fixed inset-0 top-[60px] bg-aquora-bg/98 backdrop-blur-2xl z-40 lg:hidden transition-all duration-300 ease-out origin-top motion-reduce:transition-none flex flex-col border-t border-aquora-gold/25",
          isMobileMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        )}
      >
        <nav aria-label="Mobile Navigation" className="flex-1 overflow-y-auto py-8 px-6 flex flex-col items-center justify-between">
          <ul className="flex flex-col items-center space-y-5 w-full pt-4">
            {NAV_LINKS.map((link) => (
              <li key={link.name} className="w-full text-center">
                <Link
                  href={link.href}
                  className="block text-lg uppercase tracking-[0.25em] font-serif text-aquora-foreground hover:text-aquora-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aquora-gold py-2.5 border-b border-aquora-gold/15 max-w-xs mx-auto"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="w-full max-w-xs pt-8 pb-6 border-t border-aquora-gold/20 flex flex-col gap-3.5">
            <Button size="md" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
              <a href="#trial" className="w-full">
                BOOK A TRIAL CLASS
              </a>
            </Button>
            <a
              href="https://wa.me/916366007494"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-xs uppercase tracking-widest text-aquora-gold font-medium py-2 hover:text-aquora-gold-light transition-colors"
            >
              WhatsApp: +91 63660 07494
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
