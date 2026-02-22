import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  LayoutTemplate,
  Layers,
  Terminal,
  Palette,
  ShoppingBag,
  MousePointerClick,
  RefreshCw,
  Gauge,
} from "lucide-react";
import { Header } from "@/components/ui/header-2";
import Footer from "@/components/Footer";
import SectionTag from "@/components/SectionTag";
import ServiceCard from "@/components/ServiceCard";
import ProcessSteps from "@/components/ProcessSteps";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";
import { ButtonColorful } from "@/components/ui/button-colorful";

export const metadata: Metadata = {
  title: "Website Development — Webflow, Framer & Custom | Quessence",
  description:
    "High-performance websites designed to convert visitors into customers. Built on Webflow, Framer, or custom code — whichever fits your business best.",
};

const services = [
  {
    icon: LayoutTemplate,
    title: "Webflow Design & Development",
    description:
      "Pixel-perfect, fully responsive Webflow websites with CMS integration, animations, and lightning-fast performance.",
  },
  {
    icon: Layers,
    title: "Framer Website Design",
    description:
      "Interactive, design-forward Framer websites with smooth animations, responsive layouts, and rapid deployment.",
  },
  {
    icon: Terminal,
    title: "Custom Website Development",
    description:
      "Bespoke websites built with modern frameworks like Next.js, React, and headless CMS for complete flexibility.",
  },
  {
    icon: Palette,
    title: "UI/UX Design Services",
    description:
      "User-centered design that balances aesthetics with functionality. Wireframes, prototypes, and design systems.",
  },
  {
    icon: ShoppingBag,
    title: "Shopify Store Design",
    description:
      "Custom Shopify themes and store setups optimized for conversions, mobile shopping, and brand consistency.",
  },
  {
    icon: MousePointerClick,
    title: "Landing Pages & Conversion",
    description:
      "High-converting landing pages designed for campaigns, product launches, and lead generation funnels.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign & Migration",
    description:
      "Seamless website redesigns and platform migrations without losing SEO rankings or content integrity.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description:
      "Speed audits, Core Web Vitals optimization, and technical improvements to boost performance and SEO.",
  },
];

const processSteps = [
  {
    title: "Discover",
    description:
      "We learn about your business, goals, audience, and competitive landscape to define the project scope.",
  },
  {
    title: "Design",
    description:
      "We create wireframes and high-fidelity designs that reflect your brand and optimize the user experience.",
  },
  {
    title: "Develop",
    description:
      "We build your website with clean code, responsive layouts, CMS integration, and performance best practices.",
  },
  {
    title: "Launch",
    description:
      "We test across devices and browsers, set up analytics, and deploy your site for a seamless launch day.",
  },
  {
    title: "Optimize",
    description:
      "Post-launch, we monitor performance, fix issues, and iterate based on real user data and feedback.",
  },
];

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="bg-[var(--q-page-bg)] pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center gap-5 sm:gap-6">
            <span className="inline-flex items-center gap-2 bg-[var(--q-badge-bg)] border border-[var(--q-card-border)] rounded-full px-4 py-1.5">
              <Globe className="w-4 h-4 text-[#3B6BF5]" />
              <span className="text-xs font-bold tracking-[2px] uppercase text-[var(--q-badge-text)]">
                WEBSITE DEVELOPMENT
              </span>
            </span>
            <h1 className="text-[clamp(2.25rem,1.5rem+3vw,3.625rem)] font-bold leading-[1.2] tracking-[-0.02em] text-[var(--q-heading)] max-w-[800px]">
              Websites that work as hard as you do.
            </h1>
            <p className="text-[clamp(1rem,0.95rem+0.25vw,1.125rem)] text-[var(--q-body)] max-w-[600px] leading-[1.7]">
              High-performance websites designed to convert visitors into
              customers. Built on Webflow, Framer, or custom code — whichever
              fits your business best.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 w-full sm:w-auto items-center">
              <ButtonColorful href="/contact" label="Book a Free Consultation" className="h-12 px-7 text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] w-full sm:w-auto" />
              <Link
                href="/work"
                className="text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] font-semibold px-7 py-3 rounded-full border border-[var(--q-hero-btn-border)] text-[var(--q-hero-btn-text)] hover:border-[var(--q-hero-btn-hover-border)] w-full sm:w-auto text-center"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-[var(--q-section-bg)] py-12 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-4 text-center">
              <SectionTag>WHAT WE BUILD</SectionTag>
              <h2 className="text-[clamp(1.5rem,1.15rem+1.5vw,2.25rem)] font-bold text-[var(--q-heading)]">
                Design, development, and everything in between.
              </h2>
              <p className="max-w-[52ch] text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] text-[var(--q-body)] leading-relaxed">
                From brand-new builds to full redesigns, we deliver websites that look great and perform even better.
              </p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
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

        {/* Process Steps */}
        <ProcessSteps
          headline="From concept to launch."
          description="A five-phase process designed for speed, quality, and zero surprises."
          steps={processSteps}
        />

        {/* Testimonial */}
        <TestimonialSection
          quote="Quessence rebuilt our entire Webflow site in three weeks. The new design increased our lead conversion by 40% in the first month. They understood our brand from day one."
          author="— Head of Marketing, SaaS Company"
        />

        {/* CTA */}
        <CTASection
          headline="Ready for a website that converts?"
          subheadline="Book a free consultation — it takes 15 minutes."
          primaryLabel="Book a Free Consultation"
        />
      </main>

      <Footer />
    </>
  );
}
