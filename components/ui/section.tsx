"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "./eyebrow";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  eyebrow?: string;
  title?: string;
  className?: string;
  centered?: boolean;
}

export function Section({
  id,
  children,
  eyebrow,
  title,
  className = "",
  centered = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-24 md:py-36 px-6 md:px-12 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`max-w-6xl mx-auto ${centered ? "text-center" : ""}`}
      >
        {(eyebrow || title) && (
          <div className={`mb-12 ${centered ? "flex flex-col items-center" : ""}`}>
            {eyebrow && (
              <div className="mb-4">
                <Eyebrow>{eyebrow}</Eyebrow>
              </div>
            )}
            {title && (
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-text">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
}
