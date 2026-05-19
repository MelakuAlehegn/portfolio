"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroNowTopics } from "@/lib/data";

export function HeroNowTicker() {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

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
      className="mt-10 pt-8 border-t border-border max-w-xl"
    >
      <p className="font-mono text-sm leading-relaxed min-h-[1.5rem]">
        <span className="text-accent font-medium">now</span>
        <span className="text-text-subtle"> → </span>
        <AnimatePresence mode="wait">
          <motion.span
            key={heroNowTopics[index]}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="text-text-muted"
          >
            {heroNowTopics[index]}
          </motion.span>
        </AnimatePresence>
      </p>
      <p className="mt-3 text-xs text-text-subtle font-mono">
        → click the terminal · type{" "}
        <span className="text-text-muted">help</span>
      </p>
    </motion.div>
  );
}
