import { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms and conditions for using the Terminally Offline Club website and services.",
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
            Last updated: 27 February 2026
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
                Terminally Offline Club provides:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  The 30-Day Offline Challenge — a structured digital wellness
                  programme
                </li>
                <li>
                  The Offline Passport — a digital credential for challenge
                  completion
                </li>
                <li>
                  The Offline Gallery — a curated photo gallery from challenge
                  participants
                </li>
                <li>
                  Journal content — articles about digital wellness, boredom,
                  and intentional living
                </li>
                <li>
                  Teams Programme — a corporate digital wellness offering
                </li>
                <li>
                  The Offline Shop — curated product recommendations (some via
                  affiliate links)
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                3. The 30-Day Offline Challenge
              </h2>
              <p className="mb-3">
                The challenge is a voluntary personal commitment. By
                participating, you acknowledge that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  The challenge involves voluntarily reducing your digital device
                  usage. You are responsible for ensuring this does not conflict
                  with any professional, medical, or safety obligations.
                </li>
                <li>
                  During Phase 1 (Self-Reported Verification), completion is
                  based on self-reporting. We trust participants to report
                  honestly.
                </li>
                <li>
                  We are not responsible for any consequences arising from your
                  decision to reduce device usage, including missed
                  communications or work obligations.
                </li>
                <li>
                  The challenge is not a substitute for professional mental
                  health treatment. If you are experiencing mental health
                  difficulties, please consult a qualified professional.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                4. Offline Passport
              </h2>
              <p>
                The Offline Passport is a digital credential issued upon
                completion of the challenge. It is provided as-is and does not
                constitute a professional certification, qualification, or
                guarantee of any skills or abilities. Employer recognition of the
                Passport is at the discretion of individual organisations.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                5. User Content
              </h2>
              <p className="mb-3">
                If you submit photos for the Offline Gallery or other content to
                us:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  You retain ownership of your content
                </li>
                <li>
                  You grant us a non-exclusive, worldwide licence to display,
                  reproduce, and promote your submitted content in connection
                  with the Offline Gallery and our marketing
                </li>
                <li>
                  You confirm that you have the right to submit the content and
                  that it does not infringe any third party&apos;s rights
                </li>
                <li>
                  You can request removal of your content at any time by
                  contacting us
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                6. Affiliate Links & Shop
              </h2>
              <p>
                Some product links on the Website are affiliate links. If you
                purchase through these links, we may earn a commission at no
                extra cost to you. Product recommendations reflect our genuine
                opinions and are never influenced by affiliate arrangements. We
                are not responsible for the quality, delivery, or customer
                service of third-party products purchased through affiliate
                links.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                7. Teams Programme
              </h2>
              <p>
                The Teams programme is subject to a separate service agreement
                between Terminally Offline Club and the participating
                organisation. Pricing, scope, and deliverables are agreed upon in
                writing before the programme begins. Enquiries submitted through
                the contact form do not constitute a binding agreement.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                8. Intellectual Property
              </h2>
              <p>
                All content on the Website — including text, design, graphics,
                logos, the Terminally Offline brand, and journal articles — is
                owned by Terminally Offline Club and protected by New Zealand and
                international copyright law. You may not reproduce, distribute,
                or create derivative works from our content without written
                permission.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                9. Disclaimer of Warranties
              </h2>
              <p>
                The Website and all services are provided &ldquo;as is&rdquo;
                and &ldquo;as available&rdquo; without warranties of any kind,
                either express or implied. We do not guarantee that the Website
                will be uninterrupted, error-free, or free of harmful
                components. The health and wellness information on this Website
                is for general informational purposes only and should not be
                considered medical advice.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                10. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by New Zealand law, Terminally
                Offline Club shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages arising from your use
                of the Website or services. Our total liability for any claim
                shall not exceed the amount you paid us in the 12 months
                preceding the claim (or NZ$100, whichever is greater).
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                11. Modifications
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
                12. Governing Law
              </h2>
              <p>
                These terms are governed by the laws of New Zealand. Any disputes
                shall be subject to the exclusive jurisdiction of the New Zealand
                courts.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                13. Contact
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
                Terminally Offline Club
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
