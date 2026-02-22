"use client";

import {
  ContainerScroll,
  ContainerSticky,
  ProcessCard,
  ProcessCardBody,
  ProcessCardTitle,
} from "@/components/ui/process-timeline";

const PROCESS_PHASES = [
  {
    id: "process-1",
    title: "Content Strategy & Growth",
    description:
      "We build your brand voice, create content systems, and grow your audience across Instagram, YouTube, and LinkedIn — powered by AI workflows and human creative direction.",
  },
  {
    id: "process-2",
    title: "Website Design & Development",
    description:
      "We design and develop high-converting websites on Webflow, Framer, Shopify, or custom code — that become the backbone of your digital presence and perform at scale.",
  },
  {
    id: "process-3",
    title: "AI Creative Production",
    description:
      "We produce cinematic visuals, ad creatives, and product photography using AI-enhanced workflows — delivering studio-quality output at a fraction of traditional production costs.",
  },
  {
    id: "process-4",
    title: "AI Products & Automation",
    description:
      "We build custom web apps, PWAs, AI agents, and automation tools — engineered to solve real business problems and scale with your growth.",
  },
];

const ACCENT_COLORS = ["#3B6BF5", "#10B981", "#A855F7", "#06B6D4"];

export default function HowWeWorkSection() {
  return (
    <section className="bg-[var(--q-section-bg)]">
      <ContainerScroll className="h-[250vh] sm:h-[300vh] lg:h-[400vh]">
        {/* overflow-visible overrides ContainerSticky's base overflow-hidden
            so the header + cards aren't clipped vertically.
            Horizontal clipping is handled by the grid wrapper below. */}
        <ContainerSticky className="top-0 py-12 sm:py-16 lg:py-20 overflow-visible">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16 xl:px-[120px] flex flex-col items-center gap-8 sm:gap-12">
            {/* Header — identical to services section */}
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="text-xs font-bold text-[var(--q-badge-text)] tracking-[2px] uppercase">
                HOW WE WORK
              </span>
              <h2 className="text-[clamp(1.5rem,1.15rem+1.5vw,2.25rem)] font-bold text-[var(--q-heading)]">
                A system, not a service.
              </h2>
              <p className="max-w-[52ch] text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] text-[var(--q-body)] leading-relaxed">
                AI isn&apos;t a feature we sell. It&apos;s how we work. From content
                creation to website builds to ad production to automation
                systems — every step in our process runs on AI. That&apos;s why
                we ship in days what takes others weeks.
              </p>
            </div>

            {/* Grid wrapper — overflow-hidden clips cards sliding in from right */}
            <div className="overflow-hidden w-full">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 w-full">
                {PROCESS_PHASES.map((phase, index) => (
                  <ProcessCard
                    key={phase.id}
                    itemsLength={PROCESS_PHASES.length}
                    index={index}
                    variant="dark"
                    size="none"
                    gridMode
                    className="rounded-2xl min-h-[12rem]"
                  >
                    <ProcessCardTitle className="border-r border-[var(--q-card-border)]">
                      <div
                        className="rounded-full size-8 text-sm flex justify-center items-center text-white font-semibold"
                        style={{ backgroundColor: ACCENT_COLORS[index] }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </ProcessCardTitle>
                    <ProcessCardBody>
                      <h3 className="text-[clamp(1.25rem,1rem+1vw,1.5rem)] font-semibold leading-tight text-[var(--q-heading)]">
                        {phase.title}
                      </h3>
                      <p className="text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] text-[var(--q-body)] leading-relaxed">
                        {phase.description}
                      </p>
                    </ProcessCardBody>
                  </ProcessCard>
                ))}
              </div>
            </div>
          </div>
        </ContainerSticky>
      </ContainerScroll>
    </section>
  );
}
