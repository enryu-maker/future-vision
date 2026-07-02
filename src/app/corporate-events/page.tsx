import type { Metadata } from "next";
import { ContactBand, EditorialHeading, Hairline, SectionLabel } from "@/components/luxury";
import { PageHero } from "@/components/page-hero";
import { GalleryCard } from "@/components/gallery-card";
import { ParallaxReveal } from "@/components/parallax";
import { SeoTags } from "@/components/seo-tags";
import { CORPORATE_IMAGES, SERVICE_HERO_IMAGES } from "@/data/portfolio";
import { pageMetadata } from "@/data/seo";

const heroImg = SERVICE_HERO_IMAGES.corporate;

export const metadata: Metadata = pageMetadata({
    title: "Corporate Event Management Dubai | Corporate Event Planner Dubai",
    description:
        "Corporate Event Management Dubai — Future Vision is a leading Corporate Event Planner Dubai, Corporate Event Organizer Dubai, and Corporate Entertainment Company Dubai. Team Building Events Dubai, Corporate Conference Organizer Dubai, Corporate Gala Dinner Dubai, and Corporate Event Production Dubai.",
    path: "/corporate-events",
});

const TYPES = [
    { t: "Annual Staff Parties", c: "Theme-driven celebrations for employees — holiday gatherings, milestone recognition, and annual corporate events across Dubai.", tags: ["Annual Corporate Event Dubai", "Corporate Event Management Dubai"] },
    { t: "Team Building Events", c: "Outdoor programmes and team activities designed to strengthen bonds between employees and departments.", tags: ["Team Building Events Dubai", "Team Building Event Organizer Dubai"] },
    { t: "Gala Dinners", c: "Black-tie galas, award ceremonies, and VIP evenings with full creative direction and entertainment.", tags: ["Gala Dinner Organizer Dubai", "Corporate Gala Dinner Dubai", "Award Ceremony Organizer Dubai"] },
    { t: "Product Launches", c: "Press previews, brand activations, and launch parties with creative staging, AV, and guest management.", tags: ["Product Launch Event Agency Dubai", "Brand Activation Agency Dubai"] },
    { t: "Exhibition Stands", c: "Custom-built stands and branded environments for trade shows and exhibitions across Dubai.", tags: ["Exhibition Stand Contractor Dubai", "Trade Show Organizer Dubai"] },
    { t: "Conferences", c: "Formal corporate conferences and business meetings — travel, translation, sound, light, and stage setup.", tags: ["Conference Organizer Dubai", "Conference Management Company Dubai", "MICE Events Dubai"] },
    { t: "Desert & Dhow Events", c: "Authentic desert experiences and dhow celebrations with full production, catering, and entertainment.", tags: ["Corporate Event Production Dubai", "Event Production Company Dubai"] },
];

const PROCESS = [
    { n: "01", t: "Brief", c: "Discovery session to understand your objectives, budget, and event requirements." },
    { n: "02", t: "Plan", c: "Realistic budgeting, timeline planning, and vendor selection aligned with your goals." },
    { n: "03", t: "Build", c: "Full detail production — staging, décor, logistics, and technical setup." },
    { n: "04", t: "Deliver", c: "Flawless on-the-day execution with attention to every detail." },
];

const HIGHLIGHTS = [
    { t: "Celebrations", c: "Top event planners in Dubai for celebrating any corporate achievement or milestone.", tags: ["Corporate Event Organizer Dubai", "Top Event Planners in Dubai"] },
    { t: "Meetings", c: "Product launches, success parties, and professional gatherings planned for maximum impact.", tags: ["Business Event Planner Dubai", "Product Launch Event Management Dubai"] },
    { t: "Full Production", c: "Sound, light, stage, translation equipment, travel, and exhibition stands under one roof.", tags: ["Corporate Event Production Dubai", "Exhibition Management Company Dubai"] },
];

const FEATURED_LABELS = [
    "Corporate Gala Ballroom",
    "International Conference",
    "Corporate Awards Gala",
    "Emirates NBD Summit",
    "WION Global Summit",
    "Live Orchestra Gala",
];

export default function CorporatePage() {
    const FEATURED = FEATURED_LABELS.map((label, i) => ({
        t: label,
        image: CORPORATE_IMAGES[i],
    }));

    return (
        <>
            <PageHero
                eyebrow="Corporate Events"
                title={<>Corporate event management company in <em className="not-italic text-gold">Dubai</em>, UAE</>}
                intro="Premier corporate event organizers in Dubai and the UAE — from large formal conferences to intimate business gatherings for companies across industries."
                hue="neutral"
                image={heroImg}
            />

            <ParallaxReveal as="section" className="bg-surface py-28">
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <SeoTags
                        tags={["Corporate Event Management Company in Dubai", "Corporate Event Planner Dubai", "Corporate Event Organizer Dubai", "Corporate Entertainment Company Dubai"]}
                    />
                </div>
                <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-12 lg:px-12 mt-10">
                    <div className="lg:col-span-5">
                        <SectionLabel index="I" label="About" />
                        <EditorialHeading className="mt-8">A premier corporate event company.</EditorialHeading>
                    </div>
                    <div className="lg:col-span-6 lg:col-start-7 text-muted-foreground leading-[1.85] space-y-5 text-sm sm:text-base">
                        <p>
                            Future Vision is one of the premier event management companies in Dubai, famed for quality, planning, and management of corporate events across the UAE.
                        </p>
                        <p>
                            We work with clients from concept development and venue selection through technical planning to managing the actual event production — including travel, sound, light, stage setup, translation equipment, and exhibition stands.
                        </p>
                        <p className="font-display italic text-cream/90 text-lg">
                            You imagine it and we will make it happen.
                        </p>
                    </div>
                </div>
            </ParallaxReveal>

            <ParallaxReveal as="section" className="bg-background py-28">
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <SectionLabel index="II" label="Event Types" />
                    <EditorialHeading className="mt-8 max-w-xl">Corporate events we produce.</EditorialHeading>
                    <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
                        {TYPES.map((x) => (
                            <div key={x.t} className="bg-background p-8 lg:p-10 flex flex-col">
                                <h3 className="font-display text-2xl text-orange-600">{x.t}</h3>
                                <Hairline className="mt-4 w-10!" />
                                <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-grow">{x.c}</p>
                                <SeoTags className="mt-5" tags={x.tags} compact />
                            </div>
                        ))}
                    </div>
                </div>
            </ParallaxReveal>

            <ParallaxReveal as="section" className="bg-surface-2 py-28">
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <SectionLabel index="III" label="Why Us" />
                    <EditorialHeading className="mt-8">Corporate event planners you can trust.</EditorialHeading>
                    <div className="mt-16 grid gap-px bg-border sm:grid-cols-3">
                        {HIGHLIGHTS.map((h) => (
                            <div key={h.t} className="bg-surface-2 p-8 lg:p-10 flex flex-col">
                                <h3 className="font-display text-2xl text-cream">{h.t}</h3>
                                <Hairline className="mt-4 w-10!" />
                                <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-grow">{h.c}</p>
                                <SeoTags className="mt-5" tags={h.tags} compact />
                            </div>
                        ))}
                    </div>
                </div>
            </ParallaxReveal>

            <ParallaxReveal as="section" className="bg-background py-28">
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <SectionLabel index="IV" label="Portfolio" />
                    <EditorialHeading className="mt-8">Recent corporate work.</EditorialHeading>
                    <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-5">
                        {FEATURED.map((f) => (
                            <GalleryCard
                                key={f.t}
                                src={f.image.src}
                                alt={f.t}
                                eyebrow="Corporate · Dubai"
                                title={f.t}
                            />
                        ))}
                    </div>
                </div>
            </ParallaxReveal>

            <ParallaxReveal as="section" className="bg-surface py-28">
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <SectionLabel index="V" label="Process" />
                    <EditorialHeading className="mt-8">Four stages to success.</EditorialHeading>
                    <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed text-sm sm:text-base">
                        Careful planning is the secret to a successful event. We work closely with clients from concept through to the final guest departure.
                    </p>
                    <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                        {PROCESS.map((p) => (
                            <div key={p.n}>
                                <span className="font-display text-3xl text-gold">{p.n}</span>
                                <Hairline className="mt-5 w-10!" />
                                <h3 className="mt-5 font-display text-xl text-cream">{p.t}</h3>
                                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.c}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </ParallaxReveal>

            <ContactBand />
        </>
    );
}
