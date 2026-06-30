import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServiceIcon } from "@/components/service-row-image";
import {
    ContactBand,
    EditorialHeading,
    GoldButton,
    Hairline,
    SectionLabel,
} from "@/components/luxury";
import { GalleryCard } from "@/components/gallery-card";
import { HomeHero } from "@/components/home-hero";
import { ParallaxReveal } from "@/components/parallax";
import { ServiceRowImage } from "@/components/service-row-image";
import { SeoTags } from "@/components/seo-tags";
import heroImg from "@/assets/portfolio/portfolio-entertainment-magician.png";
import { PORTFOLIO_ITEMS, SERVICE_HERO_IMAGES } from "@/data/portfolio";
import { SITE } from "@/data/contact";
import { pageMetadata } from "@/data/seo";

const corpImg = SERVICE_HERO_IMAGES.corporate;
const wedImg = SERVICE_HERO_IMAGES.weddings;
const entImg = SERVICE_HERO_IMAGES.entertainment;

export const metadata: Metadata = pageMetadata({
    title: "Best Event Management Company in Dubai | Event Planner Dubai",
    description:
        "Top Event Planners in Dubai — Future Vision is the Best Event Management Company in Dubai for Corporate Event Management Dubai, Wedding Planner Dubai, Conference Organizer Dubai, Exhibition Management Company Dubai, Product Launch Event Agency Dubai, Gala Dinner Organizer Dubai, and Live Entertainment Dubai.",
    path: "/",
});

const SERVICES = [
    {
        n: "01",
        title: "Corporate Events",
        to: "/corporate-events",
        icon: "building" satisfies ServiceIcon,
        image: corpImg,
        copy: "Conferences, product launches, gala dinners, exhibitions, team building, and annual corporate celebrations across Dubai and the UAE.",
        tags: ["Corporate Event Management Dubai", "Conference Organizer Dubai", "Product Launch Event Agency Dubai", "Exhibition Management Company Dubai", "Gala Dinner Organizer Dubai"],
    },
    {
        n: "02",
        title: "Weddings",
        to: "/weddings",
        icon: "sparkles" satisfies ServiceIcon,
        image: wedImg,
        copy: "Arabic, Indian, and Western weddings with full planning, stage décor, mandap, fresh flowers, and destination celebrations.",
        tags: ["Wedding Planner Dubai", "Luxury Wedding Planner Dubai", "Indian Wedding Planner Dubai", "Wedding Decoration Dubai", "Destination Wedding Planner Dubai"],
    },
    {
        n: "03",
        title: "Entertainment",
        to: "/entertainment",
        icon: "music" satisfies ServiceIcon,
        image: entImg,
        copy: "Dance shows, live bands, DJs, musicians, magicians, and performers for corporate events, weddings, and private parties.",
        tags: ["Entertainment Agency Dubai", "Live Entertainment Dubai", "Corporate Entertainment Dubai", "Event Performers Dubai", "Artist Management Company Dubai"],
    },
] as const;

const PILLARS = [
    { n: "01", title: "Conferences", body: "Multi-day conferences, seminars, and business meetings with full AV, staging, and guest management.", tags: ["Conference Organizer Dubai", "Conference Management Company Dubai", "MICE Events Dubai"] },
    { n: "02", title: "Exhibitions", body: "Custom exhibition stands, trade shows, and branded environments for expos across Dubai.", tags: ["Exhibition Management Company Dubai", "Trade Show Organizer Dubai", "Exhibition Stand Contractor Dubai"] },
    { n: "03", title: "Product Launches", body: "Brand activations, experiential marketing, and launch events that make your product unforgettable.", tags: ["Product Launch Event Agency Dubai", "Brand Activation Agency Dubai", "Experiential Marketing Agency Dubai"] },
    { n: "04", title: "Gala Dinners", body: "Annual galas, award ceremonies, and VIP evenings with luxury production and entertainment.", tags: ["Gala Dinner Organizer Dubai", "Corporate Gala Dinner Dubai", "Award Ceremony Organizer Dubai"] },
];

const PORTFOLIO = PORTFOLIO_ITEMS.slice(0, 6);

export default function Home() {
    return (
        <>
            <HomeHero imageSrc={heroImg.src} />

            <ParallaxReveal as="section" className="relative bg-background py-32 sm:py-44">
                <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-12 lg:px-12">
                    <div className="lg:col-span-5">
                        <SectionLabel index="I" label="About" />
                        <EditorialHeading className="mt-10">
                            Event planners in<br /><em className="not-italic text-gold">Dubai, UAE</em>
                        </EditorialHeading>
                    </div>
                    <div className="lg:col-span-6 lg:col-start-7 space-y-6 text-muted-foreground leading-[1.85] text-sm sm:text-base">
                        <p>
                            {SITE.name} is a full-service event management company based in Dubai with over 14 years of experience — a leading name in corporate events, weddings, and live entertainment across the UAE and Middle East.
                        </p>
                        <p>
                            From concept development and venue selection through technical planning to on-the-day production, we handle conferences, staff parties, exhibitions, product launches, Arabic, Indian and Western weddings, and private celebrations.
                        </p>
                        <SeoTags
                            tags={["Event Management Agency UAE", "Event Production Company Dubai", "Luxury Event Planner Dubai", "Event Management Services Dubai"]}
                        />
                        <p className="font-display italic text-cream/90 text-lg pt-2">
                            &mdash; {SITE.motto}
                        </p>
                    </div>
                </div>
            </ParallaxReveal>

            <ParallaxReveal as="section" className="relative bg-surface" delay={100}>
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12 pt-24 pb-10">
                    <div className="flex flex-wrap items-end justify-between gap-6">
                        <div className="max-w-2xl">
                            <SectionLabel index="II" label="Services" />
                            <EditorialHeading className="mt-8">Three disciplines, one standard.</EditorialHeading>
                        </div>
                        <Link href="/portfolio" className="eyebrow gold-underline shrink-0">View portfolio</Link>
                    </div>
                </div>
                <div className="border-t border-border">
                    {SERVICES.map((s) => (
                        <Link key={s.to} href={s.to} className="group block border-b border-border transition-colors hover:bg-background">
                            <div className="mx-auto grid max-w-[1400px] grid-cols-12 items-start gap-6 px-6 lg:px-12 py-14 lg:py-20">
                                <div className="col-span-12 lg:col-span-1 font-display text-3xl text-gold/70">{s.n}</div>
                                <div className="col-span-12 lg:col-span-2">
                                    <ServiceRowImage src={s.image.src} alt={s.title} icon={s.icon} />
                                </div>
                                <div className="col-span-12 lg:col-span-8 flex flex-col gap-4">
                                    <div className="flex items-start justify-between gap-4">
                                        <h2 className="font-display font-light text-cream text-3xl lg:text-5xl leading-[1.05] group-hover:text-gold transition-colors">{s.title}</h2>
                                        <ArrowRight className="h-5 w-5 shrink-0 text-gold/60 group-hover:text-gold transition-transform duration-500 group-hover:translate-x-1 hidden lg:block" strokeWidth={1} />
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed max-w-2xl">{s.copy}</p>
                                    <SeoTags tags={s.tags} compact />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </ParallaxReveal>

            <ParallaxReveal as="section" className="relative bg-background py-32" delay={150}>
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <div className="flex flex-wrap items-end justify-between gap-6">
                        <div className="max-w-2xl">
                            <SectionLabel index="III" label="Portfolio" />
                            <EditorialHeading className="mt-8">Recent work in Dubai.</EditorialHeading>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {["Corporate", "Weddings", "Entertainment"].map((c, i) => (
                                <span key={c} className={`eyebrow ${i === 0 ? "text-gold!" : "text-muted-foreground!"}`}>{c}</span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
                        {PORTFOLIO.map((p) => (
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

                    <div className="mt-16 flex justify-center">
                        <GoldButton to="/portfolio" variant="outline">View Full Portfolio</GoldButton>
                    </div>
                </div>
            </ParallaxReveal>

            <ParallaxReveal as="section" className="relative bg-surface py-32" delay={200}>
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <SectionLabel index="IV" label="Why Future Vision" />
                    <EditorialHeading className="mt-8 max-w-2xl">What we specialise in.</EditorialHeading>

                    <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5">
                        {PILLARS.map((p) => (
                            <div key={p.n} className="bg-background border border-border rounded-xl p-8 lg:p-10 flex flex-col shadow-sm">
                                <span className="font-display text-2xl text-gold">{p.n}</span>
                                <Hairline className="mt-6 w-12!" />
                                <h3 className="mt-6 font-display text-2xl text-cream leading-tight">{p.title}</h3>
                                <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-grow">{p.body}</p>
                                <SeoTags className="mt-6" tags={p.tags} compact />
                            </div>
                        ))}
                    </div>
                </div>
            </ParallaxReveal>

            <ParallaxReveal as="section" className="relative bg-background py-32 sm:py-44" delay={250}>
                <div className="mx-auto max-w-3xl px-6 text-center">
                    <span className="font-display text-[6rem] sm:text-[8rem] leading-none text-gold/50">&ldquo;</span>
                    <blockquote className="-mt-10 sm:-mt-12 font-display text-2xl sm:text-3xl lg:text-4xl font-light italic text-cream leading-snug tracking-tight">
                        You imagine it and we will make it happen — the best event management team in Dubai.
                    </blockquote>
                    <div className="mt-10 flex flex-col items-center gap-4">
                        <Hairline className="w-16!" />
                        <p className="eyebrow">{SITE.name} &middot; Dubai, UAE</p>
                        <SeoTags
                            className="justify-center"
                            compact
                            tags={["Best Event Management Company in Dubai", "Top Event Planners in Dubai"]}
                        />
                    </div>
                </div>
            </ParallaxReveal>

            <ContactBand />
        </>
    );
}
