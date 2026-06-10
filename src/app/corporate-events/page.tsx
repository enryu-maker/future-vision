import type { Metadata } from "next";
import { ContactBand, EditorialHeading, Hairline, SectionLabel } from "@/components/luxury";
import { PageHero } from "@/components/page-hero";
import { CORPORATE_IMAGES, SERVICE_HERO_IMAGES } from "@/data/portfolio";
import { pageMetadata } from "@/data/seo";

const heroImg = SERVICE_HERO_IMAGES.corporate;

export const metadata: Metadata = pageMetadata({
    title: "Corporate Event Organizers in Dubai, UAE",
    description:
        "Future Vision — premier corporate event management in Dubai. Annual staff parties, family days, desert & dhow parties, product launches, exhibition stands and conferences. 14+ years experience.",
    path: "/corporate-events",
});

const TYPES = [
    { t: "Annual Staff Parties", c: "Theme-driven celebrations that strengthen team bonds — from holiday gatherings to milestone recognition events across the UAE." },
    { t: "Family Days", c: "Inclusive outdoor programmes designed for employees and their families, with activities, entertainment and catering handled end-to-end." },
    { t: "Outdoor Desert Parties", c: "Authentic desert experiences with full production — sound, lighting, staging and hospitality in the dunes." },
    { t: "Dhow Parties", c: "Memorable celebrations aboard traditional dhows, with décor, catering and entertainment curated for your corporate occasion." },
    { t: "Product Launches", c: "From press previews to launch parties — creative staging, AV and guest management that make your brand moment unforgettable." },
    { t: "Exhibition Stands", c: "Custom-built stands and branded environments for trade shows and exhibitions across Dubai and the wider Middle East." },
    { t: "Conferences & Gatherings", c: "Formal corporate conferences and business meetings — travel, translation equipment, sound, light and stage setup included." },
];

const PROCESS = [
    { n: "01", t: "Visualization", c: "Visualize the event theme, idea or motif for the party or occasion — the creative foundation for everything that follows." },
    { n: "02", t: "Realization", c: "Perform realistic budgeting and time frame planning for the event or project, aligned with your objectives." },
    { n: "03", t: "Implementation", c: "Create the plan in full detail — from concepts to tangible decorations, vendors and logistics." },
    { n: "04", t: "Execution", c: "Execute the plan at full scale, always paying attention to details so every moment runs seamlessly." },
];

const HIGHLIGHTS = [
    { t: "Celebration", c: "Our team is considered among the top in Dubai for celebrating any event or achievement — tailored to your imagination." },
    { t: "Professional Meetings", c: "From product launch parties to success celebrations, we plan every professional gathering for maximum impact." },
    { t: "Full Production", c: "Sound, light, stage setup, translation equipment, travel arrangements and exhibition stands — all under one roof." },
];

export default function CorporatePage() {
    const FEATURED = [
        { t: "Annual Staff Party", image: CORPORATE_IMAGES[0] },
        { t: "Desert Corporate Party", image: CORPORATE_IMAGES[1] },
        { t: "Product Launch", image: CORPORATE_IMAGES[2] },
        { t: "Exhibition Stand", image: CORPORATE_IMAGES[3] },
        { t: "Dhow Party", image: CORPORATE_IMAGES[4] },
    ];
    return (
        <>
            <PageHero
                eyebrow="Corporate Events"
                title={<>Event organizers in <em className="not-italic text-gold">Dubai, UAE</em>.</>}
                intro="Future Vision has been organizing corporate events in Dubai and the UAE for more than a decade — from large formal conferences to intimate business gatherings for companies across industries."
                hue="neutral"
                image={heroImg}
            />

            <section className="bg-surface py-28">
                <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-12 lg:px-12">
                    <div className="lg:col-span-5">
                        <SectionLabel index="I" label="About" />
                        <EditorialHeading className="mt-8">A premier event management company.</EditorialHeading>
                    </div>
                    <div className="lg:col-span-6 lg:col-start-7 text-muted-foreground leading-[1.85] space-y-5">
                        <p>
                            Future Vision is one of the premier and professional event management companies in Dubai and the UAE, famed for quality, planning, organizing and management of corporate events.
                        </p>
                        <p>
                            We work with clients from concept development and venue selection through technical planning to managing the actual event production — including travel arrangements, sound, light and stage setup, translation equipment and exhibition stands.
                        </p>
                        <p className="font-display italic text-cream/90 text-lg">
                            You imagine it and we will make it happen.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-background py-28">
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <SectionLabel index="II" label="Event Types" />
                    <EditorialHeading className="mt-8 max-w-xl">Corporate events we produce.</EditorialHeading>
                    <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
                        {TYPES.map((x) => (
                            <div key={x.t} className="bg-background p-10">
                                <h3 className="font-display text-2xl text-cream">{x.t}</h3>
                                <Hairline className="mt-4 w-10!" />
                                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{x.c}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-surface-2 py-28">
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <SectionLabel index="III" label="Why Future Vision" />
                    <EditorialHeading className="mt-8">Event planners you can trust.</EditorialHeading>
                    <div className="mt-16 grid gap-px bg-border sm:grid-cols-3">
                        {HIGHLIGHTS.map((h) => (
                            <div key={h.t} className="bg-surface-2 p-10">
                                <h3 className="font-display text-2xl text-cream">{h.t}</h3>
                                <Hairline className="mt-4 w-10!" />
                                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{h.c}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-background py-28">
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <SectionLabel index="IV" label="Portfolio" />
                    <EditorialHeading className="mt-8">Recent corporate work.</EditorialHeading>
                    <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                        {FEATURED.map((f) => (
                            <article key={f.t} className="group relative aspect-4/5 overflow-hidden bg-surface-2">
                                <img src={f.image.src} alt={f.t} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1400 ease-out group-hover:scale-[1.05]" />
                                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, oklch(0.12 0.005 60 / 0.88) 100%)" }} />
                                <div className="absolute inset-0 flex flex-col justify-end p-8">
                                    <span className="eyebrow">Corporate Events &middot; Dubai</span>
                                    <h3 className="mt-3 font-display text-2xl text-cream">{f.t}</h3>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-surface py-28">
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <SectionLabel index="V" label="Process" />
                    <EditorialHeading className="mt-8">Four stages to success.</EditorialHeading>
                    <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
                        The secret ingredient for a successful event is careful planning. We work closely with clients from concept development through to the final guest departure.
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
            </section>

            <ContactBand />
        </>
    );
}
