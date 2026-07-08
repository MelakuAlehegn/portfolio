"use client";

import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  external?: boolean;
  download?: string | boolean;
  onClick?: () => void;
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  href,
  external = false,
  download,
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

  const variantStyles = {
    primary:
      "border border-text bg-text text-bg hover:border-accent hover:bg-accent hover:text-bg",
    secondary:
      "border border-border bg-transparent text-text-muted hover:border-border-strong hover:bg-surface-elevated hover:text-text",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    const linkProps = {
      ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}),
      ...(download !== undefined ? { download } : {}),
    };

    return (
      <a href={href} className={combinedClassName} {...linkProps}>
        {children}
        {external && <ArrowUpRight className="h-4 w-4" />}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
