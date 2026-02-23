"use client";

import { useState } from "react";
import { Briefcase } from "lucide-react";
import { Header } from "@/components/ui/header-2";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const filters = ["All", "Content", "Website", "AI Creative", "AI Products"];

type Project = {
  id: number;
  title: string;
  category: string;
  tag: string;
  result: string;
  description: string;
  imageSrc?: string;
  imageBg?: string;
  videoId?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Ravisbook.ai — Instagram Growth",
    category: "Content Marketing",
    tag: "Content",
    result: "0 → 54.7K followers",
    description:
      "Built a content strategy for Ravi — a digital creator in the AI & Tech space — that took his Instagram from scratch to 54.7K followers through AI-powered content planning, production, and distribution.",
    imageSrc: "/clients/casestudies/ravisbook-insta.png",
    imageBg: "#000000",
  },
  {
    id: 5,
    title: "Dr Venkat Nag — Personal Brand Growth",
    category: "Content Marketing",
    tag: "Content",
    result: "15.1K followers & 933 posts",
    description:
      "Scaled the personal brand of Dr Venkat Nag — a leading Prosthodontist, Dental Implant Coach, and inventor of TPPHIL & ALL TILT® — building a content engine across Instagram that established him as a top voice in implant dentistry.",
    imageSrc: "/clients/casestudies/dr-venkat-nag-insta.png",
    imageBg: "#000000",
  },
  {
    id: 6,
    title: "Sutra India — Heritage Fashion Brand",
    category: "Content Marketing",
    tag: "Content",
    result: "Brand launch & content strategy",
    description:
      "Crafted the content strategy and Instagram presence for Sutra India — a handloom and ethnic wear brand celebrating India's heritage. From storytelling to visual identity, we built a digital foundation rooted in artisan craftsmanship.",
    imageSrc: "/clients/casestudies/sutra-insta.png",
    imageBg: "#000000",
  },
  {
    id: 7,
    title: "Pragee — Modern Western Wear",
    category: "Content Marketing",
    tag: "Content",
    result: "Brand identity & social launch",
    description:
      "Developed the brand positioning and content strategy for Pragee — a minimal, globally-inspired western wear label. Built their Instagram from the ground up with a cohesive visual language for their Lumière '25 signature collection launch.",
    imageSrc: "/clients/casestudies/pragee-insta.png",
    imageBg: "#000000",
  },
  {
    id: 2,
    title: "Institute for Dental Implantology — Website Redesign",
    category: "Website Development",
    tag: "Website",
    result: "WordPress → Webflow migration",
    description:
      "Migrated IDI from a sluggish WordPress site to a modern Webflow build — responsive design, faster load times, integrated payments, and intuitive navigation that drove more program enquiries.",
    imageSrc: "/clients/casestudies/idi-website.webp",
    imageBg: "#000000",
  },
  {
    id: 9,
    title: "OnLoop — SaaS Website Redesign",
    category: "Website Development",
    tag: "Website",
    result: "Delivered in 30 days",
    description:
      "Redesigned and rebuilt OnLoop's website in Webflow — complete with LinkedIn SSO integration, dynamic Lottie animations, custom CMS, and a Finsweet-powered slider — all delivered within a 30-day deadline.",
    imageSrc: "/clients/casestudies/onloop-website.webp",
    imageBg: "#000000",
  },
  {
    id: 10,
    title: "Wheedle.io — AI Agency Website",
    category: "Website Development",
    tag: "Website",
    result: "Increased leads & traffic in 1 month",
    description:
      "Built the digital identity for Wheedle.io — an AI solutions agency serving enterprise clients. From brand strategy and logo system to a sleek Webflow build, the site drove a significant increase in leads and traffic within the first month.",
    imageSrc: "/clients/casestudies/wheedle-website.webp",
    imageBg: "#000000",
  },
  {
    id: 3,
    title: "Interactive Photo Avatar — Knowledge Base AI",
    category: "AI Creative Studio",
    tag: "AI Creative",
    result: "AI-powered conversational avatar",
    description:
      "Built an interactive AI avatar that turns a static photo into an animated character capable of answering questions from a custom knowledge base — a conversational AI experience your audience can interact with.",
    videoId: "hh1kPU8Zfxg",
  },
  {
    id: 8,
    title: "AI-Generated Ad Commercial",
    category: "AI Creative Studio",
    tag: "AI Creative",
    result: "Fully AI-produced video ad",
    description:
      "Produced a complete ad commercial using AI — from concept to final render. Bold visuals, dramatic effects, and striking colours designed to stop the scroll and capture attention at scale.",
    videoId: "H8JnmabeQlU",
  },
  {
    id: 4,
    title: "Mark My Zone — Operations Dashboard",
    category: "AI Products & Automation",
    tag: "AI Products",
    result: "50% operational time saved",
    description:
      "Built a custom admin dashboard that replaced Excel sheets and WhatsApp chaos. The internal team now manages 170+ rental and sales properties in one place — cutting operational time by 50%.",
    imageSrc: "/clients/casestudies/mmz-dashboard.png",
    imageBg: "#f5f5f7",
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
                  {/* Media */}
                  <div
                    className="h-[220px] sm:h-[280px] w-full overflow-hidden flex items-center justify-center"
                    style={{ backgroundColor: project.imageBg || "var(--q-divider)" }}
                  >
                    {project.videoId ? (
                      <div className="relative h-full w-full overflow-hidden">
                        <iframe
                          src={`https://www.youtube-nocookie.com/embed/${project.videoId}?rel=0&modestbranding=1&showinfo=0&iv_load_policy=3&color=white&playsinline=1&loop=1&playlist=${project.videoId}&autoplay=1&mute=1`}
                          title={project.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0 h-[110%] w-[110%] -top-[5%] -left-[5%]"
                        />
                      </div>
                    ) : project.imageSrc ? (
                      <img
                        src={project.imageSrc}
                        alt={project.title}
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      <div className="h-full w-full bg-[var(--q-divider)]" />
                    )}
                  </div>
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
