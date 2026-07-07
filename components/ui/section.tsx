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
  const layoutClassName = centered
    ? "text-center"
    : "grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12";

  return (
    <section
      id={id}
      className={`scroll-mt-24 border-t border-border/70 py-20 md:py-28 px-6 md:px-12 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`mx-auto max-w-6xl ${layoutClassName}`}
      >
        {(eyebrow || title) && (
          <div className={`${centered ? "mb-10 flex flex-col items-center" : "lg:sticky lg:top-24 lg:self-start"}`}>
            {eyebrow && (
              <div className="mb-4">
                <Eyebrow>{eyebrow}</Eyebrow>
              </div>
            )}
            {title && (
              <h2 className="max-w-sm font-serif text-3xl leading-[1.08] tracking-tight text-text md:text-5xl">
                {title}
              </h2>
            )}
          </div>
        )}
        <div className={centered ? "" : "lg:pt-1"}>
          {children}
        </div>
      </motion.div>
    </section>
  );
}
