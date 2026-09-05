"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MapPin } from "lucide-react";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative min-h-[94vh] md:min-h-screen w-full flex items-end md:items-center overflow-hidden bg-aquora-bg">
      {/* Cinematic Studio Image Background with Layered Dark Gradient */}
      <div className="absolute inset-0 z-0 select-none">
        {/* Desktop Gradient: dramatic dark charcoal vignette across left and center */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-aquora-bg via-aquora-bg/95 via-48% to-aquora-bg/30 z-10 w-full md:w-[70%] lg:w-[62%]" />
        
        {/* Full image subtle dark tint to keep focus on foreground text */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Mobile Gradient: darker at bottom to ensure high contrast */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-t from-aquora-bg via-aquora-bg/95 via-55% to-transparent z-10 h-full" />
        
        <Image
          src="/assets/studio-view.jpg"
          alt="AQUORA Yoga and Dance Studio Interior"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center md:object-right opacity-80"
        />

        {/* Subtle decorative gold ambient glow in top corner */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-aquora-gold/5 blur-[120px] pointer-events-none z-10" />
      </div>

      {/* Content Container */}
      <Container className="relative z-20 pb-16 pt-28 md:py-36 h-full flex flex-col justify-end md:justify-center">
        <motion.div 
          className="max-w-2xl flex flex-col items-center text-center md:items-start md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Location Badge */}
          <motion.div 
            variants={itemVariants} 
            className="inline-flex items-center gap-2 mb-6 md:mb-8 text-aquora-gold-light font-medium tracking-[0.25em] text-[11px] uppercase bg-aquora-surface/90 px-4 py-1.5 rounded-full border border-aquora-gold/30 backdrop-blur-md shadow-md"
          >
            <MapPin size={13} className="text-aquora-gold" />
            <span>JP NAGAR • BENGALURU</span>
          </motion.div>

          {/* Brand Headline */}
          <motion.div variants={itemVariants} className="mb-4 md:mb-6">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider text-aquora-foreground leading-none mb-3">
              AQUORA
            </h1>
            <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-aquora-gold font-medium">
              YOGA &amp; DANCE STUDIO
            </p>
          </motion.div>

          {/* Core Tagline: MOVE. BREATHE. TRANSFORM. */}
          <motion.div variants={itemVariants} className="mb-6 md:mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-aquora-foreground font-light tracking-wide leading-tight">
              MOVE. <br className="hidden sm:inline" />
              BREATHE. <br className="hidden sm:inline" />
              <span className="italic gold-gradient-text font-normal">TRANSFORM.</span>
            </h2>
          </motion.div>

          {/* Supporting line */}
          <motion.p 
            variants={itemVariants}
            className="text-aquora-muted text-sm md:text-base max-w-lg leading-relaxed mb-8 md:mb-10 font-light"
          >
            A space for mindful movement, creative expression and holistic wellness.
          </motion.p>

          {/* Call to Actions */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col sm:flex-row w-full sm:w-auto items-center gap-4 md:gap-5"
          >
            <Button asChild size="lg" variant="primary" className="w-full sm:w-auto">
              <a href="#trial">
                BOOK A TRIAL CLASS
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
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
