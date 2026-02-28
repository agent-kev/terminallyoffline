import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ComingSoonBanner } from "@/components/ui/ComingSoonBanner";
import { SignupCTA } from "@/components/sections/SignupCTA";
import { HERO_IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Offline Passport",
  description:
    "Your cryptographically verified proof of disconnection. Complete the challenge, earn your Offline Passport, and join the ranks of the provably unreachable.",
};

const tiers = [
  {
    name: "Explorer",
    duration: "7 Days",
    description:
      "A week without social media. The entry point. Enough to feel the difference and decide if you want more.",
    badge: "Bronze",
    accent: "from-amber-700/20 to-amber-600/5",
    ring: "border-amber-700/20",
  },
  {
    name: "Wayfinder",
    duration: "30 Days",
    description:
      "The full challenge. Four rules, four weeks. This is where real transformation happens. The flagship tier.",
    badge: "Silver",
    accent: "from-gray-400/20 to-gray-300/5",
    ring: "border-primary/20",
    featured: true,
  },
  {
    name: "Navigator",
    duration: "90 Days",
    description:
      "Three months of intentional living. For those who completed the 30-day challenge and want to go deeper.",
    badge: "Gold",
    accent: "from-yellow-600/20 to-yellow-500/5",
    ring: "border-yellow-600/20",
  },
  {
    name: "Sage",
    duration: "365 Days",
    description:
      "A full year. The highest achievement. Proof that disconnection isn't a phase — it's a way of life.",
    badge: "Platinum",
    accent: "from-emerald-lakes/20 to-pounamu/5",
    ring: "border-emerald-lakes/20",
  },
];

const roadmap = [
  {
    phase: "Phase 1",
    title: "Self-Reported Verification",
    status: "current",
    description:
      "Participants self-report their progress through daily check-ins. Trust-based system with community accountability.",
  },
  {
    phase: "Phase 2",
    title: "Screen Time Data",
    status: "upcoming",
    description:
      "Optional integration with iOS Screen Time and Android Digital Wellbeing APIs to verify reduced usage.",
  },
  {
    phase: "Phase 3",
    title: "Digital Credential",
    status: "upcoming",
    description:
      "Offline Passports issued as verifiable digital credentials — shareable, tamper-proof, and portable.",
  },
  {
    phase: "Phase 4",
    title: "Zero-Knowledge Proofs",
    status: "future",
    description:
      "Cryptographic verification that you were offline without revealing personal data. Provably unreachable, provably private.",
  },
  {
    phase: "Phase 5",
    title: "Employer Recognition",
    status: "future",
    description:
      "Offline Passports recognised by partner organisations as professional development credentials.",
  },
  {
    phase: "Phase 6",
    title: "Global Standard",
    status: "future",
    description:
      "An open standard for digital wellness verification. Interoperable across platforms and programmes worldwide.",
  },
];

export default function PassportPage() {
  return (
    <>
      <Hero
        title="The Offline Passport"
        subtitle="Your cryptographically verified proof of disconnection. Because in the attention economy, being unreachable is an achievement worth proving."
        ctaText="Earn Yours"
        ctaHref="/challenge"
        height="half"
        imageSrc={HERO_IMAGES.passport}
        imageAlt="Green fern forest canopy"
      />

      {/* What It Is */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6">
              Proof you were here. Not online.
            </h2>
            <p className="text-sm text-foreground/65 leading-relaxed mb-6">
              The Offline Passport is a verifiable credential that proves you
              completed the 30-Day Offline Challenge. It&apos;s not just a
              badge — it&apos;s cryptographic proof that you chose presence over
              productivity theatre.
            </p>
            <p className="text-body text-foreground/65 leading-relaxed">
              Starting with self-reported verification and evolving toward
              zero-knowledge proofs, the Passport will become the gold standard
              for proving digital wellness achievements — without compromising
              your privacy.
            </p>
          </div>
          <div className="bg-gradient-to-br from-pounamu/10 via-emerald-lakes/5 to-bush/10 rounded-2xl p-10 text-center border border-pounamu/15 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)", backgroundSize: "24px 24px"}} />
            <div className="relative">
              <div className="w-28 h-28 mx-auto rounded-2xl bg-gradient-to-br from-pounamu to-emerald-lakes flex items-center justify-center mb-5 shadow-lg">
                <span className="font-display text-3xl text-white tracking-tight">TO</span>
              </div>
              <p className="font-display text-xl mb-1">Offline Passport</p>
              <p className="font-mono text-xs text-foreground/40 mb-4">
                Verified Digital Credential
              </p>
              <div className="flex items-center justify-center gap-1.5 text-emerald-lakes">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
                <span className="font-mono text-xs">Cryptographically Verified</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Achievement Tiers */}
      <Section variant="muted">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-bold">
            Achievement Tiers
          </h2>
          <p className="mt-4 text-sm text-foreground/65 max-w-lg mx-auto">
            Four levels of disconnection. Each one earned, verified, and yours
            forever.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl bg-surface shadow-sm p-6 text-center border-2 transition-all hover:-translate-y-1 hover:shadow-md ${
                tier.featured ? "border-primary/30 ring-1 ring-primary/10" : tier.ring
              }`}
            >
              <div className={`w-14 h-14 mx-auto rounded-full bg-gradient-to-br ${tier.accent} flex items-center justify-center mb-4`}>
                <span className="font-mono text-xs font-bold text-foreground/50">{tier.badge}</span>
              </div>
              <h3 className="font-display text-xl mb-0.5">{tier.name}</h3>
              <p className="font-mono text-xs text-primary mb-3">
                {tier.duration}
              </p>
              <p className="text-sm text-foreground/65 leading-relaxed">
                {tier.description}
              </p>
              {tier.featured && (
                <Badge variant="primary" className="mt-4">Flagship</Badge>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Verification Roadmap */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-bold">
            Verification Roadmap
          </h2>
          <p className="mt-4 text-sm text-foreground/65 max-w-lg mx-auto">
            From trust to cryptography — how we&apos;re building provable
            disconnection.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {roadmap.map((item) => (
            <Card key={item.phase}>
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <span
                    className={`font-mono text-xs font-bold px-3 py-1 rounded-full ${
                      item.status === "current"
                        ? "bg-primary/10 text-primary"
                        : item.status === "upcoming"
                        ? "bg-foreground/10 text-foreground/65"
                        : "bg-foreground/5 text-foreground/30"
                    }`}
                  >
                    {item.phase}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-foreground/65 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* NFT Passport */}
      <Section variant="dark">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-lakes mb-3">
              Powered by Blockchain
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-cloud mb-6">
              Your passport, on-chain
            </h2>
            <p className="text-sm text-cloud/60 leading-relaxed mb-4">
              Offline Passports are issued as soulbound NFTs on Base
              (Coinbase&apos;s L2 network). Non-transferable by design — your
              achievement can&apos;t be bought, sold, or faked. It&apos;s yours
              forever.
            </p>
            <p className="text-sm text-cloud/60 leading-relaxed mb-6">
              Complete the challenge, verify your disconnection, and we
              mint your passport directly to your wallet. Zero gas costs
              for you — we cover everything.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cloud/40 border border-cloud/10 rounded-full px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-lakes" />
                ERC-721
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cloud/40 border border-cloud/10 rounded-full px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-lakes" />
                Soulbound
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cloud/40 border border-cloud/10 rounded-full px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-lakes" />
                Base L2
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cloud/40 border border-cloud/10 rounded-full px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-lakes" />
                Zero Gas
              </span>
            </div>
          </div>

          {/* NFT Preview */}
          <div className="relative">
            <div className="aspect-square max-w-sm mx-auto rounded-2xl border-2 border-emerald-lakes/20 bg-gradient-to-br from-tui/50 via-volcanic to-bush/50 p-8 flex flex-col items-center justify-center text-center">
              <div className="absolute inset-0 rounded-2xl opacity-[0.03]" style={{backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)", backgroundSize: "20px 20px"}} />
              <div className="relative">
                <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-pounamu to-emerald-lakes flex items-center justify-center mb-4">
                  <span className="font-display text-2xl text-white">TO</span>
                </div>
                <p className="font-display text-lg text-cloud mb-1">Offline Passport</p>
                <p className="font-mono text-xs text-emerald-lakes uppercase tracking-widest mb-6">Wayfinder</p>
                <div className="space-y-2 text-left">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-cloud/30">Token</span>
                    <span className="text-cloud/50">#1042</span>
                  </div>
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-cloud/30">Tier</span>
                    <span className="text-cloud/50">Silver</span>
                  </div>
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-cloud/30">Chain</span>
                    <span className="text-cloud/50">Base</span>
                  </div>
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-cloud/30">Type</span>
                    <span className="text-cloud/50">Soulbound</span>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-center gap-1.5 text-emerald-lakes">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
                  <span className="font-mono text-[10px] uppercase tracking-widest">Verified on-chain</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ZKP Coming Soon */}
      <Section>
        <div className="max-w-2xl mx-auto">
          <ComingSoonBanner text="Zero-knowledge proof verification launching in 2027" />
        </div>
      </Section>

      <SignupCTA />
    </>
  );
}
