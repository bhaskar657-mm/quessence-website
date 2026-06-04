import { Sparkles, Megaphone, Globe, Cpu, X, CheckCircle } from "lucide-react";
import { Header } from "@/components/ui/header-2";
import Footer from "@/components/Footer";

import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import HeroSection from "@/components/HeroSection";

import { ShineBorder } from "@/components/ui/shine-border";
import FAQSection from "@/components/FAQSection";

const services = [
  {
    icon: Megaphone,
    title: "Content Marketing",
    description:
      "We grow your brand on Instagram and YouTube. No ads. Just smart, AI-powered content that builds real audiences.",
    href: "/content-marketing",
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Fast, beautiful websites built on Webflow, Framer, or custom code. Every pixel earns its place.",
    href: "/website-development",
  },
  {
    icon: Sparkles,
    title: "AI Creative Studio",
    description:
      "AI filmmaking, ad commercials, product photography, and more. Studio-quality creative, powered by AI.",
    href: "/ai-creative-studio",
  },
  {
    icon: Cpu,
    title: "AI Products & Automation",
    description:
      "Custom web apps, PWAs, AI agents, and automation systems that do the heavy lifting while you focus on growth.",
    href: "/ai-products-automation",
  },
];

const comparisons = [
  {
    old: "Fragmented services from different vendors",
    new: "Content, websites, creative, and AI products — all under one roof",
  },
  {
    old: "Weeks to ship a simple website",
    new: "AI-powered workflows that cut delivery time in half",
  },
  {
    old: "Manual, repetitive marketing tasks",
    new: "AI automation that handles the grunt work 24/7",
  },
  {
    old: "Generic social media posts",
    new: "Strategic Instagram + YouTube content built for growth, scaled with AI",
  },
  {
    old: "Expensive traditional production for ads and product shoots",
    new: "AI-generated commercials and product photography at a fraction of the cost",
  },
  {
    old: "Surface-level reports",
    new: "Predictive dashboards that show what\u2019s coming, not just what happened",
  },
  {
    old: "Agency layers and slow approvals",
    new: "Scale-up speed — direct access, fast decisions, faster delivery",
  },
];

const homeFaqs = [
  {
    question: "What does Quessence actually do?",
    answer:
      "We help businesses grow through four integrated services: social media content marketing, website development, AI-powered creative production, and custom AI products & automation. Everything we build runs on AI — that's why we ship faster.",
  },
  {
    question: "How is Quessence different from a traditional agency?",
    answer:
      "We're not an agency — we're an AI-first scale-up. No layers of process, no slow approvals. AI is built into every workflow, which means faster delivery, lower costs, and better output. You get a direct line to the people doing the work.",
  },
  {
    question: "What kind of businesses do you work with?",
    answer:
      "We work with solopreneurs, startups, mid-size companies, and enterprises. If you're serious about growth and want a team that moves fast, we're a good fit.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Content marketing is a monthly retainer. Websites typically take 2–6 weeks. AI creative projects can be as fast as a few days. AI product builds vary — we'll scope it together on a call.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simple — head to our contact page or book a 15-minute call. We'll learn about your goals, recommend the right approach, and give you a clear picture of what working together looks like. No pressure, no pitch decks.",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />

      <main id="main-content">
      {/* ── Hero ── */}
      <HeroSection />

      {/* ── Services Preview ── */}
      <section id="services" className="bg-[var(--q-section-bg)] py-12 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="text-xs font-bold text-[var(--q-badge-text)] tracking-[2px] uppercase">WHAT WE DO</span>
            <h2 className="text-[clamp(1.5rem,1.15rem+1.5vw,2.25rem)] font-bold text-[var(--q-heading)]">
              Four pillars. One integrated system.
            </h2>
            <p className="max-w-[52ch] text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] text-[var(--q-body)] leading-relaxed">
              Content, websites, AI creative, and intelligent automation — all under one roof, powered by AI.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 w-full">
            {services.map((s) => (
              <ServiceCard
                key={s.title}
                icon={s.icon}
                title={s.title}
                description={s.description}
                href={s.href}
              />
            ))}
          </ul>
        </div>
      </section>

      {/* ── Old Way vs Quessence Way ── */}
      <section className="bg-[var(--q-section-bg)] py-12 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="text-xs font-bold text-[var(--q-badge-text)] tracking-[2px] uppercase">WHY QUESSENCE</span>
            <h2 className="text-[clamp(1.5rem,1.15rem+1.5vw,2.25rem)] font-bold text-[var(--q-heading)] max-w-[700px]">
              The old way is expensive, slow, and doesn&apos;t scale.
            </h2>
            <p className="max-w-[52ch] text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] text-[var(--q-body)] leading-relaxed">
              See the difference between piecing together vendors and working with an AI-powered system built to move fast.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full">
            {/* Old Way — plain card */}
            <div className="bg-[var(--q-card-bg)] border border-[var(--q-card-border)] rounded-3xl p-5 sm:p-8 flex flex-col gap-2" style={{ boxShadow: 'var(--q-card-shadow)' }}>
              <h3 className="text-xl font-bold text-[var(--q-heading)] mb-4">
                The Old Way
              </h3>
              <div className="flex flex-col gap-4">
                {comparisons.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--q-body)] leading-relaxed">
                      {item.old}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quessence Way — ShineBorder card */}
            <ShineBorder
              borderWidth={3}
              className="border bg-[var(--q-card-bg)] shadow-2xl backdrop-blur-md"
              color={["#FF007F", "#39FF14", "#00FFFF"]}
            >
              <div className="w-full p-5 flex flex-col gap-2">
                <h3 className="text-xl font-bold text-[var(--q-heading)] mb-4">
                  The Quessence Way
                </h3>
                <div className="flex flex-col gap-4">
                  {comparisons.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-[var(--q-body)] leading-relaxed">
                        {item.new}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ShineBorder>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <FAQSection
        heading="Got questions? We've got answers."
        subheading="The most common things people ask before working with us."
        faqs={homeFaqs}
      />

      {/* ── CTA ── */}
      <CTASection
        headline="Ready to build something that lasts?"
        subheadline="Whether you need content, a website, AI-powered creative, or a custom-built product — it starts with a conversation."
        primaryLabel="Get in touch"
      />
      </main>

      <Footer />
    </>
  );
}
