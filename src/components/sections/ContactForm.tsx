"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          company: data.get("company"),
          email: data.get("email"),
          teamSize: data.get("teamSize"),
          message: data.get("message"),
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Unable to send your message. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <Section>
        <div className="max-w-xl mx-auto text-center">
          <div className="rounded-xl bg-primary/10 border border-primary/20 p-12">
            <h3 className="font-display text-xl sm:text-2xl mb-3">Message Sent</h3>
            <p className="text-foreground/65">
              We&apos;ll be in touch within 2 business days to discuss your
              team&apos;s offline wellness program.
            </p>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section id="contact">
      <div className="max-w-xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-4">
          Get in Touch
        </h2>
        <p className="text-center text-foreground/65 mb-10">
          Interested in a team program? Tell us about your organisation.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Input
              name="name"
              label="Your Name"
              placeholder="Jane Smith"
              required
            />
            <Input
              name="company"
              label="Company"
              placeholder="Acme Corp"
              required
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Input
              name="email"
              type="email"
              label="Email"
              placeholder="jane@acme.com"
              required
            />
            <Input
              name="teamSize"
              label="Team Size"
              placeholder="e.g. 25"
              required
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              placeholder="Tell us about your team and goals..."
              required
              className="w-full px-4 py-3 rounded-lg border border-foreground/10 bg-surface text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
            />
          </div>
          {error && (
            <div className="rounded-lg bg-pohutukawa/10 border border-pohutukawa/20 p-4">
              <p className="text-sm text-pohutukawa">{error}</p>
            </div>
          )}
          <Button type="submit" disabled={sending} className="w-full" size="lg">
            {sending ? "Sending..." : "Send Enquiry"}
          </Button>
        </form>
      </div>
    </Section>
  );
}
