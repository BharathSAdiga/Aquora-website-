import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";

// Lazy-load below-fold sections to reduce initial JS bundle
const About = dynamic(() =>
  import("@/components/sections/About").then((mod) => mod.About)
);
const Classes = dynamic(() =>
  import("@/components/sections/Classes").then((mod) => mod.Classes)
);
const Schedule = dynamic(() =>
  import("@/components/sections/Schedule").then((mod) => mod.Schedule)
);
const Storytelling = dynamic(() =>
  import("@/components/sections/Storytelling").then((mod) => mod.Storytelling)
);
const Studio = dynamic(() =>
  import("@/components/sections/Studio").then((mod) => mod.Studio)
);
const Contact = dynamic(() =>
  import("@/components/sections/Contact").then((mod) => mod.Contact)
);
const Footer = dynamic(() =>
  import("@/components/layout/Footer").then((mod) => mod.Footer)
);

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-grow pt-0">
        <Hero />
        <About />
        <Classes />
        <Schedule />
        <Storytelling />
        <Studio />
        <Contact />
      </main>

      <WhatsAppFloatingButton />
      <Footer />
    </>
  );
}
