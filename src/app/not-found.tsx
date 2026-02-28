import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Container size="sm" className="text-center">
        <p className="font-mono text-sm uppercase tracking-widest text-primary mb-4">
          404
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          You&apos;re offline from this page
        </h1>
        <p className="text-base text-foreground/65 mb-10 max-w-md mx-auto">
          This page doesn&apos;t exist — but that&apos;s okay. The best things
          happen when you&apos;re not looking at a screen anyway.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/">Go Home</Button>
          <Button href="/challenge" variant="secondary">
            Take the Challenge
          </Button>
        </div>
      </Container>
    </div>
  );
}
