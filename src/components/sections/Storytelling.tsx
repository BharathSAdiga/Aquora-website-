"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export function Storytelling() {
  const textVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.7, ease: "easeOut" as const }
    }
  };

  return (
    <section className="py-24 md:py-36 bg-aquora-surface/50 text-aquora-foreground overflow-hidden border-y border-aquora-gold/20">
      <Container>
        
        {/* YOGA Section (Text Left, Image Right) */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24 md:mb-32">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={textVariants}
            className="w-full lg:w-1/2 order-2 lg:order-1"
          >
            <div className="max-w-lg">
              <span className="text-xs uppercase tracking-[0.3em] font-medium text-aquora-green-light mb-3 block">
                Mindful Practice
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-aquora-foreground leading-[1.12] mb-6">
                Breathe.<br />Stretch.<br /><span className="italic gold-gradient-text font-light">Balance.</span>
              </h2>
              
              <div className="w-16 h-[1px] bg-aquora-gold/40 mb-8" />
              
              <p className="text-aquora-muted text-base md:text-lg mb-8 leading-relaxed font-light">
                Discover a grounded practice designed to restore vitality, align posture, and cultivate deep stillness in everyday life.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6 border-t border-aquora-gold/20">
                {['Flexibility & Agility', 'Functional Strength', 'Stress Reduction', 'Mindful Focus', 'Inner Composure'].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-aquora-foreground/90 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-aquora-gold shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={imageVariants}
            className="w-full lg:w-1/2 order-1 lg:order-2"
          >
            <div className="relative aspect-[4/5] max-w-sm mx-auto lg:max-w-md rounded-none overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-aquora-gold/30 bg-aquora-surface-card">
              <Image 
                src="/assets/aquora-yoga-photo.png" 
                alt="Mindful Yoga Practice at AQUORA"
                fill
                className="object-cover object-top filter contrast-[1.03]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-aquora-black/70 via-transparent to-transparent" />
              
              {/* Corner Accents */}
              <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t border-l border-aquora-gold" />
              <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t border-r border-aquora-gold" />
              <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b border-l border-aquora-gold" />
              <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b border-r border-aquora-gold" />
            </div>
          </motion.div>
          
        </div>

        {/* DANCE Section (Image Left, Text Right) */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={imageVariants}
            className="w-full lg:w-1/2 order-1 lg:order-1"
          >
            <div className="relative aspect-[4/5] max-w-sm mx-auto lg:max-w-md rounded-none overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-aquora-gold/30 bg-aquora-surface-card">
              <Image 
                src="/assets/aquora-dance-photo.png" 
                alt="Western Dance Expression at AQUORA"
                fill
                className="object-cover object-top filter contrast-[1.03]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-aquora-black/70 via-transparent to-transparent" />
              
              {/* Inset for Bharatanatyam traditional classical dance */}
              <div className="absolute bottom-4 right-4 w-36 h-28 border border-aquora-gold/60 shadow-2xl bg-aquora-black overflow-hidden hidden sm:block">
                <Image 
                  src="/assets/aquora-bharatanatyam-photo.png" 
                  alt="Bharatanatyam Tradition at AQUORA"
                  fill
                  className="object-cover object-top"
                  sizes="150px"
                />
              </div>

              {/* Corner Accents */}
              <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t border-l border-aquora-gold" />
              <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t border-r border-aquora-gold" />
              <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b border-l border-aquora-gold" />
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={textVariants}
            className="w-full lg:w-1/2 order-2 lg:order-2"
          >
            <div className="max-w-lg">
              <span className="text-xs uppercase tracking-[0.3em] font-medium text-aquora-purple-light mb-3 block">
                Dance &amp; Artistry
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-aquora-foreground leading-[1.12] mb-6">
                Move.<br />Express.<br /><span className="italic gold-gradient-text font-light">Be You.</span>
              </h2>
              
              <div className="w-16 h-[1px] bg-aquora-gold/40 mb-8" />
              
              <p className="text-aquora-muted text-base md:text-lg mb-8 leading-relaxed font-light">
                From rhythmic precision in classical Bharatanatyam to expressive contemporary Western choreography, discover your authentic movement with confidence.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6 border-t border-aquora-gold/20">
                {['Build Self-Confidence', 'Learn Technical Skills', 'Express Your Creativity', 'Welcoming All Age Groups'].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-aquora-foreground/90 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-aquora-gold shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
        </div>

      </Container>
    </section>
  );
}
