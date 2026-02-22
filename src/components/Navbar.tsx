"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { useTheme } from "next-themes";
import { MenuItem, Menu, HoveredLink } from "@/components/ui/navbar-menu";
import SkyToggle from "@/components/ui/sky-toggle";

function getThemeForElement(el: HTMLElement): "dark" | "light" {
  const attr = el.getAttribute("data-nav-theme");
  if (attr === "dark" || attr === "light") return attr;

  const bg = getComputedStyle(el).backgroundColor;
  const match = bg.match(/\d+/g);
  if (match && match.length >= 3) {
    const [r, g, b] = match.map(Number);
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
    return luminance < 128 ? "dark" : "light";
  }
  return "light";
}

export default function Navbar() {
  const pathname = usePathname();
  const [navTheme, setNavTheme] = useState<"dark" | "light">("dark");
  const [active, setActive] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const checkTheme = useCallback(() => {
    const sections = document.querySelectorAll<HTMLElement>("section, footer");
    const navBottom = 72;

    for (let i = sections.length - 1; i >= 0; i--) {
      const rect = sections[i].getBoundingClientRect();
      if (rect.top <= navBottom) {
        setNavTheme(getThemeForElement(sections[i]));
        return;
      }
    }
    if (sections.length > 0) {
      setNavTheme(getThemeForElement(sections[0]));
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", checkTheme, { passive: true });
    requestAnimationFrame(checkTheme);
    return () => window.removeEventListener("scroll", checkTheme);
  }, [checkTheme]);

  useEffect(() => {
    requestAnimationFrame(checkTheme);
  }, [pathname, checkTheme]);

  const isDarkNav = navTheme === "dark";
  const isGlobalDark = mounted && resolvedTheme === "dark";

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 ${isDarkNav ? "dark" : ""}`}>
      <div className="max-w-[1440px] mx-auto flex items-center justify-between h-[72px] px-[75px]">
        {/* Logo */}
        <Link href="/" className="relative z-10 block" style={{ width: 160, height: 28 }}>
          <Image
            src="/logo-white.svg"
            alt="Quessence"
            width={160}
            height={28}
            priority
            className="absolute inset-0"
            style={{ opacity: isDarkNav ? 1 : 0 }}
          />
          <Image
            src="/logo-black.svg"
            alt="Quessence"
            width={160}
            height={28}
            priority
            className="absolute inset-0"
            style={{ opacity: isDarkNav ? 0 : 1 }}
          />
        </Link>

        {/* Center — Floating pill menu */}
        <Menu setActive={setActive}>
          <Link href="/about">
            <MenuItem setActive={setActive} active={active} item="About" />
          </Link>

          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-3 text-sm">
              <HoveredLink href="/content-marketing">Content Marketing</HoveredLink>
              <HoveredLink href="/website-development">Website Development</HoveredLink>
              <HoveredLink href="/ai-creative-studio">AI Creative Studio</HoveredLink>
              <HoveredLink href="/ai-products-automation">AI Products & Automation</HoveredLink>
            </div>
          </MenuItem>

          <Link href="/work">
            <MenuItem setActive={setActive} active={active} item="Work" />
          </Link>

          <Link href="/contact">
            <MenuItem setActive={setActive} active={active} item="Contact" />
          </Link>
        </Menu>

        {/* Right side — theme toggle + CTA */}
        <div className="relative z-10 flex items-center gap-3">
          {/* Theme toggle */}
          <SkyToggle />

          {/* CTA */}
          <Link
            href="/contact"
            className={`text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-300 ${
              isDarkNav
                ? "bg-white text-black hover:bg-neutral-200"
                : "bg-[#212121] text-white hover:bg-[#333]"
            }`}
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </div>
  );
}
