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
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

  const variantStyles = {
    primary: "bg-accent text-white hover:bg-accent-hover hover:-translate-y-0.5",
    secondary:
      "border border-border-strong bg-transparent text-text hover:border-border hover:bg-surface hover:-translate-y-0.5",
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
