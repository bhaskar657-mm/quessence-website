import Link from "next/link";
import { ButtonColorful } from "@/components/ui/button-colorful";

interface CTASectionProps {
  headline: string;
  subheadline: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  headline,
  subheadline,
  primaryLabel = "Book a Consultation",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref = "/work",
}: CTASectionProps) {
  return (
    <section className="bg-[var(--q-section-bg)] py-12 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-[var(--q-card-bg)] border border-[var(--q-card-border)] rounded-3xl p-6 sm:p-10 lg:p-16 flex flex-col items-center text-center gap-5 sm:gap-6" style={{ boxShadow: 'var(--q-card-shadow)' }}>
          <h2 className="text-[clamp(1.5rem,1.15rem+1.5vw,2.25rem)] font-bold text-[var(--q-heading)]">{headline}</h2>
          <p className="text-[clamp(1rem,0.95rem+0.25vw,1.125rem)] text-[var(--q-body)] max-w-[600px] leading-relaxed">
            {subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 w-full sm:w-auto items-center">
            <ButtonColorful href={primaryHref} label={primaryLabel} className="h-12 px-8 w-full sm:w-auto" />
            {secondaryLabel && (
              <Link
                href={secondaryHref}
                className="border border-[var(--q-card-border)] text-[var(--q-body)] font-semibold px-8 py-3.5 rounded-full hover:text-[var(--q-heading)] hover:border-[var(--q-heading)] transition-colors w-full sm:w-auto text-center"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
