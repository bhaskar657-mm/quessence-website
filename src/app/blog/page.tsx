import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowRight, CalendarDays } from "lucide-react";
import { Header } from "@/components/ui/header-2";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Insights on Content, AI & Growth | Quessence",
  description:
    "Practical insights on content marketing, website development, AI creative, and automation — from the team at Quessence.",
};

const categoryColors: Record<string, string> = {
  "Content Marketing": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  "Website Development": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  "AI Creative Studio": "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  "AI Products & Automation": "bg-amber-500/10 text-amber-600 dark:text-amber-400",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  // JSON-LD for blog listing
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Quessence Blog",
    description:
      "Practical insights on content marketing, website development, AI creative, and automation.",
    url: "https://quessence.in/blog",
    publisher: {
      "@type": "Organization",
      name: "Quessence",
      url: "https://quessence.in",
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      url: `https://quessence.in/blog/${post.slug}`,
      author: { "@type": "Person", name: post.author },
      image: post.coverImage
        ? `https://quessence.in${post.coverImage}`
        : undefined,
    })),
  };

  return (
    <>
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="main-content">
        {/* Hero */}
        <section className="bg-[var(--q-page-bg)] pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center gap-5 sm:gap-6">
            <span className="inline-flex items-center gap-2 bg-[var(--q-badge-bg)] border border-[var(--q-card-border)] rounded-full px-4 py-1.5">
              <BookOpen className="w-4 h-4 text-[#3B6BF5]" />
              <span className="text-xs font-bold tracking-[2px] uppercase text-[var(--q-badge-text)]">
                BLOG
              </span>
            </span>
            <h1 className="text-[clamp(2.25rem,1.5rem+3vw,3.625rem)] font-bold leading-[1.2] tracking-[-0.02em] text-[var(--q-heading)] max-w-[800px]">
              Insights for brands that build.
            </h1>
            <p className="text-[clamp(1rem,0.95rem+0.25vw,1.125rem)] text-[var(--q-body)] max-w-[600px] leading-[1.7]">
              Practical takes on content marketing, AI, web development, and
              growing a brand in 2025.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        {featured && (
          <section className="bg-[var(--q-page-bg)] pb-8 sm:pb-12 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
            <div className="max-w-[1200px] mx-auto">
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[var(--q-card-bg)] border border-[var(--q-card-border)] rounded-2xl overflow-hidden transition-shadow hover:shadow-xl"
                style={{ boxShadow: "var(--q-card-shadow)" }}
              >
                {featured.coverImage && (
                  <div className="h-[240px] lg:h-full w-full overflow-hidden">
                    <img
                      src={featured.coverImage}
                      alt={featured.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className={`text-xs font-bold tracking-[1.5px] uppercase px-2.5 py-1.5 rounded-full ${
                        categoryColors[featured.category] ??
                        "bg-[#3B6BF5]/10 text-[#3B6BF5]"
                      }`}
                    >
                      {featured.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm text-[var(--q-muted)]">
                      <CalendarDays className="w-3.5 h-3.5" />
                      {new Date(featured.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h2 className="text-[clamp(1.5rem,1.25rem+1vw,2rem)] font-bold text-[var(--q-heading)] leading-[1.25] group-hover:text-[#3B6BF5] transition-colors mb-5">
                    {featured.title}
                  </h2>
                  <p className="text-[var(--q-body)] leading-[1.8] text-[1.0625rem] mb-6">
                    {featured.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#3B6BF5] group-hover:gap-3 transition-all">
                    Read article
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* All Posts Grid */}
        <section className="bg-[var(--q-section-bg)] py-12 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
          <div className="max-w-[1200px] mx-auto">
            {rest.length > 0 && (
              <h2 className="text-xl font-bold text-[var(--q-heading)] mb-10">
                More Articles
              </h2>
            )}

            {posts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-lg text-[var(--q-muted)]">
                  Coming soon. We&apos;re cooking up something good.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {rest.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-[var(--q-card-bg)] border border-[var(--q-card-border)] rounded-2xl overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
                    style={{ boxShadow: "var(--q-card-shadow)" }}
                  >
                    {post.coverImage && (
                      <div className="h-[210px] w-full overflow-hidden">
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-7 sm:p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className={`text-xs font-bold tracking-[1.5px] uppercase px-2.5 py-1.5 rounded-full ${
                            categoryColors[post.category] ??
                            "bg-[#3B6BF5]/10 text-[#3B6BF5]"
                          }`}
                        >
                          {post.category}
                        </span>
                        <span className="text-sm text-[var(--q-muted)]">
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <h2 className="text-[1.25rem] font-semibold text-[var(--q-heading)] leading-[1.35] group-hover:text-[#3B6BF5] transition-colors" style={{ marginBottom: '16px' }}>
                        {post.title}
                      </h2>
                      <p className="text-[0.9375rem] text-[var(--q-body)] leading-[1.8] line-clamp-3" style={{ marginBottom: '20px' }}>
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#3B6BF5] group-hover:gap-3 transition-all">
                        Read more
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        <CTASection
          headline="Want to stay in the loop?"
          subheadline="Follow us for more insights on content, AI, and brand growth."
          primaryLabel="Get in touch"
          secondaryLabel="See Our Work"
          secondaryHref="/work"
        />
      </main>

      <Footer />
    </>
  );
}
