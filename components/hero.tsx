"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "./ui/eyebrow";
import { Button } from "./ui/button";
import { HeroTerminal } from "./hero-terminal";
import { heroStats } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative min-h-screen px-6 md:px-12 pt-32 pb-24 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-7 gap-12 lg:gap-8 items-start">
          {/* Left column - ~55% */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:col-span-4"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="mb-6"
            >
              <Eyebrow>AI ENGINEER · ML ENGINEER · DATA SCIENTIST</Eyebrow>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text mb-6"
            >
              Building data and AI systems that{" "}
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
              className="text-lg text-text-muted max-w-xl mb-8 leading-relaxed"
            >
              I&apos;m Melaku — I build at the intersection of data engineering, machine
              learning, and agentic AI. From fraud-detection pipelines at Arifpay to
              custom MCP clients in Java, I focus on the unsexy infrastructure that
              makes AI systems actually work in production.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.25 }}
              className="flex flex-wrap gap-4"
            >
              <Button href="#work" variant="primary">
                View my work
              </Button>
              <Button href="#contact" variant="secondary">
                Let&apos;s talk
              </Button>
            </motion.div>
          </motion.div>

          {/* Right column - ~45% */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <HeroTerminal />
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="mt-20 pt-12 border-t border-border"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {heroStats.map((stat, index) => (
              <div
                key={index}
                className={`text-center ${index < heroStats.length - 1 ? "sm:border-r sm:border-border" : ""}`}
              >
                <div className="font-mono text-3xl md:text-4xl font-semibold text-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-text-muted max-w-[180px] mx-auto">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
