import type { Metadata } from "next";
import { ContactBand, EditorialHeading, Hairline, SectionLabel } from "@/components/luxury";
import { PageHero } from "@/components/page-hero";
import aboutHero from "@/assets/about-hero.jpg";
import philosophyImg from "@/assets/portfolio/portfolio-wedding-arabic.png";
import { SITE } from "@/data/contact";
import { pageMetadata } from "@/data/seo";

export const metadata: Metadata = pageMetadata({
    title: "About Us — Event & Wedding Planners in Dubai",
    description:
        "About Future Vision Events & Weddings — 14+ years of event management in Dubai, UAE. 400+ events managed, 160+ consultations, offices in Dubai, Sharjah and Abu Dhabi.",
    path: "/about",
});

const STATS = [
    { t: "14+ Years", c: "Experience in corporate events, weddings and entertainment across the UAE and Middle East." },
    { t: "400+ Events", c: "Successfully managed events from staff parties and product launches to multi-day weddings." },
    { t: "160+ Consultations", c: "Private consultations with clients to understand vision, budget and timeframe." },
    { t: "100% Clients", c: "A track record of happy clients who return to us for every milestone occasion." },
];

const PROCESS = [
    { t: "Visualization", c: "Visualize the event theme, idea or motif for the party or occasion." },
    { t: "Realization", c: "Perform realistic budgeting and time frame planning for the event or project." },
    { t: "Implementation", c: "Create the plan in full detail — from concepts to tangible decorations." },
    { t: "Execution", c: "Execute the plan at full scale, always paying attention to details." },
];

export default function AboutPage() {
    return (
        <>
            <PageHero
                eyebrow="About Us"
                title={<>Event &amp; wedding planners in <em className="not-italic text-gold">Dubai, UAE</em>.</>}
                intro="Future Vision is a full-service entertainment and event management company based in Dubai, UAE — a leading name in corporate events, weddings and live entertainment for over 14 years."
                image={aboutHero}
            />

            <section className="bg-surface py-28">
                <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-12 lg:px-12 items-center">
                    <div className="lg:col-span-5 relative aspect-4/5 overflow-hidden">
                        <img src={philosophyImg.src} alt="Future Vision Events & Weddings Dubai" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, oklch(0.14 0.005 60 / 0.55) 100%)" }} />
                    </div>
                    <div className="lg:col-span-6 lg:col-start-7">
                        <SectionLabel index="I" label="Who We Are" />
                        <EditorialHeading className="mt-8">Full-service event management.</EditorialHeading>
                        <div className="mt-8 text-muted-foreground leading-[1.85] space-y-5">
                            <p>
                                As a full-service entertainment and event management company, Future Vision works with clients from concept development, venue selection and technical planning through to managing the actual event production.
                            </p>
                            <p>
                                For corporate events this includes travel arrangements, sound, light and stage setup, translation equipment and exhibition stands. We have also organized private events from Western, Indian and Arabic weddings to celebrations with live entertainment — magicians, clowns, jugglers and mascots.
                            </p>
                            <p className="font-display italic text-cream/90 text-xl pt-4">&mdash; {SITE.motto}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-background py-28">
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <SectionLabel index="II" label="By the Numbers" />
                    <EditorialHeading className="mt-8 max-w-xl">Trusted across the UAE.</EditorialHeading>
                    <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
                        {STATS.map((v, i) => (
                            <div key={v.t} className="bg-background p-10 lg:p-12">
                                <span className="font-display text-2xl text-gold">{String(i + 1).padStart(2, "0")}</span>
                                <Hairline className="mt-6 w-10!" />
                                <h3 className="mt-6 font-display text-2xl text-cream">{v.t}</h3>
                                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{v.c}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-surface-2 py-28">
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <SectionLabel index="III" label="Our Process" />
                    <EditorialHeading className="mt-8 max-w-xl">Four stages to every event.</EditorialHeading>
                    <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
                        The secret ingredient for a successful event is careful planning. We work closely with clients from concept development through to the final guest departure.
                    </p>
                    <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
                        {PROCESS.map((p, i) => (
                            <div key={p.t} className="bg-surface-2 p-10 lg:p-12">
                                <span className="font-display text-2xl text-gold">{String(i + 1).padStart(2, "0")}</span>
                                <Hairline className="mt-6 w-10!" />
                                <h3 className="mt-6 font-display text-2xl text-cream">{p.t}</h3>
                                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.c}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-background py-32">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <SectionLabel label="Our Promise" />
                    <p className="mt-8 font-display text-3xl sm:text-4xl font-light italic text-cream leading-[1.3]">
                        {SITE.motto}
                    </p>
                    <p className="mt-6 text-muted-foreground">
                        Dubai &middot; Sharjah &middot; Abu Dhabi, UAE
                    </p>
                </div>
            </section>

            <ContactBand />
        </>
    );
}
