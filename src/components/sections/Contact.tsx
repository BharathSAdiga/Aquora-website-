"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, MessageCircle, Map as MapIcon, CheckCircle2, ArrowRight } from "lucide-react";

function InstagramIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
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

interface FormData {
  fullName: string;
  phone: string;
  program: "Yoga" | "Western Dance" | "Bharatanatyam";
  preferredDay: string;
  batchTime: string;
  message?: string;
}

const PROGRAM_BATCH_OPTIONS: Record<"Yoga" | "Western Dance" | "Bharatanatyam", { days: string[]; times: string[] }> = {
  Yoga: {
    days: ["Monday – Saturday", "Mon – Sat (Morning)", "Mon – Sat (Ladies Only)", "Mon – Sat (Evening)"],
    times: [
      "06:00 AM – 07:00 AM (Morning)",
      "07:00 AM – 08:00 AM (Morning)",
      "09:00 AM – 10:00 AM (Ladies Batch)",
      "07:30 PM – 08:30 PM (Evening)",
    ],
  },
  "Western Dance": {
    days: ["Monday | Wednesday | Friday"],
    times: [
      "04:00 PM – 05:00 PM",
      "05:00 PM – 06:00 PM",
      "06:00 PM – 07:00 PM",
    ],
  },
  Bharatanatyam: {
    days: ["Tuesday | Thursday | Saturday"],
    times: [
      "04:00 PM – 05:00 PM",
      "05:00 PM – 06:00 PM",
      "06:00 PM – 07:00 PM",
    ],
  },
};

export function Contact() {
  const address = `No. 3/1, 1st Floor, SkyPool Fitness Studio Building, 4th B Main Road, Dr. Vivekananda Layout, 7th Phase, J.P. Nagar, Bengaluru - 560078, Karnataka, India`;
  const encodedAddress = encodeURIComponent(address);
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
  const phoneRaw = "6366007494";
  const displayPhone = "+91 63660 07494";
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    program: "Yoga",
    preferredDay: PROGRAM_BATCH_OPTIONS.Yoga.days[0],
    batchTime: PROGRAM_BATCH_OPTIONS.Yoga.times[0],
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleProgramChange = (program: "Yoga" | "Western Dance" | "Bharatanatyam") => {
    setFormData((prev) => ({
      ...prev,
      program,
      preferredDay: PROGRAM_BATCH_OPTIONS[program].days[0],
      batchTime: PROGRAM_BATCH_OPTIONS[program].times[0],
    }));
  };

  const getWhatsAppMessage = () => {
    return `Hello Aquora Yoga & Dance Studio,

I would like to enquire about a trial class.

Class: ${formData.program}
Preferred day: ${formData.preferredDay}
Preferred time: ${formData.batchTime}

Thank you.`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) return;
    setIsSubmitted(true);
    
    // Open WhatsApp with formatted enquiry text
    const url = `https://wa.me/91${phoneRaw}?text=${encodeURIComponent(getWhatsAppMessage())}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const whatsappDirectUrl = `https://wa.me/91${phoneRaw}?text=${encodeURIComponent(
    `Hello Aquora Yoga & Dance Studio,\n\nI would like to enquire about a trial class.\n\nClass:\nPreferred day:\nPreferred time:\n\nThank you.`
  )}`;

  return (
    <section id="contact" className="py-28 md:py-40 bg-aquora-bg text-aquora-foreground relative overflow-hidden">
      {/* Ambient background lighting behind glass containers */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-aquora-gold/8 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-aquora-green/10 blur-[160px] pointer-events-none" />

      <Container className="relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-[0.35em] font-medium text-aquora-gold mb-3 block">
            Connect &amp; Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-aquora-foreground tracking-wide mb-4">
            VISIT AQUORA
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-aquora-gold to-transparent mx-auto mb-6" />
          <p className="text-sm md:text-base text-aquora-muted font-light max-w-xl mx-auto leading-relaxed">
            Enquire for a trial class, connect with our team, or visit our studio in JP Nagar, Bengaluru.
          </p>
        </div>

        {/* 3-Column Architecture: Left Info | Center Map | Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* ============================================================ */}
          {/* LEFT: Address, Phone, WhatsApp, Instagram & Direct CTAs (col-span-4) */}
          {/* ============================================================ */}
          <div className="lg:col-span-4 flex flex-col justify-between glass-panel-dark rounded-3xl p-7 sm:p-9">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-aquora-gold block mb-2">
                Studio Details
              </span>
              <h3 className="font-serif text-2xl text-aquora-foreground mb-7 font-normal">
                Bengaluru Sanctuary
              </h3>

              {/* Address */}
              <div className="flex items-start gap-3.5 mb-6">
                <div className="w-9 h-9 rounded-full bg-aquora-gold/15 border border-aquora-gold/30 flex items-center justify-center shrink-0 mt-0.5 backdrop-blur-sm shadow-sm">
                  <MapPin size={15} className="text-aquora-gold" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-aquora-foreground font-semibold mb-1">
                    Location
                  </h4>
                  <address className="not-italic text-xs sm:text-sm text-aquora-muted leading-relaxed font-light">
                    No. 3/1, 1st Floor,<br />
                    SkyPool Fitness Studio Building,<br />
                    4th B Main Road, Dr. Vivekananda Layout,<br />
                    7th Phase, J.P. Nagar,<br />
                    Bengaluru - 560078, Karnataka, India
                  </address>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-9 h-9 rounded-full bg-aquora-gold/15 border border-aquora-gold/30 flex items-center justify-center shrink-0 backdrop-blur-sm shadow-sm">
                  <Phone size={15} className="text-aquora-gold" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider text-aquora-gold font-medium">
                    Phone Direct
                  </h4>
                  <a 
                    href={`tel:+91${phoneRaw}`}
                    className="text-sm sm:text-base font-serif text-aquora-foreground hover:text-aquora-gold transition-colors font-medium"
                  >
                    {phoneRaw}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-9 h-9 rounded-full bg-aquora-green/20 border border-aquora-green/40 flex items-center justify-center shrink-0 backdrop-blur-sm shadow-sm">
                  <MessageCircle size={15} className="text-aquora-green-light" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider text-aquora-green-light font-medium">
                    WhatsApp Enquiry
                  </h4>
                  <a 
                    href={whatsappDirectUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-mono text-aquora-foreground hover:text-aquora-green-light transition-colors"
                  >
                    {displayPhone}
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-3.5 mb-8">
                <div className="w-9 h-9 rounded-full bg-aquora-purple/20 border border-aquora-purple/40 flex items-center justify-center shrink-0 backdrop-blur-sm shadow-sm">
                  <InstagramIcon size={15} className="text-aquora-purple-light" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider text-aquora-purple-light font-medium">
                    Instagram
                  </h4>
                  <a 
                    href="https://instagram.com/aquora.studio" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-sans text-aquora-foreground hover:text-aquora-purple-light transition-colors"
                  >
                    aquora.studio
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="space-y-3 pt-6 border-t border-white/10">
              <Button asChild variant="outline" size="sm" className="w-full justify-center tracking-[0.16em] text-[11px]">
                <a href={`tel:+91${phoneRaw}`}>
                  <Phone size={13} className="mr-2 text-aquora-gold" />
                  CALL US
                </a>
              </Button>
              <Button asChild variant="secondary" size="sm" className="w-full justify-center tracking-[0.16em] text-[11px]">
                <a href={whatsappDirectUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={13} className="mr-2 text-aquora-green-light" />
                  WHATSAPP US
                </a>
              </Button>
              <Button asChild variant="outline" size="sm" className="w-full justify-center tracking-[0.16em] text-[11px]">
                <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
                  <MapIcon size={13} className="mr-2 text-aquora-gold" />
                  GET DIRECTIONS
                </a>
              </Button>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CENTER: Interactive / Fallback Map (col-span-4) */}
          {/* ============================================================ */}
          <div className="lg:col-span-4 flex flex-col glass-panel-dark rounded-3xl overflow-hidden relative min-h-[380px] lg:min-h-full">
            {googleMapsApiKey ? (
              <iframe
                title="AQUORA Yoga & Dance Studio Location"
                className="w-full h-full min-h-[360px] border-0 filter invert-[90%] hue-rotate-180 contrast-[110%]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${encodedAddress}`}
              />
            ) : (
              <div className="w-full h-full flex flex-col justify-between p-7 sm:p-9 bg-gradient-to-br from-aquora-surface-card/70 via-aquora-surface/60 to-aquora-black/80 relative">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-aquora-gold/15 border border-aquora-gold/35 flex items-center justify-center mb-5 backdrop-blur-sm shadow-sm">
                    <MapPin size={20} className="text-aquora-gold" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-aquora-gold font-medium block mb-1">
                    Find Us
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl text-aquora-foreground mb-3 font-normal">
                    SkyPool Fitness Studio Building
                  </h4>
                  <p className="text-xs sm:text-sm text-aquora-muted leading-relaxed font-light mb-6">
                    Conveniently located on 4th B Main Road, Dr. Vivekananda Layout, 7th Phase, JP Nagar. Easily accessible with ample parking.
                  </p>
                </div>

                <div className="relative z-10 pt-6 border-t border-white/10">
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-aquora-gold hover:text-aquora-gold-light transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* ============================================================ */}
          {/* RIGHT: Contact & Trial Class Enquiry Form (col-span-4) */}
          {/* ============================================================ */}
          <div id="trial" className="lg:col-span-4 glass-panel-dark rounded-3xl p-7 sm:p-9 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-aquora-gold block mb-1">
                Trial Enquiry
              </span>
              <h3 className="font-serif text-2xl text-aquora-foreground mb-2 font-normal">
                Enquire for a Class
              </h3>
              <p className="text-xs text-aquora-muted mb-6 font-light">
                Submit details below to initiate your enquiry directly via WhatsApp.
              </p>

              {isSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-aquora-gold/15 border border-aquora-gold/40 flex items-center justify-center mx-auto text-aquora-gold backdrop-blur-sm shadow-sm">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="font-serif text-xl text-aquora-foreground font-normal">
                    Enquiry Prepared!
                  </h4>
                  <p className="text-xs text-aquora-muted max-w-xs mx-auto leading-relaxed">
                    WhatsApp has opened with your formatted enquiry message for {formData.program}.
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 tracking-[0.16em] text-xs"
                  >
                    SUBMIT ANOTHER ENQUIRY
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-aquora-muted font-medium mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 glass-card-inner border border-white/10 text-aquora-foreground text-xs placeholder:text-aquora-muted/50 focus:outline-none focus:border-aquora-gold"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-aquora-muted font-medium mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 glass-card-inner border border-white/10 text-aquora-foreground text-xs placeholder:text-aquora-muted/50 focus:outline-none focus:border-aquora-gold"
                    />
                  </div>

                  {/* Program Selector */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-aquora-muted font-medium mb-1.5">
                      Interested Program *
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {(["Yoga", "Western Dance", "Bharatanatyam"] as const).map((prog) => (
                        <button
                          type="button"
                          key={prog}
                          onClick={() => handleProgramChange(prog)}
                          className={`py-2 px-1 text-[10px] uppercase tracking-wider font-medium border transition-colors cursor-pointer ${
                            formData.program === prog
                              ? "bg-aquora-gold text-aquora-black border-aquora-gold font-semibold"
                              : "glass-card-inner text-aquora-muted border-white/10 hover:border-aquora-gold/50 hover:text-aquora-foreground"
                          }`}
                        >
                          {prog === "Bharatanatyam" ? "Classical" : prog}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Preferred Day */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-aquora-muted font-medium mb-1.5">
                      Preferred Day
                    </label>
                    <select
                      value={formData.preferredDay}
                      onChange={(e) => setFormData({ ...formData, preferredDay: e.target.value })}
                      className="w-full px-3.5 py-2.5 glass-card-inner border border-white/10 text-aquora-foreground text-xs focus:outline-none focus:border-aquora-gold"
                    >
                      {PROGRAM_BATCH_OPTIONS[formData.program].days.map((day) => (
                        <option key={day} value={day} className="bg-aquora-black text-aquora-foreground">
                          {day}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Batch / Time */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-aquora-muted font-medium mb-1.5">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.batchTime}
                      onChange={(e) => setFormData({ ...formData, batchTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 glass-card-inner border border-white/10 text-aquora-foreground text-xs focus:outline-none focus:border-aquora-gold"
                    >
                      {PROGRAM_BATCH_OPTIONS[formData.program].times.map((time) => (
                        <option key={time} value={time} className="bg-aquora-black text-aquora-foreground">
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="pt-2">
                    <Button type="submit" variant="primary" size="md" className="w-full tracking-[0.18em] text-xs font-semibold">
                      SEND ENQUIRY ON WHATSAPP
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
}
