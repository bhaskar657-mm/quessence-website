"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SocialLinks } from "@/components/ui/social-links";
import {
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
  XLogo,
} from "@phosphor-icons/react";

const serviceLinks = [
  { href: "/content-marketing", label: "Content Marketing" },
  { href: "/website-development", label: "Website Development" },
  { href: "/ai-creative-studio", label: "AI Creative Studio" },
  { href: "/ai-products-automation", label: "AI Products" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

const legalLinks = [
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/cookies", label: "Cookie Policy" },
];

const socials = [
  { name: "Instagram", icon: <InstagramLogo weight="fill" size={40} color="#E4405F" /> },
  { name: "LinkedIn", icon: <LinkedinLogo weight="fill" size={40} color="#0A66C2" /> },
  { name: "YouTube", icon: <YoutubeLogo weight="fill" size={40} color="#FF0000" /> },
  { name: "X", icon: <XLogo weight="fill" size={40} className="text-[var(--q-heading)]" /> },
];

export default function Footer() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <footer className="bg-[var(--q-section-bg)] border-t border-[var(--q-card-border)]">
      <div className="px-5 sm:px-8 lg:px-16 xl:px-[120px]">
        {/* Main Footer Grid */}
        <div className="py-10 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="relative mb-6" style={{ width: 140, height: 24 }}>
              <Image
                src="/logo-white.svg"
                alt="Quessence"
                width={140}
                height={24}
                className="absolute inset-0"
                style={{ opacity: isDark ? 1 : 0 }}
              />
              <Image
                src="/logo-black.svg"
                alt="Quessence"
                width={140}
                height={24}
                className="absolute inset-0"
                style={{ opacity: isDark ? 0 : 1 }}
              />
            </div>
            <p className="text-sm text-[var(--q-body)] leading-relaxed max-w-[280px]">
              AI-first digital company. Strategy, content, websites, creative, and products — built to grow your brand.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="inline-flex items-center gap-2 text-xs text-[var(--q-body)] bg-[var(--q-card-bg)] border border-[var(--q-card-border)] rounded-full px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for projects
              </span>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 lg:col-start-6">
            <span className="text-sm font-bold text-[var(--q-heading)] mb-5 block">Services</span>
            <div className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-[13px] text-[var(--q-body)] hover:text-[var(--q-heading)] transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <span className="text-sm font-bold text-[var(--q-heading)] mb-5 block">Company</span>
            <div className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-[13px] text-[var(--q-body)] hover:text-[var(--q-heading)] transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-2">
            <span className="text-sm font-bold text-[var(--q-heading)] mb-5 block">Socials</span>
            <SocialLinks
              socials={socials}
              hoverDirection="left"
              className="text-[var(--q-body)] flex-col items-start gap-0 [&_span]:!text-[13px]"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--q-card-border)] py-6 sm:py-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-0 sm:justify-between">
          <p className="text-[13px] text-[var(--q-muted)]">
            &copy; 2026 Quessence. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-[12px] text-[var(--q-muted)] hover:text-[var(--q-body)] transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
