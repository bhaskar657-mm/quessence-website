"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { List } from "lucide-react";

export type TOCItem = {
  id: string;
  text: string;
  level: number;
};

export function TableOfContents({ headings }: { headings: TOCItem[] }) {
  const [activeId, setActiveId] = React.useState<string>("");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first heading that is intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 }
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveId(id);
    }
  };

  if (headings.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="sticky top-28"
    >
      <div className="flex items-center gap-2 mb-4">
        <List className="w-4 h-4 text-[#3B6BF5]" />
        <span className="text-xs font-bold tracking-[1.5px] uppercase text-[var(--q-muted)]">
          On this page
        </span>
      </div>
      <ul className="space-y-1 border-l border-[var(--q-divider)]">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              onClick={(e) => handleClick(e, heading.id)}
              className={cn(
                "block text-sm leading-relaxed py-1 transition-colors duration-150",
                heading.level === 2 ? "pl-4" : "pl-7",
                activeId === heading.id
                  ? "text-[#3B6BF5] border-l-2 border-[#3B6BF5] -ml-[1px] font-medium"
                  : "text-[var(--q-muted)] hover:text-[var(--q-heading)]"
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
