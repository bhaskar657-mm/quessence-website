"use client";

import { useState } from "react";
import { Briefcase } from "lucide-react";
import { Header } from "@/components/ui/header-2";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const filters = ["All", "Content", "Website", "AI Creative", "AI Products"];

const projects = [
  {
    id: 1,
    title: "Luxe Fashion Co.",
    category: "Content Marketing",
    tag: "Content",
    result: "18K organic followers in 4 months",
    description:
      "Full Instagram strategy, content calendar, Reels production, and community management for a premium fashion label.",
  },
  {
    id: 2,
    title: "TechVenture Platform",
    category: "Website Development",
    tag: "Website",
    result: "3x more leads in 60 days",
    description:
      "Complete Webflow rebuild with conversion-focused landing pages, SEO structure, and integrated lead capture.",
  },
  {
    id: 3,
    title: "Glow Skincare",
    category: "AI Creative Studio",
    tag: "AI Creative",
    result: "200 product photos in 10 days",
    description:
      "AI-generated product photography for an e-commerce catalog — studio-quality visuals without a single photoshoot.",
  },
  {
    id: 4,
    title: "ScheduleFlow PWA",
    category: "AI Products & Automation",
    tag: "AI Products",
    result: "80% reduction in manual scheduling",
    description:
      "Custom booking platform PWA with AI-powered scheduling, notifications, and client management built from scratch.",
  },
  {
    id: 5,
    title: "FitLife Academy",
    category: "Content Marketing",
    tag: "Content",
    result: "50K YouTube subscribers in 6 months",
    description:
      "YouTube Shorts strategy, scripting, and thumbnail design that turned a fitness brand into a content powerhouse.",
  },
  {
    id: 6,
    title: "Aurelia Jewels",
    category: "Website Development",
    tag: "Website",
    result: "40% increase in lead submissions",
    description:
      "Shopify store design and development with custom product pages, lookbooks, and a seamless checkout flow.",
  },
];

export default function WorkPageContent() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tag === activeFilter);

  return (
    <>
      <Header />

      <main id="main-content">
        {/* ── Hero ── */}
        <section className="bg-[var(--q-page-bg)] pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center gap-5 sm:gap-6">
            <span className="inline-flex items-center gap-2 bg-[var(--q-badge-bg)] border border-[var(--q-card-border)] rounded-full px-4 py-1.5">
              <Briefcase className="w-4 h-4 text-[#3B6BF5]" />
              <span className="text-xs font-bold tracking-[2px] uppercase text-[var(--q-badge-text)]">
                PORTFOLIO
              </span>
            </span>
            <h1 className="text-[clamp(2.25rem,1.5rem+3vw,3.625rem)] font-bold leading-[1.2] tracking-[-0.02em] text-[var(--q-heading)] max-w-[800px]">
              Work that speaks for itself.
            </h1>
            <p className="text-[clamp(1rem,0.95rem+0.25vw,1.125rem)] text-[var(--q-body)] max-w-[600px] leading-[1.7]">
              A few of the brands we&apos;ve helped scale. Real projects. Real
              results.
            </p>

            {/* Filter Bar */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-4">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-semibold transition-colors ${
                    activeFilter === filter
                      ? "bg-[#3B6BF5] text-white"
                      : "bg-[var(--q-badge-bg)] border border-[var(--q-card-border)] text-[var(--q-muted)] hover:text-[var(--q-heading)]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Projects Grid ── */}
        <section className="bg-[var(--q-section-bg)] py-12 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-[var(--q-card-bg)] border border-[var(--q-card-border)] rounded-2xl overflow-hidden"
                  style={{ boxShadow: "var(--q-card-shadow)" }}
                >
                  {/* Image Placeholder */}
                  <div className="h-[180px] sm:h-[220px] w-full bg-[var(--q-divider)]" />
                  {/* Content */}
                  <div className="p-5 sm:p-6 flex flex-col gap-3">
                    <span className="inline-block w-fit text-xs font-bold tracking-[1.5px] uppercase text-[#3B6BF5] bg-[var(--q-badge-bg)] px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <h3 className="text-[clamp(1.25rem,1rem+1vw,1.5rem)] font-semibold text-[var(--q-heading)]">
                      {project.title}
                    </h3>
                    <span className="text-sm font-medium text-emerald-500">
                      {project.result}
                    </span>
                    <p className="text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] text-[var(--q-body)] leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection
          headline="Want results like these?"
          subheadline="Let's talk about what we can build for your brand."
          primaryLabel="Start a Project"
          secondaryLabel="Contact Us"
          secondaryHref="/contact"
        />
      </main>

      <Footer />
    </>
  );
}
