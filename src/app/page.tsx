import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
    ContactBand,
    EditorialHeading,
    GoldButton,
    Hairline,
    SectionLabel,
} from "@/components/luxury";
import { AnimatedCounter } from "@/components/animated-counter";
import { GalleryCard } from "@/components/gallery-card";
import { HomeHero } from "@/components/home-hero";
import { ParallaxReveal } from "@/components/parallax";
import { SeoTags } from "@/components/seo-tags";
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
        image: corpImg,
        copy: "Conferences, product launches, gala dinners, exhibitions, team building, and annual corporate celebrations across Dubai and the UAE.",
        tags: ["Corporate Event Management Dubai", "Conference Organizer Dubai", "Product Launch Event Agency Dubai", "Exhibition Management Company Dubai", "Gala Dinner Organizer Dubai"],
    },
    {
        n: "02",
        title: "Weddings",
        to: "/weddings",
        image: wedImg,
        copy: "Arabic, Indian, and Western weddings with full planning, stage décor, mandap, fresh flowers, and destination celebrations.",
        tags: ["Wedding Planner Dubai", "Luxury Wedding Planner Dubai", "Indian Wedding Planner Dubai", "Wedding Decoration Dubai", "Destination Wedding Planner Dubai"],
    },
    {
        n: "03",
        title: "Entertainment",
        to: "/entertainment",
        image: entImg,
        copy: "Dance shows, live bands, DJs, musicians, magicians, and performers for corporate events, weddings, and private parties.",
        tags: ["Entertainment Agency Dubai", "Live Entertainment Dubai", "Corporate Entertainment Dubai", "Event Performers Dubai", "Artist Management Company Dubai"],
    },
] as const;

const WHY_CHOOSE = [
    "Over 20 Years of Industry Experience",
    "Creative Event Concepts",
    "End-to-End Event Planning",
    "Professional Production Team",
    "High Quality Equipment",
    "Customized Event Solutions",
    "On-Time Project Delivery",
    "Dedicated Client Support",
    "Airport Transfers",
] as const;

const EVENT_TYPES = [
    { n: "01", title: "Conferences", body: "Multi-day conferences, seminars, and business meetings with full AV, staging, and guest management.", tags: ["Conference Organizer Dubai", "Conference Management Company Dubai", "MICE Events Dubai"] },
    { n: "02", title: "Exhibitions", body: "Custom exhibition stands, trade shows, and branded environments for expos across Dubai.", tags: ["Exhibition Management Company Dubai", "Trade Show Organizer Dubai", "Exhibition Stand Contractor Dubai"] },
    { n: "03", title: "Product Launches", body: "Brand activations, experiential marketing, and launch events that make your product unforgettable.", tags: ["Product Launch Event Agency Dubai", "Brand Activation Agency Dubai", "Experiential Marketing Agency Dubai"] },
    { n: "04", title: "Gala Dinners", body: "Annual galas, award ceremonies, and VIP evenings with luxury production and entertainment.", tags: ["Gala Dinner Organizer Dubai", "Corporate Gala Dinner Dubai", "Award Ceremony Organizer Dubai"] },
];

const STATS = [
    { value: 20, suffix: "+", label: "Years Experience" },
    { value: 1000, suffix: "+", label: "Successful Events" },
    { value: 500, suffix: "+", label: "Happy Clients" },
    { value: 100, suffix: "%", label: "Client Satisfaction" },
] as const;

const PORTFOLIO = PORTFOLIO_ITEMS.slice(0, 6);

export default function Home() {
    return (
        <>
            <HomeHero images={[corpImg.src, wedImg.src, entImg.src]} />

            <ParallaxReveal as="section" className="relative bg-background py-24 sm:py-32">
                <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-12">
                    <div className="lg:col-span-5">
                        <SectionLabel label="About Us" />
                        <EditorialHeading className="mt-8 text-[clamp(2rem,4.5vw,3.5rem)]">
                            Event planners in{" "}
                            <em className="not-italic text-orange-500">Dubai, UAE</em>
                        </EditorialHeading>
                    </div>
                    <div className="lg:col-span-6 lg:col-start-7 space-y-6 text-muted-foreground leading-[1.85] text-base sm:text-lg">
                        <p>
                            Future Vision Events is one of the UAE&apos;s leading event management companies, dedicated to creating memorable experiences through innovative planning, flawless execution, and exceptional customer service.
                        </p>
                        <p>
                            From intimate celebrations to large-scale corporate events, our experienced team manages every detail with precision and creativity. Our commitment to quality, reliability, and customer satisfaction has earned us the trust of clients across the UAE.
                        </p>
                        <p>
                            Whether it is a corporate conference, product launch, exhibition, wedding, gala dinner, or entertainment event, we transform every vision into reality.
                        </p>
                        <SeoTags
                            tags={["Event Management Agency UAE", "Event Production Company Dubai", "Luxury Event Planner Dubai", "Event Management Services Dubai"]}
                        />
                        <p className="font-display text-2xl sm:text-3xl italic text-orange-500 pt-2">
                            {SITE.motto}
                        </p>
                    </div>
                </div>
            </ParallaxReveal>

            <ParallaxReveal as="section" className="relative bg-surface py-24 sm:py-28" delay={80}>
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <SectionLabel label="Why Choose Us" />
                    <EditorialHeading className="mt-8 max-w-3xl text-[clamp(2rem,4vw,3.25rem)]">
                        Why Choose Future Vision Events
                    </EditorialHeading>
                    <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {WHY_CHOOSE.map((item) => (
                            <div
                                key={item}
                                className="flex items-start gap-4 rounded-xl border border-border bg-background p-6 shadow-sm"
                            >
                                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-orange-500" strokeWidth={2} />
                                <p className="font-display text-xl sm:text-2xl font-bold text-cream leading-snug">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </ParallaxReveal>

            <ParallaxReveal as="section" className="relative bg-background" delay={100}>
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12 pt-24 pb-10">
                    <div className="flex flex-wrap items-end justify-between gap-6">
                        <div className="max-w-2xl">
                            <SectionLabel label="Services" />
                            <EditorialHeading className="mt-8 text-[clamp(2rem,4vw,3.25rem)]">
                                Three disciplines, one standard.
                            </EditorialHeading>
                        </div>
                        <GoldButton to="/portfolio" variant="solid" className="shrink-0">
                            View Portfolio
                        </GoldButton>
                    </div>
                </div>
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12 pb-24">
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {SERVICES.map((s) => (
                            <Link
                                key={s.to}
                                href={s.to}
                                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition-all duration-500 hover:border-orange-500/40 hover:shadow-md"
                            >
                                <div className="relative aspect-4/3 overflow-hidden bg-background">
                                    <img
                                        src={s.image.src}
                                        alt={s.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                                </div>
                                <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
                                    <div className="flex items-start justify-between gap-3">
                                        <div>
                                            <span className="font-display text-lg text-orange-500/80">{s.n}</span>
                                            <h2 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-cream leading-tight group-hover:text-orange-500 transition-colors">
                                                {s.title}
                                            </h2>
                                        </div>
                                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-orange-500 text-white transition-transform duration-500 group-hover:translate-x-1">
                                            <ArrowRight className="h-5 w-5" strokeWidth={2} />
                                        </span>
                                    </div>
                                    <p className="text-base text-muted-foreground leading-relaxed">{s.copy}</p>
                                    <SeoTags tags={s.tags} compact />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </ParallaxReveal>

            <ParallaxReveal as="section" className="relative bg-surface py-24 sm:py-32" delay={120}>
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <SectionLabel label="Event Types" />
                    <EditorialHeading className="mt-8 max-w-2xl text-[clamp(2rem,4vw,3.25rem)]">
                        What we specialise in.
                    </EditorialHeading>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {STATS.map((stat) => (
                            <AnimatedCounter
                                key={stat.label}
                                value={stat.value}
                                suffix={stat.suffix}
                                label={stat.label}
                            />
                        ))}
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5">
                        {EVENT_TYPES.map((p) => (
                            <div key={p.n} className="bg-background border border-border rounded-xl p-8 lg:p-10 flex flex-col shadow-sm">
                                <span className="font-display text-3xl sm:text-2xl text-orange-500">{p.n}</span>
                                <Hairline className="mt-6 w-12!" />
                                <h3 className="mt-6 font-display text-2xl lg:text-3xl font-bold text-orange-500 leading-tight">{p.title}</h3>
                                <p className="mt-4 text-base sm:text-sm text-muted-foreground leading-relaxed flex-grow">{p.body}</p>
                                <SeoTags className="mt-6" tags={p.tags} compact />
                            </div>
                        ))}
                    </div>
                </div>
            </ParallaxReveal>

            <ParallaxReveal as="section" className="relative bg-background py-24 sm:py-32" delay={150}>
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <div className="flex flex-wrap items-end justify-between gap-6">
                        <div className="max-w-2xl">
                            <SectionLabel label="Portfolio" />
                            <EditorialHeading className="mt-8 text-[clamp(2rem,4vw,3.25rem)]">
                                Recent work in Dubai.
                            </EditorialHeading>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {[
                                { label: "Corporate", href: "/corporate-events" },
                                { label: "Weddings", href: "/weddings" },
                                { label: "Entertainment", href: "/entertainment" },
                            ].map((c) => (
                                <GoldButton key={c.label} to={c.href} variant="solid" className="px-5! py-3! text-[0.68rem]!">
                                    {c.label}
                                </GoldButton>
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
                        <GoldButton to="/portfolio" variant="solid">View Full Portfolio</GoldButton>
                    </div>
                </div>
            </ParallaxReveal>

            <ParallaxReveal as="section" className="relative bg-surface py-24 sm:py-32" delay={200}>
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <SectionLabel label="Why Future Vision" />
                    <EditorialHeading className="mt-8 max-w-2xl text-[clamp(2rem,4vw,3.25rem)]">
                        Trusted results across the UAE.
                    </EditorialHeading>

                    <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {STATS.map((stat) => (
                            <AnimatedCounter
                                key={`why-${stat.label}`}
                                value={stat.value}
                                suffix={stat.suffix}
                                label={stat.label}
                            />
                        ))}
                    </div>
                </div>
            </ParallaxReveal>

            <ContactBand />
        </>
    );
}
