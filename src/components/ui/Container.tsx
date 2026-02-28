import { ReactNode } from "react";

const sizes = {
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
};

export function Container({
  children,
  size = "lg",
  className = "",
}: {
  children: ReactNode;
  size?: keyof typeof sizes;
  className?: string;
}) {
  return (
    <div className={`mx-auto px-6 sm:px-8 ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
}
