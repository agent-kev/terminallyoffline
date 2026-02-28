import { ReactNode } from "react";

export function Card({
  children,
  hover = false,
  className = "",
}: {
  children: ReactNode;
  hover?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-foreground/[0.08] bg-surface shadow-sm p-6 sm:p-8 ${
        hover
          ? "transition-all duration-300 hover:shadow-md hover:border-primary/20 hover:-translate-y-1"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
