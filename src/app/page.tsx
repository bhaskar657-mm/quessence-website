import { Sparkles, Megaphone, Globe, Cpu, X, CheckCircle } from "lucide-react";
import { Header } from "@/components/ui/header-2";
import Footer from "@/components/Footer";

import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import HeroSection from "@/components/HeroSection";

import { ShineBorder } from "@/components/ui/shine-border";
import { TestimonialSlider } from "@/components/ui/testimonial-slider-1";
import { LogoCloud } from "@/components/ui/logo-cloud-2";
import { Feature108 } from "@/components/ui/shadcnblocks-com-feature108";
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

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Brands Scaled" },
  { value: "2x", label: "Faster Delivery" },
  { value: "Since 2017", label: "Building Brands" },
];


const reviews = [
  {
    id: 1,
    name: "Michael Calcada",
    affiliation: "Head of Design, OnLoop",
    quote:
      "Design files almost identical to the final website. A master of his craft — handled requests, bug fixes, and last-minute changes with ease.",
    imageSrc: "/clients/photos/Michael-onloop.jpeg",
    thumbnailSrc: "/clients/photos/Michael-onloop.jpeg",
  },
  {
    id: 2,
    name: "Raghuram Reddy Tera",
    affiliation: "Founder, Cassini",
    quote:
      "Comprehensive knowledge of building sleek, engaging websites. A keen eye for detail — highly recommend for any creative web design project.",
    imageSrc: "/clients/photos/Raghu-cassini.jpeg",
    thumbnailSrc: "/clients/photos/Raghu-cassini.jpeg",
  },
  {
    id: 3,
    name: "Seshank Vemuru",
    affiliation: "VP of Sales, North America",
    quote:
      "Resourceful, hardworking, and an expert at driving complex projects from the ground up. Perfect for startups and small teams.",
    imageSrc: "/clients/photos/Seshan-cassini.jpeg",
    thumbnailSrc: "/clients/photos/Seshan-cassini.jpeg",
  },
  {
    id: 4,
    name: "Sri Vamshi",
    affiliation: "Founder, Wheedle.io",
    quote:
      "A strategic expert with deep UX understanding. Leads and traffic increased significantly in just one month — invaluable for any startup.",
    imageSrc: "/clients/photos/Vamshi-wheedle.jpeg",
    thumbnailSrc: "/clients/photos/Vamshi-wheedle.jpeg",
  },
  {
    id: 5,
    name: "Ana Sofia Pinho",
    affiliation: "Founder, Humankind Works",
    quote:
      "Their knowledge to craft a website that addresses your audience's pain points is unmatched.",
    imageSrc: "/clients/photos/anasofiapinho-humankindworks.jpg",
    thumbnailSrc: "/clients/photos/anasofiapinho-humankindworks.jpg",
  },
];

const featuredTabs = [
  {
    value: "tab-1",
    icon: <Megaphone className="h-auto w-4 shrink-0" />,
    label: "Content Marketing",
    content: {
      badge: "0 → 54.7K Followers",
      title: "Scaling an AI Creator from Zero to 54.7K on Instagram.",
      description:
        "Helped Ravi — a digital creator in the AI & Tech space — build a content strategy that took his Instagram from scratch to 54.7K followers. AI-powered content planning, production, and distribution turned @ravisbook.ai into a go-to voice for learning AI.",
      buttonText: "See Case Study",
      imageSrc: "/clients/casestudies/ravisbook-insta.png",
      imageAlt: "Ravisbook.ai Instagram growth case study",
      imageBg: "#000000",
    },
  },
  {
    value: "tab-2",
    icon: <Globe className="h-auto w-4 shrink-0" />,
    label: "Website Development",
    content: {
      badge: "WordPress → Webflow",
      title: "Digital Overhaul for the Institute for Dental Implantology.",
      description:
        "Migrated IDI from a sluggish WordPress site to a modern Webflow build — responsive design, faster load times, integrated payments, and intuitive navigation that drove more program enquiries.",
      buttonText: "See Case Study",
      imageSrc: "/clients/casestudies/idi-website.webp",
      imageAlt: "Institute for Dental Implantology website redesign",
      imageBg: "#000000",
    },
  },
  {
    value: "tab-3",
    icon: <Sparkles className="h-auto w-4 shrink-0" />,
    label: "AI Creative Studio",
    content: {
      badge: "Knowledge Base AI",
      title: "Interactive Photo Avatar Trained on a Knowledge Base.",
      description:
        "Built an interactive AI avatar that turns a static photo into an animated character capable of answering questions from a custom knowledge base — a conversational AI experience your audience can interact with.",
      buttonText: "See Case Study",
      imageSrc: "",
      imageAlt: "Interactive photo avatar knowledge base demo",
      videoId: "hh1kPU8Zfxg",
    },
  },
  {
    value: "tab-4",
    icon: <Cpu className="h-auto w-4 shrink-0" />,
    label: "AI Products & Automation",
    content: {
      badge: "50% Time Saved",
      title: "Operations Dashboard for Mark My Zone.",
      description:
        "Built a custom admin dashboard that replaced Excel sheets and WhatsApp chaos. The internal team now manages 170+ rental and sales properties in one place — cutting operational time by 50% and eliminating data clutter entirely.",
      buttonText: "See Case Study",
      imageSrc: "/clients/casestudies/mmz-dashboard.png",
      imageAlt: "Mark My Zone admin dashboard case study",
      imageBg: "#f5f5f7",
    },
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

      {/* ── Featured Work ── */}
      <div className="bg-[var(--q-section-bg)]">
        <Feature108
          badge="FEATURED WORK"
          heading="Real projects. Real results."
          description="See how we've helped brands grow with integrated systems across content, web, creative, and AI."
          tabs={featuredTabs}
        />
      </div>

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
            <LogoCloud className="max-w-5xl mx-auto" />
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
        secondaryLabel="See Our Work"
        secondaryHref="/work"
      />
      </main>

      <Footer />
    </>
  );
}
