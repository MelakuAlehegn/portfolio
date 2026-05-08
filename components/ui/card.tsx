"use client";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  const hoverStyles = hover
    ? "transition-all duration-300 hover:border-border-strong hover:-translate-y-0.5"
    : "";

  return (
    <div
      className={`rounded-2xl border border-border bg-surface p-6 md:p-8 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}
