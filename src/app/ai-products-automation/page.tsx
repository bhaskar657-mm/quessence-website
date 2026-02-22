import type { Metadata } from "next";
import Link from "next/link";
import {
  Cpu,
  Code,
  Smartphone,
  Bot,
  Settings,
  Workflow,
  TrendingUp,
  Wrench,
  Plug,
  Shield,
  Lightbulb,
  Puzzle,
} from "lucide-react";
import { Header } from "@/components/ui/header-2";
import Footer from "@/components/Footer";
import SectionTag from "@/components/SectionTag";
import ServiceCard from "@/components/ServiceCard";
import ProcessSteps from "@/components/ProcessSteps";
import PricingCTA from "@/components/PricingCTA";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";
import { ButtonColorful } from "@/components/ui/button-colorful";

export const metadata: Metadata = {
  title: "AI Products & Automation — Web Apps, PWAs & AI Agents | Quessence",
  description:
    "Custom web apps, progressive web apps, AI agents, and automation systems that solve real business problems and scale with you.",
};

const services = [
  {
    icon: Code,
    title: "Custom Web Apps",
    description:
      "Full-stack web applications built with modern frameworks. Scalable architecture, clean code, and intuitive user experiences.",
  },
  {
    icon: Smartphone,
    title: "Progressive Web Apps",
    description:
      "PWAs that deliver native app experiences through the browser. Offline support, push notifications, and instant loading.",
  },
  {
    icon: Bot,
    title: "AI Agent Development",
    description:
      "Custom AI agents that handle customer support, lead qualification, data analysis, and complex decision-making autonomously.",
  },
  {
    icon: Settings,
    title: "AI Automation Systems",
    description:
      "End-to-end automation pipelines that eliminate repetitive tasks, reduce errors, and free your team to focus on growth.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Automate business workflows across tools and platforms. From CRM updates to invoice processing to team notifications.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description:
      "AI-powered analytics that forecast trends, identify opportunities, and surface insights your competitors miss.",
  },
  {
    icon: Wrench,
    title: "Custom AI Tools",
    description:
      "Purpose-built AI tools tailored to your industry and use case. Content generators, classifiers, recommenders, and more.",
  },
  {
    icon: Plug,
    title: "AI Tool Integration",
    description:
      "Seamlessly integrate AI capabilities into your existing tech stack. APIs, plugins, and middleware that just work.",
  },
  {
    icon: Shield,
    title: "Enterprise AI Solutions",
    description:
      "Enterprise-grade AI implementations with security, compliance, scalability, and dedicated support built in.",
  },
];

const whyCards = [
  {
    icon: Lightbulb,
    title: "Product Thinking",
    description:
      "We don't just write code — we think about the problem, the user, and the business outcome. Every product starts with a deep understanding of what success looks like.",
  },
  {
    icon: Puzzle,
    title: "Frictionless Integration",
    description:
      "Our solutions plug into your existing systems without disruption. We design for compatibility, migration paths, and team adoption from day one.",
  },
  {
    icon: TrendingUp,
    title: "Predictive, Not Reactive",
    description:
      "We build systems that anticipate problems before they happen. Predictive analytics, proactive monitoring, and intelligent alerting keep you ahead.",
  },
];

const processSteps = [
  {
    title: "Audit",
    description:
      "We analyze your current systems, workflows, and pain points to identify the highest-impact opportunities for AI and automation.",
  },
  {
    title: "Architect",
    description:
      "We design the solution architecture, data flows, and integration points — then validate with your team before building.",
  },
  {
    title: "Build",
    description:
      "Our engineers build your product in agile sprints with continuous demos, feedback loops, and quality assurance at every stage.",
  },
  {
    title: "Integrate",
    description:
      "We deploy into your environment, connect with existing tools, migrate data, and train your team on the new system.",
  },
  {
    title: "Optimize",
    description:
      "Post-launch, we monitor performance, gather feedback, and continuously improve based on real usage data and evolving needs.",
  },
];

export default function AIProductsAutomationPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="bg-[var(--q-page-bg)] pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center gap-5 sm:gap-6">
            <span className="inline-flex items-center gap-2 bg-[var(--q-badge-bg)] border border-[var(--q-card-border)] rounded-full px-4 py-1.5">
              <Cpu className="w-4 h-4 text-[#3B6BF5]" />
              <span className="text-xs font-bold tracking-[2px] uppercase text-[var(--q-badge-text)]">
                AI PRODUCTS & AUTOMATION
              </span>
            </span>
            <h1 className="text-[clamp(2.25rem,1.5rem+3vw,3.625rem)] font-bold leading-[1.2] tracking-[-0.02em] text-[var(--q-heading)] max-w-[800px]">
              Scale Intelligence,
              <br />
              Not Overhead.
            </h1>
            <p className="text-[clamp(1rem,0.95rem+0.25vw,1.125rem)] text-[var(--q-body)] max-w-[600px] leading-[1.7]">
              Custom web apps, progressive web apps, AI agents, and automation
              systems. We build digital products that solve real business
              problems and scale with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 w-full sm:w-auto items-center">
              <ButtonColorful href="/contact" label="Book a Consultation" className="h-12 px-7 text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] w-full sm:w-auto" />
              <Link
                href="/work"
                className="text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] font-semibold px-7 py-3 rounded-full border border-[var(--q-hero-btn-border)] text-[var(--q-hero-btn-text)] hover:border-[var(--q-hero-btn-hover-border)] w-full sm:w-auto text-center"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>

        {/* What We Build */}
        <section className="bg-[var(--q-section-bg)] py-12 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-4 text-center">
              <SectionTag>WHAT WE BUILD</SectionTag>
              <h2 className="text-[clamp(1.5rem,1.15rem+1.5vw,2.25rem)] font-bold text-[var(--q-heading)]">
                Custom digital products that solve real business problems.
              </h2>
              <p className="max-w-[52ch] text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] text-[var(--q-body)] leading-relaxed">
                From AI agents to full-stack web apps — purpose-built tools that automate, scale, and deliver results.
              </p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </ul>
          </div>
        </section>

        {/* Why Quessence */}
        <section className="bg-[var(--q-section-bg-alt)] py-12 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-4 text-center">
              <SectionTag>WHY QUESSENCE FOR AI PRODUCTS</SectionTag>
              <h2 className="text-[clamp(1.5rem,1.15rem+1.5vw,2.25rem)] font-bold text-[var(--q-heading)] max-w-[700px]">
                We don&apos;t just build what you ask for. We build the right
                solution.
              </h2>
              <p className="max-w-[52ch] text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] text-[var(--q-body)] leading-relaxed">
                Product thinking, seamless integration, and a predictive approach that keeps you ahead.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              {whyCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="bg-[var(--q-card-bg)] border border-[var(--q-card-border)] rounded-2xl p-5 sm:p-7 flex flex-col gap-4"
                    style={{ boxShadow: "var(--q-card-shadow)" }}
                  >
                    <div className="w-12 h-12 bg-[var(--q-badge-bg)] rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#3B6BF5]" />
                    </div>
                    <h3 className="text-[clamp(1.25rem,1rem+1vw,1.5rem)] font-semibold text-[var(--q-heading)]">
                      {card.title}
                    </h3>
                    <p className="text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] text-[var(--q-body)] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <ProcessSteps
          headline="From problem to product."
          description="A five-phase build process designed for real-world complexity."
          steps={processSteps}
        />

        {/* Pricing */}
        <PricingCTA
          headline="Every project is different."
          description="We scope and price each engagement individually based on complexity, timeline, and business impact. Book a free consultation and we'll provide a detailed proposal within one week."
        />

        {/* Testimonial */}
        <TestimonialSection
          quote="Quessence built us a custom booking PWA that replaced three separate tools. Our team saves 15 hours a week, and our customers love the seamless experience. They thought about problems we hadn't even considered."
          author="— COO, Service Company"
        />

        {/* CTA */}
        <CTASection
          headline="Ready to build something intelligent?"
          subheadline="Let's turn your business problems into digital products."
          secondaryLabel="View Our Work"
        />
      </main>

      <Footer />
    </>
  );
}
