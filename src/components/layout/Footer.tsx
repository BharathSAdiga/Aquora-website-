import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { MapPin, Phone, MessageCircle } from "lucide-react";

function InstagramIcon({ size = 14, className = "" }: { size?: number; className?: string }) {
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
  const phoneRaw = "6366007494";
  const displayPhone = "+91 63660 07494";
  const whatsappUrl = `https://wa.me/91${phoneRaw}?text=${encodeURIComponent(
    `Hello Aquora Yoga & Dance Studio,\n\nI would like to enquire about a trial class.\n\nThank you.`
  )}`;

  return (
    <footer className="bg-aquora-black text-aquora-foreground pt-20 pb-12 border-t border-aquora-gold/25" aria-label="Site Footer">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col items-start space-y-4">
            <Link href="/" className="inline-flex items-center gap-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aquora-gold rounded-sm group">
              <div className="relative h-11 w-48 shrink-0 flex items-center">
                <Image
                  src="/assets/aquora-logo-clean.png"
                  alt="AQUORA Yoga & Dance Studio"
                  width={765}
                  height={177}
                  className="w-full h-full object-contain object-left group-hover:brightness-110 transition-all duration-300"
                />
              </div>
            </Link>
            
            <p className="font-serif italic text-sm text-aquora-gold-light/90 max-w-[280px] leading-relaxed pt-1">
              MOVE. BREATHE. TRANSFORM.
            </p>
            <p className="text-xs text-aquora-muted font-light max-w-[280px] leading-relaxed">
              A dedicated sanctuary for mindful movement, creative expression and holistic wellness.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col items-start">
            <h3 className="font-serif text-lg mb-5 text-aquora-gold tracking-wider">Explore</h3>
            <nav aria-label="Footer Navigation" className="flex flex-col space-y-2.5 items-start">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '#about' },
                { name: 'Classes', href: '#classes' },
                { name: 'Schedule', href: '#schedule' },
                { name: 'The Studio', href: '#studio' },
                { name: 'Visit & Contact', href: '#contact' }
              ].map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className="text-xs tracking-wider uppercase text-aquora-muted hover:text-aquora-gold-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aquora-gold rounded-sm py-0.5"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Classes Column */}
          <div className="flex flex-col items-start">
            <h3 className="font-serif text-lg mb-5 text-aquora-gold tracking-wider">Classes</h3>
            <div className="flex flex-col space-y-2.5 text-xs text-aquora-muted">
              <a href="#classes" className="hover:text-aquora-gold-light transition-colors">
                Yoga (For Body &amp; Mind)
              </a>
              <a href="#classes" className="hover:text-aquora-gold-light transition-colors">
                Western Dance (For Passion)
              </a>
              <a href="#classes" className="hover:text-aquora-gold-light transition-colors">
                Bharatanatyam (For Tradition)
              </a>
              <div className="pt-3 border-t border-aquora-gold/15 mt-2">
                <span className="text-[10px] uppercase tracking-widest text-aquora-gold block mb-1">
                  Connect on Social
                </span>
                <a 
                  href="https://instagram.com/aquora.studio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-aquora-foreground hover:text-aquora-purple-light transition-colors font-medium"
                >
                  <InstagramIcon size={14} className="text-aquora-purple-light" />
                  <span>aquora.studio</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact & Location */}
          <div className="flex flex-col items-start">
            <h3 className="font-serif text-lg mb-5 text-aquora-gold tracking-wider">Contact</h3>
            <address className="not-italic text-xs text-aquora-muted space-y-3 flex flex-col items-start leading-relaxed">
              <div className="flex items-start gap-2.5 max-w-[280px]">
                <MapPin className="w-4 h-4 text-aquora-gold shrink-0 mt-0.5" aria-hidden="true" />
                <p>
                  No. 3/1, 1st Floor, SkyPool Fitness Studio Building, 4th B Main Road, Dr. Vivekananda Layout, 7th Phase, J.P. Nagar, Bengaluru - 560078, Karnataka, India
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-aquora-gold shrink-0" aria-hidden="true" />
                <a href={`tel:+91${phoneRaw}`} className="hover:text-aquora-gold-light transition-colors font-mono">
                  {phoneRaw}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-aquora-green-light shrink-0" aria-hidden="true" />
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-aquora-green-light transition-colors"
                  aria-label="Message on WhatsApp"
                >
                  WhatsApp: {displayPhone}
                </a>
              </div>
            </address>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-aquora-gold/20 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-aquora-muted/70">
          <p>&copy; {new Date().getFullYear()} AQUORA YOGA &amp; DANCE STUDIO. All rights reserved.</p>
          <p className="text-aquora-gold/80 tracking-widest uppercase text-[10px]">
            JP NAGAR • BENGALURU
          </p>
        </div>
      </Container>
    </footer>
  );
}
