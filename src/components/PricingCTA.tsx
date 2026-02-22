import { ButtonColorful } from "@/components/ui/button-colorful";
import SectionTag from "./SectionTag";

interface PricingCTAProps {
  headline: string;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export default function PricingCTA({
  headline,
  description,
  buttonLabel = "Book a Free Consultation",
  buttonHref = "/contact",
}: PricingCTAProps) {
  return (
    <section className="bg-[var(--q-section-bg)] py-12 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
      <div className="max-w-[600px] mx-auto flex flex-col items-center text-center gap-6">
        <SectionTag>PRICING</SectionTag>
        <h2 className="text-[clamp(1.5rem,1.15rem+1.5vw,2.25rem)] font-bold text-[var(--q-heading)]">
          {headline}
        </h2>
        <p className="text-[clamp(1rem,0.95rem+0.25vw,1.125rem)] text-[var(--q-body)] leading-relaxed">
          {description}
        </p>
        <ButtonColorful
          href={buttonHref}
          label={buttonLabel}
          className="h-12 px-8"
        />
      </div>
    </section>
  );
}
