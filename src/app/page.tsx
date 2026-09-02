import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Classes } from "@/components/sections/Classes";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="flex-grow pt-0">
        <Hero />
        <About />
        <Classes />
      </main>

      <Footer />
    </>
  );
}
