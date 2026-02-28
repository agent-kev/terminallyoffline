import { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms and conditions for using the Terminally Offline website.",
};

export default function TermsPage() {
  return (
    <>
      {/* Header spacer for fixed nav */}
      <div className="h-24" />

      <Section>
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-3">
            Terms of Use
          </h1>
          <p className="text-sm text-foreground/50 font-mono mb-12">
            Last updated: 28 February 2026
          </p>

          <div className="space-y-10 text-foreground/70 text-sm leading-relaxed">
            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using terminallyoffline.club
                (&ldquo;the Website&rdquo;), you accept and agree to be bound by
                these Terms of Use. If you do not agree to these terms, please do
                not use the Website. These terms are governed by the laws of New
                Zealand.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                2. About Our Services
              </h2>
              <p className="mb-3">
                Terminally Offline provides:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Encouragement and ideas for reducing screen time and
                  disconnecting from digital devices
                </li>
                <li>
                  Journal content — articles about digital wellness, boredom,
                  and intentional living
                </li>
                <li>
                  A newsletter for subscribers interested in disconnecting
                </li>
              </ul>
              <p className="mt-3">
                All content is provided for general informational and
                encouragement purposes only. We do not sell products or services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                3. Health Disclaimer
              </h2>
              <p>
                The ideas and suggestions on this Website are not medical or
                psychological advice. Reducing screen time is generally
                beneficial, but if you are experiencing mental health
                difficulties, please consult a qualified professional. We are
                not responsible for any consequences arising from your decision
                to change your device usage habits.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                4. Intellectual Property
              </h2>
              <p>
                All content on the Website — including text, design, graphics,
                logos, the Terminally Offline brand, and journal articles — is
                owned by Terminally Offline and protected by international
                copyright law. You may not reproduce, distribute,
                or create derivative works from our content without written
                permission.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                5. Disclaimer of Warranties
              </h2>
              <p>
                The Website and all content are provided &ldquo;as is&rdquo;
                and &ldquo;as available&rdquo; without warranties of any kind,
                either express or implied. We do not guarantee that the Website
                will be uninterrupted, error-free, or free of harmful
                components.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                6. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, Terminally
                Offline shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages arising from your use
                of the Website.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                7. Modifications
              </h2>
              <p>
                We reserve the right to modify these terms at any time.
                Significant changes will be communicated via email to
                subscribers and posted on this page. Continued use of the
                Website after changes constitutes acceptance of the updated
                terms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                8. Governing Law
              </h2>
              <p>
                These terms are governed by applicable law. Any disputes
                Any disputes shall be resolved in the jurisdiction of the
                applicable courts.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                9. Contact
              </h2>
              <p>
                For questions about these terms, contact us at{" "}
                <a
                  href="mailto:hello@terminallyoffline.club"
                  className="text-primary hover:underline"
                >
                  hello@terminallyoffline.club
                </a>
                .
              </p>
              <p className="mt-2">
                Terminally Offline
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
