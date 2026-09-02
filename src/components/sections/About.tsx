"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export function About() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="about" className="py-24 md:py-40 bg-velora-bg text-velora-foreground overflow-hidden">
      <Container>
        {/* Section Heading */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="text-center max-w-4xl mx-auto mb-20 md:mb-32"
        >
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-velora-primary leading-tight mb-8">
            <span className="block mb-2">A SPACE TO MOVE.</span>
            <span className="block mb-2">A SPACE TO BREATHE.</span>
            <span className="block text-velora-accent italic">A SPACE TO BECOME.</span>
          </h2>
          <div className="w-24 h-1 bg-velora-accent mx-auto mb-8 rounded-full opacity-60"></div>
          <p className="text-lg md:text-xl text-velora-muted font-light leading-relaxed max-w-2xl mx-auto">
            Velora is a thoughtfully designed Yoga &amp; Dance Studio where movement, mindfulness and artistic expression come together.
          </p>
        </motion.div>

        {/* Pillars - Editorial Layout (No Cards) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-16 md:space-y-32"
        >
          {/* Pillar 1 */}
          <motion.div variants={fadeUpVariant} className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
            <div className="w-full md:w-1/3 flex justify-center md:justify-end">
              <span className="font-serif text-6xl md:text-8xl text-velora-primary/10">01</span>
            </div>
            <div className="w-full md:w-2/3 text-center md:text-left pt-2 md:pt-6 border-t md:border-t-0 md:border-l border-velora-accent/30 md:pl-16">
              <h3 className="text-xl md:text-2xl font-serif text-velora-primary tracking-wider uppercase mb-4">
                Mindful Movement
              </h3>
              <p className="text-velora-muted leading-relaxed max-w-lg mx-auto md:mx-0">
                Yoga practices focused on flexibility, strength, balance and wellbeing.
              </p>
            </div>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div variants={fadeUpVariant} className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 md:gap-16">
            <div className="w-full md:w-1/3 flex justify-center md:justify-start">
              <span className="font-serif text-6xl md:text-8xl text-velora-primary/10">02</span>
            </div>
            <div className="w-full md:w-2/3 text-center md:text-right pt-2 md:pt-6 border-t md:border-t-0 md:border-r border-velora-accent/30 md:pr-16">
              <h3 className="text-xl md:text-2xl font-serif text-velora-primary tracking-wider uppercase mb-4">
                Creative Expression
              </h3>
              <p className="text-velora-muted leading-relaxed max-w-lg mx-auto md:mx-0 md:ml-auto">
                Dance programs that encourage confidence, movement and self-expression.
              </p>
            </div>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div variants={fadeUpVariant} className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
            <div className="w-full md:w-1/3 flex justify-center md:justify-end">
              <span className="font-serif text-6xl md:text-8xl text-velora-primary/10">03</span>
            </div>
            <div className="w-full md:w-2/3 text-center md:text-left pt-2 md:pt-6 border-t md:border-t-0 md:border-l border-velora-accent/30 md:pl-16">
              <h3 className="text-xl md:text-2xl font-serif text-velora-primary tracking-wider uppercase mb-4">
                Tradition &amp; Culture
              </h3>
              <p className="text-velora-muted leading-relaxed max-w-lg mx-auto md:mx-0">
                Bharatanatyam presented with respect for traditional Indian dance.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </Container>
    </section>
  );
}
