"use client";

interface EyebrowProps {
  children: React.ReactNode;
}

export function Eyebrow({ children }: EyebrowProps) {
  return (
    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium uppercase tracking-widest bg-accent-soft text-accent">
      {children}
    </span>
  );
}
