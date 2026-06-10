import type { Metadata } from "next";
import { ContactBand, EditorialHeading, Hairline, SectionLabel } from "@/components/luxury";
import { PageHero } from "@/components/page-hero";
import heroImg from "@/assets/service-weddings.jpg";
import p1 from "@/assets/p1.jpg";
import p4 from "@/assets/p4.jpg";
import wedA from "@/assets/wed-a.jpg";
import wedB from "@/assets/wed-b.jpg";
import wedC from "@/assets/wed-c.jpg";
import wedImg from "@/assets/service-weddings.jpg";

export const metadata: Metadata = {
  title: "Weddings — Future Vision",
  description: "Private weddings and destination celebrations, composed with discretion and timeless aesthetic.",
};

const SERVICES = [
  { t: "Full Design Direction", c: "Narrative, palette, florals, stationery and styling — composed as a single editorial." },
  { t: "Destination Production", c: "Permitting, logistics, vendors and guest travel managed end-to-end abroad." },
  { t: "Ceremony & Ritual", c: "Multi-faith, multi-day programmes honoured with cultural fluency." },
  { t: "Private Receptions", c: "Tablescapes, menus and entertainment of restaurant-grade refinement." },
];

const PROCESS = [
  { n: "I", t: "Introduction", c: "A private meeting with the couple to understand voice, family and intent." },
  { n: "II", t: "Composition", c: "A bound design book — venues, palette, gowns, florals and music." },
  { n: "III", t: "Atelier", c: "Tastings, fittings and rehearsal walks led by our senior team." },
  { n: "IV", t: "Celebration", c: "A weekend held with calm precision so the couple can simply be present." },
];

export default function WeddingsPage() {
  const GALLERY = [
    { t: "Maison Auriel, Capri", image: p1 },
    { t: "Verdant Pavilion, Kyoto", image: p4 },
    { t: "Château Lys, Provence", image: wedB },
    { t: "Saadiyat Sands, Abu Dhabi", image: wedImg },
    { t: "Lake House, Como", image: wedA },
    { t: "Highland Estate, Scotland", image: wedC },
  ];
  return (
    <>
      <PageHero
        eyebrow="Weddings"
        title={<>A wedding written like an <em className="not-italic text-gold">editorial</em>.</>}
        intro="From private ceremonies on the Amalfi Coast to multi-day celebrations across estates and palaces, our wedding atelier composes weekends of singular elegance."
        hue="warm"
        image={heroImg}
      />

      <section className="bg-surface py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionLabel index="I" label="Wedding Services" />
          <EditorialHeading className="mt-8 max-w-xl">What we compose.</EditorialHeading>
          <div className="mt-16 grid gap-px bg-border sm:grid-cols-2">
            {SERVICES.map((s) => (
              <div key={s.t} className="bg-surface p-12">
                <h3 className="font-display text-3xl text-cream">{s.t}</h3>
                <Hairline className="mt-5 w-12!" />
                <p className="mt-5 text-muted-foreground leading-relaxed">{s.c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionLabel index="II" label="Gallery" />
          <EditorialHeading className="mt-8">Weekends in memory.</EditorialHeading>
          <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY.map((g) => (
              <article key={g.t} className="group relative aspect-4/5 overflow-hidden bg-surface">
                <img src={g.image.src} alt={g.t} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1400 ease-out group-hover:scale-[1.05]" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, oklch(0.12 0.005 60 / 0.88) 100%)" }} />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <span className="eyebrow">Weddings</span>
                  <h3 className="mt-3 font-display text-2xl text-cream">{g.t}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-2 py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionLabel index="III" label="Experience Process" />
          <EditorialHeading className="mt-8">A composed journey.</EditorialHeading>
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

      <section className="bg-background py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-display text-[8rem] leading-none text-gold/50">&ldquo;</span>
          <blockquote className="-mt-12 font-display text-3xl sm:text-4xl font-light italic text-cream leading-tight">
            They held the entire weekend with such quiet grace &mdash; we never once felt the machinery beneath it.
          </blockquote>
          <Hairline className="w-16! mx-auto mt-10" />
          <p className="eyebrow mt-4">N. &amp; S. Cavalcanti &middot; Amalfi</p>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
