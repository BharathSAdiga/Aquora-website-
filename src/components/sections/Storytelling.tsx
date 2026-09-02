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
    <section className="py-24 md:py-36 bg-[#130B19]/70 text-velora-foreground overflow-hidden border-y border-velora-purple/25">
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
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-velora-purple-light mb-3 block">
                Yoga Sanctuary
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-velora-foreground leading-[1.12] mb-6">
                Breathe.<br />Stretch.<br /><span className="italic text-velora-beige font-light">Balance.</span>
              </h2>
              
              <div className="w-16 h-[1.5px] bg-velora-purple/60 mb-8"></div>
              
              <p className="text-velora-muted text-base md:text-lg mb-8 leading-relaxed font-light">
                Discover a grounded practice designed to restore vitality, align your posture, and cultivate deep stillness in daily life.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-velora-purple/20">
                {['Flexibility', 'Strength', 'Stress Reduction', 'Focus', 'Inner Peace'].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-velora-beige/90 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-velora-purple shrink-0"></span>
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
            <div className="relative aspect-[4/5] max-w-sm mx-auto lg:max-w-md rounded-xl overflow-hidden shadow-2xl border border-velora-purple/40 bg-velora-surface-card ring-1 ring-velora-beige/15">
              <Image 
                src="/assets/yoga-meditation.jpg" 
                alt="Mindful Yoga Meditation at Velora"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
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
            <div className="relative aspect-[4/5] max-w-sm mx-auto lg:max-w-md rounded-xl overflow-hidden shadow-2xl border border-velora-purple/40 bg-velora-surface-card ring-1 ring-velora-beige/15">
              <Image 
                src="/assets/dance-action.jpg" 
                alt="Dance Expression at Velora"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Inset for Bharatanatyam traditional dance */}
              <div className="absolute bottom-3 right-3 w-32 h-24 rounded-lg overflow-hidden border-2 border-velora-beige/60 shadow-2xl bg-velora-bg hidden sm:block">
                <Image 
                  src="/assets/bharatanatyam-dancer.jpg" 
                  alt="Bharatanatyam Tradition at Velora"
                  fill
                  className="object-cover object-center"
                  sizes="128px"
                />
              </div>
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
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-velora-purple-light mb-3 block">
                Dance &amp; Artistry
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-velora-foreground leading-[1.12] mb-6">
                Move.<br />Express.<br /><span className="italic text-velora-beige font-light">Be You.</span>
              </h2>
              
              <div className="w-16 h-[1.5px] bg-velora-purple/60 mb-8"></div>
              
              <p className="text-velora-muted text-base md:text-lg mb-8 leading-relaxed font-light">
                From rhythmic footwork in Bharatanatyam to dynamic contemporary Western choreography, express your authentic self with joy.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-velora-purple/20">
                {['Build Confidence', 'Learn New Skills', 'Express Yourself', 'For All Age Groups'].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-velora-beige/90 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-velora-purple shrink-0"></span>
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
