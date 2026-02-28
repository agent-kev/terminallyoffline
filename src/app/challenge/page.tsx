import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { FAQ } from "@/components/sections/FAQ";
import { SignupCTA } from "@/components/sections/SignupCTA";
import { HERO_IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "The 30-Day Offline Challenge",
  description:
    "Four rules. Four weeks. One radical experiment in disconnection. Take the 30-Day Offline Challenge and prove that being unreachable is the ultimate luxury.",
};

const rules = [
  {
    number: "01",
    title: "No social media",
    description:
      "Delete the apps. All of them. Instagram, TikTok, X, Facebook, Reddit, YouTube. If it has a feed, it goes. You can reinstall them on Day 31.",
    icon: "M18 6 6 18M6 6l12 12",
  },
  {
    number: "02",
    title: "Phone in the drawer by 8pm",
    description:
      "Every evening, your phone goes in a drawer, a box, or another room. It stays there until morning. Buy an alarm clock if you need to.",
    icon: "M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5ZM12 8v4l3 3",
  },
  {
    number: "03",
    title: "No phone at meals",
    description:
      "Every meal — breakfast, lunch, dinner, snacks — is phone-free. Eating alone? Even better. Just eat. Taste your food. Look out the window.",
    icon: "M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z",
  },
  {
    number: "04",
    title: "One screen-free day per week",
    description:
      "Pick a day. Saturday works well. For 24 hours, no screens at all. No phone, no laptop, no tablet, no TV. Just you and the physical world.",
    icon: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z",
  },
];

const weeklyBreakdown = [
  {
    question: "Week 1: The Detox",
    answer:
      "Focus on removing social media and establishing the 8pm phone curfew. This is the hardest week — expect phantom phone reaches, restlessness, and a strong urge to 'just check quickly.' Resist. Fill the gaps with walks, books, conversations, or comfortable silence. By day 4, the reaching slows down.",
  },
  {
    question: "Week 2: The Boredom",
    answer:
      "Add the phone-free meals rule. This week, boredom will arrive in force. Don't fight it — boredom is the point. Your Default Mode Network is coming back online. Start a notebook, cook a real meal, sit in your garden. The restlessness gives way to something spacious.",
  },
  {
    question: "Week 3: The Clarity",
    answer:
      "Introduce your first screen-free day. This is when most people report the shift — thoughts become clearer, attention span recovers, conversations deepen. Ideas arrive unprompted. You start to notice things you've walked past for months. This is the week that makes the challenge worth it.",
  },
  {
    question: "Week 4: The New Normal",
    answer:
      "Maintain all four rules. By now, the challenge feels less like deprivation and more like freedom. Time expands. You're sleeping better, reading more, connecting deeper. You'll start to wonder why you ever lived differently. After Day 30, you choose what to bring back — and what to leave behind permanently.",
  },
];

const benefits = [
  { title: "Better Sleep", description: "No blue light before bed means falling asleep faster and sleeping deeper.", emoji: "🌙" },
  { title: "Recovered Attention", description: "Your ability to focus on a single task for extended periods returns.", emoji: "🎯" },
  { title: "Deeper Relationships", description: "Without a phone to retreat into, conversations go places they never did.", emoji: "💬" },
  { title: "More Time", description: "The average person reclaims 4+ hours per day. What would you do with that?", emoji: "⏰" },
  { title: "Creative Insight", description: "Your Default Mode Network reactivates, bringing ideas you didn't know you had.", emoji: "💡" },
  { title: "Reduced Anxiety", description: "Less comparison, less outrage, less information overload. Just peace.", emoji: "🍃" },
];

const faqItems = [
  {
    question: "Do I have to give up my phone completely?",
    answer:
      "No. The challenge is about reducing mindless use, not going off-grid. You can still make calls, send texts, use maps, and handle essential communication. The rules target passive scrolling, social media, and the habits that steal your attention without giving anything back.",
  },
  {
    question: "What if I need my phone for work?",
    answer:
      "The rules are designed to work around professional obligations. The 8pm curfew, meal rule, and screen-free day all happen outside typical work hours. For social media, most jobs don't require you to personally scroll Instagram — if yours does, we'd argue that's part of the problem.",
  },
  {
    question: "Can I still watch TV/Netflix?",
    answer:
      "During the week, yes — though we encourage you to be intentional about it (choose what to watch before you sit down, not after). On your screen-free day, no. That one day is completely screen-free.",
  },
  {
    question: "What about podcasts and music?",
    answer:
      "We recommend one commute per week in silence — just you and your thoughts. Otherwise, podcasts and music are fine. The challenge targets the visual, attention-fragmenting use patterns, not all audio.",
  },
  {
    question: "Is this just for individuals or can teams do it?",
    answer:
      "Both. We offer a structured 6-week corporate program for teams of 10+. Check out our Teams page for more details, or take the individual challenge right here.",
  },
  {
    question: "What do I get when I complete it?",
    answer:
      "Beyond the life-changing benefits? You'll earn your Offline Passport — a cryptographically verified digital credential proving your achievement. Future tiers will include 7-day, 90-day, and 365-day challenges with increasing verification.",
  },
  {
    question: "When does the challenge start?",
    answer:
      "The official launch is Offline October 2026. Sign up now to be notified when registration opens and to receive the preparation guide. You can also start your own unofficial challenge anytime — the rules work whether we're watching or not.",
  },
  {
    question: "I'm based outside New Zealand — can I still participate?",
    answer:
      "Absolutely. The challenge is global. While we're a New Zealand-rooted brand (and deeply inspired by Aotearoa's relationship with nature), disconnection knows no borders. Join from anywhere.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function ChallengePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero
        title="The 30-Day Offline Challenge"
        subtitle="Four rules. Four weeks. One radical experiment in disconnection. Are you ready to find out who you are without a screen?"
        ctaText="Sign Up Now"
        ctaHref="#signup"
        height="half"
        imageSrc={HERO_IMAGES.challenge}
        imageAlt="Sunlit forest trail"
      />

      {/* The Four Rules */}
      <Section>
        <div className="text-center mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
            The Rules
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold">Four rules. That&apos;s it.</h2>
          <p className="mt-3 text-sm text-foreground/65 max-w-md mx-auto">
            Simple to understand. Hard to follow. Worth every uncomfortable moment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {rules.map((rule) => (
            <Card key={rule.number} hover>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={rule.icon} />
                  </svg>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-foreground/65 font-bold uppercase tracking-wider">
                    Rule {rule.number}
                  </span>
                  <h3 className="font-display text-lg sm:text-xl mt-0.5 mb-2">
                    {rule.title}
                  </h3>
                  <p className="text-sm text-foreground/65 leading-relaxed">
                    {rule.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Weekly Breakdown */}
      <FAQ title="Week by Week" items={weeklyBreakdown} />

      {/* Benefits */}
      <Section variant="muted">
        <div className="text-center mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
            Benefits
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold">What you&apos;ll gain</h2>
          <p className="mt-3 text-sm text-foreground/65 max-w-md mx-auto">
            What people report after completing the challenge.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {benefits.map((benefit) => (
            <Card key={benefit.title}>
              <span className="text-2xl mb-3 block">{benefit.emoji}</span>
              <h3 className="font-semibold text-base mb-1.5">
                {benefit.title}
              </h3>
              <p className="text-sm text-foreground/65 leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <FAQ items={faqItems} />

      {/* Signup CTA */}
      <div id="signup">
        <SignupCTA
          heading="Ready to take the challenge?"
          subheading="Sign up to be notified when the 30-Day Offline Challenge launches with Offline October 2026."
        />
      </div>
    </>
  );
}
