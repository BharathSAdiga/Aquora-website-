import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Classes } from "@/components/sections/Classes";
import { Schedule } from "@/components/sections/Schedule";
import { Studio } from "@/components/sections/Studio";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="flex-grow pt-0">
        <Hero />
        <About />
        <Classes />
        <Schedule />
        <Studio />
        <Contact />
      </main>

      <WhatsAppFloatingButton />
      <Footer />
    </>
  );
}
