"use client";

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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen w-full flex items-end md:items-center overflow-hidden bg-velora-bg">
      {/* Background Image Wrapper */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        {/* Desktop Image Setup: Full cover with left-side fade for text */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-velora-bg via-velora-bg/80 to-transparent z-10 w-full md:w-[60%]" />
        
        {/* Mobile Image Setup: Top portion fade for bottom text */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-t from-velora-bg via-velora-bg/95 to-transparent z-10 h-full" />
        
        <img
          src="/assets/studio-view.jpg"
          alt="Velora Yoga & Dance Studio"
          className="w-full h-full object-cover object-center md:object-right"
        />
      </motion.div>

      {/* Content Container */}
      <Container className="relative z-20 pb-16 pt-32 md:py-32 h-full flex flex-col justify-end md:justify-center">
        <motion.div 
          className="max-w-2xl flex flex-col items-center text-center md:items-start md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Subtle Location Indicator */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6 md:mb-8 text-velora-secondary font-medium tracking-widest text-xs uppercase bg-velora-secondary/10 px-4 py-2 rounded-full border border-velora-secondary/20">
            <MapPin size={14} />
            <span>JP Nagar • Bengaluru</span>
          </motion.div>

          {/* Main Typography */}
          <motion.div variants={itemVariants} className="mb-8 md:mb-12">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] text-velora-primary tracking-wide mb-2 md:mb-4">
              VELORA
            </h1>
            <p className="text-sm md:text-base tracking-[0.25em] md:tracking-[0.3em] uppercase text-velora-secondary font-semibold">
              Yoga & Dance Studio
            </p>
          </motion.div>

          {/* Tagline & Description */}
          <motion.div variants={itemVariants} className="space-y-6 mb-10 md:mb-12">
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl text-velora-foreground leading-tight">
              Move Smoothly.<br className="hidden md:block" /> Breathe Deeply.<br className="hidden md:block" /> Live Fully.
            </h2>
            <p className="text-velora-muted text-sm md:text-lg max-w-[480px] leading-relaxed mx-auto md:mx-0">
              A space for mindful movement, creative expression and traditional artistry.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col sm:flex-row w-full sm:w-auto items-center gap-4 md:gap-6"
          >
            <Button size="lg" className="w-full sm:w-auto">
              Book a Trial
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Explore Classes
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
