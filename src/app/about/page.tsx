import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { SignupCTA } from "@/components/sections/SignupCTA";
import { HERO_IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Terminally Offline. Encouragement to disconnect.",
};

const values = [
  {
    title: "Intention Over Abstinence",
    description:
      "We don't believe in throwing your phone in a lake. We believe in choosing when you engage with technology — deliberately, sparingly, and with full awareness of the trade-offs.",
  },
  {
    title: "Presence Is the Point",
    description:
      "This isn't about willpower or streaks. It's about discovering what happens when you stop filling every moment with stimulation. The boredom is the feature, not the bug.",
  },
  {
    title: "Non-Profit, Non-Preachy",
    description:
      "We don't sell anything. We don't guilt anyone. This is a free project built by people who felt better when they put their phones down, and thought others might too.",
  },
  {
    title: "Privacy by Default",
    description:
      "We collect minimal data, use no tracking cookies, and don't sell anything. Your attention is yours. We're just here to remind you of that.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="The Story"
        subtitle="Why a project about going offline started on the internet."
        ctaText="Disconnect"
        ctaHref="/disconnect"
        height="half"
        imageSrc={HERO_IMAGES.about}
        imageAlt="Morning light through mountain fog"
      />

      {/* Origin */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
            The Beginning
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8">
            It started with a question
          </h2>
          <div className="space-y-6 text-base text-foreground/65 leading-relaxed">
            <p>
              What would happen if you just... stopped? Not forever. Not
              dramatically. Just for a bit. What if you put the phone in another
              room and let yourself be bored?
            </p>
            <p>
              Terminally Offline started in 2026 — born from the observation
              that the people who seemed most alive were the ones least
              connected. The ones who left their phones in the car. Who
              disappeared into nature for days. The families who still ate
              dinner without a screen on the table.
            </p>
            <p>
              We noticed something else too: a growing exhaustion. Nine hours a
              day on screens. A generation that couldn&apos;t remember what
              silence felt like. And a lot of websites telling people how bad
              their screen time was, without actually helping them put the
              phone down.
            </p>
            <p>
              So we built this. Not a programme, not a product, not a company.
              Just a website with some encouragement and a few gentle ideas.
              If it helps one person put their phone down for an hour, that&apos;s
              enough.
            </p>
          </div>
        </div>
      </Section>

      {/* Manifesto */}
      <Section variant="primary">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-lakes mb-4">
            Our Manifesto
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-10">
            We believe boredom is a birthright.
          </h2>
          <div className="space-y-6 text-base sm:text-lg text-cloud/80 leading-relaxed text-left sm:text-center">
            <p>
              Somewhere between the scroll and the swipe, we forgot what silence
              sounds like. We traded campfires for content feeds and long walks
              for blue light.
            </p>
            <p>
              Terminally Offline exists because the most radical thing you can
              do in 2026 is put your phone down. This isn&apos;t anti-technology.
              It&apos;s pro-intention.
            </p>
            <p>
              We&apos;re not Luddites — we&apos;re people who&apos;ve decided that being
              unreachable is the new luxury, and that the best version of
              yourself is the one that doesn&apos;t need a notification to feel
              alive.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section variant="muted">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-bold">
            What We Stand For
          </h2>
          <p className="mt-4 text-sm text-foreground/65 max-w-lg mx-auto">
            Four principles that guide everything we build.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-surface rounded-2xl p-6 border border-foreground/[0.06]"
            >
              <h3 className="font-semibold text-base mb-3">{value.title}</h3>
              <p className="text-sm text-foreground/65 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <SignupCTA />
    </>
  );
}
