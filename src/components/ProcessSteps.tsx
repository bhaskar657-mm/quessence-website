import SectionTag from "./SectionTag";

interface Step {
  title: string;
  description: string;
}

interface ProcessStepsProps {
  tag?: string;
  headline: string;
  description?: string;
  steps: Step[];
}

const ACCENT_COLORS = ["#3B6BF5", "#10B981", "#A855F7", "#06B6D4", "#F59E0B"];

export default function ProcessSteps({
  tag = "OUR PROCESS",
  headline,
  description,
  steps,
}: ProcessStepsProps) {
  return (
    <section className="bg-[var(--q-section-bg)] py-12 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <SectionTag>{tag}</SectionTag>
          <h2 className="text-[clamp(1.5rem,1.15rem+1.5vw,2.25rem)] font-bold text-[var(--q-heading)]">
            {headline}
          </h2>
          {description && (
            <p className="max-w-[52ch] text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] text-[var(--q-body)] leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-[var(--q-card-bg)] border border-[var(--q-card-border)] rounded-2xl p-5 sm:p-8 flex flex-col gap-4"
              style={{ boxShadow: "var(--q-card-shadow)" }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: ACCENT_COLORS[i % ACCENT_COLORS.length],
                }}
              >
                <span className="text-white font-semibold text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-[clamp(1.25rem,1rem+1vw,1.5rem)] font-semibold text-[var(--q-heading)]">
                {step.title}
              </h3>
              <p className="text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] text-[var(--q-body)] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
