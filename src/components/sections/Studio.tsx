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

export function Studio() {
  return (
    <section id="studio" className="py-24 md:py-32 bg-velora-foreground text-white overflow-hidden relative">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-velora-accent mb-6 tracking-wide">
            THE VELORA SPACE
          </h2>
          <div className="w-24 h-[1px] bg-velora-accent mx-auto mb-8 opacity-60"></div>
          <p className="text-xl md:text-2xl font-light tracking-wide text-white/80">
            Designed for movement. Created for connection.
          </p>
        </div>

        {/* Gallery / Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Feature Image */}
          <div className="lg:col-span-8 relative aspect-[4/3] lg:aspect-[16/10] rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-velora-primary/20 mix-blend-overlay z-10 transition-opacity duration-700 group-hover:opacity-0" />
            
            <Image 
              src="/assets/studio-view.jpg" 
              alt="The Velora Space - Yoga and Dance Studio"
              fill
              className="object-cover object-center transition-transform duration-[20s] group-hover:scale-110 ease-out"
              sizes="(max-width: 1024px) 100vw, 66vw"
              priority
            />
          </div>

          {/* Highlights Grid (Side on Desktop, Below on Mobile) */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-8">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className="relative py-6 lg:py-8 border-b border-velora-accent/20 group cursor-default"
              >
                <div className="absolute left-0 bottom-0 w-0 h-[1px] bg-velora-accent transition-all duration-500 group-hover:w-full" />
                <h3 className="font-serif text-2xl text-velora-accent mb-1 transition-transform duration-300 group-hover:translate-x-2">
                  {highlight.title}
                </h3>
                <p className="text-white/60 tracking-wider text-sm uppercase transition-transform duration-300 group-hover:translate-x-2">
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
