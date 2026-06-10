"use client"

import { useState } from "react";
import { ContactBand, SectionLabel } from "@/components/luxury";
import { PageHero } from "@/components/page-hero";
import { cn } from "@/lib/utils";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import wedImg from "@/assets/service-weddings.jpg";
import corpImg from "@/assets/service-corporate.jpg";
import entImg from "@/assets/service-entertainment.jpg";

const ITEMS = [
    { t: "Maison Auriel", place: "Capri", cat: "Weddings", year: "MMXXIV", image: p1 },
    { t: "Halcyon Summit", place: "Geneva", cat: "Corporate", year: "MMXXIV", image: p2 },
    { t: "Soirée Noir", place: "Marrakech", cat: "Entertainment", year: "MMXXIII", image: p3 },
    { t: "Verdant Pavilion", place: "Kyoto", cat: "Weddings", year: "MMXXIII", image: p4 },
    { t: "Maison Verre Launch", place: "Paris", cat: "Corporate", year: "MMXXIII", image: p5 },
    { t: "Atrium Sessions", place: "Vienna", cat: "Entertainment", year: "MMXXII", image: p6 },
    { t: "Château Lys", place: "Provence", cat: "Weddings", year: "MMXXII", image: wedImg },
    { t: "Saadiyat Sands", place: "Abu Dhabi", cat: "Weddings", year: "MMXXII", image: p1 },
    { t: "Atrium Annual", place: "London", cat: "Corporate", year: "MMXXI", image: corpImg },
    { t: "Nocturne, Berlin", place: "Berlin", cat: "Entertainment", year: "MMXXI", image: entImg },
];

const FILTERS = ["All", "Corporate", "Weddings", "Entertainment"] as const;

export default function PortfolioPage() {
    const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
    const items = filter === "All" ? ITEMS : ITEMS.filter((i) => i.cat === filter);

    return (
        <>
            <PageHero
                eyebrow="Portfolio"
                title={<>A quiet body of <em className="not-italic text-gold">work</em>.</>}
                intro="A selection of recent commissions, presented in the spirit they were created: with restraint."
            />

            <section className="bg-background pb-32">
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <SectionLabel label="Selection" />
                    <div className="mt-10 flex flex-wrap gap-8 border-b border-border pb-8">
                        {FILTERS.map((f) => (
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
                                    <span className="eyebrow">{p.cat} &middot; {p.year}</span>
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
