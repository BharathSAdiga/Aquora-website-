"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type Category = "ALL" | "YOGA" | "WESTERN DANCE" | "BHARATANATYAM";

interface ScheduleItem {
  id: string;
  category: "YOGA" | "WESTERN DANCE" | "BHARATANATYAM";
  name: string;
  days: string;
  times: string[];
}

const SCHEDULE_DATA: ScheduleItem[] = [
  {
    id: "yoga-morning",
    category: "YOGA",
    name: "Yoga (Morning)",
    days: "Monday - Saturday",
    times: ["06:00 AM - 07:00 AM", "07:00 AM - 08:00 AM"],
  },
  {
    id: "yoga-ladies",
    category: "YOGA",
    name: "Ladies Yoga",
    days: "Monday - Saturday",
    times: ["09:00 AM - 10:00 AM"],
  },
  {
    id: "yoga-evening",
    category: "YOGA",
    name: "Evening Yoga",
    days: "Monday - Saturday",
    times: ["07:30 PM - 08:30 PM"],
  },
  {
    id: "dance-western",
    category: "WESTERN DANCE",
    name: "Western Dance",
    days: "Monday • Wednesday • Friday",
    times: ["04:00 PM - 05:00 PM", "05:00 PM - 06:00 PM", "06:00 PM - 07:00 PM"],
  },
  {
    id: "dance-bharatanatyam",
    category: "BHARATANATYAM",
    name: "Bharatanatyam",
    days: "Tuesday • Thursday • Saturday",
    times: ["04:00 PM - 05:00 PM", "05:00 PM - 06:00 PM", "06:00 PM - 07:00 PM"],
  },
];

const FILTERS: Category[] = ["ALL", "YOGA", "WESTERN DANCE", "BHARATANATYAM"];

export function Schedule() {
  const [activeFilter, setActiveFilter] = useState<Category>("ALL");

  const filteredSchedule = SCHEDULE_DATA.filter(
    (item) => activeFilter === "ALL" || item.category === activeFilter
  );

  return (
    <section id="schedule" className="py-24 md:py-32 bg-velora-bg text-velora-foreground">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-velora-primary mb-6">
            Class Schedule
          </h2>
          <div className="w-24 h-1 bg-velora-accent mx-auto rounded-full opacity-60 mb-8"></div>
          <p className="text-velora-muted text-lg">
            Find the perfect time to move, breathe, and express yourself.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-velora-primary text-velora-bg shadow-md scale-105"
                  : "bg-transparent text-velora-primary border border-velora-primary/20 hover:border-velora-primary/50 hover:bg-velora-primary/5"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Schedule Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          <AnimatePresence mode="popLayout">
            {filteredSchedule.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                key={item.id}
                className="bg-white p-6 md:p-7 rounded-xl border border-velora-accent/25 shadow-sm hover:shadow-md transition-all flex flex-col h-full"
              >
                <div className="mb-5 flex-grow">
                  <span className="inline-block px-3 py-1 bg-velora-secondary/10 text-velora-secondary text-[11px] font-bold tracking-widest uppercase rounded-full mb-3">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-2xl text-velora-primary mb-1.5">{item.name}</h3>
                  <p className="text-xs font-semibold text-velora-muted uppercase tracking-wider">
                    {item.days}
                  </p>
                </div>
                
                <div className="space-y-2.5 pt-5 border-t border-velora-accent/20 mt-auto">
                  {item.times.map((time, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-velora-accent shrink-0"></div>
                      <span className="text-velora-primary font-medium text-sm">{time}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="w-full sm:w-auto px-10 text-xs">
            <a href="#trial">
              BOOK A TRIAL CLASS
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
