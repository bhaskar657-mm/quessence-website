import type { Metadata } from "next";
import { Users, Target, Eye, Cpu, Layers, CheckCircle } from "lucide-react";
import { Header } from "@/components/ui/header-2";
import Footer from "@/components/Footer";
import SectionTag from "@/components/SectionTag";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Quessence — AI-First Digital Company Since 2017",
  description:
    "Quessence is an AI-first digital company that has been building brands since 2017. We combine content, websites, creative production, and AI products into one integrated system.",
};

const storyBeats = [
  {
    number: "01",
    title: "The Experience",
    description:
      "For years, we built brands the traditional way — managing teams, coordinating freelancers, juggling agencies. We learned what works, what scales, and what breaks.",
  },
  {
    number: "02",
    title: "The Shift",
    description:
      "Then generative AI arrived. We didn't just experiment — we went all in. We rebuilt our entire workflow around AI, testing every tool, every model, every use case.",
  },
  {
    number: "03",
    title: "The Gap",
    description:
      "We saw a gap in the market: businesses needed an integrated partner that could combine strategy, content, creative, and technology — all powered by AI, all under one roof.",
  },
];

const philosophyCards = [
  {
    icon: Target,
    title: "Strategy before execution",
    description:
      "Every project starts with a clear strategy. We don't jump into production until we know exactly what we're building and why.",
  },
  {
    icon: Eye,
    title: "Clarity over volume",
    description:
      "We'd rather produce 10 perfect pieces than 100 mediocre ones. Quality compounds. Volume without direction is noise.",
  },
  {
    icon: Cpu,
    title: "AI is a tool, not a shortcut",
    description:
      "We use AI to enhance quality, speed, and consistency — not to replace taste, judgment, or creative direction.",
  },
  {
    icon: Layers,
    title: "Integrated systems",
    description:
      "Content, website, creative, products — they all connect. We build systems where every piece reinforces the others.",
  },
];

const clientTypes = [
  "Founder-led businesses ready to professionalize their brand",
  "Mid-size companies scaling up their digital presence",
  "Startups building their first brand from scratch",
  "Enterprises exploring AI-powered content and products",
  "Premium service brands that need quality at every touchpoint",
];

const teamMembers = [
  { name: "Co-Founder", title: "Strategy & Growth" },
  { name: "Co-Founder", title: "Technology & AI" },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* ── Hero ── */}
        <section className="bg-[var(--q-page-bg)] pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center gap-5 sm:gap-6">
            <span className="inline-flex items-center gap-2 bg-[var(--q-badge-bg)] border border-[var(--q-card-border)] rounded-full px-4 py-1.5">
              <Users className="w-4 h-4 text-[#3B6BF5]" />
              <span className="text-xs font-bold tracking-[2px] uppercase text-[var(--q-badge-text)]">
                ABOUT US
              </span>
            </span>
            <h1 className="text-[clamp(2.25rem,1.5rem+3vw,3.625rem)] font-bold leading-[1.2] tracking-[-0.02em] text-[var(--q-heading)] max-w-[800px]">
              We&apos;ve been building brands since 2017. Then AI changed
              everything.
            </h1>
            <p className="text-[clamp(1rem,0.95rem+0.25vw,1.125rem)] text-[var(--q-body)] max-w-[620px] leading-[1.7]">
              That shift didn&apos;t slow us down — it gave us an unfair
              advantage. We rebuilt every workflow, every process, every
              deliverable around AI. Now we help other businesses do the same.
            </p>
          </div>
        </section>

        {/* ── Our Story ── */}
        <section className="bg-[var(--q-section-bg)] py-12 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-4 text-center">
              <SectionTag>OUR STORY</SectionTag>
              <h2 className="text-[clamp(1.5rem,1.15rem+1.5vw,2.25rem)] font-bold text-[var(--q-heading)]">
                Three moments that shaped us.
              </h2>
              <p className="max-w-[52ch] text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] text-[var(--q-body)] leading-relaxed">
                Every company has an origin story. Ours happened in three acts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              {storyBeats.map((beat) => (
                <div
                  key={beat.number}
                  className="bg-[var(--q-card-bg)] border border-[var(--q-card-border)] rounded-2xl p-5 sm:p-8 flex flex-col gap-4"
                  style={{ boxShadow: "var(--q-card-shadow)" }}
                >
                  <span className="text-sm font-extrabold text-[#3B6BF5] tracking-wide">
                    {beat.number}
                  </span>
                  <h3 className="text-[clamp(1.25rem,1rem+1vw,1.5rem)] font-semibold text-[var(--q-heading)]">
                    {beat.title}
                  </h3>
                  <p className="text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] text-[var(--q-body)] leading-relaxed">
                    {beat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Philosophy ── */}
        <section className="bg-[var(--q-section-bg-alt)] py-12 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-4 text-center">
              <SectionTag>OUR PHILOSOPHY</SectionTag>
              <h2 className="text-[clamp(1.5rem,1.15rem+1.5vw,2.25rem)] font-bold text-[var(--q-heading)]">
                What we believe.
              </h2>
              <p className="max-w-[52ch] text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] text-[var(--q-body)] leading-relaxed">
                These principles guide every decision, every deliverable, every relationship.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              {philosophyCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="bg-[var(--q-card-bg)] border border-[var(--q-card-border)] rounded-2xl p-5 sm:p-8 flex flex-col gap-4"
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

        {/* ── Who We Work With ── */}
        <section className="bg-[var(--q-section-bg)] py-12 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-4 text-center">
              <SectionTag>WHO WE WORK WITH</SectionTag>
              <h2 className="text-[clamp(1.5rem,1.15rem+1.5vw,2.25rem)] font-bold text-[var(--q-heading)] max-w-[700px]">
                Built for businesses that are serious about growth.
              </h2>
              <p className="max-w-[52ch] text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] text-[var(--q-body)] leading-relaxed">
                We work best with businesses that understand the value of brand and want a partner — not a vendor.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full items-start">
              <div className="flex flex-col gap-6">
                <p className="text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] text-[var(--q-body)] leading-relaxed">
                  We work best with businesses that understand the value of brand,
                  that are ready to invest in systems (not just campaigns), and
                  that want a partner — not a vendor.
                </p>
                <p className="text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] text-[var(--q-body)] leading-relaxed">
                  Whether you&apos;re a founder building your first brand or an
                  enterprise exploring AI, we bring the same level of strategy,
                  craft, and commitment to every engagement.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                {clientTypes.map((type) => (
                  <div key={type} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] text-[var(--q-body)] leading-relaxed font-medium">
                      {type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Team ── */}
        <section className="bg-[var(--q-section-bg-alt)] py-12 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-4 text-center">
              <SectionTag>THE TEAM</SectionTag>
              <h2 className="text-[clamp(1.5rem,1.15rem+1.5vw,2.25rem)] font-bold text-[var(--q-heading)]">
                Small team. Big impact.
              </h2>
              <p className="max-w-[52ch] text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] text-[var(--q-body)] leading-relaxed">
                Lean by design. Every person on the team ships real work, every day.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 w-full max-w-[700px]">
              {teamMembers.map((member, i) => (
                <div
                  key={i}
                  className="bg-[var(--q-card-bg)] border border-[var(--q-card-border)] rounded-2xl overflow-hidden"
                  style={{ boxShadow: "var(--q-card-shadow)" }}
                >
                  <div className="w-full h-[220px] sm:h-[260px] bg-[var(--q-divider)]" />
                  <div className="p-5 sm:p-6 flex flex-col gap-1 text-center">
                    <span className="text-lg font-bold text-[var(--q-heading)]">
                      {member.name}
                    </span>
                    <span className="text-sm text-[var(--q-body)]">
                      {member.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection
          headline="Ready to work with a team that gets it?"
          subheadline="Let's build something that lasts."
          secondaryLabel="See Our Work"
          secondaryHref="/work"
        />
      </main>

      <Footer />
    </>
  );
}
