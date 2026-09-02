"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Check } from "lucide-react";

export function Storytelling() {
  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 1, ease: "easeOut" as const }
    }
  };

  return (
    <section className="py-24 md:py-32 bg-white text-velora-foreground overflow-hidden">
      <Container>
        
        {/* YOGA Section (Image Right) */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textVariants}
            className="w-full lg:w-1/2 order-2 lg:order-1"
          >
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-velora-primary leading-tight mb-8">
              <span className="block italic text-velora-secondary/80 text-3xl md:text-4xl mb-4">Yoga</span>
              Breathe.<br />Stretch.<br />Balance.
            </h2>
            
            <div className="w-16 h-[1px] bg-velora-accent mb-10"></div>
            
            <ul className="space-y-4">
              {['Flexibility', 'Strength', 'Stress Reduction', 'Focus', 'Inner Peace'].map((benefit, i) => (
                <li key={i} className="flex items-center gap-4 text-lg text-velora-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-velora-accent"></span>
                  {benefit}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageVariants}
            className="w-full lg:w-1/2 order-1 lg:order-2"
          >
            <div className="relative aspect-[3/4] md:aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image 
                src="/assets/studio-view.jpg" 
                alt="Yoga at Velora"
                fill
                className="object-cover hover:scale-105 transition-transform duration-[10s]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Decorative Frame */}
              <div className="absolute inset-4 rounded-[2rem] border border-white/20 z-10 pointer-events-none"></div>
            </div>
          </motion.div>
          
        </div>

        {/* DANCE Section (Image Left) */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageVariants}
            className="w-full lg:w-1/2 order-1 lg:order-1"
          >
            <div className="relative aspect-[3/4] md:aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image 
                src="/assets/classes-flyer.jpg" 
                alt="Dance at Velora"
                fill
                className="object-cover hover:scale-105 transition-transform duration-[10s]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-velora-primary/10 mix-blend-overlay z-10" />
              {/* Decorative Frame */}
              <div className="absolute inset-4 rounded-[2rem] border border-white/20 z-20 pointer-events-none"></div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textVariants}
            className="w-full lg:w-1/2 order-2 lg:order-2"
          >
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-velora-primary leading-tight mb-8">
              <span className="block italic text-velora-secondary/80 text-3xl md:text-4xl mb-4">Dance</span>
              Move.<br />Express.<br />Be You.
            </h2>
            
            <div className="w-16 h-[1px] bg-velora-accent mb-10"></div>
            
            <ul className="space-y-4">
              {['Build Confidence', 'Learn New Skills', 'Express Yourself', 'For All Age Groups'].map((benefit, i) => (
                <li key={i} className="flex items-center gap-4 text-lg text-velora-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-velora-accent"></span>
                  {benefit}
                </li>
              ))}
            </ul>
          </motion.div>
          
        </div>

      </Container>
    </section>
  );
}
