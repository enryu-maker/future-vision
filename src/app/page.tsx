import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronDown, Building2, Sparkles, Music2 } from "lucide-react";
import {
    AbstractBackdrop,
    ContactBand,
    EditorialHeading,
    Eyebrow,
    GoldButton,
    Hairline,
    SectionLabel,
} from "@/components/luxury";
import heroImg from "@/assets/hero.jpg";
import corpImg from "@/assets/service-corporate.jpg";
import wedImg from "@/assets/service-weddings.jpg";
import entImg from "@/assets/service-entertainment.jpg";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";

export const metadata: Metadata = {
    title: "Future Vision — Crafting Extraordinary Experiences",
    description: "Luxury weddings, corporate events and world-class entertainment, designed with precision, elegance, and vision.",
    openGraph: {
        title: "Future Vision — Crafting Extraordinary Experiences",
        description: "Luxury weddings, corporate events and world-class entertainment, designed with precision, elegance, and vision.",
    },
};

const SERVICES = [
    {
        n: "01",
        title: "Corporate Events",
        to: "/corporate-events",
        icon: Building2,
        image: corpImg,
        copy: "Conferences, product launches, gala dinners and executive experiences for global brands and boards.",
    },
    {
        n: "02",
        title: "Weddings",
        to: "/weddings",
        icon: Sparkles,
        image: wedImg,
        copy: "Private celebrations and destination weddings, composed with discretion and timeless aesthetic.",
    },
    {
        n: "03",
        title: "Entertainment & Artists",
        to: "/entertainment",
        icon: Music2,
        image: entImg,
        copy: "Celebrity management, live performances and cultural programming for the world's most exacting hosts.",
    },
] as const;

const PILLARS = [
    { n: "01", title: "Strategic Planning", body: "A considered framework behind every flourish — milestones, contingencies, and the quiet architecture of certainty." },
    { n: "02", title: "Creative Excellence", body: "Original concepts shaped by editors, set designers and couturiers — not stock packages." },
    { n: "03", title: "Global Standards", body: "From London to Lake Como, our protocol, partners and craft remain consistent." },
    { n: "04", title: "Seamless Execution", body: "An invisible operation: the guest never sees the seams, only the experience." },
];

const PORTFOLIO = [
    { title: "Maison Auriel, Capri", cat: "Weddings", year: "MMXXIV", image: p1 },
    { title: "Halcyon Summit, Geneva", cat: "Corporate", year: "MMXXIV", image: p2 },
    { title: "Soirée Noir, Marrakech", cat: "Entertainment", year: "MMXXIII", image: p3 },
    { title: "Verdant Pavilion, Kyoto", cat: "Weddings", year: "MMXXIII", image: p4 },
    { title: "Maison Verre Launch, Paris", cat: "Corporate", year: "MMXXIII", image: p5 },
    { title: "Atrium Sessions, Vienna", cat: "Entertainment", year: "MMXXII", image: p6 },
];

export default function Home() {
    return (
        <>
            {/* HERO */}
            <section className="relative isolate min-h-svh flex items-end overflow-hidden bg-background">
                <img
                    src={heroImg.src}
                    alt=""
                    aria-hidden
                    className="absolute inset-0 h-full w-full object-cover opacity-55"
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(180deg, oklch(0.16 0.005 60 / 0.65) 0%, oklch(0.14 0.005 60 / 0.55) 45%, var(--background) 100%)",
                    }}
                />
                <AbstractBackdrop hue="deep" className="mix-blend-soft-light" />
                <div className="relative mx-auto w-full max-w-[1400px] px-6 lg:px-12 pb-24 pt-40">
                    <div className="max-w-4xl">
                        <Eyebrow>An International Atelier</Eyebrow>
                        <h1 className="mt-8 font-display font-light text-cream leading-[0.98] tracking-[-0.02em] text-[clamp(3rem,9vw,8rem)]">
                            Crafting<br />
                            <em className="not-italic text-gold/95">Extraordinary</em><br />
                            Experiences
                        </h1>
                        <p className="mt-10 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
                            Luxury weddings, corporate events and world-class entertainment — designed with precision, elegance, and vision.
                        </p>
                        <div className="mt-12 flex flex-wrap gap-4">
                            <GoldButton to="/portfolio" variant="solid">Explore Services</GoldButton>
                            <GoldButton to="/contact" variant="outline">Start Your Event</GoldButton>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold/70">
                    <span className="eyebrow text-[0.6rem]!">Scroll</span>
                    <ChevronDown className="h-4 w-4" style={{ animation: "fv-scroll-cue 2.4s ease-in-out infinite" }} />
                </div>
            </section>

            {/* INTRODUCTION */}
            <section className="relative bg-background py-32 sm:py-44">
                <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-12 lg:px-12">
                    <div className="lg:col-span-5">
                        <SectionLabel index="I" label="Introduction" />
                        <EditorialHeading className="mt-10">
                            Where vision<br />becomes <em className="not-italic text-gold">reality</em>.
                        </EditorialHeading>
                    </div>
                    <div className="lg:col-span-6 lg:col-start-7 space-y-6 text-muted-foreground leading-[1.85]">
                        <p>
                            Future Vision is a private atelier serving an international circle of patrons, houses and boards. For more than a decade we have designed the gatherings that mark a life, a launch, a legacy.
                        </p>
                        <p>
                            We work in small numbers. Each commission is approached as a singular composition — a balance of place, hour, light, sound and ceremony, executed by an in-house team of producers, designers and protocol officers.
                        </p>
                        <p className="font-display italic text-cream/90 text-xl pt-4">
                            &mdash; The Atelier
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section className="relative bg-surface">
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12 pt-24 pb-10">
                    <div className="flex flex-wrap items-end justify-between gap-6">
                        <div>
                            <SectionLabel index="II" label="Disciplines" />
                            <EditorialHeading className="mt-8 max-w-xl">Three disciplines, one standard.</EditorialHeading>
                        </div>
                        <Link href="/portfolio" className="eyebrow gold-underline">View all work</Link>
                    </div>
                </div>
                <div className="border-t border-border">
                    {SERVICES.map((s) => (
                        <Link key={s.to} href={s.to} className="group block border-b border-border transition-colors hover:bg-surface-2">
                            <div className="mx-auto grid max-w-[1400px] grid-cols-12 items-center gap-6 px-6 lg:px-12 py-14 lg:py-20">
                                <div className="col-span-12 lg:col-span-1 font-display text-3xl text-gold/70">{s.n}</div>
                                <div className="col-span-12 lg:col-span-2">
                                    <div className="relative aspect-4/5 w-full overflow-hidden bg-surface-2">
                                        <img
                                            src={s.image.src}
                                            alt={s.title}
                                            loading="lazy"
                                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1200 ease-out group-hover:scale-[1.04]"
                                        />
                                        <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors duration-700" />
                                        <s.icon
                                            className="absolute bottom-3 left-3 h-5 w-5 text-gold/90"
                                            strokeWidth={1}
                                        />
                                    </div>
                                </div>
                                <h3 className="col-span-12 lg:col-span-4 font-display font-light text-cream text-3xl lg:text-5xl leading-[1.05] group-hover:text-gold transition-colors">{s.title}</h3>
                                <p className="col-span-12 lg:col-span-4 text-muted-foreground leading-relaxed">{s.copy}</p>
                                <div className="col-span-12 lg:col-span-1 flex lg:justify-end">
                                    <ArrowRight className="h-5 w-5 text-gold/60 group-hover:text-gold transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* PORTFOLIO */}
            <section className="relative bg-background py-32">
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <div className="flex flex-wrap items-end justify-between gap-6">
                        <div>
                            <SectionLabel index="III" label="Selected Commissions" />
                            <EditorialHeading className="mt-8">A quiet portfolio.</EditorialHeading>
                        </div>
                        <div className="flex gap-6">
                            {["All", "Corporate", "Weddings", "Entertainment"].map((c, i) => (
                                <span key={c} className={`eyebrow ${i === 0 ? "text-gold!" : "text-muted-foreground!"}`}>{c}</span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
                        {PORTFOLIO.map((p) => (
                            <article key={p.title} className="group relative aspect-4/5 overflow-hidden bg-surface">
                                <img
                                    src={p.image.src}
                                    alt={p.title}
                                    loading="lazy"
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1400 ease-out group-hover:scale-[1.05]"
                                />
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background:
                                            "linear-gradient(180deg, transparent 40%, oklch(0.12 0.005 60 / 0.85) 100%)",
                                    }}
                                />
                                <div className="absolute inset-0 flex flex-col justify-end p-8">
                                    <span className="eyebrow">{p.cat} &middot; {p.year}</span>
                                    <h3 className="mt-3 font-display text-2xl lg:text-3xl text-cream leading-tight">{p.title}</h3>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-16 flex justify-center">
                        <GoldButton to="/portfolio" variant="outline">View Full Portfolio</GoldButton>
                    </div>
                </div>
            </section>

            {/* PILLARS */}
            <section className="relative bg-surface-2 py-32">
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <SectionLabel index="IV" label="Why Future Vision" />
                    <EditorialHeading className="mt-8 max-w-2xl">Four pillars, quietly observed.</EditorialHeading>

                    <div className="mt-20 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
                        {PILLARS.map((p) => (
                            <div key={p.n} className="bg-surface-2 p-10 lg:p-12">
                                <span className="font-display text-2xl text-gold">{p.n}</span>
                                <Hairline className="mt-6 w-12!" />
                                <h3 className="mt-6 font-display text-2xl text-cream leading-tight">{p.title}</h3>
                                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIAL */}
            <section className="relative bg-background py-32 sm:py-44">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <span className="font-display text-[8rem] leading-none text-gold/50">&ldquo;</span>
                    <blockquote className="-mt-12 font-display text-3xl sm:text-4xl lg:text-5xl font-light italic text-cream leading-tight tracking-tight">
                        Future Vision composed a wedding that felt as much like a private exhibition as a celebration &mdash; restrained, unforgettable, entirely ours.
                    </blockquote>
                    <div className="mt-12 flex flex-col items-center gap-2">
                        <Hairline className="w-16!" />
                        <p className="eyebrow mt-2">A. &amp; L. de Marchand &middot; Lake Como</p>
                    </div>
                </div>
            </section>

            <ContactBand />
        </>
    );
}
