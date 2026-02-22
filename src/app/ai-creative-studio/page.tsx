import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  Film,
  Tv,
  Camera,
  Mic,
  CirclePlay,
  Image,
  Scissors,
  CircleUser,
  Award,
  Zap,
  Wallet,
  Layers,
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
  title:
    "AI Creative Studio — AI Filmmaking, Ad Commercials & Product Photography | Quessence",
  description:
    "Studio-quality creative production powered by AI. Filmmaking, ad commercials, product photography, motion graphics, and more — faster, more affordable, and infinitely scalable.",
};

const services = [
  {
    icon: Film,
    title: "AI Filmmaking",
    description:
      "Cinematic video content created with AI tools — from concept to final cut. Brand films, documentaries, and storytelling at scale.",
  },
  {
    icon: Tv,
    title: "AI Ad Commercials",
    description:
      "High-impact ad creatives for social media, YouTube, and display. Produced faster and more cost-effectively with AI.",
  },
  {
    icon: Camera,
    title: "AI Product Photography",
    description:
      "Studio-quality product photos generated with AI. Perfect lighting, backgrounds, and styling — no physical studio required.",
  },
  {
    icon: Mic,
    title: "AI Voiceovers",
    description:
      "Natural-sounding voiceovers in multiple languages and tones. Perfect for ads, explainers, and brand content.",
  },
  {
    icon: CirclePlay,
    title: "AI Motion Graphics",
    description:
      "Animated graphics, logo reveals, and kinetic typography powered by AI for faster turnaround and creative flexibility.",
  },
  {
    icon: Image,
    title: "AI Image Generation",
    description:
      "Custom AI-generated images for marketing campaigns, social media, presentations, and brand collateral.",
  },
  {
    icon: Scissors,
    title: "AI Video Editing",
    description:
      "Intelligent video editing that automates cuts, transitions, color grading, and subtitles for polished final output.",
  },
  {
    icon: CircleUser,
    title: "AI Avatar Videos",
    description:
      "Realistic AI avatars for training videos, product demos, and personalized customer communication at scale.",
  },
];

const whyCards = [
  {
    icon: Award,
    title: "Quality",
    description:
      "AI creates, humans curate. Every piece of creative goes through our team of designers and directors for final polish.",
  },
  {
    icon: Zap,
    title: "Speed",
    description:
      "What used to take weeks now takes days. AI accelerates every stage of the creative process without cutting corners.",
  },
  {
    icon: Wallet,
    title: "Cost",
    description:
      "No studio rentals, no large production crews, no reshoots. AI-powered creative at a fraction of traditional costs.",
  },
  {
    icon: Layers,
    title: "Scale",
    description:
      "Need 10 product photos instead of 3? 20 ad variations instead of 5? AI lets you scale creative output effortlessly.",
  },
];

const processSteps = [
  {
    title: "Brief",
    description:
      "We start with a detailed creative brief to understand your vision, brand guidelines, and project goals.",
  },
  {
    title: "Concept",
    description:
      "Our creative team develops concepts, mood boards, and storyboards to align on direction before production.",
  },
  {
    title: "Generate",
    description:
      "We use cutting-edge AI tools to generate initial creative assets — images, video, audio, and motion.",
  },
  {
    title: "Refine",
    description:
      "Our designers and editors refine AI-generated output, adding human polish, brand consistency, and quality control.",
  },
  {
    title: "Deliver",
    description:
      "Final assets are delivered in all required formats and resolutions, ready for deployment across channels.",
  },
];

export default function AICreativeStudioPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="bg-[var(--q-page-bg)] pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center gap-5 sm:gap-6">
            <span className="inline-flex items-center gap-2 bg-[var(--q-badge-bg)] border border-[var(--q-card-border)] rounded-full px-4 py-1.5">
              <Sparkles className="w-4 h-4 text-[#3B6BF5]" />
              <span className="text-xs font-bold tracking-[2px] uppercase text-[var(--q-badge-text)]">
                AI CREATIVE STUDIO
              </span>
            </span>
            <h1 className="text-[clamp(2.25rem,1.5rem+3vw,3.625rem)] font-bold leading-[1.2] tracking-[-0.02em] text-[var(--q-heading)] max-w-[800px]">
              Studio-quality creative.
              <br />
              Powered by AI.
            </h1>
            <p className="text-[clamp(1rem,0.95rem+0.25vw,1.125rem)] text-[var(--q-body)] max-w-[600px] leading-[1.7]">
              AI filmmaking, ad commercials, product photography, and more.
              Studio-grade creative production — faster, more affordable, and
              infinitely scalable.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 w-full sm:w-auto items-center">
              <ButtonColorful href="/work" label="See Our Work" className="h-12 px-7 text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] w-full sm:w-auto" />
              <Link
                href="/contact"
                className="text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] font-semibold px-7 py-3 rounded-full border border-[var(--q-hero-btn-border)] text-[var(--q-hero-btn-text)] hover:border-[var(--q-hero-btn-hover-border)] w-full sm:w-auto text-center"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* What We Create */}
        <section className="bg-[var(--q-section-bg)] py-12 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-4 text-center">
              <SectionTag>WHAT WE CREATE</SectionTag>
              <h2 className="text-[clamp(1.5rem,1.15rem+1.5vw,2.25rem)] font-bold text-[var(--q-heading)]">
                AI-powered creative production for every format.
              </h2>
              <p className="max-w-[52ch] text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] text-[var(--q-body)] leading-relaxed">
                From video to photography to motion graphics — we produce it all with AI at the core.
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

        {/* Why AI Creative */}
        <section className="bg-[var(--q-section-bg-alt)] py-12 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-4 text-center">
              <SectionTag>WHY AI CREATIVE?</SectionTag>
              <h2 className="text-[clamp(1.5rem,1.15rem+1.5vw,2.25rem)] font-bold text-[var(--q-heading)]">
                Same quality. Different process.
              </h2>
              <p className="max-w-[52ch] text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] text-[var(--q-body)] leading-relaxed">
                AI doesn&apos;t replace creativity — it amplifies it. We combine the
                best AI tools with experienced creative direction to deliver
                results that rival traditional production.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
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
          headline="From brief to final delivery."
          description="A five-step creative workflow designed for speed without sacrificing quality."
          steps={processSteps}
        />

        {/* Pricing */}
        <PricingCTA
          headline="Every creative project is unique."
          description="We scope and price each project individually based on format, volume, complexity, and timeline. Book a free consultation and we'll put together a custom proposal within 48 hours."
        />

        {/* Testimonial */}
        <TestimonialSection
          quote="We needed product photography for 200+ SKUs. Quessence delivered studio-quality images using AI in two weeks — what would have taken months with a traditional studio. The quality blew us away."
          author="— CEO, E-Commerce Brand"
        />

        {/* CTA */}
        <CTASection
          headline="Ready to create something extraordinary?"
          subheadline="Let's produce studio-quality creative at AI speed."
          secondaryLabel="View Our Work"
        />
      </main>

      <Footer />
    </>
  );
}
