"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import HeroWave from "@/components/ui/dynamic-wave-canvas-background";
import { ButtonColorful } from "@/components/ui/button-colorful";

export default function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = !mounted || resolvedTheme === "dark";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--q-page-bg)]">
      {/* Wave canvas background */}
      <HeroWave mode={isDark ? "dark" : "light"} />

      {/* Content overlay */}
      <div className="relative z-10 w-full flex items-center justify-center min-h-screen pt-[72px]">
        <div className="max-w-[800px] flex flex-col items-center text-center gap-4 sm:gap-5 px-5 sm:px-8 lg:px-0">
          {/* Tagline */}
          <span className="text-xs sm:text-[13px] font-semibold tracking-[2px] sm:tracking-[2.5px] uppercase text-[var(--q-hero-tagline)]">
            AI-First Digital Company
          </span>

          {/* Headline */}
          <h1 className="text-[clamp(2.25rem,1.5rem+3vw,3.625rem)] font-bold leading-[1.2] tracking-[-0.02em] pb-1 text-[var(--q-hero-heading)]">
            Scale Intelligence,
            <br />
            Not Overheads.
          </h1>

          {/* Subheading */}
          <p className="text-[clamp(1rem,0.95rem+0.25vw,1.125rem)] max-w-[640px] leading-[1.7] text-[var(--q-hero-body)]">
            Everything we build runs on AI. That&apos;s why we ship faster.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 w-full sm:w-auto items-center">
            <ButtonColorful href="/work" label="See Our Work" className="h-12 px-7 text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] w-full sm:w-auto" />
            <Link
              href="/contact"
              className="text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] font-semibold px-7 py-3 rounded-full border border-[var(--q-hero-btn-border)] text-[var(--q-hero-btn-text)] hover:border-[var(--q-hero-btn-hover-border)] w-full sm:w-auto text-center"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
