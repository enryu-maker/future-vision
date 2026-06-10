import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronDown, Building2, Sparkles, Music2 } from "lucide-react";
import {
    AbstractBackdrop,
    ContactBand,
    EditorialHeading,
    Eyebrow,
    GoldButton,
    Hairline,
    SectionLabel,
} from "@/components/luxury";
import heroImg from "@/assets/portfolio/portfolio-wedding-arabic.png";
import { PORTFOLIO_ITEMS, SERVICE_HERO_IMAGES } from "@/data/portfolio";
import { SITE } from "@/data/contact";
import { pageMetadata } from "@/data/seo";

const corpImg = SERVICE_HERO_IMAGES.corporate;
const wedImg = SERVICE_HERO_IMAGES.weddings;
const entImg = SERVICE_HERO_IMAGES.entertainment;

export const metadata: Metadata = pageMetadata({
    title: "Event Management & Wedding Planners in Dubai, UAE",
    description:
        "Future Vision Events & Weddings — 14+ years of corporate events, Arabic, Indian & Western weddings, and live entertainment in Dubai, Sharjah and Abu Dhabi. Call +971-50-3576449.",
    path: "/",
});

const SERVICES = [
    {
        n: "01",
        title: "Corporate Events",
        to: "/corporate-events",
        icon: Building2,
        image: corpImg,
        copy: "Annual staff parties, family days, desert and dhow events, product launches, exhibition stands and conferences across Dubai and the UAE.",
    },
    {
        n: "02",
        title: "Weddings",
        to: "/weddings",
        icon: Sparkles,
        image: wedImg,
        copy: "Certified wedding planners for Arabic, Indian and Western weddings — stage décor, mandap, fresh flowers and full planning in Dubai.",
    },
    {
        n: "03",
        title: "Entertainment",
        to: "/entertainment",
        icon: Music2,
        image: entImg,
        copy: "Live dance shows, musicians, DJs, magicians and performers for corporate events, weddings and private parties in Dubai.",
    },
] as const;

const PILLARS = [
    { n: "01", title: "Visualization", body: "Visualize the event theme, idea or motif — the creative foundation for every occasion we plan." },
    { n: "02", title: "Realization", body: "Realistic budgeting and time frame planning aligned with your objectives and desired outcome." },
    { n: "03", title: "Implementation", body: "Full detail planning — from concepts to decorations, vendors, logistics and production." },
    { n: "04", title: "Execution", body: "Flawless on-the-day delivery with attention to every detail across Dubai, Sharjah and Abu Dhabi." },
];

const PORTFOLIO = PORTFOLIO_ITEMS.slice(0, 6).map((p) => ({
    title: p.t,
    cat: p.cat,
    place: p.place,
    image: p.image,
}));

export default function Home() {
    return (
        <>
            {/* HERO */}
            <section className="relative isolate min-h-svh flex items-end overflow-hidden bg-background">
                <img
                    src={heroImg.src}
                    alt=""
                    aria-hidden
                    className="absolute inset-0 h-full w-full object-cover opacity-55"
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(180deg, oklch(0.16 0.005 60 / 0.65) 0%, oklch(0.14 0.005 60 / 0.55) 45%, var(--background) 100%)",
                    }}
                />
                <AbstractBackdrop hue="deep" className="mix-blend-soft-light" />
                <div className="relative mx-auto w-full max-w-[1400px] px-6 lg:px-12 pb-24 pt-40">
                    <div className="max-w-4xl">
                        <Eyebrow>Events &amp; Weddings &middot; Dubai, UAE</Eyebrow>
                        <h1 className="mt-8 font-display font-light text-cream leading-[0.98] tracking-[-0.02em] text-[clamp(3rem,9vw,8rem)]">
                            You imagine it.<br />
                            <em className="not-italic text-gold/95">We make it</em><br />
                            happen.
                        </h1>
                        <p className="mt-10 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
                            Full-service event management and wedding planners in Dubai — corporate events, Arabic, Indian &amp; Western weddings, and live entertainment across the UAE.
                        </p>
                        <div className="mt-12 flex flex-wrap gap-4">
                            <GoldButton to="/portfolio" variant="solid">Explore Services</GoldButton>
                            <GoldButton to="/contact" variant="outline">Start Your Event</GoldButton>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold/70">
                    <span className="eyebrow text-[0.6rem]!">Scroll</span>
                    <ChevronDown className="h-4 w-4" style={{ animation: "fv-scroll-cue 2.4s ease-in-out infinite" }} />
                </div>
            </section>

            {/* INTRODUCTION */}
            <section className="relative bg-background py-32 sm:py-44">
                <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-12 lg:px-12">
                    <div className="lg:col-span-5">
                        <SectionLabel index="I" label="Introduction" />
                        <EditorialHeading className="mt-10">
                            Where vision<br />becomes <em className="not-italic text-gold">reality</em>.
                        </EditorialHeading>
                    </div>
                    <div className="lg:col-span-6 lg:col-start-7 space-y-6 text-muted-foreground leading-[1.85]">
                        <p>
                            {SITE.name} is a full-service entertainment and event management company based in Dubai, UAE. With over 14 years of experience, we are a leading name in corporate events, weddings and live entertainment across the UAE and wider Middle East.
                        </p>
                        <p>
                            We work with clients from concept development and venue selection through technical planning to managing the actual event production — for corporate conferences, staff parties, Arabic, Indian and Western weddings, and private celebrations.
                        </p>
                        <p className="font-display italic text-cream/90 text-xl pt-4">
                            &mdash; {SITE.motto}
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section className="relative bg-surface">
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12 pt-24 pb-10">
                    <div className="flex flex-wrap items-end justify-between gap-6">
                        <div>
                            <SectionLabel index="II" label="Disciplines" />
                            <EditorialHeading className="mt-8 max-w-xl">Three disciplines, one standard.</EditorialHeading>
                        </div>
                        <Link href="/portfolio" className="eyebrow gold-underline">View all work</Link>
                    </div>
                </div>
                <div className="border-t border-border">
                    {SERVICES.map((s) => (
                        <Link key={s.to} href={s.to} className="group block border-b border-border transition-colors hover:bg-surface-2">
                            <div className="mx-auto grid max-w-[1400px] grid-cols-12 items-center gap-6 px-6 lg:px-12 py-14 lg:py-20">
                                <div className="col-span-12 lg:col-span-1 font-display text-3xl text-gold/70">{s.n}</div>
                                <div className="col-span-12 lg:col-span-2">
                                    <div className="relative aspect-4/5 w-full overflow-hidden bg-surface-2">
                                        <img
                                            src={s.image.src}
                                            alt={s.title}
                                            loading="lazy"
                                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1200 ease-out group-hover:scale-[1.04]"
                                        />
                                        <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors duration-700" />
                                        <s.icon
                                            className="absolute bottom-3 left-3 h-5 w-5 text-gold/90"
                                            strokeWidth={1}
                                        />
                                    </div>
                                </div>
                                <h3 className="col-span-12 lg:col-span-4 font-display font-light text-cream text-3xl lg:text-5xl leading-[1.05] group-hover:text-gold transition-colors">{s.title}</h3>
                                <p className="col-span-12 lg:col-span-4 text-muted-foreground leading-relaxed">{s.copy}</p>
                                <div className="col-span-12 lg:col-span-1 flex lg:justify-end">
                                    <ArrowRight className="h-5 w-5 text-gold/60 group-hover:text-gold transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* PORTFOLIO */}
            <section className="relative bg-background py-32">
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <div className="flex flex-wrap items-end justify-between gap-6">
                        <div>
                            <SectionLabel index="III" label="Selected Commissions" />
                            <EditorialHeading className="mt-8">A quiet portfolio.</EditorialHeading>
                        </div>
                        <div className="flex gap-6">
                            {["All", "Corporate", "Weddings", "Entertainment"].map((c, i) => (
                                <span key={c} className={`eyebrow ${i === 0 ? "text-gold!" : "text-muted-foreground!"}`}>{c}</span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
                        {PORTFOLIO.map((p) => (
                            <article key={p.title} className="group relative aspect-4/5 overflow-hidden bg-surface">
                                <img
                                    src={p.image.src}
                                    alt={p.title}
                                    loading="lazy"
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1400 ease-out group-hover:scale-[1.05]"
                                />
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background:
                                            "linear-gradient(180deg, transparent 40%, oklch(0.12 0.005 60 / 0.85) 100%)",
                                    }}
                                />
                                <div className="absolute inset-0 flex flex-col justify-end p-8">
                                    <span className="eyebrow">{p.cat} &middot; {p.place}</span>
                                    <h3 className="mt-3 font-display text-2xl lg:text-3xl text-cream leading-tight">{p.title}</h3>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-16 flex justify-center">
                        <GoldButton to="/portfolio" variant="outline">View Full Portfolio</GoldButton>
                    </div>
                </div>
            </section>

            {/* PILLARS */}
            <section className="relative bg-surface-2 py-32">
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <SectionLabel index="IV" label="Why Future Vision" />
                    <EditorialHeading className="mt-8 max-w-2xl">Four pillars, quietly observed.</EditorialHeading>

                    <div className="mt-20 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
                        {PILLARS.map((p) => (
                            <div key={p.n} className="bg-surface-2 p-10 lg:p-12">
                                <span className="font-display text-2xl text-gold">{p.n}</span>
                                <Hairline className="mt-6 w-12!" />
                                <h3 className="mt-6 font-display text-2xl text-cream leading-tight">{p.title}</h3>
                                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIAL */}
            <section className="relative bg-background py-32 sm:py-44">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <span className="font-display text-[8rem] leading-none text-gold/50">&ldquo;</span>
                    <blockquote className="-mt-12 font-display text-3xl sm:text-4xl lg:text-5xl font-light italic text-cream leading-tight tracking-tight">
                        You imagine it and we will make it happen — our wedding in Dubai was everything we dreamed of and more.
                    </blockquote>
                    <div className="mt-12 flex flex-col items-center gap-2">
                        <Hairline className="w-16!" />
                        <p className="eyebrow mt-2">{SITE.name} &middot; Dubai, UAE</p>
                    </div>
                </div>
            </section>

            <ContactBand />
        </>
    );
}
