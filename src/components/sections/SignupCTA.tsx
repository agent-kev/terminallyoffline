"use client";

import { useActionState } from "react";
import { subscribeAction } from "@/actions/subscribe";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const initialState = { success: false, message: "" };

export function SignupCTA({
  heading = "Stay in touch (ironically)",
  subheading = "Occasional emails about disconnecting. No spam, no noise — just honest ideas from the offline world.",
}: {
  heading?: string;
  subheading?: string;
}) {
  const [state, formAction, pending] = useActionState(
    subscribeAction,
    initialState
  );

  return (
    <section className="py-20 md:py-28 bg-volcanic text-cloud">
      <Container size="sm" className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-lakes mb-4">
          Newsletter
        </p>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">{heading}</h2>
        <p className="text-base text-cloud/60 mb-10 max-w-md mx-auto leading-relaxed">
          {subheading}
        </p>

        {state.success ? (
          <div className="rounded-xl bg-emerald-lakes/10 border border-emerald-lakes/20 p-8">
            <p className="text-emerald-lakes font-medium text-lg">{state.message}</p>
          </div>
        ) : (
          <form action={formAction} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <label htmlFor="signup-email" className="sr-only">Email address</label>
            <input
              id="signup-email"
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              aria-label="Email address"
              className="flex-1 px-5 py-3.5 rounded-full border border-cloud/20 bg-white/10 text-cloud placeholder:text-cloud/40 focus:outline-none focus:ring-2 focus:ring-emerald-lakes focus:border-transparent transition-all backdrop-blur-sm"
            />
            <Button type="submit" disabled={pending} className="whitespace-nowrap">
              {pending ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        )}

        {state.message && !state.success && (
          <p className="mt-3 text-sm text-pohutukawa">{state.message}</p>
        )}

        <p className="mt-5 text-xs text-cloud/50">
          No spam. Just occasional dispatches from the offline world.
        </p>
      </Container>
    </section>
  );
}
