"use client";

import { contact } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-12 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-muted">
          Melaku Alehegn · {currentYear}
        </p>

        <a
          href={contact.portfolioRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-text-muted hover:text-accent transition-colors"
        >
          Source on GitHub
          <span className="text-text-subtle"> · portfolio</span>
        </a>
      </div>
    </footer>
  );
}
