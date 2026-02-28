import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/sections/ContactForm";
import { SignupCTA } from "@/components/sections/SignupCTA";
import { HERO_IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Teams",
  description:
    "A 6-week corporate digital wellness programme. Reduce burnout, improve focus, and build a culture of intentional technology use.",
};

const stats = [
  { number: "$8.8T", label: "Global cost of burnout per year" },
  { number: "67%", label: "Of workers feel burned out" },
  { number: "4.2hrs", label: "Lost to distractions per day" },
];

const weeks = [
  {
    week: "Week 1-2",
    title: "Audit & Awareness",
    description:
      "Teams track their current digital habits. Anonymous surveys, screen time audits, and baseline measurements. No judgement — just data.",
  },
  {
    week: "Week 3-4",
    title: "The Disconnection Protocol",
    description:
      "Structured reduction. Meeting-free hours, notification-free blocks, and team-wide phone-free lunches. New communication norms established.",
  },
  {
    week: "Week 5-6",
    title: "Integration & Measurement",
    description:
      "Embedding new habits. Final measurements, team retrospective, individual Offline Passports issued, and a sustainable digital wellness framework.",
  },
];

const included = [
  {
    title: "Facilitated Workshops",
    description: "Three 90-minute sessions led by a digital wellness facilitator.",
  },
  {
    title: "Team Dashboard",
    description: "Anonymous, aggregated tracking of team-wide digital wellness metrics.",
  },
  {
    title: "Manager Toolkit",
    description: "Guides for leading by example and creating supportive team norms.",
  },
  {
    title: "Individual Passports",
    description: "Every participant earns their Offline Passport upon completion.",
  },
  {
    title: "Follow-Up Report",
    description: "Comprehensive report on team progress, ROI metrics, and recommendations.",
  },
  {
    title: "Ongoing Support",
    description: "30 days of post-programme email support and quarterly check-ins.",
  },
];

export default function TeamsPage() {
  return (
    <>
      <Hero
        title="Offline for Teams"
        subtitle="A 6-week corporate digital wellness programme. Because the best investment in your team's performance is giving them permission to disconnect."
        ctaText="Get in Touch"
        ctaHref="#contact"
        height="half"
        imageSrc={HERO_IMAGES.teams}
        imageAlt="Starlit mountain landscape"
      />

      {/* Stats */}
      <Section variant="dark">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.number} className="text-center">
              <p className="font-mono text-4xl sm:text-5xl font-bold text-emerald-lakes mb-2">
                {stat.number}
              </p>
              <p className="text-sm text-cloud/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 6-Week Programme */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-bold">The Programme</h2>
          <p className="mt-4 text-body-lg text-foreground/65 max-w-lg mx-auto">
            Six weeks. Three phases. Measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {weeks.map((item) => (
            <Card key={item.week} hover className="h-full">
              <span className="font-mono text-sm text-primary font-bold">
                {item.week}
              </span>
              <h3 className="font-display text-xl mt-2 mb-3">{item.title}</h3>
              <p className="text-foreground/65 text-sm leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* What's Included */}
      <Section variant="muted">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-bold">
            What&apos;s Included
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {included.map((item) => (
            <Card key={item.title}>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-foreground/65 leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section>
        <div className="max-w-lg mx-auto">
          <Card className="text-center border-2 border-primary/20">
            <p className="font-mono text-sm uppercase tracking-widest text-primary mb-4">
              Team Programme
            </p>
            <p className="font-display text-4xl font-bold mb-2">
              $8,000 — $15,000
            </p>
            <p className="text-foreground/65 mb-6">
              NZD, depending on team size (10-100+ participants)
            </p>
            <ul className="text-sm text-foreground/65 space-y-2 mb-8 text-left max-w-xs mx-auto">
              <li>- 6-week structured programme</li>
              <li>- 3 facilitated workshops</li>
              <li>- Team dashboard & analytics</li>
              <li>- Individual Offline Passports</li>
              <li>- 30-day post-programme support</li>
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 bg-emerald-lakes text-white hover:bg-emerald-lakes/90 shadow-sm px-8 py-4 text-lg w-full"
            >
              Request a Quote
            </a>
          </Card>
        </div>
      </Section>

      <ContactForm />

      <SignupCTA
        heading="Not a team leader?"
        subheading="Take the individual 30-Day Offline Challenge instead."
      />
    </>
  );
}
