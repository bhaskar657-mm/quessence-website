import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/ui/header-2";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Quessence",
  description:
    "Learn how Quessence collects, uses, and protects your personal data. Covers analytics, session recordings, cookie usage, and your privacy rights.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main>
        <section className="bg-[var(--q-page-bg)] pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
          <div className="max-w-[800px] mx-auto">
            <h1 className="text-[clamp(2.25rem,1.5rem+3vw,3.625rem)] font-bold leading-[1.2] tracking-[-0.02em] text-[var(--q-heading)] mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm text-[var(--q-muted)]">
              Last updated: February 2026
            </p>
          </div>
        </section>

        <section className="bg-[var(--q-section-bg)] py-12 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
          <div className="max-w-[800px] mx-auto flex flex-col gap-10 text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] text-[var(--q-body)] leading-relaxed">

            {/* 1. Introduction */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[clamp(1.25rem,1rem+1vw,1.5rem)] font-semibold text-[var(--q-heading)]">
                1. Introduction
              </h2>
              <p>
                Quessence (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, store, and protect your personal
                information when you visit our website (quesence.com) or engage with our services.
              </p>
              <p>
                By using our website, you consent to the data practices described in this policy. If
                you do not agree, please discontinue use of our website.
              </p>
            </div>

            {/* 2. Information We Collect */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[clamp(1.25rem,1rem+1vw,1.5rem)] font-semibold text-[var(--q-heading)]">
                2. Information We Collect
              </h2>
              <p>We collect the following types of information:</p>
              <h3 className="text-base font-semibold text-[var(--q-heading)] mt-2">
                2.1 Information You Provide
              </h3>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>
                  <strong className="text-[var(--q-heading)]">Contact form submissions:</strong> name,
                  email address, service interest, and message content when you fill out our contact form.
                </li>
                <li>
                  <strong className="text-[var(--q-heading)]">Email captures:</strong> name and email
                  address when you download our pricing guide or other resources.
                </li>
              </ul>
              <h3 className="text-base font-semibold text-[var(--q-heading)] mt-2">
                2.2 Information Collected Automatically
              </h3>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>
                  <strong className="text-[var(--q-heading)]">Analytics data:</strong> pages visited,
                  time spent, referral source, device type, browser, and geographic location (via
                  Google Analytics 4).
                </li>
                <li>
                  <strong className="text-[var(--q-heading)]">Session recordings:</strong> mouse
                  movements, clicks, scroll behavior, and page interactions (via Microsoft Clarity).
                  These recordings do not capture personal information entered into forms.
                </li>
                <li>
                  <strong className="text-[var(--q-heading)]">Cookies and similar technologies:</strong>{" "}
                  see our{" "}
                  <Link href="/cookies" className="text-[#3B6BF5] hover:underline font-medium">
                    Cookie Policy
                  </Link>{" "}
                  for details.
                </li>
              </ul>
            </div>

            {/* 3. How We Use Your Information */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[clamp(1.25rem,1rem+1vw,1.5rem)] font-semibold text-[var(--q-heading)]">
                3. How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Respond to your inquiries and provide the services you request.</li>
                <li>Deliver resources you&apos;ve requested, such as our pricing guide.</li>
                <li>Send follow-up emails related to your inquiry or download (we will never spam you).</li>
                <li>Analyze website performance and user behavior to improve our site and services.</li>
                <li>Identify and fix usability issues through session recordings.</li>
                <li>Measure the effectiveness of our marketing efforts via campaign attribution.</li>
              </ul>
            </div>

            {/* 4. Third-Party Services */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[clamp(1.25rem,1rem+1vw,1.5rem)] font-semibold text-[var(--q-heading)]">
                4. Third-Party Services
              </h2>
              <p>We use the following third-party tools that may collect data:</p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>
                  <strong className="text-[var(--q-heading)]">Google Analytics 4 (GA4):</strong>{" "}
                  Tracks website traffic, user behavior, and conversion events. Data is anonymized and
                  stored on Google&apos;s servers.{" "}
                  <a href="https://policies.google.com/privacy" className="text-[#3B6BF5] hover:underline" target="_blank" rel="noopener noreferrer">
                    Google&apos;s Privacy Policy
                  </a>.
                </li>
                <li>
                  <strong className="text-[var(--q-heading)]">Microsoft Clarity:</strong>{" "}
                  Records anonymized session replays and heatmaps to help us understand how users
                  interact with our website. Clarity does not collect personal data from form inputs.{" "}
                  <a href="https://privacy.microsoft.com/privacystatement" className="text-[#3B6BF5] hover:underline" target="_blank" rel="noopener noreferrer">
                    Microsoft&apos;s Privacy Statement
                  </a>.
                </li>
                <li>
                  <strong className="text-[var(--q-heading)]">Vercel:</strong>{" "}
                  Our website is hosted on Vercel, which may collect server logs including IP addresses
                  and request metadata.{" "}
                  <a href="https://vercel.com/legal/privacy-policy" className="text-[#3B6BF5] hover:underline" target="_blank" rel="noopener noreferrer">
                    Vercel&apos;s Privacy Policy
                  </a>.
                </li>
              </ul>
              <p>
                We do not sell, rent, or share your personal information with third parties for
                marketing purposes.
              </p>
            </div>

            {/* 5. Data Retention */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[clamp(1.25rem,1rem+1vw,1.5rem)] font-semibold text-[var(--q-heading)]">
                5. Data Retention
              </h2>
              <p>
                We retain personal information for as long as necessary to fulfill the purposes
                described in this policy, or as required by law. Contact form submissions and email
                captures are retained for up to 24 months unless you request earlier deletion.
              </p>
              <p>
                Analytics data is retained according to the default retention policies of Google
                Analytics 4 and Microsoft Clarity.
              </p>
            </div>

            {/* 6. Your Rights */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[clamp(1.25rem,1rem+1vw,1.5rem)] font-semibold text-[var(--q-heading)]">
                6. Your Rights
              </h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>
                  <strong className="text-[var(--q-heading)]">Access:</strong> Request a copy of the
                  personal data we hold about you.
                </li>
                <li>
                  <strong className="text-[var(--q-heading)]">Correction:</strong> Request correction
                  of inaccurate or incomplete personal data.
                </li>
                <li>
                  <strong className="text-[var(--q-heading)]">Deletion:</strong> Request deletion of
                  your personal data, subject to legal and contractual obligations.
                </li>
                <li>
                  <strong className="text-[var(--q-heading)]">Opt-out:</strong> Unsubscribe from
                  marketing emails at any time using the link provided in each email.
                </li>
                <li>
                  <strong className="text-[var(--q-heading)]">Withdraw consent:</strong> Withdraw
                  your consent for data processing at any time by contacting us.
                </li>
              </ul>
              <p>
                To exercise any of these rights, email us at{" "}
                <a href="mailto:hello@quesence.com" className="text-[#3B6BF5] hover:underline font-medium">
                  hello@quesence.com
                </a>.
                We will respond within 30 days.
              </p>
            </div>

            {/* 7. Data Security */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[clamp(1.25rem,1rem+1vw,1.5rem)] font-semibold text-[var(--q-heading)]">
                7. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal
                data against unauthorized access, alteration, disclosure, or destruction. Our website
                uses HTTPS encryption for all data transmissions.
              </p>
              <p>
                However, no method of internet transmission or electronic storage is 100% secure. While
                we strive to protect your data, we cannot guarantee absolute security.
              </p>
            </div>

            {/* 8. Children's Privacy */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[clamp(1.25rem,1rem+1vw,1.5rem)] font-semibold text-[var(--q-heading)]">
                8. Children&apos;s Privacy
              </h2>
              <p>
                Our website and services are not directed to individuals under the age of 18. We do not
                knowingly collect personal information from children. If we become aware that we have
                collected data from a child, we will take steps to delete it promptly.
              </p>
            </div>

            {/* 9. Changes */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[clamp(1.25rem,1rem+1vw,1.5rem)] font-semibold text-[var(--q-heading)]">
                9. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this
                page with an updated &quot;Last updated&quot; date. We encourage you to review this page
                periodically.
              </p>
            </div>

            {/* 10. Contact */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[clamp(1.25rem,1rem+1vw,1.5rem)] font-semibold text-[var(--q-heading)]">
                10. Contact
              </h2>
              <p>
                If you have questions or concerns about this Privacy Policy or how we handle your data,
                please contact us at{" "}
                <a href="mailto:hello@quesence.com" className="text-[#3B6BF5] hover:underline font-medium">
                  hello@quesence.com
                </a>.
              </p>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
