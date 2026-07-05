import type { Metadata } from "next";
import { ContactBand, EditorialHeading, Hairline, SectionLabel } from "@/components/luxury";
import { PageHero } from "@/components/page-hero";
import { ParallaxReveal } from "@/components/parallax";
import { ParallaxSideImage } from "@/components/parallax-side-image";
import { SeoTags } from "@/components/seo-tags";
import aboutHero from "@/assets/about-hero.jpg";
import philosophyImg from "@/assets/portfolio/portfolio-wedding-mandap.png";
import { SITE } from "@/data/contact";
import { pageMetadata } from "@/data/seo";

export const metadata: Metadata = pageMetadata({
    title: "About — Best Event Management Company in Dubai",
    description:
        "About Future Vision — Best Event Management Company in Dubai with 14+ years. Event Management Company Dubai, Corporate Event Management Dubai, Wedding Planner Dubai, Conference Organizer Dubai, Exhibition Management Company Dubai, and Live Entertainment Dubai across UAE.",
    path: "/about",
});

const STATS = [
    { t: "14+ Years", c: "Experience in corporate events, weddings, and entertainment across the UAE and Middle East.", tags: ["Event Management Company Dubai", "Top Event Planners in Dubai"] },
    { t: "400+ Events", c: "Staff parties, product launches, exhibitions, and multi-day weddings successfully managed.", tags: ["Event Production Company Dubai", "Corporate Event Management Dubai"] },
    { t: "160+ Consultations", c: "Private consultations to understand vision, budget, and timeframe for every project.", tags: ["Event Planner Dubai", "Luxury Event Planner Dubai"] },
    { t: "100% Clients", c: "Happy clients who return to us for every milestone occasion across Dubai and UAE.", tags: ["Best Event Management Company in Dubai"] },
];

const PROCESS = [
    { t: "Visualization", c: "Visualize the event theme, idea, or motif for the party or occasion." },
    { t: "Realization", c: "Realistic budgeting and time frame planning for the event or project." },
    { t: "Implementation", c: "Create the plan in full detail — from concepts to tangible decorations." },
    { t: "Execution", c: "Execute the plan at full scale, always paying attention to details." },
];

export default function AboutPage() {
    return (
        <>
            <PageHero
                eyebrow="About Us"
                title={<>Event planners in <em className="not-italic text-gold">Dubai, UAE</em></>}
                intro="Future Vision is a full-service event management company based in Dubai — a leading name in corporate events, weddings, and live entertainment for over 20 years."
                image={aboutHero}
            />

            <ParallaxReveal as="section" className="bg-surface py-28">
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <SeoTags tags={["Event Management Company Dubai", "Event Management Agency UAE", "Event Organizers Dubai", "Event Management Services Dubai"]} />
                </div>
                <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-12 lg:px-12 items-center mt-10">
                    <div className="lg:col-span-5">
                        <ParallaxSideImage src={philosophyImg.src} alt="Future Vision Events Dubai" />
                    </div>
                    <div className="lg:col-span-6 lg:col-start-7">
                        <SectionLabel index="I" label="Who We Are" />
                        <EditorialHeading className="mt-8">Full-service event management.</EditorialHeading>
                        <div className="mt-8 text-muted-foreground leading-[1.85] space-y-5 text-sm sm:text-base">
                            <p>
                                As a full-service entertainment and event management company, Future Vision works with clients from concept development, venue selection, and technical planning through to managing the actual event production.
                            </p>
                            <p>
                                For corporate events this includes travel, sound, light, stage setup, translation equipment, and exhibition stands. We also organize Arabic, Indian, and Western weddings with live entertainment — magicians, clowns, jugglers, and mascots.
                            </p>
                            <p className="font-display italic text-cream/90 text-lg pt-2">&mdash; {SITE.motto}</p>
                        </div>
                    </div>
                </div>
            </ParallaxReveal>

            <ParallaxReveal as="section" className="bg-background py-28">
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <SectionLabel index="II" label="By the Numbers" />
                    <EditorialHeading className="mt-8 max-w-xl">Trusted across the UAE.</EditorialHeading>
                    <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
                        {STATS.map((v, i) => (
                            <div key={v.t} className="bg-background p-8 lg:p-10 flex flex-col">
                                <span className="font-display text-2xl text-gold">{String(i + 1).padStart(2, "0")}</span>
                                <Hairline className="mt-6 w-10!" />
                                <h3 className="mt-6 font-display text-2xl text-cream">{v.t}</h3>
                                <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-grow">{v.c}</p>
                                <SeoTags className="mt-5" tags={v.tags} compact />
                            </div>
                        ))}
                    </div>
                </div>
            </ParallaxReveal>

            <ParallaxReveal as="section" className="bg-surface-2 py-28">
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <SectionLabel index="III" label="Our Process" />
                    <EditorialHeading className="mt-8 max-w-xl">Four stages to every event.</EditorialHeading>
                    <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed text-sm sm:text-base">
                        Careful planning is the secret to a successful event. We work closely with clients from concept through to the final guest departure.
                    </p>
                    <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
                        {PROCESS.map((p, i) => (
                            <div key={p.t} className="bg-surface-2 p-8 lg:p-10">
                                <span className="font-display text-2xl text-gold">{String(i + 1).padStart(2, "0")}</span>
                                <Hairline className="mt-6 w-10!" />
                                <h3 className="mt-6 font-display text-2xl text-cream">{p.t}</h3>
                                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.c}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </ParallaxReveal>

            <ParallaxReveal as="section" className="bg-background py-32">
                <div className="mx-auto max-w-3xl px-6 text-center">
                    <SectionLabel label="Our Promise" />
                    <p className="mt-8 font-display text-2xl sm:text-3xl font-light italic text-cream leading-snug">
                        {SITE.motto}
                    </p>
                    <p className="mt-6 text-muted-foreground text-sm">
                        Dubai &middot; Sharjah &middot; Abu Dhabi, UAE
                    </p>
                    <SeoTags className="justify-center mt-6" compact tags={["Best Event Management Company in Dubai", "Event Production and Management Dubai"]} />
                </div>
            </ParallaxReveal>

            <ContactBand />
        </>
    );
}
