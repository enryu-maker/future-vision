"use client"

import { useState } from "react";
import { ContactBand, SectionLabel } from "@/components/luxury";
import { PageHero } from "@/components/page-hero";
import { cn } from "@/lib/utils";
import { PORTFOLIO_FILTERS, PORTFOLIO_ITEMS } from "@/data/portfolio";

export default function PortfolioPage() {
    const [filter, setFilter] = useState<(typeof PORTFOLIO_FILTERS)[number]>("All");
    const items = filter === "All" ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter((i) => i.cat === filter);

    return (
        <>
            <PageHero
                eyebrow="Portfolio"
                title={<>Events &amp; weddings across <em className="not-italic text-gold">Dubai</em>.</>}
                intro="A selection of corporate events, weddings and live entertainment produced by Future Vision across the UAE."
            />

            <section className="bg-background pb-32">
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <SectionLabel label="Selection" />
                    <div className="mt-10 flex flex-wrap gap-8 border-b border-border pb-8">
                        {PORTFOLIO_FILTERS.map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={cn(
                                    "eyebrow transition-colors",
                                    filter === f ? "text-gold!" : "text-muted-foreground! hover:text-cream!",
                                )}
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
                        {items.map((p) => (
                            <article key={p.t} className="group relative aspect-4/5 overflow-hidden bg-surface">
                                <img
                                    src={p.image.src}
                                    alt={p.t}
                                    loading="lazy"
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1400 ease-out group-hover:scale-[1.05]"
                                />
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background:
                                            "linear-gradient(180deg, transparent 40%, oklch(0.12 0.005 60 / 0.88) 100%)",
                                    }}
                                />
                                <div className="absolute inset-0 flex flex-col justify-end p-8">
                                    <span className="eyebrow">{p.cat}</span>
                                    <h3 className="mt-3 font-display text-2xl lg:text-3xl text-cream leading-tight">{p.t}</h3>
                                    <p className="mt-1 text-sm text-muted-foreground">{p.place}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <ContactBand />
        </>
    );
}
