"use client";

import { Section } from "./ui/section";

export function About() {
  return (
    <Section id="about" eyebrow="ABOUT" title="I build software at the edge of AI and production reality.">
      <div className="max-w-3xl">
        <div className="space-y-6 text-base md:text-lg text-text-muted leading-8">
          <p>
            I&apos;m an AI, machine learning, and data engineer focused on systems
            that turn messy data into reliable software.
          </p>
          <p>
            I work across data pipelines, retrieval systems, model workflows,
            backend APIs, and the practical details that make AI products useful
            after they leave a notebook.
          </p>
        </div>
      </div>
    </Section>
  );
}
