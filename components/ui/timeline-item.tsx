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
      className="relative pl-8 md:pl-10 pb-12 last:pb-0"
    >
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
      <div className="absolute left-0 top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-border-strong bg-bg" />

      <div className="space-y-4">
        <div>
          <h3 className="font-serif text-xl leading-tight text-text md:text-2xl">{company}</h3>
          <p className="mt-1 text-sm uppercase tracking-[0.22em] text-text-subtle">
            {role}
          </p>
          <p className="mt-2 text-sm text-text-muted">
            {dates} · {location}
          </p>
        </div>

        <ul className="space-y-2">
          {achievements.map((achievement, i) => (
            <li key={i} className="relative pl-4 text-sm leading-7 text-text-muted md:text-base">
              <span className="absolute left-0 top-3 h-1.5 w-1.5 rounded-full bg-text-subtle" />
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
