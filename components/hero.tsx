"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "./ui/eyebrow";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section id="about" className="scroll-mt-24 px-6 md:px-12 pt-32 pb-20 md:pb-24">
      <div className="mx-auto max-w-6xl">
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
            className="mb-7"
          >
            <Eyebrow>AI / ML / DATA ENGINEER</Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="max-w-3xl font-serif text-3xl leading-tight text-text"
          >
            I&apos;m Melaku Alehegn, an AI, machine learning, and data engineer
            building reliable systems from messy real-world data.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="mt-8 max-w-2xl border-t border-border pt-8 text-base leading-8 text-text-muted"
          >
            I work across the full path from data ingestion to model behavior —
            pipelines, evaluation loops, retrieval systems, application APIs, and
            the infrastructure that keeps those pieces understandable. It sits at
            the intersection of backend engineering, applied machine learning, and
            data systems: software clear enough to maintain and useful enough to
            survive production.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button href="#work" variant="primary">
              View work
            </Button>
            <Button href="#contact" variant="secondary">
              Get in touch
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
