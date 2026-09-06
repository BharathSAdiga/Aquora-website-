"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MapPin } from "lucide-react";

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-[95vh] lg:min-h-screen w-full flex items-center overflow-hidden bg-aquora-bg pt-28 pb-16 lg:py-0">
      {/* Studio Sanctuary Background with Seamless Luxury Charcoal Gradient Scrim */}
      <div className="absolute inset-0 z-0 select-none">
        {/* Desktop Gradient: smooth cinematic fade from pure charcoal on left into natural studio on right */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-aquora-bg via-aquora-bg/95 via-48% to-aquora-bg/25 z-10 w-full" />
        
        {/* Tablet Gradient */}
        <div className="hidden md:block lg:hidden absolute inset-0 bg-gradient-to-r from-aquora-bg via-aquora-bg/95 via-60% to-aquora-bg/40 z-10 w-full" />

        {/* Mobile Gradient: darker at bottom for text contrast */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-t from-aquora-bg via-aquora-bg/95 via-65% to-aquora-bg/50 z-10 h-full" />
        
        <Image
          src="/assets/aquora-studio-sanctuary.jpg"
          alt="AQUORA Yoga & Dance Studio Sanctuary Interior"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-right opacity-80 lg:opacity-90 filter contrast-[1.04]"
        />

        {/* Subtle decorative gold & emerald ambient glows */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-aquora-gold/5 blur-[140px] pointer-events-none z-10" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-aquora-green/10 blur-[150px] pointer-events-none z-10" />
      </div>

      {/* Hero Content Container */}
      <Container className="relative z-20 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Asymmetric Typography Column */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start text-left max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Refined Location Badge */}
            <motion.div 
              variants={itemVariants} 
              className="inline-flex items-center gap-2 mb-6 text-aquora-gold-light font-medium tracking-[0.3em] text-[11px] uppercase glass-pill-dark px-4 py-1.5"
            >
              <MapPin size={12} className="text-aquora-gold shrink-0" />
              <span>JP NAGAR • BENGALURU</span>
            </motion.div>

            {/* Main Brand Title & Subtitle */}
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[6.2rem] tracking-[0.1em] text-aquora-foreground leading-[0.96] mb-3">
                AQUORA
              </h1>
              <p className="text-xs sm:text-sm tracking-[0.4em] uppercase text-aquora-gold font-light">
                YOGA &amp; DANCE STUDIO
              </p>
            </motion.div>

            {/* Tagline: MOVE. BREATHE. TRANSFORM. */}
            <motion.div variants={itemVariants} className="mb-5 md:mb-6">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-aquora-foreground font-light tracking-wide leading-snug">
                MOVE. BREATHE.{" "}
                <span className="italic gold-gradient-text font-normal">
                  TRANSFORM.
                </span>
              </h2>
            </motion.div>

            {/* Supporting Copy */}
            <motion.p 
              variants={itemVariants}
              className="text-aquora-muted text-sm sm:text-base max-w-lg leading-relaxed mb-8 font-light"
            >
              A space for mindful movement, creative expression and holistic wellness.
            </motion.p>

            {/* Call to Actions */}
            <motion.div 
              variants={itemVariants} 
              className="flex flex-col sm:flex-row w-full sm:w-auto items-center gap-4 sm:gap-5"
            >
              <Button asChild size="lg" variant="primary" className="w-full sm:w-auto text-xs tracking-[0.2em]">
                <a href="#trial">
                  BOOK A TRIAL CLASS
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-xs tracking-[0.2em]">
                <a href="#classes">
                  EXPLORE CLASSES
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Floating Architectural Glass Information Panel */}
          <motion.div 
            className="lg:col-span-5 flex justify-start lg:justify-end mt-4 lg:mt-0"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.35, ease: "easeOut" }}
          >
            <div className="glass-panel-dark p-6 sm:p-8 rounded-3xl w-full max-w-sm shadow-[0_25px_50px_-15px_rgba(0,0,0,0.7)] border border-aquora-gold/25 backdrop-blur-2xl">
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-aquora-gold/20">
                <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-aquora-gold">
                  Disciplines
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-aquora-muted font-medium">
                  JP Nagar Studio
                </span>
              </div>

              <div className="space-y-3.5 mb-6">
                <div className="flex items-center justify-between text-xs tracking-wider text-aquora-foreground font-medium">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-aquora-green shadow-[0_0_8px_rgba(10,143,106,0.6)]" />
                    <span>YOGA</span>
                  </div>
                  <span className="text-[11px] text-aquora-muted font-light font-serif italic">Body &amp; Mind</span>
                </div>
                <div className="flex items-center justify-between text-xs tracking-wider text-aquora-foreground font-medium">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-aquora-purple-light shadow-[0_0_8px_rgba(192,110,224,0.6)]" />
                    <span>WESTERN DANCE</span>
                  </div>
                  <span className="text-[11px] text-aquora-muted font-light font-serif italic">Expression &amp; Rhythm</span>
                </div>
                <div className="flex items-center justify-between text-xs tracking-wider text-aquora-foreground font-medium">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-aquora-gold shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                    <span>BHARATANATYAM</span>
                  </div>
                  <span className="text-[11px] text-aquora-muted font-light font-serif italic">Tradition &amp; Grace</span>
                </div>
              </div>

              <div className="pt-4 border-t border-aquora-gold/20 flex items-center justify-between text-[11px] tracking-widest text-aquora-muted">
                <div className="flex items-center gap-1.5 text-aquora-gold-light font-medium">
                  <MapPin size={13} className="text-aquora-gold shrink-0" />
                  <span className="font-semibold text-[10px] uppercase">JP NAGAR • BENGALURU</span>
                </div>
                <a href="#schedule" className="text-[10px] uppercase text-aquora-gold hover:text-aquora-gold-light hover:underline font-semibold transition-colors">
                  Timetable →
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}

