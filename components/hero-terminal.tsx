"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { contact, navLinks, resume } from "@/lib/data";

export function HeroTerminal() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
      className="rounded-2xl border border-border bg-surface p-6 md:p-7"
    >
      <div className="flex items-center justify-between">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-text-subtle">
          Focus
        </p>
        <span className="font-mono text-xs uppercase tracking-[0.24em] text-text-subtle">
          01
        </span>
      </div>

      <div className="mt-6 space-y-5">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-text-subtle">
            Currently focused on
          </p>
          <p className="mt-2 text-lg leading-8 text-text">
            Agent systems, data pipelines, and production ML that stays readable.
          </p>
        </div>

        <div className="grid gap-4 border-t border-border pt-5 sm:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-text-subtle">
              A few quick anchors
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-text-muted">
              <li>Ship work that survives real usage.</li>
              <li>Keep architecture simple enough to maintain.</li>
              <li>Make the interface support the writing, not compete with it.</li>
            </ul>
          </div>
          <div className="sm:border-l sm:border-border sm:pl-4">
            <p className="text-sm uppercase tracking-[0.2em] text-text-subtle">
              Reading it as design
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-text-muted">
              <li>Quiet surfaces instead of chrome.</li>
              <li>Editorial spacing over dense panels.</li>
              <li>Typography does most of the work.</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-5 flex flex-wrap gap-4">
          {navLinks.slice(0, 3).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-1 text-sm text-text-muted transition-colors hover:text-text"
            >
              {link.label}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>

        <div className="border-t border-border pt-5 flex flex-col gap-2 text-sm">
          <a
            href={`mailto:${contact.email}`}
            className="text-text-muted transition-colors hover:text-text"
          >
            {contact.email}
          </a>
          <a
            href={resume.href}
            download={resume.downloadName}
            className="text-text-muted transition-colors hover:text-text"
          >
            Resume download
          </a>
        </div>
      </div>
    </motion.aside>
  );
}
