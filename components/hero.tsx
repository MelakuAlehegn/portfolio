"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "./ui/eyebrow";
import { Button } from "./ui/button";
import { heroStats } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 pt-32 pb-24 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Glow blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] glow-blob pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative z-10 max-w-6xl mx-auto text-center"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mb-8"
        >
          <Eyebrow>SOFTWARE ENGINEER · AI / ML</Eyebrow>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-text mb-6"
        >
          Building AI systems that{" "}
          <span className="bg-gradient-to-r from-accent to-violet-400 bg-clip-text text-transparent">
            ship to production
          </span>
          .
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          I&apos;m Melaku — a software engineer working on agentic AI and production ML.
          I build the unsexy infrastructure between LLMs and reliable software:
          memory, role-separated agents, output validation, the architecture nobody
          shows you in tutorials.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button href="#work" variant="primary">
            View my work
          </Button>
          <Button href="#writing" variant="secondary">
            Read my writing
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
        >
          {heroStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-mono text-2xl md:text-3xl font-semibold text-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-text-muted max-w-[180px]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
