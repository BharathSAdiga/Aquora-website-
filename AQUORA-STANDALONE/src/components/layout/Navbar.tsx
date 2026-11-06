"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Menu, 
  X, 
  Navigation, 
  MessageCircle, 
  MapPin, 
  ChevronRight, 
  Phone, 
  Clock, 
  Sparkles 
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("No. 3/1, 1st Floor, SkyPool Fitness Studio Building, 4th B Main Road, Dr. Vivekananda Layout, 7th Phase, J.P. Nagar, Bengaluru - 560078, Karnataka, India")}`;

const WHATSAPP_URL = `https://wa.me/919164267977?text=${encodeURIComponent("Hello Aquora Yoga & Dance Studio,\n\nI would like to enquire about classes and schedule.\n\nThank you.")}`;

const NAV_LINKS = [
  { 
    num: "01", 
    name: "Home", 
    href: "/", 
    desc: "Sanctuary overview & welcome" 
  },
  { 
    num: "02", 
    name: "About", 
    href: "#about", 
    desc: "Our lineage & master instructors" 
  },
  { 
    num: "03", 
    name: "Classes", 
    href: "#classes", 
    desc: "Yoga, Western Dance & Bharatanatyam" 
  },
  { 
    num: "04", 
    name: "Schedule", 
    href: "#schedule", 
    desc: "Morning, Ladies & Evening batches" 
  },
  { 
    num: "05", 
    name: "Studio", 
    href: "#studio", 
    desc: "Acoustics, natural light & wooden floors" 
  },
  { 
    num: "06", 
    name: "Contact", 
    href: "#contact", 
    desc: "Location, enquiry & direct assistance" 
  },
];

const drawerVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: -16,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.05,
      delayChildren: 0.06
    }
  },
  exit: { 
    opacity: 0, 
    y: -12,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.25, ease: "easeOut" }
  },
  exit: { opacity: 0, y: 8, transition: { duration: 0.15 } }
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 15);
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
    <>
      {/* ═══ Main Floating Navbar Bar ═══ */}
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ease-out transform-gpu",
          /* Solid 100% opaque background on mobile to prevent any see-through / text bleeding */
          "dark:bg-[#0B0C0E] bg-white border-b dark:border-white/10 border-black/10 shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.85)]",
          /* Restore floating capsule island on tablet & desktop */
          "sm:top-6 sm:px-6 sm:bg-transparent sm:dark:bg-transparent sm:border-b-0 sm:shadow-none sm:pointer-events-none"
        )}
      >
        <div
          className={cn(
            "w-full flex items-center justify-between px-4 py-3 sm:px-8 sm:py-3 transition-all duration-300 ease-out transform-gpu relative z-50",
            /* Desktop floating capsule styling */
            "sm:max-w-6xl sm:mx-auto sm:rounded-full sm:pointer-events-auto sm:border sm:backdrop-blur-xl sm:dark:bg-[#111215]/95 sm:bg-white/95",
            isScrolled
              ? "sm:dark:border-aquora-beige/25 sm:border-black/15 sm:shadow-[0_12px_32px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.06)] sm:dark:shadow-[0_18px_45px_rgba(0,0,0,0.92),0_0_0_1px_rgba(232,213,181,0.14)]"
              : "sm:dark:border-aquora-beige/15 sm:border-black/10 sm:shadow-[0_8px_24px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.04)] sm:dark:shadow-[0_12px_36px_rgba(0,0,0,0.75),0_0_0_1px_rgba(232,213,181,0.08)]"
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
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              className="p-2 rounded-full text-aquora-beige hover:text-aquora-foreground dark:hover:text-white dark:bg-white/10 bg-black/5 hover:bg-black/10 dark:hover:bg-white/15 border dark:border-aquora-beige/20 border-black/10 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aquora-gold touch-press flex items-center justify-center w-10 h-10 shadow-xs"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Open menu"
            >
              <Menu size={20} className="text-aquora-foreground dark:text-aquora-beige" />
            </button>
          </div>
        </div>
      </header>

      {/* ═══ Redesigned Luxury Fullscreen Mobile Navigation Drawer ═══ */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            id="mobile-menu"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 h-[100dvh] w-full z-[100] lg:hidden flex flex-col justify-between overflow-y-auto dark:bg-[#0B0C0E] bg-[#FAF8F5] text-aquora-foreground select-none"
          >
            {/* Ambient Sanctuary Glow Accents (Subtle, non-transparent depth) */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-aquora-green/10 dark:bg-aquora-green/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-aquora-purple/10 dark:bg-aquora-purple/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-aquora-gold/5 rounded-full blur-[120px] pointer-events-none" />

            {/* ── Top Header Row with Logo & Close Button ── */}
            <div className="relative z-20 shrink-0 px-5 pt-4 pb-3 flex items-center justify-between border-b dark:border-white/10 border-black/10 dark:bg-[#0E0F12] bg-[#FAF8F5]">
              <Link 
                href="/" 
                className="flex items-center gap-2.5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="relative h-8 w-8 shrink-0 flex items-center justify-center">
                  <Image
                    src="/assets/aquora-crest-transparent.png"
                    alt="AQUORA Crest"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain filter drop-shadow-sm"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-lg tracking-[0.2em] font-semibold text-aquora-beige leading-none dark:text-aquora-beige text-aquora-foreground">
                    AQUORA
                  </span>
                  <span className="text-[7.5px] uppercase tracking-[0.26em] text-aquora-muted font-light mt-0.5">
                    YOGA &amp; DANCE STUDIO
                  </span>
                </div>
              </Link>

              <div className="flex items-center gap-2">
                <ThemeToggle />
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full dark:bg-white/10 bg-black/5 hover:bg-black/10 dark:hover:bg-white/15 border dark:border-aquora-beige/30 border-black/15 text-aquora-foreground dark:text-aquora-beige transition-all active:scale-95 text-xs font-semibold tracking-wider cursor-pointer"
                  aria-label="Close menu"
                >
                  <X size={16} />
                  <span>CLOSE</span>
                </button>
              </div>
            </div>

            {/* ── Scrollable Body: Location Pill + Navigation Cards ── */}
            <div className="relative z-10 flex-1 px-4 py-4 flex flex-col justify-start overflow-y-auto">
              {/* Studio Status & Location Badge */}
              <motion.div variants={itemVariants} className="mb-4">
                <div className="w-full p-2.5 px-3.5 rounded-2xl dark:bg-white/[0.04] bg-black/[0.03] border dark:border-white/10 border-black/8 flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-[10.5px] uppercase tracking-wider font-semibold text-aquora-beige dark:text-aquora-beige truncate">
                      JP Nagar 7th Phase, Bengaluru
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-aquora-muted shrink-0 pl-2">
                    <Clock size={11} className="text-aquora-gold" />
                    <span>6 AM – 8:30 PM</span>
                  </div>
                </div>
              </motion.div>

              {/* Navigation Cards List */}
              <nav aria-label="Mobile Navigation" className="w-full">
                <ul className="flex flex-col gap-2">
                  {NAV_LINKS.map((link) => (
                    <motion.li key={link.name} variants={itemVariants}>
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="group flex items-center justify-between p-3 px-3.5 rounded-2xl dark:bg-white/[0.03] bg-black/[0.02] hover:dark:bg-white/[0.07] hover:bg-black/[0.05] border dark:border-white/8 border-black/6 hover:dark:border-aquora-beige/30 hover:border-black/20 transition-all active:scale-[0.99]"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span className="text-[10px] font-mono tracking-widest px-2 py-0.5 rounded-full dark:bg-white/5 bg-black/5 dark:text-aquora-beige text-aquora-green-dark border dark:border-white/10 border-black/10 shrink-0">
                            {link.num}
                          </span>
                          <div className="flex flex-col min-w-0">
                            <span className="font-serif text-lg tracking-wide text-aquora-foreground group-hover:text-aquora-beige transition-colors leading-tight">
                              {link.name}
                            </span>
                            <span className="text-[10.5px] text-aquora-muted group-hover:text-aquora-foreground/70 transition-colors truncate">
                              {link.desc}
                            </span>
                          </div>
                        </div>
                        <div className="w-7 h-7 rounded-full dark:bg-white/5 bg-black/5 flex items-center justify-center shrink-0 text-aquora-muted group-hover:text-aquora-beige group-hover:translate-x-0.5 transition-all">
                          <ChevronRight size={14} />
                        </div>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* ── Bottom Action & Contact Strip ── */}
            <motion.div 
              variants={itemVariants}
              className="relative z-20 shrink-0 px-4 pt-3 pb-6 border-t dark:border-white/10 border-black/10 dark:bg-[#0E0F12] bg-[#FAF8F5] flex flex-col gap-2.5"
            >
              {/* Primary Dual CTA Buttons */}
              <div className="grid grid-cols-2 gap-2.5">
                <Button 
                  size="sm" 
                  variant="primary"
                  className="w-full tracking-[0.14em] text-[10.5px] font-semibold h-11 rounded-full shadow-md active:scale-95 transition-transform" 
                  asChild 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-1.5">
                    <Navigation size={13} className="text-aquora-gold" />
                    <span>DIRECTIONS</span>
                  </a>
                </Button>
                <Button 
                  size="sm" 
                  variant="secondary" 
                  className="w-full tracking-[0.14em] text-[10.5px] font-semibold h-11 rounded-full border-aquora-green/30 text-aquora-green-light hover:bg-aquora-green/20 shadow-sm active:scale-95 transition-transform" 
                  asChild 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-1.5">
                    <MessageCircle size={13} className="text-aquora-green-light" />
                    <span>WHATSAPP</span>
                  </a>
                </Button>
              </div>

              {/* Direct Tap-to-Call Pill */}
              <a
                href="tel:+919164267977"
                className="w-full flex items-center justify-center gap-2 py-2 rounded-xl dark:bg-white/[0.04] bg-black/[0.03] border dark:border-white/8 border-black/8 hover:dark:border-aquora-gold/40 hover:border-black/20 text-[11px] font-medium tracking-wide text-aquora-foreground/90 transition-colors"
              >
                <Phone size={12} className="text-aquora-gold" />
                <span>Call Studio: +91 91642 67977</span>
              </a>

              {/* Studio Address & Email Micro Footer */}
              <div className="flex flex-col items-center text-center gap-0.5 pt-0.5">
                <a
                  href="mailto:aquorayogadancestudio@gmail.com"
                  className="text-[9.5px] uppercase tracking-widest text-aquora-muted hover:text-aquora-beige transition-colors truncate max-w-full"
                >
                  aquorayogadancestudio@gmail.com
                </a>
                <span className="text-[9px] tracking-wider text-aquora-muted/70">
                  Mindful Movement &amp; Dance Sanctuary • JP Nagar
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
