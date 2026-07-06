import type { Metadata } from "next";
import { ContactBand, EditorialHeading, Hairline, SectionLabel } from "@/components/luxury";
import { PageHero } from "@/components/page-hero";
import { GalleryCard } from "@/components/gallery-card";
import { ParallaxReveal } from "@/components/parallax";
import { SeoTags } from "@/components/seo-tags";
import { ENTERTAINMENT_IMAGES, SERVICE_HERO_IMAGES } from "@/data/portfolio";
import { pageMetadata } from "@/data/seo";

const heroImg = SERVICE_HERO_IMAGES.entertainment;

export const metadata: Metadata = pageMetadata({
    title: "Entertainment Agency Dubai | Live Entertainment Dubai",
    description:
        "Entertainment Agency Dubai — Future Vision provides Live Entertainment Dubai, Corporate Entertainment Dubai, Event Performers Dubai, Artist Management Company Dubai, Event Entertainment Services Dubai, and Luxury Entertainment Dubai for events across UAE.",
    path: "/entertainment",
});

const CATEGORIES = [
    {
        t: "Dance Shows",
        c: "Talented performers in Ballroom, Acrobatic, Arabian, and Indian styles — groups of two to eight for any occasion.",
        tags: ["Live Entertainment Dubai", "Event Performers Dubai", "Event Entertainment Services Dubai"],
    },
    {
        t: "Entertainers",
        c: "Musicians, DJs, MC's, hostesses, and models for corporate events, weddings, and private parties.",
        tags: ["Corporate Entertainment Dubai", "Entertainment Agency Dubai", "Artist Management Company Dubai"],
    },
    {
        t: "Magic & Illusion",
        c: "Close-up and table magicians avaliable for children's parties, weddings, and corporate events.",
        tags: ["Luxury Entertainment Dubai", "Event Performers Dubai"],
    },
];

const DANCE_STYLES = [
    { t: "Latin American", c: "Salsa, Tango, Samba, and Columbian dance performances." },
    { t: "Indian & Arabic", c: "Bollywood, Belly Dancers, Arabic Dancers, and Indian Classical." },
    { t: "Western", c: "Broadway, Can-Can, and Hawaiian dance styles." },
];

const ENTERTAINMENT_ACTS = [
    "Live Bands",
    "DJ's",
    "Violinist",
    "Pianist",
    "Guitarist",
    "Harpist",
    "Saxophone Players",
    "Master of Ceremony",
    "Hostesses & Models",
    "Human Statues",
    "Fire Shows",
    "Laser Shows",
    "Close-up Magicians",
];

const FEATURED_LABELS = ["Live Concert Dubai", "Carnival Showgirls", "Silver Dance Performers"];

export default function EntertainmentPage() {
    const FEATURED = FEATURED_LABELS.map((label, i) => ({ t: label, image: ENTERTAINMENT_IMAGES[i] }));

    return (
        <>
            <PageHero
                eyebrow="Entertainment"
                title={<>Live entertainment in <em className="not-italic text-orange-500">Dubai</em></>}
                intro="The best live entertainment acts in Dubai — dance shows and skilled entertainers for corporate events, weddings, and private parties across the UAE."
                hue="deep"
                image={heroImg}
            />

            <ParallaxReveal as="section" className="bg-surface py-28">
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <SeoTags tags={["Entertainment Agency Dubai", "Live Entertainment Dubai", "Corporate Entertainment Dubai", "Event Performers Dubai"]} />
                </div>
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12 mt-10">
                    <SectionLabel index="I" label="Categories" />
                    <EditorialHeading className="mt-8 max-w-xl">Live performance for every occasion.</EditorialHeading>
                    <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed text-sm sm:text-base">
                        We present performers with professionalism, great talent, and passion — experts who bring events to life.
                    </p>
                    <div className="mt-16 grid gap-px bg-border sm:grid-cols-3">
                        {CATEGORIES.map((c) => (
                            <div key={c.t} className="bg-surface p-8 lg:p-10 flex flex-col">
                                <h3 className="font-display text-2xl text-cream">{c.t}</h3>
                                <Hairline className="mt-4 w-10!" />
                                <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-grow">{c.c}</p>
                                <SeoTags className="mt-5" tags={c.tags} compact />
                            </div>
                        ))}
                    </div>
                </div>
            </ParallaxReveal>

            <ParallaxReveal as="section" className="bg-background py-28">
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <SectionLabel index="II" label="Dance Shows" />
                    <EditorialHeading className="mt-8">Styles we perform.</EditorialHeading>
                    <div className="mt-16 grid gap-px bg-border sm:grid-cols-3">
                        {DANCE_STYLES.map((d) => (
                            <div key={d.t} className="bg-background p-8 lg:p-10">
                                <h3 className="font-display text-2xl text-cream">{d.t}</h3>
                                <Hairline className="mt-4 w-10!" />
                                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{d.c}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </ParallaxReveal>

            <ParallaxReveal as="section" className="bg-surface-2 py-28">
                <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-12 lg:px-12">
                    <div className="lg:col-span-5">
                        <SectionLabel index="III" label="Entertainers" />
                        <EditorialHeading className="mt-8">Musicians, DJs &amp; more.</EditorialHeading>
                        <p className="mt-6 text-muted-foreground leading-relaxed text-sm sm:text-base">
                            From elegant violinists for formal corporate events to live bands and DJs for parties — good music is the life of any event.
                        </p>
                    </div>
                    <div className="lg:col-span-6 lg:col-start-7">
                        <div className="grid gap-px bg-border sm:grid-cols-2">
                            {ENTERTAINMENT_ACTS.map((act) => (
                                <div key={act} className="bg-surface-2 p-5">
                                    <p className="text-sm text-cream">{act}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </ParallaxReveal>

            <ParallaxReveal as="section" className="bg-surface py-28">
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <SectionLabel index="V" label="Portfolio" />
                    <EditorialHeading className="mt-8">Entertainment in action.</EditorialHeading>
                    <div className="mt-16 grid gap-px bg-border sm:grid-cols-3">
                        {FEATURED.map((f) => (
                            <GalleryCard
                                key={f.t}
                                src={f.image.src}
                                alt={f.t}
                                eyebrow="Entertainment · Dubai"
                                title={f.t}
                            />
                        ))}
                    </div>
                </div>
            </ParallaxReveal>

            <ContactBand />
        </>
    );
}
