import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/ui/header-2";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy | Quessence",
  description:
    "Learn about the cookies and similar technologies used on the Quessence website, including analytics and session recording tools.",
};

export default function CookiePage() {
  return (
    <>
      <Header />

      <main>
        <section className="bg-[var(--q-page-bg)] pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
          <div className="max-w-[800px] mx-auto">
            <h1 className="text-[clamp(2.25rem,1.5rem+3vw,3.625rem)] font-bold leading-[1.2] tracking-[-0.02em] text-[var(--q-heading)] mb-4">
              Cookie Policy
            </h1>
            <p className="text-sm text-[var(--q-muted)]">
              Last updated: February 2026
            </p>
          </div>
        </section>

        <section className="bg-[var(--q-section-bg)] py-12 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
          <div className="max-w-[800px] mx-auto flex flex-col gap-10 text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] text-[var(--q-body)] leading-relaxed">

            {/* 1. What Are Cookies */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[clamp(1.25rem,1rem+1vw,1.5rem)] font-semibold text-[var(--q-heading)]">
                1. What Are Cookies
              </h2>
              <p>
                Cookies are small text files that are stored on your device (computer, tablet, or
                mobile phone) when you visit a website. They are widely used to make websites work
                more efficiently, provide a better user experience, and give website owners useful
                information about how their site is being used.
              </p>
            </div>

            {/* 2. How We Use Cookies */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[clamp(1.25rem,1rem+1vw,1.5rem)] font-semibold text-[var(--q-heading)]">
                2. How We Use Cookies
              </h2>
              <p>
                The Quessence website (quesence.com) uses cookies and similar technologies for the
                following purposes:
              </p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>
                  <strong className="text-[var(--q-heading)]">Essential cookies:</strong> Required for
                  the website to function correctly. These include cookies for theme preferences
                  (light/dark mode) and basic site functionality.
                </li>
                <li>
                  <strong className="text-[var(--q-heading)]">Analytics cookies:</strong> Help us
                  understand how visitors use our website, which pages are most popular, and how users
                  navigate through the site. This data helps us improve the website experience.
                </li>
                <li>
                  <strong className="text-[var(--q-heading)]">Performance cookies:</strong> Used to
                  record anonymized user sessions, including mouse movements, clicks, and scroll
                  behavior, to help us identify and fix usability issues.
                </li>
              </ul>
            </div>

            {/* 3. Third-Party Cookies */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[clamp(1.25rem,1rem+1vw,1.5rem)] font-semibold text-[var(--q-heading)]">
                3. Third-Party Cookies
              </h2>
              <p>The following third-party services may set cookies on your device:</p>

              {/* GA4 */}
              <div className="bg-[var(--q-card-bg)] border border-[var(--q-card-border)] rounded-xl p-5 sm:p-6 flex flex-col gap-2" style={{ boxShadow: "var(--q-card-shadow)" }}>
                <h3 className="text-base font-semibold text-[var(--q-heading)]">
                  Google Analytics 4 (GA4)
                </h3>
                <p>
                  <strong className="text-[var(--q-heading)]">Purpose:</strong> Website traffic
                  analysis, user behavior tracking, and conversion measurement.
                </p>
                <p>
                  <strong className="text-[var(--q-heading)]">Cookies set:</strong> _ga, _ga_*
                  (used to distinguish unique users and sessions).
                </p>
                <p>
                  <strong className="text-[var(--q-heading)]">Duration:</strong> Up to 2 years.
                </p>
                <p>
                  <a href="https://policies.google.com/privacy" className="text-[#3B6BF5] hover:underline text-sm font-medium" target="_blank" rel="noopener noreferrer">
                    Google&apos;s Privacy Policy &rarr;
                  </a>
                </p>
              </div>

              {/* Clarity */}
              <div className="bg-[var(--q-card-bg)] border border-[var(--q-card-border)] rounded-xl p-5 sm:p-6 flex flex-col gap-2" style={{ boxShadow: "var(--q-card-shadow)" }}>
                <h3 className="text-base font-semibold text-[var(--q-heading)]">
                  Microsoft Clarity
                </h3>
                <p>
                  <strong className="text-[var(--q-heading)]">Purpose:</strong> Session recording,
                  heatmaps, and scroll-depth analysis for UX improvement.
                </p>
                <p>
                  <strong className="text-[var(--q-heading)]">Cookies set:</strong> _clck, _clsk,
                  CLID (used to identify sessions and track user interactions).
                </p>
                <p>
                  <strong className="text-[var(--q-heading)]">Duration:</strong> Up to 1 year.
                </p>
                <p>
                  <strong className="text-[var(--q-heading)]">Note:</strong> Clarity does not capture
                  personal data entered into form fields. Session recordings are anonymized.
                </p>
                <p>
                  <a href="https://privacy.microsoft.com/privacystatement" className="text-[#3B6BF5] hover:underline text-sm font-medium" target="_blank" rel="noopener noreferrer">
                    Microsoft&apos;s Privacy Statement &rarr;
                  </a>
                </p>
              </div>
            </div>

            {/* 4. Managing Cookies */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[clamp(1.25rem,1rem+1vw,1.5rem)] font-semibold text-[var(--q-heading)]">
                4. Managing Cookies
              </h2>
              <p>
                You can control and manage cookies through your browser settings. Most browsers allow
                you to:
              </p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>View what cookies are stored on your device and delete them individually.</li>
                <li>Block third-party cookies.</li>
                <li>Block cookies from specific websites.</li>
                <li>Block all cookies from being set.</li>
                <li>Delete all cookies when you close your browser.</li>
              </ul>
              <p>
                Please note that blocking or deleting cookies may affect the functionality of our
                website. Some features, such as theme preference persistence, require cookies to work
                properly.
              </p>
              <p>
                To opt out of Google Analytics tracking specifically, you can install the{" "}
                <a href="https://tools.google.com/dlpage/gaoptout" className="text-[#3B6BF5] hover:underline font-medium" target="_blank" rel="noopener noreferrer">
                  Google Analytics Opt-out Browser Add-on
                </a>.
              </p>
            </div>

            {/* 5. Updates */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[clamp(1.25rem,1rem+1vw,1.5rem)] font-semibold text-[var(--q-heading)]">
                5. Changes to This Policy
              </h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in the
                technologies we use or for other operational, legal, or regulatory reasons. Please
                revisit this page periodically to stay informed.
              </p>
            </div>

            {/* 6. More Information */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[clamp(1.25rem,1rem+1vw,1.5rem)] font-semibold text-[var(--q-heading)]">
                6. More Information
              </h2>
              <p>
                For more details about how we handle your data, please read our{" "}
                <Link href="/privacy" className="text-[#3B6BF5] hover:underline font-medium">
                  Privacy Policy
                </Link>.
                If you have questions about our use of cookies, contact us at{" "}
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
