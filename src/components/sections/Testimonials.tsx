import { Section } from "@/components/ui/Section";

const quotes = [
  {
    text: "The cost of a thing is the amount of what I will call life which is required to be exchanged for it, immediately or in the long run.",
    author: "Henry David Thoreau",
    role: "Walden, 1854",
  },
  {
    text: "The price of anything is the amount of life you exchange for it.",
    author: "Cal Newport",
    role: "Author, Digital Minimalism",
  },
  {
    text: "Nothing is harder to do than nothing. In a world where our value is determined by our productivity, many of us find our every last minute captured.",
    author: "Jenny Odell",
    role: "Author, How to Do Nothing",
  },
];

export function Testimonials() {
  return (
    <Section>
      <div className="text-center mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
          Why it matters
        </p>
        <h2 className="font-display text-2xl sm:text-3xl font-bold">
          Voices for the offline movement
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {quotes.map((q) => (
          <div
            key={q.author}
            className="relative rounded-2xl border border-foreground/[0.06] bg-surface p-8 shadow-sm"
          >
            <svg
              className="absolute top-6 left-6 text-primary/15"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M11.3 2.6c-4.2 1.5-7 5.3-7 10.2 0 3.4 2 5.2 4.1 5.2 2 0 3.6-1.5 3.6-3.5 0-2-1.4-3.4-3.2-3.4-.4 0-.8.1-1.1.2.5-2.8 2.6-5.5 5.2-6.8L11.3 2.6zm10.2 0c-4.2 1.5-7 5.3-7 10.2 0 3.4 2 5.2 4.1 5.2 2 0 3.6-1.5 3.6-3.5 0-2-1.4-3.4-3.2-3.4-.4 0-.8.1-1.1.2.5-2.8 2.6-5.5 5.2-6.8L21.5 2.6z" />
            </svg>
            <blockquote className="relative pt-6">
              <p className="text-sm leading-relaxed text-foreground/65 mb-6 italic">
                &ldquo;{q.text}&rdquo;
              </p>
              <footer>
                <p className="text-sm font-semibold text-foreground">
                  {q.author}
                </p>
                <p className="text-xs text-foreground/50 mt-0.5">{q.role}</p>
              </footer>
            </blockquote>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
          Est. 2026 — Aotearoa, New Zealand
        </p>
        <h3 className="font-display text-xl sm:text-2xl font-bold mb-4">
          Join the founding members
        </h3>
        <p className="text-foreground/65 max-w-lg mx-auto leading-relaxed">
          We&apos;re building this from the ground up — a community of people
          who choose presence over productivity theatre. Get in early.
        </p>
      </div>
    </Section>
  );
}
