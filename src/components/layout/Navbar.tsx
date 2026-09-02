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
      setIsScrolled(window.scrollY > 10);
    };
    
    // Check initial scroll position
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
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
          ? "bg-velora-bg/95 backdrop-blur-md py-3.5 shadow-sm border-velora-primary/10"
          : "bg-gradient-to-b from-velora-primary/70 via-velora-primary/30 to-transparent py-4 lg:py-6 border-transparent"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          
          {/* Logo Area */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent rounded-sm py-1"
            aria-label="Velora Yoga & Dance Studio"
          >
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-velora-accent/40 shrink-0 bg-velora-bg flex items-center justify-center">
              {/* Official brand lotus & dancer crest */}
              <Image
                src="/assets/velora-logo.jpg"
                alt="Velora Yoga and Dance Studio Crest"
                width={36}
                height={36}
                className="w-full h-full object-cover object-left scale-125"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-serif font-bold tracking-[0.2em] text-xl lg:text-2xl transition-colors duration-200 leading-none",
                isScrolled ? "text-velora-primary" : "text-white"
              )}>
                VELORA
              </span>
              <span className={cn(
                "text-[8px] lg:text-[9px] tracking-[0.25em] uppercase font-semibold mt-1 transition-colors duration-200",
                isScrolled ? "text-velora-secondary" : "text-velora-accent"
              )}>
                Yoga &amp; Dance Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-200 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent rounded-sm relative group",
                      isScrolled 
                        ? "text-velora-foreground hover:text-velora-primary" 
                        : "text-white/90 hover:text-velora-accent"
                    )}
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-velora-accent transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button 
              asChild
              variant={isScrolled ? "primary" : "outline"} 
              size="sm"
              className={cn(
                "transition-all duration-300 tracking-wider text-xs",
                !isScrolled && "border-velora-accent text-velora-accent hover:bg-velora-accent hover:text-velora-primary"
              )}
            >
              <a href="#trial">
                BOOK A TRIAL
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent transition-colors",
              isScrolled ? "text-velora-primary" : "text-white"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X size={26} className={isScrolled ? "text-velora-primary" : "text-white"} />
            ) : (
              <Menu size={26} />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      <div 
        id="mobile-menu"
        className={cn(
          "fixed inset-0 top-[62px] bg-velora-bg/98 backdrop-blur-md z-40 lg:hidden transition-all duration-300 ease-out origin-top motion-reduce:transition-none flex flex-col",
          isMobileMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        )}
      >
        <nav aria-label="Mobile Navigation" className="flex-1 overflow-y-auto py-10 px-6 flex flex-col items-center justify-between">
          <ul className="flex flex-col items-center space-y-6 w-full pt-4">
            {NAV_LINKS.map((link) => (
              <li key={link.name} className="w-full text-center">
                <Link
                  href={link.href}
                  className="block text-lg uppercase tracking-[0.25em] font-serif text-velora-primary hover:text-velora-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent py-2 border-b border-velora-accent/15 max-w-xs mx-auto"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="w-full max-w-xs pt-8 pb-6 border-t border-velora-primary/10 flex flex-col gap-3">
            <Button size="md" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
              <a href="#trial" className="w-full">
                BOOK A TRIAL
              </a>
            </Button>
            <a
              href="https://wa.me/916366007494"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-xs uppercase tracking-widest text-velora-secondary font-semibold py-2 hover:text-velora-primary transition-colors"
            >
              WhatsApp +91 63660 07494
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
