"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";

export function About() {
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-28 md:py-40 bg-aquora-bg text-aquora-foreground relative overflow-hidden border-t border-aquora-gold/15">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-aquora-purple-subtle/50 blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-aquora-green-subtle/50 blur-[150px] pointer-events-none" />

      <Container>
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="text-center max-w-4xl mx-auto mb-20 md:mb-32"
        >
          <span className="text-xs uppercase tracking-[0.35em] font-medium text-aquora-gold mb-4 block">
            Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-aquora-foreground leading-[1.18] mb-8 tracking-wide">
            <span className="block font-light">MOVE WITH PURPOSE.</span>
            <span className="block font-light">BREATHE WITH INTENTION.</span>
            <span className="block italic gold-gradient-text font-normal">EXPRESS WITH FREEDOM.</span>
          </h2>
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-aquora-gold/70 to-transparent mx-auto mb-8" />
          <p className="text-base sm:text-lg text-aquora-muted font-light leading-relaxed max-w-2xl mx-auto">
            AQUORA is a sanctuary bringing together the grounding discipline of <span className="text-aquora-foreground font-normal">Yoga</span>, the kinetic energy of <span className="text-aquora-foreground font-normal">Western Dance</span>, and the timeless heritage of <span className="text-aquora-foreground font-normal">Bharatanatyam</span> in JP Nagar, Bengaluru.
          </p>
        </motion.div>

        {/* Editorial Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Large Photography with Thin Gold Border */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none border border-aquora-gold/25 bg-aquora-surface shadow-[0_25px_60px_rgba(0,0,0,0.8)] rounded-3xl overflow-hidden">
              <Image 
                src="/assets/aquora-studio-sanctuary.jpg" 
                alt="AQUORA Yoga & Dance Studio Sanctuary Atmosphere"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter contrast-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-aquora-black/80 via-transparent to-transparent" />

              {/* Inset Brand Caption */}
              <div className="absolute bottom-6 left-6 right-6 p-5 glass-panel-dark rounded-2xl">
                <p className="font-serif italic text-aquora-gold-light text-sm sm:text-base leading-snug">
                  &ldquo;A dedicated space where mindful stillness meets the joy of motion.&rdquo;
                </p>
                <span className="text-[10px] uppercase tracking-[0.3em] text-aquora-muted mt-2 block font-light">
                  AQUORA YOGA &amp; DANCE STUDIO
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Three Disciplines Editorial Layout */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="lg:col-span-6 space-y-10 lg:pl-4"
          >
            {/* Discipline 1: Yoga */}
            <div className="border-b border-aquora-gold/15 pb-8">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-serif text-3xl sm:text-4xl text-aquora-gold/35 font-light">01</span>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-aquora-foreground tracking-wide">
                    Yoga
                  </h3>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-aquora-green-light font-medium block">
                    For Body &amp; Mind
                  </span>
                </div>
              </div>
              <p className="text-aquora-muted text-sm sm:text-base font-light leading-relaxed pl-10 sm:pl-12">
                Ground your daily routine with mindful asanas, conscious breathwork, and guided meditation. Build functional flexibility, physical strength, and inner composure.
              </p>
            </div>

            {/* Discipline 2: Western Dance */}
            <div className="border-b border-aquora-gold/15 pb-8">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-serif text-3xl sm:text-4xl text-aquora-gold/35 font-light">02</span>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-aquora-foreground tracking-wide">
                    Western Dance
                  </h3>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-aquora-purple-light font-medium block">
                    For Passion
                  </span>
                </div>
              </div>
              <p className="text-aquora-muted text-sm sm:text-base font-light leading-relaxed pl-10 sm:pl-12">
                High-energy choreography, contemporary rhythms, and dynamic body movement designed to ignite confidence, musicality, and joy across all age groups.
              </p>
            </div>

            {/* Discipline 3: Bharatanatyam */}
            <div>
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-serif text-3xl sm:text-4xl text-aquora-gold/35 font-light">03</span>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-aquora-foreground tracking-wide">
                    Bharatanatyam
                  </h3>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-aquora-gold font-medium block">
                    For Tradition
                  </span>
                </div>
              </div>
              <p className="text-aquora-muted text-sm sm:text-base font-light leading-relaxed pl-10 sm:pl-12">
                Honoring classical Indian tradition with disciplined footwork, expressive abhinaya, and authentic mudras under the guidance of seasoned artists.
              </p>
            </div>

          </motion.div>

        </div>
      </Container>
    </section>
  );
}
