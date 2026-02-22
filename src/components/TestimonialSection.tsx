interface TestimonialSectionProps {
  quote: string;
  author: string;
}

export default function TestimonialSection({ quote, author }: TestimonialSectionProps) {
  return (
    <section className="bg-[var(--q-section-bg)] py-12 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
      <div className="max-w-[800px] mx-auto flex flex-col items-center text-center gap-6">
        <span className="text-6xl sm:text-7xl font-bold text-[#3B6BF5]">&ldquo;</span>
        <p className="text-[clamp(1.125rem,0.9rem+1vw,1.375rem)] text-[var(--q-heading)] leading-relaxed italic">
          {quote}
        </p>
        <span className="text-sm font-semibold text-[var(--q-muted)]">{author}</span>
      </div>
    </section>
  );
}
