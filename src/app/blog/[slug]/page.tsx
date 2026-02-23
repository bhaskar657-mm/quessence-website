import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CalendarDays, User } from "lucide-react";
import { notFound } from "next/navigation";
import { Header } from "@/components/ui/header-2";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { getAllSlugs, getPostBySlug, extractHeadings } from "@/lib/blog";
import { BlogContent } from "@/components/BlogContent";
import { TableOfContents } from "@/components/TableOfContents";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Quessence Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: post.coverImage ? [{ url: post.coverImage }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const headings = extractHeadings(post.content);

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage
      ? `https://quessence.in${post.coverImage}`
      : undefined,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Quessence",
      url: "https://quessence.in",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://quessence.in/blog/${slug}`,
    },
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="main-content">
        <article className="bg-[var(--q-page-bg)] pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
          {/* Article Header — full width above the two-column layout */}
          <div className="max-w-[1080px] mx-auto mb-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--q-muted)] hover:text-[var(--q-heading)] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[1.5px] uppercase text-[#3B6BF5] bg-[#3B6BF5]/10 px-3 py-1.5 rounded-full">
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-[var(--q-muted)]">
                  <CalendarDays className="w-3.5 h-3.5" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                {post.author && (
                  <span className="inline-flex items-center gap-1.5 text-sm text-[var(--q-muted)]">
                    <User className="w-3.5 h-3.5" />
                    {post.author}
                  </span>
                )}
              </div>
              <h1 className="text-[clamp(2rem,1.5rem+2vw,3rem)] font-bold leading-[1.15] tracking-[-0.025em] text-[var(--q-heading)] max-w-[720px]">
                {post.title}
              </h1>
              <p className="text-[1.0625rem] text-[var(--q-body)] leading-[1.75] max-w-[640px]">
                {post.excerpt}
              </p>
            </div>

            {/* Cover Image */}
            {post.coverImage && (
              <div className="rounded-2xl overflow-hidden mt-8">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-auto max-h-[480px] object-cover"
                />
              </div>
            )}
          </div>

          {/* Two-column layout: content + TOC sidebar */}
          <div className="max-w-[1080px] mx-auto flex gap-12">
            {/* Main content */}
            <div className="min-w-0 flex-1 max-w-[720px]">
              <div className="
                prose prose-lg max-w-none
                text-[var(--q-body)]
                prose-p:leading-[1.85] prose-p:mb-8 prose-p:text-[1.0625rem]
                prose-headings:text-[var(--q-heading)] prose-headings:mt-12 prose-headings:mb-5
                prose-h2:text-[1.625rem] prose-h2:font-bold prose-h2:leading-[1.3]
                prose-h3:text-[1.25rem] prose-h3:font-semibold prose-h3:leading-[1.4] prose-h3:mt-8
                prose-a:text-[#3B6BF5] prose-a:underline-offset-2
                prose-strong:text-[var(--q-heading)] prose-strong:font-semibold
                prose-code:text-[var(--q-heading)] prose-code:bg-[var(--q-badge-bg)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-[0.9375rem] prose-code:before:content-none prose-code:after:content-none
                prose-img:rounded-xl prose-img:my-10
                prose-ul:my-6 prose-ol:my-6 prose-li:leading-[1.8] prose-li:mb-2 prose-li:marker:text-[var(--q-muted)]
                prose-hr:my-10 prose-hr:border-[var(--q-divider)]
                prose-blockquote:border-[#3B6BF5] prose-blockquote:text-[var(--q-body)] prose-blockquote:not-italic
              ">
                <BlogContent source={post.content} />
              </div>

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-[var(--q-divider)]">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-[var(--q-badge-bg)] text-[var(--q-muted)] px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* TOC Sidebar — hidden on mobile, visible on xl */}
            {headings.length > 0 && (
              <aside className="hidden xl:block w-[240px] shrink-0">
                <TableOfContents headings={headings} />
              </aside>
            )}
          </div>
        </article>

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
