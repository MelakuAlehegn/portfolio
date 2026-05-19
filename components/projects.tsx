"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section } from "./ui/section";
import { Card } from "./ui/card";
import { Pill } from "./ui/pill";
import { projects, projectCategories } from "@/lib/data";

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

const projectMonograms: Record<string, string> = {
  "Project Chimera": "PC",
  "Semantic Image-Text Alignment": "SI",
  "Data Warehouse": "DW",
  "Demand Planner MVP": "DP",
  "Telecom User Analysis": "TA",
  "Contract RAG": "CR",
};

function getProjectMonogram(name: string): string {
  return projectMonograms[name] ?? name.slice(0, 2).toUpperCase();
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const activeTabId = `project-tab-${activeCategory.replace(/\s+/g, "-").replace(/\//g, "-").toLowerCase()}`;

  return (
    <Section id="work" eyebrow="WORK" title="Selected work">
      <div
        role="tablist"
        aria-label="Filter projects by category"
        className="flex flex-wrap gap-2 mb-8"
      >
        {projectCategories.map((category) => {
          const tabId = `project-tab-${category.replace(/\s+/g, "-").replace(/\//g, "-").toLowerCase()}`;
          return (
            <button
              key={category}
              type="button"
              id={tabId}
              role="tab"
              aria-selected={activeCategory === category}
              aria-pressed={activeCategory === category}
              aria-controls="project-grid"
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-accent text-white"
                  : "border border-border bg-surface text-text-muted hover:border-border-strong hover:text-text"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div
        id="project-grid"
        role="tabpanel"
        aria-labelledby={activeTabId}
        className="grid md:grid-cols-2 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.05 }}
            >
              <Card className="h-full flex flex-col group">
                <div className="mb-6 rounded-xl bg-gradient-to-br from-accent/20 to-violet-500/10 border border-border px-6 py-5 flex items-start justify-between min-h-24">
                  <span
                    aria-hidden="true"
                    className="font-mono text-3xl font-semibold text-text/90 tracking-tight"
                  >
                    {getProjectMonogram(project.name)}
                  </span>
                  <Pill variant="muted">{project.category}</Pill>
                </div>

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
        </AnimatePresence>
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://github.com/MelakuAlehegn"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-text-muted hover:text-accent transition-colors"
        >
          More on GitHub
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </Section>
  );
}
