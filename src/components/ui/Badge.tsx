import { ReactNode } from "react";

const badgeVariants = {
  default: "bg-foreground/10 text-foreground",
  primary: "bg-primary/10 text-primary",
  warm: "bg-pohutukawa/10 text-pohutukawa",
  muted: "bg-muted/30 text-foreground/70",
};

export function Badge({
  children,
  variant = "default",
  className = "",
}: {
  children: ReactNode;
  variant?: keyof typeof badgeVariants;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${badgeVariants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
