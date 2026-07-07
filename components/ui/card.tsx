"use client";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  const hoverStyles = hover
    ? "transition-colors duration-200 hover:border-border-strong hover:bg-surface-elevated"
    : "";

  return (
    <div
      className={`rounded-xl border border-border bg-surface px-5 py-5 md:px-6 md:py-6 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}
