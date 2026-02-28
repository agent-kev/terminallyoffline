import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="font-display text-h1 font-bold tracking-tight mb-8">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-display text-h2 font-bold tracking-tight mt-12 mb-6">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display text-h3 font-semibold mt-8 mb-4">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-body leading-relaxed mb-6">{children}</p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-primary underline underline-offset-4 hover:text-emerald-lakes/80 transition-colors"
      >
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-6 italic my-8 text-foreground/80">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="font-mono bg-muted/30 px-1.5 py-0.5 rounded text-sm">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-volcanic text-cloud rounded-lg p-6 overflow-x-auto my-8 font-mono text-sm">
        {children}
      </pre>
    ),
    ...components,
  };
}
