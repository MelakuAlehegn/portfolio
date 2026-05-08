"use client";

import { Section } from "./ui/section";

export function About() {
  return (
    <Section id="about" eyebrow="ABOUT" title="I build software at the edge of AI and production reality.">
      <div className="max-w-3xl">
        <div className="space-y-6 text-lg text-text-muted leading-relaxed">
          <p>
            Currently a Data Scientist at Arifpay in Addis Ababa, where I work on payment
            fraud detection, merchant credit scoring, and continuous-learning pipelines
            with MLflow, Celery, and Airflow.
          </p>
          <p>
            Outside of work, I go deep into the architectural side of agentic AI — how
            to build LLM-based systems that survive production constraints. I write
            about what I learn, ship code under load, and contribute to open source when
            a project earns it.
          </p>
        </div>
      </div>
    </Section>
  );
}
