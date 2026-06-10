import type { Metadata } from "next";
import { ContactBand, EditorialHeading, Hairline, SectionLabel } from "@/components/luxury";
import { PageHero } from "@/components/page-hero";
import heroImg from "@/assets/service-corporate.jpg";
import p2 from "@/assets/p2.jpg";
import p5 from "@/assets/p5.jpg";
import corpImg from "@/assets/service-corporate.jpg";

export const metadata: Metadata = {
    title: "Corporate Events — Future Vision",
    description: "Conferences, product launches and gala dinners produced for global brands, executives and institutions.",
};

const TYPES = [
    { t: "Executive Summits", c: "Boardroom retreats and chairman gatherings, hosted at private estates and members' clubs." },
    { t: "Product Launches", c: "Press dinners, runway moments and category-defining brand reveals." },
    { t: "Gala Dinners", c: "Black-tie philanthropy and anniversary evenings with full creative direction." },
    { t: "Conferences", c: "Multi-day programmes for institutions and houses, end-to-end produced." },
    { t: "Incentive Travel", c: "Curated journeys that reward leadership and deepen relationships." },
    { t: "Press Activations", c: "Closed-door previews for editors, collectors and partner houses." },
];

const PROCESS = [
    { n: "01", t: "Brief", c: "A private discovery session with your principals and our creative directors." },
    { n: "02", t: "Concept", c: "A bound creative document — narrative, palette, schedule, key suppliers." },
    { n: "03", t: "Production", c: "Procurement, logistics, protocol, talent and legal handled in-house." },
    { n: "04", t: "Delivery", c: "On-the-night command and a quiet, complete debrief in the days that follow." },
];

export default function CorporatePage() {
    const FEATURED = [
        { t: "Halcyon Summit, Geneva", image: p2 },
        { t: "Maison Verre Launch, Paris", image: p5 },
        { t: "Atrium Annual, London", image: corpImg },
    ];
    return (
        <>
            <PageHero
                eyebrow="Corporate"
                title={<>Events for the houses that <em className="not-italic text-gold">shape industries</em>.</>}
                intro="Future Vision produces corporate occasions for global brands, listed boards and institutions — discreet, on-brand, immaculately executed."
                hue="neutral"
                image={heroImg}
            />

            <section className="bg-surface py-28">
                <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-12 lg:px-12">
                    <div className="lg:col-span-5">
                        <SectionLabel index="I" label="Services" />
                        <EditorialHeading className="mt-8">A complete production house.</EditorialHeading>
                    </div>
                    <div className="lg:col-span-6 lg:col-start-7 text-muted-foreground leading-[1.85] space-y-5">
                        <p>From the first creative brief to the final guest departure, every department lives under one roof — design, production, talent, protocol and legal.</p>
                        <p>The result is a single point of accountability for clients accustomed to private-office standards.</p>
                    </div>
                </div>
            </section>

            <section className="bg-background py-28">
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <SectionLabel index="II" label="Event Types" />
                    <EditorialHeading className="mt-8 max-w-xl">Formats we are known for.</EditorialHeading>
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
                    <SectionLabel index="III" label="Featured" />
                    <EditorialHeading className="mt-8">Recent commissions.</EditorialHeading>
                    <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
                        {FEATURED.map((f) => (
                            <article key={f.t} className="group relative aspect-4/5 overflow-hidden bg-surface-2">
                                <img src={f.image.src} alt={f.t} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1400 ease-out group-hover:scale-[1.05]" />
                                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, oklch(0.12 0.005 60 / 0.88) 100%)" }} />
                                <div className="absolute inset-0 flex flex-col justify-end p-8">
                                    <span className="eyebrow">Corporate &middot; MMXXIV</span>
                                    <h3 className="mt-3 font-display text-2xl text-cream">{f.t}</h3>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-background py-28">
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <SectionLabel index="IV" label="Process" />
                    <EditorialHeading className="mt-8">A measured cadence.</EditorialHeading>
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
