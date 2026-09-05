"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Wind, ShieldCheck, Users, Sparkles } from "lucide-react";

interface StudioImage {
  id: string;
  title: string;
  src: string;
  alt: string;
}

const STUDIO_IMAGES: StudioImage[] = [
  { 
    id: "sanctuary", 
    title: "Main Sanctuary & Architectural Floor", 
    src: "/assets/aquora-studio-sanctuary.jpg", 
    alt: "AQUORA Studio Main Sanctuary Interior" 
  },
  { 
    id: "mirrors", 
    title: "Full-Length Mirrors & Practice Barre", 
    src: "/assets/studio-right.jpg", 
    alt: "AQUORA Studio Mirrors and Barre" 
  },
  { 
    id: "presentation", 
    title: "Performance & Presentation Floor", 
    src: "/assets/studio-front.jpg", 
    alt: "AQUORA Studio Front Presentation Space" 
  },
  { 
    id: "ambient", 
    title: "Warm Ambient Lighting & Acoustics", 
    src: "/assets/studio-left.jpg", 
    alt: "AQUORA Studio Ambient Space" 
  },
  { 
    id: "aerial", 
    title: "High Ceiling Natural Air Flow Perspective", 
    src: "/assets/studio-view.jpg", 
    alt: "AQUORA Studio Practice Perspective" 
  },
];

const STUDIO_FEATURES = [
  {
    icon: Sparkles,
    title: "YOGA",
    subtitle: "For Body & Mind",
    color: "text-aquora-green-light",
  },
  {
    icon: Sparkles,
    title: "DANCE",
    subtitle: "For Passion",
    color: "text-aquora-purple-light",
  },
  {
    icon: Sparkles,
    title: "BHARATANATYAM",
    subtitle: "For Tradition",
    color: "text-aquora-gold",
  },
  {
    icon: Users,
    title: "ALL AGE GROUPS",
    subtitle: "Welcome",
    color: "text-aquora-gold-light",
  },
  {
    icon: Wind,
    title: "VENTILATION",
    subtitle: "Natural Air Flow",
    color: "text-aquora-gold-light",
  },
  {
    icon: ShieldCheck,
    title: "SANCTUARY",
    subtitle: "Safe & Focused",
    color: "text-aquora-gold-light",
  },
];

export function Studio() {
  const [activeImage, setActiveImage] = useState<StudioImage>(STUDIO_IMAGES[0]);

  return (
    <section id="studio" className="py-28 md:py-40 bg-aquora-bg text-aquora-foreground overflow-hidden relative border-b border-aquora-gold/20">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-[0.35em] font-medium text-aquora-gold mb-3 block">
            The Sanctuary
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-aquora-foreground mb-4 tracking-wide">
            THE AQUORA SPACE
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-aquora-gold to-transparent mx-auto mb-6" />
          <p className="text-sm md:text-base font-light tracking-wide text-aquora-muted max-w-xl mx-auto leading-relaxed">
            Crafted for mindful movement, pristine acoustics, natural air flow, and deep focus in JP Nagar.
          </p>
        </div>

        {/* Gallery Showcase */}
        <div className="max-w-5xl mx-auto mb-20 md:mb-28">
          {/* Main Display Frame */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-none overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.85)] border border-white/15 mb-5 bg-aquora-black">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              className="object-cover transition-all duration-700 filter contrast-[1.03]"
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-aquora-black/85 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8 z-10">
              <span className="text-[10px] uppercase tracking-[0.25em] text-aquora-gold font-medium block mb-1">
                Studio View
              </span>
              <p className="text-base sm:text-xl font-serif text-aquora-foreground font-light">
                {activeImage.title}
              </p>
            </div>
          </div>

          {/* Editorial Thumbnail Rail */}
          <div className="grid grid-cols-5 gap-2 sm:gap-4">
            {STUDIO_IMAGES.map((img) => (
              <button
                key={img.id}
                onClick={() => setActiveImage(img)}
                className={`relative aspect-[16/10] overflow-hidden border transition-all duration-300 group cursor-pointer ${
                  activeImage.id === img.id
                    ? "border-aquora-gold shadow-[0_0_15px_rgba(212,175,55,0.35)] scale-[1.02]" 
                    : "border-white/10 opacity-60 hover:opacity-100 hover:border-aquora-gold/50"
                }`}
                aria-label={`View ${img.title}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="200px"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors" />
              </button>
            ))}
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="pt-14 border-t border-aquora-gold/20 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 text-center">
            {STUDIO_FEATURES.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07, duration: 0.5 }}
                  className="p-5 bg-aquora-surface/80 border border-white/10 flex flex-col items-center justify-center hover:border-aquora-gold/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-aquora-gold/10 border border-aquora-gold/25 flex items-center justify-center mb-3">
                    <IconComp size={16} className="text-aquora-gold" />
                  </div>
                  <h3 className="font-serif text-xs sm:text-sm text-aquora-foreground mb-1 tracking-wider">
                    {item.title}
                  </h3>
                  <p className={`text-[10px] sm:text-[11px] uppercase tracking-wider font-light ${item.color}`}>
                    {item.subtitle}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
