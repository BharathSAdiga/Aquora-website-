"use client";

import { motion, Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Sparkles, Award, ShieldCheck, Compass, HeartHandshake } from "lucide-react";

export function About() {
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.75, ease: "easeOut" }
    }
  };

  const METRICS = [
    {
      icon: Compass,
      stat: "3",
      label: "Signature Disciplines",
      desc: "Holistic Yoga, Contemporary Dance & Classical Bharatanatyam",
      accent: "text-aquora-beige",
    },
    {
      icon: Award,
      stat: "100%",
      label: "Certified Gurus & Instructors",
      desc: "Deep pedagogical lineage and seasoned performance expertise",
      accent: "text-aquora-green-light",
    },
    {
      icon: ShieldCheck,
      stat: "Sprung",
      label: "Acoustic Timber Floors",
      desc: "Joint-safe architectural flooring designed for dancers & yogis",
      accent: "text-aquora-purple-light",
    },
    {
      icon: HeartHandshake,
      stat: "All Ages",
      label: "Inclusive Community",
      desc: "Structured batches welcoming beginners to advanced artists",
      accent: "text-aquora-gold",
    },
  ];

  return (
    <section id="about" className="py-28 md:py-40 bg-aquora-bg text-aquora-foreground relative overflow-hidden border-b border-aquora-border">
      {/* Subtle organic ambient gradients */}
      <div className="absolute top-1/3 left-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-aquora-green/10 blur-[170px] pointer-events-none" />
      <div className="absolute top-2/3 right-0 w-[550px] h-[550px] rounded-full bg-aquora-purple/10 blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-aquora-gold/5 blur-[150px] pointer-events-none" />

      <Container className="relative z-10">
        
        {/* Section Header: Editorial & Prestigious */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpVariant}
          className="max-w-3xl mb-20 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full glass-pill-dark dark:text-aquora-beige text-aquora-green-light text-[10px] uppercase tracking-[0.3em] font-semibold border dark:border-aquora-beige/15 border-aquora-green/25">
            <Sparkles size={11} className="dark:text-aquora-gold text-aquora-green-light" />
            <span>THE AQUORA PEDIGREE</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-aquora-foreground leading-[1.12] tracking-tight mb-8">
            WHERE RIGOROUS DISCIPLINE MEETS{" "}
            <span className="italic font-light gold-gradient-text">ARTISTIC FREEDOM.</span>
          </h2>

          <div className="w-24 h-[1px] bg-gradient-to-r from-aquora-beige via-aquora-purple/60 to-transparent mb-8" />

          <p className="text-aquora-foreground/80 text-base sm:text-lg font-light leading-relaxed">
            Established in the cultural heartland of JP Nagar 7th Phase, Bengaluru, AQUORA is an architecturally refined movement studio built on a singular conviction: that disciplined practice, physical wellness, and creative expression transform daily life.
          </p>
        </motion.div>

        {/* 4 Professional Credential Metrics Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpVariant}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-24"
        >
          {METRICS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="glass-panel-dark p-6 sm:p-7 rounded-2xl border border-aquora-border hover:border-aquora-beige/25 transition-all duration-300 group hover:-translate-y-1 shadow-[0_15px_35px_rgba(0,0,0,0.4)]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl dark:bg-white/5 bg-black/[0.04] border dark:border-white/10 border-black/[0.08] flex items-center justify-center text-aquora-beige group-hover:border-aquora-beige/40 transition-colors">
                    <Icon size={18} className={item.accent} />
                  </div>
                  <span className={`font-serif text-2xl sm:text-3xl font-normal ${item.accent}`}>
                    {item.stat}
                  </span>
                </div>
                <h3 className="font-serif text-lg text-aquora-foreground mb-1.5 group-hover:text-aquora-beige transition-colors">
                  {item.label}
                </h3>
                <p className="text-xs text-aquora-muted font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* Three Sanctuary Pillars with Brand Color Accents: Green, Purple, Beige */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpVariant}
          className="mb-20"
        >
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[10px] uppercase tracking-[0.35em] text-aquora-beige-muted font-medium block mb-2">
              Three Intentional Pillars
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-aquora-foreground font-normal">
              Curated for Modern Aspirations
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Pillar 1: Mindful Yoga (Green Accent) */}
            <div className="glass-panel-dark p-8 sm:p-9 rounded-3xl border border-aquora-green/25 hover:border-aquora-green/50 transition-all duration-300 relative group flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-aquora-green-light px-3 py-1 rounded-full bg-aquora-green/10 border border-aquora-green/20">
                    Discipline 01
                  </span>
                  <span className="font-mono text-xs text-aquora-muted">YOGA</span>
                </div>
                
                <h4 className="font-serif text-2xl sm:text-3xl text-aquora-foreground mb-3 group-hover:text-aquora-green-light transition-colors">
                  Mindful Movement &amp; Breath
                </h4>
                
                <p className="text-aquora-muted text-sm font-light leading-relaxed mb-6">
                  Rooted in classical Hatha and energetic Vinyasa practices. Every session balances anatomical precision, joint mobility, deep pranayama, and sustained mental stillness.
                </p>
              </div>

              <div className="pt-5 border-t border-aquora-border">
                <div className="space-y-1.5 text-xs text-aquora-foreground/80 font-light">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-aquora-green" />
                    <span>Morning &amp; Evening Batches</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-aquora-green" />
                    <span>Dedicated Ladies-Only Batch</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-aquora-green" />
                    <span>Pranayama &amp; Meditation Included</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 2: Western Dance (Purple Accent) */}
            <div className="glass-panel-dark p-8 sm:p-9 rounded-3xl border border-aquora-purple/25 hover:border-aquora-purple/50 transition-all duration-300 relative group flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-aquora-purple-light px-3 py-1 rounded-full bg-aquora-purple/10 border border-aquora-purple/20">
                    Discipline 02
                  </span>
                  <span className="font-mono text-xs text-aquora-muted">DANCE</span>
                </div>
                
                <h4 className="font-serif text-2xl sm:text-3xl text-aquora-foreground mb-3 group-hover:text-aquora-purple-light transition-colors">
                  Creative Rhythm &amp; Freedom
                </h4>
                
                <p className="text-aquora-muted text-sm font-light leading-relaxed mb-6">
                  High-energy contemporary choreography, urban grooves, and expressive footwork. Built to expand bodily coordination, musicality, and confident stage presence.
                </p>
              </div>

              <div className="pt-5 border-t border-aquora-border">
                <div className="space-y-1.5 text-xs text-aquora-foreground/80 font-light">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-aquora-purple" />
                    <span>Mon | Wed | Fri Batches</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-aquora-purple" />
                    <span>Multiple Evening Time Slots</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-aquora-purple" />
                    <span>Youth, Adults &amp; All Skill Levels</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 3: Classical Bharatanatyam (Beige/Gold Accent) */}
            <div className="glass-panel-dark p-8 sm:p-9 rounded-3xl border border-aquora-beige/25 hover:border-aquora-beige/50 transition-all duration-300 relative group flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-aquora-beige px-3 py-1 rounded-full bg-aquora-beige/10 border border-aquora-beige/20">
                    Discipline 03
                  </span>
                  <span className="font-mono text-xs text-aquora-muted">TRADITION</span>
                </div>
                
                <h4 className="font-serif text-2xl sm:text-3xl text-aquora-foreground mb-3 group-hover:text-aquora-beige transition-colors">
                  Classical Heritage &amp; Grace
                </h4>
                
                <p className="text-aquora-muted text-sm font-light leading-relaxed mb-6">
                  Revering millennia-old Indian classical movement. Mastering rigorous Tala (rhythm), authentic Hastas (mudras), and expressive Abhinaya under guidance.
                </p>
              </div>

              <div className="pt-5 border-t border-aquora-border">
                <div className="space-y-1.5 text-xs text-aquora-foreground/80 font-light">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-aquora-beige" />
                    <span>Tue | Thu | Sat Batches</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-aquora-beige" />
                    <span>Graded Syllabi &amp; Performance Path</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-aquora-beige" />
                    <span>Children &amp; Adult Learners</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Professional Studio Ethos Banner */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpVariant}
          className="glass-panel-dark p-8 sm:p-12 rounded-3xl border border-aquora-border relative overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.3em] text-aquora-gold font-semibold block mb-3">
                DIRECTOR&apos;S ETHOS
              </span>
              <p className="font-serif italic text-lg sm:text-2xl text-aquora-beige leading-relaxed mb-4">
                &ldquo;Movement is not merely physical activity—it is an internal dialogue between precision, breath, and expressive spirit. At AQUORA, we offer a dedicated sanctuary for that dialogue to flourish.&rdquo;
              </p>
              <span className="text-xs uppercase tracking-[0.25em] text-aquora-muted font-medium">
                AQUORA ARTISTIC DIRECTION • JP NAGAR, BENGALURU
              </span>
            </div>
            
            <div className="shrink-0 flex items-center gap-3">
              <a 
                href="#classes" 
                className="px-6 py-3 rounded-full bg-aquora-beige text-aquora-black hover:bg-white text-xs uppercase tracking-[0.2em] font-semibold transition-colors shadow-sm"
              >
                View Curriculums
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-full border border-aquora-border hover:border-aquora-purple hover:bg-aquora-purple/10 text-aquora-beige text-xs uppercase tracking-[0.2em] font-medium transition-colors"
              >
                Visit Studio
              </a>
            </div>
          </div>
        </motion.div>

      </Container>
    </section>
  );
}
