import type { Metadata } from "next";
import { Header } from "@/components/ui/header-2";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | Quessence",
  description:
    "Read the terms and conditions governing the use of Quessence services, including service scope, intellectual property, liability, and dispute resolution.",
};

export default function TermsPage() {
  return (
    <>
      <Header />

      <main>
        <section className="bg-[var(--q-page-bg)] pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
          <div className="max-w-[800px] mx-auto">
            <h1 className="text-[clamp(2.25rem,1.5rem+3vw,3.625rem)] font-bold leading-[1.2] tracking-[-0.02em] text-[var(--q-heading)] mb-4">
              Terms &amp; Conditions
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
                These Terms and Conditions (&quot;Terms&quot;) govern your use of the Quessence website
                (quesence.com) and the services provided by Quessence (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
                By accessing our website or engaging our services, you agree to be bound by these Terms.
                If you do not agree, please do not use our website or services.
              </p>
            </div>

            {/* 2. Services */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[clamp(1.25rem,1rem+1vw,1.5rem)] font-semibold text-[var(--q-heading)]">
                2. Services
              </h2>
              <p>
                Quessence provides digital services including but not limited to: social media content
                marketing, website design and development, AI-powered creative production, and custom
                AI products and automation systems. The specific scope, deliverables, and timelines for
                each engagement are defined in individual project proposals or service agreements signed
                by both parties.
              </p>
              <p>
                We reserve the right to modify, suspend, or discontinue any part of our services at any
                time. We will provide reasonable notice when changes affect active engagements.
              </p>
            </div>

            {/* 3. Intellectual Property */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[clamp(1.25rem,1rem+1vw,1.5rem)] font-semibold text-[var(--q-heading)]">
                3. Intellectual Property
              </h2>
              <p>
                All content on the Quessence website — including text, graphics, logos, icons, images,
                and software — is the property of Quessence or its content suppliers and is protected by
                intellectual property laws.
              </p>
              <p>
                For client projects: upon full payment, the client receives ownership of all final
                deliverables as specified in the project agreement. Quessence retains the right to
                showcase completed work in its portfolio unless a non-disclosure agreement is in place.
              </p>
              <p>
                Pre-existing tools, frameworks, templates, and proprietary AI workflows developed by
                Quessence remain the intellectual property of Quessence and are licensed (not
                transferred) for the client&apos;s use as part of the delivered project.
              </p>
            </div>

            {/* 4. Client Responsibilities */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[clamp(1.25rem,1rem+1vw,1.5rem)] font-semibold text-[var(--q-heading)]">
                4. Client Responsibilities
              </h2>
              <p>
                Clients are responsible for providing timely feedback, content, access credentials, and
                approvals as required for project progress. Delays caused by the client may impact
                project timelines and delivery dates.
              </p>
              <p>
                Clients must ensure that any content, materials, or information they provide for use in
                projects does not infringe on third-party intellectual property rights.
              </p>
            </div>

            {/* 5. Payment Terms */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[clamp(1.25rem,1rem+1vw,1.5rem)] font-semibold text-[var(--q-heading)]">
                5. Payment Terms
              </h2>
              <p>
                Payment terms are outlined in individual project proposals or service agreements.
                Unless otherwise specified:
              </p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>A non-refundable setup fee or advance payment is required before work begins.</li>
                <li>Monthly retainers are billed at the start of each billing period.</li>
                <li>Project-based work follows a milestone payment schedule as agreed upon.</li>
                <li>All prices are exclusive of applicable taxes (including GST) unless stated otherwise.</li>
                <li>Late payments may result in suspension of services until the outstanding balance is settled.</li>
              </ul>
            </div>

            {/* 6. Refund Policy */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[clamp(1.25rem,1rem+1vw,1.5rem)] font-semibold text-[var(--q-heading)]">
                6. Refund Policy
              </h2>
              <p>
                Setup fees and advance payments are non-refundable once work has commenced. For monthly
                retainers, cancellation must be communicated at least 15 days before the next billing
                cycle. No refunds are issued for partially completed billing periods.
              </p>
              <p>
                For project-based work, refunds for completed milestones are not available. Refunds for
                future milestones may be issued on a case-by-case basis.
              </p>
            </div>

            {/* 7. Limitation of Liability */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[clamp(1.25rem,1rem+1vw,1.5rem)] font-semibold text-[var(--q-heading)]">
                7. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, Quessence shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages arising from or related to the
                use of our services or website.
              </p>
              <p>
                Our total liability for any claim arising from a project engagement shall not exceed the
                total amount paid by the client for that specific engagement.
              </p>
              <p>
                Quessence is not responsible for results that depend on third-party platforms (such as
                social media algorithm changes, search engine ranking fluctuations, or app store
                policies) that are beyond our control.
              </p>
            </div>

            {/* 8. Confidentiality */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[clamp(1.25rem,1rem+1vw,1.5rem)] font-semibold text-[var(--q-heading)]">
                8. Confidentiality
              </h2>
              <p>
                Both parties agree to keep confidential any proprietary information shared during the
                engagement. This includes business strategies, pricing, customer data, and technical
                specifications. Confidentiality obligations survive the termination of the engagement.
              </p>
            </div>

            {/* 9. Termination */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[clamp(1.25rem,1rem+1vw,1.5rem)] font-semibold text-[var(--q-heading)]">
                9. Termination
              </h2>
              <p>
                Either party may terminate an engagement by providing written notice as specified in the
                project agreement. Upon termination, the client is responsible for payment of all work
                completed up to the termination date.
              </p>
              <p>
                Quessence reserves the right to terminate services immediately if the client engages in
                unlawful activity, breaches these Terms, or fails to make payments within the agreed
                timeframe.
              </p>
            </div>

            {/* 10. Dispute Resolution */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[clamp(1.25rem,1rem+1vw,1.5rem)] font-semibold text-[var(--q-heading)]">
                10. Dispute Resolution
              </h2>
              <p>
                Any disputes arising from these Terms or our services shall first be addressed through
                good-faith negotiation between the parties. If a resolution cannot be reached within 30
                days, the dispute shall be submitted to binding arbitration in accordance with the
                applicable laws of India.
              </p>
            </div>

            {/* 11. Changes to Terms */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[clamp(1.25rem,1rem+1vw,1.5rem)] font-semibold text-[var(--q-heading)]">
                11. Changes to These Terms
              </h2>
              <p>
                We may update these Terms from time to time. Changes will be posted on this page with
                an updated &quot;Last updated&quot; date. Continued use of our website or services after changes
                are posted constitutes acceptance of the revised Terms.
              </p>
            </div>

            {/* 12. Contact */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[clamp(1.25rem,1rem+1vw,1.5rem)] font-semibold text-[var(--q-heading)]">
                12. Contact
              </h2>
              <p>
                If you have questions about these Terms, please contact us at{" "}
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
