"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Clock, Calendar, Sparkles, ArrowUpRight } from "lucide-react";

export function Classes() {
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <section id="classes" className="py-20 sm:py-28 md:py-40 bg-aquora-bg text-aquora-foreground overflow-hidden relative border-b border-aquora-border section-optimize">
      {/* Background ambient lighting visible through dark translucent glass */}
      <div className="hidden md:block absolute top-1/4 -left-20 w-[550px] h-[550px] rounded-full bg-aquora-green/10 blur-[160px] pointer-events-none z-0" />
      <div className="hidden md:block absolute top-1/2 -right-20 w-[550px] h-[550px] rounded-full bg-aquora-purple/10 blur-[160px] pointer-events-none z-0" />
      <div className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[450px] rounded-full bg-aquora-gold/5 blur-[160px] pointer-events-none z-0" />

      <Container className="relative z-10 px-4 sm:px-6">
        {/* Section Heading */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpVariant}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 md:mb-28"
        >
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] font-medium text-aquora-beige-muted block mb-3">
            Signature Disciplines
          </span>
          <h2 className="font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-aquora-foreground tracking-tight mb-4">
            FIND YOUR MOVEMENT.
          </h2>
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-aquora-beige to-transparent mx-auto mb-5 sm:mb-6" />
          <p className="text-aquora-foreground/75 text-sm sm:text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed">
            Three distinct paths of expression, physical mastery, and inner balance guided by master practitioners in JP Nagar.
          </p>
        </motion.div>

        {/* Three Large Visual Experiences */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch relative z-10">
          
          {/* ============================================================ */}
          {/* 1. YOGA — Body & Mind (Green Highlight) */}
          {/* ============================================================ */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpVariant}
            className="group relative flex flex-col justify-between rounded-3xl overflow-hidden glass-panel-dark transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(58,125,94,0.3)] border border-aquora-green/20 hover:border-aquora-green/50"
          >
            {/* Corner Decorative Accents */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-aquora-green/40 pointer-events-none z-20" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-aquora-green/40 pointer-events-none z-20" />

            <div>
              {/* Large Imagery with Subtle Movement on Hover */}
              <div className="relative aspect-[4/3] sm:aspect-[3/4] w-full overflow-hidden bg-aquora-surface">
                <Image 
                  src="/assets/aquora_yoga_indian.jpg" 
                  alt="AQUORA Yoga - Mindful practice guided by certified Indian instructor" 
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t dark:from-[#141414] dark:via-[#141414]/40 from-black/55 via-black/20 to-transparent" />
                
                {/* Floating Discipline Badge */}
                <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 dark:bg-[#101010]/85 bg-black/60 backdrop-blur-md border border-aquora-green/30 text-[9.5px] sm:text-[10px] uppercase tracking-[0.22em] text-aquora-green-light font-semibold shadow-xs rounded-full">
                    <Sparkles size={11} className="text-aquora-green-light" />
                    Mind &amp; Breath
                  </span>
                </div>
              </div>

              {/* Glass Information Overlay */}
              <div className="p-5 sm:p-9 -mt-10 sm:-mt-16 relative z-10 mx-2 sm:mx-3 mb-3 glass-card-info rounded-2xl transition-all duration-500 hover:border-aquora-green/40">
                <div className="mb-3 sm:mb-4">
                  <span className="text-[9.5px] sm:text-[10px] uppercase tracking-[0.3em] font-semibold text-aquora-green-light block mb-1">
                    DISCIPLINE 01
                  </span>
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-2xl sm:text-4xl text-aquora-foreground tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                      YOGA
                    </h3>
                    <ArrowUpRight size={18} className="text-aquora-muted group-hover:text-aquora-green-light transition-colors" />
                  </div>
                  <p className="font-serif italic text-aquora-green-light/90 text-sm sm:text-base">
                    Body &amp; Mind
                  </p>
                </div>

                <p className="text-aquora-muted text-xs sm:text-sm font-light leading-relaxed mb-4 sm:mb-5">
                  Build a healthier mind, stronger body, and calmer spirit through mindful asanas, functional alignment, and pranayama.
                </p>

                {/* Animated Green Line appearing on hover */}
                <div className="w-12 group-hover:w-full h-[1px] bg-aquora-green transition-all duration-500 mb-4 sm:mb-5" />

                {/* Approved Batch Information */}
                <div className="space-y-3 text-aquora-foreground">
                  <div className="flex items-start gap-2.5">
                    <Calendar size={13} className="text-aquora-green-light shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[11px] font-semibold uppercase tracking-wider text-aquora-foreground">
                        Morning Batches
                      </h4>
                      <p className="text-[10px] text-aquora-muted font-light">Monday – Saturday</p>
                      <div className="flex flex-wrap gap-1 mt-1.5 font-mono text-[11px]">
                        <span className="px-2.5 py-1 batch-chip rounded-md">06:00 AM – 07:00 AM</span>
                        <span className="px-2.5 py-1 batch-chip rounded-md">07:00 AM – 08:00 AM</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 pt-2.5 border-t dark:border-white/5 border-black/[0.06]">
                    <Clock size={13} className="text-aquora-green-light shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[11px] font-semibold uppercase tracking-wider text-aquora-foreground">
                        Exclusive Ladies Batch
                      </h4>
                      <p className="text-[10px] text-aquora-muted font-light">Monday – Saturday</p>
                      <p className="text-[11px] font-mono mt-1.5 px-2.5 py-1 batch-chip rounded-md w-fit">
                        09:00 AM – 10:00 AM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 pt-2.5 border-t dark:border-white/5 border-black/[0.06]">
                    <Clock size={13} className="text-aquora-green-light shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[11px] font-semibold uppercase tracking-wider text-aquora-foreground">
                        Evening Batch
                      </h4>
                      <p className="text-[10px] text-aquora-muted font-light">Monday – Saturday</p>
                      <p className="text-[11px] font-mono mt-1.5 px-2.5 py-1 batch-chip rounded-md w-fit">
                        07:30 PM – 08:30 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card Action */}
            <div className="p-5 sm:p-9 pt-0">
              <Button asChild variant="outline" size="sm" className="w-full tracking-[0.16em] text-[11px] h-11 rounded-full border-aquora-green/30 text-aquora-green-light hover:bg-aquora-green/20 hover:border-aquora-green hover:text-white touch-press justify-center">
                <a href="#contact">
                  ENQUIRE FOR YOGA
                </a>
              </Button>
            </div>
          </motion.div>

          {/* ============================================================ */}
          {/* 2. WESTERN DANCE — Movement & Expression (Purple Highlight) */}
          {/* ============================================================ */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpVariant}
            className="group relative flex flex-col justify-between rounded-3xl overflow-hidden glass-panel-dark transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(125,76,141,0.3)] border border-aquora-purple/20 hover:border-aquora-purple/50"
          >
            {/* Corner Decorative Accents */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-aquora-purple/40 pointer-events-none z-20" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-aquora-purple/40 pointer-events-none z-20" />

            <div>
              {/* Large Imagery with Subtle Movement on Hover */}
              <div className="relative aspect-[4/3] sm:aspect-[3/4] w-full overflow-hidden bg-aquora-surface">
                <Image 
                  src="/assets/aquora_dance_male_indian.jpg" 
                  alt="AQUORA Western Dance - Dynamic contemporary movement and athletic leap by Indian male dancer" 
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t dark:from-[#141414] dark:via-[#141414]/40 from-black/55 via-black/20 to-transparent" />
                
                {/* Floating Discipline Badge */}
                <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 dark:bg-[#101010]/85 bg-black/60 backdrop-blur-md border border-aquora-purple/30 text-[9.5px] sm:text-[10px] uppercase tracking-[0.22em] text-aquora-purple-light font-semibold shadow-xs rounded-full">
                    <Sparkles size={11} className="text-aquora-purple-light" />
                    Movement &amp; Passion
                  </span>
                </div>
              </div>

              {/* Glass Information Overlay */}
              <div className="p-5 sm:p-9 -mt-10 sm:-mt-16 relative z-10 mx-2 sm:mx-3 mb-3 glass-card-info rounded-2xl transition-all duration-500 hover:border-aquora-purple/40">
                <div className="mb-3 sm:mb-4">
                  <span className="text-[9.5px] sm:text-[10px] uppercase tracking-[0.3em] font-semibold text-aquora-purple-light block mb-1">
                    DISCIPLINE 02
                  </span>
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-2xl sm:text-4xl text-aquora-foreground tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                      WESTERN DANCE
                    </h3>
                    <ArrowUpRight size={18} className="text-aquora-muted group-hover:text-aquora-purple-light transition-colors" />
                  </div>
                  <p className="font-serif italic text-aquora-purple-light/90 text-sm sm:text-base">
                    Movement &amp; Expression
                  </p>
                </div>

                <p className="text-aquora-muted text-xs sm:text-sm font-light leading-relaxed mb-4 sm:mb-5">
                  Ignite your rhythm, musicality, and stage confidence through contemporary choreography, hip-hop, and modern movement.
                </p>

                {/* Animated Purple Line appearing on hover */}
                <div className="w-12 group-hover:w-full h-[1px] bg-aquora-purple transition-all duration-500 mb-4 sm:mb-5" />

                {/* Approved Batch Information */}
                <div className="space-y-3 text-aquora-foreground">
                  <div className="flex items-start gap-2.5">
                    <Calendar size={13} className="text-aquora-purple-light shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[11px] font-semibold uppercase tracking-wider text-aquora-foreground">
                        Schedule Days
                      </h4>
                      <p className="text-xs text-aquora-beige font-medium mt-0.5">
                        Monday | Wednesday | Friday
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 pt-2.5 border-t dark:border-white/5 border-black/[0.06]">
                    <Clock size={13} className="text-aquora-purple-light shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[11px] font-semibold uppercase tracking-wider text-aquora-foreground mb-1.5">
                        Available Batches
                      </h4>
                      <div className="flex flex-wrap gap-1 font-mono text-[11px] text-aquora-foreground font-medium">
                        <div className="px-2.5 py-1 batch-chip rounded-md">
                          04:00 PM – 05:00 PM
                        </div>
                        <div className="px-2.5 py-1 batch-chip rounded-md">
                          05:00 PM – 06:00 PM
                        </div>
                        <div className="px-2.5 py-1 batch-chip rounded-md">
                          06:00 PM – 07:00 PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card Action */}
            <div className="p-5 sm:p-9 pt-0">
              <Button asChild variant="outline" size="sm" className="w-full tracking-[0.16em] text-[11px] h-11 rounded-full border-aquora-purple/30 text-aquora-purple-light hover:bg-aquora-purple/20 hover:border-aquora-purple hover:text-white touch-press justify-center">
                <a href="#contact">
                  ENQUIRE FOR WESTERN DANCE
                </a>
              </Button>
            </div>
          </motion.div>

          {/* ============================================================ */}
          {/* 3. BHARATANATYAM — Tradition & Grace (Beige/Gold Highlight) */}
          {/* ============================================================ */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpVariant}
            className="group relative flex flex-col justify-between rounded-3xl overflow-hidden glass-panel-dark transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(212,175,55,0.3)] border border-aquora-beige/20 hover:border-aquora-beige/50"
          >
            {/* Corner Decorative Accents */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-aquora-beige/40 pointer-events-none z-20" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-aquora-beige/40 pointer-events-none z-20" />

            <div>
              {/* Large Imagery with Subtle Movement on Hover */}
              <div className="relative aspect-[4/3] sm:aspect-[3/4] w-full overflow-hidden bg-aquora-surface">
                <Image 
                  src="/assets/aquora_bharatanatyam_indian.jpg" 
                  alt="AQUORA Bharatanatyam - Classical Indian dance artistry and traditional mudras" 
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t dark:from-[#141414] dark:via-[#141414]/40 from-black/55 via-black/20 to-transparent" />
                
                {/* Floating Discipline Badge */}
                <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 dark:bg-[#101010]/85 bg-black/60 backdrop-blur-md border border-aquora-beige/30 text-[9.5px] sm:text-[10px] uppercase tracking-[0.22em] text-aquora-beige font-semibold shadow-xs rounded-full">
                    <Sparkles size={11} className="text-aquora-beige" />
                    Classical Heritage
                  </span>
                </div>
              </div>

              {/* Glass Information Overlay */}
              <div className="p-5 sm:p-9 -mt-10 sm:-mt-16 relative z-10 mx-2 sm:mx-3 mb-3 glass-card-info rounded-2xl transition-all duration-500 hover:border-aquora-beige/40">
                <div className="mb-3 sm:mb-4">
                  <span className="text-[9.5px] sm:text-[10px] uppercase tracking-[0.3em] font-semibold text-aquora-beige block mb-1">
                    DISCIPLINE 03
                  </span>
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-2xl sm:text-4xl text-aquora-foreground tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                      BHARATANATYAM
                    </h3>
                    <ArrowUpRight size={18} className="text-aquora-muted group-hover:text-aquora-beige transition-colors" />
                  </div>
                  <p className="font-serif italic text-aquora-beige/90 text-sm sm:text-base">
                    Tradition &amp; Grace
                  </p>
                </div>

                <p className="text-aquora-muted text-xs sm:text-sm font-light leading-relaxed mb-4 sm:mb-5">
                  Master the sacred geometry of Indian classical dance—from grounded aramandi footwork and mudras to expressive abhinaya.
                </p>

                {/* Animated Gold/Beige Line appearing on hover */}
                <div className="w-12 group-hover:w-full h-[1px] bg-aquora-beige transition-all duration-500 mb-4 sm:mb-5" />

                {/* Approved Batch Information */}
                <div className="space-y-3 text-aquora-foreground">
                  <div className="flex items-start gap-2.5">
                    <Calendar size={13} className="text-aquora-beige shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[11px] font-semibold uppercase tracking-wider text-aquora-foreground">
                        Schedule Days
                      </h4>
                      <p className="text-xs text-aquora-beige font-medium mt-0.5">
                        Tuesday | Thursday | Saturday
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 pt-2.5 border-t dark:border-white/5 border-black/[0.06]">
                    <Clock size={13} className="text-aquora-beige shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[11px] font-semibold uppercase tracking-wider text-aquora-foreground mb-1.5">
                        Available Batches
                      </h4>
                      <div className="flex flex-wrap gap-1 font-mono text-[11px] text-aquora-foreground font-medium">
                        <div className="px-2.5 py-1 batch-chip rounded-md">
                          04:00 PM – 05:00 PM
                        </div>
                        <div className="px-2.5 py-1 batch-chip rounded-md">
                          05:00 PM – 06:00 PM
                        </div>
                        <div className="px-2.5 py-1 batch-chip rounded-md">
                          06:00 PM – 07:00 PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card Action */}
            <div className="p-5 sm:p-9 pt-0">
              <Button asChild variant="outline" size="sm" className="w-full tracking-[0.16em] text-[11px] h-11 rounded-full border-aquora-beige/30 text-aquora-beige hover:bg-aquora-beige/20 hover:border-aquora-beige hover:text-white touch-press justify-center">
                <a href="#contact">
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
