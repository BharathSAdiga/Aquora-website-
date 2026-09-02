"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

export function Classes() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  return (
    <section id="classes" className="py-24 md:py-32 bg-white text-velora-foreground overflow-hidden">
      <Container>
        {/* Section Heading */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="text-center max-w-4xl mx-auto mb-20 md:mb-24"
        >
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-velora-primary leading-tight mb-8">
            MOVE. BREATHE. EXPRESS.
          </h2>
          <div className="w-24 h-1 bg-velora-accent mx-auto rounded-full opacity-60"></div>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          
          {/* Yoga Program */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center"
          >
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <span className="text-velora-secondary font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">1. Yoga</span>
              <h3 className="font-serif text-4xl md:text-5xl text-velora-primary mb-6">Yoga for Body &amp; Mind</h3>
              <p className="text-velora-muted text-lg mb-10 leading-relaxed">
                Build a healthier mind, stronger body and a calmer you.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-serif text-xl text-velora-primary mb-2">Morning Batches</h4>
                    <p className="text-sm font-semibold text-velora-secondary uppercase tracking-wider mb-1">Mon - Sat</p>
                    <p className="text-velora-muted">06:00 AM - 07:00 AM</p>
                    <p className="text-velora-muted">07:00 AM - 08:00 AM</p>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-velora-primary mb-2">Evening Batch</h4>
                    <p className="text-sm font-semibold text-velora-secondary uppercase tracking-wider mb-1">Mon - Sat</p>
                    <p className="text-velora-muted">07:30 PM - 08:30 PM</p>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-velora-primary mb-2">Exclusive Ladies Batch</h4>
                    <p className="text-sm font-semibold text-velora-secondary uppercase tracking-wider mb-1">Mon - Sat</p>
                    <p className="text-velora-muted">09:00 AM - 10:00 AM</p>
                  </div>
                </div>
                
                <div className="bg-velora-bg p-8 rounded-2xl border border-velora-accent/20">
                  <h4 className="font-serif text-xl text-velora-primary mb-6">Benefits</h4>
                  <ul className="space-y-4">
                    {['Improves Flexibility', 'Reduces Stress', 'Builds Strength', 'Enhances Focus', 'Brings Inner Peace'].map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-velora-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-velora-primary" />
                        </span>
                        <span className="text-velora-muted">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <Button size="lg" className="w-full sm:w-auto">
                VIEW YOGA CLASSES
              </Button>
            </div>
            
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden relative">
                <div className="absolute inset-0 bg-velora-primary/10 mix-blend-multiply z-10 rounded-3xl" />
                <img 
                  src="/assets/studio-view.jpg" 
                  alt="Yoga Studio" 
                  className="w-full h-full object-cover object-center transition-transform duration-1000 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-velora-accent/30 to-transparent"></div>

          {/* Dance Programs */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center"
          >
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="space-y-16">
                
                {/* Western Dance */}
                <div>
                  <span className="text-velora-secondary font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">2. Western Dance</span>
                  <h3 className="font-serif text-4xl md:text-5xl text-velora-primary mb-6">Dance for Passion</h3>
                  <div className="bg-velora-bg p-8 rounded-2xl border border-velora-accent/20">
                    <p className="text-sm font-semibold text-velora-secondary uppercase tracking-wider mb-4">Monday • Wednesday • Friday</p>
                    <div className="flex flex-wrap gap-4">
                      {['04:00 PM - 05:00 PM', '05:00 PM - 06:00 PM', '06:00 PM - 07:00 PM'].map((time, i) => (
                        <div key={i} className="px-4 py-2 border border-velora-primary/10 rounded-lg text-velora-muted bg-white shadow-sm text-sm">
                          {time}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bharatanatyam */}
                <div>
                  <span className="text-velora-secondary font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">3. Bharatanatyam</span>
                  <h3 className="font-serif text-4xl md:text-5xl text-velora-primary mb-6">Bharatanatyam for Tradition</h3>
                  <div className="bg-velora-bg p-8 rounded-2xl border border-velora-accent/20">
                    <p className="text-sm font-semibold text-velora-secondary uppercase tracking-wider mb-4">Tuesday • Thursday • Saturday</p>
                    <div className="flex flex-wrap gap-4">
                      {['04:00 PM - 05:00 PM', '05:00 PM - 06:00 PM', '06:00 PM - 07:00 PM'].map((time, i) => (
                        <div key={i} className="px-4 py-2 border border-velora-primary/10 rounded-lg text-velora-muted bg-white shadow-sm text-sm">
                          {time}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
              
              <div className="mt-12">
                <Button size="lg" className="w-full sm:w-auto">
                  VIEW DANCE CLASSES
                </Button>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden relative shadow-xl">
                <img 
                  src="/assets/classes-flyer.jpg" 
                  alt="Velora Dance Classes" 
                  className="w-full h-full object-contain bg-velora-bg"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
