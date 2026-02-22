import type { Metadata } from "next";
import Link from "next/link";
import {
  Megaphone,
  Instagram,
  Youtube,
  PenTool,
  Video,
  Calendar,
  TrendingUp,
  MessageCircle,
  Sparkles,
  CircleUser,
  ArrowRight,
} from "lucide-react";
import { Header } from "@/components/ui/header-2";
import Footer from "@/components/Footer";
import SectionTag from "@/components/SectionTag";
import ServiceCard from "@/components/ServiceCard";
import ProcessSteps from "@/components/ProcessSteps";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";
import { ButtonColorful } from "@/components/ui/button-colorful";
import PricingGuideModal from "@/components/PricingGuideModal";

export const metadata: Metadata = {
  title:
    "Social Media Content Marketing — Instagram & YouTube Growth | Quessence",
  description:
    "AI-powered social media content marketing for Instagram, YouTube, and LinkedIn. Strategy, creation, and management to grow your brand organically.",
};

const services = [
  {
    icon: Instagram,
    title: "Instagram Growth & Management",
    description:
      "Full-service Instagram content strategy, creation, and management to grow your followers and engagement organically.",
  },
  {
    icon: Youtube,
    title: "YouTube Channel Growth",
    description:
      "YouTube channel strategy, long-form video optimization, and Shorts strategy to build subscribers and watch time.",
  },
  {
    icon: PenTool,
    title: "Carousel & Static Post Design",
    description:
      "Scroll-stopping carousel and static post designs that educate, inspire, and convert your audience.",
  },
  {
    icon: Video,
    title: "Reels, Shorts & Video Production",
    description:
      "Short-form video production for Reels, Shorts, and TikTok that captures attention in the first second.",
  },
  {
    icon: Calendar,
    title: "Content Calendar Planning",
    description:
      "Strategic content calendars that align with your business goals, seasonal trends, and audience behavior.",
  },
  {
    icon: TrendingUp,
    title: "Analytics & Performance Tracking",
    description:
      "Data-driven reporting and analytics to measure what works, optimize what doesn't, and scale what converts.",
  },
  {
    icon: MessageCircle,
    title: "Community Engagement",
    description:
      "Active community management, comment responses, and DM strategy to build relationships with your audience.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Content Production",
    description:
      "Leverage AI tools for faster content ideation, copywriting, and visual asset creation without sacrificing quality.",
  },
  {
    icon: CircleUser,
    title: "Founder LinkedIn Personal Branding",
    description:
      "Build your personal brand on LinkedIn with thought leadership content, ghostwriting, and profile optimization.",
  },
];

const processSteps = [
  {
    title: "Discover",
    description:
      "We audit your current social presence, study your competitors, and understand your audience deeply.",
  },
  {
    title: "Plan",
    description:
      "We build a content strategy and calendar tailored to your brand voice, goals, and platforms.",
  },
  {
    title: "Create",
    description:
      "Our team produces high-quality content — graphics, videos, captions, and stories — ready to post.",
  },
  {
    title: "Grow",
    description:
      "We publish, engage, analyze, and optimize. Every month, your brand reaches more of the right people.",
  },
];

const plans = [
  {
    name: "Standard",
    tagline: "For brands getting started",
    description:
      "Strategy, content creation, scheduling, analytics, and a dedicated account manager to build your foundation.",
  },
  {
    name: "Gold",
    tagline: "For brands ready to grow",
    description:
      "Everything in Standard plus more content volume, deeper engagement, and advanced analytics.",
    popular: true,
  },
  {
    name: "Platinum",
    tagline: "For brands ready to dominate",
    description:
      "Full-scale content engine with maximum output, priority support, and premium creative production.",
  },
];

export default function ContentMarketingPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="bg-[var(--q-page-bg)] pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center gap-5 sm:gap-6">
            <span className="inline-flex items-center gap-2 bg-[var(--q-badge-bg)] border border-[var(--q-card-border)] rounded-full px-4 py-1.5">
              <Megaphone className="w-4 h-4 text-[#3B6BF5]" />
              <span className="text-xs font-bold tracking-[2px] uppercase text-[var(--q-badge-text)]">
                CONTENT MARKETING
              </span>
            </span>
            <h1 className="text-[clamp(2.25rem,1.5rem+3vw,3.625rem)] font-bold leading-[1.2] tracking-[-0.02em] text-[var(--q-heading)] max-w-[800px]">
              Grow your brand where your audience already lives.
            </h1>
            <p className="text-[clamp(1rem,0.95rem+0.25vw,1.125rem)] text-[var(--q-body)] max-w-[600px] leading-[1.7]">
              Instagram, YouTube, LinkedIn, and beyond. We create, manage, and
              grow your social media presence so you can focus on running your
              business.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 w-full sm:w-auto items-center">
              <ButtonColorful href="/contact" label="Get Started" className="h-12 px-7 text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] w-full sm:w-auto" />
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
              <SectionTag>WHAT WE DO</SectionTag>
              <h2 className="text-[clamp(1.5rem,1.15rem+1.5vw,2.25rem)] font-bold text-[var(--q-heading)]">
                Everything your brand needs to grow on social.
              </h2>
              <p className="max-w-[52ch] text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] text-[var(--q-body)] leading-relaxed">
                From strategy to production to analytics — a full-stack content engine for every platform.
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
          headline="Strategy, creation, growth — on repeat."
          description="A proven four-step system that turns your social presence into a growth engine."
          steps={processSteps}
        />

        {/* Pricing */}
        <section className="bg-[var(--q-section-bg-alt)] py-12 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-4 text-center">
              <SectionTag>PRICING</SectionTag>
              <h2 className="text-[clamp(1.5rem,1.15rem+1.5vw,2.25rem)] font-bold text-[var(--q-heading)]">
                Three plans. One goal: growth.
              </h2>
              <p className="max-w-[52ch] text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] text-[var(--q-body)] leading-relaxed">
                Every plan includes strategy, content creation, scheduling, analytics, and a dedicated account manager.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-[800px]">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative bg-[var(--q-card-bg)] border rounded-2xl p-5 sm:p-8 flex flex-col items-center text-center gap-2 ${
                    plan.popular
                      ? "border-[#3B6BF5] shadow-lg"
                      : "border-[var(--q-card-border)]"
                  }`}
                  style={{ boxShadow: "var(--q-card-shadow)" }}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#3B6BF5] text-white text-xs font-bold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-[clamp(1.25rem,1rem+1vw,1.5rem)] font-bold text-[var(--q-heading)]">
                    {plan.name}
                  </h3>
                  <p className="text-sm font-medium text-[var(--q-body)]">
                    {plan.tagline}
                  </p>
                  <p className="text-sm text-[var(--q-muted)] leading-relaxed mt-1">
                    {plan.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] text-[var(--q-body)] text-center max-w-[600px] leading-relaxed">
              Custom plans available for enterprise brands. Download our full pricing guide for details.
            </p>
            <PricingGuideModal />
          </div>
        </section>

        {/* Cross-link */}
        <section className="bg-[var(--q-section-bg)] py-8 sm:py-12 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] text-[var(--q-body)] text-center">
              Looking for AI-generated video, ad commercials, or product
              photography?{" "}
              <Link
                href="/ai-creative-studio"
                className="text-[#3B6BF5] font-semibold inline-flex items-center gap-1 hover:underline"
              >
                Check out our AI Creative Studio
                <ArrowRight className="w-4 h-4" />
              </Link>
            </p>
          </div>
        </section>

        {/* Testimonial */}
        <TestimonialSection
          quote="We went from 2,000 to 18,000 Instagram followers in six months. The content quality and consistency Quessence delivers is unmatched. They don't just post — they build a brand."
          author="— Founder, Fashion Brand"
        />

        {/* CTA */}
        <CTASection
          headline="Ready to grow your audience?"
          subheadline="Let's build a content system that works."
        />
      </main>

      <Footer />
    </>
  );
}
