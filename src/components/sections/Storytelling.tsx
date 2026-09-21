"use client";

import { motion, Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";

const WELLNESS_PILLARS = [
  {
    word: "MOVE",
    accent: "text-aquora-charcoal",
    highlight: "from-aquora-charcoal to-aquora-charcoal/70",
    desc: "Liberate the physical body through conscious, functional movement and graceful kinetic flow.",
    number: "01",
  },
  {
    word: "BREATHE",
    accent: "text-aquora-green",
    highlight: "from-aquora-green to-aquora-green-light",
    desc: "Align your internal rhythm with intentional pranayama, releasing tension and anchoring awareness.",
    number: "02",
  },
  {
    word: "CONNECT",
    accent: "text-aquora-gold-dark",
    highlight: "from-aquora-gold to-aquora-gold-dark",
    desc: "Cultivate community and self-attunement within an inclusive, inspiring JP Nagar collective.",
    number: "03",
  },
  {
    word: "EXPRESS",
    accent: "text-aquora-purple",
    highlight: "from-aquora-purple to-aquora-purple-light",
    desc: "Awaken authentic emotional release through dynamic choreography and timeless classical mudras.",
    number: "04",
  },
];

export function Storytelling() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-28 md:py-44 bg-aquora-ivory/60 text-aquora-foreground relative overflow-hidden border-b border-aquora-charcoal/5">
      {/* Soft atmospheric gradient background */}
      <div className="hidden md:block absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-aquora-sage/40 blur-[180px] pointer-events-none" />
      <div className="hidden md:block absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-aquora-gold/8 blur-[180px] pointer-events-none" />
      <div className="hidden md:block absolute top-1/2 right-10 w-[400px] h-[400px] rounded-full bg-aquora-purple-subtle/50 blur-[180px] pointer-events-none" />

      <Container className="relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <span className="text-[11px] uppercase tracking-[0.35em] font-medium text-aquora-gold block mb-3">
            Holistic Experience
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-aquora-charcoal tracking-tight mb-4">
            MORE THAN A CLASS.
          </h2>
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-aquora-gold to-transparent mx-auto mb-6" />
          <p className="text-aquora-muted text-base md:text-lg font-light tracking-wide">
            It is a space to:
          </p>
        </div>

        {/* Four Large Typographic Words */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {WELLNESS_PILLARS.map((item) => (
            <motion.div
              key={item.word}
              variants={wordVariants}
              className="group p-8 sm:p-10 rounded-3xl glass-panel-light border border-white/90 hover:shadow-[0_25px_50px_-12px_rgba(30,28,26,0.09)] transition-all duration-500 flex flex-col justify-between min-h-[320px]"
            >
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-aquora-charcoal/10">
                  <span className="text-[10px] font-mono tracking-widest text-aquora-muted">
                    {item.number}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-aquora-gold" />
                </div>

                <h3 className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight mb-4 transition-transform duration-500 group-hover:translate-x-1 ${item.accent}`}>
                  {item.word}
                </h3>
              </div>

              <div>
                <div className="w-8 group-hover:w-full h-[1px] bg-aquora-gold/40 transition-all duration-500 mb-4" />
                <p className="text-xs sm:text-sm text-aquora-muted font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Editorial Closing Note */}
        <div className="mt-20 md:mt-28 text-center max-w-2xl mx-auto">
          <p className="font-serif italic text-lg sm:text-xl text-aquora-charcoal/85 leading-relaxed font-light">
            &ldquo;We created AQUORA as an antidote to routine—an open floor where breath, discipline, and creativity breathe in perfect equilibrium.&rdquo;
          </p>
          <span className="text-[10px] uppercase tracking-[0.3em] text-aquora-gold font-medium mt-4 block">
            AQUORA YOGA &amp; DANCE STUDIO • JP NAGAR
          </span>
        </div>

      </Container>
    </section>
  );
}
