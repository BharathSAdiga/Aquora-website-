import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { MapPin, ArrowUpRight, Mail } from "lucide-react";

function InstagramIcon({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}


export function Footer() {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    "No. 3/1, 1st Floor, SkyPool Fitness Studio Building, 4th B Main Road, Dr. Vivekananda Layout, 7th Phase, J.P. Nagar, Bengaluru - 560078, Karnataka, India"
  )}`;

  return (
    <footer className="dark:bg-[#070707] bg-[#F4EFEB] text-aquora-foreground pt-16 sm:pt-24 pb-24 sm:pb-14 border-t border-aquora-border relative overflow-hidden" aria-label="Site Footer">
      {/* Delicate ambient gradients: purple & green */}
      <div className="absolute top-0 right-1/4 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] rounded-full bg-aquora-green/10 blur-[140px] sm:blur-[170px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] rounded-full bg-aquora-purple/10 blur-[140px] sm:blur-[170px] pointer-events-none" />

      <Container className="relative z-10 px-4 sm:px-6">
        
        {/* Large Editorial Headline Section with Generous Whitespace */}
        <div className="mb-12 sm:mb-20 pb-10 sm:pb-16 border-b border-aquora-border">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
            <div>
              <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
                <div className="relative h-9 w-9 sm:h-10 sm:w-10 shrink-0">
                  <Image
                    src="/assets/aquora-crest-transparent.png"
                    alt="AQUORA Crest"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-xl sm:text-2xl tracking-[0.22em] font-semibold text-aquora-beige leading-none">
                    AQUORA
                  </span>
                  <span className="text-[7.5px] sm:text-[8px] uppercase tracking-[0.3em] text-aquora-muted font-light mt-1">
                    YOGA &amp; DANCE STUDIO
                  </span>
                </div>
              </div>

              <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-aquora-foreground tracking-tight">
                MOVE. BREATHE. <span className="italic font-light gold-gradient-text">TRANSFORM.</span>
              </h2>
            </div>

            <div className="max-w-xs">
              <p className="text-xs sm:text-sm text-aquora-muted font-light leading-relaxed">
                An architectural sanctuary in JP Nagar, Bengaluru dedicated to conscious movement, expressive dance, and classical heritage.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Columns — 2x2 on Mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 mb-14 sm:mb-20">
          
          {/* Navigation */}
          <div className="flex flex-col items-start">
            <span className="text-[9.5px] sm:text-[10px] uppercase tracking-[0.3em] font-semibold text-aquora-beige mb-3 sm:mb-5 block">
              Navigation
            </span>
            <nav aria-label="Footer Navigation" className="flex flex-col space-y-2.5 sm:space-y-3 items-start">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Philosophy', href: '#about' },
                { name: 'Disciplines & Classes', href: '#classes' },
                { name: 'Weekly Schedule', href: '#schedule' },
                { name: 'The Studio', href: '#studio' },
                { name: 'Visit & Enquire', href: '#contact' }
              ].map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className="text-[11.5px] sm:text-xs tracking-wider uppercase text-aquora-foreground/75 hover:text-aquora-beige transition-colors py-0.5"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Classes */}
          <div className="flex flex-col items-start">
            <span className="text-[9.5px] sm:text-[10px] uppercase tracking-[0.3em] font-semibold text-aquora-beige mb-3 sm:mb-5 block">
              Classes
            </span>
            <div className="flex flex-col space-y-2.5 sm:space-y-3 text-[11.5px] sm:text-xs text-aquora-foreground/75">
              <a href="#classes" className="hover:text-aquora-green-light transition-colors">
                Yoga — Body &amp; Mind
              </a>
              <a href="#classes" className="hover:text-aquora-purple-light transition-colors">
                Western Dance — Passion
              </a>
              <a href="#classes" className="hover:text-aquora-beige transition-colors">
                Bharatanatyam — Tradition
              </a>
              <a href="#classes" className="hover:text-white transition-colors">
                Ladies Only Batches
              </a>
              <a href="#classes" className="hover:text-white transition-colors">
                All Age Groups
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-start col-span-2 sm:col-span-1">
            <span className="text-[9.5px] sm:text-[10px] uppercase tracking-[0.3em] font-semibold text-aquora-beige mb-3 sm:mb-5 block">
              Contact
            </span>
            <address className="not-italic text-xs text-aquora-muted space-y-3 flex flex-col items-start leading-relaxed">
              <div className="flex items-start gap-2.5 max-w-[280px]">
                <MapPin className="w-3.5 h-3.5 text-aquora-beige shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[11.5px] sm:text-xs">
                  No. 3/1, 1st Floor, SkyPool Fitness Studio Building, 4th B Main Road, JP Nagar 7th Phase, Bengaluru - 560078
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-aquora-gold shrink-0" aria-hidden="true" />
                <a 
                  href="mailto:aquorayogadancestudio@gmail.com" 
                  className="text-[11.5px] sm:text-xs text-aquora-foreground hover:text-aquora-gold transition-colors font-medium break-all"
                >
                  aquorayogadancestudio@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 pt-0.5">
                <a 
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-aquora-beige hover:text-white transition-colors text-[10.5px] sm:text-[11px] uppercase tracking-wider underline decoration-aquora-beige/40 underline-offset-4"
                >
                  Get Directions in Google Maps →
                </a>
              </div>
            </address>
          </div>

          {/* Instagram Social */}
          <div className="flex flex-col items-start col-span-2 sm:col-span-1">
            <span className="text-[9.5px] sm:text-[10px] uppercase tracking-[0.3em] font-semibold text-aquora-beige mb-3 sm:mb-5 block">
              Community
            </span>
            <p className="text-[11.5px] sm:text-xs text-aquora-muted font-light mb-3 sm:mb-4">
              Follow our daily movement practice and updates:
            </p>
            <div className="flex flex-col gap-2.5 w-full">
              <a 
                href="https://instagram.com/aquorastudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full glass-panel-dark border border-aquora-border text-xs text-aquora-beige hover:text-aquora-purple-light hover:border-aquora-purple/50 transition-all group touch-press w-fit"
              >
                <InstagramIcon size={14} className="text-aquora-purple-light" />
                <span className="font-semibold tracking-wider">@aquorastudio</span>
                <ArrowUpRight size={12} className="text-aquora-muted group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

        </div>
        
        {/* Minimal Luxury Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-aquora-border flex flex-col sm:flex-row justify-between items-center gap-3 text-[10.5px] sm:text-[11px] text-aquora-muted text-center sm:text-left">
          <p>&copy; {new Date().getFullYear()} AQUORA YOGA &amp; DANCE STUDIO. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-aquora-beige font-medium tracking-widest uppercase text-[9.5px] sm:text-[10px]">
              JP NAGAR 7TH PHASE • BENGALURU
            </span>
          </div>
        </div>

      </Container>
    </footer>
  );
}
