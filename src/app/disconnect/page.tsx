import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { FAQ } from "@/components/sections/FAQ";
import { SignupCTA } from "@/components/sections/SignupCTA";
import { HERO_IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Disconnect",
  description:
    "Not a programme. Just an invitation to try putting your phone down. Gentle ideas for disconnecting.",
};

const ideas = [
  {
    title: "Leave your phone in another room",
    description:
      "Start with an hour. Put it in a drawer, a bag, the kitchen bench. Notice how often you reach for something that isn't there. That's the habit showing itself.",
    icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
  },
  {
    title: "Eat one meal without a screen",
    description:
      "No phone on the table. No TV in the background. Just you and the food. If you're with someone, talk. If you're alone, taste. It's surprisingly hard at first.",
    icon: "M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z",
  },
  {
    title: "Walk without your phone",
    description:
      "Leave it at home. Not in your pocket on silent — at home. Walk around the block, to the shop, through the park. Let yourself be unreachable for twenty minutes.",
    icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  },
  {
    title: "Sleep without your phone in the room",
    description:
      "Buy an alarm clock. Charge your phone in the hallway. The first morning you wake up without reaching for a screen is worth the $15.",
    icon: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z",
  },
  {
    title: "Try a screen-free morning",
    description:
      "From waking up until you leave the house (or start work), no screens. Make coffee. Stretch. Look out the window. See what your brain does when it's not immediately fed.",
    icon: "M17 18a5 5 0 0 0-10 0M12 2v1M4.22 4.22l.71.71M1 12h1M4.22 19.78l.71-.71M12 23v-1M19.78 19.78l-.71-.71M23 12h-1M19.78 4.22l-.71.71",
  },
  {
    title: "Sit somewhere and do nothing",
    description:
      "A park bench, your back step, a café. No phone, no book, no podcast. Just sit. Watch people. Watch clouds. Let yourself be bored. Boredom is where your best ideas live.",
    icon: "M18 6 6 18M6 6l12 12",
  },
];

const faqItems = [
  {
    question: "Is this a challenge or a programme?",
    answer:
      "Neither, really. It's a collection of gentle ideas. There's no sign-up, no streak counter, no leaderboard. Try one thing. If it resonates, try another. If not, that's completely fine. We're not here to guilt anyone.",
  },
  {
    question: "I need my phone for work. Is this realistic?",
    answer:
      "Absolutely. None of these ideas ask you to go off-grid. They're about the mindless use — the scrolling at 11pm, the phone-on-the-table-at-dinner, the reaching-for-it-every-two-minutes. Your work calls are safe.",
  },
  {
    question: "What's the 'tag out / tag in' thing?",
    answer:
      "It's borrowed from wrestling. When you're overwhelmed, you tag out — step away from the digital. When you're ready, you tag back in on your terms. It's not about quitting technology. It's about choosing when you engage with it.",
  },
  {
    question: "Why is this free? What's the catch?",
    answer:
      "There's no catch. This is a non-profit project. No ads, no sponsors, no data harvesting. We built it because we think the internet has enough noise, and not enough encouragement to step away from it.",
  },
  {
    question: "Who is behind this?",
    answer:
      "A small team. We're not experts or gurus — just people who noticed we felt better when we put our phones down, and thought others might too.",
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

export default function DisconnectPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero
        title="Not a programme. Just an invitation."
        subtitle="Try putting your phone down. See what happens. That's it."
        ctaText="Read On"
        ctaHref="#ideas"
        height="half"
        imageSrc={HERO_IMAGES.disconnect}
        imageAlt="Sunlit forest trail"
      />

      {/* Introduction */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
            An Honest Start
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8">
            We&apos;re not going to tell you what to do.
          </h2>
          <div className="space-y-6 text-base text-foreground/65 leading-relaxed">
            <p>
              There are enough people on the internet telling you how to live.
              We don&apos;t want to be another one. We don&apos;t have a 30-day
              programme, a step-by-step system, or a proprietary method. We just
              have a few ideas that worked for us.
            </p>
            <p>
              The truth is, most of us know we spend too much time on our
              phones. We don&apos;t need another article with statistics about
              screen time to tell us that. We need someone to say: it&apos;s okay
              to put it down. You won&apos;t miss anything important. And the
              things you&apos;ll find on the other side — boredom, quiet,
              presence — those are worth the discomfort.
            </p>
            <p>
              So here are some gentle ideas. Try one. Try none. Come back when
              you&apos;re ready.
            </p>
          </div>
        </div>
      </Section>

      {/* Ideas Grid */}
      <Section variant="muted" id="ideas">
        <div className="text-center mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
            Ideas
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold">
            Six gentle suggestions
          </h2>
          <p className="mt-3 text-sm text-foreground/65 max-w-md mx-auto">
            Not rules. Not requirements. Just things to try when you&apos;re ready.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {ideas.map((idea) => (
            <Card key={idea.title} hover>
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d={idea.icon} />
                </svg>
              </div>
              <h3 className="font-semibold text-base mb-2">{idea.title}</h3>
              <p className="text-sm text-foreground/65 leading-relaxed">
                {idea.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Tag Out / Tag In */}
      <Section variant="primary">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-lakes mb-4">
            The Concept
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
            Tag out. Tag in.
          </h2>
          <div className="space-y-6 text-base sm:text-lg text-cloud/80 leading-relaxed">
            <p>
              Borrowed from wrestling. When you&apos;re overwhelmed, you tag out —
              step away from the digital world. Put the phone down. Close the
              laptop. Step outside. Let someone or something else take over for
              a while.
            </p>
            <p>
              When you&apos;re ready — actually ready, not just bored — you tag
              back in. On your terms. With intention. That&apos;s the whole idea.
            </p>
            <p className="text-cloud/60">
              It&apos;s not about quitting technology. It&apos;s about choosing
              when you engage with it, instead of letting it choose for you.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <FAQ items={faqItems} />

      {/* Signup */}
      <SignupCTA />
    </>
  );
}
