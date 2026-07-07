"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { Section } from "./ui/section";
import { featuredPosts, writingLinks } from "@/lib/data";

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

export function Writing() {
  return (
    <Section id="writing" eyebrow="WRITING" title="I publish technical deep-dives on engineering and AI.">
      <div className="space-y-10">
        <div className="border-t border-border">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.06 }}
              className="grid gap-4 border-b border-border py-6 md:grid-cols-[48px_minmax(0,1fr)_160px] md:gap-6 md:py-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-text-subtle">
                <BookOpen className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-serif text-xl leading-tight text-text md:text-2xl">
                  {post.title}
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-text-muted md:text-base">
                  {post.excerpt}
                </p>
              </div>

              <div className="md:justify-self-end">
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-text-muted transition-colors hover:text-text"
                >
                  Read
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {writingLinks.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, ease: "easeOut", delay: (index + 1) * 0.06 }}
              className="flex items-center justify-between border-t border-border pt-4 text-text-muted transition-colors hover:text-text"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border">
                  {link.title.includes("Medium") ? (
                    <MediumIcon className="h-5 w-5" />
                  ) : (
                    <HashnodeIcon className="h-5 w-5" />
                  )}
                </span>
                <span className="text-sm font-medium">{link.title}</span>
              </div>
              <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  );
}
