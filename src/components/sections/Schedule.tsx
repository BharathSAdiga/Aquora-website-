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
    accentColor: "border-aquora-green/40 text-aquora-green-light",
  },
  {
    id: "yoga-ladies",
    category: "YOGA",
    name: "Yoga — Exclusive Ladies Batch",
    badge: "For Body & Mind",
    days: "Monday – Saturday",
    times: ["09:00 AM – 10:00 AM"],
    accentColor: "border-aquora-green/40 text-aquora-green-light",
  },
  {
    id: "yoga-evening",
    category: "YOGA",
    name: "Yoga — Evening Batch",
    badge: "For Body & Mind",
    days: "Monday – Saturday",
    times: ["07:30 PM – 08:30 PM"],
    accentColor: "border-aquora-green/40 text-aquora-green-light",
  },
  {
    id: "dance-western",
    category: "WESTERN DANCE",
    name: "Western Dance Batches",
    badge: "For Passion",
    days: "Monday | Wednesday | Friday",
    times: ["04:00 PM – 05:00 PM", "05:00 PM – 06:00 PM", "06:00 PM – 07:00 PM"],
    accentColor: "border-aquora-purple/40 text-aquora-purple-light",
  },
  {
    id: "dance-bharatanatyam",
    category: "BHARATANATYAM",
    name: "Bharatanatyam Batches",
    badge: "For Tradition",
    days: "Tuesday | Thursday | Saturday",
    times: ["04:00 PM – 05:00 PM", "05:00 PM – 06:00 PM", "06:00 PM – 07:00 PM"],
    accentColor: "border-aquora-gold/40 text-aquora-gold",
  },
];

const FILTERS: Category[] = ["ALL", "YOGA", "WESTERN DANCE", "BHARATANATYAM"];

export function Schedule() {
  const [activeFilter, setActiveFilter] = useState<Category>("ALL");

  const filteredSchedule = SCHEDULE_DATA.filter(
    (item) => activeFilter === "ALL" || item.category === activeFilter
  );

  return (
    <section id="schedule" className="py-24 md:py-36 bg-aquora-bg text-aquora-foreground border-b border-aquora-gold/20 relative">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <span className="text-xs uppercase tracking-[0.35em] font-medium text-aquora-gold mb-3 block">
            Weekly Timetable
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-aquora-foreground mb-4 tracking-wide">
            CLASS SCHEDULE
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-aquora-gold to-transparent mx-auto mb-6" />
          <p className="text-aquora-muted text-base md:text-lg font-light">
            Plan your dedicated practice across morning, afternoon, and evening sessions.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-16">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-none text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 cursor-pointer ${
                activeFilter === filter
                  ? "bg-aquora-gold text-aquora-black shadow-[0_0_20px_rgba(212,175,55,0.3)] border border-aquora-gold font-semibold"
                  : "bg-aquora-surface text-aquora-foreground/80 border border-aquora-gold/25 hover:border-aquora-gold/60 hover:text-aquora-gold-light"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Desktop Editorial Table Layout */}
        <div className="hidden lg:block max-w-5xl mx-auto mb-16 border border-aquora-gold/30 bg-aquora-surface shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-12 bg-aquora-surface-card border-b border-aquora-gold/25 py-4 px-6 text-[11px] uppercase tracking-[0.25em] font-semibold text-aquora-gold">
            <div className="col-span-4">Program &amp; Focus</div>
            <div className="col-span-4">Weekly Schedule</div>
            <div className="col-span-4">Timings / Batches</div>
          </div>

          <div className="divide-y divide-aquora-gold/15">
            {filteredSchedule.map((item) => (
              <div 
                key={item.id} 
                className="grid grid-cols-12 items-center py-5 px-6 hover:bg-aquora-surface-hover/50 transition-colors"
              >
                <div className="col-span-4 pr-4">
                  <span className="text-[10px] uppercase tracking-wider text-aquora-gold-light/80 block mb-1 font-medium">
                    {item.badge}
                  </span>
                  <h3 className="font-serif text-lg text-aquora-foreground font-normal">
                    {item.name}
                  </h3>
                </div>

                <div className="col-span-4 flex items-center gap-2 text-sm text-aquora-foreground/90">
                  <Calendar size={14} className="text-aquora-gold shrink-0" />
                  <span>{item.days}</span>
                </div>

                <div className="col-span-4 flex flex-col gap-1.5 font-mono text-xs text-aquora-gold-light">
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
                className="p-6 bg-aquora-surface border border-aquora-gold/25 hover:border-aquora-gold/60 transition-colors"
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[10px] uppercase tracking-[0.25em] font-medium px-2.5 py-0.5 border ${item.accentColor} bg-aquora-surface-card`}>
                    {item.badge}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-aquora-muted">
                    {item.category}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-aquora-foreground mb-3 font-normal">
                  {item.name}
                </h3>

                <div className="flex items-center gap-2 text-xs text-aquora-foreground/90 mb-4 pb-3 border-b border-aquora-gold/15">
                  <Calendar size={13} className="text-aquora-gold shrink-0" />
                  <span>{item.days}</span>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-aquora-gold font-medium block">
                    Available Batches:
                  </span>
                  <div className="flex flex-col gap-1.5 font-mono text-xs text-aquora-gold-light">
                    {item.times.map((time, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-aquora-surface-card px-3 py-1.5 border border-aquora-gold/15">
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
          <p className="font-serif italic text-lg text-aquora-gold-light mb-4">
            Ready to experience a trial class with our instructors?
          </p>
          <Button asChild size="md">
            <a href="#trial">
              BOOK A TRIAL CLASS
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
