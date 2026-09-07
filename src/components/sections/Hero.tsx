"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MapPin, Sparkles } from "lucide-react";

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
    <section className="relative min-h-[92vh] lg:min-h-screen w-full flex items-center overflow-hidden bg-aquora-bg pt-28 pb-20 lg:py-0">
      {/* Sunlit Architectural Studio Sanctuary Background with Dark Overlays */}
      <div className="absolute inset-0 z-0 select-none">
        {/* Desktop Gradient: smooth fade from background on left behind text into clear view on right */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-aquora-bg via-aquora-bg/85 via-42% to-transparent z-10 w-full" />
        
        {/* Tablet Gradient */}
        <div className="hidden md:block lg:hidden absolute inset-0 bg-gradient-to-r from-aquora-bg via-aquora-bg/88 via-50% to-aquora-bg/20 z-10 w-full" />

        {/* Mobile Gradient: soft upward fade for text contrast */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-t from-aquora-bg via-aquora-bg/85 via-55% to-aquora-bg/25 z-10 h-full" />
        
        <Image
          src="/assets/aquora_hero_indian_dancer.jpg"
          alt="AQUORA Yoga & Dance Studio Sanctuary - Indian dancer practicing mindful movement"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_center] lg:object-[78%_center] opacity-80 lg:opacity-90 dark:opacity-70 dark:lg:opacity-80"
        />

        {/* Atmospheric Ambient Glows: Green & Purple */}
        <div className="absolute top-16 left-10 w-96 h-96 rounded-full bg-aquora-green/15 blur-[140px] pointer-events-none z-10" />
        <div className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-aquora-purple/15 blur-[130px] pointer-events-none z-10" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-aquora-gold/5 blur-[120px] pointer-events-none z-10" />
      </div>

      {/* Hero Content Container */}
      <Container className="relative z-20 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Asymmetric Editorial Typography Column */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start text-left max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Small Eyebrow with Sparkle */}
            <motion.div 
              variants={itemVariants} 
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full glass-pill-dark dark:text-aquora-beige text-aquora-green-light font-medium tracking-[0.28em] text-[10px] uppercase shadow-xs border dark:border-aquora-beige/15 border-aquora-green/25"
            >
              <Sparkles size={11} className="dark:text-aquora-gold text-aquora-green-light" />
              <span>AQUORA YOGA &amp; DANCE STUDIO</span>
            </motion.div>

            {/* Huge Heading */}
            <motion.h1 
              variants={itemVariants}
              className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[6.2rem] tracking-tight text-aquora-foreground leading-[1.0] mb-6"
            >
              MOVE.<br />
              BREATHE.<br />
              <span className="italic font-light gold-gradient-text">
                TRANSFORM.
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p 
              variants={itemVariants}
              className="text-aquora-foreground/75 text-base sm:text-lg max-w-lg leading-relaxed mb-9 font-light"
            >
              Yoga, dance and traditional movement, reimagined for modern life in our architectural sanctuary in JP Nagar.
            </motion.p>

            {/* Call to Actions */}
            <motion.div 
              variants={itemVariants} 
              className="flex flex-col sm:flex-row w-full sm:w-auto items-center gap-4 sm:gap-5"
            >
              <Button asChild size="lg" variant="primary" className="w-full sm:w-auto text-xs tracking-[0.22em]">
                <a href="#classes">
                  EXPLORE CLASSES
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto text-xs tracking-[0.22em]">
                <a href="#contact">
                  VISIT AQUORA
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
            <div className="glass-panel-dark p-6 sm:p-8 rounded-3xl w-full max-w-sm shadow-[0_25px_60px_-10px_rgba(0,0,0,0.8)] border border-aquora-beige/15">
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-aquora-border">
                <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-aquora-beige">
                  Disciplines
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-aquora-muted font-medium">
                  Dark Sanctuary
                </span>
              </div>

              <div className="space-y-3.5 mb-6">
                <div className="flex items-center justify-between text-xs tracking-wider text-aquora-foreground font-medium">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-aquora-green shadow-[0_0_8px_rgba(58,125,94,0.8)]" />
                    <span>YOGA</span>
                  </div>
                  <span className="text-[11px] text-aquora-green-light font-light font-serif italic">Body &amp; Mind</span>
                </div>
                <div className="flex items-center justify-between text-xs tracking-wider text-aquora-foreground font-medium">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-aquora-purple shadow-[0_0_8px_rgba(125,76,141,0.8)]" />
                    <span>DANCE</span>
                  </div>
                  <span className="text-[11px] text-aquora-purple-light font-light font-serif italic">Expression &amp; Rhythm</span>
                </div>
                <div className="flex items-center justify-between text-xs tracking-wider text-aquora-foreground font-medium">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-aquora-beige shadow-[0_0_8px_rgba(232,213,181,0.8)]" />
                    <span>BHARATANATYAM</span>
                  </div>
                  <span className="text-[11px] text-aquora-beige font-light font-serif italic">Tradition &amp; Grace</span>
                </div>
              </div>

              <div className="pt-4 border-t border-aquora-border flex items-center justify-between text-[11px] tracking-widest text-aquora-muted">
                <div className="flex items-center gap-1.5 text-aquora-beige font-medium">
                  <MapPin size={13} className="text-aquora-gold shrink-0" />
                  <span className="font-semibold text-[10px] uppercase">JP NAGAR • BENGALURU</span>
                </div>
                <a href="#schedule" className="text-[10px] uppercase text-aquora-beige hover:text-white hover:underline font-semibold transition-colors">
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

