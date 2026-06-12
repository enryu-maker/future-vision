"use client"

import { useState } from "react";
import { ContactBand, SectionLabel } from "@/components/luxury";
import { PageHero } from "@/components/page-hero";
import { GalleryCard } from "@/components/gallery-card";
import { ParallaxReveal } from "@/components/parallax";
import { SeoTags } from "@/components/seo-tags";
import { cn } from "@/lib/utils";
import { PORTFOLIO_FILTERS, PORTFOLIO_ITEMS } from "@/data/portfolio";

const FILTER_LABELS: Record<(typeof PORTFOLIO_FILTERS)[number], string> = {
    All: "All",
    Corporate: "Corporate",
    Weddings: "Weddings",
    Entertainment: "Entertainment",
};

export default function PortfolioPage() {
    const [filter, setFilter] = useState<(typeof PORTFOLIO_FILTERS)[number]>("All");
    const items = filter === "All" ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter((i) => i.cat === filter);

    return (
        <>
            <PageHero
                eyebrow="Portfolio"
                title={<>Our work in <em className="not-italic text-gold">Dubai</em></>}
                intro="A selection of corporate events, weddings, and live entertainment produced by Future Vision across the UAE."
            />

            <ParallaxReveal as="section" className="bg-background pb-32">
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <SectionLabel label="Selection" />
                    <SeoTags
                        className="mt-6"
                        compact
                        tags={["Corporate Event Management Dubai", "Wedding Planner Dubai", "Live Entertainment Dubai", "Exhibition Management Company Dubai"]}
                    />
                    <div className="mt-10 flex flex-wrap gap-6 border-b border-border pb-8">
                        {PORTFOLIO_FILTERS.map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={cn(
                                    "eyebrow transition-colors",
                                    filter === f ? "text-gold!" : "text-muted-foreground! hover:text-cream!",
                                )}
                            >
                                {FILTER_LABELS[f]}
                            </button>
                        ))}
                    </div>

                    <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
                        {items.map((p) => (
                            <GalleryCard
                                key={p.t}
                                src={p.image.src}
                                alt={`${p.t} — ${p.tag}`}
                                eyebrow={p.tag}
                                title={p.t}
                                subtitle={p.place}
                            />
                        ))}
                    </div>
                </div>
            </ParallaxReveal>

            <ContactBand />
        </>
    );
}
