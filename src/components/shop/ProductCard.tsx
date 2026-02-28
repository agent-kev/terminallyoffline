import { ReactNode } from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export type Product = {
  name: string;
  price: string;
  description: string;
  category: string;
  recommended?: boolean;
  affiliateUrl?: string;
};

const categoryStyles: Record<string, { gradient: string; icon: ReactNode; accent: string }> = {
  Dumbphones: {
    gradient: "from-tui/40 via-bush/20 to-tui/10",
    accent: "text-tui dark:text-emerald-lakes/70",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
    ),
  },
  Books: {
    gradient: "from-pohutukawa/25 via-warm/10 to-pohutukawa/5",
    accent: "text-pohutukawa/60 dark:text-warm/50",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg>
    ),
  },
  Journals: {
    gradient: "from-pounamu/30 via-emerald-lakes/15 to-pounamu/5",
    accent: "text-pounamu/60 dark:text-emerald-lakes/50",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
    ),
  },
  Accessories: {
    gradient: "from-milford/30 via-foreground/10 to-milford/10",
    accent: "text-foreground/40 dark:text-milford/50",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
    ),
  },
};

export function ProductCard({ product }: { product: Product }) {
  const style = categoryStyles[product.category] || categoryStyles.Accessories;

  return (
    <Card hover className="h-full flex flex-col">
      {/* Category-tinted image placeholder */}
      <div className={`aspect-[4/3] rounded-xl bg-gradient-to-br ${style.gradient} mb-4 flex flex-col items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)", backgroundSize: "20px 20px"}} />
        <div className={`relative ${style.accent}`}>
          {style.icon}
        </div>
        <span className={`relative font-mono text-[10px] uppercase tracking-[0.2em] mt-3 ${style.accent} opacity-60`}>
          {product.category === "Dumbphones" ? "Minimal Phone" : product.category === "Books" ? "Book" : product.category === "Journals" ? "Journal" : "Accessory"}
        </span>
      </div>

      <div className="flex items-start justify-between gap-2 mb-1">
        <h3 className="font-semibold text-base">{product.name}</h3>
        {product.recommended && (
          <Badge variant="primary" className="shrink-0 text-[10px]">Recommended</Badge>
        )}
      </div>

      <p className="font-mono text-xs text-primary mb-2">{product.price}</p>
      <p className="text-sm text-foreground/65 leading-relaxed flex-1">
        {product.description}
      </p>

      {product.affiliateUrl && (
        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 border-2 border-bush text-bush hover:bg-bush hover:text-cloud dark:border-cloud dark:text-cloud dark:hover:bg-cloud dark:hover:text-volcanic px-4 py-2 text-sm"
        >
          View Product
        </a>
      )}
    </Card>
  );
}
