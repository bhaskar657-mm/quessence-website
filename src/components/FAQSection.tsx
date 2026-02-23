"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionTag from "@/components/SectionTag";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  faqs: FAQ[];
}

export default function FAQSection({
  eyebrow = "FREQUENTLY ASKED QUESTIONS",
  heading = "Quick answers to common questions.",
  subheading = "Everything you need to know before reaching out.",
  faqs,
}: FAQSectionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="bg-[var(--q-section-bg-alt)] py-12 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <SectionTag>{eyebrow}</SectionTag>
          <h2 className="text-[clamp(1.5rem,1.15rem+1.5vw,2.25rem)] font-bold text-[var(--q-heading)]">
            {heading}
          </h2>
          <p className="max-w-[52ch] text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] text-[var(--q-body)] leading-relaxed">
            {subheading}
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
  );
}
