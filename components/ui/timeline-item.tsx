"use client";

import { motion } from "framer-motion";

interface TimelineItemProps {
  company: string;
  role: string;
  dates: string;
  location: string;
  achievements: string[];
  index: number;
}

export function TimelineItem({
  company,
  role,
  dates,
  location,
  achievements,
  index,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.08 }}
      className="relative pl-8 md:pl-12 pb-12 last:pb-0"
    >
      {/* Timeline rail and dot */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
      <div className="absolute left-0 top-2 w-2 h-2 -translate-x-1/2 rounded-full bg-accent" />

      {/* Content */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-text">{company}</h3>
          <p className="text-lg font-medium text-accent">{role}</p>
          <p className="text-sm text-text-muted mt-1">
            {dates} · {location}
          </p>
        </div>

        <ul className="space-y-2">
          {achievements.map((achievement, i) => (
            <li key={i} className="text-text-muted leading-relaxed pl-4 relative">
              <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-text-subtle" />
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
