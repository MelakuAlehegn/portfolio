"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { navLinks, resume } from "@/lib/data";

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4 md:pt-6">
      <nav
        className={`mx-auto max-w-5xl flex items-center justify-between px-4 md:px-6 py-3 rounded-full border transition-all duration-300 ${
          isScrolled
            ? "border-border bg-bg/80 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          className="font-mono font-semibold text-lg text-text hover:text-accent transition-colors"
        >
          MELAKU
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-muted hover:text-text transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button
            href={resume.href}
            variant="secondary"
            download={resume.downloadName}
            className="px-5 py-2.5 text-sm"
          >
            Resume
          </Button>
          <Button href="#contact" variant="primary" className="px-5 py-2.5 text-sm">
            Get in touch
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <a
            href={resume.href}
            download={resume.downloadName}
            className="px-3 py-2 rounded-full border border-border bg-surface text-xs font-medium text-text-muted hover:text-text hover:border-border-strong transition-colors"
          >
            Resume
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full border border-border bg-surface text-text"
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-5xl rounded-2xl border border-border bg-surface p-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium text-text-muted hover:text-text hover:bg-surface-elevated transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-border flex flex-col gap-2">
              <Button
                href={resume.href}
                variant="secondary"
                download={resume.downloadName}
                className="w-full"
              >
                Resume
              </Button>
              <Button href="#contact" variant="primary" className="w-full">
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
