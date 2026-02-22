import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  area?: string;
}

export default function ServiceCard({ icon: Icon, title, description, href, area }: ServiceCardProps) {
  const Wrapper = href ? Link : "div";
  const wrapperProps = href ? { href } : {};
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <Wrapper {...wrapperProps as any} className="relative block h-full rounded-[1.25rem] border-[0.75px] border-[var(--q-card-border)] p-2 md:rounded-[1.5rem] md:p-3 no-underline">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-[var(--q-card-border)] bg-[var(--q-card-bg)] p-6 md:p-6" style={{ boxShadow: 'var(--q-card-shadow)' }}>
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-[var(--q-card-border)] bg-[var(--q-badge-bg)] p-2">
              <Icon className="h-4 w-4 text-[var(--q-icon-color)]" />
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.4] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.4] text-balance text-[var(--q-heading)]">
                {title}
              </h3>
              <p className="font-sans text-sm leading-[1.5] md:text-base md:leading-[1.5] text-[var(--q-body)]">
                {description}
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </li>
  );
}
