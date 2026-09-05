"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Wind, ShieldCheck, Users, Flame } from "lucide-react";

interface StudioImage {
  id: string;
  title: string;
  src: string;
  alt: string;
}

const STUDIO_IMAGES: StudioImage[] = [
  { id: "main", title: "Main Studio Sanctuary", src: "/assets/studio-main.jpg", alt: "AQUORA Main Studio Sanctuary" },
  { id: "view", title: "Panoramic Studio Perspective", src: "/assets/studio-view.jpg", alt: "AQUORA Studio Panoramic View" },
  { id: "front", title: "Front Presentation View", src: "/assets/studio-front.jpg", alt: "AQUORA Studio Front View" },
  { id: "right", title: "Full-Length Mirrors & Barre", src: "/assets/studio-right.jpg", alt: "AQUORA Studio Right Side View" },
  { id: "left", title: "Ambient Wall Lighting View", src: "/assets/studio-left.jpg", alt: "AQUORA Studio Left Side View" },
];

const STUDIO_FEATURES = [
  {
    icon: Flame,
    title: "YOGA",
    subtitle: "For Body & Mind",
    color: "text-aquora-green-light",
  },
  {
    icon: Flame,
    title: "DANCE",
    subtitle: "For Passion",
    color: "text-aquora-purple-light",
  },
  {
    icon: Flame,
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
    title: "GOOD VENTILATION",
    subtitle: "& Air Flow",
    color: "text-aquora-green-light",
  },
  {
    icon: ShieldCheck,
    title: "SAFE & SECURE",
    subtitle: "Environment",
    color: "text-aquora-gold-light",
  },
];

export function Studio() {
  const [activeImage, setActiveImage] = useState<StudioImage>(STUDIO_IMAGES[0]);

  return (
    <section id="studio" className="py-24 md:py-36 bg-aquora-bg text-aquora-foreground overflow-hidden relative border-b border-aquora-gold/20">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-[0.35em] font-medium text-aquora-gold mb-3 block">
            Studio Sanctuary
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-aquora-foreground mb-4 tracking-wide">
            THE AQUORA SPACE
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-aquora-gold to-transparent mx-auto mb-6" />
          <p className="text-base md:text-lg font-light tracking-wide text-aquora-muted">
            Crafted for mindful movement, pristine acoustics, natural air flow, and deep focus.
          </p>
        </div>

        {/* Editorial Gallery View */}
        <div className="max-w-5xl mx-auto mb-20">
          {/* Main Display Frame */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-none overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-aquora-gold/35 mb-5 bg-aquora-black">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              className="object-cover transition-all duration-700 filter contrast-[1.03]"
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-aquora-black/80 via-transparent to-transparent pointer-events-none" />
            
            {/* Corner Gold Highlights */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-aquora-gold pointer-events-none" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-aquora-gold pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-aquora-gold pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-aquora-gold pointer-events-none" />

            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10">
              <span className="text-[10px] uppercase tracking-[0.25em] text-aquora-gold font-medium block">
                Sanctuary View
              </span>
              <p className="text-sm sm:text-lg font-serif text-aquora-foreground font-light">
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
                    ? "border-aquora-gold shadow-[0_0_15px_rgba(212,175,55,0.3)] scale-[1.02]" 
                    : "border-aquora-gold/20 opacity-60 hover:opacity-100 hover:border-aquora-gold/50"
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
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
              </button>
            ))}
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="pt-12 border-t border-aquora-gold/20 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {STUDIO_FEATURES.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="p-4 bg-aquora-surface/60 border border-aquora-gold/20 flex flex-col items-center justify-center hover:border-aquora-gold/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-aquora-gold/10 border border-aquora-gold/30 flex items-center justify-center mb-3">
                    <IconComp size={18} className="text-aquora-gold" />
                  </div>
                  <h3 className="font-serif text-sm sm:text-base text-aquora-foreground mb-1 tracking-wider">
                    {item.title}
                  </h3>
                  <p className={`text-[10px] sm:text-[11px] uppercase tracking-wider font-medium ${item.color}`}>
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
