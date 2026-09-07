"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Navigation } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { cn } from "@/lib/utils";

const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("No. 3/1, 1st Floor, SkyPool Fitness Studio Building, 4th B Main Road, Dr. Vivekananda Layout, 7th Phase, J.P. Nagar, Bengaluru - 560078, Karnataka, India")}`;

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
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
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
    <header className="fixed top-5 sm:top-7 inset-x-0 z-50 px-4 sm:px-6 pointer-events-none transform-gpu">
      <div
        className={cn(
          "max-w-6xl mx-auto rounded-full transition-all duration-500 ease-out pointer-events-auto flex items-center justify-between px-6 sm:px-8 py-2.5 sm:py-3 transform-gpu",
          isScrolled
            ? "dark:bg-[#111111]/88 bg-white/85 backdrop-blur-2xl dark:border-aquora-beige/15 border-black/10 shadow-[0_20px_50px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.04)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_0_1px_rgba(232,213,181,0.06)]"
            : "dark:bg-[#141414]/75 bg-white/75 backdrop-blur-xl dark:border-aquora-beige/10 border-black/8 shadow-[0_15px_40px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.03)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.6),0_0_0_1px_rgba(232,213,181,0.04)]"
        )}
      >
        {/* Logo Left: Crest + Typography */}
        <Link 
          href="/" 
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aquora-gold rounded-full py-0.5"
          aria-label="AQUORA Yoga & Dance Studio"
        >
          <div className="relative h-8 w-8 shrink-0 flex items-center justify-center">
            <Image
              src="/assets/aquora-crest-transparent.png"
              alt="AQUORA Crest"
              width={80}
              height={80}
              className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-[0.22em] font-semibold text-aquora-beige leading-none group-hover:text-white transition-colors">
              AQUORA
            </span>
            <span className="text-[7.5px] uppercase tracking-[0.3em] text-aquora-muted font-light mt-0.5">
              YOGA &amp; DANCE STUDIO
            </span>
          </div>
        </Link>

        {/* Center Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-[11px] uppercase tracking-[0.24em] font-medium transition-colors duration-200 py-1 relative group text-aquora-foreground/80 hover:text-aquora-beige"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-aquora-green via-aquora-beige to-aquora-purple transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right CTA: Theme Toggle & GET DIRECTIONS Button */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Button 
            asChild
            variant="primary" 
            size="sm"
            className="tracking-[0.2em] text-[10px] font-semibold h-9 px-6"
          >
            <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
              <Navigation size={12} />
              GET DIRECTIONS
            </a>
          </Button>
        </div>

        {/* Mobile Menu Hamburger & Theme Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="p-1.5 rounded-full text-aquora-beige hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aquora-gold"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Full-Screen Frosted Dark Glass Mobile Navigation Overlay */}
      <div 
        id="mobile-menu"
        className={cn(
          "fixed inset-0 dark:bg-[#090909]/95 bg-[#FBF9F5]/98 backdrop-blur-3xl z-40 lg:hidden transition-all duration-500 ease-out flex flex-col justify-between p-8 pt-28 pointer-events-auto",
          isMobileMenuOpen 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 -translate-y-6 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center space-y-7 flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Image
              src="/assets/aquora-crest-transparent.png"
              alt="AQUORA Crest"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="font-serif text-2xl tracking-[0.22em] text-aquora-beige font-semibold">
              AQUORA
            </span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.35em] text-aquora-beige-muted font-medium">
            Studio Navigation
          </span>
          <ul className="flex flex-col items-center space-y-6 w-full max-w-xs">
            {NAV_LINKS.map((link) => (
              <li key={link.name} className="w-full text-center">
                <Link
                  href={link.href}
                  className="block font-serif text-2xl tracking-wider text-aquora-foreground hover:text-aquora-beige transition-colors py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="w-full max-w-xs mx-auto pb-8 pt-6 border-t border-aquora-border flex flex-col gap-3.5">
          <Button size="md" className="w-full tracking-[0.2em] text-xs font-semibold" asChild onClick={() => setIsMobileMenuOpen(false)}>
            <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="w-full text-center inline-flex items-center justify-center gap-2">
              <Navigation size={14} />
              GET DIRECTIONS
            </a>
          </Button>
          <a
            href="mailto:aquorayogadancestudio@gmail.com"
            className="text-center text-[11px] uppercase tracking-widest text-aquora-muted hover:text-aquora-beige transition-colors py-1 truncate"
          >
            aquorayogadancestudio@gmail.com
          </a>
        </div>
      </div>
    </header>
  );
}
