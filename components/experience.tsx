"use client";

import { Section } from "./ui/section";
import { TimelineItem } from "./ui/timeline-item";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience" eyebrow="EXPERIENCE" title="Where I&apos;ve worked">
      <div className="max-w-4xl">
        {experience.map((item, index) => (
          <TimelineItem
            key={item.id}
            company={item.company}
            role={item.role}
            dates={item.dates}
            location={item.location}
            achievements={item.achievements}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}
