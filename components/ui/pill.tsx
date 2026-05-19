"use client";

interface PillProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "muted";
}

export function Pill({ children, variant = "default" }: PillProps) {
  if (variant === "accent") {
    return (
      <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-accent-soft text-accent">
        {children}
      </span>
    );
  }

  if (variant === "muted") {
    return (
      <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border border-border/60 bg-surface/80 text-text-subtle">
        {children}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border border-border bg-surface text-text-muted">
      {children}
    </span>
  );
}
