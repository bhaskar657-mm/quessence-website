import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
};

type LogoCloudProps = React.ComponentProps<"div">;

export function LogoCloud({ className, ...props }: LogoCloudProps) {
  return (
    <div
      className={cn(
        "relative grid grid-cols-2 border-x md:grid-cols-5",
        className
      )}
      {...props}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t" />

      {/* Row 1 */}
      <LogoCard
        className="relative border-r border-b bg-secondary dark:bg-secondary/30"
        logo={{ src: "/clients/logos/wheedle-dark.svg", alt: "Wheedle" }}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="border-b md:border-r"
        logo={{ src: "/clients/logos/mmz-dark.svg", alt: "Mark My Zone" }}
      />

      <LogoCard
        className="relative border-r border-b md:bg-secondary dark:md:bg-secondary/30"
        logo={{ src: "/clients/logos/momentit-black.svg", alt: "Moment It" }}
        logoClassName="h-7 md:h-9 max-h-12 max-w-[160px] md:max-w-[180px]"
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="border-b md:border-r"
        logo={{ src: "/clients/logos/gnyapakam-black.svg", alt: "Gnyapakam" }}
      />

      <LogoCard
        className="relative border-b bg-secondary md:bg-background dark:bg-secondary/30 md:dark:bg-background"
        logo={{ src: "/clients/logos/pragee-black.png", alt: "Pragee" }}
      >
        <PlusIcon
          className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block"
          strokeWidth={1}
        />
      </LogoCard>

      {/* Row 2 */}
      <LogoCard
        className="relative border-r bg-secondary dark:bg-secondary/30"
        logo={{ src: "/clients/logos/sutra-logo.webp", alt: "Sutra" }}
        invertInDark={false}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 md:hidden"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="md:border-r"
        logo={{ src: "/clients/logos/onloop-white.webp", alt: "OnLoop" }}
        invertInLight
      />

      <LogoCard
        className="relative border-r md:bg-secondary dark:md:bg-secondary/30"
        logo={{ src: "/clients/logos/tds-logo.png", alt: "The Dental Specialists" }}
        invertInDark={false}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="md:border-r"
        logo={{ src: "/clients/logos/airasia-move.svg", alt: "AirAsia Move" }}
        invertInDark={false}
      />

      <LogoCard
        className="relative bg-secondary md:bg-background dark:bg-secondary/30 md:dark:bg-background"
        logo={{ src: "/clients/logos/cassini-logo.png", alt: "Cassini" }}
        invertInLight
      />

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b" />
    </div>
  );
}

type LogoCardProps = React.ComponentProps<"div"> & {
  logo: Logo;
  invertInDark?: boolean;
  invertInLight?: boolean;
  logoClassName?: string;
};

function LogoCard({
  logo,
  className,
  children,
  invertInDark = true,
  invertInLight = false,
  logoClassName,
  ...props
}: LogoCardProps) {
  const filterClass = invertInLight
    ? "brightness-0 dark:brightness-0 dark:invert"
    : invertInDark
      ? "dark:brightness-0 dark:invert"
      : "";

  return (
    <div
      className={cn(
        "flex items-center justify-center bg-background px-4 py-8 md:p-8",
        className
      )}
      {...props}
    >
      <img
        alt={logo.alt}
        className={cn(
          "pointer-events-none h-6 max-h-10 w-auto max-w-[120px] select-none object-contain md:h-7 md:max-w-[140px]",
          filterClass,
          logoClassName
        )}
        src={logo.src}
      />
      {children}
    </div>
  );
}
