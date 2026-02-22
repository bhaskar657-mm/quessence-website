import { Sparkles, Megaphone, Globe, Cpu, X, CheckCircle } from "lucide-react";
import { Header } from "@/components/ui/header-2";
import Footer from "@/components/Footer";

import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import HeroSection from "@/components/HeroSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import { ShineBorder } from "@/components/ui/shine-border";
import { TestimonialSlider } from "@/components/ui/testimonial-slider-1";
import { LogoCloud } from "@/components/ui/logo-cloud-2";
import { Feature108 } from "@/components/ui/shadcnblocks-com-feature108";

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

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Brands Scaled" },
  { value: "2x", label: "Faster Delivery" },
  { value: "Since 2017", label: "Building Brands" },
];


const reviews = [
  {
    id: 1,
    name: "Ashley Right",
    affiliation: "Pinterest",
    quote:
      "Professionals in their craft! All products were super amazing with strong attention to details, comps and overall vibe.",
    imageSrc:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop&q=80",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=120&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Jacob Jose",
    affiliation: "New York Times",
    quote:
      "Unlimited, instant access to hundreds of premium quality resources created by designers for designers.",
    imageSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&q=80",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=120&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Elara Sands",
    affiliation: "Behance",
    quote:
      "The attention to detail is immaculate. Every component feels polished and ready for production.",
    imageSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop&q=80",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=120&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Marcus Cole",
    affiliation: "Dribbble",
    quote:
      "A true time-saver. I can focus on my core logic instead of pixel-pushing. Highly recommended.",
    imageSrc:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=600&fit=crop&q=80",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=120&fit=crop&q=80",
  },
  {
    id: 5,
    name: "Serena V.",
    affiliation: "Figma",
    quote:
      "This is the design system I've been waiting for. It's flexible, accessible, and beautiful.",
    imageSrc:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop&q=80",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=120&fit=crop&q=80",
  },
];

const featuredTabs = [
  {
    value: "tab-1",
    icon: <Megaphone className="h-auto w-4 shrink-0" />,
    label: "Content Marketing",
    content: {
      badge: "3x Follower Growth",
      title: "Brand Growth for a Premium D2C Label.",
      description:
        "Built a full content engine — strategy, production, and distribution — that tripled their social following and doubled inbound leads in 90 days.",
      buttonText: "See Case Study",
      imageSrc:
        "https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg",
      imageAlt: "Content marketing case study",
    },
  },
  {
    value: "tab-2",
    icon: <Globe className="h-auto w-4 shrink-0" />,
    label: "Website Development",
    content: {
      badge: "42% More Conversions",
      title: "E-commerce Rebuild for a Health Brand.",
      description:
        "Redesigned their Shopify store with conversion-focused layouts, faster load times, and a seamless checkout experience that drove measurable results.",
      buttonText: "See Case Study",
      imageSrc:
        "https://www.shadcnblocks.com/images/block/placeholder-dark-2.svg",
      imageAlt: "Website development case study",
    },
  },
  {
    value: "tab-3",
    icon: <Sparkles className="h-auto w-4 shrink-0" />,
    label: "AI Creative Studio",
    content: {
      badge: "60% Lower Cost",
      title: "AI-Powered Ad Campaign for a Fintech Startup.",
      description:
        "Produced a full suite of video ads and product visuals using AI workflows — cinematic quality at a fraction of the traditional production cost.",
      buttonText: "See Case Study",
      imageSrc:
        "https://www.shadcnblocks.com/images/block/placeholder-dark-3.svg",
      imageAlt: "AI creative studio case study",
    },
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

      {/* ── How We Work ── */}
      <HowWeWorkSection />

      {/* ── Social Proof ── */}
      <section className="bg-[var(--q-section-bg)] py-12 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-16">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="text-xs font-bold text-[var(--q-badge-text)] tracking-[2px] uppercase">
              TESTIMONIALS
            </span>
            <h2 className="text-[clamp(1.5rem,1.15rem+1.5vw,2.25rem)] font-bold text-[var(--q-heading)]">
              Trusted by brands that move fast.
            </h2>
            <p className="max-w-[52ch] text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] text-[var(--q-body)] leading-relaxed">
              Don&apos;t take our word for it — hear from the brands we&apos;ve helped grow.
            </p>
          </div>

          {/* Testimonial Slider */}
          <TestimonialSlider
            reviews={reviews}
            className="bg-transparent p-0 md:p-0 min-h-[500px] md:min-h-[500px]"
          />

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[var(--q-card-bg)] border border-[var(--q-card-border)] rounded-2xl p-5 sm:p-8 flex flex-col items-center text-center gap-2"
                style={{ boxShadow: 'var(--q-card-shadow)' }}
              >
                <span className="text-[clamp(1.5rem,1rem+2vw,1.875rem)] font-extrabold text-[var(--q-heading)]">
                  {stat.value}
                </span>
                <span className="text-sm text-[var(--q-body)] font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Logo Cloud */}
          <div className="w-full flex flex-col items-center gap-6">
            <h3 className="text-base sm:text-lg font-medium text-[var(--q-body)] tracking-tight text-center">
              Companies we{" "}
              <span className="font-semibold text-[#3B6BF5]">collaborate</span>{" "}
              with.
            </h3>
            <LogoCloud className="max-w-3xl mx-auto" />
          </div>
        </div>
      </section>

      {/* ── Featured Work ── */}
      <div className="bg-[var(--q-section-bg)]">
        <Feature108
          badge="FEATURED WORK"
          heading="Real projects. Real results."
          description="See how we've helped brands grow with integrated systems across content, web, creative, and AI."
          tabs={featuredTabs}
        />
      </div>

      {/* ── CTA ── */}
      <CTASection
        headline="Ready to build something that lasts?"
        subheadline="Whether you need content, a website, AI-powered creative, or a custom-built product — it starts with a conversation."
        primaryLabel="Get in touch"
        secondaryLabel="See Our Work"
        secondaryHref="/work"
      />
      </main>

      <Footer />
    </>
  );
}
