"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, MessageCircle, Map as MapIcon, ArrowRight, CheckCircle2 } from "lucide-react";

interface FormData {
  fullName: string;
  phone: string;
  program: "Yoga" | "Western Dance" | "Bharatanatyam";
  batch: string;
}

const PROGRAM_BATCHES: Record<"Yoga" | "Western Dance" | "Bharatanatyam", string[]> = {
  Yoga: [
    "Morning (06:00 AM - 07:00 AM)",
    "Morning (07:00 AM - 08:00 AM)",
    "Exclusive Ladies Batch (09:00 AM - 10:00 AM)",
    "Evening (07:30 PM - 08:30 PM)",
  ],
  "Western Dance": [
    "Mon / Wed / Fri (04:00 PM - 05:00 PM)",
    "Mon / Wed / Fri (05:00 PM - 06:00 PM)",
    "Mon / Wed / Fri (06:00 PM - 07:00 PM)",
  ],
  Bharatanatyam: [
    "Tue / Thu / Sat (04:00 PM - 05:00 PM)",
    "Tue / Thu / Sat (05:00 PM - 06:00 PM)",
    "Tue / Thu / Sat (06:00 PM - 07:00 PM)",
  ],
};

export function Contact() {
  const address = `No. 3/1, 1st Floor, SkyPool Fitness Studio Building, 4th B Main Road, Dr. Vivekananda Layout, 7th Phase, J.P. Nagar, Bengaluru - 560078, Karnataka, India`;
  const encodedAddress = encodeURIComponent(address);
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
  
  const phoneNumber = "+916366007494";
  const displayPhone = "+91 63660 07494";
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    program: "Yoga",
    batch: PROGRAM_BATCHES.Yoga[0],
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleProgramChange = (program: "Yoga" | "Western Dance" | "Bharatanatyam") => {
    setFormData((prev) => ({
      ...prev,
      program,
      batch: PROGRAM_BATCHES[program][0],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) return;
    setIsSubmitted(true);
  };

  const whatsappBookingUrl = `https://wa.me/916366007494?text=${encodeURIComponent(
    `Hello Velora, I would like to book a trial class.\n\nName: ${formData.fullName}\nPhone: ${formData.phone}\nProgram: ${formData.program}\nPreferred Batch: ${formData.batch}`
  )}`;

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-velora-bg text-velora-foreground">
      <Container>
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-velora-secondary mb-3 block">
            Connect With Velora
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-velora-primary tracking-wide mb-4">
            VISIT VELORA
          </h2>
          <div className="w-16 h-[1.5px] bg-velora-accent mx-auto mb-4"></div>
          <p className="text-sm md:text-base text-velora-muted font-light">
            Book a complimentary trial class or visit our sanctuary in JP Nagar, Bengaluru.
          </p>
        </div>

        {/* TRIAL BOOKING FORM CARD */}
        <div id="trial" className="max-w-4xl mx-auto mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUpVariant}
            className="bg-white p-7 md:p-10 rounded-xl border border-velora-accent/30 shadow-sm relative overflow-hidden"
          >
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-velora-secondary block mb-2">
                Trial Session
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-velora-primary mb-2">
                Book Your Trial Class
              </h3>
              <p className="text-xs md:text-sm text-velora-muted font-light">
                Experience mindful movement and artistic expression with our dedicated instructors.
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-velora-secondary/15 rounded-full flex items-center justify-center mx-auto text-velora-secondary">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="font-serif text-2xl text-velora-primary">Trial Request Received</h4>
                <p className="text-xs md:text-sm text-velora-muted max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-velora-primary">{formData.fullName}</span>. We have noted your interest in <span className="font-semibold text-velora-primary">{formData.program}</span> for <span className="font-semibold text-velora-primary">{formData.batch}</span>.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                  <Button asChild size="md" className="w-full sm:w-auto">
                    <a href={whatsappBookingUrl} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2 inline" />
                      CONFIRM ON WHATSAPP
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="md" 
                    onClick={() => setIsSubmitted(false)}
                    className="w-full sm:w-auto text-xs"
                  >
                    Submit Another Request
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Program Selector */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-velora-primary mb-2">
                    1. Select Discipline
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {(["Yoga", "Western Dance", "Bharatanatyam"] as const).map((prog) => (
                      <button
                        key={prog}
                        type="button"
                        onClick={() => handleProgramChange(prog)}
                        className={`py-3 px-4 rounded-lg text-xs font-medium uppercase tracking-wider border transition-all text-center ${
                          formData.program === prog
                            ? "bg-velora-primary text-velora-accent border-velora-primary shadow-sm"
                            : "bg-velora-bg/50 text-velora-foreground/80 border-velora-accent/30 hover:border-velora-accent"
                        }`}
                      >
                        {prog}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Batch Selector */}
                <div>
                  <label htmlFor="batch-select" className="block text-xs font-semibold uppercase tracking-wider text-velora-primary mb-2">
                    2. Select Batch &amp; Time
                  </label>
                  <select
                    id="batch-select"
                    value={formData.batch}
                    onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                    className="w-full py-3 px-4 rounded-lg border border-velora-accent/30 bg-white text-xs md:text-sm text-velora-foreground focus:outline-none focus:ring-2 focus:ring-velora-accent"
                  >
                    {PROGRAM_BATCHES[formData.program].map((batchTime) => (
                      <option key={batchTime} value={batchTime}>
                        {batchTime}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-velora-primary mb-2">
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="e.g. Ananya Rao"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full py-3 px-4 rounded-lg border border-velora-accent/30 bg-white text-xs md:text-sm text-velora-foreground focus:outline-none focus:ring-2 focus:ring-velora-accent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-velora-primary mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full py-3 px-4 rounded-lg border border-velora-accent/30 bg-white text-xs md:text-sm text-velora-foreground focus:outline-none focus:ring-2 focus:ring-velora-accent"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-2 text-center">
                  <Button type="submit" size="lg" className="w-full sm:w-auto px-10 text-xs">
                    REQUEST TRIAL SESSION
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>

        {/* LOCATION & MAP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          
          {/* Location Information */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUpVariant}
            className="space-y-6 order-2 lg:order-1"
          >
            <div className="bg-white p-6 md:p-8 rounded-xl border border-velora-accent/25 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-velora-secondary/10 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-velora-secondary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-velora-primary mb-2">Studio Location</h3>
                  <p className="text-velora-muted text-sm leading-relaxed mb-4 font-light">
                    No. 3/1, 1st Floor,<br />
                    SkyPool Fitness Studio Building,<br />
                    4th B Main Road, Dr. Vivekananda Layout,<br />
                    7th Phase, J.P. Nagar,<br />
                    Bengaluru - 560078,<br />
                    Karnataka, India
                  </p>
                  
                  <a 
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-velora-secondary hover:text-velora-primary transition-colors group"
                  >
                    Get Directions
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
              
              <div className="w-full h-[1px] bg-velora-accent/15 mb-6"></div>
              
              <div className="flex items-start gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-velora-primary/10 flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-5 h-5 text-velora-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-velora-primary mb-1">Direct Inquiries</h3>
                  <a href={`tel:${phoneNumber}`} className="text-velora-muted hover:text-velora-primary transition-colors text-base font-medium">
                    {displayPhone}
                  </a>
                  <p className="text-xs text-velora-muted mt-1 font-light">Mon - Sat: 06:00 AM - 08:30 PM</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3.5">
                <Button 
                  asChild
                  size="md"
                  className="w-full sm:flex-1 text-xs"
                >
                  <a href={`tel:${phoneNumber}`}>
                    CALL US
                  </a>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  size="md"
                  className="w-full sm:flex-1 border-velora-secondary/40 text-velora-secondary hover:bg-velora-secondary hover:text-white text-xs"
                >
                  <a href={`https://wa.me/${phoneNumber.replace('+', '')}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2 inline" />
                    WHATSAPP US
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Interactive Map */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUpVariant}
            className="w-full h-full min-h-[380px] lg:min-h-[440px] rounded-xl overflow-hidden border border-velora-accent/25 shadow-sm order-1 lg:order-2 bg-white flex flex-col"
          >
            {googleMapsApiKey ? (
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0, flexGrow: 1, minHeight: "380px" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${encodedAddress}`}
                title="Velora Studio Location"
              ></iframe>
            ) : (
              <div className="flex-1 min-h-[380px] bg-velora-bg/60 flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-5 border border-velora-accent/25">
                  <MapIcon className="w-7 h-7 text-velora-accent" />
                </div>
                <h3 className="font-serif text-xl text-velora-primary mb-2">JP Nagar 7th Phase, Bengaluru</h3>
                <p className="text-velora-muted text-xs md:text-sm max-w-xs mx-auto mb-6 leading-relaxed font-light">
                  Dr. Vivekananda Layout, 4th B Main Road, SkyPool Fitness Studio Building
                </p>
                <Button asChild variant="outline" size="sm" className="text-xs">
                  <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
                    OPEN IN GOOGLE MAPS
                  </a>
                </Button>
              </div>
            )}
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
