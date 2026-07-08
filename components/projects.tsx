"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section } from "./ui/section";
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

function ProjectTags({ tags }: { tags: string[] }) {
  const [expanded, setExpanded] = useState(false);
  const LIMIT = 5;
  const visible = expanded ? tags : tags.slice(0, LIMIT);
  const hidden = tags.length - LIMIT;

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {visible.map((tag) => (
        <Pill key={tag} variant="muted">
          {tag}
        </Pill>
      ))}
      {hidden > 0 && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-text-subtle transition-colors hover:border-border-strong hover:text-text"
        >
          {expanded ? "Show less" : `+${hidden} more`}
        </button>
      )}
    </div>
  );
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category.split(" · ").includes(activeCategory));

  const activeTabId = `project-tab-${activeCategory.replace(/\s+/g, "-").replace(/\//g, "-").toLowerCase()}`;

  return (
    <Section id="work" eyebrow="Projects" title="Selected work">
      <div className="space-y-6">
        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="flex flex-wrap gap-2"
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
                aria-controls="project-grid"
                onClick={() => setActiveCategory(category)}
                className={`rounded-none border-b px-0 py-1 text-sm transition-colors ${
                  activeCategory === category
                    ? "border-text text-text"
                    : "border-transparent text-text-subtle hover:text-text"
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
          className="border-t border-border"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.25, ease: "easeOut", delay: index * 0.04 }}
                className="grid gap-4 border-b border-border py-6 md:grid-cols-[56px_minmax(0,1fr)_180px] md:gap-6 md:py-8"
              >
                <div className="font-mono text-sm text-text-subtle">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="font-serif text-xl leading-tight text-text md:text-2xl">
                      {project.name}
                    </h3>
                    <span className="text-xs uppercase tracking-[0.22em] text-text-subtle">
                      {project.category}
                    </span>
                  </div>

                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-text-subtle">
                    {project.tagline}
                  </p>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-text-muted md:text-base">
                    {project.description}
                  </p>

                  <ProjectTags tags={project.tags} />
                </div>

                <div className="md:justify-self-end">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-text-muted transition-colors hover:text-text"
                  >
                    <GithubIcon className="h-4 w-4" />
                    View
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <div className="pt-2">
          <a
            href="https://github.com/MelakuAlehegn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-text-muted transition-colors hover:text-text"
          >
            More on GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </Section>
  );
}
