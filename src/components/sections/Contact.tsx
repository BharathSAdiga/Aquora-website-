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
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpVariant}
            className="space-y-8 order-2 lg:order-1"
          >
            <div className="bg-white p-6 md:p-8 rounded-xl border border-velora-accent/25 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-velora-secondary/10 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-velora-secondary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-velora-primary mb-2">Studio Location</h3>
                  <p className="text-velora-muted text-sm leading-relaxed mb-4 font-light">
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
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-velora-secondary hover:text-velora-primary transition-colors group"
                  >
                    Get Directions
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
              
              <div className="w-full h-[1px] bg-velora-accent/15 mb-6"></div>
              
              <div className="flex items-start gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-velora-primary/10 flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-5 h-5 text-velora-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-velora-primary mb-1">Direct Inquiries</h3>
                  <a href={`tel:${phoneNumber}`} className="text-velora-muted hover:text-velora-primary transition-colors text-base font-medium">
                    {displayPhone}
                  </a>
                  <p className="text-xs text-velora-muted mt-1 font-light">Mon - Sat: 06:00 AM - 08:30 PM</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3.5">
                <Button 
                  asChild
                  size="md"
                  className="w-full sm:flex-1 text-xs"
                >
                  <a href={`tel:${phoneNumber}`}>
                    CALL US
                  </a>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  size="md"
                  className="w-full sm:flex-1 border-velora-secondary/40 text-velora-secondary hover:bg-velora-secondary hover:text-white text-xs"
                >
                  <a href={`https://wa.me/${phoneNumber.replace('+', '')}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2 inline" />
                    WHATSAPP US
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Interactive Map */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpVariant}
            className="w-full h-full min-h-[380px] lg:min-h-[440px] rounded-xl overflow-hidden border border-velora-accent/25 shadow-sm order-1 lg:order-2 bg-white flex flex-col"
          >
            {googleMapsApiKey ? (
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0, flexGrow: 1, minHeight: "380px" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${encodedAddress}`}
                title="Velora Studio Location"
              ></iframe>
            ) : (
              <div className="flex-1 min-h-[380px] bg-velora-bg/60 flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-5 border border-velora-accent/25">
                  <MapIcon className="w-7 h-7 text-velora-accent" />
                </div>
                <h3 className="font-serif text-xl text-velora-primary mb-2">JP Nagar 7th Phase, Bengaluru</h3>
                <p className="text-velora-muted text-xs md:text-sm max-w-xs mx-auto mb-6 leading-relaxed font-light">
                  Dr. Vivekananda Layout, 4th B Main Road, SkyPool Fitness Studio Building
                </p>
                <Button asChild variant="outline" size="sm" className="text-xs">
                  <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
                    OPEN IN GOOGLE MAPS
                  </a>
                </Button>
              </div>
            )}
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
