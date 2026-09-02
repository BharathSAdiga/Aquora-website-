import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Storytelling } from "@/components/sections/Storytelling";
import { Classes } from "@/components/sections/Classes";
import { Schedule } from "@/components/sections/Schedule";
import { Studio } from "@/components/sections/Studio";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="flex-grow pt-0">
        <Hero />
        <About />
        <Storytelling />
        <Classes />
        <Schedule />
        <Studio />
      </main>

      <Footer />
    </>
  );
}
