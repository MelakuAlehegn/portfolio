"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { heroNowTopics } from "@/lib/data";

export function HeroNowTicker() {
  const [index, setIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % heroNowTopics.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [reducedMotion]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.35, ease: "easeOut" }}
      className="mt-10 max-w-2xl border-t border-border pt-6"
    >
      <p className="font-mono text-xs uppercase tracking-[0.24em] text-text-subtle">
        Now
      </p>
      <p className="mt-3 min-h-[1.75rem] text-sm leading-7 text-text-muted md:text-base">
        <AnimatePresence mode="wait">
          <motion.span
            key={heroNowTopics[index]}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="inline-block"
          >
            {heroNowTopics[index]}
          </motion.span>
        </AnimatePresence>
      </p>
    </motion.div>
  );
}
