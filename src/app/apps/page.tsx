import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Calendar, Smartphone, QrCode, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Studio Apps & Digital Portal | AQUORA Yoga & Dance Studio",
  description: "Access the AQUORA studio portal, manage class schedules, get directions, and connect with instructors in JP Nagar, Bengaluru.",
};

export default function AppsPage() {
  const phoneRaw = "9164267977";
  const whatsappUrl = `https://wa.me/91${phoneRaw}?text=${encodeURIComponent(
    `Hello Aquora Yoga & Dance Studio,\n\nI would like to enquire about visiting the studio and getting directions.\n\nThank you.`
  )}`;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-aquora-bg text-aquora-foreground pt-36 pb-24 relative overflow-hidden">
        {/* Ambient atmospheric glows */}
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-aquora-green/10 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] rounded-full bg-aquora-purple/10 blur-[150px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-aquora-gold/8 blur-[160px] pointer-events-none" />

        <Container className="relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full glass-pill-dark text-aquora-gold font-medium tracking-[0.28em] text-[10px] uppercase">
              <Smartphone size={12} className="text-aquora-gold" />
              <span>DIGITAL PORTAL &amp; APPS</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-aquora-foreground tracking-tight mb-5 leading-tight">
              AQUORA STUDIO APPS
            </h1>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-aquora-gold to-transparent mx-auto mb-6" />
            <p className="text-base sm:text-lg text-aquora-muted font-light leading-relaxed max-w-xl mx-auto">
              Your seamless gateway to mindful movement. Reserve classes, track weekly batches, and access your studio membership from any device.
            </p>
          </div>

          {/* App Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            
            {/* Card 1: Class Schedules & Booking */}
            <div className="glass-panel-dark rounded-3xl p-8 flex flex-col justify-between hover:border-aquora-gold/50 transition-all duration-300 group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-aquora-green/20 border border-aquora-green/40 flex items-center justify-center mb-6 text-aquora-green-light">
                  <Calendar size={22} />
                </div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-aquora-green-light font-medium block mb-2">
                  Daily Access
                </span>
                <h2 className="font-serif text-2xl text-aquora-foreground mb-3 font-normal group-hover:text-aquora-gold transition-colors">
                  Class Scheduling
                </h2>
                <p className="text-xs sm:text-sm text-aquora-muted font-light leading-relaxed mb-6">
                  Browse available morning, ladies-only, and evening batches for Yoga, Western Dance, and Bharatanatyam with instant schedule synchronisation.
                </p>
              </div>
              <div className="pt-4 border-t border-aquora-gold/15">
                <Link
                  href="/#schedule"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-aquora-gold hover:text-aquora-gold-light transition-colors"
                >
                  <span>View Timetable</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 2: Digital Studio Check-In */}
            <div className="glass-panel-dark rounded-3xl p-8 flex flex-col justify-between hover:border-aquora-gold/50 transition-all duration-300 group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-aquora-purple/20 border border-aquora-purple/40 flex items-center justify-center mb-6 text-aquora-purple-light">
                  <QrCode size={22} />
                </div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-aquora-purple-light font-medium block mb-2">
                  Seamless Entry
                </span>
                <h2 className="font-serif text-2xl text-aquora-foreground mb-3 font-normal group-hover:text-aquora-gold transition-colors">
                  Studio Check-In
                </h2>
                <p className="text-xs sm:text-sm text-aquora-muted font-light leading-relaxed mb-6">
                  Check into the JP Nagar sanctuary with quick contactless attendance for ongoing batches, private rehearsals, and weekend workshops.
                </p>
              </div>
              <div className="pt-4 border-t border-aquora-gold/15">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-aquora-gold hover:text-aquora-gold-light transition-colors"
                >
                  <span>Member Portal</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Card 3: Trial & Membership Pass */}
            <div className="glass-panel-dark rounded-3xl p-8 flex flex-col justify-between hover:border-aquora-gold/50 transition-all duration-300 group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-aquora-gold/20 border border-aquora-gold/40 flex items-center justify-center mb-6 text-aquora-gold">
                  <Sparkles size={22} />
                </div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-aquora-gold font-medium block mb-2">
                  Sanctuary Visit
                </span>
                <h2 className="font-serif text-2xl text-aquora-foreground mb-3 font-normal group-hover:text-aquora-gold transition-colors">
                  Studio Location
                </h2>
                <p className="text-xs sm:text-sm text-aquora-muted font-light leading-relaxed mb-6">
                  Visit our JP Nagar 7th Phase sanctuary in person. Experience our architectural space and navigate directly using Google Maps.
                </p>
              </div>
              <div className="pt-4 border-t border-aquora-gold/15">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("No. 3/1, 1st Floor, SkyPool Fitness Studio Building, 4th B Main Road, Dr. Vivekananda Layout, 7th Phase, J.P. Nagar, Bengaluru - 560078, Karnataka, India")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-aquora-gold hover:text-aquora-gold-light transition-colors"
                >
                  <span>Get Directions</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

          </div>

          {/* Quick Support & Web App Access Container */}
          <div className="max-w-4xl mx-auto glass-panel-dark rounded-3xl p-8 sm:p-12 text-center border border-aquora-gold/30">
            <div className="w-12 h-12 rounded-full bg-aquora-gold/15 border border-aquora-gold/35 flex items-center justify-center mx-auto mb-5 text-aquora-gold">
              <ShieldCheck size={22} />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-aquora-foreground mb-3 font-normal">
              Direct WhatsApp Concierge &amp; Web Access
            </h3>
            <p className="text-sm text-aquora-muted font-light max-w-lg mx-auto mb-8 leading-relaxed">
              No store installation required. Connect directly with the Aquora Studio team in JP Nagar 7th Phase to activate your portal pass or enquire about batch admissions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="primary" className="text-xs tracking-[0.2em]">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  CONNECT VIA WHATSAPP
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-xs tracking-[0.2em]">
                <Link href="/">
                  BACK TO HOME
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </main>

      <WhatsAppFloatingButton />
      <Footer />
    </>
  );
}
