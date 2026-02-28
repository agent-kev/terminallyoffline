import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { SignupCTA } from "@/components/sections/SignupCTA";
import { Section } from "@/components/ui/Section";
import { Countdown } from "@/components/ui/Countdown";
import { HERO_IMAGES } from "@/lib/images";

export default function Home() {
  return (
    <>
      <Hero
        title="The ultimate luxury in 2026 is being unreachable."
        subtitle="Join the 30-Day Offline Challenge. Disconnect from the noise, reconnect with what matters, and prove you did it."
        ctaText="Take the Challenge"
        ctaHref="/challenge"
        imageSrc={HERO_IMAGES.home}
        imageAlt="Misty mountain peaks at dawn"
      />

      <StatsBar />

      <HowItWorks />

      {/* Countdown to Offline October */}
      <Section variant="muted">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
            Offline October 2026
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-10">
            The first challenge begins in
          </h2>
          <Countdown />
          <p className="mt-8 text-sm text-foreground/50">
            Sign up now to be ready when it starts.
          </p>
        </div>
      </Section>

      {/* Manifesto */}
      <Section variant="primary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
            We believe boredom is a birthright.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-cloud/80 mb-6">
            Somewhere between the scroll and the swipe, we forgot what silence
            sounds like. We traded campfires for content feeds and bush walks for
            blue light. The Terminally Offline Club exists because the most
            radical thing you can do in 2026 is put your phone down.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-cloud/70">
            This isn&apos;t anti-technology. It&apos;s pro-intention. We&apos;re not
            Luddites — we&apos;re people who&apos;ve decided that being unreachable is
            the new luxury, and that the best version of yourself is the one that
            doesn&apos;t need a notification to feel alive.
          </p>
        </div>
      </Section>

      <SignupCTA />

      <Testimonials />
    </>
  );
}
