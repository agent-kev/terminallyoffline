import { InputHTMLAttributes, useId } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export function Input({ label, error, className = "", id: externalId, ...props }: InputProps) {
  const generatedId = useId();
  const inputId = externalId || generatedId;

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium mb-2">{label}</label>
      )}
      <input
        id={inputId}
        className={`w-full px-4 py-3 rounded-lg border border-foreground/10 bg-surface text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
          error ? "border-pohutukawa ring-1 ring-pohutukawa" : ""
        } ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1.5 text-sm text-pohutukawa">{error}</p>
      )}
    </div>
  );
}
