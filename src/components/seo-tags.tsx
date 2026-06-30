import { cn } from "@/lib/utils";

export function SeoTags({
    tags,
    className,
    compact = false,
}: {
    tags: readonly string[];
    className?: string;
    compact?: boolean;
}) {
    if (!tags.length) return null;

    return (
        <ul className={cn("flex flex-wrap gap-2 list-none p-0 m-0", className)} aria-label="Related services">
            {tags.map((tag) => (
                <li
                    key={tag}
                    className={cn(
                        "rounded-full border border-border bg-background/80 font-sans font-normal normal-case tracking-normal text-muted-foreground shadow-sm",
                        compact ? "px-2.5 py-0.5 text-[0.58rem] leading-snug" : "px-3 py-1 text-[0.62rem] leading-snug",
                    )}
                >
                    {tag}
                </li>
            ))}
        </ul>
    );
}
