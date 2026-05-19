"use client";

import { motion } from "framer-motion";
import { Section } from "./ui/section";
import { Card } from "./ui/card";
import { Pill } from "./ui/pill";
import { skills, certifications } from "@/lib/data";

function CertificationCard({ cert, index }: { cert: typeof certifications[0]; index: number }) {
  // Generate monogram from issuer
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
      <Card hover={false} className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-surface-elevated border border-border flex items-center justify-center flex-shrink-0">
          <span className="font-mono text-sm font-semibold text-text">{monogram}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-text text-sm md:text-base truncate">{cert.name}</h4>
          <p className="text-text-muted text-sm">
            {cert.issuer} · {cert.date}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}

export function Skills() {
  const skillGroups = [
    { label: "Languages", items: skills.languages },
    { label: "Data & ML", items: skills.dataML },
    { label: "Backend", items: skills.backend },
    { label: "LLMs & AI", items: skills.llmsAI },
    { label: "Cloud & BI", items: skills.cloudBI },
  ];

  return (
    <Section id="skills" eyebrow="STACK" title="How I work">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left column: Skills */}
        <div className="space-y-8">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.08 }}
            >
              <h3 className="text-xs font-semibold uppercase tracking-wider text-text-subtle mb-3">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right column: Certifications */}
        <div className="space-y-4">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-xs font-semibold uppercase tracking-wider text-text-subtle mb-4"
          >
            Certifications
          </motion.h3>
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.name} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}
