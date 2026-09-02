import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { MapPin, Phone, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-velora-primary text-velora-bg pt-16 pb-8 border-t-4 border-velora-accent" aria-label="Site Footer">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <Link href="/" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent rounded-sm">
              <h2 className="font-serif text-3xl text-velora-accent tracking-widest font-bold">VELORA</h2>
              <p className="text-xs uppercase tracking-[0.2em] text-velora-secondary font-semibold mt-1">
                Yoga & Dance Studio
              </p>
            </Link>
            <p className="text-sm text-velora-bg/80 italic font-serif mt-4 max-w-[250px]">
              Move Smoothly, Breathe Deeply, Live Fully.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-serif text-xl mb-6 text-velora-accent tracking-wide">Quick Links</h3>
            <nav aria-label="Footer Navigation" className="flex flex-col space-y-3 items-center md:items-start">
              {['Home', 'About', 'Classes', 'Schedule', 'Studio', 'Contact'].map((item) => (
                <Link 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-velora-bg/80 hover:text-velora-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent rounded-sm px-1 -mx-1"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Location */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-serif text-xl mb-6 text-velora-accent tracking-wide">Visit Us</h3>
            <address className="not-italic text-sm text-velora-bg/80 space-y-4 flex flex-col items-center md:items-start">
              <div className="flex items-start gap-3 max-w-[250px]">
                <MapPin className="w-5 h-5 text-velora-secondary shrink-0 mt-0.5" aria-hidden="true" />
                <p>
                  No. 3/1, 1st Floor, Skypool Fitness Studio Building, 4th B Main Road, Dr. Vivekananda Layout, 7th Phase, J. P. Nagar, Bengaluru - 560078
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-velora-secondary shrink-0" aria-hidden="true" />
                <p>+91 63660 07494</p>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-velora-secondary shrink-0" aria-hidden="true" />
                <Link 
                  href="#" 
                  className="hover:text-velora-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent rounded-sm"
                  aria-label="Contact us on WhatsApp"
                >
                  WhatsApp Us
                </Link>
              </div>
            </address>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-serif text-xl mb-6 text-velora-accent tracking-wide">Connect</h3>
            <div className="flex gap-4">
              <Link 
                href="#" 
                className="w-10 h-10 rounded-full bg-velora-primary-hover flex items-center justify-center text-velora-bg/80 hover:text-velora-primary hover:bg-velora-accent transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 rounded-full bg-velora-primary-hover flex items-center justify-center text-velora-bg/80 hover:text-velora-primary hover:bg-velora-accent transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 rounded-full bg-velora-primary-hover flex items-center justify-center text-velora-bg/80 hover:text-velora-primary hover:bg-velora-accent transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent"
                aria-label="Follow us on Twitter"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
            </div>
          </div>

        </div>
        
        <div className="pt-8 border-t border-velora-accent/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-velora-bg/60">
          <p>&copy; {new Date().getFullYear()} Velora Yoga & Dance Studio. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-velora-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent rounded-sm px-1">Privacy Policy</Link>
            <Link href="#" className="hover:text-velora-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent rounded-sm px-1">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
