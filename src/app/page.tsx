import { Hero } from "@/components/sections/Hero";
import { SignupCTA } from "@/components/sections/SignupCTA";
import { Section } from "@/components/ui/Section";
import { HERO_IMAGES } from "@/lib/images";

export default function Home() {
  return (
    <>
      <Hero
        title="The ultimate luxury is being unreachable."
        subtitle="Encouragement to disconnect. From Aotearoa, New Zealand."
        ctaText="Disconnect"
        ctaHref="/disconnect"
        imageSrc={HERO_IMAGES.home}
        imageAlt="Misty mountain peaks at dawn"
      />

      {/* Manifesto */}
      <Section variant="primary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
            We believe boredom is a birthright.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-cloud/80 mb-6">
            Somewhere between the scroll and the swipe, we forgot what silence
            sounds like. We traded campfires for content feeds and bush walks for
            blue light. Terminally Offline exists because the most radical thing
            you can do in 2026 is put your phone down.
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
    </>
  );
}
