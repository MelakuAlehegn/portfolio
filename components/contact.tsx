"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { Section } from "./ui/section";
import { Button } from "./ui/button";
import { contact, resume } from "@/lib/data";

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

function MediumIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

function HashnodeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.351 8.019c.478-3.276-1.936-6.012-5.358-6.012h-.004c-.92.004-1.822.211-2.645.599l-9.95 4.883a5.467 5.467 0 00-3.046 4.907c.004 2.006 1.094 3.85 2.867 4.842l9.55 5.186c.809.44 1.717.668 2.645.672h.006c3.418 0 5.83-2.736 5.358-6.006-.15-1.045-.595-2.015-1.28-2.78a5.48 5.48 0 001.28-2.78c.147-1.011-.09-2.023-.673-2.906zM11.082 12.77l-4.63 2.271a2.145 2.145 0 01-1.714.182 2.134 2.134 0 01-1.47-1.478 2.15 2.15 0 011.178-2.524l4.629-2.27c.613-.301 1.33-.295 1.94.014.613.31 1.052.907 1.187 1.586a2.146 2.146 0 01-1.22 2.22z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "LinkedIn",
    href: contact.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    href: contact.github,
    icon: GithubIcon,
  },
  {
    label: "Medium",
    href: contact.medium,
    icon: MediumIcon,
  },
  {
    label: "Hashnode",
    href: contact.hashnode,
    icon: HashnodeIcon,
  },
];

export function Contact() {
  return (
    <Section id="contact" eyebrow="CONTACT" title="Let&apos;s build something together." centered>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="text-lg text-text-muted leading-relaxed mb-8">
          I&apos;m open to senior software, AI/ML, and data engineering roles, freelance
          work with strong technical mandates, and conversations with people building
          thoughtful systems at the data + AI intersection.
        </p>

        {/* Email button */}
        <div className="mb-12">
          <Button href={`mailto:${contact.email}`} variant="primary" className="text-lg px-8 py-4">
            <Mail className="h-5 w-5" />
            {contact.email}
          </Button>
        </div>

        {/* Social links */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface text-text-muted hover:border-border-strong hover:text-text transition-all duration-300"
            >
              <link.icon className="h-4 w-4" />
              <span className="text-sm font-medium">{link.label}</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
          ))}
          {/* Resume link */}
          <a
            href={resume.href}
            download={resume.downloadName}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface text-text-muted hover:border-border-strong hover:text-text transition-all duration-300"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span className="text-sm font-medium">Resume</span>
            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Location */}
        <p className="text-sm text-text-subtle">
          Currently in {contact.location}
        </p>
      </motion.div>
    </Section>
  );
}
