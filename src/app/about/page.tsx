import type { Metadata } from "next";
import { ContactBand, EditorialHeading, Hairline, SectionLabel } from "@/components/luxury";
import { PageHero } from "@/components/page-hero";
import aboutHero from "@/assets/about-hero.jpg";
import philosophyImg from "@/assets/hero.jpg";

export const metadata: Metadata = {
    title: "About — Future Vision",
    description: "A private atelier producing extraordinary events for an international circle of patrons, brands and institutions.",
};

const VALUES = [
    { t: "Experience", c: "More than a decade of weekends, summits and stages across four continents." },
    { t: "Philosophy", c: "Restraint over spectacle. Composition over decoration. Trust over volume." },
    { t: "Excellence", c: "An in-house atelier of producers, designers, protocol officers and talent agents." },
    { t: "Vision", c: "We build for permanence — gatherings remembered for a generation, not a season." },
];

export default function AboutPage() {
    return (
        <>
            <PageHero
                eyebrow="The House"
                title={<>A private atelier for <em className="not-italic text-gold">a small world</em>.</>}
                intro="Founded as a single creative practice and grown into an international house, Future Vision serves patrons, principals and institutions who expect work measured against the highest standards."
                image={aboutHero}
            />

            <section className="bg-surface py-28">
                <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-12 lg:px-12 items-center">
                    <div className="lg:col-span-5 relative aspect-4/5 overflow-hidden">
                        <img src={philosophyImg.src} alt="The Future Vision atelier" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, oklch(0.14 0.005 60 / 0.55) 100%)" }} />
                    </div>
                    <div className="lg:col-span-6 lg:col-start-7">
                        <SectionLabel index="I" label="Philosophy" />
                        <EditorialHeading className="mt-8">Composed, not produced.</EditorialHeading>
                        <div className="mt-8 text-muted-foreground leading-[1.85] space-y-5">
                            <p>We treat each commission as a single composition: a balance of place, hour, light, sound and ceremony. Nothing is delegated to template; nothing arrives by accident.</p>
                            <p>Our clients return to us because we hold their occasions with the same discretion they extend to their families and houses.</p>
                            <p className="font-display italic text-cream/90 text-xl pt-4">&mdash; The Atelier</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-background py-28">
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <SectionLabel index="II" label="The Four Values" />
                    <EditorialHeading className="mt-8 max-w-xl">What we hold to.</EditorialHeading>
                    <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
                        {VALUES.map((v, i) => (
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

            <section className="bg-surface-2 py-32">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <SectionLabel label="A closing note" />
                    <p className="mt-8 font-display text-3xl sm:text-4xl font-light italic text-cream leading-[1.3]">
                        Future Vision exists for the occasions that mark a life. We approach each as though it were our own.
                    </p>
                </div>
            </section>

            <ContactBand />
        </>
    );
}
