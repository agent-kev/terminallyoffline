"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Container size="sm" className="text-center">
        <p className="font-mono text-sm uppercase tracking-widest text-pohutukawa mb-4">
          Error
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          Something went wrong
        </h1>
        <p className="text-base text-foreground/65 mb-10 max-w-md mx-auto">
          We hit an unexpected error. Maybe it&apos;s a sign to step away from
          the screen for a moment — then try again.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset}>Try Again</Button>
          <Button href="/" variant="secondary">
            Go Home
          </Button>
        </div>
      </Container>
    </div>
  );
}
