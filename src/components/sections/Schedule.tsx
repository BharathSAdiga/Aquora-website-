"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Clock, Calendar, Navigation } from "lucide-react";

const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("No. 3/1, 1st Floor, SkyPool Fitness Studio Building, 4th B Main Road, Dr. Vivekananda Layout, 7th Phase, J.P. Nagar, Bengaluru - 560078, Karnataka, India")}`;

type Category = "ALL" | "YOGA" | "WESTERN DANCE" | "BHARATANATYAM";

interface ScheduleItem {
  id: string;
  category: "YOGA" | "WESTERN DANCE" | "BHARATANATYAM";
  name: string;
  badge: string;
  days: string;
  times: string[];
  accentColor: string;
  badgeBorder: string;
}

const SCHEDULE_DATA: ScheduleItem[] = [
  {
    id: "yoga-morning",
    category: "YOGA",
    name: "Yoga — Morning Batches",
    badge: "For Body & Mind",
    days: "Monday – Saturday",
    times: ["06:00 AM – 07:00 AM", "07:00 AM – 08:00 AM"],
    accentColor: "text-aquora-green-light",
    badgeBorder: "border-aquora-green/30 bg-aquora-green/15 text-aquora-green-light",
  },
  {
    id: "yoga-ladies",
    category: "YOGA",
    name: "Yoga — Exclusive Ladies Batch",
    badge: "For Body & Mind",
    days: "Monday – Saturday",
    times: ["09:00 AM – 10:00 AM"],
    accentColor: "text-aquora-green-light",
    badgeBorder: "border-aquora-green/30 bg-aquora-green/15 text-aquora-green-light",
  },
  {
    id: "yoga-evening",
    category: "YOGA",
    name: "Yoga — Evening Batch",
    badge: "For Body & Mind",
    days: "Monday – Saturday",
    times: ["07:30 PM – 08:30 PM"],
    accentColor: "text-aquora-green-light",
    badgeBorder: "border-aquora-green/30 bg-aquora-green/15 text-aquora-green-light",
  },
  {
    id: "dance-western",
    category: "WESTERN DANCE",
    name: "Western Dance Batches",
    badge: "For Passion",
    days: "Monday | Wednesday | Friday",
    times: ["04:00 PM – 05:00 PM", "05:00 PM – 06:00 PM", "06:00 PM – 07:00 PM"],
    accentColor: "text-aquora-purple-light",
    badgeBorder: "border-aquora-purple/30 bg-aquora-purple/15 text-aquora-purple-light",
  },
  {
    id: "dance-bharatanatyam",
    category: "BHARATANATYAM",
    name: "Bharatanatyam Batches",
    badge: "For Tradition",
    days: "Tuesday | Thursday | Saturday",
    times: ["04:00 PM – 05:00 PM", "05:00 PM – 06:00 PM", "06:00 PM – 07:00 PM"],
    accentColor: "text-aquora-beige",
    badgeBorder: "border-aquora-beige/30 bg-aquora-beige/15 text-aquora-beige",
  },
];

const FILTERS: Category[] = ["ALL", "YOGA", "WESTERN DANCE", "BHARATANATYAM"];

export function Schedule() {
  const [activeFilter, setActiveFilter] = useState<Category>("ALL");

  const filteredSchedule = SCHEDULE_DATA.filter(
    (item) => activeFilter === "ALL" || item.category === activeFilter
  );

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <section id="schedule" className="py-20 sm:py-28 md:py-40 bg-aquora-bg text-aquora-foreground border-b border-aquora-border relative overflow-hidden">
      {/* Background atmospheric glows */}
      <div className="absolute top-1/3 -left-20 w-[450px] sm:w-[550px] h-[450px] sm:h-[550px] rounded-full bg-aquora-purple/10 blur-[140px] sm:blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[450px] sm:w-[550px] h-[450px] sm:h-[550px] rounded-full bg-aquora-green/10 blur-[140px] sm:blur-[170px] pointer-events-none" />

      <Container className="relative z-10 px-4 sm:px-6">
        
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpVariant}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 md:mb-18"
        >
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] font-medium text-aquora-beige-muted block mb-3">
            Weekly Timetable
          </span>
          <h2 className="font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-aquora-foreground tracking-tight mb-4">
            YOUR WEEK. YOUR MOVEMENT.
          </h2>
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-aquora-beige to-transparent mx-auto mb-5 sm:mb-6" />
          <p className="text-aquora-foreground/75 text-sm sm:text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed">
            Thoughtfully structured morning, afternoon, and evening sessions in our architectural JP Nagar studio.
          </p>
        </motion.div>

        {/* Filter Navigation Glass Tabs with Mobile Horizontal Swipe */}
        <div className="flex items-center gap-2 sm:gap-3.5 mb-10 sm:mb-16 overflow-x-auto scrollbar-none pb-2 sm:pb-0 px-1 sm:justify-center">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`shrink-0 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[10.5px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.22em] font-semibold transition-all duration-300 cursor-pointer touch-press ${
                activeFilter === filter
                  ? "dark:bg-aquora-beige dark:text-aquora-black bg-gradient-to-r from-[#1A633E] to-[#278654] text-white shadow-[0_8px_25px_rgba(26,99,62,0.35)] dark:shadow-[0_8px_25px_rgba(232,213,181,0.3)] scale-[1.02]"
                  : "glass-pill-dark text-aquora-muted dark:hover:text-aquora-beige hover:text-aquora-green-light dark:hover:border-aquora-beige/40 hover:border-aquora-green/40"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Desktop Editorial Horizontal Schedule Table */}
        <div className="hidden lg:block max-w-5xl mx-auto mb-16 glass-panel-dark rounded-3xl overflow-hidden border border-aquora-border shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
          {/* Table Header */}
          <div className="grid grid-cols-12 dark:bg-white/5 bg-black/[0.03] backdrop-blur-md border-b border-aquora-border py-4.5 px-8 text-[11px] uppercase tracking-[0.25em] font-semibold text-aquora-beige">
            <div className="col-span-5">Program &amp; Focus</div>
            <div className="col-span-3">Days</div>
            <div className="col-span-4">Batch Timings</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-aquora-border">
            {filteredSchedule.map((item) => (
              <div 
                key={item.id} 
                className="grid grid-cols-12 items-center py-6 px-8 dark:hover:bg-white/5 hover:bg-black/[0.02] transition-colors group"
              >
                <div className="col-span-5 pr-4">
                  <span className={`text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full border inline-block mb-1.5 font-medium ${item.badgeBorder}`}>
                    {item.badge}
                  </span>
                  <h3 className="font-serif text-xl text-aquora-foreground font-normal group-hover:text-aquora-beige transition-colors">
                    {item.name}
                  </h3>
                </div>

                <div className="col-span-3 flex items-center gap-2.5 text-xs text-aquora-foreground/80 font-light">
                  <Calendar size={14} className="text-aquora-gold shrink-0" />
                  <span>{item.days}</span>
                </div>

                <div className="col-span-4 space-y-1.5 font-mono text-xs text-aquora-foreground">
                  {item.times.map((t, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Clock size={12} className="text-aquora-gold shrink-0" />
                      <span className="px-2.5 py-1 dark:bg-white/5 bg-black/[0.04] dark:border-white/10 border-black/[0.08] rounded-md font-medium">
                        {t}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet Stacked Glass Schedule Cards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-4 sm:gap-5 mb-12 sm:mb-16">
          <AnimatePresence>
            {filteredSchedule.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="p-5 sm:p-7 glass-panel-dark rounded-3xl border border-aquora-border shadow-sm hover:border-aquora-beige/30 transition-all"
              >
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className={`text-[9.5px] sm:text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full border font-medium ${item.badgeBorder}`}>
                    {item.badge}
                  </span>
                  <span className="text-[9.5px] sm:text-[10px] uppercase tracking-wider text-aquora-muted font-medium">
                    {item.category}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-aquora-foreground mb-2 sm:mb-3 font-normal">
                  {item.name}
                </h3>

                <div className="flex items-center gap-2 text-xs text-aquora-foreground/80 mb-3.5 pb-2.5 border-b border-aquora-border font-light">
                  <Calendar size={13} className="text-aquora-gold shrink-0" />
                  <span>{item.days}</span>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <span className="text-[9.5px] sm:text-[10px] uppercase tracking-widest text-aquora-beige font-semibold block">
                    Available Batches:
                  </span>
                  <div className="flex flex-col gap-1.5 font-mono text-xs text-aquora-foreground">
                    {item.times.map((time, idx) => (
                      <div key={idx} className="flex items-center gap-2 dark:bg-white/5 bg-black/[0.04] px-3 py-1.5 rounded-lg border dark:border-white/10 border-black/[0.08]">
                        <Clock size={12} className="text-aquora-gold shrink-0" />
                        <span>{time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Action Prompt */}
        <div className="text-center pt-6 sm:pt-8 border-t border-aquora-border max-w-xl mx-auto">
          <p className="font-serif italic text-base sm:text-lg text-aquora-beige mb-4 sm:mb-5 font-light">
            Ready to visit our architectural sanctuary in JP Nagar?
          </p>
          <Button asChild size="md" variant="primary" className="tracking-[0.2em] text-xs h-12 px-8 rounded-full touch-press justify-center">
            <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
              <Navigation size={14} className="text-aquora-gold" />
              <span>GET DIRECTIONS</span>
            </a>
          </Button>
        </div>

      </Container>
    </section>
  );
}
