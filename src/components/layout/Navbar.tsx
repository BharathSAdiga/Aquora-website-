"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Navigation, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("No. 3/1, 1st Floor, SkyPool Fitness Studio Building, 4th B Main Road, Dr. Vivekananda Layout, 7th Phase, J.P. Nagar, Bengaluru - 560078, Karnataka, India")}`;

const WHATSAPP_URL = `https://wa.me/919164267977?text=${encodeURIComponent("Hello Aquora Yoga & Dance Studio,\n\nI would like to enquire about classes and schedule.\n\nThank you.")}`;

const NAV_LINKS = [
  { num: "01", name: "Home", href: "/" },
  { num: "02", name: "About", href: "#about" },
  { num: "03", name: "Classes", href: "#classes" },
  { num: "04", name: "Schedule", href: "#schedule" },
  { num: "05", name: "Studio", href: "#studio" },
  { num: "06", name: "Contact", href: "#contact" },
];

const menuVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.25,
      ease: "easeOut" as const,
      staggerChildren: 0.05,
      delayChildren: 0.05
    }
  },
  exit: { 
    opacity: 0, 
    y: -10,
    transition: {
      duration: 0.2,
      ease: "easeIn" as const,
      staggerChildren: 0.03,
      staggerDirection: -1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.2, ease: "easeOut" as const }
  },
  exit: { opacity: 0, x: -5, transition: { duration: 0.15 } }
};

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
    <header className="fixed top-3.5 sm:top-7 inset-x-0 z-50 px-3 sm:px-6 pointer-events-none transform-gpu">
      <div
        className={cn(
          "max-w-6xl mx-auto rounded-full transition-all duration-500 ease-out pointer-events-auto flex items-center justify-between px-4 sm:px-8 py-2 sm:py-3 transform-gpu relative z-50",
          isScrolled || isMobileMenuOpen
            ? "dark:bg-[#111111]/90 bg-white/90 backdrop-blur-2xl dark:border-aquora-beige/15 border-black/10 shadow-[0_20px_50px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.04)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_0_1px_rgba(232,213,181,0.06)]"
            : "dark:bg-[#141414]/75 bg-white/75 backdrop-blur-xl dark:border-aquora-beige/10 border-black/8 shadow-[0_15px_40px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.03)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.6),0_0_0_1px_rgba(232,213,181,0.04)]"
        )}
      >
        {/* Logo Left: Crest + Typography */}
        <Link 
          href="/" 
          className="flex items-center gap-2 sm:gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aquora-gold rounded-full py-0.5"
          aria-label="AQUORA Yoga & Dance Studio"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="relative h-7 w-7 sm:h-8 sm:w-8 shrink-0 flex items-center justify-center">
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
            <span className="font-serif text-base sm:text-lg tracking-[0.22em] font-semibold text-aquora-beige leading-none group-hover:text-aquora-foreground transition-colors dark:group-hover:text-white">
              AQUORA
            </span>
            <span className="text-[6.5px] sm:text-[7.5px] uppercase tracking-[0.28em] text-aquora-muted font-light mt-0.5">
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
        <div className="lg:hidden flex items-center gap-1.5 sm:gap-2">
          <ThemeToggle />
          <button
            className="p-2 rounded-full text-aquora-beige hover:text-aquora-foreground dark:hover:text-white dark:bg-white/5 bg-black/5 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aquora-gold touch-press relative z-50 flex items-center justify-center w-10 h-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMobileMenuOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="absolute"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Optimized Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            id="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 h-[100dvh] dark:bg-[#111111]/95 bg-white/95 backdrop-blur-md z-40 lg:hidden flex flex-col justify-between p-6 sm:p-8 pt-28 pb-10 pointer-events-auto overflow-y-auto"
          >
            {/* Top Header info in Drawer */}
            <motion.div variants={itemVariants} className="relative z-10 flex flex-col items-center text-center space-y-4 pt-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 text-[10px] uppercase tracking-[0.25em] text-aquora-beige font-semibold shadow-sm">
                <MapPin size={12} className="text-aquora-gold" />
                <span>JP Nagar 7th Phase • Bengaluru</span>
              </div>
            </motion.div>

            {/* Clean Typography Navigation Links */}
            <div className="relative z-10 my-auto py-8">
              <ul className="flex flex-col items-center space-y-4 sm:space-y-6 w-full max-w-sm mx-auto">
                {NAV_LINKS.map((link) => (
                  <motion.li key={link.name} variants={itemVariants} className="w-full">
                    <Link
                      href={link.href}
                      className="flex items-center justify-center py-2 px-4 transition-all group"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="font-serif text-3xl sm:text-4xl tracking-wide text-aquora-foreground group-hover:text-aquora-beige transition-colors">
                        {link.name}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            {/* Bottom Fast Action Buttons in Drawer */}
            <motion.div variants={itemVariants} className="relative z-10 w-full max-w-sm mx-auto pt-6 border-t dark:border-white/10 border-black/10 flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3">
                <Button size="sm" className="w-full tracking-[0.16em] text-[11px] font-semibold h-12 rounded-full shadow-md active:scale-95 transition-transform" asChild onClick={() => setIsMobileMenuOpen(false)}>
                  <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="w-full text-center inline-flex items-center justify-center gap-2">
                    <Navigation size={14} className="text-aquora-gold" />
                    <span>DIRECTIONS</span>
                  </a>
                </Button>
                <Button size="sm" variant="secondary" className="w-full tracking-[0.16em] text-[11px] font-semibold h-12 rounded-full border-aquora-green/30 text-aquora-green-light hover:bg-aquora-green/20 shadow-sm active:scale-95 transition-transform" asChild onClick={() => setIsMobileMenuOpen(false)}>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full text-center inline-flex items-center justify-center gap-2">
                    <MessageCircle size={14} className="text-aquora-green-light" />
                    <span>WHATSAPP</span>
                  </a>
                </Button>
              </div>
              <a
                href="mailto:aquorayogadancestudio@gmail.com"
                className="text-center text-[10px] uppercase tracking-widest text-aquora-muted hover:text-aquora-beige transition-colors py-2 truncate"
              >
                aquorayogadancestudio@gmail.com
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
