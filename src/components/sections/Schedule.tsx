"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Clock, Calendar } from "lucide-react";

type Category = "ALL" | "YOGA" | "WESTERN DANCE" | "BHARATANATYAM";

interface ScheduleItem {
  id: string;
  category: "YOGA" | "WESTERN DANCE" | "BHARATANATYAM";
  name: string;
  badge: string;
  days: string;
  times: string[];
  accentColor: string;
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
  },
  {
    id: "yoga-ladies",
    category: "YOGA",
    name: "Yoga — Exclusive Ladies Batch",
    badge: "For Body & Mind",
    days: "Monday – Saturday",
    times: ["09:00 AM – 10:00 AM"],
    accentColor: "text-aquora-green-light",
  },
  {
    id: "yoga-evening",
    category: "YOGA",
    name: "Yoga — Evening Batch",
    badge: "For Body & Mind",
    days: "Monday – Saturday",
    times: ["07:30 PM – 08:30 PM"],
    accentColor: "text-aquora-green-light",
  },
  {
    id: "dance-western",
    category: "WESTERN DANCE",
    name: "Western Dance Batches",
    badge: "For Passion",
    days: "Monday | Wednesday | Friday",
    times: ["04:00 PM – 05:00 PM", "05:00 PM – 06:00 PM", "06:00 PM – 07:00 PM"],
    accentColor: "text-aquora-purple-light",
  },
  {
    id: "dance-bharatanatyam",
    category: "BHARATANATYAM",
    name: "Bharatanatyam Batches",
    badge: "For Tradition",
    days: "Tuesday | Thursday | Saturday",
    times: ["04:00 PM – 05:00 PM", "05:00 PM – 06:00 PM", "06:00 PM – 07:00 PM"],
    accentColor: "text-aquora-gold",
  },
];

const FILTERS: Category[] = ["ALL", "YOGA", "WESTERN DANCE", "BHARATANATYAM"];

export function Schedule() {
  const [activeFilter, setActiveFilter] = useState<Category>("ALL");

  const filteredSchedule = SCHEDULE_DATA.filter(
    (item) => activeFilter === "ALL" || item.category === activeFilter
  );

  return (
    <section id="schedule" className="py-28 md:py-40 bg-aquora-bg text-aquora-foreground border-b border-aquora-gold/20 relative overflow-hidden">
      {/* Subtle ambient lighting visible through glass */}
      <div className="absolute top-1/3 -left-20 w-[500px] h-[500px] rounded-full bg-aquora-purple/8 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-aquora-green/8 blur-[160px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-[0.35em] font-medium text-aquora-gold mb-3 block">
            Weekly Timetable
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-aquora-foreground mb-4 tracking-wide">
            CLASS SCHEDULE
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-aquora-gold to-transparent mx-auto mb-6" />
          <p className="text-aquora-muted text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed">
            Plan your dedicated practice across morning, afternoon, and evening sessions.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-16">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 cursor-pointer ${
                activeFilter === filter
                  ? "bg-aquora-gold text-aquora-black shadow-[0_0_20px_rgba(212,175,55,0.3)] border border-aquora-gold font-semibold"
                  : "glass-card-inner rounded-full text-aquora-foreground/80 hover:border-aquora-gold/50 hover:text-aquora-gold-light"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Desktop Editorial Table Layout */}
        <div className="hidden lg:block max-w-5xl mx-auto mb-16 glass-panel-dark rounded-3xl overflow-hidden">
          <div className="grid grid-cols-12 bg-white/[0.03] backdrop-blur-sm border-b border-white/10 py-4 px-8 text-[11px] uppercase tracking-[0.25em] font-semibold text-aquora-gold">
            <div className="col-span-4">Program &amp; Focus</div>
            <div className="col-span-4">Weekly Schedule</div>
            <div className="col-span-4">Timings / Batches</div>
          </div>

          <div className="divide-y divide-white/5">
            {filteredSchedule.map((item) => (
              <div 
                key={item.id} 
                className="grid grid-cols-12 items-center py-6 px-8 hover:bg-white/[0.04] transition-colors"
              >
                <div className="col-span-4 pr-4">
                  <span className={`text-[10px] uppercase tracking-wider block mb-1 font-medium ${item.accentColor}`}>
                    {item.badge}
                  </span>
                  <h3 className="font-serif text-lg text-aquora-foreground font-normal">
                    {item.name}
                  </h3>
                </div>

                <div className="col-span-4 flex items-center gap-2.5 text-sm text-aquora-foreground/80 font-light">
                  <Calendar size={14} className="text-aquora-gold shrink-0" />
                  <span>{item.days}</span>
                </div>

                <div className="col-span-4 space-y-1.5 font-mono text-xs text-aquora-gold-light">
                  {item.times.map((t, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Clock size={12} className="text-aquora-gold/70 shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet Stacked Schedule Cards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-5 mb-16">
          <AnimatePresence>
            {filteredSchedule.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="p-6 glass-panel-dark rounded-2xl hover:border-aquora-gold/50 transition-colors"
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[10px] uppercase tracking-[0.25em] font-medium ${item.accentColor}`}>
                    {item.badge}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-aquora-muted">
                    {item.category}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-aquora-foreground mb-3 font-normal">
                  {item.name}
                </h3>

                <div className="flex items-center gap-2 text-xs text-aquora-foreground/80 mb-4 pb-3 border-b border-white/10 font-light">
                  <Calendar size={13} className="text-aquora-gold shrink-0" />
                  <span>{item.days}</span>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-aquora-gold font-medium block">
                    Available Batches:
                  </span>
                  <div className="flex flex-col gap-1.5 font-mono text-xs text-aquora-gold-light">
                    {item.times.map((time, idx) => (
                      <div key={idx} className="flex items-center gap-2 glass-card-inner px-3 py-1.5 rounded-lg border border-white/10">
                        <Clock size={12} className="text-aquora-gold/80 shrink-0" />
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
        <div className="text-center pt-8 border-t border-aquora-gold/20 max-w-xl mx-auto">
          <p className="font-serif italic text-lg text-aquora-gold-light mb-5 font-light">
            Ready to experience a trial class with our instructors?
          </p>
          <Button asChild size="md" className="tracking-[0.2em] text-xs">
            <a href="#trial">
              BOOK A TRIAL CLASS
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
