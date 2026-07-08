"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { navLinks, resume } from "@/lib/data";

export function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4 md:pt-6">
      <nav
        className="mx-auto flex max-w-4xl items-center justify-between gap-6 rounded-full border border-border/60 bg-bg/60 px-5 py-3 backdrop-blur-md md:px-6"
      >
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="font-mono text-sm font-semibold tracking-[0.28em] text-text transition-colors hover:text-accent"
          >
            MELAKU
          </a>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-muted transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button
            href={resume.href}
            variant="secondary"
            download={resume.downloadName}
            className="px-4 py-2 text-sm"
          >
            Resume
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <a
            href={resume.href}
            download={resume.downloadName}
            className="rounded-md border border-border bg-surface px-3 py-2 text-xs font-medium text-text-muted transition-colors hover:border-border-strong hover:text-text"
          >
            Resume
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-md border border-border bg-surface p-2 text-text"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-border bg-bg p-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-text-muted transition-colors hover:bg-surface hover:text-text"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
