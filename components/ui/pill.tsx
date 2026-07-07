"use client";

interface PillProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "muted";
}

export function Pill({ children, variant = "default" }: PillProps) {
  if (variant === "accent") {
    return (
      <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium text-accent">
        {children}
      </span>
    );
  }

  if (variant === "muted") {
    return (
      <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-text-subtle">
        {children}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium text-text-muted">
      {children}
    </span>
  );
}
