import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ButtonColorfulProps {
    label?: string;
    href?: string;
    className?: string;
}

export function ButtonColorful({
    className,
    label = "Explore Components",
    href,
}: ButtonColorfulProps) {
    const inner = (
        <>
            {/* Gradient background effect */}
            <div
                className={cn(
                    "absolute inset-0",
                    "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
                    "opacity-40 group-hover:opacity-80",
                    "blur transition-opacity duration-500"
                )}
            />
            {/* Content */}
            <div className="relative flex items-center justify-center gap-2">
                <span className="text-white">{label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/90" />
            </div>
        </>
    );

    const sharedClasses = cn(
        "relative inline-flex items-center justify-center h-11 px-6 overflow-hidden rounded-full",
        "bg-zinc-900",
        "transition-all duration-200",
        "group",
        className
    );

    if (href) {
        return (
            <Link href={href} className={sharedClasses}>
                {inner}
            </Link>
        );
    }

    return (
        <Button className={sharedClasses}>
            {inner}
        </Button>
    );
}
