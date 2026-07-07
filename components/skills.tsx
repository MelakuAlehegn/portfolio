"use client";

import { motion } from "framer-motion";
import { Section } from "./ui/section";
import { skills, certifications } from "@/lib/data";

function CertificationCard({ cert, index }: { cert: typeof certifications[0]; index: number }) {
  const monogram = cert.issuer
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.08 }}
    >
      <div className="flex items-center gap-4 border-b border-border py-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-xs font-mono text-text-subtle">
          {monogram}
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="truncate text-sm font-semibold text-text md:text-base">
            {cert.name}
          </h4>
          <p className="text-sm text-text-muted">
            {cert.issuer} · {cert.date}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  const skillGroups = Object.entries(skills);

  return (
    <Section id="skills" eyebrow="STACK" title="Skills & stack">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
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
              <p className="mt-3 text-sm leading-7 text-text-muted">
                {items.join(" · ")}
              </p>
            </motion.div>
          ))}
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="border-t border-border pt-4 text-xs font-semibold uppercase tracking-[0.22em] text-text-subtle"
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
