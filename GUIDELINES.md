# Quessence Website — Design & Development Guidelines

**Version 3.0 | February 2026**
Internal reference for all contributors. Covers brand identity, tech stack, design tokens, typography, responsive patterns, component architecture, blog system, analytics, backend integration, accessibility, and complete copy reference.

---

## Table of Contents

1. [Brand Overview](#1-brand-overview)
2. [Tech Stack](#2-tech-stack)
3. [Project Structure](#3-project-structure)
4. [Design Tokens — Color System](#4-design-tokens--color-system)
5. [Typography System](#5-typography-system)
6. [Responsive System](#6-responsive-system)
7. [Component Architecture](#7-component-architecture)
8. [Section Pattern](#8-section-pattern)
9. [Header & Navigation](#9-header--navigation)
10. [Footer](#10-footer)
11. [Backend — Supabase & Resend](#11-backend--supabase--resend)
12. [Accessibility (WCAG AAA)](#12-accessibility-wcag-aaa)
13. [Theme System](#13-theme-system)
14. [Motion & Interactions](#14-motion--interactions)
15. [Homepage Copy — Complete Reference](#15-homepage-copy--complete-reference)
16. [Blog System](#16-blog-system)
17. [Work Page & Case Studies](#17-work-page--case-studies)
18. [Analytics & Tracking](#18-analytics--tracking)
19. [SEO / AEO / GEO](#19-seo--aeo--geo)
20. [Sitemap & Pages](#20-sitemap--pages)
21. [Brand Voice Rules](#21-brand-voice-rules)

---

## 1. Brand Overview

**Quessence** is an AI-first digital company (never "agency"). We help businesses scale through four core pillars:

1. **Content Marketing** — Instagram, YouTube, LinkedIn organic growth
2. **Website Development** — Webflow, Framer, Shopify, custom code
3. **AI Creative Studio** — AI filmmaking, ad commercials, product photography, voiceovers, motion graphics
4. **AI Products & Automation** — Custom web apps, PWAs, AI agents, automation systems

**Tagline:** "Scale Intelligence, Not Overheads."

**Positioning:** Modern, AI-first, premium. We are a scale-up, not an agency. Two founders, deep experience since 2017. AI is our operating system, not a feature we sell.

**Who we serve:**
- Solopreneurs and creators
- Mid-size companies and high-growth startups
- Enterprise organizations and premium service brands
- Founder-led and family-run businesses

**Logo files:**
- `Quessence - black.svg` — used on light backgrounds
- `Quessence - white.svg` — used on dark backgrounds
- Copies in `public/` as `logo-black.svg` and `logo-white.svg`

---

## 2. Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Framework** | Next.js (App Router) | 16.1.6 |
| **Language** | TypeScript | 5.9.3 |
| **React** | React | 19.2.4 |
| **Styling** | Tailwind CSS v4 (CSS-based config) | 4.2.0 |
| **Typography** | @tailwindcss/typography (prose classes) | 0.5.19 |
| **Animation** | Framer Motion | 12.34.3 |
| **Theme** | next-themes (class-based) | 0.4.6 |
| **Icons** | Lucide React + Phosphor Icons | — |
| **UI Primitives** | Radix UI (Dialog, Tabs, Slot) | — |
| **Utilities** | clsx, tailwind-merge, class-variance-authority | — |
| **Styled Components** | styled-components (SkyToggle only) | 6.3.11 |
| **Blog/MDX** | next-mdx-remote (RSC), gray-matter | 6.0.0 / 4.0.3 |
| **Database** | Supabase (PostgreSQL) | 2.97.0 |
| **Email** | Resend (transactional email) | 6.9.2 |
| **Analytics** | Vercel Analytics + Speed Insights | 1.6.1 / 1.3.1 |
| **Tracking** | Google Analytics (GA4), Microsoft Clarity | — |
| **Font** | Inter (Google Fonts) | 300–900 weights |

### Key Configuration

**Tailwind v4** uses CSS-based configuration, not `tailwind.config.ts`:
```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";
@variant dark (&:is(.dark *));
```

The `@tailwindcss/typography` plugin is **required** — it powers all `prose` and `prose-*` classes used on the blog post pages. Without it, blog content has zero spacing or styling.

**Font loading** via `next/font/google`:
```tsx
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});
```

Applied via: `<html className={inter.variable}>` and `.font-primary { font-family: var(--font-inter), "Inter", sans-serif; }`

---

## 3. Project Structure

```
pencil_website/
├── .env.local                 # Supabase + Resend secrets (NEVER commit)
├── .gitignore                 # Excludes .env.local, node_modules, .next
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── next.config.ts             # Next.js configuration
├── postcss.config.mjs         # PostCSS config (Tailwind v4)
├── GUIDELINES.md              # This file
├── content/
│   └── blog/                  # MDX blog posts (frontmatter + markdown)
│       ├── ai-content-marketing-2025.mdx
│       ├── ai-generated-visuals-brand-identity.mdx
│       ├── business-automation-ai-agents-2025.mdx
│       └── website-performance-conversions-2025.mdx
├── public/
│   ├── logo-black.svg         # Dark logo for light backgrounds
│   ├── logo-white.svg         # Light logo for dark backgrounds
│   ├── quessence_content_marketing_plans.pdf  # Downloadable pricing guide
│   ├── blog/                  # Blog cover images and inline images
│   │   ├── ai-content-marketing.jpg
│   │   ├── ai-creative-visuals.jpg
│   │   ├── ai-automation.jpg
│   │   ├── website-performance.jpg
│   │   ├── content-calendar-dashboard.jpg
│   │   ├── social-media-analytics.jpg
│   │   ├── web-performance-dashboard.jpg
│   │   ├── modern-web-development.jpg
│   │   ├── ai-generated-art.jpg
│   │   ├── brand-design-process.jpg
│   │   ├── automation-workflow.jpg
│   │   └── team-productivity.jpg
│   ├── clients/
│   │   ├── logos/             # Client logos (SVG/PNG/WebP, dark + light variants)
│   │   ├── photos/            # Client/testimonial headshots
│   │   └── casestudies/       # Case study screenshots & social media captures
│   └── socials/
│       ├── instagram.png
│       ├── tiktok.png
│       ├── linkedin.png
│       └── youtube.png
└── src/
    ├── app/
    │   ├── globals.css                        # All CSS variables, theme tokens, base styles
    │   ├── layout.tsx                         # Root layout (ThemeProvider, font, analytics, tracking scripts)
    │   ├── icon.png                           # Favicon
    │   ├── apple-icon.png                     # Apple touch icon
    │   ├── page.tsx                           # Homepage
    │   ├── about/page.tsx                     # About page
    │   ├── blog/
    │   │   ├── page.tsx                       # Blog listing (featured post + grid)
    │   │   └── [slug]/page.tsx                # Blog post (MDX + TOC sidebar + schema)
    │   ├── contact/page.tsx                   # Contact page (wraps ContactPageContent)
    │   ├── content-marketing/page.tsx         # Content Marketing service page
    │   ├── website-development/page.tsx       # Website Development service page
    │   ├── ai-creative-studio/page.tsx        # AI Creative Studio service page
    │   ├── ai-products-automation/page.tsx    # AI Products & Automation service page
    │   ├── work/page.tsx                      # Portfolio page (wraps WorkPageContent)
    │   ├── privacy/page.tsx                   # Privacy Policy
    │   ├── terms/page.tsx                     # Terms of Service
    │   ├── cookies/page.tsx                   # Cookie Policy
    │   └── api/
    │       ├── contact/route.ts               # POST — contact form submissions
    │       └── pricing-guide/route.ts         # POST — pricing guide downloads (lead magnet)
    ├── components/
    │   ├── HeroSection.tsx                    # Homepage hero (client component)
    │   ├── CTASection.tsx                     # Reusable CTA block
    │   ├── ServiceCard.tsx                    # Service card with glowing border
    │   ├── ProcessSteps.tsx                   # Reusable process step layout
    │   ├── TestimonialSection.tsx             # Testimonial quote block
    │   ├── SectionTag.tsx                     # Eyebrow/badge component
    │   ├── FAQSection.tsx                     # Reusable FAQ accordion (client component)
    │   ├── PricingCTA.tsx                     # Pricing call-to-action
    │   ├── PricingGuideModal.tsx              # Lead magnet modal (email capture + PDF download)
    │   ├── BlogContent.tsx                    # MDX renderer with heading ID injection (client)
    │   ├── TableOfContents.tsx                # Sticky TOC sidebar with IntersectionObserver (client)
    │   ├── ContactPageContent.tsx             # Contact form with Supabase submission
    │   ├── WorkPageContent.tsx                # Portfolio grid with filter bar (client component)
    │   ├── Footer.tsx                         # Site-wide footer
    │   ├── Navbar.tsx                         # Legacy navbar (unused — header-2 is active)
    │   ├── theme-provider.tsx                 # next-themes wrapper
    │   └── ui/                                # Reusable UI primitives
    │       ├── header-2.tsx                   # Scroll-animated header with Services dropdown
    │       ├── dialog.tsx                     # Radix Dialog primitives (modal)
    │       ├── button.tsx                     # Base button (CVA variants)
    │       ├── button-colorful.tsx            # Gradient CTA button
    │       ├── badge.tsx                      # Badge component
    │       ├── card.tsx                       # Card component
    │       ├── sky-toggle.tsx                 # Light/dark theme toggle
    │       ├── dynamic-wave-canvas-background.tsx  # Hero wave animation
    │       ├── glowing-effect.tsx             # Mouse-tracking glow for cards
    │       ├── shine-border.tsx               # Animated gradient border
    │       ├── process-timeline.tsx           # Scroll-linked process cards
    │       ├── testimonial-slider-1.tsx       # Testimonial carousel
    │       ├── shadcnblocks-com-feature108.tsx # Tabbed featured work (video + image)
    │       ├── logo-cloud-2.tsx               # Client logo grid (10 logos, theme-aware)
    │       ├── social-links.tsx               # Social media link list
    │       ├── navbar-menu.tsx                # Navigation menu primitives
    │       ├── menu-toggle-icon.tsx           # Hamburger/close icon animation
    │       └── use-scroll.tsx                 # Scroll progress hook
    └── lib/
        ├── utils.ts                           # cn() utility (clsx + tailwind-merge)
        ├── blog.ts                            # Blog utilities (getAllPosts, getPostBySlug, extractHeadings)
        ├── supabase.ts                        # Lazy-initialized Supabase client (server-side)
        └── styled-registry.tsx                # SSR registry for styled-components
```

---

## 4. Design Tokens — Color System

All colors are managed via CSS custom properties in `globals.css`. Use `--q-*` semantic tokens everywhere — never hardcode hex values.

### Light Theme (`:root`)

| Token | Value | Usage |
|-------|-------|-------|
| `--q-page-bg` | `#F7F8FA` | Page-level background (body) |
| `--q-section-bg` | `#FFFFFF` | Section backgrounds |
| `--q-section-bg-alt` | `#F7F8FA` | Alternate section backgrounds |
| `--q-card-bg` | `#FFFFFF` | Card backgrounds |
| `--q-card-border` | `#E5E7EB` | Card borders |
| `--q-card-shadow` | `0px 0px 27px 0px rgba(0,0,0,0.06)` | Card box-shadow |
| `--q-heading` | `#111827` | H1, H2, H3, bold text |
| `--q-subheading` | `#374151` | Secondary headings |
| `--q-body` | `#6B7280` | Body text, descriptions |
| `--q-muted` | `#9CA3AF` | Captions, footnotes, legal text |
| `--q-badge-bg` | `#F3F4F6` | Badge/tag backgrounds |
| `--q-badge-text` | `#6B7280` | Eyebrow/badge text |
| `--q-icon-color` | `#374151` | Icon fills |
| `--q-divider` | `#E5E7EB` | Horizontal rules, separators |
| `--q-nav-link-color` | `#6B7280` | Nav link default |
| `--q-nav-link-hover` | `#111827` | Nav link hover |
| `--q-nav-link-hover-bg` | `rgba(0,0,0,0.05)` | Nav link hover background |
| `--q-nav-pill-bg` | `rgba(255,255,255,0.85)` | Header pill background |
| `--q-nav-pill-border` | `rgba(229,231,235,1)` | Header pill border |
| `--q-mobile-menu-bg` | `rgba(255,255,255,0.95)` | Mobile menu backdrop |
| `--q-mobile-menu-border` | `#E5E7EB` | Mobile menu border |
| `--q-hero-tagline` | `#6B7280` | Hero eyebrow text |
| `--q-hero-heading` | `#111827` | Hero H1 |
| `--q-hero-body` | `#4B5563` | Hero description |
| `--q-hero-btn-border` | `#D1D5DB` | Hero secondary button border |
| `--q-hero-btn-text` | `#1F2937` | Hero secondary button text |
| `--q-hero-btn-hover-border` | `#6B7280` | Hero secondary button hover |

### Dark Theme (`.dark`)

| Token | Value | Usage |
|-------|-------|-------|
| `--q-page-bg` | `#000000` | Page-level background |
| `--q-section-bg` | `#000000` | Section backgrounds |
| `--q-section-bg-alt` | `#09090b` | Alternate sections |
| `--q-card-bg` | `#09090b` | Card backgrounds |
| `--q-card-border` | `#27272a` | Card borders |
| `--q-card-shadow` | `0px 0px 27px 0px rgba(45,45,45,0.3)` | Card box-shadow |
| `--q-heading` | `#FFFFFF` | Headings |
| `--q-subheading` | `rgba(255,255,255,0.7)` | Secondary headings |
| `--q-body` | `#a1a1aa` | Body text |
| `--q-muted` | `#71717a` | Muted text |
| `--q-badge-bg` | `#27272a` | Badge backgrounds |
| `--q-badge-text` | `rgba(255,255,255,0.4)` | Eyebrow text |
| `--q-icon-color` | `#FFFFFF` | Icons |
| `--q-divider` | `#27272a` | Dividers |
| `--q-nav-link-color` | `#a1a1aa` | Nav links |
| `--q-nav-link-hover` | `#FFFFFF` | Nav link hover |
| `--q-nav-link-hover-bg` | `rgba(255,255,255,0.1)` | Nav hover bg |
| `--q-nav-pill-bg` | `rgba(0,0,0,0.7)` | Header pill |
| `--q-nav-pill-border` | `rgba(39,39,42,1)` | Header pill border |
| `--q-mobile-menu-bg` | `rgba(0,0,0,0.95)` | Mobile menu |
| `--q-mobile-menu-border` | `#27272a` | Mobile menu border |
| `--q-hero-tagline` | `rgba(255,255,255,0.4)` | Hero eyebrow |
| `--q-hero-heading` | `#FFFFFF` | Hero heading |
| `--q-hero-body` | `rgba(255,255,255,0.7)` | Hero body |
| `--q-hero-btn-border` | `rgba(255,255,255,0.2)` | Hero button border |
| `--q-hero-btn-text` | `#FFFFFF` | Hero button text |
| `--q-hero-btn-hover-border` | `rgba(255,255,255,0.4)` | Hero button hover |

### Accent Color

`--color-primary` / `--color-ring`: **#3B6BF5** (bold blue) — used for CTAs, active states, focus rings, and accent highlights.

### Usage Rules

- **Always** use `--q-*` tokens: `text-[var(--q-heading)]`, `bg-[var(--q-card-bg)]`, etc.
- **Never** hardcode hex colors inline (except for decorative accents like ShineBorder gradient).
- Card pattern: `bg-[var(--q-card-bg)] border border-[var(--q-card-border)]` with `style={{ boxShadow: 'var(--q-card-shadow)' }}`
- The `#3B6BF5` accent is the only hardcoded color allowed in content (e.g., CTA buttons, links, icon accents).

---

## 5. Typography System

**Font:** Inter — loaded via `next/font/google` with weights 300–900.

All typography uses **fluid `clamp()` values** that scale smoothly between a mobile minimum and a desktop maximum. No breakpoint-based font size jumps.

### Fluid Type Scale

| Element | CSS | Min | Max | Weight |
|---------|-----|-----|-----|--------|
| **Hero H1** | `text-[clamp(2.25rem,1.5rem+3vw,3.625rem)]` | 36px | 58px | `font-bold` (700) |
| **Section H2** | `text-[clamp(1.5rem,1.15rem+1.5vw,2.25rem)]` | 24px | 36px | `font-bold` (700) |
| **Sub-heading H3** | `text-[clamp(1.25rem,1rem+1vw,1.5rem)]` | 20px | 24px | `font-semibold` (600) |
| **Featured H3** | `text-[clamp(1.5rem,0.75rem+3.5vw,3rem)]` | 24px | 48px | `font-semibold` (600) |
| **Body text** | `text-[clamp(1rem,0.95rem+0.25vw,1.125rem)]` | 16px | 18px | `font-normal` (400) |
| **Small text** | `text-[clamp(0.875rem,0.825rem+0.2vw,1rem)]` | 14px | 16px | `font-normal` (400) |
| **Eyebrow/Badge** | `text-xs` | 12px | 12px | `font-bold` (700) |
| **Stat values** | `text-[clamp(1.5rem,1rem+2vw,1.875rem)]` | 24px | 30px | `font-extrabold` (800) |
| **Blockquote** | `text-[clamp(1.25rem,0.75rem+2vw,1.875rem)]` | 20px | 30px | `font-medium` (500) |
| **Nav links** | `text-sm` | 14px | 14px | — |
| **Button text** | `text-[clamp(0.875rem,0.825rem+0.2vw,1rem)]` | 14px | 16px | `font-semibold` (600) |

### Line Height Rules

- **Body text:** `leading-relaxed` (1.625) or `leading-[1.7]` — minimum 1.5x font size
- **Headings:** `leading-[1.2]` or `leading-tight` (1.25) — minimum 1.2x font size
- **Cards/descriptions:** `leading-relaxed` (1.625)

### Max Width Rules

- **Body paragraphs:** `max-w-[52ch]` (~65–75 characters per line) for comfortable reading
- **Hero subheading:** `max-w-[640px]`
- **CTA subtext:** `max-w-[600px]`
- **Section headings:** `max-w-[700px]` where needed

---

## 6. Responsive System

**Approach:** Mobile-first. Default styles target 320px, then scale up via Tailwind breakpoints.

### Breakpoints

| Prefix | Width | Target |
|--------|-------|--------|
| (default) | 0px+ | Mobile (320px–639px) |
| `sm:` | 640px+ | Large mobile / small tablet |
| `md:` | 768px+ | Tablet |
| `lg:` | 1024px+ | Small desktop |
| `xl:` | 1280px+ | Desktop |

### Responsive Padding Pattern

```
px-5 sm:px-8 lg:px-16 xl:px-[120px]
```

This gives: **20px → 32px → 64px → 120px** across breakpoints.

### Responsive Vertical Padding

```
py-12 sm:py-16 lg:py-20
```

This gives: **48px → 64px → 80px**.

### Grid Patterns

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| **Service cards** | `grid-cols-1` | `md:grid-cols-2` | `md:grid-cols-2` |
| **Comparison cards** | `grid-cols-1` | `grid-cols-1` | `lg:grid-cols-2` |
| **Stats row** | `grid-cols-2` | `md:grid-cols-4` | `md:grid-cols-4` |
| **Footer** | `grid-cols-1` | `sm:grid-cols-2` | `lg:grid-cols-12` |
| **Process cards** | `grid-cols-1` | `md:grid-cols-2` | `md:grid-cols-2` |
| **Pricing plans** | `grid-cols-1` | `sm:grid-cols-3` | `sm:grid-cols-3` |
| **Blog posts grid** | `grid-cols-1` | `md:grid-cols-2` | `lg:grid-cols-3` |
| **Work/case studies** | `grid-cols-1` | `md:grid-cols-2` | `md:grid-cols-2` |
| **Logo cloud** | `grid-cols-2` | `md:grid-cols-5` | `md:grid-cols-5` |

### CTA Button Pattern

Stacks vertically on mobile, inline on tablet+:

```
flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto items-center
```

Each button: `w-full sm:w-auto text-center`

### Card Padding

Compact on mobile, spacious on desktop:

```
p-5 sm:p-8           (stats, comparison cards, pricing cards)
p-6 sm:p-10 lg:p-16  (CTA card)
```

### Content Container

All sections use: `max-w-[1200px] mx-auto`

---

## 7. Component Architecture

### Page Layout Pattern

Every page follows this structure:

```tsx
<>
  <Header />
  <main id="main-content">
    {/* All page sections */}
  </main>
  <Footer />
</>
```

### ServiceCard

**File:** `src/components/ServiceCard.tsx`

Props: `icon` (LucideIcon), `title`, `description`, `href?`, `area?`

Conditionally wraps in `<Link>` if `href` is provided. Uses `<GlowingEffect>` for mouse-tracking glow. Card has double-border pattern (outer rounded-[1.25rem], inner rounded-xl).

### CTASection

**File:** `src/components/CTASection.tsx`

Props: `headline`, `subheadline`, `primaryLabel`, `primaryHref`, `secondaryLabel?`, `secondaryHref?`

Reusable across all pages. Primary CTA uses `<ButtonColorful>` (gradient button). Secondary is a ghost-style rounded-full link.

### SectionTag

**File:** `src/components/SectionTag.tsx`

Renders the eyebrow/badge pattern used at the top of every section. Accepts children as the label text (e.g., `<SectionTag>WHAT WE DO</SectionTag>`).

### HeroSection

**File:** `src/components/HeroSection.tsx`

Client component. Uses `<HeroWave>` canvas background that responds to theme. Full-viewport height with centered content overlay.

### FAQSection

**File:** `src/components/FAQSection.tsx`

Client component. Reusable FAQ accordion used on the homepage and potentially other pages.

Props: `eyebrow?`, `heading?`, `subheading?`, `faqs[]` (each with `question` and `answer`)

- Accordion uses CSS `grid-rows-[0fr]` → `grid-rows-[1fr]` transition for smooth open/close
- Only one FAQ can be open at a time (controlled by `openFaq` state)
- Cards use standard `--q-card-bg` / `--q-card-border` tokens
- `aria-expanded` on toggle buttons for accessibility

### BlogContent

**File:** `src/components/BlogContent.tsx`

Client component wrapping `<MDXRemote>` from `next-mdx-remote/rsc` with custom components. Injects `id` attributes onto h2/h3 headings via `slugify()` for TOC anchor linking. Also adds `scroll-mt-28` class for scroll offset when navigating from the table of contents.

### TableOfContents

**File:** `src/components/TableOfContents.tsx`

Client component. Sticky sidebar (`sticky top-28`) displaying article headings with IntersectionObserver-based active heading tracking.

- Renders an "On this page" label with a List icon
- h2 headings indent at `pl-4`, h3 headings at `pl-7`
- Active heading: `#3B6BF5` text + left border accent
- Smooth scroll on click with 100px offset from top
- `aria-label="Table of contents"` for accessibility
- Only visible on `xl` breakpoint (hidden on smaller screens)

### ProcessSteps

**File:** `src/components/ProcessSteps.tsx`

Props: `headline`, `description`, `steps[]`

Reusable process step layout used on service pages (Content Marketing, Website Development, etc.). Renders numbered steps in a grid.

### TestimonialSection

**File:** `src/components/TestimonialSection.tsx`

Props: `quote`, `author`

Single-quote testimonial block used on service pages. Styled with accent border and italic text.

### ContactPageContent

**File:** `src/components/ContactPageContent.tsx`

Client component. Full contact page with:
- Form: name, email, service dropdown, message textarea
- Submit → `POST /api/contact` → Supabase insert + email notification
- States: idle, submitting (spinner), success (green banner), error (red banner)
- Right column: direct email, calendar booking link, response time card
- FAQ accordion with CSS grid animation

### PricingGuideModal

**File:** `src/components/PricingGuideModal.tsx`

Client component. Lead magnet modal for content marketing pricing guide:
- Trigger: "Download Full Pricing Guide" button
- Modal: name + email form (Radix Dialog)
- Submit → `POST /api/pricing-guide` → Supabase insert + email notification
- On success: auto-downloads PDF + shows success message with fallback link

### Dialog (UI Primitive)

**File:** `src/components/ui/dialog.tsx`

Radix Dialog primitives styled with `--q-*` tokens. Exports: `Dialog`, `DialogTrigger`, `DialogContent`, `DialogClose`, `DialogPortal`, `DialogOverlay`.

### ButtonColorful

**File:** `src/components/ui/button-colorful.tsx`

Gradient CTA button component. Props: `href`, `label`, `className`.

### ShineBorder

**File:** `src/components/ui/shine-border.tsx`

Animated gradient border wrapper. Used on the "Quessence Way" comparison card.

Colors: `["#FF007F", "#39FF14", "#00FFFF"]`

### Feature108 (Featured Work)

**File:** `src/components/ui/shadcnblocks-com-feature108.tsx`

Tabbed content block using Radix Tabs. Props: `badge`, `heading`, `description`, `tabs[]`.

Each tab has a `content` object with: `badge`, `title`, `description`, `buttonText`, `imageSrc`, `imageAlt`, optional `imageBg`, optional `videoId`.

When `videoId` is provided, renders a YouTube embed (privacy-enhanced `youtube-nocookie.com`) instead of an image. Videos auto-play muted and loop.

### LogoCloud

**File:** `src/components/ui/logo-cloud-2.tsx`

Client logo grid displaying 10 client logos in a 2×5 grid (2 columns mobile, 5 desktop). Logos are theme-aware with `invertInDark` and `invertInLight` props for proper visibility in both themes.

**Current client logos:** Wheedle, Mark My Zone, Moment It, Gnyapakam, Pragee, Sutra, OnLoop, The Dental Specialists, AirAsia Move, Cassini

Logo files are stored in `public/clients/logos/` with dark/light variants where needed (e.g., `wheedle-dark.svg` / `wheedle-white.svg`).

### TestimonialSlider

**File:** `src/components/ui/testimonial-slider-1.tsx`

Auto-playing testimonial carousel with image thumbnails.

---

## 8. Section Pattern

Every page section follows a consistent structure:

```tsx
<section className="bg-[var(--q-section-bg)] py-12 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
  <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-12">

    {/* Section Header — eyebrow + heading + subheading */}
    <div className="flex flex-col items-center gap-4 text-center">
      <SectionTag>EYEBROW TEXT</SectionTag>
      <h2 className="text-[clamp(1.5rem,1.15rem+1.5vw,2.25rem)] font-bold text-[var(--q-heading)]">
        Section Heading
      </h2>
      <p className="max-w-[52ch] text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] text-[var(--q-body)] leading-relaxed">
        Section description text goes here.
      </p>
    </div>

    {/* Section Content */}

  </div>
</section>
```

### Section Background Alternation

Sections alternate between `--q-section-bg` (#FFFFFF / #000000) and `--q-section-bg-alt` (#F7F8FA / #09090b) for visual rhythm.

**All sections must have all three elements** (eyebrow, heading, subheading) for visual consistency.

---

## 9. Header & Navigation

**File:** `src/components/ui/header-2.tsx`

### Behavior

- Fixed position, full-width, `z-50`
- Scroll-driven pill animation: flat full-width bar → rounded pill with backdrop blur
- Uses `useScrollProgress(80)` hook — `t` goes from 0 (top) to 1 (after 80px scroll)
- Height lerps from `4.5rem` → `3.5rem`

### Responsive Padding (JavaScript)

```tsx
const [padStart, setPadStart] = useState(120);
useEffect(() => {
  const update = () => {
    const w = window.innerWidth;
    setPadStart(w < 640 ? 20 : w < 1024 ? 32 : w < 1280 ? 64 : 120);
  };
  update();
  window.addEventListener('resize', update);
  return () => window.removeEventListener('resize', update);
}, []);
```

### Navigation Links

```
About     → /about
Services  → /#services (anchor) — has dropdown
Work      → /work
Blog      → /blog
Contact   → /contact
```

Desktop CTA: `<ButtonColorful href="/contact" label="Let's Talk" />`

### Services Dropdown

The "Services" nav link has a hover-activated dropdown menu on desktop showing all four service pages with icons:

```tsx
const serviceLinks = [
  { label: 'Content Marketing', href: '/content-marketing', icon: Megaphone },
  { label: 'Website Development', href: '/website-development', icon: Globe },
  { label: 'AI Creative Studio', href: '/ai-creative-studio', icon: Sparkles },
  { label: 'AI Products & Automation', href: '/ai-products-automation', icon: Cpu },
];
```

- Desktop: positioned below the nav link with `group-hover` visibility, `240px` min-width, styled card container
- Mobile: expanded inline below the "Services" link with indented sub-links
- Each service link has a `#3B6BF5` colored icon on the left

### Logo

Two SVG versions stacked (`/logo-white.svg` and `/logo-black.svg`), toggled via opacity based on theme.

Responsive sizing: `w-[130px] sm:w-[160px] lg:w-[200px]` with `aspect-ratio: 200/36`.

### Mobile Menu

- Triggered by hamburger button at `md:hidden`
- Full-screen overlay below header (`top-[72px]`)
- `role="dialog"` with `aria-modal="true"` and `aria-label="Navigation menu"`
- Locks body scroll when open

### Theme Toggle

`<SkyToggle />` — styled-components animated sun/moon toggle. Present in both desktop nav and mobile menu.

---

## 10. Footer

**File:** `src/components/Footer.tsx`

### Grid Layout

```
Mobile:     1 column
sm (640+):  2 columns
lg (1024+): 12-column grid
  - Brand:    col-span-4
  - Services: col-span-2, col-start-6
  - Company:  col-span-2
  - Socials:  col-span-2
```

### Footer Links

**Services:** Content Marketing, Website Development, AI Creative Studio, AI Products

**Company:** About, Work, Contact, Blog

**Legal (bottom bar):** Terms & Conditions, Privacy Policy, Cookie Policy

**Social icons:** Instagram, LinkedIn, YouTube, X (using Phosphor Icons with brand colors)

### Brand Column

- Dual logo (white/black, theme-aware)
- Tagline: "AI-first digital company. Strategy, content, websites, creative, and products — built to grow your brand."
- Status badge: "Available for projects" with pulsing green dot

---

## 11. Backend — Supabase & Resend

### Supabase

**Project:** Quessence Website (region: `ap-south-1` Mumbai)

**Client:** Lazy-initialized in `src/lib/supabase.ts` using `getSupabase()` to avoid build-time crashes when env vars aren't available.

```tsx
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
let _supabase: SupabaseClient | null = null;
export function getSupabase(): SupabaseClient {
  if (!_supabase) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) throw new Error("Missing Supabase environment variables.");
    _supabase = createClient(url, key);
  }
  return _supabase;
}
```

### Database Tables

**`contact_submissions`** — Contact form entries
| Column | Type | Notes |
|--------|------|-------|
| `id` | UUID | Primary key (auto-generated) |
| `name` | TEXT | NOT NULL |
| `email` | TEXT | NOT NULL |
| `service` | TEXT | NOT NULL |
| `message` | TEXT | NOT NULL |
| `created_at` | TIMESTAMPTZ | DEFAULT now() |

**`pricing_guide_downloads`** — Lead magnet entries
| Column | Type | Notes |
|--------|------|-------|
| `id` | UUID | Primary key (auto-generated) |
| `name` | TEXT | NOT NULL |
| `email` | TEXT | NOT NULL |
| `created_at` | TIMESTAMPTZ | DEFAULT now() |

Both tables have Row Level Security (RLS) enabled.

### Resend (Email Notifications)

Both API routes send email notifications to `NOTIFICATION_EMAIL` (set in `.env.local`) via Resend. Emails are best-effort — if sending fails, the form submission still succeeds.

**Email templates:** Inline HTML with formatted tables showing submission details and IST timestamps.

### Environment Variables (`.env.local`)

```
NEXT_PUBLIC_SUPABASE_URL=<supabase-project-url>
SUPABASE_SERVICE_ROLE_KEY=<service-role-key>
RESEND_API_KEY=<resend-api-key>
NOTIFICATION_EMAIL=<recipient-email>
```

### API Routes

**`POST /api/contact`** — Contact form
- Validates: name, email (format), service (from allowlist), message
- Inserts into `contact_submissions`
- Sends email notification with all form fields

**`POST /api/pricing-guide`** — Pricing guide download
- Validates: name, email (format)
- Inserts into `pricing_guide_downloads`
- Sends email notification with lead details
- Client triggers PDF download on success response

---

## 12. Accessibility (WCAG AAA)

Target: **WCAG 2.1 AAA compliance**.

### Implemented Features

1. **Landmark structure:** `<header>`, `<main id="main-content">`, `<footer>`, `<nav aria-label="Main navigation">`

2. **Focus-visible rings:** Global rule for all links and buttons
   ```css
   a:focus-visible, button:focus-visible {
     outline: 2px solid var(--color-ring);
     outline-offset: 2px;
     border-radius: 4px;
   }
   ```

3. **`prefers-reduced-motion` support:** All animations and transitions disabled
   ```css
   @media (prefers-reduced-motion: reduce) {
     *, *::before, *::after {
       animation-duration: 0.01ms !important;
       animation-iteration-count: 1 !important;
       transition-duration: 0.01ms !important;
       scroll-behavior: auto !important;
     }
   }
   ```

4. **ARIA attributes:**
   - Header nav: `aria-label="Main navigation"`
   - Hamburger: `aria-label="Open/Close menu"` + `aria-expanded`
   - Mobile menu: `role="dialog"` + `aria-modal="true"` + `aria-label="Navigation menu"`
   - Testimonial content: `aria-live="polite"` + `aria-atomic="true"`
   - Decorative elements: `aria-hidden="true"`
   - FAQ accordion: `aria-expanded` on toggle buttons

5. **Heading hierarchy:** Single H1 per page, H2 for sections, H3 for sub-sections. No skipped levels.

6. **Color contrast:** All text meets WCAG AAA — 7:1 for normal text, 4.5:1 for large text.

7. **Fluid typography floor:** Body text never below 16px on any viewport.

8. **Form accessibility:** All form fields have associated `<label>` elements with `htmlFor` matching `id`.

### Requirements for New Components

- All interactive elements must be keyboard-accessible
- All images need meaningful `alt` text (or `alt=""` if decorative)
- Form fields need associated `<label>` elements
- Color must not be the only way to convey information
- Site must be usable at 400% browser zoom without horizontal scroll

---

## 13. Theme System

### Setup

**Provider:** `next-themes` with `attribute="class"`, `defaultTheme="system"`, `enableSystem`.

```tsx
<NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
  {children}
</NextThemesProvider>
```

### How It Works

1. `next-themes` adds `.dark` class to `<html>` when dark mode is active
2. Tailwind v4 variant: `@variant dark (&:is(.dark *))` targets `.dark` descendants
3. CSS custom properties in `.dark { }` block override `:root` values
4. All components use `var(--q-*)` tokens, so they switch automatically

### Smooth Theme Transitions

Global transition on all elements (except canvas and animated elements):

```css
*, *::before, *::after {
  transition:
    background-color 0.7s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.7s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.7s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.7s cubic-bezier(0.4, 0, 0.2, 1),
    fill 0.7s, stroke 0.7s, opacity 0.7s;
}
```

### Theme-Aware Components

Components that need `resolvedTheme`:

```tsx
const { resolvedTheme } = useTheme();
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);
const isDark = mounted && resolvedTheme === 'dark';
```

**Always check `mounted`** before using `resolvedTheme` to avoid hydration mismatch.

### Logo Pattern

Two image files stacked with opacity-based visibility:

```tsx
<Image src="/logo-white.svg" style={{ opacity: isDark ? 1 : 0 }} />
<Image src="/logo-black.svg" style={{ opacity: isDark ? 0 : 1 }} />
```

---

## 14. Motion & Interactions

### Principles

- GPU-accelerated only (`transform`, `opacity`) — no layout-triggering animations
- 60fps minimum — any animation that drops frames gets cut
- Full `prefers-reduced-motion` support
- Mobile: simplified or disabled mouse-driven effects
- No animation should delay content visibility

### Current Animations

| Element | Animation | Notes |
|---------|-----------|-------|
| **Header** | Scroll-driven pill shrink + blur | JS lerp, no CSS animation |
| **Hero wave** | Canvas-based wave animation | Theme-aware, full viewport |
| **Service cards** | Mouse-tracking glow effect | `<GlowingEffect>` component |
| **Process cards** | Scroll-linked slide-in | Via `process-timeline.tsx` |
| **ShineBorder** | Rotating gradient border | `@keyframes shine-pulse` |
| **Theme toggle** | Sun/moon transition | styled-components |
| **Mobile menu** | Zoom-in/out on open/close | Tailwind animate-in/out |
| **Status badge** | Pulsing green dot | `animate-pulse` |
| **Dialog modal** | Fade + zoom in/out | Radix + Tailwind animate-in/out |
| **FAQ accordion** | CSS grid row expansion | `grid-rows-[0fr]` → `grid-rows-[1fr]` |

---

## 15. Homepage Copy — Complete Reference

### Homepage Section Order

The homepage sections render in this order:

1. Hero
2. Services Preview
3. Featured Work (tabbed case studies)
4. Old Way vs Quessence Way
5. Social Proof (testimonials + stats + logo cloud)
6. FAQ
7. Final CTA

**Note:** The "How We Work" scroll-driven section was **removed** from the homepage. The `HowWeWorkSection.tsx` component file still exists but is no longer imported or used on the homepage. It was replaced by the FAQ section.

### Section 1: Hero

| Element | Copy |
|---------|------|
| **Eyebrow** | AI-First Digital Company |
| **Headline (H1)** | Scale Intelligence, Not Overheads. |
| **Subheadline** | Everything we build runs on AI. That's why we ship faster. |
| **Primary CTA** | See Our Work → `/work` |
| **Secondary CTA** | Let's Talk → `/contact` |

### Section 2: Services Preview

| Element | Copy |
|---------|------|
| **Eyebrow** | WHAT WE DO |
| **Heading (H2)** | Four pillars. One integrated system. |
| **Subheading** | Content, websites, AI creative, and intelligent automation — all under one roof, powered by AI. |

**Service Cards:**

| Service | Description | Link |
|---------|-------------|------|
| Content Marketing | We grow your brand on Instagram and YouTube. No ads. Just smart, AI-powered content that builds real audiences. | `/content-marketing` |
| Website Development | Fast, beautiful websites built on Webflow, Framer, or custom code. Every pixel earns its place. | `/website-development` |
| AI Creative Studio | AI filmmaking, ad commercials, product photography, and more. Studio-quality creative, powered by AI. | `/ai-creative-studio` |
| AI Products & Automation | Custom web apps, PWAs, AI agents, and automation systems that do the heavy lifting while you focus on growth. | `/ai-products-automation` |

### Section 3: Featured Work

| Element | Copy |
|---------|------|
| **Eyebrow** | FEATURED WORK |
| **Heading (H2)** | Real projects. Real results. |
| **Subheading** | See how we've helped brands grow with integrated systems across content, web, creative, and AI. |

**Tabbed case studies:**

| Tab | Badge | Title |
|-----|-------|-------|
| Content Marketing | 0 → 54.7K Followers | Scaling an AI Creator from Zero to 54.7K on Instagram. |
| Website Development | WordPress → Webflow | Digital Overhaul for the Institute for Dental Implantology. |
| AI Creative Studio | Knowledge Base AI | Interactive Photo Avatar Trained on a Knowledge Base. |
| AI Products & Automation | 50% Time Saved | Operations Dashboard for Mark My Zone. |

### Section 4: Old Way vs Quessence Way

| Element | Copy |
|---------|------|
| **Eyebrow** | WHY QUESSENCE |
| **Heading (H2)** | The old way is expensive, slow, and doesn't scale. |
| **Subheading** | See the difference between piecing together vendors and working with an AI-powered system built to move fast. |

**7 comparison rows** contrasting "The Old Way" (red X icons) vs "The Quessence Way" (green checkmark icons, displayed inside a ShineBorder card).

### Section 5: Social Proof

| Element | Copy |
|---------|------|
| **Eyebrow** | TESTIMONIALS |
| **Heading (H2)** | Trusted by brands that move fast. |
| **Subheading** | Don't take our word for it — hear from the brands we've helped grow. |

**Stats:** 50+ Projects, 30+ Brands, 2x Faster, Since 2017

**Testimonials (5 reviews in slider):**

| Name | Affiliation |
|------|-------------|
| Michael Calcada | Head of Design, OnLoop |
| Raghuram Reddy Tera | Founder, Cassini |
| Seshank Vemuru | VP of Sales, North America |
| Sri Vamshi | Founder, Wheedle.io |
| Ana Sofia Pinho | Founder, Humankind Works |

**Logo Cloud:** 10 client logos in a 5-column grid (see LogoCloud component).

### Section 6: FAQ

| Element | Copy |
|---------|------|
| **Heading (H2)** | Got questions? We've got answers. |
| **Subheading** | The most common things people ask before working with us. |

**5 FAQs:**
1. What does Quessence actually do?
2. How is Quessence different from a traditional agency?
3. What kind of businesses do you work with?
4. How long does a typical project take?
5. How do I get started?

### Section 7: Final CTA

| Element | Copy |
|---------|------|
| **Heading (H2)** | Ready to build something that lasts? |
| **Subheading** | Whether you need content, a website, AI-powered creative, or a custom-built product — it starts with a conversation. |
| **Primary CTA** | Get in touch → `/contact` |
| **Secondary CTA** | See Our Work → `/work` |

---

## 16. Blog System

### Architecture

The blog is a **file-based MDX system** — no CMS required. Blog posts are `.mdx` files stored in `content/blog/` with YAML frontmatter parsed by `gray-matter`.

### Blog Post Frontmatter

```yaml
---
title: "Post Title"
date: "2025-05-12"
author: "Bhaskar"
category: "AI Products & Automation"
excerpt: "A short description shown on listing cards and meta tags."
coverImage: "/blog/cover-image.jpg"
tags:
  - Tag1
  - Tag2
---
```

### Blog Utilities — `src/lib/blog.ts`

| Function | Returns | Description |
|----------|---------|-------------|
| `getAllPosts()` | `BlogPostMeta[]` | All posts sorted by date (newest first), without content body |
| `getPostBySlug(slug)` | `BlogPost \| null` | Full post including MDX content |
| `getAllSlugs()` | `string[]` | All slugs for `generateStaticParams()` |
| `extractHeadings(content)` | `TOCItem[]` | Extracts h2/h3 headings from raw MDX for table of contents |

**Important:** `extractHeadings()` must stay in `src/lib/blog.ts` (server-safe). It was originally in the client-side `TableOfContents.tsx` component and caused a server/client boundary error.

### Blog Listing Page — `/blog`

**File:** `src/app/blog/page.tsx`

- **Featured post hero:** First post rendered as a large horizontal card (image left, content right on desktop)
- **"More Articles" grid:** Remaining posts in a 3-column grid (`md:grid-cols-2 lg:grid-cols-3`)
- **Category color badges:** Each category has a unique color:

```ts
const categoryColors: Record<string, string> = {
  "Content Marketing": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  "Website Development": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  "AI Creative Studio": "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  "AI Products & Automation": "bg-amber-500/10 text-amber-600 dark:text-amber-400",
};
```

- **JSON-LD schema:** `Blog` type with `blogPost` array of `BlogPosting` entries

### Blog Post Page — `/blog/[slug]`

**File:** `src/app/blog/[slug]/page.tsx`

- **Two-column layout:** Content (max 720px) + TOC sidebar (240px, visible on `xl` only)
- **Article header:** Category badge, date, author, H1 title, excerpt, cover image
- **Prose styling:** Uses `@tailwindcss/typography` with extensive modifiers:

```
prose prose-lg max-w-none
prose-p:leading-[1.85] prose-p:mb-8 prose-p:text-[1.0625rem]
prose-headings:text-[var(--q-heading)] prose-headings:mt-12 prose-headings:mb-5
prose-h2:text-[1.625rem] prose-h2:font-bold prose-h2:leading-[1.3]
prose-h3:text-[1.25rem] prose-h3:font-semibold prose-h3:leading-[1.4] prose-h3:mt-8
prose-a:text-[#3B6BF5] prose-a:underline-offset-2
prose-strong:text-[var(--q-heading)] prose-strong:font-semibold
prose-img:rounded-xl prose-img:my-10
prose-ul:my-6 prose-ol:my-6 prose-li:leading-[1.8] prose-li:mb-2
prose-hr:my-10 prose-hr:border-[var(--q-divider)]
prose-blockquote:border-[#3B6BF5] prose-blockquote:not-italic
```

- **Tags:** Rendered as pill badges below the content, separated by a divider
- **JSON-LD schema:** `BlogPosting` with headline, description, image, author, publisher, keywords
- **OpenGraph / Twitter Card:** Set via `generateMetadata()` with title, description, image
- **Static generation:** Uses `generateStaticParams()` from `getAllSlugs()`

### Current Blog Posts

| Slug | Category | Title |
|------|----------|-------|
| `ai-content-marketing-2025` | Content Marketing | How AI is Reshaping Content Marketing in 2025 |
| `website-performance-conversions-2025` | Website Development | Why Your Website Speed is Killing Your Conversions |
| `ai-generated-visuals-brand-identity` | AI Creative Studio | AI-Generated Visuals Are Changing Brand Identity |
| `business-automation-ai-agents-2025` | AI Products & Automation | AI Agents and Business Automation: What Actually Works in 2025 |

Each post has a cover image and 2 inline images stored in `public/blog/`.

### Adding New Blog Posts

1. Create a new `.mdx` file in `content/blog/` with proper frontmatter
2. Add cover image to `public/blog/`
3. Add any inline images to `public/blog/` and reference as `![alt](/blog/filename.jpg)`
4. The post automatically appears on the listing page and gets its own URL at `/blog/{slug}`

---

## 17. Work Page & Case Studies

**File:** `src/components/WorkPageContent.tsx` (client component, used by `src/app/work/page.tsx`)

### Page Structure

- **Hero:** "Work that speaks for itself" heading with filter bar
- **Filterable grid:** 2-column grid (`md:grid-cols-2`) with filter buttons
- **CTA:** "Want results like these?" section at the bottom

### Filter Bar

5 filter buttons: `All`, `Content`, `Website`, `AI Creative`, `AI Products`

Active filter uses `#3B6BF5` blue background. Inactive filters use `--q-badge-bg` with border.

### Case Studies (10 projects)

| # | Title | Category | Tag | Key Result |
|---|-------|----------|-----|------------|
| 1 | Ravisbook.ai — Instagram Growth | Content Marketing | Content | 0 → 54.7K followers |
| 2 | Dr Venkat Nag — Personal Brand Growth | Content Marketing | Content | 15.1K followers & 933 posts |
| 3 | Sutra India — Heritage Fashion Brand | Content Marketing | Content | Brand launch & content strategy |
| 4 | Pragee — Modern Western Wear | Content Marketing | Content | Brand identity & social launch |
| 5 | Institute for Dental Implantology — Website Redesign | Website Development | Website | WordPress → Webflow migration |
| 6 | OnLoop — SaaS Website Redesign | Website Development | Website | Delivered in 30 days |
| 7 | Wheedle.io — AI Agency Website | Website Development | Website | Increased leads & traffic in 1 month |
| 8 | Interactive Photo Avatar — Knowledge Base AI | AI Creative Studio | AI Creative | AI-powered conversational avatar |
| 9 | AI-Generated Ad Commercial | AI Creative Studio | AI Creative | Fully AI-produced video ad |
| 10 | Mark My Zone — Operations Dashboard | AI Products & Automation | AI Products | 50% operational time saved |

### Media Types

- **Image projects:** Screenshot/mockup displayed with `object-contain` in a colored background container
- **Video projects:** YouTube embed via `youtube-nocookie.com` (privacy-enhanced), auto-play muted + loop, slightly oversized to hide YouTube UI chrome

### Project Card Structure

```
┌──────────────────────────┐
│  Media (220px / 280px)   │  ← Image or YouTube embed
├──────────────────────────┤
│  Category badge (blue)   │
│  Title (H3)              │
│  Result (emerald green)  │
│  Description             │
└──────────────────────────┘
```

---

## 18. Analytics & Tracking

All analytics and tracking scripts are configured in `src/app/layout.tsx`.

### Google Analytics (GA4)

- **Measurement ID:** `G-0H42X616ML`
- **Implementation:** Two `<Script>` tags with `strategy="afterInteractive"`
  1. gtag.js loader
  2. Inline config script
- Placed in `<head>`

### Microsoft Clarity

- **Project ID:** `vm21br7zr1`
- **Implementation:** `<Script>` tag with `strategy="afterInteractive"` and `dangerouslySetInnerHTML`
- Placed in `<head>`

### Vercel Speed Insights

- **Package:** `@vercel/speed-insights`
- **Component:** `<SpeedInsights />` from `@vercel/speed-insights/next`
- Placed inside `<StyledComponentsRegistry>` in `<body>`
- Automatically tracks Web Vitals on Vercel deployments

### Vercel Web Analytics

- **Package:** `@vercel/analytics`
- **Component:** `<Analytics />` from `@vercel/analytics/next`
- Placed inside `<StyledComponentsRegistry>` in `<body>`
- Tracks page views and visitors on Vercel deployments

### Layout.tsx Script Order

```tsx
<html>
  <head>
    <Script> Google Analytics (gtag.js loader) </Script>
    <Script> Google Analytics (config) </Script>
    <Script> Microsoft Clarity </Script>
  </head>
  <body>
    <StyledComponentsRegistry>
      <ThemeProvider>{children}</ThemeProvider>
      <SpeedInsights />
      <Analytics />
    </StyledComponentsRegistry>
  </body>
</html>
```

---

## 19. SEO / AEO / GEO

### Meta Tags

Each page has unique meta title and description set via Next.js `metadata` export.

### Implementation Rules

- One H1 per page, H2 for sections, H3 for sub-sections
- Keywords appear naturally in H1, H2, meta, first paragraphs, image alt text
- Open Graph and Twitter Card meta for social sharing
- Schema markup: Organization, Service, FAQ, LocalBusiness, Blog, BlogPosting
- Image optimization: WebP format, lazy loading, descriptive alt text
- Blog posts have full JSON-LD structured data (`BlogPosting` schema) with author, publisher, datePublished, keywords, and mainEntityOfPage

### Blog SEO

Each blog post page generates:
- **OpenGraph meta:** title, description, type (`article`), publishedTime, authors, images
- **Twitter Card:** `summary_large_image` with title, description, images
- **JSON-LD:** `BlogPosting` with headline, description, image, datePublished, author, publisher, keywords

The blog listing page generates a `Blog` JSON-LD schema containing all posts as `blogPost` entries.

### Target Keywords

| Service | Keywords |
|---------|----------|
| **Content Marketing** | social media marketing, Instagram Reels production, YouTube Shorts, content marketing strategy, organic social media growth |
| **Website Development** | Webflow design services, custom website development, Framer website design, Shopify store design, UI UX design |
| **AI Creative Studio** | AI filmmaking, AI ad commercials, AI product photography, AI voiceovers, AI motion graphics |
| **AI Products & Automation** | AI business automation, AI agent development, custom web applications, progressive web apps, workflow automation |
| **Brand** | digital brand architects, AI-first digital company, scalable growth systems |

---

## 20. Sitemap & Pages

| Page | URL | Purpose |
|------|-----|---------|
| **Home** | `/` | First impression. Hook visitors. Show differentiation. |
| **About** | `/about` | Build trust. Origin story, philosophy, team. |
| **Blog** | `/blog` | Blog listing with featured post hero + article grid. |
| **Blog Post** | `/blog/[slug]` | Individual blog post with MDX content + TOC sidebar. |
| **Content Marketing** | `/content-marketing` | Social media organic growth. Pricing plans (no prices). Lead magnet modal. |
| **Website Development** | `/website-development` | Technical credibility and design range. |
| **AI Creative Studio** | `/ai-creative-studio` | AI-powered creative production showcase. |
| **AI Products & Automation** | `/ai-products-automation` | Custom web apps, PWAs, AI agents, automation. |
| **Work** | `/work` | Portfolio — filterable project grid with 10 case studies. |
| **Contact** | `/contact` | Convert visitors into conversations. Form → Supabase + email. |
| **Privacy Policy** | `/privacy` | Legal compliance (GA4, Clarity disclosure). |
| **Terms of Service** | `/terms` | Service terms, IP, liability, disputes. |
| **Cookie Policy** | `/cookies` | Cookie usage and consent information. |

### API Routes

| Route | Method | Purpose |
|-------|--------|---------|
| `/api/contact` | POST | Contact form submission → Supabase + email notification |
| `/api/pricing-guide` | POST | Pricing guide download → Supabase + email notification + PDF |

### Static Generation

Blog post pages use `generateStaticParams()` — all posts are pre-rendered at build time. Adding a new `.mdx` file in `content/blog/` requires a rebuild to appear on the site.

**Phase 2 (post-launch):** Individual case study detail pages, Careers, Knowledge Base.

---

## 21. Brand Voice Rules

### Principles

| Rule | Meaning |
|------|---------|
| **Be direct** | Say what you mean in as few words as possible |
| **Be confident** | We know what we're doing. Let that come through. |
| **Be human** | Write like you talk. No buzzwords. No corporate speak. |
| **Be premium** | Quality shows in restraint, not in excess. |
| **Be persuasive** | Make the reader feel understood first. Selling happens naturally after. |

### Hard Rules

- **Never say "agency."** Always say "company" or "scale-up."
- **Lead with the problem, not the solution.**
- **Be specific.** Vague claims like "we deliver results" mean nothing.
- **Let social proof do the heavy lifting.** Numbers and screenshots > adjectives.
- **Every section ends with a clear next step.** Guide the reader somewhere.
- **Simple vocabulary.** No jargon. No buzzwords. Everyday words.

### Persuasion Framework

1. Show the reader we understand what's broken (lead with the problem)
2. Use contrast ("The old way vs. the Quessence way")
3. Be specific (exact numbers, specific outcomes)
4. Let testimonials and case studies prove the claim
5. Guide to a clear next step (CTA)

---

*Quessence — Scale Intelligence, Not Overheads.*
