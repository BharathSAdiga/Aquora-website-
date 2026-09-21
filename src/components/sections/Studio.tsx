"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Users, Sparkles, Sun, ShieldCheck } from "lucide-react";

export function Studio() {
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const OVERLAYS = [
    {
      title: "YOGA",
      subtitle: "For Body & Mind",
      icon: Sparkles,
      color: "text-aquora-green-light",
      borderColor: "border-aquora-green/20 hover:border-aquora-green/50",
      desc: "Dedicated morning & evening batches for alignment, pranayama & stillness."
    },
    {
      title: "DANCE",
      subtitle: "For Passion",
      icon: Sparkles,
      color: "text-aquora-purple-light",
      borderColor: "border-aquora-purple/20 hover:border-aquora-purple/50",
      desc: "Contemporary & western choreography on shock-absorbing engineered timber."
    },
    {
      title: "BHARATANATYAM",
      subtitle: "For Tradition",
      icon: Sparkles,
      color: "text-aquora-beige",
      borderColor: "border-aquora-beige/20 hover:border-aquora-beige/50",
      desc: "Authentic classical training, mudras, tala & abhinaya for all levels."
    },
    {
      title: "ALL AGE GROUPS",
      subtitle: "Welcome",
      icon: Users,
      color: "text-white",
      borderColor: "border-white/10 hover:border-white/30",
      desc: "Inclusive, encouraging environment welcoming children, youth & adults."
    },
  ];

  return (
    <section id="studio" className="py-20 sm:py-28 md:py-40 bg-aquora-bg text-aquora-foreground overflow-hidden relative border-b border-aquora-border section-optimize">
      {/* Ambient background glow */}
      <div className="hidden md:block absolute top-1/4 -right-20 w-[550px] h-[550px] rounded-full bg-aquora-green/10 blur-[160px] pointer-events-none" />
      <div className="hidden md:block absolute bottom-1/4 -left-20 w-[550px] h-[550px] rounded-full bg-aquora-purple/10 blur-[160px] pointer-events-none" />

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
            Sanctuary Architecture
          </span>
          <h2 className="font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-aquora-foreground tracking-tight mb-4">
            THE AQUORA SPACE
          </h2>
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-aquora-beige to-transparent mx-auto mb-5 sm:mb-6" />
          <p className="text-aquora-foreground/75 text-sm sm:text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed">
            An architectural sanctuary crafted with natural timber floors, expansive mirrors, acoustic isolation, and tranquil lighting in JP Nagar.
          </p>
        </motion.div>

        {/* Large Architectural Centerpiece Display */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpVariant}
          className="relative rounded-3xl overflow-hidden border border-aquora-border shadow-[0_25px_60px_rgba(0,0,0,0.8)] mb-8 sm:mb-14 bg-aquora-surface group"
        >
          {/* Studio Image */}
          <div className="relative aspect-[16/10] md:aspect-[21/9] w-full">
            <Image
              src="/assets/aquora_studio_interior_light.jpg"
              alt="The AQUORA Space - Architectural wellness and dance studio interior"
              fill
              loading="lazy"
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02] opacity-75"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
            />
            {/* Subtle dark vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 via-transparent to-black/40 pointer-events-none" />
          </div>

          {/* Floating Glass Badges directly overlaying image on desktop */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 hidden sm:flex items-center gap-2.5 sm:gap-3 z-10">
            <div className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full glass-pill-dark text-aquora-beige text-[10px] sm:text-[11px] uppercase tracking-widest font-medium shadow-xs flex items-center gap-2 border border-aquora-border">
              <Sun size={13} className="text-aquora-gold" />
              <span>Natural Morning Lighting</span>
            </div>
            <div className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full glass-pill-dark text-aquora-beige text-[10px] sm:text-[11px] uppercase tracking-widest font-medium shadow-xs flex items-center gap-2 border border-aquora-border">
              <ShieldCheck size={13} className="text-aquora-green-light" />
              <span>Acoustic Isolation &amp; Sprung Floors</span>
            </div>
          </div>

          {/* Inset Bottom Label */}
          <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-auto z-10 p-3.5 sm:p-5 glass-panel-dark rounded-2xl max-w-md shadow-lg border border-aquora-border">
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-aquora-gold font-semibold block mb-0.5 sm:mb-1">
              Studio Specification
            </span>
            <p className="text-sm sm:text-lg font-serif text-aquora-beige font-normal">
              Main Practice Sanctuary &amp; Dance Floor
            </p>
            <p className="text-[11px] sm:text-xs text-aquora-muted font-light mt-0.5 sm:mt-1 hidden xs:block">
              Engineered timber flooring with joint shock attenuation, full-length mirrors, and natural ventilation.
            </p>
          </div>
        </motion.div>

        {/* Four Subtle Glass Information Overlays Grid — 2x2 on Mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-7xl mx-auto">
          {OVERLAYS.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                className={`p-4 sm:p-7 rounded-2xl sm:rounded-3xl glass-panel-dark border ${item.borderColor} hover:shadow-[0_20px_45px_rgba(0,0,0,0.6)] transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full dark:bg-white/5 bg-black/[0.04] border dark:border-white/10 border-black/[0.08] flex items-center justify-center shadow-xs">
                      <IconComp size={14} className={`${item.color} sm:w-[15px] sm:h-[15px]`} />
                    </div>
                    <span className="text-[9.5px] sm:text-[10px] font-mono tracking-widest text-aquora-muted">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-2xl text-aquora-foreground tracking-wide mb-0.5 sm:mb-1 font-normal">
                    {item.title}
                  </h3>
                  <p className={`text-[10px] sm:text-xs uppercase tracking-widest font-medium mb-2 sm:mb-3 ${item.color}`}>
                    {item.subtitle}
                  </p>
                </div>

                <div className="pt-2 sm:pt-3 border-t border-aquora-border">
                  <p className="text-[10px] sm:text-xs text-aquora-muted font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
