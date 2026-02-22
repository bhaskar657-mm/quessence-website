"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { ButtonColorful } from "@/components/ui/button-colorful";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

const Feature108 = ({
  badge = "FEATURED WORK",
  heading = "Real projects. Real results.",
  description = "Join us to build flawless web solutions.",
  tabs = [],
}: Feature108Props) => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-16 xl:px-[120px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-xs font-bold text-[var(--q-badge-text)] tracking-[2px] uppercase">
            {badge}
          </span>
          <h2 className="max-w-2xl text-[clamp(1.5rem,1.15rem+1.5vw,2.25rem)] font-bold text-[var(--q-heading)]">
            {heading}
          </h2>
          <p className="text-[var(--q-body)] text-[clamp(0.875rem,0.825rem+0.2vw,1rem)] leading-relaxed">
            {description}
          </p>
        </div>
        <Tabs defaultValue={tabs[0]?.value} className="mt-10">
          <TabsList className="flex flex-wrap items-center justify-center gap-2 sm:gap-6">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-2.5 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-[var(--q-body)] transition-colors data-[state=active]:bg-[var(--q-badge-bg)] data-[state=active]:text-[var(--q-heading)]"
              >
                <span className="hidden sm:inline">{tab.icon}</span> {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mt-8 rounded-2xl bg-[var(--q-card-bg)] border border-[var(--q-card-border)] p-6 lg:p-12" style={{ boxShadow: 'var(--q-card-shadow)' }}>
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10"
              >
                <div className="flex flex-col gap-5">
                  <span className="inline-flex w-fit items-center rounded-full border border-[var(--q-card-border)] bg-[var(--q-badge-bg)] px-3 py-1 text-xs font-semibold text-[var(--q-heading)]">
                    {tab.content.badge}
                  </span>
                  <h3 className="text-[clamp(1.5rem,0.75rem+3.5vw,3rem)] font-semibold text-[var(--q-heading)]">
                    {tab.content.title}
                  </h3>
                  <p className="text-[var(--q-body)] text-[clamp(1rem,0.95rem+0.25vw,1.125rem)] leading-relaxed">
                    {tab.content.description}
                  </p>
                  <ButtonColorful href="/work" label={tab.content.buttonText} className="mt-2.5 w-fit" />
                </div>
                <img
                  src={tab.content.imageSrc}
                  alt={tab.content.imageAlt}
                  className="rounded-xl"
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature108 };
