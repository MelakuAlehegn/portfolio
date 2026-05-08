"use client";

interface PillProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
}

export function Pill({ children, variant = "default" }: PillProps) {
  if (variant === "accent") {
    return (
      <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-accent-soft text-accent">
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
