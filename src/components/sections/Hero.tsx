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
        staggerChildren: 0.16,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-[95vh] lg:min-h-screen w-full flex items-center overflow-hidden bg-aquora-bg">
      {/* Studio Sanctuary Background with Seamless Luxury Charcoal Gradient Scrim */}
      <div className="absolute inset-0 z-0 select-none">
        {/* Desktop Gradient: smooth, cinematic fade from pure charcoal on left into natural studio on right */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-aquora-bg via-aquora-bg/95 via-45% to-aquora-bg/30 z-10 w-full" />
        
        {/* Tablet Gradient */}
        <div className="hidden md:block lg:hidden absolute inset-0 bg-gradient-to-r from-aquora-bg via-aquora-bg/95 via-60% to-aquora-bg/40 z-10 w-full" />

        {/* Mobile Gradient: darker at bottom for maximum text contrast */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-t from-aquora-bg via-aquora-bg/95 via-65% to-aquora-bg/50 z-10 h-full" />
        
        <Image
          src="/assets/aquora-studio-sanctuary.jpg"
          alt="AQUORA Yoga & Dance Studio Sanctuary Interior"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-right opacity-75 lg:opacity-85 filter contrast-[1.04]"
        />

        {/* Subtle decorative gold ambient glow */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-aquora-gold/5 blur-[140px] pointer-events-none z-10" />
      </div>

      {/* Hero Content Container */}
      <Container className="relative z-20 pt-32 pb-20 md:pt-40 md:pb-28 lg:py-44 h-full flex flex-col justify-center">
        <motion.div 
          className="max-w-2xl flex flex-col items-center text-center md:items-start md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Refined Location Badge */}
          <motion.div 
            variants={itemVariants} 
            className="inline-flex items-center gap-2 mb-8 text-aquora-gold-light font-medium tracking-[0.3em] text-[11px] uppercase bg-aquora-surface/80 px-4 py-1.5 border border-aquora-gold/30 backdrop-blur-md shadow-sm"
          >
            <MapPin size={12} className="text-aquora-gold shrink-0" />
            <span>JP NAGAR • BENGALURU</span>
          </motion.div>

          {/* Main Brand Title & Subtitle */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] tracking-[0.12em] text-aquora-foreground leading-[0.95] mb-4">
              AQUORA
            </h1>
            <p className="text-xs sm:text-sm tracking-[0.4em] uppercase text-aquora-gold font-light">
              YOGA &amp; DANCE STUDIO
            </p>
          </motion.div>

          {/* Tagline: MOVE. BREATHE. TRANSFORM. */}
          <motion.div variants={itemVariants} className="mb-6 md:mb-8">
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
            className="text-aquora-muted text-sm sm:text-base max-w-lg leading-relaxed mb-10 font-light"
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
      </Container>
    </section>
  );
}
