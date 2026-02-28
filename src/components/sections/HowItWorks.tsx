import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ReactNode } from "react";

const steps: { step: string; title: string; description: string; icon: ReactNode }[] = [
  {
    step: "01",
    title: "Sign Up",
    description:
      "Join the 30-Day Offline Challenge. Set your commitment level and tell us what you want to reclaim.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>
    ),
  },
  {
    step: "02",
    title: "Go Offline",
    description:
      "Follow the weekly structure. Start with small disconnections and build to full days without your smartphone.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" x2="12" y1="2" y2="12"/></svg>
    ),
  },
  {
    step: "03",
    title: "Get Verified",
    description:
      "Complete the challenge and earn your Offline Passport — cryptographic proof of your achievement.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <Section>
      <div className="text-center mb-14">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
          How It Works
        </p>
        <h2 className="font-display text-2xl sm:text-3xl font-bold">
          Three steps to reclaiming your attention
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((item) => (
          <Card key={item.step} hover className="h-full">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
              {item.icon}
            </div>
            <span className="font-mono text-xs text-foreground/65 font-bold uppercase tracking-wider">
              Step {item.step}
            </span>
            <h3 className="font-display text-xl sm:text-2xl mt-1 mb-3">{item.title}</h3>
            <p className="text-foreground/65 text-sm leading-relaxed">
              {item.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
