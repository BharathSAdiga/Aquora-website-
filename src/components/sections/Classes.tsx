"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Clock, Calendar, Sparkles } from "lucide-react";

export function Classes() {
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <section id="classes" className="py-28 md:py-40 bg-aquora-bg text-aquora-foreground overflow-hidden border-b border-aquora-gold/20">
      <Container>
        {/* Section Heading */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpVariant}
          className="text-center max-w-3xl mx-auto mb-20 md:mb-28"
        >
          <span className="text-xs uppercase tracking-[0.35em] font-medium text-aquora-gold mb-3 block">
            Signature Disciplines
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-aquora-foreground tracking-wide mb-4">
            OUR PROGRAMS
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-aquora-gold to-transparent mx-auto mb-6" />
          <p className="text-aquora-muted text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed">
            Thoughtfully structured batches instructed by master practitioners in an inspiring JP Nagar sanctuary.
          </p>
        </motion.div>

        {/* Three Editorial Luxury Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 items-stretch">
          
          {/* ============================================================ */}
          {/* 1. YOGA — For Body & Mind (Male Yogi) */}
          {/* ============================================================ */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpVariant}
            className="group relative flex flex-col justify-between bg-aquora-surface/90 border border-white/10 hover:border-aquora-gold/60 transition-all duration-500 rounded-none overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
          >
            <div>
              {/* Image Area with Realistic Male Practitioner */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-aquora-black">
                <Image 
                  src="/assets/aquora-yoga-photo.png" 
                  alt="AQUORA Yoga - Male practitioner in meditation" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-aquora-surface via-aquora-surface/30 to-transparent" />
                
                {/* Program Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-aquora-black/85 backdrop-blur-md border border-aquora-green/30 text-[10px] uppercase tracking-[0.25em] text-aquora-green-light font-medium">
                    <Sparkles size={10} className="text-aquora-green-light" />
                    Mind &amp; Breath
                  </span>
                </div>
              </div>

              {/* Panel Content */}
              <div className="p-7 sm:p-9">
                <div className="mb-6">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-aquora-gold/80 block mb-1.5">
                    Program 01
                  </span>
                  <h3 className="font-serif text-3xl text-aquora-foreground tracking-wide group-hover:text-aquora-gold transition-colors duration-300">
                    YOGA
                  </h3>
                  <p className="font-serif italic text-aquora-gold text-base">
                    For Body &amp; Mind
                  </p>
                </div>

                <p className="text-aquora-muted text-xs sm:text-sm font-light leading-relaxed mb-6">
                  Build a healthier mind, stronger body, and calmer spirit through mindful asanas, alignment, and focused pranayama.
                </p>

                {/* Fine Gold Separator */}
                <div className="w-full h-[1px] bg-aquora-gold/20 mb-6" />

                {/* Approved Batch Information */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar size={14} className="text-aquora-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-aquora-foreground">
                        Morning Batches
                      </h4>
                      <p className="text-[11px] text-aquora-muted">Monday – Saturday</p>
                      <div className="flex flex-col gap-1 mt-1 font-mono text-xs text-aquora-gold-light">
                        <span>06:00 AM – 07:00 AM</span>
                        <span>07:00 AM – 08:00 AM</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-aquora-gold/15">
                    <Clock size={14} className="text-aquora-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-aquora-foreground">
                        Exclusive Ladies Batch
                      </h4>
                      <p className="text-[11px] text-aquora-muted">Monday – Saturday</p>
                      <p className="text-xs text-aquora-gold-light font-mono mt-1">09:00 AM – 10:00 AM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-aquora-gold/15">
                    <Clock size={14} className="text-aquora-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-aquora-foreground">
                        Evening Batch
                      </h4>
                      <p className="text-[11px] text-aquora-muted">Monday – Saturday</p>
                      <p className="text-xs text-aquora-gold-light font-mono mt-1">07:30 PM – 08:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card Action */}
            <div className="p-7 sm:p-9 pt-0">
              <Button asChild variant="outline" size="sm" className="w-full tracking-[0.18em] text-[11px]">
                <a href="#trial">
                  ENQUIRE FOR YOGA
                </a>
              </Button>
            </div>
          </motion.div>

          {/* ============================================================ */}
          {/* 2. WESTERN DANCE — For Passion (Female Dancer) */}
          {/* ============================================================ */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpVariant}
            className="group relative flex flex-col justify-between bg-aquora-surface/90 border border-white/10 hover:border-aquora-gold/60 transition-all duration-500 rounded-none overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
          >
            <div>
              {/* Image Area with Realistic Female Western Dancer */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-aquora-black">
                <Image 
                  src="/assets/aquora-dance-photo.png" 
                  alt="AQUORA Western Dance - Female dancer in dynamic pose" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-aquora-surface via-aquora-surface/30 to-transparent" />
                
                {/* Program Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-aquora-black/85 backdrop-blur-md border border-aquora-purple/30 text-[10px] uppercase tracking-[0.25em] text-aquora-purple-light font-medium">
                    <Sparkles size={10} className="text-aquora-purple-light" />
                    Kinetic Rhythm
                  </span>
                </div>
              </div>

              {/* Panel Content */}
              <div className="p-7 sm:p-9">
                <div className="mb-6">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-aquora-gold/80 block mb-1.5">
                    Program 02
                  </span>
                  <h3 className="font-serif text-3xl text-aquora-foreground tracking-wide group-hover:text-aquora-gold transition-colors duration-300">
                    WESTERN DANCE
                  </h3>
                  <p className="font-serif italic text-aquora-gold text-base">
                    For Passion
                  </p>
                </div>

                <p className="text-aquora-muted text-xs sm:text-sm font-light leading-relaxed mb-6">
                  Ignite your passion, rhythm, and stage confidence with contemporary, hip-hop, and dynamic modern choreography for all ages.
                </p>

                {/* Fine Gold Separator */}
                <div className="w-full h-[1px] bg-aquora-gold/20 mb-6" />

                {/* Approved Batch Information */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar size={14} className="text-aquora-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-aquora-foreground">
                        Schedule Days
                      </h4>
                      <p className="text-xs text-aquora-foreground/80 font-medium mt-0.5">Monday | Wednesday | Friday</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-aquora-gold/15">
                    <Clock size={14} className="text-aquora-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-aquora-foreground mb-2">
                        Available Batches
                      </h4>
                      <div className="space-y-1.5 font-mono text-xs text-aquora-gold-light">
                        <div className="px-2.5 py-1 bg-aquora-surface-card border border-white/10 w-fit">
                          04:00 PM – 05:00 PM
                        </div>
                        <div className="px-2.5 py-1 bg-aquora-surface-card border border-white/10 w-fit">
                          05:00 PM – 06:00 PM
                        </div>
                        <div className="px-2.5 py-1 bg-aquora-surface-card border border-white/10 w-fit">
                          06:00 PM – 07:00 PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card Action */}
            <div className="p-7 sm:p-9 pt-0">
              <Button asChild variant="outline" size="sm" className="w-full tracking-[0.18em] text-[11px]">
                <a href="#trial">
                  ENQUIRE FOR DANCE
                </a>
              </Button>
            </div>
          </motion.div>

          {/* ============================================================ */}
          {/* 3. BHARATANATYAM — For Tradition (Female Dancer) */}
          {/* ============================================================ */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpVariant}
            className="group relative flex flex-col justify-between bg-aquora-surface/90 border border-white/10 hover:border-aquora-gold/60 transition-all duration-500 rounded-none overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
          >
            <div>
              {/* Image Area with Realistic Female Bharatanatyam Dancer */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-aquora-black">
                <Image 
                  src="/assets/aquora-bharatanatyam-photo.png" 
                  alt="AQUORA Bharatanatyam - Classical Indian dancer in purple and gold silk costume" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-aquora-surface via-aquora-surface/30 to-transparent" />
                
                {/* Program Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-aquora-black/85 backdrop-blur-md border border-aquora-gold/30 text-[10px] uppercase tracking-[0.25em] text-aquora-gold-light font-medium">
                    <Sparkles size={10} className="text-aquora-gold" />
                    Classical Heritage
                  </span>
                </div>
              </div>

              {/* Panel Content */}
              <div className="p-7 sm:p-9">
                <div className="mb-6">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-aquora-gold/80 block mb-1.5">
                    Program 03
                  </span>
                  <h3 className="font-serif text-3xl text-aquora-foreground tracking-wide group-hover:text-aquora-gold transition-colors duration-300">
                    BHARATANATYAM
                  </h3>
                  <p className="font-serif italic text-aquora-gold text-base">
                    For Tradition
                  </p>
                </div>

                <p className="text-aquora-muted text-xs sm:text-sm font-light leading-relaxed mb-6">
                  Master the sacred grammar of Indian classical dance—from precise aramandi footwork and mudras to expressive storytelling abhinaya.
                </p>

                {/* Fine Gold Separator */}
                <div className="w-full h-[1px] bg-aquora-gold/20 mb-6" />

                {/* Approved Batch Information */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar size={14} className="text-aquora-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-aquora-foreground">
                        Schedule Days
                      </h4>
                      <p className="text-xs text-aquora-foreground/80 font-medium mt-0.5">Tuesday | Thursday | Saturday</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-aquora-gold/15">
                    <Clock size={14} className="text-aquora-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-aquora-foreground mb-2">
                        Available Batches
                      </h4>
                      <div className="space-y-1.5 font-mono text-xs text-aquora-gold-light">
                        <div className="px-2.5 py-1 bg-aquora-surface-card border border-white/10 w-fit">
                          04:00 PM – 05:00 PM
                        </div>
                        <div className="px-2.5 py-1 bg-aquora-surface-card border border-white/10 w-fit">
                          05:00 PM – 06:00 PM
                        </div>
                        <div className="px-2.5 py-1 bg-aquora-surface-card border border-white/10 w-fit">
                          06:00 PM – 07:00 PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card Action */}
            <div className="p-7 sm:p-9 pt-0">
              <Button asChild variant="outline" size="sm" className="w-full tracking-[0.18em] text-[11px]">
                <a href="#trial">
                  ENQUIRE FOR BHARATANATYAM
                </a>
              </Button>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
