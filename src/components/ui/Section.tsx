import { ReactNode } from "react";
import { Container } from "./Container";

const bgVariants = {
  default: "bg-background",
  primary: "bg-bush text-cloud",
  muted: "bg-surface-muted",
  dark: "bg-volcanic text-cloud",
};

export function Section({
  children,
  variant = "default",
  className = "",
  containerSize = "lg",
  id,
}: {
  children: ReactNode;
  variant?: keyof typeof bgVariants;
  className?: string;
  containerSize?: "sm" | "md" | "lg" | "xl";
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 ${bgVariants[variant]} ${className}`}>
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
