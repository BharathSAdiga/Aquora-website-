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
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative min-h-[92vh] md:min-h-screen w-full flex items-end md:items-center overflow-hidden bg-velora-bg">
      {/* Studio Visualization Background */}
      <div className="absolute inset-0 z-0 select-none">
        {/* Desktop Gradient: gentle scrim from left to right */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-velora-bg via-velora-bg/95 via-45% to-transparent z-10 w-full md:w-[65%] lg:w-[56%]" />
        
        {/* Mobile Gradient: darker at bottom to ensure high contrast */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-t from-velora-bg via-velora-bg/95 via-55% to-transparent z-10 h-full" />
        
        <Image
          src="/assets/studio-main.jpg"
          alt="Velora Yoga and Dance Studio Interior"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center md:object-right"
        />
      </div>

      {/* Content Container */}
      <Container className="relative z-20 pb-16 pt-28 md:py-32 h-full flex flex-col justify-end md:justify-center">
        <motion.div 
          className="max-w-2xl flex flex-col items-center text-center md:items-start md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Subtle Location Indicator */}
          <motion.div 
            variants={itemVariants} 
            className="inline-flex items-center gap-2 mb-6 md:mb-8 text-velora-beige font-medium tracking-[0.2em] text-[11px] uppercase bg-velora-surface/90 px-4 py-1.5 rounded-full border border-velora-purple/40 backdrop-blur-sm shadow-md"
          >
            <MapPin size={13} className="text-velora-purple-light" />
            <span>JP Nagar • Bengaluru</span>
          </motion.div>

          {/* Main Typography */}
          <motion.div variants={itemVariants} className="mb-6 md:mb-10">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] text-velora-beige tracking-wide mb-3">
              VELORA
            </h1>
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-velora-purple-light font-semibold">
              Yoga &amp; Dance Studio
            </p>
          </motion.div>

          {/* Tagline & Description */}
          <motion.div variants={itemVariants} className="space-y-4 mb-8 md:mb-10">
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl text-velora-foreground leading-snug font-normal">
              Move Smoothly.<br className="hidden md:block" /> Breathe Deeply.<br className="hidden md:block" /> <span className="italic text-velora-beige font-light">Live Fully.</span>
            </h2>
            <p className="text-velora-muted text-sm md:text-base max-w-[460px] leading-relaxed mx-auto md:mx-0 font-normal">
              A space for mindful movement, creative expression and traditional artistry.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col sm:flex-row w-full sm:w-auto items-center gap-3.5 md:gap-5"
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="#trial">
                BOOK A TRIAL
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
