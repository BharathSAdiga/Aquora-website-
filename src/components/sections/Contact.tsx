"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MapPin, Clock, Sparkles, Navigation, CheckCircle2, ArrowRight, Mail } from "lucide-react";

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
  message: string;
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
  const phoneRaw = "9164267977";
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

I would like to visit the studio and get directions.

Name: ${formData.fullName}
Phone: ${formData.phone}
Class: ${formData.program}
Preferred Day: ${formData.preferredDay}
Preferred Time: ${formData.batchTime}
${formData.message ? `Message: ${formData.message}\n` : ""}
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

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 md:py-40 bg-aquora-bg text-aquora-foreground relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-20 w-[450px] sm:w-[550px] h-[450px] sm:h-[550px] rounded-full bg-aquora-gold/8 blur-[140px] sm:blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[450px] sm:w-[550px] h-[450px] sm:h-[550px] rounded-full bg-aquora-sage/40 blur-[140px] sm:blur-[160px] pointer-events-none" />

      <Container className="relative z-10 px-4 sm:px-6">
        
        {/* Section Heading */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpVariant}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 md:mb-24"
        >
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] font-medium text-aquora-beige-muted block mb-3">
            Visit &amp; Connect
          </span>
          <h2 className="font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-aquora-foreground tracking-tight mb-4">
            FIND YOUR WAY TO AQUORA.
          </h2>
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-aquora-beige to-transparent mx-auto mb-5 sm:mb-6" />
          <p className="text-sm sm:text-base md:text-lg text-aquora-foreground/75 font-light max-w-xl mx-auto leading-relaxed">
            Visit our architectural sanctuary in JP Nagar 7th Phase, or enquire for a personalized trial class.
          </p>
        </motion.div>

        {/* 2-Column Luxury Layout: Left Location & Map | Right Booking Glass Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-stretch">
          
          {/* ============================================================ */}
          {/* LEFT: Location Panel & Google Maps (col-span-6) */}
          {/* ============================================================ */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpVariant}
            className="lg:col-span-6 flex flex-col justify-between glass-panel-dark rounded-3xl p-5 sm:p-10 border border-aquora-border shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          >
            <div>
              <div className="flex items-center justify-between mb-5 sm:mb-6 pb-3 sm:pb-4 border-b border-aquora-border">
                <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-aquora-beige block">
                  JP Nagar Sanctuary
                </span>
                <span className="text-[10px] uppercase tracking-widest text-aquora-muted">
                  Bengaluru
                </span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-7">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-aquora-beige/10 border border-aquora-beige/30 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={16} className="text-aquora-beige" />
                </div>
                <div>
                  <h3 className="text-[11px] sm:text-xs uppercase tracking-wider text-aquora-beige font-semibold mb-1">
                    Studio Address
                  </h3>
                  <address className="not-italic text-xs sm:text-sm text-aquora-foreground/80 leading-relaxed font-light">
                    No. 3/1, 1st Floor,<br />
                    SkyPool Fitness Studio Building,<br />
                    4th B Main Road, Dr. Vivekananda Layout,<br />
                    7th Phase, J.P. Nagar,<br />
                    Bengaluru - 560078, Karnataka, India
                  </address>
                </div>
              </div>

              {/* Contact Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {/* Studio Hours */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock size={13} className="text-aquora-beige shrink-0" />
                    <span className="text-[9.5px] sm:text-[10px] uppercase tracking-widest text-aquora-muted font-medium">
                      Studio Hours
                    </span>
                  </div>
                  <p className="text-xs text-aquora-foreground font-medium">
                    Mon – Sat: 6:00 AM – 8:30 PM
                  </p>
                  <p className="text-[10.5px] sm:text-[11px] text-aquora-muted">
                    Sun: Workshops &amp; Masterclasses
                  </p>
                </div>

                {/* Admissions */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles size={13} className="text-aquora-gold shrink-0" />
                    <span className="text-[9.5px] sm:text-[10px] uppercase tracking-widest text-aquora-gold font-medium">
                      Admissions
                    </span>
                  </div>
                  <p className="text-xs text-aquora-foreground font-medium">
                    All Ages &amp; Skill Levels
                  </p>
                  <p className="text-[10.5px] sm:text-[11px] text-aquora-muted">
                    Dedicated Ladies Batches
                  </p>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 mb-3 sm:mb-4">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-aquora-gold/15 border border-aquora-gold/30 flex items-center justify-center shrink-0">
                    <Mail size={13} className="text-aquora-gold" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[9.5px] sm:text-[10px] uppercase tracking-wider text-aquora-gold font-semibold block">
                      Email Direct
                    </span>
                    <a 
                      href="mailto:aquorayogadancestudio@gmail.com" 
                      className="text-xs sm:text-sm text-aquora-foreground hover:text-aquora-gold transition-colors truncate block"
                    >
                      aquorayogadancestudio@gmail.com
                    </a>
                  </div>
                </div>
                <a 
                  href="mailto:aquorayogadancestudio@gmail.com" 
                  className="text-[9.5px] sm:text-[10px] uppercase tracking-widest text-aquora-beige hover:text-aquora-gold font-semibold transition-colors flex items-center gap-1 shrink-0 ml-2"
                >
                  <span>Email</span>
                  <ArrowRight size={11} />
                </a>
              </div>

              {/* Instagram */}
              <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 sm:mb-8">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-aquora-purple/15 border border-aquora-purple/30 flex items-center justify-center">
                    <InstagramIcon size={13} className="text-aquora-purple-light" />
                  </div>
                  <div>
                    <span className="text-[9.5px] sm:text-[10px] uppercase tracking-wider text-aquora-purple-light font-semibold block">
                      Instagram
                    </span>
                    <span className="text-xs text-aquora-foreground">@aquorastudio</span>
                  </div>
                </div>
                <a 
                  href="https://instagram.com/aquorastudio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[9.5px] sm:text-[10px] uppercase tracking-widest text-aquora-beige hover:text-aquora-purple-light font-semibold transition-colors flex items-center gap-1"
                >
                  <span>Follow</span>
                  <ArrowRight size={11} />
                </a>
              </div>

              {/* Google Maps Container */}
              <div className="rounded-2xl overflow-hidden border dark:border-white/10 border-black/10 relative aspect-[16/9] w-full dark:bg-[#121212] bg-[#F5F2EB] mb-6 sm:mb-8">
                {googleMapsApiKey ? (
                  <iframe
                    title="AQUORA Yoga & Dance Studio Location"
                    className="w-full h-full border-0 filter invert-[0.9] hue-rotate-180 contrast-[1.1]"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${encodedAddress}`}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col justify-between p-4 sm:p-6 dark:bg-gradient-to-br dark:from-[#181818] dark:via-[#121212] dark:to-[#181818] bg-gradient-to-br from-stone-100 via-stone-50 to-stone-100 relative">
                    <div className="relative z-10">
                      <span className="text-[9.5px] sm:text-[10px] uppercase tracking-[0.25em] text-aquora-gold font-semibold block mb-1">
                        Map Reference
                      </span>
                      <h4 className="font-serif text-base sm:text-lg text-aquora-foreground mb-1">
                        SkyPool Fitness Studio Building
                      </h4>
                      <p className="text-[11px] sm:text-xs text-aquora-muted font-light">
                        4th B Main Road, Dr. Vivekananda Layout, 7th Phase, JP Nagar.
                      </p>
                    </div>

                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs uppercase tracking-[0.18em] font-semibold text-aquora-beige hover:text-white transition-colors"
                    >
                      <span>Open in Google Maps</span>
                      <ArrowRight size={12} />
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* CTAs: GET DIRECTIONS, EMAIL STUDIO */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-3 sm:pt-4 border-t border-aquora-border">
              <Button asChild variant="outline" size="sm" className="w-full justify-center tracking-[0.14em] text-[10.5px] sm:text-[10px] h-11 rounded-full border-aquora-beige/30 text-aquora-beige hover:bg-aquora-beige/20 hover:border-aquora-beige touch-press">
                <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
                  <Navigation size={12} className="mr-1.5 text-aquora-gold shrink-0" />
                  <span>GET DIRECTIONS</span>
                </a>
              </Button>
              <Button asChild variant="secondary" size="sm" className="w-full justify-center tracking-[0.14em] text-[10.5px] sm:text-[10px] h-11 rounded-full border-aquora-gold/30 text-aquora-gold hover:bg-aquora-gold/20 touch-press">
                <a href="mailto:aquorayogadancestudio@gmail.com">
                  <Mail size={12} className="mr-1.5 text-aquora-gold shrink-0" />
                  <span>EMAIL STUDIO</span>
                </a>
              </Button>
            </div>
          </motion.div>

          {/* ============================================================ */}
          {/* RIGHT: Booking Experience "START YOUR JOURNEY" (col-span-6) */}
          {/* ============================================================ */}
          <motion.div 
            id="trial" 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpVariant}
            className="lg:col-span-6 glass-panel-dark rounded-3xl p-5 sm:p-10 border border-aquora-border shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-aquora-border">
                <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-aquora-beige block">
                  Enquiry Experience
                </span>
                <span className="text-[10px] uppercase tracking-widest text-aquora-green-light font-medium">
                  Trial Classes Available
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-4xl text-aquora-foreground mb-1.5 sm:mb-2 font-normal">
                START YOUR JOURNEY.
              </h3>
              <p className="text-xs sm:text-sm text-aquora-muted mb-5 sm:mb-7 font-light">
                Submit your preferences below to initiate your enquiry. Our team will connect to coordinate your trial schedule.
              </p>

              {isSubmitted ? (
                <div className="py-10 sm:py-12 text-center space-y-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-aquora-green/15 border border-aquora-green/30 flex items-center justify-center mx-auto text-aquora-green-light shadow-xs">
                    <CheckCircle2 size={24} className="sm:w-7 sm:h-7" />
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl text-aquora-foreground font-normal">
                    Enquiry Prepared!
                  </h4>
                  <p className="text-xs sm:text-sm text-aquora-muted max-w-sm mx-auto leading-relaxed">
                    WhatsApp has opened with your formatted enquiry details. Please press send in WhatsApp to submit directly to our admissions team.
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-5 sm:mt-6 tracking-[0.16em] text-xs h-11 rounded-full touch-press"
                  >
                    SUBMIT ANOTHER ENQUIRY
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-aquora-beige font-semibold mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 dark:bg-white/5 bg-black/[0.03] dark:border-white/10 border-black/10 rounded-xl text-aquora-foreground text-xs placeholder:text-aquora-muted/60 focus:outline-none focus:border-aquora-purple/60 focus:dark:bg-white/10 focus:bg-white transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-aquora-beige font-semibold mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 dark:bg-white/5 bg-black/[0.03] dark:border-white/10 border-black/10 rounded-xl text-aquora-foreground text-xs placeholder:text-aquora-muted/60 focus:outline-none focus:border-aquora-purple/60 focus:dark:bg-white/10 focus:bg-white transition-all"
                    />
                  </div>

                  {/* Class Selection */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-aquora-beige font-semibold mb-1">
                      Select Discipline *
                    </label>
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                      {(["Yoga", "Western Dance", "Bharatanatyam"] as const).map((prog) => (
                        <button
                          type="button"
                          key={prog}
                          onClick={() => handleProgramChange(prog)}
                          className={`py-2 sm:py-2.5 px-1.5 sm:px-2 text-[9.5px] sm:text-[10px] uppercase tracking-wider font-semibold rounded-xl border transition-all cursor-pointer touch-press ${
                            formData.program === prog
                              ? prog === "Yoga" 
                                ? "bg-aquora-green/20 text-aquora-green-light border-aquora-green shadow-xs"
                                : prog === "Western Dance"
                                ? "bg-aquora-purple/20 text-aquora-purple-light border-aquora-purple shadow-xs"
                                : "bg-aquora-beige/20 text-aquora-beige border-aquora-beige shadow-xs"
                              : "dark:bg-white/5 bg-black/[0.03] text-aquora-muted dark:border-white/10 border-black/10 hover:border-black/20 dark:hover:border-white/25 hover:text-aquora-foreground"
                          }`}
                        >
                          {prog === "Bharatanatyam" ? "Classical" : prog}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Preferred Day & Time in 2 cols */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-aquora-beige font-semibold mb-1">
                        Preferred Day
                      </label>
                      <select
                        value={formData.preferredDay}
                        onChange={(e) => setFormData({ ...formData, preferredDay: e.target.value })}
                        className="w-full px-3 py-2.5 sm:py-3 dark:bg-[#181818] bg-white border dark:border-white/10 border-black/10 rounded-xl text-aquora-foreground text-xs focus:outline-none focus:border-aquora-purple/60 shadow-xs"
                      >
                        {PROGRAM_BATCH_OPTIONS[formData.program].days.map((day) => (
                          <option key={day} value={day} className="dark:bg-[#181818] bg-white dark:text-white text-stone-900">
                            {day}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-aquora-beige font-semibold mb-1">
                        Preferred Time Slot
                      </label>
                      <select
                        value={formData.batchTime}
                        onChange={(e) => setFormData({ ...formData, batchTime: e.target.value })}
                        className="w-full px-3 py-2.5 sm:py-3 dark:bg-[#181818] bg-white border dark:border-white/10 border-black/10 rounded-xl text-aquora-foreground text-xs focus:outline-none focus:border-aquora-purple/60 shadow-xs"
                      >
                        {PROGRAM_BATCH_OPTIONS[formData.program].times.map((time) => (
                          <option key={time} value={time} className="dark:bg-[#181818] bg-white dark:text-white text-stone-900">
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-aquora-beige font-semibold mb-1">
                      Message (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Share your goals, prior experience, or preferred trial date..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2 sm:py-2.5 dark:bg-white/5 bg-black/[0.03] dark:border-white/10 border-black/10 rounded-xl text-aquora-foreground text-xs placeholder:text-aquora-muted/60 focus:outline-none focus:border-aquora-purple/60 focus:dark:bg-white/10 focus:bg-white transition-all"
                    />
                  </div>

                  {/* Submit CTAs */}
                  <div className="pt-2 space-y-2.5">
                    <Button type="submit" variant="primary" size="lg" className="w-full tracking-[0.18em] text-xs font-semibold h-12 rounded-full touch-press justify-center">
                      SEND ENQUIRY VIA WHATSAPP
                    </Button>
                    <a
                      href="mailto:aquorayogadancestudio@gmail.com"
                      className="inline-flex items-center justify-center w-full py-2.5 text-[10.5px] sm:text-[11px] uppercase tracking-[0.16em] font-semibold text-aquora-gold hover:text-white transition-colors gap-2 touch-press"
                    >
                      <Mail size={13} className="text-aquora-gold" />
                      <span>EMAIL US DIRECTLY</span>
                    </a>
                  </div>

                  <p className="text-[9.5px] sm:text-[10px] text-center text-aquora-muted font-light pt-0.5">
                    * Submitting an enquiry requests availability. Confirmation is provided upon team verification.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </Container>
    </section>
  );
}
