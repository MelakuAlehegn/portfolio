"use client";

import { motion } from "framer-motion";
import { Section } from "./ui/section";
import { skills, certifications } from "@/lib/data";

function CertificationCard({ cert, index }: { cert: typeof certifications[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.08 }}
    >
      <div className="grid gap-2 border-b border-border py-4 sm:grid-cols-[120px_minmax(0,1fr)]">
        <div className="font-mono text-xs uppercase tracking-[0.22em] text-text-subtle">
          {cert.date}
        </div>
        <div>
          <h4 className="text-sm font-semibold text-text md:text-base">
            {cert.name}
          </h4>
          <p className="mt-1 text-sm text-text-muted">{cert.issuer}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  const skillGroups = Object.entries(skills);

  return (
    <Section id="skills" eyebrow="STACK" title="Skills & stack">
      <div className="space-y-10">
        <div className="grid gap-8 sm:grid-cols-2">
          {skillGroups.map(([label, items], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.06 }}
              className="border-t border-border pt-4"
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-text-subtle">
                {label}
              </h3>
              <div className="mt-3 flex flex-wrap gap-x-2 gap-y-2 text-sm leading-7 text-text-muted">
                {items.map((item, itemIndex) => (
                  <span key={item} className="inline-flex items-center">
                    {item}
                    {itemIndex < items.length - 1 && <span className="ml-2 text-text-subtle">•</span>}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-border pt-4">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-xs font-semibold uppercase tracking-[0.22em] text-text-subtle"
          >
            Certifications
          </motion.h3>
          <div className="mt-2">
            {certifications.map((cert, index) => (
              <CertificationCard key={cert.name} cert={cert} index={index} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
