"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

export function Classes() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section id="classes" className="py-20 md:py-28 bg-velora-bg/50 text-velora-foreground overflow-hidden border-y border-velora-accent/15">
      <Container>
        {/* Section Heading */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpVariant}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-velora-secondary mb-3 block">
            Our Offerings
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-velora-primary tracking-wide mb-4">
            MOVE. BREATHE. EXPRESS.
          </h2>
          <div className="w-16 h-[1.5px] bg-velora-accent mx-auto mb-4"></div>
          <p className="text-velora-muted text-sm md:text-base font-light">
            Dedicated programs tailored for all stages of practice and passion.
          </p>
        </motion.div>

        <div className="space-y-20 md:space-y-28">
          
          {/* Yoga Program */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpVariant}
            className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center"
          >
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <span className="text-velora-secondary font-semibold tracking-[0.2em] uppercase text-xs mb-2 block">1. Yoga</span>
              <h3 className="font-serif text-3xl md:text-4xl text-velora-primary mb-4">Yoga for Body &amp; Mind</h3>
              <p className="text-velora-muted text-base mb-8 leading-relaxed font-light">
                Build a healthier mind, stronger body and a calmer you.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border border-velora-accent/20">
                    <h4 className="font-serif text-base text-velora-primary font-bold">Morning Batches</h4>
                    <p className="text-[11px] font-semibold text-velora-secondary uppercase tracking-wider mb-1">Mon - Sat</p>
                    <p className="text-velora-muted text-xs">06:00 AM - 07:00 AM</p>
                    <p className="text-velora-muted text-xs">07:00 AM - 08:00 AM</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-velora-accent/20">
                    <h4 className="font-serif text-base text-velora-primary font-bold">Evening Batch</h4>
                    <p className="text-[11px] font-semibold text-velora-secondary uppercase tracking-wider mb-1">Mon - Sat</p>
                    <p className="text-velora-muted text-xs">07:30 PM - 08:30 PM</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-velora-accent/20">
                    <h4 className="font-serif text-base text-velora-primary font-bold">Exclusive Ladies Batch</h4>
                    <p className="text-[11px] font-semibold text-velora-secondary uppercase tracking-wider mb-1">Mon - Sat</p>
                    <p className="text-velora-muted text-xs">09:00 AM - 10:00 AM</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-velora-accent/20 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif text-base text-velora-primary font-bold mb-4">Benefits</h4>
                    <ul className="space-y-3">
                      {['Improves Flexibility', 'Reduces Stress', 'Builds Strength', 'Enhances Focus', 'Brings Inner Peace'].map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-velora-secondary/15 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-velora-secondary" />
                          </span>
                          <span className="text-velora-muted text-xs md:text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-velora-accent/15 mt-4">
                    <p className="text-[11px] uppercase tracking-wider text-velora-secondary font-semibold">
                      Daily mindful practices
                    </p>
                  </div>
                </div>
              </div>
              
              <Button asChild size="md" className="w-full sm:w-auto">
                <a href="#schedule">
                  VIEW YOGA CLASSES
                </a>
              </Button>
            </div>
            
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="aspect-[4/3] rounded-xl overflow-hidden relative shadow-md border border-velora-accent/20">
                <Image 
                  src="/assets/studio-main.jpg" 
                  alt="Velora Yoga Studio Space" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </motion.div>

          {/* Dance Programs */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpVariant}
            className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 items-center pt-8 border-t border-velora-accent/20"
          >
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="space-y-8">
                
                {/* Western Dance */}
                <div>
                  <span className="text-velora-secondary font-semibold tracking-[0.2em] uppercase text-xs mb-2 block">2. Western Dance</span>
                  <h3 className="font-serif text-3xl md:text-4xl text-velora-primary mb-4">Dance for Passion</h3>
                  <div className="bg-white p-5 rounded-lg border border-velora-accent/20">
                    <p className="text-xs font-semibold text-velora-secondary uppercase tracking-wider mb-3">Monday • Wednesday • Friday</p>
                    <div className="flex flex-wrap gap-2.5">
                      {['04:00 PM - 05:00 PM', '05:00 PM - 06:00 PM', '06:00 PM - 07:00 PM'].map((time, i) => (
                        <div key={i} className="px-3.5 py-1.5 border border-velora-accent/30 rounded text-velora-primary bg-velora-bg/40 text-xs font-medium">
                          {time}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bharatanatyam */}
                <div>
                  <span className="text-velora-secondary font-semibold tracking-[0.2em] uppercase text-xs mb-2 block">3. Bharatanatyam</span>
                  <h3 className="font-serif text-3xl md:text-4xl text-velora-primary mb-4">Bharatanatyam for Tradition</h3>
                  <div className="bg-white p-5 rounded-lg border border-velora-accent/20">
                    <p className="text-xs font-semibold text-velora-secondary uppercase tracking-wider mb-3">Tuesday • Thursday • Saturday</p>
                    <div className="flex flex-wrap gap-2.5">
                      {['04:00 PM - 05:00 PM', '05:00 PM - 06:00 PM', '06:00 PM - 07:00 PM'].map((time, i) => (
                        <div key={i} className="px-3.5 py-1.5 border border-velora-accent/30 rounded text-velora-primary bg-velora-bg/40 text-xs font-medium">
                          {time}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
              
              <div className="mt-8">
                <Button asChild size="md" className="w-full sm:w-auto">
                  <a href="#schedule">
                    VIEW DANCE CLASSES
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="aspect-[4/3] rounded-xl overflow-hidden relative shadow-md border border-velora-accent/20">
                <Image 
                  src="/assets/studio-right.jpg" 
                  alt="Velora Dance and Barre Studio" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
