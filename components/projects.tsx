"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
import { Section } from "./ui/section";
import { Card } from "./ui/card";
import { Pill } from "./ui/pill";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <Section id="work" eyebrow="WORK" title="Selected work">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.08 }}
          >
            <Card className="h-full flex flex-col">
              {/* Thumbnail area */}
              <div className="mb-6 rounded-xl bg-gradient-to-br from-accent/20 to-violet-500/10 border border-border p-6 flex items-center justify-center min-h-[120px]">
                <span className="font-mono text-lg font-semibold text-text">
                  {project.name}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <p className="text-sm text-accent font-medium mb-2">
                  {project.tagline}
                </p>
                <h3 className="text-xl md:text-2xl font-semibold text-text mb-3">
                  {project.name}
                </h3>
                <p className="text-text-muted leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 5).map((tag) => (
                    <Pill key={tag} variant="accent">
                      {tag}
                    </Pill>
                  ))}
                  {project.tags.length > 5 && (
                    <Pill>+{project.tags.length - 5} more</Pill>
                  )}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-text hover:text-accent transition-colors"
                >
                  <GithubIcon className="h-4 w-4" />
                  View on GitHub
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Card>
          </motion.div>
        ))}

        {/* More on GitHub card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3, ease: "easeOut", delay: projects.length * 0.08 }}
        >
          <Card className="h-full flex flex-col items-center justify-center min-h-[300px] md:min-h-full">
            <GithubIcon className="h-12 w-12 text-text-muted mb-4" />
            <h3 className="text-xl font-semibold text-text mb-2">More on GitHub</h3>
            <p className="text-text-muted text-center mb-6 max-w-xs">
              Explore additional projects and contributions on my GitHub profile.
            </p>
            <a
              href="https://github.com/MelakuAlehegn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
            >
              Visit GitHub
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
