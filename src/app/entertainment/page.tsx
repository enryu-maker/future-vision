import type { Metadata } from "next";
import { ContactBand, EditorialHeading, Hairline, SectionLabel } from "@/components/luxury";
import { PageHero } from "@/components/page-hero";
import { ENTERTAINMENT_IMAGES, SERVICE_HERO_IMAGES } from "@/data/portfolio";
import { pageMetadata } from "@/data/seo";

const heroImg = SERVICE_HERO_IMAGES.entertainment;

export const metadata: Metadata = pageMetadata({
    title: "Live Entertainment & Dance Shows in Dubai",
    description:
        "Live entertainment acts in Dubai — dance shows, musicians, DJs, MC's, fire shows and Magician Sumeet Spell for corporate events, weddings and private parties across the UAE.",
    path: "/entertainment",
});

const CATEGORIES = [
    {
        t: "Dance Shows",
        c: "Talented performers in almost every style of dance — from Ballroom to Acrobatic, Arabian and Indian styles, generally in groups of two to eight.",
    },
    {
        t: "Entertainers",
        c: "Musicians, DJs, MC's, hostesses and models for corporate events, weddings and private parties — from elegant violinists to live bands.",
    },
    {
        t: "Magic & Illusion",
        c: "Close-up and table magicians plus the acclaimed Magician Sumeet Spell — adaptable for children's parties, weddings and corporate events.",
    },
];

const DANCE_STYLES = [
    { t: "Latin American", c: "Salsa, Columbian, Tango, Samba" },
    { t: "Indian Classical & Arabic", c: "Bollywood, Belly Dancers, Arabic Dancers, Indian Classical" },
    { t: "Western & Others", c: "Broadway, Can-Can, Hawaiian" },
];

const ENTERTAINMENT_ACTS = [
    "Live Bands",
    "DJ's",
    "Violinist",
    "Pianist",
    "Guitarist",
    "Harpist",
    "Flutist",
    "Saxophone Players",
    "Master of Ceremony (MC)",
    "Hostesses & Models",
    "Human Statues",
    "Fire Shows",
    "Laser Shows",
    "Close-up / Table Magicians",
];

export default function EntertainmentPage() {
    const FEATURED = [
        { t: "Dance Shows", image: ENTERTAINMENT_IMAGES[0] },
        { t: "Live Entertainment", image: ENTERTAINMENT_IMAGES[1] },
        { t: "Magician Sumeet", image: ENTERTAINMENT_IMAGES[2] },
    ];
    return (
        <>
            <PageHero
                eyebrow="Entertainment"
                title={<>Live entertainment acts in <em className="not-italic text-gold">Dubai</em>.</>}
                intro="Future Vision provides some of the best live entertainment acts in Dubai — dance shows and skillful entertainers for corporate events, weddings and private parties across the UAE."
                hue="deep"
                image={heroImg}
            />

            <section className="bg-surface py-28">
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <SectionLabel index="I" label="Categories" />
                    <EditorialHeading className="mt-8 max-w-xl">Two worlds of live performance.</EditorialHeading>
                    <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
                        We only present performers with the utmost professionalism, great talent and a sense of passion for their audience — experts who bring events to life.
                    </p>
                    <div className="mt-16 grid gap-px bg-border sm:grid-cols-3">
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
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <SectionLabel index="II" label="Dance Shows" />
                    <EditorialHeading className="mt-8">Styles we perform.</EditorialHeading>
                    <div className="mt-16 grid gap-px bg-border sm:grid-cols-3">
                        {DANCE_STYLES.map((d) => (
                            <div key={d.t} className="bg-background p-10">
                                <h3 className="font-display text-2xl text-cream">{d.t}</h3>
                                <Hairline className="mt-4 w-10!" />
                                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{d.c}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-surface-2 py-28">
                <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-12 lg:px-12">
                    <div className="lg:col-span-5">
                        <SectionLabel index="III" label="Entertainers" />
                        <EditorialHeading className="mt-8">Musicians, DJs &amp; more.</EditorialHeading>
                        <p className="mt-6 text-muted-foreground leading-relaxed">
                            From elegant violinists and pianists for formal corporate events to live bands and DJs for parties. Good music is the life of any party — we gauge the mood you want to set and provide options that best fit.
                        </p>
                    </div>
                    <div className="lg:col-span-6 lg:col-start-7">
                        <div className="grid gap-px bg-border sm:grid-cols-2">
                            {ENTERTAINMENT_ACTS.map((act) => (
                                <div key={act} className="bg-surface-2 p-6">
                                    <p className="text-sm text-cream">{act}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-background py-28">
                <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-12 lg:px-12">
                    <div className="lg:col-span-5">
                        <SectionLabel index="IV" label="Magician Sumeet" />
                        <EditorialHeading className="mt-8">The illusionist Dubai.</EditorialHeading>
                    </div>
                    <div className="lg:col-span-6 lg:col-start-7 text-muted-foreground leading-[1.85] space-y-5">
                        <p>
                            Future Vision proudly presents Mr. Sumeet Spell — an amazing illusionist who has been entertaining audiences in the UAE and throughout the Middle East since 2000.
                        </p>
                        <p>
                            Adaptable to any kind of party or event, Mr. Sumeet can be kid-friendly for a child&apos;s birthday or make his array of magic tricks more adult-oriented. His unique humorous style of stage and close-up magic offers packages to suit any event and budget.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-surface py-28">
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <SectionLabel index="V" label="Portfolio" />
                    <EditorialHeading className="mt-8">Entertainment in action.</EditorialHeading>
                    <div className="mt-16 grid gap-px bg-border sm:grid-cols-3">
                        {FEATURED.map((f) => (
                            <article key={f.t} className="group relative aspect-4/5 overflow-hidden bg-surface-2">
                                <img src={f.image.src} alt={f.t} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1400 ease-out group-hover:scale-[1.05]" />
                                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, oklch(0.12 0.005 60 / 0.88) 100%)" }} />
                                <div className="absolute inset-0 flex flex-col justify-end p-8">
                                    <span className="eyebrow">Entertainment &middot; Dubai</span>
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
