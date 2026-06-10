import type { Metadata } from "next";
import { ContactBand, EditorialHeading, Hairline, SectionLabel } from "@/components/luxury";
import { PageHero } from "@/components/page-hero";
import heroImg from "@/assets/service-entertainment.jpg";
import p3 from "@/assets/p3.jpg";
import p6 from "@/assets/p6.jpg";
import entImg from "@/assets/service-entertainment.jpg";

export const metadata: Metadata = {
    title: "Entertainment & Artists — Future Vision",
    description: "Celebrity management, live performances and cultural programming for the world's most exacting hosts.",
};

const CATEGORIES = [
    { t: "Recording Artists", c: "Headline performers across pop, classical, hip-hop and jazz." },
    { t: "DJs & Sets", c: "Closing acts and after-hours from the global club circuit." },
    { t: "Cultural Programmes", c: "Soloists, orchestras and ensembles for ceremony and gala." },
    { t: "Speakers & Hosts", c: "Heads of state, authors and editors-in-chief for closed sessions." },
    { t: "Visual & Stage", c: "Set design, projection, immersive scenography." },
    { t: "Private Showcases", c: "Bespoke productions for milestone moments." },
];

export default function EntertainmentPage() {
    const FEATURED = [
        { t: "Soirée Noir, Marrakech", image: p3 },
        { t: "Atrium Sessions, Vienna", image: p6 },
        { t: "Maison Privée, Paris", image: entImg },
    ];
    return (
        <>
            <PageHero
                eyebrow="Entertainment"
                title={<>The talent behind <em className="not-italic text-gold">unforgettable evenings</em>.</>}
                intro="A dedicated talent division: artist representation, ensemble curation and original live productions for private hosts, brands and institutions."
                hue="deep"
                image={heroImg}
            />

            <section className="bg-surface py-28">
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <SectionLabel index="I" label="Artist Categories" />
                    <EditorialHeading className="mt-8 max-w-xl">A roster, carefully kept.</EditorialHeading>
                    <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
                        {CATEGORIES.map((c) => (
                            <div key={c.t} className="bg-surface p-10">
                                <h3 className="font-display text-2xl text-cream">{c.t}</h3>
                                <Hairline className="mt-4 w-10!" />
                                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{c.c}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-background py-28">
                <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-12 lg:px-12">
                    <div className="lg:col-span-5">
                        <SectionLabel index="II" label="Live Experiences" />
                        <EditorialHeading className="mt-8">Performances composed as moments.</EditorialHeading>
                    </div>
                    <div className="lg:col-span-6 lg:col-start-7 text-muted-foreground leading-[1.85] space-y-5">
                        <p>We do not simply book artists. Each engagement is staged: sightlines, light, the precise minute the lights dim and the room holds its breath.</p>
                        <p>Our production directors come from theatre, opera and fashion week &mdash; the disciplines where a single misjudged beat costs the entire room.</p>
                    </div>
                </div>
            </section>

            <section className="bg-surface-2 py-28">
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <SectionLabel index="III" label="Featured Events" />
                    <EditorialHeading className="mt-8">Recent stages.</EditorialHeading>
                    <div className="mt-16 grid gap-px bg-border sm:grid-cols-3">
                        {FEATURED.map((f) => (
                            <article key={f.t} className="group relative aspect-4/5 overflow-hidden bg-surface-2">
                                <img src={f.image.src} alt={f.t} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1400 ease-out group-hover:scale-[1.05]" />
                                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, oklch(0.12 0.005 60 / 0.88) 100%)" }} />
                                <div className="absolute inset-0 flex flex-col justify-end p-8">
                                    <span className="eyebrow">Entertainment</span>
                                    <h3 className="mt-3 font-display text-2xl text-cream">{f.t}</h3>
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
