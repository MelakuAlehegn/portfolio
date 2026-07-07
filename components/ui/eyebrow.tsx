"use client";

interface EyebrowProps {
  children: React.ReactNode;
}

export function Eyebrow({ children }: EyebrowProps) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.28em] text-text-subtle">
      <span className="h-px w-6 bg-border-strong" />
      {children}
    </span>
  );
}
