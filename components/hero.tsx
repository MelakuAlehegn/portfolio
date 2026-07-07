"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "./ui/eyebrow";
import { Button } from "./ui/button";
import { HeroTerminal } from "./hero-terminal";
import { HeroNowTicker } from "./hero-now-ticker";

export function Hero() {
  return (
    <section className="px-6 md:px-12 pt-32 pb-20 md:pb-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.75fr)] lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="mb-8"
            >
              <Eyebrow>AI ENGINEER · ML ENGINEER · DATA SCIENTIST</Eyebrow>
            </motion.div>

            <div className="mb-6 flex items-center gap-3 text-sm text-text-subtle">
              <span className="h-px w-10 bg-border-strong" />
              <span>Minimal portfolio / production-minded systems</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="font-serif text-[clamp(3rem,7vw,6.5rem)] leading-[0.96] tracking-[-0.04em] text-text"
            >
              Building data and AI systems that ship to production.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="mt-6 max-w-2xl text-base leading-8 text-text-muted md:text-lg"
            >
              I&apos;m Melaku. I build production AI and ML systems end to end —
              ingestion pipelines, model lifecycles, agent loops, and the
              infrastructure underneath that has to keep them running once real
              users show up.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.25 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button href="#work" variant="primary">
                View my work
              </Button>
              <Button href="#contact" variant="secondary">
                Let&apos;s talk
              </Button>
            </motion.div>

            <HeroNowTicker />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="lg:pt-10"
          >
            <HeroTerminal />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
