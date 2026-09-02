import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { MapPin, Phone, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-velora-primary text-velora-bg pt-16 pb-8 border-t-2 border-velora-accent/40" aria-label="Site Footer">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="flex flex-col items-start space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent rounded-sm">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-velora-accent/40 shrink-0 bg-velora-bg flex items-center justify-center">
                <img
                  src="/assets/velora-logo.jpg"
                  alt="Velora Logo"
                  className="w-full h-full object-cover object-left scale-125"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl text-velora-accent tracking-widest font-bold leading-none">VELORA</span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-velora-secondary font-semibold mt-1">
                  Yoga &amp; Dance Studio
                </span>
              </div>
            </Link>
            <p className="text-xs text-velora-bg/75 italic font-serif max-w-[260px] leading-relaxed pt-1">
              Move Smoothly, Breathe Deeply, Live Fully.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col items-start">
            <h3 className="font-serif text-lg mb-5 text-velora-accent tracking-wide">Quick Links</h3>
            <nav aria-label="Footer Navigation" className="flex flex-col space-y-2.5 items-start">
              {[
                { name: 'About', href: '#about' },
                { name: 'Classes', href: '#classes' },
                { name: 'Schedule', href: '#schedule' },
                { name: 'The Studio', href: '#studio' },
                { name: 'Visit & Contact', href: '#contact' }
              ].map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className="text-xs tracking-wider uppercase text-velora-bg/75 hover:text-velora-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent rounded-sm py-0.5"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Location */}
          <div className="flex flex-col items-start">
            <h3 className="font-serif text-lg mb-5 text-velora-accent tracking-wide">Studio Location</h3>
            <address className="not-italic text-xs text-velora-bg/75 space-y-3 flex flex-col items-start leading-relaxed">
              <div className="flex items-start gap-2.5 max-w-[280px]">
                <MapPin className="w-4 h-4 text-velora-accent shrink-0 mt-0.5" aria-hidden="true" />
                <p>
                  No. 3/1, 1st Floor, SkyPool Fitness Studio Building, 4th B Main Road, Dr. Vivekananda Layout, 7th Phase, J.P. Nagar, Bengaluru - 560078, Karnataka, India
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-velora-accent shrink-0" aria-hidden="true" />
                <a href="tel:+916366007494" className="hover:text-velora-accent transition-colors">
                  +91 63660 07494
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-velora-accent shrink-0" aria-hidden="true" />
                <a 
                  href="https://wa.me/916366007494" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-velora-accent transition-colors"
                  aria-label="Message on WhatsApp"
                >
                  WhatsApp: +91 63660 07494
                </a>
              </div>
            </address>
          </div>

          {/* Timings / Batches */}
          <div className="flex flex-col items-start">
            <h3 className="font-serif text-lg mb-5 text-velora-accent tracking-wide">Studio Hours</h3>
            <div className="text-xs text-velora-bg/75 space-y-2 leading-relaxed">
              <div>
                <p className="font-semibold text-velora-accent uppercase tracking-wider text-[10px]">Yoga (Mon - Sat)</p>
                <p>06:00 AM - 10:00 AM</p>
                <p>07:30 PM - 08:30 PM</p>
              </div>
              <div className="pt-2 border-t border-velora-accent/15">
                <p className="font-semibold text-velora-accent uppercase tracking-wider text-[10px]">Dance &amp; Bharatanatyam</p>
                <p>Mon - Sat: 04:00 PM - 07:00 PM</p>
              </div>
            </div>
          </div>

        </div>
        
        <div className="pt-6 border-t border-velora-accent/20 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-velora-bg/50">
          <p>&copy; {new Date().getFullYear()} Velora Yoga &amp; Dance Studio. All rights reserved.</p>
          <p className="text-velora-bg/40 tracking-wider uppercase text-[10px]">
            JP Nagar, Bengaluru
          </p>
        </div>
      </Container>
    </footer>
  );
}
