import { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { ComingSoonBanner } from "@/components/ui/ComingSoonBanner";
import { SignupCTA } from "@/components/sections/SignupCTA";
import { HERO_IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Provably real photos from provably offline people. The Offline Gallery showcases moments captured by challenge participants — verified, unedited, and authentically present.",
};

const placeholderImages = [
  {
    title: "Morning mist, Milford Sound",
    location: "Fiordland, NZ",
    date: "Day 12 of 30",
    image: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=600&q=60&fit=crop",
  },
  {
    title: "Empty beach at dawn",
    location: "Piha, Auckland",
    date: "Day 7 of 30",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=60&fit=crop",
  },
  {
    title: "Tui in pohutukawa",
    location: "Coromandel Peninsula",
    date: "Day 22 of 30",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&q=60&fit=crop",
  },
  {
    title: "Rain on a tin roof",
    location: "Raglan, Waikato",
    date: "Day 15 of 30",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&q=60&fit=crop",
  },
  {
    title: "First light on volcanic rock",
    location: "Tongariro, Central Plateau",
    date: "Day 28 of 30",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&q=60&fit=crop",
  },
  {
    title: "Handwritten journal page",
    location: "Wellington",
    date: "Day 19 of 30",
    image: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=600&q=60&fit=crop",
  },
];

export default function GalleryPage() {
  return (
    <>
      <Hero
        title="The Offline Gallery"
        subtitle="Provably real photos from provably offline people. No filters. No feeds. Just presence, captured."
        ctaText="Submit Your Photos"
        ctaHref="/challenge"
        height="half"
        imageSrc={HERO_IMAGES.gallery}
        imageAlt="Moody ocean waves"
      />

      {/* Concept */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6">
            What you see when you look up
          </h2>
          <p className="text-body-lg text-foreground/65 leading-relaxed mb-4">
            The Offline Gallery is a curated collection of photographs taken by
            people during their 30-Day Offline Challenge. Each image is
            verified — captured during a confirmed period of disconnection, with
            metadata proving the photographer was truly offline.
          </p>
          <p className="text-body text-foreground/65 leading-relaxed">
            No social media uploads. No instant sharing. Just moments that
            mattered enough to photograph, submitted after the challenge was
            complete. This is what the world looks like when you&apos;re actually
            in it.
          </p>
        </div>
      </Section>

      {/* Placeholder Gallery Grid */}
      <Section variant="muted">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderImages.map((img) => (
            <div
              key={img.title}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-foreground/[0.06] shadow-sm"
            >
              {/* Background image — blurred and dimmed */}
              <Image
                src={img.image}
                alt={img.title}
                fill
                className="object-cover blur-sm scale-105 brightness-75"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Lock overlay */}
              <div className="absolute inset-0 bg-volcanic/40 flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cloud/60" aria-hidden="true">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  </div>
                  <p className="font-medium text-sm text-cloud mb-1">{img.title}</p>
                  <p className="text-xs text-cloud/60">{img.location}</p>
                </div>
              </div>

              {/* Verification metadata */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-volcanic/90 to-transparent">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-cloud/60">
                    {img.date}
                  </span>
                  <span className="font-mono text-xs text-emerald-lakes flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    Verified
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Coming Soon */}
      <Section>
        <div className="max-w-2xl mx-auto">
          <ComingSoonBanner text="Launches with Offline October 2026" />
        </div>
      </Section>

      <SignupCTA
        heading="Want to contribute?"
        subheading="Complete the 30-Day Offline Challenge and your photos could appear in the gallery."
      />
    </>
  );
}
