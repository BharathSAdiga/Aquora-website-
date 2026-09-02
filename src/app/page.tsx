import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="flex-grow pt-0">
        <Hero />
        <About />


        {/* Classes Overview Section */}
        <Section id="classes" className="bg-white">
          <Container>
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 w-full relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-velora-accent/20">
                  <img 
                    src="/assets/classes-flyer.jpg" 
                    alt="Yoga and Dance Classes" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-1 space-y-8">
                <div>
                  <h2 className="font-serif text-4xl md:text-5xl text-velora-primary mb-4">Classes for Adults & Kids</h2>
                  <p className="text-velora-muted">From serene morning Yoga batches to energetic evening Western Dance and traditional Bharatanatyam sessions.</p>
                </div>

                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-velora-secondary/10 border border-velora-secondary/20">
                    <h3 className="font-serif text-2xl text-velora-secondary mb-2">Yoga Classes</h3>
                    <ul className="text-sm space-y-2 text-velora-primary">
                      <li><span className="font-semibold">Morning:</span> 6:00 AM - 7:00 AM | 7:00 AM - 8:00 AM</li>
                      <li><span className="font-semibold">Evening:</span> 7:30 PM - 8:30 PM</li>
                      <li><span className="font-semibold text-velora-secondary">Exclusive Ladies Batch:</span> 9:00 AM - 10:00 AM</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl bg-velora-primary/5 border border-velora-primary/10">
                    <h3 className="font-serif text-2xl text-velora-primary mb-2">Dance Classes</h3>
                    <ul className="text-sm space-y-2 text-velora-primary">
                      <li><span className="font-semibold">Western (Mon/Wed/Fri):</span> 4PM - 5PM | 5PM - 6PM | 6PM - 7PM</li>
                      <li><span className="font-semibold">Bharatanatyam (Tue/Thu/Sat):</span> 4PM - 5PM | 5PM - 6PM | 6PM - 7PM</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
