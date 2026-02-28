import { ReactNode, ButtonHTMLAttributes } from "react";
import Link from "next/link";

const variants = {
  primary:
    "bg-primary-button text-white hover:bg-primary-button/90 shadow-sm",
  secondary:
    "border-2 border-bush text-bush hover:bg-bush hover:text-cloud dark:border-cloud dark:text-cloud dark:hover:bg-cloud dark:hover:text-volcanic",
  ghost:
    "text-foreground hover:bg-foreground/5",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

type ButtonProps = {
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizeStyles;
  href?: string;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 ${variants[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
