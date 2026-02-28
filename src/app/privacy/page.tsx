import { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Terminally Offline collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Header spacer for fixed nav */}
      <div className="h-24" />

      <Section>
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-foreground/50 font-mono mb-12">
            Last updated: 28 February 2026
          </p>

          <div className="space-y-10 text-foreground/70 text-sm leading-relaxed">
            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                1. Who We Are
              </h2>
              <p>
                Terminally Offline (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
                &ldquo;our&rdquo;) is a New Zealand-based non-profit digital
                wellness project operating at terminallyoffline.club. We are
                committed to protecting your privacy — especially given that our
                entire mission is about reducing your digital footprint.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                2. Information We Collect
              </h2>
              <p className="mb-3">
                We collect minimal information, consistent with our values:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Email address</strong> —
                  when you subscribe to our newsletter. This is the only
                  personal data we collect.
                </li>
                <li>
                  <strong className="text-foreground">
                    Basic analytics data
                  </strong>{" "}
                  — anonymised, aggregate website usage data (pages visited,
                  approximate location by country). We do not use cookies for
                  tracking.
                </li>
              </ul>
              <p className="mt-3">
                We do <strong className="text-foreground">not</strong> collect:
                phone numbers, physical addresses, payment information, social
                media profiles, or any data from your devices.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  To send you occasional emails about new articles and ideas for
                  disconnecting
                </li>
                <li>
                  To improve our website through anonymised analytics
                </li>
              </ul>
              <p className="mt-3">
                We will never sell, rent, or share your personal information with
                third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                4. Email Communications
              </h2>
              <p>
                When you subscribe, you consent to receiving occasional emails
                about our journal articles and ideas for disconnecting. Every
                email includes an unsubscribe link. We use{" "}
                <a
                  href="https://resend.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Resend
                </a>{" "}
                as our email service provider. Your email address is stored
                securely in their system in accordance with their privacy policy.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                5. Data Storage & Security
              </h2>
              <p>
                Your data is stored on servers operated by our hosting provider
                (Vercel) with data centres in multiple regions. We use
                industry-standard encryption (TLS/SSL) for all data in transit.
                We retain your email address until you unsubscribe, at which
                point it is permanently deleted within 30 days.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                6. Cookies
              </h2>
              <p>
                We use only essential cookies required for the website to
                function (such as theme preference). We do not use third-party
                tracking cookies, advertising cookies, or social media pixels.
                Your browsing is not tracked across other websites.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                7. Third-Party Services
              </h2>
              <p className="mb-3">We use the following third-party services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Vercel</strong> — website
                  hosting and deployment
                </li>
                <li>
                  <strong className="text-foreground">Resend</strong> — email
                  delivery
                </li>
              </ul>
              <p className="mt-3">
                Each of these services has their own privacy policy. We only
                share the minimum data necessary for each service to function.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                8. Your Rights
              </h2>
              <p className="mb-3">
                Under the New Zealand Privacy Act 2020 and applicable
                international privacy laws, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Unsubscribe from email communications at any time</li>
                <li>Lodge a complaint with the NZ Privacy Commissioner</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, email us at{" "}
                <a
                  href="mailto:privacy@terminallyoffline.club"
                  className="text-primary hover:underline"
                >
                  privacy@terminallyoffline.club
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                9. Children&apos;s Privacy
              </h2>
              <p>
                Our website is not directed at children under 16. We do not
                knowingly collect personal information from children. If you
                believe a child has provided us with personal information, please
                contact us and we will delete it promptly.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                10. Changes to This Policy
              </h2>
              <p>
                We may update this privacy policy from time to time. Significant
                changes will be communicated via email to subscribers. The
                &ldquo;last updated&rdquo; date at the top reflects the most
                recent revision.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                11. Contact
              </h2>
              <p>
                For privacy-related enquiries, contact us at{" "}
                <a
                  href="mailto:privacy@terminallyoffline.club"
                  className="text-primary hover:underline"
                >
                  privacy@terminallyoffline.club
                </a>
                .
              </p>
              <p className="mt-2">
                Terminally Offline
                <br />
                Aotearoa, New Zealand
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
