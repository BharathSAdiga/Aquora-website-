"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

const highlights = [
  { title: "YOGA", subtitle: "For Body & Mind" },
  { title: "DANCE", subtitle: "For Passion" },
  { title: "BHARATANATYAM", subtitle: "For Tradition" },
  { title: "ALL AGE GROUPS", subtitle: "Welcome" },
  { title: "GOOD VENTILATION", subtitle: "& Air Flow" },
  { title: "SAFE & SECURE", subtitle: "Environment" },
];

const galleryViews = [
  { id: "main", title: "Main Studio Sanctuary", src: "/assets/studio-main.jpg", alt: "Velora Main Studio Sanctuary" },
  { id: "front", title: "Front Perspective", src: "/assets/studio-front.jpg", alt: "Velora Studio Front View" },
  { id: "left", title: "Left Side View", src: "/assets/studio-left.jpg", alt: "Velora Studio Left Side View" },
  { id: "right", title: "Right Side Mirror & Barre", src: "/assets/studio-right.jpg", alt: "Velora Studio Right Side View" },
];

export function Studio() {
  const [activeImage, setActiveImage] = useState<string>("/assets/studio-main.jpg");

  return (
    <section id="studio" className="py-24 md:py-36 bg-velora-bg text-velora-foreground overflow-hidden relative border-b border-velora-accent/15">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-velora-accent mb-3 block">
            The Sanctuary
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-velora-foreground mb-4 tracking-wide">
            THE VELORA SPACE
          </h2>
          <div className="w-20 h-[1.5px] bg-velora-accent/50 mx-auto mb-6"></div>
          <p className="text-base md:text-lg font-light tracking-wide text-velora-muted">
            Designed for movement. Created for connection.
          </p>
        </div>

        {/* Studio Gallery: Dominant Feature + Perspective Switcher */}
        <div className="mb-16">
          {/* Main Visual */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden shadow-2xl border border-velora-accent/20 mb-4 bg-black/40">
            <Image 
              src={activeImage} 
              alt="Velora Space View"
              fill
              className="object-cover object-center transition-all duration-700 ease-out"
              sizes="100vw"
              priority
            />
          </div>

          {/* Perspective Thumbnails */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {galleryViews.map((view) => (
              <button
                key={view.id}
                onClick={() => setActiveImage(view.src)}
                className={`group relative aspect-[16/10] rounded-lg overflow-hidden border transition-all duration-200 text-left ${
                  activeImage === view.src 
                    ? "border-velora-accent ring-1 ring-velora-accent shadow-md scale-[1.01]" 
                    : "border-white/15 opacity-70 hover:opacity-100 hover:border-velora-accent/50"
                }`}
              >
                <Image
                  src={view.src}
                  alt={view.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-2.5">
                  <span className="text-[11px] font-medium tracking-wider text-white uppercase truncate">
                    {view.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="pt-12 border-t border-velora-accent/20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className="py-4 px-2 border-b lg:border-b-0 lg:border-r border-velora-accent/15 last:border-r-0 flex flex-col items-center justify-center group"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-velora-accent mb-3 group-hover:scale-125 transition-transform" />
                <h3 className="font-serif text-lg md:text-xl text-velora-foreground mb-1 tracking-wider">
                  {highlight.title}
                </h3>
                <p className="text-velora-accent tracking-widest text-[11px] uppercase font-medium">
                  {highlight.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}
