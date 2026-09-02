"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out border-b border-transparent motion-reduce:transition-none",
        isScrolled
          ? "bg-velora-bg/95 backdrop-blur-md py-3 shadow-sm border-velora-primary/10"
          : "bg-gradient-to-b from-velora-primary/80 to-transparent py-5 lg:py-8"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          
          {/* Logo Area */}
          <Link 
            href="/" 
            className="flex flex-col items-start group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent rounded-sm p-1"
            aria-label="Velora Home"
          >
            <span className={cn(
              "font-serif font-bold tracking-widest transition-colors duration-300",
              isScrolled ? "text-2xl text-velora-primary" : "text-3xl text-white"
            )}>
              VELORA
            </span>
            <span className={cn(
              "text-[9px] tracking-[0.2em] uppercase font-semibold mt-1 transition-colors duration-300",
              isScrolled ? "text-velora-secondary" : "text-velora-accent"
            )}>
              Yoga & Dance Studio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm uppercase tracking-widest font-medium transition-colors duration-300 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent rounded-sm",
                      isScrolled 
                        ? "text-velora-foreground hover:text-velora-primary" 
                        : "text-white/90 hover:text-velora-accent"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button 
              variant={isScrolled ? "primary" : "outline"} 
              size="sm"
              className={cn(
                "transition-colors duration-300",
                !isScrolled && "border-velora-accent text-velora-accent hover:bg-velora-accent hover:text-velora-primary"
              )}
            >
              Book a Trial
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
              <X size={28} className={isScrolled ? "text-velora-primary" : "text-white"} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      <div 
        id="mobile-menu"
        className={cn(
          "fixed inset-0 top-[60px] bg-velora-bg z-40 lg:hidden transition-all duration-300 ease-in-out origin-top motion-reduce:transition-none flex flex-col",
          isMobileMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        )}
      >
        <nav aria-label="Mobile Navigation" className="flex-1 overflow-y-auto py-8 px-6 flex flex-col items-center justify-center space-y-8">
          <ul className="flex flex-col items-center space-y-6 w-full">
            {NAV_LINKS.map((link) => (
              <li key={link.name} className="w-full text-center">
                <Link
                  href={link.href}
                  className="block text-xl uppercase tracking-widest font-serif text-velora-primary hover:text-velora-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent rounded-sm py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="w-full max-w-xs pt-8 border-t border-velora-primary/10 flex flex-col gap-4">
            <Button size="lg" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
              Book a Trial
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
