"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, MessageCircle, Map as MapIcon, ArrowRight } from "lucide-react";

export function Contact() {
  const address = `No. 3/1, 1st Floor, SkyPool Fitness Studio Building, 4th B Main Road, Dr. Vivekananda Layout, 7th Phase, J.P. Nagar, Bengaluru - 560078, Karnataka, India`;
  const encodedAddress = encodeURIComponent(address);
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
  
  const phoneNumber = "+916366007494";
  const displayPhone = "+91 63660 07494";
  
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-velora-bg text-velora-foreground">
      <Container>
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-velora-primary mb-6">
            VISIT VELORA
          </h2>
          <div className="w-24 h-1 bg-velora-accent mx-auto rounded-full opacity-60"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Location Information */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="space-y-12 order-2 lg:order-1"
          >
            <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-velora-accent/20 shadow-sm">
              <div className="flex items-start gap-5 mb-8">
                <div className="w-12 h-12 rounded-full bg-velora-secondary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-velora-secondary" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-velora-primary mb-3">Studio Location</h3>
                  <p className="text-velora-muted leading-relaxed mb-6">
                    No. 3/1, 1st Floor,<br />
                    SkyPool Fitness Studio Building,<br />
                    4th B Main Road, Dr. Vivekananda Layout,<br />
                    7th Phase, J.P. Nagar,<br />
                    Bengaluru - 560078,<br />
                    Karnataka, India
                  </p>
                  
                  <a 
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-velora-secondary hover:text-velora-primary transition-colors group"
                  >
                    Get Directions
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
              
              <div className="w-full h-[1px] bg-velora-accent/20 mb-8"></div>
              
              <div className="flex items-start gap-5 mb-8">
                <div className="w-12 h-12 rounded-full bg-velora-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-velora-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-velora-primary mb-3">Call Us</h3>
                  <a href={`tel:${phoneNumber}`} className="text-velora-muted hover:text-velora-primary transition-colors text-lg">
                    {displayPhone}
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                <Button 
                  onClick={() => window.location.href = `tel:${phoneNumber}`}
                  size="lg"
                  className="w-full sm:flex-1"
                >
                  CALL US
                </Button>
                
                <Button 
                  onClick={() => window.open(`https://wa.me/${phoneNumber.replace('+', '')}`, '_blank')}
                  variant="outline"
                  size="lg"
                  className="w-full sm:flex-1 border-green-600 text-green-700 hover:bg-green-50"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WHATSAPP US
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Interactive Map */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="w-full h-full min-h-[400px] lg:min-h-full rounded-[2rem] overflow-hidden border border-velora-accent/20 shadow-lg order-1 lg:order-2 bg-white flex flex-col"
          >
            {googleMapsApiKey ? (
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0, flexGrow: 1, minHeight: "400px" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${encodedAddress}`}
                title="Velora Studio Location"
              ></iframe>
            ) : (
              <div className="flex-1 min-h-[400px] bg-velora-bg flex flex-col items-center justify-center text-center p-8">
                <div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center mb-6">
                  <MapIcon className="w-8 h-8 text-velora-accent" />
                </div>
                <h3 className="font-serif text-2xl text-velora-primary mb-3">Map Preview Unavailable</h3>
                <p className="text-velora-muted max-w-sm mx-auto mb-8">
                  The interactive map will appear here once configured. You can still use the directions button below to view our location on Google Maps.
                </p>
                <Button onClick={() => window.open(directionsUrl, '_blank')} variant="outline">
                  OPEN IN GOOGLE MAPS
                </Button>
              </div>
            )}
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
