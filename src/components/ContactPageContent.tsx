"use client";

import { useState } from "react";
import { Mail, Calendar, Timer, ChevronDown, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Header } from "@/components/ui/header-2";
import Footer from "@/components/Footer";
import SectionTag from "@/components/SectionTag";
import CTASection from "@/components/CTASection";

const serviceOptions = [
  "Content Marketing",
  "Website",
  "AI Creative Studio",
  "AI Products & Automation",
  "Other",
];

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on scope. Content marketing is a monthly retainer. Websites typically take 2\u20136 weeks. AI creative projects can be as fast as a few days. AI product builds vary \u2014 we\u2019ll scope it together on a call.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Yes. We work with solopreneurs, startups, mid-size companies, and enterprises. If you\u2019re serious about growth, we\u2019re your team.",
  },
  {
    question: "What makes you different from other companies?",
    answer:
      "AI is built into everything we do \u2014 from content production to creative output to custom software. We\u2019re not a traditional company with layers of process. We\u2019re a scale-up \u2014 fast, direct, and focused on results.",
  },
  {
    question: "Can I see examples of your work?",
    answer:
      "Absolutely. Visit our portfolio page or ask us directly \u2014 we\u2019re happy to share relevant case studies.",
  },
  {
    question: "What are your prices?",
    answer:
      "Content marketing has three structured plans \u2014 download our pricing guide for details. For websites, AI creative, and AI product projects, pricing depends on scope \u2014 book a call and we\u2019ll give you a clear picture in 15 minutes.",
  },
];

export default function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", service: "", message: "" });
    } catch (err) {
      setSubmitStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to send message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Header />

      <main id="main-content">
        {/* ── Hero ── */}
        <section className="bg-[var(--q-page-bg)] pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center gap-5 sm:gap-6">
            <span className="inline-flex items-center gap-2 bg-[var(--q-badge-bg)] border border-[var(--q-card-border)] rounded-full px-4 py-1.5">
              <Mail className="w-4 h-4 text-[#3B6BF5]" />
              <span className="text-xs font-bold tracking-[2px] uppercase text-[var(--q-badge-text)]">
                GET IN TOUCH
              </span>
            </span>
            <h1 className="text-[clamp(2.25rem,1.5rem+3vw,3.625rem)] font-bold leading-[1.2] tracking-[-0.02em] text-[var(--q-heading)] max-w-[800px]">
              Let&apos;s start a conversation.
            </h1>
            <p className="text-[clamp(1rem,0.95rem+0.25vw,1.125rem)] text-[var(--q-body)] max-w-[640px] leading-[1.7]">
              Tell us what you&apos;re working on. We&apos;ll tell you how we can
              help. No pressure, no pitch decks, just a real conversation.
            </p>
          </div>
        </section>

        {/* ── Contact Form Section ── */}
        <section className="bg-[var(--q-section-bg)] py-12 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
          <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Column — Form */}
            <div className="flex-1">
              <h2 className="text-[clamp(1.5rem,1.15rem+1.5vw,2.25rem)] font-bold text-[var(--q-heading)] mb-8">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-[var(--q-heading)]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-[var(--q-section-bg-alt)] border border-[var(--q-card-border)] rounded-xl h-12 px-4 text-sm text-[var(--q-heading)] placeholder:text-[var(--q-muted)] outline-none focus:border-[#3B6BF5] transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-[var(--q-heading)]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-[var(--q-section-bg-alt)] border border-[var(--q-card-border)] rounded-xl h-12 px-4 text-sm text-[var(--q-heading)] placeholder:text-[var(--q-muted)] outline-none focus:border-[#3B6BF5] transition-colors"
                  />
                </div>

                {/* Service Select */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="service"
                    className="text-sm font-semibold text-[var(--q-heading)]"
                  >
                    What do you need help with?
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="bg-[var(--q-section-bg-alt)] border border-[var(--q-card-border)] rounded-xl h-12 px-4 text-sm text-[var(--q-heading)] outline-none focus:border-[#3B6BF5] transition-colors appearance-none"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-[var(--q-heading)]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-[var(--q-section-bg-alt)] border border-[var(--q-card-border)] rounded-xl h-[140px] px-4 py-3 text-sm text-[var(--q-heading)] placeholder:text-[var(--q-muted)] outline-none focus:border-[#3B6BF5] transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#3B6BF5] text-white font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity w-full mt-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send it over"
                  )}
                </button>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <div className="flex items-start gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 mt-1">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-semibold text-[var(--q-heading)]">
                        Message sent successfully!
                      </span>
                      <span className="text-sm text-[var(--q-body)]">
                        Thank you for reaching out. We&apos;ll get back to you within 2&ndash;4 hours.
                      </span>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === "error" && (
                  <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/20 rounded-xl p-4 mt-1">
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-semibold text-[var(--q-heading)]">
                        Something went wrong
                      </span>
                      <span className="text-sm text-[var(--q-body)]">
                        {errorMessage}
                      </span>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Right Column — Contact Info */}
            <div className="w-full lg:w-[400px]">
              <h2 className="text-[clamp(1.5rem,1.15rem+1.5vw,2.25rem)] font-bold text-[var(--q-heading)] mb-8">
                Or reach out directly
              </h2>
              <div className="flex flex-col gap-6">
                {/* Email Row */}
                <div className="flex items-center gap-4">
                  <div className="w-[44px] h-[44px] bg-[var(--q-badge-bg)] rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#3B6BF5]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-[var(--q-body)]">
                      Email us
                    </span>
                    <a
                      href="mailto:hello@quesence.com"
                      className="text-sm font-semibold text-[#3B6BF5] hover:underline"
                    >
                      hello@quesence.com
                    </a>
                  </div>
                </div>

                {/* Calendar Row */}
                <div className="flex items-center gap-4">
                  <div className="w-[44px] h-[44px] bg-[var(--q-badge-bg)] rounded-xl flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5 text-[#3B6BF5]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-[var(--q-body)]">
                      Prefer to schedule directly?
                    </span>
                    <a
                      href="#"
                      className="text-sm font-semibold text-[#3B6BF5] hover:underline"
                    >
                      Book a 15-minute call &rarr;
                    </a>
                  </div>
                </div>

                {/* Response Time Card */}
                <div
                  className="bg-[var(--q-card-bg)] border border-[var(--q-card-border)] rounded-2xl p-5 sm:p-6 mt-2"
                  style={{ boxShadow: "var(--q-card-shadow)" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Timer className="w-5 h-5 text-[#3B6BF5]" />
                    <span className="text-base font-bold text-[var(--q-heading)]">
                      Fast response time
                    </span>
                  </div>
                  <p className="text-sm text-[var(--q-body)] leading-relaxed">
                    We typically respond within 2&ndash;4 hours during business
                    days. For urgent requests, email us directly and we&apos;ll
                    get back to you as soon as possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Mini FAQ ── */}
        <section className="bg-[var(--q-section-bg-alt)] py-12 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-4 text-center">
              <SectionTag>FREQUENTLY ASKED QUESTIONS</SectionTag>
              <h2 className="text-[clamp(1.5rem,1.15rem+1.5vw,2.25rem)] font-bold text-[var(--q-heading)]">
                Quick answers to common questions.
              </h2>
              <p className="max-w-[52ch] text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] text-[var(--q-body)] leading-relaxed">
                Everything you need to know before reaching out.
              </p>
            </div>

            <div className="w-full max-w-[800px] flex flex-col gap-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="bg-[var(--q-card-bg)] border border-[var(--q-card-border)] rounded-xl"
                    style={{ boxShadow: "var(--q-card-shadow)" }}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] font-semibold text-[var(--q-heading)] pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[var(--q-muted)] shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] text-[var(--q-body)] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection
          headline="Ready to build something great?"
          subheadline="The best way to start is with a conversation. Let's talk."
          primaryLabel="Book a 15-Minute Call"
        />
      </main>

      <Footer />
    </>
  );
}
